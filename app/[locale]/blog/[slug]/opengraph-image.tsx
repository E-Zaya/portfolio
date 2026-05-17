import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/notion";
import { isLocale, type Locale } from "@/lib/i18n";

// Next.js 規約: このファイルはルート `/[locale]/blog/[slug]` の OG 画像として
// 自動採用される。`next/og` の ImageResponse は Edge 互換の SVG ベースで描画。
export const runtime = "nodejs";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Blog post cover";

export default async function BlogPostOG({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const post = await getBlogPost(slug, locale).catch(() => null);

  const title = post?.title ?? "Zaya — Blog";
  const summary = post?.summary ?? "";
  const category = post?.category ?? "";
  const date = post?.date ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #081120 0%, #111827 55%, #1f2937 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* グラデーショングロー（accent-1 → accent-3 のコーナー光） */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(168, 85, 247, 0.18) 45%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />

        {/* 上段: ロゴと言語 */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #a855f7, #38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.1 }}>
              Zaya
            </span>
            <span
              style={{
                fontSize: 13,
                color: "rgba(226, 232, 240, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
              }}
            >
              ezaya.dev / blog
            </span>
          </div>
        </div>

        {/* 中段: タイトルと要約 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            zIndex: 1,
            maxWidth: 980,
          }}
        >
          {category ? (
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#38bdf8",
              }}
            >
              {category}
            </span>
          ) : null}
          <h1
            style={{
              fontSize: title.length > 40 ? 56 : 68,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#f8fafc",
            }}
          >
            {title}
          </h1>
          {summary ? (
            <p
              style={{
                fontSize: 24,
                margin: 0,
                lineHeight: 1.5,
                color: "rgba(226, 232, 240, 0.85)",
                /* 長すぎる時は2行で切れるよう display:-webkit-box が無いとうまく出ないため、文字数で制御 */
              }}
            >
              {summary.length > 140 ? `${summary.slice(0, 140)}…` : summary}
            </p>
          ) : null}
        </div>

        {/* 下段: 日付＆locale */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            color: "rgba(226, 232, 240, 0.6)",
            fontSize: 18,
          }}
        >
          <span>{date}</span>
          <span
            style={{
              padding: "8px 18px",
              borderRadius: 9999,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {locale}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
