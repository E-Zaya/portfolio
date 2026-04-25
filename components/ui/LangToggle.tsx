"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type LangItem = {
  code: Locale;
  label: string;
  flagSrc: string;
  accent: string;
};

const LANGS: LangItem[] = [
  {
    code: "en",
    label: "English",
    flagSrc: "/icons/flag-us.svg",
    accent: "var(--accent-1)",
  },
  {
    code: "ja",
    label: "日本語",
    flagSrc: "/icons/flag-jp.svg",
    accent: "var(--accent-3)",
  },
  {
    code: "mn",
    label: "Монгол",
    flagSrc: "/icons/flag-mn.svg",
    accent: "var(--accent-4)",
  },
];

export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LANGS.find((lang) => lang.code === locale) ?? LANGS[0];
  const options = LANGS.filter((lang) => lang.code !== locale);

  // outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;

      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    // escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative inline-flex">
      {/* current language button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex h-9 items-center gap-2 rounded-full",
          "border px-3 shadow-sm backdrop-blur-xl",
          "font-mono text-[11px] font-semibold uppercase tracking-[0.14em]",
          "text-[var(--foreground)] transition-[background,border-color,box-shadow] duration-200",
          "hover:bg-[var(--surface-soft)]",
        )}
        style={{
          borderColor: current.accent,
          background: "color-mix(in srgb, var(--header-bg) 88%, transparent)",
          boxShadow: `0 0 14px color-mix(in srgb, ${current.accent} 20%, transparent)`,
        }}
      >
        {/* current flag */}
        <Image
          src={current.flagSrc}
          alt=""
          width={20}
          height={14}
          aria-hidden="true"
          className="h-[14px] w-5 rounded-[2px] object-cover"
        />

        {/* current language code */}
        <span>{current.code.toUpperCase()}</span>

        {/* arrow */}
        <span
          aria-hidden="true"
          className={cn(
            "text-[10px] leading-none transition-transform duration-200",
            open && "rotate-180",
          )}
          style={{ color: current.accent }}
        >
          ▾
        </span>
      </button>

      {/* dropdown */}
      {open && (
        <div
          role="menu"
          className={cn(
            "absolute right-0 top-[calc(100%+8px)] z-50 min-w-full",
            "overflow-hidden rounded-2xl border p-1 shadow-lg backdrop-blur-xl",
          )}
          style={{
            borderColor: `color-mix(in srgb, ${current.accent} 45%, var(--border))`,
            background: "color-mix(in srgb, var(--header-bg) 92%, transparent)",
          }}
        >
          {options.map((lang) => (
            <Link
              key={lang.code}
              href={withLocale(lang.code, cleanPath)}
              role="menuitem"
              onClick={() => setOpen(false)}
              aria-label={lang.label}
              className={cn(
                "flex h-10 items-center gap-2 rounded-xl px-3",
                "font-mono text-[11px] font-semibold uppercase tracking-[0.14em]",
                "text-[var(--muted-foreground)] transition-[background,color] duration-200",
                "hover:bg-[var(--lang-hover-bg)] hover:text-[var(--foreground)]",
              )}
              style={
                {
                  "--lang-hover-bg": `color-mix(in srgb, ${lang.accent} 14%, transparent)`,
                } as React.CSSProperties
              }
            >
              <Image
                src={lang.flagSrc}
                alt=""
                width={20}
                height={14}
                aria-hidden="true"
                className="h-[14px] w-5 rounded-[2px] object-cover opacity-80"
              />

              <span>{lang.code.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
