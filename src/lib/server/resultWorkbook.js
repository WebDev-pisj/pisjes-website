import "server-only";
import path from "path";
import { readFile } from "fs/promises";
import * as XLSX from "xlsx";

const DEFAULT_RESULTS_PATH = path.join(process.cwd(), "secure-data", "results.ods");
const PRODUCTION_ENV = "production";
const ROLL_NO_PATTERN = /^[A-Za-z0-9-]{3,20}$/;
const EXPECTED_COLUMNS = [
  "Reg_No",
  "Name",
  "Class",
  "Result",
  "Iqama_Expired",
  "Appointment_Date",
  "Appointment_Time",
  "is_paid",
];

const normalizeHeader = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const normalizeStatus = (value) => {
  const raw = String(value ?? "").trim().toLowerCase();
  if (!raw) return "";

  if (raw === "passed" || raw === "pass") return "Passed";
  if (raw === "failed" || raw === "fail" || raw === "not passed" || raw === "not_passed") {
    return "Failed";
  }

  return String(value ?? "").trim();
};

const normalizeRow = (row) => {
  const rollNumber = String(
    row.Reg_No ?? row.reg_no ?? row.RegNo ?? row.rollNumber ?? row.RollNumber ?? row.roll_no ?? ""
  ).trim();
  const status = normalizeStatus(row.Result ?? row.result ?? row.Status ?? row.status ?? "");
  const iqamaExpired = String(
    row.Iqama_Expired ?? row.iqama_expired ?? row.iqamaExpired ?? ""
  ).trim();
  const appointmentDate = String(
    row.Appointment_Date ?? row.appointment_date ?? row.appointmentDate ?? ""
  ).trim();
  const appointmentTime = String(
    row.Appointment_Time ?? row.appointment_time ?? row.appointmentTime ?? ""
  )
    .trim()
    .replace(/\s+/g, " ");
  const isPaid = String(row.is_paid ?? row.Is_Paid ?? row.isPaid ?? "").trim();

  if (!rollNumber || !ROLL_NO_PATTERN.test(rollNumber) || !status) {
    return null;
  }

  return {
    rollNumber: rollNumber.toUpperCase(),
    status,
    iqamaExpired,
    appointmentDate,
    appointmentTime,
    isPaid,
  };
};

export const sanitizeRollNumber = (value) => String(value ?? "").trim().toUpperCase();

const loadWorkbookBuffer = async () => {
  const isProduction = process.env.NODE_ENV === PRODUCTION_ENV;
  const blobUrl = process.env.RESULTS_BLOB_URL;

  if (isProduction && blobUrl) {
    const response = await fetch(blobUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Unable to fetch blob file. Status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  const excelPath = process.env.RESULTS_EXCEL_PATH || DEFAULT_RESULTS_PATH;
  return readFile(excelPath);
};

const mapRowsFromSheet = (sheet) => {
  const matrix = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    raw: false,
    defval: "",
    blankrows: false,
  });

  if (!matrix.length) return [];

  const expected = EXPECTED_COLUMNS.map(normalizeHeader);
  const headerRowIndex = matrix.findIndex((row) => {
    const normalizedRow = row.map(normalizeHeader);
    return expected.every((column) => normalizedRow.includes(column));
  });

  let columnNames = EXPECTED_COLUMNS;
  let dataRows = matrix;

  if (headerRowIndex >= 0) {
    const detectedHeaders = matrix[headerRowIndex].map((cell) => String(cell ?? "").trim());
    const rowsAfterHeader = matrix.slice(headerRowIndex + 1);

    if (rowsAfterHeader.length > 0) {
      // Standard layout: header row before data rows.
      columnNames = detectedHeaders;
      dataRows = rowsAfterHeader;
    } else {
      // Footer layout: header row appears at end, data rows are above it.
      columnNames = detectedHeaders;
      dataRows = matrix.slice(0, headerRowIndex);
    }
  }

  return dataRows.map((row) => {
    const mapped = {};
    columnNames.forEach((name, index) => {
      mapped[name] = String(row[index] ?? "").trim();
    });
    return mapped;
  });
};

export const findResultByRollNumber = async (rollNumberInput) => {
  const rollNumber = sanitizeRollNumber(rollNumberInput);

  if (!ROLL_NO_PATTERN.test(rollNumber)) {
    return { error: "invalid_roll_number" };
  }

  const workbookBuffer = await loadWorkbookBuffer();
  const workbook = XLSX.read(workbookBuffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    return { error: "data_not_available" };
  }

  const rows = mapRowsFromSheet(workbook.Sheets[firstSheetName]);
  const normalizedRows = rows.map(normalizeRow).filter(Boolean);
  const student = normalizedRows.find((item) => item.rollNumber === rollNumber);

  if (!student) {
    return { error: "not_found" };
  }

  return { student };
};
