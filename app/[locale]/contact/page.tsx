import ContactSection from "@/components/home/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  return <ContactSection locale={locale} />;
}
