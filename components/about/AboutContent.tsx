import AboutHero from "@/components/about/AboutHero";
import AboutSocialLinks from "@/components/about/AboutSocialLinks";
import AboutStrengths from "@/components/about/AboutStrengths";
import { type Locale } from "@/lib/i18n";

export default function AboutContent({ locale }: { locale: Locale }) {
  return (
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
              background: "color-mix(in srgb, var(--accent-4) 14%, transparent)",
            }}
          />

          <div className="relative z-10 space-y-14 md:space-y-16">
            <AboutHero locale={locale} />
            <AboutStrengths locale={locale} />
            <AboutSocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}