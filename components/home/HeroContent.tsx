"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

export default function HeroContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;

  const contactHref = `/${locale}/contact`;
  const projectsHref = `/${locale}/projects`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-w-0 flex-col items-start text-left"
    >
      {/* eyebrow */}
      <p className="mb-4 whitespace-pre-line text-[11px] font-bold uppercase tracking-[0.34em] hero-gradient sm:mb-6 md:text-xs">
        {t.eyebrow}
      </p>

      {/* headline */}
      <h1 className="jp-tight whitespace-pre-line text-[2.1rem] font-black leading-[1.04] tracking-[-0.055em] text-foreground sm:text-[2.6rem] sm:leading-[1.03] md:text-[4rem] lg:text-[4.6rem] xl:text-[5rem]">
        <span className="block whitespace-pre-line">{t.title}</span>
        <span className="block whitespace-pre-line hero-gradient">
          {t.highlight}
        </span>
      </h1>
      {/* description */}
      <p className="mt-4 max-w-xl whitespace-pre-line text-[15px] leading-[1.8] text-soft sm:mt-7 md:text-base md:leading-8">
        {t.description}
      </p>

      {/* CTAs */}
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center">
        <Link
          href={contactHref}
          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 sm:w-auto md:px-8 md:py-4 md:text-base"
          style={{
            color: "var(--button-foreground)",
            background:
              "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))",
            boxShadow:
              "0 8px 32px color-mix(in srgb, var(--accent-1) 35%, transparent), 0 1px 0 color-mix(in srgb, var(--foreground) 20%, transparent) inset",
          }}
        >
          <span
            className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-60"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, var(--foreground) 70%, transparent), transparent)",
            }}
          />
          <span className="relative z-10 inline-flex items-center gap-2">
            {t.primaryCta}
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link
          href={projectsHref}
          className="inline-flex w-full items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:w-auto md:px-8 md:py-4 md:text-base"
          style={{
            color: "var(--foreground)",
            borderColor: "var(--border)",
            background:
              "color-mix(in srgb, var(--card-strong) 76%, transparent)",
            boxShadow: "var(--shadow)",
          }}
        >
          {t.secondaryCta}
        </Link>
      </div>

      {/* tech line — subtle proof line */}
      <div className="mt-6 flex items-center gap-3 sm:mt-10">
        <span
          aria-hidden
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--foreground) 30%, transparent), transparent)",
          }}
        />
        <p
          className="text-[10.5px]  text-center font-medium uppercase tracking-[0.3em] text-muted md:text-[11px]"
          style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
        >
          {t.techLine}
        </p>
      </div>
    </motion.div>
  );
}
