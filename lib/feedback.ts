// 全アプリ共通の Feedback 受け口 (/api/feedback) の入力チェックとメール本文。
// 送ってくるのは ezaya.dev・各 Web・各 Native アプリ。宛先は問い合わせと同じ CONTACT_TO_EMAIL。

/** 送ってよいアプリと、メールの件名に出す名前 */
export const FEEDBACK_APPS = {
  portfolio: "ezaya.dev",
  "typemon-web": "TypeMon Web",
  "typemon-ios": "TypeMon iPhone",
  "typemon-mac": "TypeMon Mac",
  "futari-web": "Futari Web",
  "futari-ios": "Futari iPhone",
  "sainbainauu-web": "Sain baina uu Web",
  "sainbainauu-app": "Sain baina uu App",
} as const;

export type FeedbackApp = keyof typeof FEEDBACK_APPS;

export const FEEDBACK_KINDS = {
  bug: "困った",
  idea: "ほしい",
  love: "よかった",
} as const;

export type FeedbackKind = keyof typeof FEEDBACK_KINDS;

export const MESSAGE_MAX = 2000;
/** 窓を開いてからこれより早い送信は bot とみなす */
export const MIN_ELAPSED_MS = 3000;

export type Feedback = {
  app: FeedbackApp;
  kind: FeedbackKind | null;
  message: string;
  email: string;
  version: string;
  os: string;
  page: string;
  locale: string;
};

export type ParseResult =
  | { ok: true; feedback: Feedback }
  | { ok: true; drop: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function isFeedbackApp(value: string): value is FeedbackApp {
  return Object.hasOwn(FEEDBACK_APPS, value);
}

/**
 * 送られてきた JSON を確かめる。bot らしいもの (罠の欄・早すぎる送信) は
 * drop を返し、呼び出し側は何も送らずに成功を返す (bot に失敗を教えない)。
 */
export function parseFeedback(body: unknown): ParseResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid body." };
  }
  const b = body as Record<string, unknown>;

  if (text(b.website, 200)) return { ok: true, drop: true };
  if (typeof b.elapsedMs === "number" && b.elapsedMs < MIN_ELAPSED_MS) {
    return { ok: true, drop: true };
  }

  const app = text(b.app, 40);
  if (!isFeedbackApp(app)) return { ok: false, error: "Unknown app." };

  const rawMessage = typeof b.message === "string" ? b.message.trim() : "";
  if (!rawMessage) return { ok: false, error: "Message is empty." };
  if (rawMessage.length > MESSAGE_MAX) {
    return { ok: false, error: "Message is too long." };
  }

  const email = text(b.email, 200);
  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, error: "Invalid email." };
  }

  const kind = text(b.kind, 10);

  return {
    ok: true,
    feedback: {
      app,
      kind: Object.hasOwn(FEEDBACK_KINDS, kind) ? (kind as FeedbackKind) : null,
      message: rawMessage,
      email,
      version: text(b.version, 40),
      os: text(b.os, 80),
      page: text(b.page, 200),
      locale: text(b.locale, 20),
    },
  };
}

/** ブラウザからの送信を受けてよいサイト。Native アプリは Origin を付けない */
export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  try {
    const { protocol, hostname } = new URL(origin);
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    if (protocol !== "https:") return false;
    return (
      hostname === "ezaya.dev" ||
      hostname.endsWith(".ezaya.dev") ||
      hostname.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

// 1つの IP から 10 分に 5 通まで。serverless の instance ごとの記憶なので
// 完全ではないが、同じ所からの連打は止められる。
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export type FeedbackContext = {
  userAgent: string;
  country: string;
  receivedAt: Date;
};

export function buildFeedbackEmail(f: Feedback, ctx: FeedbackContext) {
  const appName = FEEDBACK_APPS[f.app];
  const kind = f.kind ? FEEDBACK_KINDS[f.kind] : "";
  const firstLine = f.message.split("\n")[0].slice(0, 40);
  const subject = `[Feedback] ${appName}${f.version ? ` ${f.version}` : ""}${
    kind ? ` · ${kind}` : ""
  } — ${firstLine}`;

  const rows: [string, string][] = [
    ["アプリ", appName],
    ["種類", kind || "-"],
    ["版", f.version || "-"],
    ["画面", f.page || "-"],
    ["OS / 端末", f.os || "-"],
    ["言語", f.locale || "-"],
    ["返信先", f.email || "(なし)"],
    ["国", ctx.country || "-"],
    ["受信", ctx.receivedAt.toISOString()],
    ["User-Agent", ctx.userAgent || "-"],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
      <div style="white-space: pre-wrap; padding: 14px; background: #f5f5f5; border-radius: 8px; font-size: 15px;">${escapeHtml(
        f.message,
      )}</div>
      <table style="margin-top: 16px; font-size: 13px; color: #444; border-collapse: collapse;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding: 2px 12px 2px 0; color: #888; vertical-align: top;">${escapeHtml(
                k,
              )}</td><td style="padding: 2px 0;">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  const textBody = `${f.message}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  return { subject, html, text: textBody };
}
