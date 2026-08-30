"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

// Heroの右側:「生きているモック」— 静止画ではなく、モック自身が働き続ける。
// ラップトップ = 言語が自動で切り替わる(多言語対応の実演)
// スマホ = タイマーが実時間で進み、数秒おきに打刻トーストが入る(楽になるの実演)
// タップでもトーストが出るので「さわってみて！」が本当になる。

const OVERLAND_URL = "https://overlandbeyond.com";
const SHOW_HAND_NOTE = true;

const ZAZA_IMAGE = "/Zaza/chira-zaza.png";

/* ラップトップ内の多言語ループ(モック内の架空コピー) */
const LAPTOP_LANGS = [
  { chip: "EN", eyebrow: "MONGOLIA · LUXURY EXPEDITIONS", title: "Travel beyond limits", cta: "Apply for expedition →" },
  { chip: "中文", eyebrow: "蒙古 · 奢华远征之旅", title: "超越极限的旅程", cta: "立即申请远征 →" },
  { chip: "한국어", eyebrow: "몽골 · 럭셔리 원정 여행", title: "한계를 넘는 여행", cta: "원정 신청하기 →" },
] as const;

const LANG_INTERVAL_MS = 3200;
const TOAST_INTERVAL_MS = 6400;
const TOAST_VISIBLE_MS = 2400;

export default function HeroShowcase({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero.showcase;
  const reduce = useReducedMotion();

  // 言語ループ
  const [langIndex, setLangIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setLangIndex((i) => (i + 1) % LAPTOP_LANGS.length),
      LANG_INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  // 打刻トースト(自動 + タップでも発火) — Zazaもいっしょに反応する
  const [toastVisible, setToastVisible] = useState(false);
  useEffect(() => {
    if (reduce) return;
    let hideId: number | undefined;
    const show = () => {
      setToastVisible(true);
      hideId = window.setTimeout(() => setToastVisible(false), TOAST_VISIBLE_MS);
    };
    const firstId = window.setTimeout(show, 2200);
    const loopId = window.setInterval(show, TOAST_INTERVAL_MS);
    return () => {
      window.clearTimeout(firstId);
      window.clearInterval(loopId);
      if (hideId) window.clearTimeout(hideId);
    };
  }, [reduce]);

  function pokePhone() {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), TOAST_VISIBLE_MS);
  }

  const lang = LAPTOP_LANGS[langIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto"
    >
      {/* Zaza — ラップトップの上から覗く。トーストが出るとぴょこんと跳ねる */}
      <Image
        src={ZAZA_IMAGE}
        alt=""
        aria-hidden
        width={140}
        height={140}
        className={`pointer-events-none absolute -top-12 right-8 z-0 w-24 rotate-6 md:-top-14 md:w-28 ${
          toastVisible ? "animate-zaza-hop" : ""
        }`}
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

      {/* ラップトップ: Overland Beyond(実案件) — 言語が自動で切り替わる */}
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

        {/* pr: 右に重なるスマホ(幅160px, ラップトップに約88pxかかる)の下に
            テキストが潜り込んで見切れないよう余白を確保 */}
        <div className="py-5 pl-5 pr-24 sm:pl-6 sm:pr-28">
          <p
            key={`eyebrow-${langIndex}`}
            className="hero-mock-fade text-[9px] font-semibold tracking-[0.26em]"
            style={{ color: "#9db8ad" }}
          >
            {lang.eyebrow}
          </p>
          <p
            key={`title-${langIndex}`}
            className="hero-mock-fade mt-2 min-h-[3.6em] text-xl font-bold leading-snug sm:text-2xl"
            style={{ color: "#f4f7f5" }}
          >
            {lang.title}
          </p>
          <div className="mt-3 flex gap-1.5">
            {LAPTOP_LANGS.map((l, i) => (
              <span
                key={l.chip}
                className="rounded-full border px-2.5 py-0.5 text-[9px] transition-colors duration-300"
                style={
                  i === langIndex
                    ? { borderColor: "#e8b04b", color: "#0d1b17", background: "#e8b04b", fontWeight: 700 }
                    : { borderColor: "#3a5a4e", color: "#cfe0d8" }
                }
              >
                {l.chip}
              </span>
            ))}
          </div>
          <span
            key={`cta-${langIndex}`}
            className="hero-mock-cta hero-mock-fade mt-4 inline-block rounded-md px-3.5 py-1.5 text-[11px] font-bold"
            style={{ background: "#e8b04b", color: "#0d1b17" }}
          >
            {lang.cta}
          </span>
        </div>

        <div
          className="flex flex-col gap-0.5 border-t py-2.5 pl-5 pr-24 sm:pl-6 sm:pr-28"
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

      {/* スマホ: タイムアプリ(ストア公開中) — タイマーが実時間で進む */}
      <TimeAppPhone
        label={t.phoneLabel}
        caption={t.phoneCaption}
        timerLabel={t.phoneTimerLabel}
        rows={t.phoneRows}
        toast={t.phoneToast}
        toastVisible={toastVisible}
        onPoke={pokePhone}
        reduce={!!reduce}
      />

      {/* 手書き注釈 — 「さわってみて！」+ くるっとした矢印(SHOW_HAND_NOTEで切替) */}
      {SHOW_HAND_NOTE && (
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-2 z-0 flex items-end gap-1 sm:left-4"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 48 44"
          className="h-9 w-10"
          fill="none"
          style={{ color: "var(--marker-ink)" }}
        >
          {/* くるっと上向きの手描き風矢印 */}
          <path
            d="M6 40 C 10 24, 22 12, 38 8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />
          <path
            d="M31 6 L 39 7.5 L 35 15"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="-rotate-2 text-sm font-bold italic"
          style={{ color: "var(--marker-ink)" }}
        >
          {t.handNote}
        </span>
      </motion.div>
      )}
    </motion.div>
  );
}

