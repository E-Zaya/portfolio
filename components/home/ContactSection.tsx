"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { getMessages, type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--accent-1) 20%, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-70 w-70 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--accent-2) 16%, transparent)",
          }}
        />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-10 text-center">
            <Badge className="text-muted">{t.eyebrow}</Badge>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              {t.titleA} <span className="hero-gradient">{t.titleB}</span>
            </h2>

            <div className="gradient-line mx-auto mt-5 h-px w-28" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-soft sm:text-base">
              {t.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            >
              <ContactForm locale={locale} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <ContactSocials locale={locale} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}