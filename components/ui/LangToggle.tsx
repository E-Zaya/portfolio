"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type LangItem = {
  code: Locale;
  label: string;
  flagSrc: string;
  accent: string;
};

// 表示優先度順（ja → mn → en）。accent はサイト統一色(accent-2)に揃えた。
const LANGS: LangItem[] = [
  {
    code: "ja",
    label: "日本語",
    flagSrc: "/icons/flag-jp.svg",
    accent: "var(--accent-2)",
  },
  {
    code: "mn",
    label: "Монгол",
    flagSrc: "/icons/flag-mn.svg",
    accent: "var(--accent-2)",
  },
  {
    code: "en",
    label: "English",
    flagSrc: "/icons/flag-us.svg",
    accent: "var(--accent-2)",
  },
];

export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LANGS.find((lang) => lang.code === locale) ?? LANGS[0];

  // 外側クリック・Escape で閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
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
      {/* === ボタン本体（ミニマル路線） === */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
        className={cn(
          "group inline-flex h-9 items-center gap-2 rounded-full",
          "border px-3 backdrop-blur-xl",
          "font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground",
          "transition-[transform,background,border-color,box-shadow] duration-200",
          "hover:-translate-y-0.5",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]",
        )}
        style={{
          borderColor: `color-mix(in srgb, ${current.accent} 55%, var(--border))`,
          background: "color-mix(in srgb, var(--header-bg) 88%, transparent)",
          boxShadow: `0 0 14px color-mix(in srgb, ${current.accent} 18%, transparent)`,
        }}
      >
        <Image
          src={current.flagSrc}
          alt=""
          width={20}
          height={14}
          aria-hidden="true"
          className="h-3.5 w-5 rounded-[3px] object-cover"
        />

        <span>{current.code.toUpperCase()}</span>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          style={{ color: current.accent }}
        />
      </button>

      {/* === ドロップダウン === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            aria-label="Select language"
            className={cn(
              "absolute right-0 top-[calc(100%+8px)] z-50 min-w-[200px]",
              "overflow-hidden rounded-2xl border p-1.5 backdrop-blur-xl",
            )}
            style={{
              borderColor: `color-mix(in srgb, ${current.accent} 38%, var(--border))`,
              background: "color-mix(in srgb, var(--header-bg-strong) 94%, transparent)",
              boxShadow: `0 16px 40px color-mix(in srgb, ${current.accent} 14%, rgba(0,0,0,0.28)), 0 0 0 1px color-mix(in srgb, var(--foreground) 4%, transparent)`,
            }}
          >
            {LANGS.map((lang, index) => {
              const isCurrent = lang.code === locale;

              const item = (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: 0.04 + index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "relative flex h-11 w-full items-center gap-3 rounded-xl px-3",
                    "transition-[background,color] duration-200",
                  )}
                  style={
                    {
                      // CSS変数として渡しておくと、:hover の中で参照できる
                      "--lang-accent": lang.accent,
                    } as React.CSSProperties
                  }
                >
                  {/* アクティブ時の左バー */}
                  {isCurrent && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full"
                      style={{ background: lang.accent }}
                    />
                  )}

                  {/* 国旗 */}
                  <Image
                    src={lang.flagSrc}
                    alt=""
                    width={22}
                    height={16}
                    aria-hidden="true"
                    className={cn(
                      "h-4 w-[22px] flex-shrink-0 rounded-[3px] object-cover",
                      !isCurrent && "opacity-85",
                    )}
                  />

                  {/* 言語コード + 名前 */}
                  <span className="flex min-w-0 flex-1 items-baseline gap-2">
                    <span
                      className={cn(
                        "font-mono text-[11px] font-semibold uppercase tracking-[0.16em]",
                        isCurrent ? "text-foreground" : "text-soft",
                      )}
                    >
                      {lang.code.toUpperCase()}
                    </span>
                    <span
                      className={cn(
                        "truncate text-[12px]",
                        isCurrent ? "text-foreground" : "text-muted",
                      )}
                    >
                      {lang.label}
                    </span>
                  </span>

                  {/* 現在言語のチェック */}
                  {isCurrent && (
                    <Check
                      aria-hidden="true"
                      className="h-3.5 w-3.5 flex-shrink-0"
                      style={{ color: lang.accent }}
                    />
                  )}
                </motion.span>
              );

              if (isCurrent) {
                return (
                  <div
                    key={lang.code}
                    role="menuitem"
                    aria-current="true"
                    className="lang-row-current cursor-default"
                  >
                    {item}
                  </div>
                );
              }

              return (
                <Link
                  key={lang.code}
                  href={withLocale(lang.code, cleanPath)}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  aria-label={lang.label}
                  className="lang-row block focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)] focus-visible:rounded-xl"
                >
                  {item}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
