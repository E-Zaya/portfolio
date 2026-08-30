"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import Button from "@/components/ui/Button";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { getConsultHref, getConsultLinkProps } from "@/lib/contact";
import { getMessages, type Locale } from "@/lib/i18n";

export default function HeroContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;

  const contactHref = getConsultHref(locale);
  const consultLinkProps = getConsultLinkProps(locale);
  const projectsHref = `/${locale}/projects`;

  // モバイルでは文単位で自然に流し、sm以上では行ごとにブロック表示(4行の大組み)
  const titleLines = t.title.split("\n").filter((line) => line.trim());
  const highlightLines = t.highlight.split("\n").filter((line) => line.trim());

  // モンゴル語(キリル文字)は語が長く、ja/enと同じサイズでは行が溢れるため
  // mnのみ約75%スケール+字間を緩める。ja/enは従来のまま。
  const headingSizeClass =
    locale === "mn"
      ? "text-[clamp(1.35rem,6vw,1.8rem)] leading-[1.5] tracking-[-0.02em] sm:text-[2rem] sm:leading-[1.22] md:text-[2.6rem] lg:text-[3rem] xl:text-[3.2rem]"
      : "text-[clamp(1.5rem,7vw,2rem)] leading-[1.5] tracking-[-0.05em] sm:text-[2.4rem] sm:leading-[1.15] md:text-[3.4rem] md:leading-[1.12] lg:text-[3.9rem] xl:text-[4.2rem]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-w-0 flex-col items-start text-left"
    >
      {/* headline — 翻訳側で決めた改行を保ち、長いMN文言も画面内に収める */}
      <h1 className={`jp-tight font-black text-foreground ${headingSizeClass}`}>
        <span className="block">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
        <span className="block">
          {highlightLines.map((line, index) => (
            <span key={line} className="block w-fit max-w-full">
              <MarkerHighlight delay={0.6 + index * 0.18}>
                {line}
              </MarkerHighlight>
            </span>
          ))}
        </span>
      </h1>
      {/* description */}
      <p className="mt-4 max-w-xl whitespace-pre-line text-[15px] leading-[1.8] text-soft sm:mt-7 md:text-base md:leading-8">
        {t.description}
      </p>

      {/* CTAs — 長い翻訳でも切れないよう、モバイルは縦並び */}
      <div className="mt-6 grid w-full grid-cols-1 items-center gap-3 sm:mt-10 sm:flex sm:w-auto sm:flex-row">
        <Button
          href={contactHref}
          {...consultLinkProps}
          variant="primary"
          size="compact"
          className="group min-h-12 w-full font-bold sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          onClick={() =>
            track("Hero CTA Click", {
              locale,
              destination: locale === "mn" ? "messenger" : "contact",
            })
          }
        >
          {t.primaryCta}
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Button>

        <Button
          href={projectsHref}
          variant="secondary"
          size="compact"
          className="min-h-12 w-full font-semibold sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          onClick={() => track("Hero Projects Click", { locale })}
        >
          {t.secondaryCta}
        </Button>
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
          className="break-keep text-left text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-muted sm:tracking-[0.3em] md:text-[11px]"
          style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
        >
          {t.techLine}
        </p>
      </div>
    </motion.div>
  );
}
