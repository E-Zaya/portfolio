import Link from "next/link";
import { cn } from "@/lib/cn";
import { withLocale, type Locale } from "@/lib/i18n";

type HeaderNavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  locale: Locale;
  currentPath: string;
  items: readonly HeaderNavItem[];
  onNavigate: () => void;
};

export default function MobileMenu({
  locale,
  currentPath,
  items,
  onNavigate,
}: MobileMenuProps) {
  return (
    <div className="header-mobile-menu relative mt-3 overflow-hidden rounded-2xl p-2 shadow-[var(--header-shadow)] md:hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px header-bottom-line" />

      <div className="flex flex-col gap-1.5">
        {items.map((item) => {
          const target = withLocale(locale, item.href);
          const active = currentPath === item.href;

          return (
            <Link
              key={item.href}
              href={target}
              scroll
              onClick={onNavigate}
              className={cn(
                "header-mobile-link group relative flex min-h-12 items-center rounded-xl px-4 py-3",
                active && "header-mobile-link-active",
              )}
            >
              {active && (
                <span className="absolute inset-y-2 left-1 w-1 rounded-full bg-[var(--accent-1)]" />
              )}

              <span
                className={cn(
                  "relative z-10 block flex-1 whitespace-nowrap pr-3 text-left text-sm font-medium leading-none tracking-[0.01em]",
                  active ? "text-foreground" : "text-soft group-hover:text-foreground",
                )}
              >
                {item.label}
              </span>

              <span
                className={cn(
                  "relative z-10 h-2 w-2 shrink-0 rounded-full transition-all duration-200",
                  active
                    ? "bg-[var(--accent-1)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-1)_16%,transparent)]"
                    : "bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)] group-hover:bg-[color-mix(in_srgb,var(--foreground)_32%,transparent)]",
                )}
              />

              {!active && (
                <span className="header-mobile-link-glow pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition duration-300" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}