/** 「07:42:15」を起点に実時間で進む稼働タイマー */
function useTickingTimer(reduce: boolean) {
  const [seconds, setSeconds] = useState(7 * 3600 + 42 * 60 + 15);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [reduce]);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

function TimeAppPhone({
  label,
  caption,
  timerLabel,
  rows,
  toast,
  toastVisible,
  onPoke,
  reduce,
}: {
  label: string;
  caption: string;
  timerLabel: string;
  rows: { name: string; value: string }[];
  toast: string;
  toastVisible: boolean;
  onPoke: () => void;
  reduce: boolean;
}) {
  const time = useTickingTimer(reduce);

  return (
    <button
      type="button"
      onClick={onPoke}
      aria-label={label}
      className="absolute -bottom-10 right-0 z-20 block w-[160px] cursor-pointer overflow-hidden rounded-2xl border text-left transition-transform duration-300 hover:-translate-y-1 active:scale-[0.98]"
      style={{
        borderColor: "color-mix(in srgb, var(--foreground) 18%, transparent)",
        background: "color-mix(in srgb, var(--background-2) 92%, transparent)",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* 打刻トースト — 自動+タップで上からスッと入る */}
      <div
        aria-live="polite"
        className={`pointer-events-none absolute inset-x-2 top-2 z-10 flex items-center gap-1.5 rounded-lg border px-2 py-1.5 transition-all duration-300 ${
          toastVisible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
        style={{
          borderColor: "color-mix(in srgb, var(--color-success) 40%, transparent)",
          background: "color-mix(in srgb, var(--color-success) 14%, var(--background))",
        }}
      >
        <span
          className="grid size-3.5 shrink-0 place-items-center rounded-full"
          style={{ background: "var(--color-success)", color: "var(--background)" }}
        >
          <Check className="size-2.5" strokeWidth={3} />
        </span>
        <span className="text-[9px] font-bold" style={{ color: "var(--color-success)" }}>
          {toast}
        </span>
      </div>

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
          {time}
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
    </button>
  );
}
