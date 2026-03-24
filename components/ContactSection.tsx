"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { contactEmail, socialLinks } from "@/data/portfolio";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--accent-1) 20%, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-70 w-70 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--accent-2) 16%, transparent)",
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
            <p className="badge text-muted">Contact</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let’s build something{" "}
              <span className="hero-gradient">clean & memorable</span>
            </h2>

            <div className="gradient-line mx-auto mt-5 h-px w-28" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-soft sm:text-base">
              ポートフォリオ制作、フロントエンド実装、UI改善などのご相談はこちらから。
              シンプルで美しく、使いやすい体験を一緒に作れます。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="apple-panel gradient-border group relative overflow-hidden rounded-4x1 p-7 sm:p-9"
            >
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition duration-700 group-hover:scale-110"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent-1) 18%, transparent)",
                }}
              />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">
                  Primary Contact
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  Email me directly
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-soft sm:text-base">
                  お仕事の相談、制作依頼、コラボ、質問など気軽にどうぞ。
                  できるだけ見やすく、返信しやすい形で連絡できるようにしています。
                </p>

                <div className="mt-8 rounded-2xl border border-border bg-card-strong p-4 shadow-theme sm:p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Email Address
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="break-all text-base font-medium text-foreground sm:text-lg">
                      {contactEmail}
                    </span>

                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition duration-300 hover:scale-[1.02]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy email
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${contactEmail}`}
                    className="btn-gradient-text inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:scale-[1.02] shadow-theme"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3))",
                    }}
                  >
                    Send Email
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition duration-300 hover:scale-[1.02]"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="apple-panel-strong rounded-4x1 p-6 sm:p-7"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-muted">
                Social Links
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
                          <p className="text-sm text-muted">Connect via</p>
                          <p className="text-base font-medium text-foreground">
                            {item.name}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-card-strong p-4 shadow-theme">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Availability
                </p>
                <p className="mt-2 text-sm leading-7 text-soft">
                新規案件のご相談を歓迎しています。ご連絡いただければ、できる限り当日中にご返信いたします。                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}