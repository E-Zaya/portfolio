"use client";

import { getBriefHref } from "@/lib/contact-brief";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";
import { track } from "@vercel/analytics";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import SectionShell from "@/components/ui/SectionShell";
import { getConsultHref, getConsultLinkProps } from "@/lib/contact";
import { getMessages, type Locale } from "@/lib/i18n";

/* ─────────────────────────── icons ─────────────────────────── */

/* ────────────────────── section label ────────────────────── */

/** 「こんな形でつくります」等のミニ見出し — 右にルール線を流すエディトリアル調 */
function MiniHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex items-center gap-4">
      <span className="whitespace-nowrap text-sm font-bold text-muted">
        {children}
      </span>
      <span
        aria-hidden
        className="h-px flex-1"
        style={{
          background: "linear-gradient(90deg, var(--border), transparent)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────── main ─────────────────────────── */

export default function ServicesContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).services;
  const ctaHref = getConsultHref(locale);
  const consultLinkProps = getConsultLinkProps(locale);
  const packages = t.packages;

  // タイトルを2行に分解: 1行目(比較対象)は控えめ、2行目(主張)にマーカーが走る
  const [titleLine1, titleLine2 = ""] = t.title.split("\n");

  return (
    <div className="section-flow">
      {/* ── イントロ ── */}
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="heading-display section-title">
            <span className="block text-soft">{titleLine1}</span>
            <span className="mt-1 inline-block">
              <MarkerHighlight>{titleLine2}</MarkerHighlight>
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base text-soft sm:text-lg">{t.intro[0]}</p>
          <p className="mx-auto max-w-xl text-sm text-muted">{t.intro[1]}</p>

          {/* 2本柱へのジャンプピル + Zazaの応援 */}
          <div className="flex flex-wrap items-end justify-center gap-3 pt-2">
            {t.pillars.map((pillar, index) => (
              <a
                key={pillar.name}
                href={`#pillar-${index + 1}`}
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-bold text-foreground transition-colors duration-200 hover:border-[color:var(--accent-2)]"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent-2) 35%, var(--border))",
                  background:
                    "color-mix(in srgb, var(--accent-2) 7%, transparent)",
                }}
              >
                {pillar.name}
                <ArrowDown
                  aria-hidden
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  style={{ color: "var(--accent-2)" }}
                />
              </a>
            ))}

            {/* Zaza — ピルの横でぴょこんと応援 */}
            <span
              aria-hidden
              className="pointer-events-none -mb-1 rotate-[5deg] select-none"
            >
              <Image
                src="/Zaza/mascot/zaza-cheer.png"
                alt=""
                width={96}
                height={96}
                className="w-14 sm:w-16"
              />
            </span>
          </div>
        </div>
      </SectionShell>

      {packages && (
        <SectionShell>
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-display text-2xl text-foreground sm:text-3xl">
                {packages.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-soft">
                {packages.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {packages.items.map((item, index) => (
                <article
                  key={item.name}
                  className="relative flex min-h-full flex-col overflow-hidden rounded-lg border p-6 sm:p-7"
                  style={{
                    borderColor: item.recommended
                      ? "color-mix(in srgb, var(--accent-2) 62%, var(--border))"
                      : "var(--border)",
                    background: item.recommended
                      ? "color-mix(in srgb, var(--accent-2) 9%, var(--card-strong))"
                      : "var(--card-strong)",
                  }}
                >
                  {/* チップの有無でタイトル開始位置がズレないよう、
                      3枚とも同じ高さのスロットを確保する */}
                  <div className="mb-5 min-h-[26px]">
                    {item.recommended && (
                      <span
                        className="inline-flex rounded-full border px-3 py-1 text-xs font-bold"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--accent-2) 42%, transparent)",
                          background:
                            "color-mix(in srgb, var(--accent-2) 14%, transparent)",
                          color: "var(--accent-2)",
                        }}
                      >
                        {packages.recommendedLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-soft">
                    {item.description}
                  </p>

                  <p className="mt-6 text-2xl font-bold tabular-nums text-foreground">
                    {item.price}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-muted">
                    <Clock3 aria-hidden size={15} strokeWidth={1.8} />
                    {item.timeline}
                  </p>

                  <ul className="my-7 space-y-3 border-t border-border pt-6">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-soft"
                      >
                        <span
                          aria-hidden
                          className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full"
                          style={{
                            background:
                              "color-mix(in srgb, var(--accent-2) 16%, transparent)",
                            color: "var(--accent-2)",
                          }}
                        >
                          <Check size={12} strokeWidth={2.4} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={getBriefHref(locale, { plan: String(index) })}
                    variant={item.recommended ? "primary" : "secondary"}
                    className="mt-auto w-full font-bold"
                    onClick={() =>
                      track("Service Package CTA Click", {
                        locale,
                        package: item.name,
                        destination: "contact",
                      })
                    }
                  >
                    {t.ctaLabel}
                    <MessageCircle aria-hidden size={16} strokeWidth={1.9} />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>
      )}

      {/* ── 2本柱: 選ばれる / 楽になる ── */}
      <SectionShell>
        <div className="mx-auto max-w-5xl space-y-14">
          {t.pillars.map((pillar, pillarIndex) => {
            return (
              <Card
                key={pillar.name}
                id={`pillar-${pillarIndex + 1}`}
                className="relative scroll-mt-28 overflow-hidden rounded-lg p-6 sm:p-10 lg:p-12"
              >
                {/* 柱ヘッダー */}
                <div className="relative">
                  <h2 className="heading-display text-3xl text-foreground sm:text-4xl">
                    <MarkerHighlight>{pillar.name}</MarkerHighlight>
                  </h2>

                  <p className="mt-3 text-base font-bold text-soft sm:text-lg">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3 max-w-xl text-base text-muted">
                    {pillar.lead}
                  </p>
                </div>

                {/* ── ビフォー→アフター: 「今」と「これから」の2つの世界 ── */}
                <div
                  className="relative mt-10 overflow-hidden rounded-md border"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* パネルヘッダー(デスクトップのみ) */}
                  <div className="hidden sm:grid sm:grid-cols-2">
                    <div
                      className="px-6 py-3 text-sm font-bold text-muted"
                      style={{
                        background:
                          "color-mix(in srgb, var(--foreground) 5%, transparent)",
                      }}
                    >
                      {t.labels.before}
                    </div>
                    <div
                      className="px-6 py-3 text-sm font-bold"
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
                    <div
                      key={row.before}
                      className="grid border-t first:border-t-0 sm:grid-cols-2 sm:border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {/* 今 — 重い世界 */}
                      <div
                        className="relative flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5"
                        style={{
                          background:
                            "color-mix(in srgb, var(--foreground) 3%, transparent)",
                        }}
                      >
                        <span className="mb-0 block sm:hidden">
                          <span className="text-xs font-bold text-muted">
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
                          <X size={12} strokeWidth={2.4} />
                        </span>
                        <p className="text-sm leading-relaxed text-muted">
                          {row.before}
                        </p>

                        {/* 今 → これから の境目の印 */}
                        <span
                          aria-hidden
                          className="absolute -right-3.5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-full sm:grid"
                          style={{
                            background: "var(--button-bg)",
                            color: "var(--button-foreground)",
                          }}
                        >
                          <ArrowRight size={14} strokeWidth={2.2} />
                        </span>
                      </div>

                      {/* これから — 軽い世界(色が流れ込む) */}
                      <div
                        className="flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5 sm:pl-9"
                        style={{
                          background:
                            "color-mix(in srgb, var(--accent-2) 7%, transparent)",
                        }}
                      >
                        <span className="mb-0 block sm:hidden">
                          <span
                            className="text-xs font-bold"
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
                          <Check size={12} strokeWidth={2.4} />
                        </span>
                        <p className="text-sm font-semibold leading-relaxed text-foreground">
                          {row.after}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── こんな形でつくります ── */}
                <MiniHeading>{t.labels.forms}</MiniHeading>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {pillar.forms.map((form) => (
                    <span
                      key={form}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-soft"
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
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-200 group-hover:border-transparent group-hover:bg-[var(--button-bg)] group-hover:text-[var(--button-foreground)]"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--accent-2)",
                            }}
                            aria-hidden
                          >
                            <ArrowUpRight size={14} strokeWidth={2} />
                          </span>
                        )}
                      </>
                    );

                    const sharedClass =
                      "group relative flex items-center gap-4 overflow-hidden rounded-md border p-4 pl-6";
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
                        className={`${sharedClass} transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--accent-2)_45%,var(--border))]`}
                        style={sharedStyle}
                        onClick={() =>
                          track("Service Proof Click", {
                            locale,
                            proof: proof.name,
                          })
                        }
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
                  className="mt-10 flex flex-col gap-5 rounded-md p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-2) 9%, transparent)",
                    border:
                      "1px solid color-mix(in srgb, var(--accent-2) 24%, transparent)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--accent-2)" }}
                    >
                      {t.labels.price}
                    </p>
                    <p className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xl font-bold tabular-nums text-foreground sm:text-2xl">
                        {pillar.price}
                      </span>
                      <span className="text-xs font-bold text-muted">
                        {pillar.timeline}
                      </span>
                    </p>
                  </div>
                  <Button
                    href={ctaHref}
                    {...consultLinkProps}
                    variant="primary"
                    className="w-full shrink-0 font-bold sm:w-auto"
                    onClick={() =>
                      track("Service Pillar CTA Click", {
                        locale,
                        pillar: pillar.name,
                        destination: locale === "mn" ? "messenger" : "contact",
                      })
                    }
                  >
                    {t.ctaLabel}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* ── 保守・伴走 ── */}
      <SectionShell>
        <Card className="mx-auto max-w-5xl rounded-lg p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-md"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-2) 12%, transparent)",
                color: "var(--accent-2)",
              }}
            >
              <ShieldCheck size={20} strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                {t.care.title}
              </h2>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {t.care.description}
              </p>
              {t.care.details && (
                <ul className="mt-4 grid gap-2 text-sm text-soft sm:grid-cols-2">
                  {t.care.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span aria-hidden style={{ color: "var(--accent-2)" }}>
                        •
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
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
          <h2 className="text-center text-xl font-semibold">
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
                  <p className="mt-3 px-2 text-center text-sm font-semibold leading-snug text-soft">
                    {step.title}
                  </p>
                  <p className="mt-1.5 px-2 text-center text-xs leading-relaxed text-muted">
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
          <h2 className="text-center text-xl font-semibold">{t.faq.title}</h2>
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
          <h2 className="text-xl font-semibold">{t.bottomCtaTitle}</h2>
          <p className="text-base leading-relaxed text-soft">
            {t.bottomCtaText}
          </p>
          <Button
            href={ctaHref}
            {...consultLinkProps}
            variant="primary"
            size="lg"
            className="font-semibold"
            onClick={() =>
              track("Service Bottom CTA Click", {
                locale,
                destination: locale === "mn" ? "messenger" : "contact",
              })
            }
          >
            {t.ctaLabel}
          </Button>
        </div>
      </SectionShell>
    </div>
  );
}
