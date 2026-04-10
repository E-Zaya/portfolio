import AboutContent from "@/components/about/AboutContent";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return <AboutContent locale={locale} />;
}
