"use client";

import { getMessages, type Locale } from "@/lib/i18n";

type Props = {
  // [FIX] props統一
  tags: string[];
  activeTag: string;
  onTagChange: (tag: string) => void;
  locale: Locale;
};

export default function BlogFilter({
  tags,
  activeTag,
  onTagChange,
  locale,
}: Props) {
  const t = getMessages(locale).blog;

  const baseClass =
    "rounded-full border px-4 py-2 text-sm font-medium transition";
  const activeClass =
    "border-foreground/10 bg-card-strong text-foreground";
  const inactiveClass =
    "border-border bg-card text-soft hover:bg-card-strong hover:text-foreground";

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-soft">{t.filterLabel}</p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          aria-pressed={activeTag === "all"}
          onClick={() => onTagChange("all")}
          className={`${baseClass} ${
            activeTag === "all" ? activeClass : inactiveClass
          }`}
        >
          {t.allTags}
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTag === tag}
            onClick={() => onTagChange(tag)}
            className={`${baseClass} ${
              activeTag === tag ? activeClass : inactiveClass
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}