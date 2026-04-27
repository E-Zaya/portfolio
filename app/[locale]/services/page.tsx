import { isLocale, type Locale } from "@/lib/i18n";
import ServicesContent from "@/components/services/ServicesContent";

/**
 * Services & Pricing page for each locale. Resolves the locale from the URL
 * segment and falls back to English if unsupported. Delegates rendering to
 * the ServicesContent component which reads i18n messages.
 */
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return <ServicesContent locale={locale} />;
}