import { getContactBrief, type ContactContext } from "@/lib/contact-brief";
import ContactSection from "@/components/home/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return buildPageMetadata(params, "contact", "/contact");
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<ContactContext>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  return (
    <ContactSection
      locale={locale}
      initialMessage={getContactBrief(locale, await searchParams)}
    />
  );
}
