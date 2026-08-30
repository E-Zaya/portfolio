"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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
const zoomLabels: Record<Locale, string> = {
  ja: "写真を拡大表示",
  en: "View full photo",
  mn: "Зургийг томоор харах",
};

export default function AboutHero({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;
  const [photoOpen, setPhotoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setPhotoOpen(false), []);

  useEffect(() => {
    if (!photoOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [photoOpen, close]);

  return (
    <motion.div {...fadeUp} className="mx-auto max-w-2xl">
      <p className="eyebrow mb-4">{t.eyebrow}</p>

      {/* 差出人 — 小さな顔 + 挨拶 */}
      <div className="flex items-center gap-4 md:gap-5">
        <motion.button
          type="button"
          onClick={() => setPhotoOpen(true)}
          aria-label={zoomLabels[locale]}
          title={zoomLabels[locale]}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="shrink-0 cursor-zoom-in rounded-full border-0 bg-transparent p-0.5"
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
            className="size-20 rounded-full border-2 md:size-[104px]"
            style={{ borderColor: "var(--card)" }}
          />
        </motion.button>

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

      {/* ライトボックス — アバターを押すと元のポートレートを大きく表示。
          Card等のfilter系の巻き込みを避けるためbody直下へポータル */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {photoOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={close}
                role="dialog"
                aria-modal="true"
                aria-label={zoomLabels[locale]}
                className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center p-4 sm:p-8"
                style={{ background: "rgba(10, 12, 16, 0.82)", backdropFilter: "blur(8px)" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="relative"
                >
                  <Image
                    src="/images/zaya-photo.jpeg"
                    alt="Zaya"
                    width={900}
                    height={900}
                    className="size-[min(85vw,60vh,30rem)] rounded-full object-cover shadow-2xl"
                    style={{ border: "2px solid rgba(240, 242, 245, 0.18)" }}
                  />
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute -right-2 -top-2 flex size-9 cursor-pointer items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-110"
                    style={{
                      background: "var(--card-strong)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    <X className="size-4" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </motion.div>
  );
}
