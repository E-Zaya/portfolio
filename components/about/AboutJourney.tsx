"use client";

import { motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function AboutJourney({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, delay: 0.12 }}
      className="space-y-6"
    >
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">{t.journeyEyebrow}</p>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t.journeyTitle}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
        {t.journey.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.14 }}
            className="apple-panel relative overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 md:p-6"
          >
            <div
              className="pointer-events-none absolute -right-4 -top-2 h-16 w-16 rounded-full blur-2xl"
              style={{
                background: "color-mix(in srgb, var(--accent-4) 14%, transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-2 -left-3 h-14 w-14 rounded-full blur-2xl"
              style={{
                background: "color-mix(in srgb, var(--accent-1) 12%, transparent)",
              }}
            />

            <div className="relative z-10">
              <p className="text-sm font-medium tracking-[0.2em] text-muted">{item.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-soft" style={{ whiteSpace: "pre-line" }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
