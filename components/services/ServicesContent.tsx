"use client";

import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";

const PLAN_KEYS = ["simple", "starter", "custom"] as const;
const FEE_KEYS = ["production", "maintenance", "external"] as const;

/** Checkmark icon used in plan detail lists and target audience */
function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 services-check-icon"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Arrow icon used in CTA buttons */
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

export default function ServicesContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).services;
  const ctaHref = `/${locale}/contact`;

  return (
    <>
      {/* ── Hero ── */}
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="section-title">{t.title}</h1>
          <p className="text-lg font-semibold text-soft">{t.subtitle}</p>
          <p className="text-base leading-relaxed text-muted">{t.intro}</p>
        </div>
      </SectionShell>

      {/* ── 価格プラン ── */}
      <SectionShell>
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold services-accent-pill">
              <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full services-accent-dot" />
              {t.introNote}
            </div>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN_KEYS.map((key) => {
              const plan = t.plans[key];
              const badge = "badge" in plan ? plan.badge : undefined;
              const timeline = "timeline" in plan ? plan.timeline : undefined;
              const isRecommended = Boolean(badge);

              return (
                <Card
                  key={key}
                  gradientBorder={isRecommended}
                  className={[
                    "flex flex-col rounded-3xl p-6 transition-transform duration-200",
                    isRecommended
                      ? "services-recommended-card services-recommended-scale services-recommended-ring"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* plan header */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {plan.name}
                    </h3>
                    {badge && (
                      <Badge className="whitespace-nowrap text-xs font-medium">
                        {badge}
                      </Badge>
                    )}
                  </div>

                  {/* price */}
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {plan.price}
                  </p>

                  {/* description */}
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {plan.description}
                  </p>

                  {/* detail list */}
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {plan.details.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* timeline */}
                  {timeline && (
                    <p className="mt-4 text-xs font-semibold services-timeline">
                      ⏱ {timeline}
                    </p>
                  )}

                  {/* note */}
                  {plan.note && (
                    <p className="mt-4 text-xs leading-relaxed text-soft">
                      {plan.note}
                    </p>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={ctaHref}
                      className={[
                        "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90",
                        isRecommended
                          ? "services-primary-button services-cta-hover-scale"
                          : "border border-border text-soft services-secondary-button",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {t.ctaLabel}
                      <ArrowIcon />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionShell>

      {/* ── このサービスが向いている方 ── */}
      <SectionShell>
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-center text-2xl font-semibold">
            {t.targetAudience.title}
          </h2>
          <Card className="rounded-3xl p-6 sm:p-8">
            <ul className="space-y-3">
              {t.targetAudience.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-soft">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionShell>

      {/* ── 選ばれる理由 ── */}
      <SectionShell>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            {t.reasons.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.reasons.items.map((item) => (
              <Card key={item.title} className="services-reason-card rounded-2xl p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ── 制作で考えること ── */}
      <SectionShell>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            {t.philosophy.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.philosophy.items.map((item, index) => (
              <Card key={item.title} className="services-philosophy-card rounded-2xl p-6">
                <div className="services-philosophy-number">{index + 1}</div>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ── ご利用の流れ ── */}
      <SectionShell>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            {t.process.title}
          </h2>

          {/* desktop stepper */}
          <div className="hidden items-start sm:flex">
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
          <ol className="space-y-0 sm:hidden">
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
                  <div className={["pt-1", isLast ? "" : "pb-6"].filter(Boolean).join(" ")}>
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

      {/* ── 費用の違い ── */}
      <SectionShell>
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold">{t.fees.title}</h2>
            <p className="text-sm text-muted">{t.fees.description}</p>
          </div>

          <Card className="rounded-3xl p-6 services-fee-list">
            {FEE_KEYS.map((key) => {
              const item = t.fees[key];

              return (
                <div
                  key={key}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 whitespace-nowrap rounded-md border px-1.5 py-0.5 text-xs font-bold services-fee-label">
                    {item.title}
                  </span>
                  <p className="text-sm leading-relaxed text-soft">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </Card>

          {/* 納品について */}
          <Card className="rounded-2xl p-5 services-delivery-card">
            <p className="text-xs font-bold services-fee-label-inline">
              {t.fees.delivery.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.fees.delivery.description}
            </p>
          </Card>
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
                  <span className="services-faq-icon" aria-hidden="true">+</span>
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
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 services-gradient-button services-cta-hover-scale"
          >
            {t.ctaLabel}
            <ArrowIcon />
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
