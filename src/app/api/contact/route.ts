import { Resend } from "resend";
import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT = 10;
const RATE_WINDOW = 60 * 1000;

const rateLimit = new Map<string, { count: number; timestamp: number }>();

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .slice(0, 5000);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.timestamp > RATE_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const honeypot = body.website;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedPhone = sanitize(phone || "");
    const sanitizedInterest = sanitize(interest || "");
    const sanitizedMessage = sanitize(message);

    if (!process.env.RESEND_API_KEY) {
      console.error("DEBUG: RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        { error: "Contact service is not configured (API key missing)." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: "Ecovision Academy Contact <onboarding@resend.dev>",
        to: "kundur947@gmail.com",
        subject: `New Inquiry from ${sanitizedName}: ${sanitizedInterest}`,
        text: `
          Name: ${sanitizedName}
          Email: ${sanitizedEmail}
          Phone: ${sanitizedPhone}
          Interest: ${sanitizedInterest}
          Message: ${sanitizedMessage}
        `,
        replyTo: sanitizedEmail,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ data });
    } catch (resendError: unknown) {
      console.error("Resend SDK error:", resendError);
      const errorMessage = resendError instanceof Error ? resendError.message : "Email delivery failed";
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  } catch (error: unknown) {
    console.error("Caught error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}