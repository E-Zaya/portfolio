import ContactSection from "@/components/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return <ContactSection locale={locale} />;
}
