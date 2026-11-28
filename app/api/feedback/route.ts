import { Resend } from "resend";
import {
  buildFeedbackEmail,
  isAllowedOrigin,
  isRateLimited,
  parseFeedback,
} from "@/lib/feedback";

const resend = new Resend(process.env.RESEND_API_KEY);

function corsHeaders(origin: string | null): HeadersInit {
  if (!origin || !isAllowedOrigin(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  if (!isAllowedOrigin(origin)) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  const reply = (body: object, status = 200) =>
    Response.json(body, { status, headers });

  if (!isAllowedOrigin(origin)) {
    return reply({ ok: false, error: "Origin not allowed." }, 403);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return reply({ ok: false, error: "Invalid JSON." }, 400);
  }

  const parsed = parseFeedback(body);
  if (!parsed.ok) return reply({ ok: false, error: parsed.error }, 400);
  if ("drop" in parsed) return reply({ ok: true });

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return reply({ ok: false, error: "Too many messages. Try again later." }, 429);
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) return reply({ ok: false, error: "Missing CONTACT_TO_EMAIL." }, 500);
  const from =
    process.env.CONTACT_FROM_EMAIL || "Feedback <onboarding@resend.dev>";

  const { feedback } = parsed;
  const mail = buildFeedbackEmail(feedback, {
    userAgent: req.headers.get("user-agent") ?? "",
    country: req.headers.get("x-vercel-ip-country") ?? "",
    receivedAt: new Date(),
  });

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      ...(feedback.email ? { replyTo: feedback.email } : {}),
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
    if (error || !data?.id) {
      console.error("[feedback] Resend error:", error);
      return reply({ ok: false, error: "Failed to send." }, 502);
    }
  } catch (error) {
    console.error("[feedback] send failed:", error);
    return reply({ ok: false, error: "Failed to send." }, 502);
  }

  return reply({ ok: true });
}
