"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";

export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const items: Locale[] = ["en", "ja"];

  return (
    <div className="glass flex items-center rounded-full p-1">
      {items.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={withLocale(item, cleanPath)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.16em] transition",
              active
                ? "bg-card-strong text-foreground shadow-theme"
                : "text-soft hover:text-foreground",
            )}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
