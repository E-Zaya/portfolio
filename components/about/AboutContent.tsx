import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import AboutSocialLinks from "@/components/about/AboutSocialLinks";
import AboutStrengths from "@/components/about/AboutStrengths";
import Skills from "@/components/home/Skills";
import { getMessages, type Locale } from "@/lib/i18n";

export default function AboutContent({ locale }: { locale: Locale }) {
  return (
    <>
    <section className="section-space">
      <div className="container-custom">
        <div className="apple-panel gradient-border relative overflow-hidden rounded-3xl sm:rounded-4xl px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="hero-bg pointer-events-none absolute inset-0 z-0" />

          <div
            className="pointer-events-none absolute left-[-40px] top-[-40px] z-0 h-40 w-40 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--accent-1) 14%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[-50px] right-[-30px] z-0 h-48 w-48 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--accent-2) 14%, transparent)",
            }}
          />

          <div className="relative z-10 space-y-14 md:space-y-16">
            <AboutHero locale={locale} />
            <AboutStrengths locale={locale} />
            <ZazaCard locale={locale} />
            <AboutSocialLinks />
          </div>
        </div>
      </div>
    </section>

    {/* Tech Stack — 技術情報はAboutにのみ置く方針(同業者・紹介案件向けの控えめな置き場) */}
    <Skills locale={locale} />
    </>
  );
}

/** 相棒紹介カード — マスコットに物語を持たせて「かわいい」を「ブランド」にする */
function ZazaCard({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about.zaza;

  return (
    <div
      className="mx-auto flex max-w-xl items-center gap-5 rounded-3xl border p-5 sm:p-6"
      style={{
        borderColor: "color-mix(in srgb, var(--marker-ink) 30%, var(--border))",
        background: "color-mix(in srgb, var(--marker-ink) 6%, transparent)",
      }}
    >
      <Image
        src="/Zaza/mascot/zaza-proud.png"
        alt={t.name}
        width={96}
        height={96}
        className="w-16 shrink-0 sm:w-20"
      />
      <div>
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg font-black text-foreground">{t.name}</span>
          <span
            className="text-xs font-bold"
            style={{ color: "var(--marker-ink)" }}
          >
            {t.role}
          </span>
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-soft">
          {t.description}
        </p>
      </div>
    </div>
  );
}