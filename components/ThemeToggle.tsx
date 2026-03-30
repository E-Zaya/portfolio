"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved ?? "light";

    setTheme(initial);

    // ここが重要
    document.documentElement.classList.toggle("dark", initial === "dark");

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);
    localStorage.setItem("theme", next);

    // ここも修正
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return (
      <button className="glass rounded-full p-3 text-foreground">
        <Sun size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="glass rounded-full p-3 text-foreground transition hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}