"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { contactEmail, socialLinks } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setState("loading");
    setErrorMessage("");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company: String(formData.get("company") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setState("success");
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--accent-1) 20%, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full blur-3xl"
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
              <Card
                gradientBorder
                className="relative overflow-hidden rounded-[32px] p-7 sm:p-9"
              >
                <div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-1) 18%, transparent)",
                  }}
                />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-muted">
                    {t.primaryLabel}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                    {t.primaryTitle}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-soft sm:text-base">
                    {t.primaryDescription}
                  </p>

                  <form
                    className="mt-8 space-y-4"
                    action={async (formData) => {
                      await handleSubmit(formData);
                    }}
                  >
                    <input
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm text-soft">
                          Name
                        </span>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm text-soft">
                          Email
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm text-soft">
                        Message
                      </span>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
                        placeholder="Tell me about your project or idea."
                      />
                    </label>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        type="submit"
                        variant="primary"
                        className="px-5 py-3"
                      >
                        {state === "loading" ? "Sending..." : "Send Message"}
                      </Button>

                    </div>

                    <div aria-live="polite" className="min-h-6 text-sm">
                      {state === "success" && (
                        <p className="text-soft">
                          Your message has been sent successfully.
                        </p>
                      )}
                      {state === "error" && (
                        <p className="text-red-300">
                          {errorMessage ||
                            "Something went wrong. Please try again."}
                        </p>
                      )}
                    </div>
                  </form>
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
                <p className="text-sm uppercase tracking-[0.22em] text-muted">
                  {t.socialTitle}
                </p>

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
                            <p className="text-sm text-muted">
                              {t.connectVia}
                            </p>
                            <p className="text-base font-medium tracking-[-0.01em] text-foreground">
                              {item.name}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-card-strong p-4 shadow-theme">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    {t.availabilityLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-soft">
                    {t.availability}
                  </p>
                </div>
              </Card>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}