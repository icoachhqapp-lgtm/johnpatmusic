import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "songs@johnpatmusic.com";

const INQUIRY_TYPES = new Set([
  "Recording Inquiry",
  "Licensing Inquiry",
  "Producer or Publisher Inquiry",
  "Collaboration",
  "General Question",
]);

interface InquiryPayload {
  name?: string;
  email?: string;
  company?: string;
  inquiryType?: string;
  songInterest?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: InquiryPayload;

  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const inquiryType = body.inquiryType?.trim() ?? "";
  const songInterest = body.songInterest?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message || !inquiryType) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address." },
      { status: 400 },
    );
  }

  if (!INQUIRY_TYPES.has(inquiryType)) {
    return NextResponse.json(
      { ok: false, error: "Invalid inquiry type." },
      { status: 400 },
    );
  }

  const subject = `JohnPat Inquiry — ${inquiryType}${
    songInterest ? ` — ${songInterest}` : ""
  }`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Artist / Band: ${company || "N/A"}`,
    `Inquiry Type: ${inquiryType}`,
    `Song of Interest: ${songInterest || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  // Local/dev without a mail provider: accept and log so UX can be tested.
  // Production requires RESEND_API_KEY — otherwise return failure (form fields preserved).
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact inquiry — mock success]", {
        to: TO_EMAIL,
        subject,
        from: email,
      });
      return NextResponse.json({ ok: true, mocked: true });
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "JohnPat Music <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("[contact inquiry] Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact inquiry] Unexpected error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
      },
      { status: 500 },
    );
  }
}
