"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";

/* ─────────────────────────── icons ─────────────────────────── */

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 11L11 5M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 2.5l7 7m0-7l-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 6.5L4.8 9.5L10 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 2l6 2.4v4.4c0 4-2.6 7-6 8.7-3.4-1.7-6-4.7-6-8.7V4.4L10 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 9.8l2 2 3.6-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────────────────── section label ────────────────────── */

/** 「こんな形でつくります」等のミニ見出し — 右にルール線を流すエディトリアル調 */
function MiniHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex items-center gap-4">
      <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
        {children}
      </span>
      <span
        aria-hidden
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, var(--border), transparent)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────── main ─────────────────────────── */

export default function ServicesContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).services;
  const ctaHref = `/${locale}/contact`;
  const reduce = useReducedMotion();

  // タイトルを2行に分解: 1行目(比較対象)は控えめ、2行目(主張)にマーカーが走る
  const [titleLine1, titleLine2 = ""] = t.title.split("\n");

  return (
    <>
      {/* ── イントロ ── */}
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="section-title">
            <motion.span
              className="block text-soft"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {titleLine1}
            </motion.span>
            <motion.span
              className="mt-1 inline-block"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <MarkerHighlight delay={0.55}>{titleLine2}</MarkerHighlight>
            </motion.span>
          </h1>

          <motion.p
            className="text-base leading-loose text-soft sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          >
            {t.intro[0]}
          </motion.p>
          <motion.p
            className="text-sm leading-relaxed text-muted"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
          >
            {t.intro[1]}
          </motion.p>

          {/* 2本柱へのジャンプピル + Zazaの応援 */}
          <div className="flex flex-wrap items-end justify-center gap-3 pt-2">
            {t.pillars.map((pillar, index) => (
              <motion.a
                key={pillar.name}
                href={`#pillar-${index + 1}`}
                className="group inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-bold text-foreground transition-colors duration-200"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent-2) 35%, var(--border))",
                  background:
                    "color-mix(in srgb, var(--accent-2) 7%, transparent)",
                }}
                initial={reduce ? false : { opacity: 0, scale: 0.7, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 18,
                  delay: 0.4 + index * 0.12,
                }}
                whileHover={reduce ? undefined : { y: -3 }}
              >
                <span
                  className="font-mono text-[10px] font-bold tracking-widest"
                  style={{ color: "var(--accent-2)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {pillar.name}
                <span
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  style={{ color: "var(--accent-2)" }}
                  aria-hidden
                >
                  ↓
                </span>
              </motion.a>
            ))}

            {/* Zaza — ピルの横でぴょこんと応援 */}
            <motion.span
              aria-hidden
              className="pointer-events-none -mb-1 select-none"
              initial={
                reduce ? false : { opacity: 0, y: 24, rotate: 12, scale: 0.5 }
              }
              whileInView={{ opacity: 1, y: 0, rotate: 5, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 15,
                delay: 0.72,
              }}
            >
              <Image
                src="/Zaza/mascot/zaza-cheer.png"
                alt=""
                width={96}
                height={96}
                className="w-14 sm:w-16"
              />
            </motion.span>
          </div>
        </div>
      </SectionShell>

      {/* ── 2本柱: 選ばれる / 楽になる ── */}
      <SectionShell>
        <div className="mx-auto max-w-5xl space-y-14">
          {t.pillars.map((pillar, pillarIndex) => {
            const number = String(pillarIndex + 1).padStart(2, "0");

            return (
              <Card
                key={pillar.name}
                id={`pillar-${pillarIndex + 1}`}
                className="relative scroll-mt-28 overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12"
              >
                {/* 背景ウォーターマーク番号 */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-8 right-2 select-none font-mono text-[9rem] font-black leading-none tracking-tighter sm:-top-12 sm:text-[13rem]"
                  style={{
                    color:
                      "color-mix(in srgb, var(--accent-2) 7%, transparent)",
                  }}
                >
                  {number}
                </span>

                {/* 柱ヘッダー */}
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-px w-10"
                      style={{ background: "var(--accent-2)" }}
                    />
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: "var(--accent-2)" }}
                    >
                      {number}
                    </span>
                  </div>

                  <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                    <MarkerHighlight delay={0.2}>{pillar.name}</MarkerHighlight>
                  </h2>

                  <p className="mt-3 text-base font-bold text-soft sm:text-lg">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                    {pillar.lead}
                  </p>
                </div>

                {/* ── ビフォー→アフター: 「今」と「これから」の2つの世界 ── */}
                <div
                  className="relative mt-10 overflow-hidden rounded-2xl border"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* パネルヘッダー(デスクトップのみ) */}
                  <div className="hidden sm:grid sm:grid-cols-2">
                    <div
                      className="px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-muted"
                      style={{
                        background:
                          "color-mix(in srgb, var(--foreground) 5%, transparent)",
                      }}
                    >
                      {t.labels.before}
                    </div>
                    <div
                      className="px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em]"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent-2) 12%, transparent)",
                        color: "var(--accent-2)",
                      }}
                    >
                      {t.labels.after}
                    </div>
                  </div>

                  {pillar.beforeAfter.map((row) => (
                    <motion.div
                      key={row.before}
                      className="grid border-t first:border-t-0 sm:grid-cols-2 sm:border-t"
                      style={{ borderColor: "var(--border)" }}
                      initial={reduce ? "show" : "hidden"}
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {/* 今 — 重い世界 */}
                      <motion.div
                        className="relative flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5"
                        style={{
                          background:
                            "color-mix(in srgb, var(--foreground) 3%, transparent)",
                        }}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                      >
                        <span className="mb-0 block sm:hidden">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                            {t.labels.before}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full text-muted"
                          style={{
                            background:
                              "color-mix(in srgb, var(--foreground) 8%, transparent)",
                          }}
                        >
                          <CrossIcon />
                        </span>
                        <p className="text-sm leading-relaxed text-muted">
                          {row.before}
                        </p>

                        {/* 境界を突き破る矢印 — ポンッと弾んで登場 */}
                        <motion.span
                          aria-hidden
                          className="absolute -right-3.5 top-1/2 z-10 hidden h-7 w-7 place-items-center rounded-full text-xs font-bold sm:grid"
                          style={{
                            background: "var(--accent-2)",
                            color: "var(--button-foreground)",
                            boxShadow:
                              "0 2px 10px color-mix(in srgb, var(--accent-2) 45%, transparent)",
                            y: "-50%",
                          }}
                          variants={{
                            hidden: { scale: 0 },
                            show: {
                              scale: 1,
                              transition: {
                                type: "spring",
                                stiffness: 420,
                                damping: 17,
                                delay: 0.2,
                              },
                            },
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>

                      {/* これから — 軽い世界(色が流れ込む) */}
                      <motion.div
                        className="flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5 sm:pl-9"
                        style={{
                          background:
                            "color-mix(in srgb, var(--accent-2) 7%, transparent)",
                        }}
                        variants={{
                          hidden: { opacity: 0, x: 12 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.35,
                              delay: 0.32,
                              ease: "easeOut",
                            },
                          },
                        }}
                      >
                        <span className="mb-0 block sm:hidden">
                          <span
                            className="text-[9px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: "var(--accent-2)" }}
                          >
                            {t.labels.after}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full"
                          style={{
                            background:
                              "color-mix(in srgb, var(--accent-2) 18%, transparent)",
                            color: "var(--accent-2)",
                          }}
                        >
                          <CheckIcon />
                        </span>
                        <p className="text-sm font-semibold leading-relaxed text-foreground">
                          {row.after}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* ── こんな形でつくります ── */}
                <MiniHeading>{t.labels.forms}</MiniHeading>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {pillar.forms.map((form) => (
                    <span
                      key={form}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-soft"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent-2) 8%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--accent-2) 22%, transparent)",
                      }}
                    >
                      <span
                        aria-hidden
                        className="h-1 w-1 rounded-full"
                        style={{ background: "var(--accent-2)" }}
                      />
                      {form}
                    </span>
                  ))}
                </div>

                {/* ── 実物を見る ── */}
                <MiniHeading>{t.labels.proofs}</MiniHeading>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {pillar.proofs.map((proof) => {
                    const isLink = Boolean(proof.href);

                    const inner = (
                      <>
                        {/* アクセントエッジ */}
                        <span
                          aria-hidden
                          className="absolute inset-y-0 left-0 w-1"
                          style={{
                            background: isLink
                              ? "var(--accent-2)"
                              : "var(--border)",
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                            {isLink && (
                              <span
                                aria-hidden
                                className="h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{
                                  background: "var(--color-success)",
                                  boxShadow:
                                    "0 0 0 3px color-mix(in srgb, var(--color-success) 20%, transparent)",
                                }}
                              />
                            )}
                            <span className="truncate">{proof.name}</span>
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                            {proof.description}
                          </p>
                        </div>
                        {isLink && (
                          <span
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-200 group-hover:border-transparent group-hover:bg-[var(--accent-2)] group-hover:text-[var(--button-foreground)]"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--accent-2)",
                            }}
                            aria-hidden
                          >
                            <ExternalArrowIcon />
                          </span>
                        )}
                      </>
                    );

                    const sharedClass =
                      "group relative flex items-center gap-4 overflow-hidden rounded-xl border p-4 pl-6";
                    const sharedStyle = {
                      borderColor: "var(--border)",
                      background:
                        "color-mix(in srgb, var(--card) 55%, transparent)",
                    };

                    return isLink ? (
                      <a
                        key={proof.name}
                        href={proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${sharedClass} transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent-2)_45%,var(--border))]`}
                        style={sharedStyle}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div
                        key={proof.name}
                        className={sharedClass}
                        style={sharedStyle}
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>

                {/* ── 目安価格の帯 + CTA ── */}
                <div
                  className="mt-10 flex flex-col gap-5 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-2) 9%, transparent)",
                    border:
                      "1px solid color-mix(in srgb, var(--accent-2) 24%, transparent)",
                  }}
                >
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.24em]"
                      style={{ color: "var(--accent-2)" }}
                    >
                      {t.labels.price}
                    </p>
                    <p className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                        {pillar.price}
                      </span>
                      <span className="text-xs font-bold text-muted">
                        {pillar.timeline}
                      </span>
                    </p>
                  </div>
                  <Button
                    href={ctaHref}
                    variant="primary"
                    className="w-full shrink-0 font-bold sm:w-auto"
                  >
                    {t.ctaLabel}
                    <ArrowIcon />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* ── 保守・伴走 ── */}
      <SectionShell>
        <Card className="mx-auto max-w-5xl rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-2) 12%, transparent)",
                color: "var(--accent-2)",
              }}
            >
              <ShieldIcon />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                {t.care.title}
              </h2>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {t.care.description}
              </p>
            </div>
            <p
              className="self-start whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold sm:self-center"
              style={{
                color: "var(--accent-2)",
                border:
                  "1px solid color-mix(in srgb, var(--accent-2) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--accent-2) 7%, transparent)",
              }}
            >
              {t.care.price}
            </p>
          </div>
        </Card>
      </SectionShell>

      {/* ── ご利用の流れ(4ステップ) ── */}
      <SectionShell>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            {t.process.title}
          </h2>

          {/* desktop stepper */}
          <div className="hidden items-start gap-0 sm:flex">
            {t.process.steps.map((step, index) => {
              const isLast = index === t.process.steps.length - 1;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-1 flex-col items-center"
                >
                  {!isLast && (
                    <div className="absolute h-px opacity-40 services-step-connector" />
                  )}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold services-step-circle">
                    {index + 1}
                  </div>
                  <p className="mt-3 px-2 text-center text-xs font-semibold leading-snug text-soft">
                    {step.title}
                  </p>
                  <p className="mt-1 px-2 text-center text-xs leading-snug text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* mobile stepper */}
          <ol className="block list-none space-y-0 sm:hidden">
            {t.process.steps.map((step, index) => {
              const isLast = index === t.process.steps.length - 1;

              return (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold services-step-circle-soft">
                      {index + 1}
                    </div>
                    {!isLast && <div className="services-mobile-step-line" />}
                  </div>
                  <div
                    className={["pt-1", isLast ? "" : "pb-6"]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <p className="text-sm font-semibold leading-snug text-soft">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </SectionShell>

      {/* ── よくある質問 ── */}
      <SectionShell>
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-center text-2xl font-semibold">{t.faq.title}</h2>
          <div className="services-faq-list">
            {t.faq.items.map((item) => (
              <details key={item.question} className="services-faq-item">
                <summary className="services-faq-summary">
                  <span>{item.question}</span>
                  <span className="services-faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="services-faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ── 最後のCTA ── */}
      <SectionShell>
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-2xl font-semibold">{t.bottomCtaTitle}</h2>
          <p className="text-base leading-relaxed text-soft">
            {t.bottomCtaText}
          </p>
          <Button
            href={ctaHref}
            variant="primary"
            size="lg"
            className="font-semibold"
          >
            {t.ctaLabel}
            <ArrowIcon />
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
