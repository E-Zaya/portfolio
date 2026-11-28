import { describe, expect, it } from "vitest";
import {
  buildFeedbackEmail,
  isAllowedOrigin,
  isRateLimited,
  parseFeedback,
} from "./feedback";

const base = { app: "typemon-ios", message: "ボタンが押しにくい", elapsedMs: 8000 };

describe("parseFeedback", () => {
  it("受け取れる形を通す", () => {
    const r = parseFeedback({ ...base, kind: "bug", version: "1.4.2", os: "iOS 26.1" });
    expect(r).toMatchObject({ ok: true, feedback: { app: "typemon-ios", kind: "bug", version: "1.4.2" } });
  });
  it("罠の欄が埋まっていたら黙って捨てる", () => {
    expect(parseFeedback({ ...base, website: "http://spam" })).toEqual({ ok: true, drop: true });
  });
  it("開いてすぐの送信は捨てる", () => {
    expect(parseFeedback({ ...base, elapsedMs: 500 })).toEqual({ ok: true, drop: true });
  });
  it("知らないアプリ名・空・長すぎ・壊れたメールを断る", () => {
    expect(parseFeedback({ ...base, app: "other" }).ok).toBe(false);
    expect(parseFeedback({ ...base, message: "   " }).ok).toBe(false);
    expect(parseFeedback({ ...base, message: "a".repeat(2001) }).ok).toBe(false);
    expect(parseFeedback({ ...base, email: "not-mail" }).ok).toBe(false);
    expect(parseFeedback(null).ok).toBe(false);
  });
  it("知らない種類は null にする", () => {
    const r = parseFeedback({ ...base, kind: "<script>" });
    expect(r.ok && "feedback" in r && r.feedback.kind).toBe(null);
  });
});

describe("isAllowedOrigin", () => {
  it("Native (Origin なし)・自分のサイト・vercel.app・localhost を通す", () => {
    expect(isAllowedOrigin(null)).toBe(true);
    expect(isAllowedOrigin("https://ezaya.dev")).toBe(true);
    expect(isAllowedOrigin("https://type-mon.vercel.app")).toBe(true);
    expect(isAllowedOrigin("http://localhost:3000")).toBe(true);
  });
  it("ほかのサイトと http を断る", () => {
    expect(isAllowedOrigin("https://evil.example")).toBe(false);
    expect(isAllowedOrigin("https://ezaya.dev.evil.example")).toBe(false);
    expect(isAllowedOrigin("http://type-mon.vercel.app")).toBe(false);
    expect(isAllowedOrigin("garbage")).toBe(false);
  });
});

describe("isRateLimited", () => {
  it("10分に5通までで止める", () => {
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) expect(isRateLimited("1.2.3.4", now + i)).toBe(false);
    expect(isRateLimited("1.2.3.4", now + 10)).toBe(true);
    expect(isRateLimited("1.2.3.4", now + 11 * 60 * 1000)).toBe(false);
  });
});

describe("buildFeedbackEmail", () => {
  it("件名にアプリと版、本文に情報を入れ、HTML をエスケープする", () => {
    const r = parseFeedback({ ...base, kind: "idea", version: "1.4.2", message: "<b>hi</b>\n2行目" });
    if (!r.ok || !("feedback" in r)) throw new Error();
    const mail = buildFeedbackEmail(r.feedback, { userAgent: "UA", country: "MN", receivedAt: new Date(0) });
    expect(mail.subject).toBe("[Feedback] TypeMon iPhone 1.4.2 · ほしい — <b>hi</b>");
    expect(mail.html).toContain("&lt;b&gt;hi&lt;/b&gt;");
    expect(mail.html).not.toContain("<b>hi</b>");
    expect(mail.text).toContain("国: MN");
  });
});
