"use client";

import { motion } from "framer-motion";
import { getMessages, type Locale } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function AboutStrengths({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, delay: 0.08 }}
      className="space-y-6"
    >
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">{t.strengthsEyebrow}</p>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t.strengthsTitle}</h2>
      </div>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
        {t.strengths.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="apple-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 md:p-6"
          >
            <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-7 text-soft" style={{ whiteSpace: "pre-line" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
