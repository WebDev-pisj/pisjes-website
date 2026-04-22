import { NextResponse } from "next/server";
import { findResultByRollNumber } from "@/lib/server/resultWorkbook";

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestLogByIp = new Map();

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

const getClientIp = (request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "unknown";
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const history = requestLogByIp.get(ip) || [];
  const recentHistory = history.filter((timestamp) => now - timestamp <= RATE_LIMIT_WINDOW_MS);

  if (recentHistory.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLogByIp.set(ip, recentHistory);
    return true;
  }

  recentHistory.push(now);
  requestLogByIp.set(ip, recentHistory);
  return false;
};

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in a minute." },
        { status: 429, headers: noStoreHeaders }
      );
    }

    const body = await request.json();
    const rollNumber = body?.rollNumber;

    if (!rollNumber) {
      return NextResponse.json(
        { error: "Roll number is required." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    const result = await findResultByRollNumber(rollNumber);

    if (result.error === "invalid_roll_number") {
      return NextResponse.json(
        { error: "Please enter a valid roll number." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    if (result.error === "not_found") {
      return NextResponse.json(
        { error: "Result not found for this roll number." },
        { status: 404, headers: noStoreHeaders }
      );
    }

    if (result.error) {
      return NextResponse.json(
        { error: "Result data is unavailable right now." },
        { status: 503, headers: noStoreHeaders }
      );
    }

    const { student } = result;
    const normalizedStatus = student.status.toLowerCase();
    const isPassed = normalizedStatus === "passed";
    return NextResponse.json(
      {
        rollNumber: student.rollNumber,
        status: student.status,
        message: isPassed
          ? "You are passed."
          : `Your status is ${student.status}.`,
        iqamaExpired: student.iqamaExpired,
        appointmentDate: student.appointmentDate,
        appointmentTime: student.appointmentTime,
        isPaid: student.isPaid,
      },
      { headers: noStoreHeaders }
    );
  } catch (error) {
    console.error("Result lookup error:", error);
    return NextResponse.json(
      { error: "Unable to check the result right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
