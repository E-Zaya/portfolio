import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { getMessages, type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection({
  locale,
  initialMessage = "",
}: {
  locale: Locale;
  initialMessage?: string;
}) {
  const t = getMessages(locale).contact;

  return (
    <section className="section-space relative overflow-hidden">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            {/* お問い合わせページの見出しなので h1 */}
            <h1 className="heading-display text-2xl text-foreground sm:text-4xl">
              {t.titleA} <MarkerHighlight>{t.titleB}</MarkerHighlight>
            </h1>

            <div className="gradient-line mx-auto mt-5 h-px w-28" />
          </div>

          {/* items-stretch + h-full で左右カラムの下端を揃える */}
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <ContactForm
                key={initialMessage}
                locale={locale}
                initialMessage={initialMessage}
              />
            </div>

            <div className="h-full">
              <ContactSocials locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
