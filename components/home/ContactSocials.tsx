"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { track } from "@vercel/analytics";
import { socialLinks } from "@/data/portfolio";
import Card from "@/components/ui/Card";
import { MESSENGER_URL } from "@/lib/contact";
import { getMessages, type Locale } from "@/lib/i18n";

export default function ContactSocials({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;

  // SNS欄ではメールを除外する
  const snsLinks = socialLinks.filter((item) => item.name !== "Email");
  const directLinks =
    locale === "mn"
      ? [
          {
            name: "Messenger",
            icon: FaFacebookMessenger,
            url: MESSENGER_URL,
            color: "var(--brand-facebook)",
          },
          ...snsLinks.filter((item) =>
            ["Facebook", "Instagram"].includes(item.name),
          ),
        ]
      : snsLinks;

  return (
    <Card strong className="rounded-3xl p-4 sm:p-6 md:p-7">
      <p className="text-sm uppercase tracking-[0.22em] text-muted">
        {t.socialTitle}
      </p>

      <div className="mt-6 space-y-3">
        {directLinks.map((item) => {
          // social icon
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              onClick={() =>
                track("Contact Channel Click", {
                  locale,
                  channel: item.name.toLowerCase(),
                })
              }
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 transition duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:py-4"
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
