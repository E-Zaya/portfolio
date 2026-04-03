import Button from "@/components/ui/Button";
import { socialLinks } from "@/data/portfolio";
import { getMessages, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale).footer;

  return (
    <footer className="pb-10 pt-4">
      <div className="container-custom">
        <div className="glass rounded-[28px] px-6 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground">{t.title}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-soft/70">
                  <span>{t.subtitle}</span>
                  <span className="h-1 w-1 rounded-full bg-soft/30" /> {/* 小さなドット */}
                  <span>{t.copyright}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Button
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
