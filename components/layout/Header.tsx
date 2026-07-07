"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import ThemeToggle from "../ui/ThemeToggle";
import LangToggle from "../ui/LangToggle";
import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";
import Logo from "./header/Logo";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import {
  getMessages,
  stripLocaleFromPathname,
  withLocale,
  type Locale,
} from "@/lib/i18n";

const primaryNavHrefs = ["/services", "/projects", "/blog"] as const;

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const t = getMessages(locale);
  const primaryNavItems = t.nav.filter((item) =>
    primaryNavHrefs.includes(item.href as (typeof primaryNavHrefs)[number]),
  );
  const drawerNavItems = t.nav.filter(
    (item) => !primaryNavHrefs.includes(item.href as (typeof primaryNavHrefs)[number]),
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, hidden } = useHeaderScroll();
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        scrolled ? "py-1.5" : "py-2.5",
      )}
    >
      <div className="container-custom">
        <div
          className={cn(
            "header-shell relative rounded-2xl transition-all duration-300",
            scrolled ? "px-3 py-1.5 sm:px-5" : "px-3 py-2 sm:px-5",
          )}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-400/8 via-transparent to-cyan-400/6" />

          <div className="relative flex min-h-12 items-center justify-between gap-3 sm:gap-4">
            <Link
              href={withLocale(locale, "/")}
              className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 transition"
              aria-label={t.header.logoAria}
            >
              <div className="shrink-0 transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Logo />
              </div>

              <div className="min-w-0 leading-none">
                <span className="block truncate bg-linear-to-r from-indigo-400 to-cyan-300 bg-clip-text text-base font-semibold tracking-[-0.02em] text-transparent sm:text-lg">
                  Zaya
                </span>
                <span className="block truncate text-xs text-soft">
                  {t.header.subtitle}
                </span>
              </div>
{/* ノイズになってたので、今は消す。いつかヒーローセクションで復活させる！ */}
 {/* <ZazaHeaderAnimations
  variant="tilt"
  src="/Zaza/zaza-main.png"
  width={220}
  height={220}
  className="w-[110px] sm:w-[130px] lg:w-[150px]"
  priority
/> */}
            </Link>

            <DesktopNav locale={locale} currentPath={cleanPath} items={primaryNavItems} />

            <div className="flex shrink-0 items-center gap-2">
              <LangToggle locale={locale} />
              <ThemeToggle />

              <button
                onClick={toggleMobileMenu}
                className="header-icon-button inline-flex h-11 w-11 items-center justify-center p-0"
                aria-label={t.header.menuAria}
                aria-expanded={mobileOpen}
                aria-controls="site-drawer"
                type="button"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <MobileMenu
              locale={locale}
              currentPath={cleanPath}
              primaryItems={primaryNavItems}
              items={drawerNavItems}
              onClose={closeMobileMenu}
            />
          )}

          <div className="header-bottom-line pointer-events-none absolute bottom-0 left-0 h-px w-full" />
        </div>
      </div>
    </header>
  );
}
