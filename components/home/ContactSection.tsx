"use client";

import { motion } from "framer-motion";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { getMessages, type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;

  return (
    <section className="section-space relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              {t.titleA}{" "}
              <MarkerHighlight delay={0.3}>{t.titleB}</MarkerHighlight>
            </h2>

            <div className="gradient-line mx-auto mt-5 h-px w-28" />
          </div>

          {/* items-stretch + h-full で左右カラムの下端を揃える */}
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            >
              <ContactForm locale={locale} />
            </motion.div>

            <motion.div
              className="h-full"
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