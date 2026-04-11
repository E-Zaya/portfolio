import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (company) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    if (!to) {
      return Response.json(
        { ok: false, error: "Missing CONTACT_TO_EMAIL." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
          <h2 style="margin-bottom: 16px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; padding: 12px; background: #f5f5f5; border-radius: 8px;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 },
    );
  }
}