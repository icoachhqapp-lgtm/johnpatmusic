import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "songs@johnpatmusic.com";
const FROM_EMAIL = "JohnPat Website <website@johnpatmusic.com>";

const INQUIRY_TYPES = new Set([
  "Recording Inquiry",
  "Licensing Inquiry",
  "Producer or Publisher Inquiry",
  "Collaboration",
  "General Question",
]);

interface InquiryBody {
  name?: string;
  email?: string;
  companyArtistBand?: string;
  inquiryType?: string;
  songTitle?: string;
  message?: string;
  pageUrl?: string;
  honeypot?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: InquiryBody;

  try {
    body = (await request.json()) as InquiryBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Bot trap: reject silently (looks successful, no email sent)
  if (body.honeypot && body.honeypot.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const companyArtistBand = body.companyArtistBand?.trim() ?? "";
  const inquiryType = body.inquiryType?.trim() ?? "";
  const songTitle = body.songTitle?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const pageUrl = body.pageUrl?.trim() ?? "";

  if (!name || !email || !message || !inquiryType) {
    return NextResponse.json(
      {
        success: false,
        error: "Please complete all required fields before submitting.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!INQUIRY_TYPES.has(inquiryType)) {
    return NextResponse.json(
      { success: false, error: "Invalid inquiry type." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
      },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "long",
  });

  const subject = `JohnPat Inquiry — ${inquiryType}${
    songTitle ? ` — ${songTitle}` : ""
  }`;

  const text = [
    "New website inquiry from johnpatmusic.com",
    "",
    `Inquiry Type: ${inquiryType}`,
    `Song of Interest: ${songTitle || "N/A"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Artist / Band: ${companyArtistBand || "N/A"}`,
    "",
    "Message:",
    message,
    "",
    `Source Page: ${pageUrl || "N/A"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("[inquiry] Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[inquiry] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.",
      },
      { status: 500 },
    );
  }
}
