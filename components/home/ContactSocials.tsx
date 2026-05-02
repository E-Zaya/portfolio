import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import Card from "@/components/ui/Card";
import { getMessages, type Locale } from "@/lib/i18n";

export default function ContactSocials({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;

  // SNS欄ではメールを除外する
  const snsLinks = socialLinks.filter((item) => item.name !== "Email");

  return (
    <Card strong className="rounded-[24px] p-4 sm:rounded-[32px] sm:p-6 md:p-7">
      <p className="text-sm uppercase tracking-[0.22em] text-muted">
        {t.socialTitle}
      </p>

      <div className="mt-6 space-y-3">
        {snsLinks.map((item) => {
          // social icon
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 transition duration-300 hover:scale-[1.01] md:py-4"
            >
              <div className="flex items-center gap-4">
                {/* icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card-strong">
                  <Icon
                    className="h-5 w-5 shrink-0"
                    style={{ color: item.color }}
                  />
                </div>

                {/* text */}
                <div>
                  <p className="text-sm text-muted">{t.connectVia}</p>
                  <p className="text-base font-medium tracking-[-0.01em] text-foreground">
                    {item.name}
                  </p>
                </div>
              </div>

              {/* arrow */}
              <ArrowUpRight className="h-4 w-4 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card-strong p-3 shadow-theme md:p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {t.availabilityLabel}
        </p>
        <p className="mt-2 text-sm leading-7 text-soft">{t.availability}</p>
      </div>
    </Card>
  );
}