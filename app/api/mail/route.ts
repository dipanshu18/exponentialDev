import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { ClientEmail } from "@/emails/email";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_APP_MAIL,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const emailHtml = render(ClientEmail({ name, message, subject }));

    const options = {
      from: email,
      to: process.env.GMAIL_APP_MAIL,
      subject: subject,
      html: emailHtml,
    };

    await transporter.sendMail(options);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
