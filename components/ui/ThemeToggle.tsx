"use client";

import { useRef, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * テーマ切替ボタン。
 *
 * View Transitions API 対応ブラウザでは、クリック位置から円形ワイプで
 * dark / light を切り替えるアニメーションを行う。対応していないブラウザでは
 * 通常通り即時切替されるだけで、UI は壊れない。
 */
type ThemeToggleProps = {
  variant?: "header" | "dock";
};

export default function ThemeToggle({
  variant = "header",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getClientSnapshot,
    getServerSnapshot,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  // When not yet mounted, assume dark to avoid hydration mismatch
  const isDark = mounted ? resolvedTheme !== "light" : true;
  const isDock = variant === "dock";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";

    // View Transitions が無いブラウザ／prefers-reduced-motion ON の場合は即時切替
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      !("startViewTransition" in document) ||
      reduceMotion ||
      typeof window === "undefined"
    ) {
      setTheme(next);
      return;
    }

    // クリック位置を起点に円形ワイプを行う。半径は画面の対角線を超える長さに
    // すれば確実に画面全体を覆える。
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : event.clientX;
    const y = rect ? rect.top + rect.height / 2 : event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);
    root.style.setProperty("--vt-end-radius", `${endRadius}px`);

    const transition = (
      document as unknown as {
        startViewTransition: (cb: () => void) => { finished: Promise<void> };
      }
    ).startViewTransition(() => {
      setTheme(next);
    });

    // 終了後に root から transient な変数を掃除
    transition.finished
      .catch(() => {
        /* noop: ユーザがすぐ別操作してもログを汚さない */
      })
      .finally(() => {
        root.style.removeProperty("--vt-x");
        root.style.removeProperty("--vt-y");
        root.style.removeProperty("--vt-end-radius");
      });
  };

  const icon = (
    <>
      <Sun
        className={cn(
          "relative z-10 hidden h-4 w-4 transition-transform duration-300 dark:block",
          !isDock && "group-hover:rotate-12 group-hover:scale-110",
        )}
      />
      <Moon
        className={cn(
          "relative z-10 h-4 w-4 transition-transform duration-300 dark:hidden",
          !isDock && "group-hover:-rotate-12 group-hover:scale-110",
        )}
      />
    </>
  );

  if (isDock) {
    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="desktop-dock-theme-toggle"
      >
        <span className="desktop-dock-icon" aria-hidden="true">
          {icon}
        </span>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-theme backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-1)] hover:bg-card-strong hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
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
      {icon}
    </button>
  );
}
