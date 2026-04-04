"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { getMessages, stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";
import Image from "next/image";
function Logo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/30 blur-xl" />
      <div className="logo-shell relative">
        <div className="logo-inner">
          <svg
            width="28"
            height="28"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <defs>
              <linearGradient id="startup" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>

            <path
              d="M12 48 L36 16 L18 16 L42 16 L18 48 L42 48"
              stroke="url(#startup)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const t = getMessages(locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);
      setHidden(currentScrollY > lastScrollY.current && currentScrollY > 120);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-custom">
        <div
          className={cn(
            "header-shell relative overflow-hidden rounded-2xl transition-all duration-300",
            scrolled ? "px-4 py-3 sm:px-5" : "px-4 py-4 sm:px-5",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.06] via-transparent to-cyan-400/[0.06]" />

          <div className="relative flex items-center justify-between gap-3">
            <Link
              href={withLocale(locale, "/")}
              className="group flex min-w-0 items-center gap-3 transition"
              aria-label={t.header.logoAria}
            >
              <div className="transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Logo />
              </div>             

              <div className="min-w-0 flex-col leading-none sm:flex">
                <span className="truncate bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
                  Zaya
                </span>
                <span className="truncate text-xs text-soft">{t.header.subtitle}</span>
              </div>

              {/* Image */}
              <Image
                src="/character.png"
                alt="logo"
                width={90}
                height={50}
              />
            </Link>

            <nav className="ml-auto mr-1 hidden items-center gap-2 md:flex">
              {t.nav.map((item) => {
                const target = withLocale(locale, item.href);
                const active = cleanPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={target}
                    className={cn(
                      "group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                      active
                        ? "header-link-active text-foreground"
                        : "text-soft hover:text-foreground",
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />
                    {active && (
                      <>
                        <span className="pointer-events-none absolute inset-0 rounded-full border border-[var(--header-active-border)]" />
                        <span className="absolute left-1/2 top-full mt-1 h-[3px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <LangToggle locale={locale} />
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LangToggle locale={locale} />
              <ThemeToggle />
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="header-icon-button"
                aria-label={t.header.menuAria}
                type="button"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-60" />

          {open && (
            <div className="relative mt-4 flex flex-col gap-2 border-t border-[var(--header-divider)] pt-4 md:hidden">
              {t.nav.map((item) => {
                const target = withLocale(locale, item.href);
                const active = cleanPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={target}
                    scroll
                    onClick={() => setOpen(false)}
                    className={cn(
                      "relative rounded-xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "header-mobile-link-active text-foreground"
                        : "text-soft hover:bg-[var(--header-hover)] hover:text-foreground",
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {!active && (
                      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-400/10 opacity-0 blur-md transition duration-300 hover:opacity-100" />
                    )}
                    {active && (
                      <span className="absolute bottom-2 left-4 h-[3px] w-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
