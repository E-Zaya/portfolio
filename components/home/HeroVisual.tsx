"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";
import type { HeroVisualContent } from "@/lib/messages/types";

const ZAZA_IMAGE = "/Zaza/chira-zaza.png";
const CYCLE_MS = 3200;

type LandingScene = HeroVisualContent["scenes"]["landing"];
type AdminScene = HeroVisualContent["scenes"]["admin"];
type DatabaseScene = HeroVisualContent["scenes"]["database"];
type MultilingualScene = HeroVisualContent["scenes"]["multilingual"];

export default function HeroVisual() {
  const params = useParams<{ locale?: string }>();
  const locale: Locale =
    params?.locale === "ja" || params?.locale === "mn" ? params.locale : "en";

  const t = getMessages(locale);
  const visual: HeroVisualContent = t.visual;

  const items = visual.items;
  const captions = visual.captions ?? items;

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [items.length]);

  const indexLabel = `${String(active + 1).padStart(2, "0")} / ${String(
    items.length,
  ).padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:ml-auto"
    >
      {/* background light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 h-[200px] w-[200px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent-1) 55%, transparent), transparent 70%)",
          filter: "blur(36px)",
          opacity: 0.55,
        }}
      />

      {/* browser frame */}
      <div
        className="relative overflow-hidden rounded-3xl border backdrop-blur-xl"
        style={{
          borderColor: "color-mix(in srgb, var(--foreground) 14%, transparent)",
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--card) 92%, var(--accent-1)) 0%, color-mix(in srgb, var(--card) 96%, transparent) 100%)",
          boxShadow:
            "0 0 0 1px color-mix(in srgb, var(--foreground) 6%, transparent), var(--shadow)",
        }}
      >
        {/* top accent */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, var(--accent-1), var(--accent-3), var(--accent-4))",
          }}
        />

        {/* browser chrome */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{
            borderBottom:
              "1px solid color-mix(in srgb, var(--foreground) 8%, transparent)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--blog-code-dot-red)" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--blog-code-dot-yellow)" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--blog-code-dot-green)" }} />
          </div>

          <div
            className="mx-3 flex-1 truncate rounded-md px-3 py-1 text-center font-mono text-[10px] tracking-wider"
            style={{
              background: "color-mix(in srgb, var(--foreground) 6%, transparent)",
              color: "var(--text-muted)",
            }}
          >
            {visual.browserUrl}
          </div>

          <div
            className="font-mono text-[10px] tracking-[0.18em]"
            style={{ color: "var(--text-muted)" }}
          >
            {indexLabel}
          </div>
        </div>

        {/* viewport */}
        <div className="relative h-[280px] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
                linear-gradient(90deg, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full"
            >
              {active === 0 && <SceneLanding data={visual.scenes.landing} />}
              {active === 1 && <SceneAdmin data={visual.scenes.admin} />}
              {active === 2 && <SceneDatabase data={visual.scenes.database} />}
              {active === 3 && <SceneMultilingual data={visual.scenes.multilingual} />}
            </motion.div>
          </AnimatePresence>

          {/* caption */}
          <div className="absolute bottom-3 left-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${active}`}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--foreground) 12%, transparent)",
                  background:
                    "color-mix(in srgb, var(--card-strong) 80%, transparent)",
                  color: "var(--foreground)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--accent-1)" }}
                />
                {captions[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* progress */}
        <div
          className="flex gap-1 px-4 py-3"
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--foreground) 8%, transparent)",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item}
              className="relative h-[3px] flex-1 overflow-hidden rounded-full"
              style={{
                background: "color-mix(in srgb, var(--foreground) 8%, transparent)",
              }}
            >
              {index === active && (
                <motion.div
                  key={`bar-${active}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                  className="absolute inset-0 origin-left rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-1), var(--accent-3))",
                  }}
                />
              )}

              {index < active && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-1), var(--accent-3))",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* mascot */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-10 -right-2 z-20 flex flex-col items-center sm:-bottom-12 sm:-right-4"
      >
        {/* speech bubble */}
        <div
          className="mb-2 max-w-[160px] rounded-2xl px-3 py-2 text-[11px] font-bold leading-tight backdrop-blur"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 18%, var(--card-strong)), color-mix(in srgb, var(--accent-3) 14%, var(--card-strong)))",
            border:
              "1px solid color-mix(in srgb, var(--foreground) 14%, transparent)",
            color: "var(--foreground)",
            boxShadow: "var(--shadow)",
          }}
        >
          <span className="inline-flex items-center gap-1">
            <span aria-hidden>↑</span>
            {t.hero.visualHint}
          </span>
        </div>

        {/* mascot image */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <Image
            src={ZAZA_IMAGE}
            alt="ZAZA mascot pointing at the live preview"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* landing scene */
function SceneLanding({ data }: { data: LandingScene }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* mini nav */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          borderBottom:
            "1px solid color-mix(in srgb, var(--foreground) 8%, transparent)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div
            className="h-3 w-3 rounded-sm"
            style={{
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
            }}
          />
          <span className="text-[9px] font-bold" style={{ color: "var(--foreground)" }}>
            {data.brand}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {data.nav.map((item) => (
            <span key={item} className="text-[8px]" style={{ color: "var(--text-muted)" }}>
              {item}
            </span>
          ))}
        </div>

        <div
          className="rounded-full px-2 py-0.5 text-[8px] font-bold"
          style={{
            background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
            color: "var(--button-foreground)",
          }}
        >
          {data.ctaSmall}
        </div>
      </div>

      {/* hero area */}
      <div className="flex items-center gap-3 px-4 py-3">
        {/* text */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="mb-1 text-[8px] font-bold uppercase tracking-widest"
              style={{ color: "var(--accent-1)" }}
            >
              {data.eyebrow}
            </div>

            <div
              className="mb-1.5 text-[15px] font-black leading-[1.15]"
              style={{ color: "var(--foreground)" }}
            >
              {data.titleBefore}
              <span className="hero-gradient">{data.titleHighlight}</span>
              {data.titleAfter}
            </div>

            <div
              className="mb-3 whitespace-pre-line text-[8.5px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {data.description}
            </div>

            <div className="flex gap-1.5">
              <div
                className="rounded-full px-2.5 py-1 text-[8px] font-bold"
                style={{
                  background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
                  color: "var(--button-foreground)",
                }}
              >
                {data.primaryCta}
              </div>

              <div
                className="rounded-full border px-2.5 py-1 text-[8px] font-medium"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--foreground) 15%, transparent)",
                  color: "var(--foreground)",
                }}
              >
                {data.secondaryCta}
              </div>
            </div>
          </motion.div>
        </div>

        {/* chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 20%, transparent), color-mix(in srgb, var(--accent-3) 15%, transparent))",
            border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
          }}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 112 112" fill="none">
            <polyline
              points="8,95 25,68 44,75 62,42 80,28 104,14"
              stroke="url(#lpGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent-1)" />
                <stop offset="100%" stopColor="var(--accent-3)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute bottom-2 left-2 text-[9px] font-black" style={{ color: "var(--accent-1)" }}>
            {data.stat}
          </div>

          <div
            className="absolute right-2 top-2 rounded-full px-1.5 py-0.5 text-[7px] font-bold"
            style={{
              background: "color-mix(in srgb, var(--accent-1) 20%, transparent)",
              color: "var(--accent-1)",
            }}
          >
            {data.live}
          </div>
        </motion.div>
      </div>

      {/* feature chips */}
      <div className="flex gap-1.5 px-4">
        {data.features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
            className="rounded-full px-2 py-1 text-[8px] font-medium"
            style={{
              background: "color-mix(in srgb, var(--foreground) 5%, transparent)",
              color: "var(--text-muted)",
              border: "1px solid color-mix(in srgb, var(--foreground) 8%, transparent)",
            }}
          >
            {feature}
          </motion.div>
        ))}
      </div>

      {/* social proof */}
      <div className="mt-3 flex items-center gap-2 px-4">
        <div className="flex -space-x-1.5">
          {["#f97316", "#8b5cf6", "#06b6d4"].map((color) => (
            <div
              key={color}
              className="h-5 w-5 rounded-full border-2"
              style={{ background: color, borderColor: "var(--card)" }}
            />
          ))}
        </div>

        <span className="text-[8px]" style={{ color: "var(--text-muted)" }}>
          <span className="font-bold" style={{ color: "var(--foreground)" }}>
            {data.socialProofNumber}
          </span>{" "}
          {data.socialProofText}
        </span>
      </div>
    </div>
  );
}

/* admin scene */
function SceneAdmin({ data }: { data: AdminScene }) {
  const bars = [40, 65, 50, 80, 55, 90, 70];

  return (
    <div className="flex h-full w-full">
      {/* sidebar */}
      <div
        className="flex w-[30%] flex-col gap-1.5 border-r p-2.5"
        style={{
          borderColor: "color-mix(in srgb, var(--foreground) 8%, transparent)",
          background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
        }}
      >
        <div className="mb-2 flex items-center gap-1.5">
          <div
            className="h-3 w-3 rounded-sm"
            style={{
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
            }}
          />
          <span className="text-[8px] font-bold" style={{ color: "var(--foreground)" }}>
            {data.logo}
          </span>
        </div>

        {data.menu.map((label, index) => {
          const isActive = index === 0;

          return (
            <div
              key={label}
              className="rounded-md px-1.5 py-1 text-[8px]"
              style={{
                background: isActive
                  ? "color-mix(in srgb, var(--accent-1) 15%, transparent)"
                  : "transparent",
                color: isActive ? "var(--accent-1)" : "var(--text-muted)",
              }}
            >
              {label}
            </div>
          );
        })}

        {/* logged in user */}
        <div
          className="mt-auto border-t pt-2"
          style={{
            borderColor: "color-mix(in srgb, var(--foreground) 8%, transparent)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="flex h-4 w-4 items-center justify-center rounded-full text-[7px] font-bold"
              style={{
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
                color: "var(--button-foreground)",
              }}
            >
              A
            </div>

            <div>
              <div className="text-[7px] font-semibold" style={{ color: "var(--foreground)" }}>
                {data.userName}
              </div>
              <div className="text-[6px]" style={{ color: "var(--accent-1)" }}>
                {data.loginStatus}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main dashboard */}
      <div className="flex-1 overflow-hidden p-2.5">
        {/* KPI cards */}
        <div className="mb-2.5 grid grid-cols-3 gap-1.5">
          {data.kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg p-1.5"
              style={{
                background: "color-mix(in srgb, var(--foreground) 5%, transparent)",
                border: "1px solid color-mix(in srgb, var(--foreground) 8%, transparent)",
              }}
            >
              <div className="text-[6.5px] leading-tight" style={{ color: "var(--text-muted)" }}>
                {kpi.label}
              </div>

              <div className="text-[10px] font-black leading-tight" style={{ color: "var(--foreground)" }}>
                {kpi.value}
              </div>

              <div
                className="text-[7px] font-bold"
                style={{ color: kpi.up ? "var(--accent-1)" : "var(--color-error)" }}
              >
                {kpi.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* bar chart */}
        <div className="relative flex items-end gap-1" style={{ height: "80px" }}>
          {bars.map((height, index) => (
            <motion.div
              key={`${height}-${index}`}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
              className="flex-1 rounded-t-sm"
              style={{
                background:
                  index === 5
                    ? "linear-gradient(180deg, var(--accent-1), var(--accent-3))"
                    : "color-mix(in srgb, var(--foreground) 14%, transparent)",
              }}
            />
          ))}
        </div>

        {/* month labels */}
        <div className="mt-1 flex gap-1">
          {data.months.map((month) => (
            <span
              key={month}
              className="flex-1 text-center font-mono text-[6px]"
              style={{ color: "var(--text-muted)" }}
            >
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* database scene */
function SceneDatabase({ data }: { data: DatabaseScene }) {
  return (
    <div className="h-full w-full p-3">
      {/* SQL query */}
      <div
        className="mb-2 rounded-md px-2.5 py-1.5 font-mono text-[8px]"
        style={{
          background: "color-mix(in srgb, var(--foreground) 5%, transparent)",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ color: "var(--accent-3)" }}>SELECT</span>
        {" * "}
        <span style={{ color: "var(--accent-3)" }}>FROM</span>{" "}
        <span style={{ color: "var(--accent-1)" }}>{data.queryTable}</span>{" "}
        <span style={{ color: "var(--accent-3)" }}>LIMIT</span>
        {` ${data.rows.length}`}
      </div>

      {/* table header */}
      <div
        className="grid grid-cols-[28px_1fr_1fr_44px] gap-1.5 rounded-md px-2 py-1 text-[7.5px] font-bold uppercase tracking-wider"
        style={{
          background: "color-mix(in srgb, var(--foreground) 5%, transparent)",
          color: "var(--text-muted)",
        }}
      >
        {data.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      {/* table rows */}
      <div className="mt-0.5 space-y-0.5">
        {data.rows.map((row, index) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="grid grid-cols-[28px_1fr_1fr_44px] items-center gap-1.5 rounded px-2 py-1.5"
            style={{
              background:
                index === 1
                  ? "color-mix(in srgb, var(--accent-1) 8%, transparent)"
                  : "transparent",
              borderBottom:
                "1px solid color-mix(in srgb, var(--foreground) 5%, transparent)",
            }}
          >
            <span className="font-mono text-[8px]" style={{ color: "var(--text-muted)" }}>
              {row.id}
            </span>

            <span className="truncate text-[8.5px] font-medium" style={{ color: "var(--foreground)" }}>
              {row.name}
            </span>

            <span className="truncate font-mono text-[7.5px]" style={{ color: "var(--text-muted)" }}>
              {row.email}
            </span>

            <span
              className="rounded-full px-1.5 py-0.5 text-center text-[7px] font-bold"
              style={{
                background:
                  row.status === "active"
                    ? "color-mix(in srgb, var(--accent-1) 22%, transparent)"
                    : "color-mix(in srgb, var(--foreground) 10%, transparent)",
                color: row.status === "active" ? "var(--accent-1)" : "var(--text-muted)",
              }}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* multilingual scene */
function SceneMultilingual({ data }: { data: MultilingualScene }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-4">
      {data.langs.map((lang, index) => (
        <motion.div
          key={lang.code}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
          className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
          style={{
            borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
            background: "color-mix(in srgb, var(--foreground) 3%, transparent)",
          }}
        >
          <span
            className="rounded-md px-2 py-1 font-mono text-[10px] font-bold"
            style={{
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
              color: "var(--button-foreground)",
            }}
          >
            {lang.code}
          </span>

          <span className="truncate text-[11px]" style={{ color: "var(--text-soft)" }}>
            {lang.line}
          </span>
        </motion.div>
      ))}

      <div
        className="mt-auto text-center font-mono text-[9px] uppercase tracking-[0.25em]"
        style={{ color: "var(--text-muted)" }}
      >
        {data.footer}
      </div>
    </div>
  );
}