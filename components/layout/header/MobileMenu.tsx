"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
type HeaderNavItem = { label: string; href: string };
type MobileMenuProps = {
  locale: Locale;
  currentPath: string;
  primaryItems: readonly HeaderNavItem[];
  items: readonly HeaderNavItem[];
  onClose: (options?: { restoreFocus?: boolean }) => void;
};
const labels = {
  ja: ["サイトメニュー", "メニューを閉じる"],
  en: ["Site menu", "Close menu"],
  mn: ["Сайтын цэс", "Цэс хаах"],
};
const focusableSelector = 'a[href], button:not([disabled]), [tabindex="0"]';
export default function MobileMenu({
  locale,
  currentPath,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const restoreFocusOnCloseRef = useRef(true);
  const nav = getMessages(locale).nav;
  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const getFocusableElements = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [],
      ).filter(
        (element) =>
          element.tabIndex !== -1 && !element.hasAttribute("disabled"),
      );

    const focusTimer = window.setTimeout(() => {
      const firstFocusable = getFocusableElements()[0];
      (firstFocusable ?? panelRef.current)?.focus({ preventScroll: true });
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocusOnCloseRef.current = true;
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        event.preventDefault();
        panelRef.current?.focus({ preventScroll: true });
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus({ preventScroll: true });
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus({ preventScroll: true });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (restoreFocusOnCloseRef.current) {
        lastFocusedElementRef.current?.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  const closeMenu = (options: { restoreFocus?: boolean } = {}) => {
    restoreFocusOnCloseRef.current = options.restoreFocus ?? true;
    onClose(options);
  };

  return createPortal(
    <div
      className="compact-menu-overlay"
      data-locale={locale}
      onClick={() => closeMenu()}
    >
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compact-menu-title"
        tabIndex={-1}
        id="site-drawer"
        className="compact-menu-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="compact-menu-top">
          <h2 id="compact-menu-title">{labels[locale][0]}</h2>
          <button
            type="button"
            aria-label={labels[locale][1]}
            onClick={() => closeMenu()}
          >
            <X size={20} />
          </button>
        </div>
        <nav>
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={withLocale(locale, item.href)}
              aria-current={
                currentPath === item.href ||
                currentPath.startsWith(item.href + "/")
                  ? "page"
                  : undefined
              }
              onClick={() => closeMenu({ restoreFocus: false })}
            >
              <span className="compact-menu-number">0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={19} aria-hidden />
            </Link>
          ))}
        </nav>
      </section>
    </div>,
    document.body,
  );
}
