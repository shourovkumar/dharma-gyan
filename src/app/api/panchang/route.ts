import { NextResponse } from "next/server";

const PANCHANG_API_URL =
  "https://api.navamsha.in/api/v1/panchang/full";

const DEFAULT_LOCATION = {
  name: "Dhaka, Bangladesh",
  latitude: 23.8103,
  longitude: 90.4125,
  timezone: 6,
};

function isRecord(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isValidDateString(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function errorResponse(
  code: string,
  message: string,
  status: number,
) {
  return NextResponse.json(
    { error: code, message },
    { status },
  );
}

export async function GET(request: Request) {
  const apiKey = process.env.NAVAMSHA_API_KEY;

  if (!apiKey) {
    return errorResponse(
      "API_KEY_MISSING",
      "The Panchang API key is not configured.",
      503,
    );
  }

  const url = new URL(request.url);
  const dateString = url.searchParams.get("date");
  const hourString = url.searchParams.get("hour");
  const minuteString = url.searchParams.get("minute");

  if (!dateString || !isValidDateString(dateString)) {
    return errorResponse(
      "INVALID_DATE",
      "Provide a valid date in YYYY-MM-DD format.",
      400,
    );
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const hours =
    hourString === null ? 12 : Number(hourString);

  const minutes =
    minuteString === null ? 0 : Number(minuteString);

  if (
    !Number.isInteger(hours) ||
    hours < 0 ||
    hours > 23 ||
    !Number.isInteger(minutes) ||
    minutes < 0 ||
    minutes > 59
  ) {
    return errorResponse(
      "INVALID_TIME",
      "Provide a valid time.",
      400,
    );
  }

  try {
    const upstream = await fetch(PANCHANG_API_URL, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year,
        month,
        date: day,
        hours,
        minutes,
        latitude: DEFAULT_LOCATION.latitude,
        longitude: DEFAULT_LOCATION.longitude,
        timezone: DEFAULT_LOCATION.timezone,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      if (
        upstream.status === 401 ||
        upstream.status === 403
      ) {
        return errorResponse(
          "API_KEY_REJECTED",
          "The Panchang provider rejected the API key.",
          502,
        );
      }

      return errorResponse(
        "PROVIDER_ERROR",
        "The Panchang service could not complete the request.",
        502,
      );
    }

    const result: unknown = await upstream.json();

    if (
      !isRecord(result) ||
      !isRecord(result.output)
    ) {
      return errorResponse(
        "INVALID_PROVIDER_RESPONSE",
        "The Panchang service returned an unexpected response.",
        502,
      );
    }

    return NextResponse.json({
      date: dateString,
      location: DEFAULT_LOCATION.name,
      timezone: "Asia/Dhaka",
      data: result.output,
    });
  } catch {
    return errorResponse(
      "PANCHANG_UNAVAILABLE",
      "Could not connect to the Panchang service.",
      502,
    );
  }
}
