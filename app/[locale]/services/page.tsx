import { isLocale, type Locale } from "@/lib/i18n";
import ServicesContent from "@/components/services/ServicesContent";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return buildPageMetadata(params, "services", "/services");
}

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