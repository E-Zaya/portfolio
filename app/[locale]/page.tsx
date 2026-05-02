import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import SectionReveal from "@/components/Effects/SectionReveal";
import ContactSection from "@/components/home/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";
import { ProjectsContent } from "./projects/page";
import ServicesContent from "@/components/services/ServicesContent";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  return (
    <>
      <Hero locale={locale} />
      <ServicesContent locale={locale} />
      <ProjectsContent locale={locale} />
      <SectionReveal delay={0}>
        <Skills locale={locale} />
      </SectionReveal>
      <ContactSection locale={locale} />
    </>
  );
}
