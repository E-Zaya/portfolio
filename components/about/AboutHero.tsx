"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { getMessages, type Locale } from "@/lib/i18n";
import ReactCountryFlag from "react-country-flag";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

const languages = [
  { code: "MN", country: "MN", level: "Native" },
  { code: "JA", country: "JP", level: "Fluent" },
  { code: "EN", country: "US", level: "Business" },
];

/**
 * 「手紙」スタイルのAboutヒーロー。
 * 大きなポートレートはやめて、差出人の顔として小さな丸アバターを
 * 挨拶の左に置く。本文は1カラムで手紙のように流れ、署名で締まる。
 */
export default function AboutHero({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;

  return (
    <motion.div {...fadeUp} className="mx-auto max-w-2xl">
      <p className="eyebrow mb-4">{t.eyebrow}</p>

      {/* 差出人 — 小さな顔 + 挨拶 */}
      <div className="flex items-center gap-4 md:gap-5">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
          className="shrink-0 rounded-full p-0.5"
          style={{
            background: "color-mix(in srgb, var(--accent-2) 45%, transparent)",
          }}
        >
          <Image
            src="/images/zaya-avatar.webp"
            alt="Zaya"
            width={144}
            height={144}
            priority
            className="size-14 rounded-full border-2 md:size-[72px]"
            style={{ borderColor: "var(--card)" }}
          />
        </motion.span>

        <h1 className="heading-display text-balance text-4xl leading-tight text-foreground md:text-5xl">
          <MarkerHighlight delay={0.3}>{t.title}</MarkerHighlight>
        </h1>
      </div>

      <div className="gradient-line mt-5 h-px w-28" />

      <div className="mt-7 space-y-5 text-soft">
        {t.paragraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            className="leading-8"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* 手紙の署名 — 手書き風 */}
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="-rotate-1 text-right text-sm font-bold italic tracking-wide"
          style={{ color: "var(--marker-ink)" }}
        >
          {t.signature}
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.code}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.55 + index * 0.1 }}
            whileHover={{ scale: 1.07, y: -2 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs shadow-sm"
          >
            <ReactCountryFlag
              countryCode={lang.country}
              svg
              style={{ width: "1.1em", height: "1.1em" }}
            />
            <span className="font-medium text-foreground">{lang.code}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{lang.level}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
