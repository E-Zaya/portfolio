"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

// Heroの右側: 架空プレビューではなく「実際に動いているもの」を見せるショーケース。
// PC = Overland Beyond(「選ばれる」の実例) / スマホ = タイムアプリ(「楽になる」の実例)
// ※旧 HeroVisual(Zaya Studioプレビュー)は温存中 — 別の場所で再利用予定。

const OVERLAND_URL = "https://overlandbeyond.com";
// TODO: ストアリンクが確定したら差し替える(App Store / Google Play)
const TIME_APP_URL: string | null = null;

const ZAZA_IMAGE = "/Zaza/chira-zaza.png";

export default function HeroShowcase({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero.showcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto"
    >
      {/* Zaza — ラップトップの上から覗く */}
      <Image
        src={ZAZA_IMAGE}
        alt=""
        aria-hidden
        width={140}
        height={140}
        className="pointer-events-none absolute -top-12 right-8 z-0 w-24 rotate-6 md:-top-14 md:w-28"
      />

      {/* LIVE バッジ */}
      <span
        className="absolute -top-3 left-4 z-30 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[0.08em]"
        style={{
          color: "var(--color-success)",
          borderColor:
            "color-mix(in srgb, var(--color-success) 45%, transparent)",
          background:
            "color-mix(in srgb, var(--color-success) 12%, var(--background))",
        }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--color-success)" }}
        />
        {t.liveBadge}
      </span>

      {/* ラップトップ: Overland Beyond(実案件) */}
      <a
        href={OVERLAND_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.laptopLabel} — ${t.open}`}
        className="group relative z-10 block overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-1"
        style={{
          borderColor: "color-mix(in srgb, var(--foreground) 16%, transparent)",
          background: "#0d1b17",
          boxShadow: "var(--shadow)",
          marginRight: "72px",
        }}
      >
        <div
          className="flex items-center gap-1.5 px-4 py-2.5"
          style={{ background: "#112420" }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: "#2a4a40" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "#2a4a40" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "#2a4a40" }} />
          <span
            className="ml-auto font-mono text-[9px] tracking-[0.12em]"
            style={{ color: "#7d9a8d" }}
          >
            overlandbeyond.com
          </span>
        </div>

        <div className="px-5 pb-5 pt-5 sm:px-6">
          <p
            className="text-[9px] font-semibold tracking-[0.26em]"
            style={{ color: "#9db8ad" }}
          >
            MONGOLIA · LUXURY EXPEDITIONS
          </p>
          <p
            className="mt-2 text-xl font-bold leading-snug sm:text-2xl"
            style={{ color: "#f4f7f5" }}
          >
            Travel beyond limits
          </p>
          <div className="mt-3 flex gap-1.5">
            {["EN", "中文", "한국어"].map((lang) => (
              <span
                key={lang}
                className="rounded-full border px-2.5 py-0.5 text-[9px]"
                style={{ borderColor: "#3a5a4e", color: "#cfe0d8" }}
              >
                {lang}
              </span>
            ))}
          </div>
          <span
            className="mt-4 inline-block rounded-md px-3.5 py-1.5 text-[11px] font-bold"
            style={{ background: "#e8b04b", color: "#0d1b17" }}
          >
            Apply for expedition →
          </span>
        </div>

        <div
          className="flex flex-col gap-0.5 border-t px-5 py-2.5 sm:px-6"
          style={{ borderColor: "#1d3a31" }}
        >
          <span className="text-[10px] font-bold" style={{ color: "#cfe0d8" }}>
            {t.laptopLabel}
          </span>
          <span
            className="text-[9.5px] leading-relaxed"
            style={{ color: "#7d9a8d" }}
          >
            {t.laptopCaption}
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </a>

      {/* スマホ: タイムアプリ(ストア公開中) */}
      <TimeAppPhone
        label={t.phoneLabel}
        caption={t.phoneCaption}
        timerLabel={t.phoneTimerLabel}
        rows={t.phoneRows}
      />
    </motion.div>
  );
}

function TimeAppPhone({
  label,
  caption,
  timerLabel,
  rows,
}: {
  label: string;
  caption: string;
  timerLabel: string;
  rows: { name: string; value: string }[];
}) {
  const body = (
    <>
      <div className="flex justify-center pt-2.5">
        <span
          className="h-1.5 w-12 rounded-full"
          style={{
            background: "color-mix(in srgb, var(--foreground) 12%, transparent)",
          }}
        />
      </div>

      <div className="px-4 pb-3 pt-2.5">
        <p className="text-[10px] text-muted">{timerLabel}</p>
        <p className="mt-0.5 font-mono text-[22px] font-bold leading-none text-foreground">
          07:42:15
        </p>
        <div
          className="mt-2.5 h-1.5 overflow-hidden rounded-full"
          style={{
            background: "color-mix(in srgb, var(--accent-1) 16%, transparent)",
          }}
        >
          <span
            className="block h-full w-[62%] rounded-full"
            style={{ background: "var(--accent-1)" }}
          />
        </div>

        <div className="mt-3 flex flex-col gap-1.5">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[10px]"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-soft">{row.name}</span>
              <span className="font-mono text-foreground">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex gap-1">
          <span
            className="rounded border px-1.5 py-0.5 text-[8px] font-medium text-soft"
            style={{ borderColor: "var(--border)" }}
          >
             App Store
          </span>
          <span
            className="rounded border px-1.5 py-0.5 text-[8px] font-medium text-soft"
            style={{ borderColor: "var(--border)" }}
          >
            ▶ Google Play
          </span>
        </div>
      </div>

      <div
        className="flex flex-col gap-0.5 border-t px-4 py-2"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="text-[9.5px] font-bold"
          style={{ color: "var(--color-success)" }}
        >
          {label}
        </span>
        <span className="text-[8.5px] leading-relaxed text-muted">
          {caption}
        </span>
      </div>
    </>
  );

  const frameClass =
    "absolute -bottom-10 right-0 z-20 block w-[160px] overflow-hidden rounded-[24px] border backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1";
  const frameStyle = {
    borderColor: "color-mix(in srgb, var(--foreground) 18%, transparent)",
    background: "color-mix(in srgb, var(--background-2) 92%, transparent)",
    boxShadow: "var(--shadow)",
  } as const;

  // ストアリンク確定後は <a> に切り替わる
  if (TIME_APP_URL) {
    return (
      <a
        href={TIME_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={frameClass}
        style={frameStyle}
      >
        {body}
      </a>
    );
  }

  return (
    <div className={frameClass} style={frameStyle}>
      {body}
    </div>
  );
}
