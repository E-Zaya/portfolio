"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactEmail, socialLinks } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";

type CopyState = "idle" | "success" | "error";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const success = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!success) {
    throw new Error("Copy command failed");
  }
}

export default function ContactSection({ locale }: { locale: Locale }) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimerRef = useRef<number | null>(null);
  const t = getMessages(locale).contact;

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    try {
      await copyText(contactEmail);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCopyState("idle");
      resetTimerRef.current = null;
    }, 1800);
  };

  const isCopied = copyState === "success";

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "color-mix(in srgb, var(--accent-1) 20%, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full blur-3xl"
          style={{ background: "color-mix(in srgb, var(--accent-2) 16%, transparent)" }}
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

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
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
              <Card gradientBorder className="group relative overflow-hidden rounded-[32px] p-7 sm:p-9">
                <div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition duration-700 group-hover:scale-110"
                  style={{ background: "color-mix(in srgb, var(--accent-1) 18%, transparent)" }}
                />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-muted">{t.primaryLabel}</p>

                  <h3 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                    {t.primaryTitle}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-soft sm:text-base">
                    {t.primaryDescription}
                  </p>

                  <div className="mt-8 rounded-2xl border border-border bg-card-strong p-4 shadow-theme sm:p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.emailLabel}</p>

                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="break-all text-base font-medium text-foreground sm:text-lg">
                        {contactEmail}
                      </span>

                      <Button onClick={handleCopyEmail} className="px-4 py-2.5">
                        {isCopied ? (
                          <>
                            <Check className="h-4 w-4" />
                            {t.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            {t.copy}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <span className="sr-only" aria-live="polite">
                    {copyState === "success"
                      ? t.copied
                      : copyState === "error"
                        ? `${t.copy}. ${contactEmail}`
                        : ""}
                  </span>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href={`mailto:${contactEmail}`} variant="primary">
                      {t.send}
                    </Button>

                    <Button href={withLocale(locale, "/projects")}>{t.viewProjects}</Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <Card strong className="rounded-[32px] p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">{t.socialTitle}</p>

                <div className="mt-6 space-y-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 transition duration-300 hover:scale-[1.01]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card-strong text-foreground">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-sm text-muted">{t.connectVia}</p>
                            <p className="text-base font-medium text-foreground">{item.name}</p>
                          </div>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-card-strong p-4 shadow-theme">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.availabilityLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-soft">{t.availability}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
