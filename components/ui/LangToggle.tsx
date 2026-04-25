"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";

type LangItem = {
  code: Locale;
  label: string;
  flagSrc: string;
};

const LANGS: LangItem[] = [
  { code: "en", label: "English", flagSrc: "/icons/flag-us.svg" },
  { code: "ja", label: "日本語", flagSrc: "/icons/flag-jp.svg" },
  { code: "mn", label: "Монгол", flagSrc: "/icons/flag-mn.svg" },
];

export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const currentLang = LANGS.find((l) => l.code === locale) ?? LANGS[0];
  const otherLangs = LANGS.filter((l) => l.code !== locale);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* トリガー：フラグ＋コードのみ */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="glass inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground transition hover:shadow-theme"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Language menu"
      >
        <Image
          src={currentLang.flagSrc}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] rounded-sm object-cover"
          aria-hidden="true"
        />
        <span className="text-xs tracking-widest uppercase opacity-70">
          {currentLang.code}
        </span>
      </button>

      {/* ドロップダウン */}
      {open && (
        <div
          className="glass-strong absolute right-0 top-[calc(100%+8px)] z-50 w-[160px] overflow-hidden rounded-2xl p-1.5"
          role="menu"
          aria-label="Select language"
        >
          {otherLangs.map((item) => (
            <Link
              key={item.code}
              href={withLocale(item.code, cleanPath)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-white/10"
              role="menuitem"
            >
              <Image
                src={item.flagSrc}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-sm object-cover"
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
