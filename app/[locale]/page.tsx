import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SectionReveal from "@/components/SectionReveal";
import ContactSection from "@/components/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return (
    <>
      <Hero locale={locale} />
      <SectionReveal delay={0}>
        <Skills locale={locale} />
      </SectionReveal>
      <ContactSection locale={locale} />
    </>
  );
}
