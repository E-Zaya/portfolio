import { getMessages, type Locale } from "@/lib/i18n";

export default function AboutStrengths({ locale }: { locale: Locale }) {
  const t = getMessages(locale).about;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground md:text-2xl">{t.strengthsTitle}</h2>
      </div>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
        {t.strengths.map((item) => (
          <div key={item.title} className="apple-panel rounded-lg p-5 md:p-6">
            <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-7 text-soft" style={{ whiteSpace: "pre-line" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
