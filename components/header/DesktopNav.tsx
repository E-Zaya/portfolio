import Link from "next/link";
import { cn } from "@/lib/cn";
import { withLocale, type Locale } from "@/lib/i18n";

type HeaderNavItem = {
  label: string;
  href: string;
};

type DesktopNavProps = {
  locale: Locale;
  currentPath: string;
  items: readonly HeaderNavItem[];
};

export default function DesktopNav({ locale, currentPath, items }: DesktopNavProps) {
  return (
    <nav className="ml-auto mr-1 hidden items-center gap-2 md:flex">
      {items.map((item) => {
        const target = withLocale(locale, item.href);
        const active = currentPath === item.href;

        return (
          <Link
            key={item.href}
            href={target}
            className={cn(
              "header-nav-link group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              active ? "header-link-active text-foreground" : "text-soft hover:text-foreground",
            )}
          >
            <span className="relative z-10">{item.label}</span>
            <span className="header-nav-link-glow pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition duration-300 group-hover:opacity-100" />
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
  );
}
