import Card from "@/components/ui/Card";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";
import HeroAvailabilityStatus from "./HeroAvailabilityStatus";
import HeroContent from "./HeroContent";
// HeroVisual(Zaya Studioプレビュー)は温存中 — 気に入っているので別の場所で再利用予定。
// 戻す場合: import HeroVisual from "./HeroVisual" にして下のHeroShowcaseと入れ替えるだけ。
import HeroShowcase from "./HeroShowcase";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;

  return (
    <SectionShell className="pt-1 sm:pt-2">
      <Card
        gradientBorder
        className="relative overflow-hidden rounded-3xl px-5 py-6 sm:px-6 sm:py-7 md:px-10 md:py-9 lg:px-14 lg:py-10"
      >
        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(color-mix(in srgb, var(--foreground) 4%, transparent) 1px, transparent 1px),
              linear-gradient(90deg, color-mix(in srgb, var(--foreground) 4%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />


        {/* top rule */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, color-mix(in srgb, var(--accent-1) 70%, transparent) 40%, color-mix(in srgb, var(--accent-2) 60%, transparent) 65%, transparent 95%)",
          }}
        />

        {/* meta bar — editorial */}
        <div className="relative z-10 mb-4 flex flex-wrap items-center justify-between gap-y-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted md:mb-5 md:text-[11px]">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "var(--accent-1)",
                  boxShadow:
                    "0 0 0 3px color-mix(in srgb, var(--accent-1) 25%, transparent)",
                }}
              />
              <span
                className="absolute inset-0 animate-ping rounded-full"
                style={{ background: "var(--accent-1)", opacity: 0.6 }}
              />
            </span>
            <HeroAvailabilityStatus status={t.meta.status} />
          </div>
          <div className="font-mono text-[10px] tracking-[0.18em] md:text-[11px]">
            {t.meta.focus}
          </div>
        </div>

        {/* hairline divider under meta bar */}
        <div
          aria-hidden
          className="relative z-10 mb-6 h-px md:mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--foreground) 14%, transparent) 50%, transparent)",
          }}
        />

        {/* main two-column layout */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <HeroContent locale={locale} />
          </div>
          {/* pt: Zazaのはみ出し(-top-12=48px)分 / pb: 手書き注釈(-bottom-16=64px)分。
              Cardがoverflow-hiddenなので不足すると見切れる */}
          <div className="min-w-0 pb-16 pt-12 lg:col-span-5 lg:pb-8 lg:pt-0">
            <HeroShowcase locale={locale} />
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
