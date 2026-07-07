"use client";

import Link from "next/link";
import {
  BookOpenText,
  FolderKanban,
  Mail,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
import LangToggle from "@/components/ui/LangToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "./Logo";

type HeaderNavItem = {
  label: string;
  href: string;
};

type DesktopDockProps = {
  locale: Locale;
  currentPath: string;
  items: readonly HeaderNavItem[];
};

const navIcons: Record<string, LucideIcon> = {
  "/services": Sparkles,
  "/projects": FolderKanban,
  "/blog": BookOpenText,
  "/about": UserRound,
  "/contact": Mail,
};

function isActivePath(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function DesktopDock({
  locale,
  currentPath,
  items,
}: DesktopDockProps) {
  const t = getMessages(locale);
  const homeActive = currentPath === "/";

  return (
    <aside className="desktop-dock group fixed left-5 top-1/2 z-[60] hidden -translate-y-1/2 xl:block">
      <nav className="desktop-dock-inner" aria-label="Primary">
        <Link
          href={withLocale(locale, "/")}
          aria-label={t.header.logoAria}
          aria-current={homeActive ? "page" : undefined}
          className={cn("desktop-dock-logo-link", homeActive && "desktop-dock-logo-active")}
        >
          <span className="desktop-dock-logo">
            <Logo size={38} />
          </span>
        </Link>

        <div className="desktop-dock-divider" />

        <div className="desktop-dock-nav">
          {items.map((item) => {
            const Icon = navIcons[item.href] ?? Sparkles;
            const active = isActivePath(currentPath, item.href);

            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={cn("desktop-dock-item", active && "desktop-dock-active")}
              >
                <span className="desktop-dock-icon" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="desktop-dock-label">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="desktop-dock-spacer" />

        <div className="desktop-dock-controls">
          <LangToggle locale={locale} variant="dock" />
          <ThemeToggle variant="dock" />
        </div>
      </nav>
    </aside>
  );
}
