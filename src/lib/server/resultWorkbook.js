import "server-only";
import path from "path";
import { readFile } from "fs/promises";
import * as XLSX from "xlsx";

const DEFAULT_RESULTS_PATH = path.join(process.cwd(), "secure-data", "results.xlsx");
const ROLL_NO_PATTERN = /^[A-Za-z0-9-]{3,20}$/;

const normalizeRow = (row) => {
  const rollNumber = String(row.rollNumber ?? row.RollNumber ?? row.roll_no ?? "").trim();
  const statusRaw = String(row.status ?? row.Status ?? "").trim().toLowerCase();
  const ptmDetails = String(
    row.ptmDetails ?? row.PTMDetails ?? row.parentTeacherMeeting ?? ""
  ).trim();

  if (!rollNumber || !ROLL_NO_PATTERN.test(rollNumber) || !statusRaw) {
    return null;
  }

  const status = statusRaw === "passed" ? "passed" : "failed";
  return {
    rollNumber: rollNumber.toUpperCase(),
    status,
    ptmDetails,
  };
};

export const sanitizeRollNumber = (value) => String(value ?? "").trim().toUpperCase();

export const findResultByRollNumber = async (rollNumberInput) => {
  const rollNumber = sanitizeRollNumber(rollNumberInput);

  if (!ROLL_NO_PATTERN.test(rollNumber)) {
    return { error: "invalid_roll_number" };
  }

  const excelPath = process.env.RESULTS_EXCEL_PATH || DEFAULT_RESULTS_PATH;
  const workbookBuffer = await readFile(excelPath);
  const workbook = XLSX.read(workbookBuffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    return { error: "data_not_available" };
  }

  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], { defval: "" });
  const normalizedRows = rows.map(normalizeRow).filter(Boolean);
  const student = normalizedRows.find((item) => item.rollNumber === rollNumber);

  if (!student) {
    return { error: "not_found" };
  }

  return { student };
};
