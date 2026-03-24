"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

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

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setOpen(false);
    } else {
      router.push("/");
      setOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container-custom">
        <div
            className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "px-5 py-3" : "px-5 py-4"
        }`}
>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.06] via-transparent to-cyan-400/[0.06]" />

          <div className="relative flex items-center justify-between gap-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center gap-3 transition"
              aria-label="Go to top page"
            >
              <div className="transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Logo />
              </div>

              <div className="flex flex-col leading-none">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
                  Zaya
                </span>
                <span className="text-lg font-medium bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
                
              </div>
              {/* NAVBAR menu position */}
                </Link>

                <nav className="hidden items-center gap-2 md:flex ml-auto mr-">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-white/14 text-[var(--foreground)] shadow-[0_4px_18px_rgba(255,255,255,0.08)]"
                        : "text-[var(--text-soft)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />

                    {active && (
                      <>
                        <span className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
                        <span className="absolute left-1/2 top-full mt-1 h-[3px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-full border border-white/15 bg-white/10 p-3 text-[var(--foreground)] backdrop-blur-md transition hover:bg-white/15 md:hidden"
                aria-label="Open menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
          {/* gradient bottom border */}
<div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-60" />

          {open && (
            <div className="relative mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll
                    onClick={() => setOpen(false)}
                    className={`relative rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-white/15 text-[var(--foreground)]"
                        : "text-[var(--text-soft)] hover:bg-white/10 hover:text-[var(--foreground)]"
                    }`}
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