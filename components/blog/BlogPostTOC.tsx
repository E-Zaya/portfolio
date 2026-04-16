"use client";

import { useEffect, useMemo, useState } from "react";
import { getMessages, type Locale } from "@/lib/i18n";
import { truncateText } from "@/components/blog/blog-utils";

export type BlogHeading = {
  // [FIX] TOC型統一
  id: string;
  text: string;
  level: 2 | 3;
};

type Props = {
  // [FIX] props統一
  headings: BlogHeading[];
  locale: Locale;
  // [FIX] mobile / desktop の両方で mount されても observer が二重起動しないようにする
  mode?: "all" | "mobile" | "desktop";
};

export default function BlogPostTOC({ headings, locale, mode = "all" }: Props) {
  const t = getMessages(locale).blog;
  const [active, setActive] = useState("");

  // [FIX] 現在の表示モードでだけ active tracking を有効にする
  const shouldTrackActiveHeading = useMemo(() => {
    if (typeof window === "undefined") return true;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (mode === "desktop") return isDesktop;
    if (mode === "mobile") return !isDesktop;
    return true;
  }, [mode]);

  useEffect(() => {
    // [FIX] 非表示側の TOC では observer を起動しない
    if (!headings.length || !shouldTrackActiveHeading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
          );

        if (visible[0]) {
          setActive((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings, shouldTrackActiveHeading]);

  if (!headings.length) return null;

  return (
    <aside className="rounded-[24px] border border-border bg-card p-5 shadow-theme backdrop-blur-xl lg:sticky lg:top-24">
      <h2 className="mb-4 text-sm font-semibold tracking-[0.08em] text-foreground">
        {t.toc}
      </h2>

      <nav aria-label={t.toc} className="space-y-2">
        {headings.map((heading) => {
          const isActive = active === heading.id;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block rounded-xl px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-card-strong font-medium text-foreground"
                  : "text-soft hover:bg-card-strong hover:text-foreground"
              } ${heading.level === 3 ? "ml-4" : ""}`}
              title={heading.text}
            >
              <span className="block truncate">
                {truncateText(heading.text, heading.level === 3 ? 28 : 34)}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}