import Button from "@/components/ui/Button";
import { socialLinks } from "@/data/portfolio";
import { getMessages, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale).footer;

  return (
    <footer className="pb-6 pt-3 md:pb-10 md:pt-4">
      <div className="container-custom">
        <div className="glass rounded-[24px] px-4 py-5 sm:rounded-[28px] sm:px-6 sm:py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* footer text */}
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">
                {t.title}
              </p>

              <div className="mt-2 flex flex-col gap-1 text-xs text-soft/70 sm:flex-row sm:items-center sm:gap-2">
                <span>{t.subtitle}</span>

                <span className="hidden h-1 w-1 rounded-full bg-soft/30 sm:block" />

                <span>{t.copyright}</span>
              </div>
            </div>

            {/* social links */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                const isEmail = item.name === "Email";

                return (
                  <Button
                    key={item.name}
                    href={item.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    aria-label={item.name}
                    className={
                      isEmail
                        ? "inline-flex items-center gap-2 px-4 py-3"
                        : "inline-flex h-12 w-12 items-center justify-center p-0"
                    }
                  >
                    {/* icon */}
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: item.color }}
                    />

                    {/* email label */}
                    {isEmail && <span>メール</span>}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}