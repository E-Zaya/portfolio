"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // When not yet mounted, assume dark to avoid hydration mismatch
  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-theme backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-1)] hover:bg-card-strong hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
    >
      {/* radial glow on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, color-mix(in srgb, var(--accent-1) 24%, transparent), transparent 65%)",
        }}
      />
      {/* icon changes with theme */}
      <Sun className="relative z-10 hidden h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 dark:block" />
      <Moon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 dark:hidden" />
    </button>
  );
}