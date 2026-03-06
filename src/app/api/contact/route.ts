import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, interest, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("DEBUG: RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        { error: "Contact service is not configured (API key missing)." },
        { status: 503 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: "Ecovision <onboarding@resend.dev>",
        to: "academyecovision@gmail.com",
        subject: `New Inquiry from ${name}: ${interest}`,
        text: `
          Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Interest: ${interest}
        Message: ${message}
      `,
        replyTo: email,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ data });
    } catch (resendError: any) {
      console.error("Resend SDK error:", resendError);
      return NextResponse.json({ error: "Email delivery failed: " + resendError.message }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Caught error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
