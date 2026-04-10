"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function AboutHero({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;

  return (
    <motion.div
      {...fadeUp}
      className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)]"
    >
      <div className="max-w-3xl">
        <p className="hero-gradient mb-3 text-sm uppercase tracking-[0.3em]">{t.eyebrow}</p>

        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
          {t.title}
        </h1>

        <div className="gradient-line mt-4 h-px w-28" />

        <div className="mt-6 space-y-5 text-soft">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div
          className="pointer-events-none absolute -left-5 bottom-8 h-28 w-28 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--accent-1) 18%, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-5 top-8 h-28 w-28 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--accent-4) 18%, transparent)",
          }}
        />

        <div className="gradient-border rounded-[26px] p-[1px]">
          <motion.div
            whileHover={{ y: -4, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="overflow-hidden rounded-[24px] border border-border bg-card shadow-theme"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <Image
                src="/IMG_6346.JPEG"
                alt="Zaya portrait"
                width={300}
                height={400}
                priority
                className="h-[400px] w-[300px] object-cover will-change-transform"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}