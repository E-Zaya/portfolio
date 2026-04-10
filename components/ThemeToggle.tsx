"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
}

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const datasetTheme = document.documentElement.dataset.theme;
    if (datasetTheme === "light" || datasetTheme === "dark") {
      return datasetTheme;
    }
  }

  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  }

  return "dark";
}

export default function ThemeToggle() {
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [theme, setTheme] = useState<Theme>(getInitialTheme);


  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="glass rounded-full p-3 text-foreground transition hover:scale-110"
      aria-label={hydrated ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
      type="button"
    >
      <span suppressHydrationWarning>{hydrated && theme === "light" ? <Moon size={18} /> : <Sun size={18} />}</span>
    </button>
  );
}
