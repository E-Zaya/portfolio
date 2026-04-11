"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";
import Logo from "./header/Logo";
import {
  getMessages,
  stripLocaleFromPathname,
  withLocale,
  type Locale,
} from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const t = getMessages(locale);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
            "header-shell relative rounded-2xl transition-all duration-300",
            scrolled ? "px-3 py-3 sm:px-5" : "px-3 py-4 sm:px-5",
          )}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/[0.06] via-transparent to-cyan-400/[0.06]" />

          <div className="relative flex min-h-[64px] items-center justify-between gap-3 sm:gap-4">
            <Link
              href={withLocale(locale, "/")}
              className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 transition"
              aria-label={t.header.logoAria}
            >
              <div className="shrink-0 transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Logo />
              </div>

              <div className="min-w-0 leading-none">
                <span className="block truncate bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-base font-semibold tracking-[-0.02em] text-transparent sm:text-lg">
                  Zaya
                </span>
                <span className="block truncate text-xs text-soft">
                  {t.header.subtitle}
                </span>
              </div>

              <div className="ml-1 hidden shrink-0 min-[430px]:block">
                <Image
                  src="/character.png"
                  alt="Mascot character"
                  width={72}
                  height={40}
                  className="h-auto w-[60px] sm:w-[72px]"
                />
              </div>
            </Link>

            <DesktopNav locale={locale} currentPath={cleanPath} items={t.nav} />

            <div className="flex shrink-0 items-center gap-2">
              <LangToggle locale={locale} />
              <ThemeToggle />

              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="header-icon-button inline-flex h-11 w-11 items-center justify-center p-0 md:hidden"
                aria-label={t.header.menuAria}
                aria-expanded={mobileOpen}
                type="button"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden">
              <MobileMenu
                locale={locale}
                currentPath={cleanPath}
                items={t.nav}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
          )}

          <div className="header-bottom-line pointer-events-none absolute bottom-0 left-0 h-px w-full" />
        </div>
      </div>
    </header>
  );
}