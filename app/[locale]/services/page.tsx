import { isLocale, type Locale } from "@/lib/i18n";
import ServicesContent from "@/components/services/ServicesContent";

/**
 データはすべてlibからとってきてる。*/
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  return <ServicesContent locale={locale} />;
}