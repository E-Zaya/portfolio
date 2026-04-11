"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { PostMeta } from "@/lib/notion";
import type { Locale } from "@/lib/i18n";

type Props = {
  posts: PostMeta[];
  tags: string[];
  locale: Locale;
};

export default function BlogListClient({ posts, tags, locale }: Props) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredPosts = useMemo(() => {
    if (selectedTag === "all") return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="space-y-6">
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedTag("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
            selectedTag === "all"
              ? "border-transparent text-white bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2),var(--accent-3))] shadow-theme"
              : "border-border bg-card text-muted hover:bg-card-strong hover:text-foreground hover:border-white/25"
          }`}
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedTag === tag
                ? "border-transparent text-white bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2),var(--accent-3))] shadow-theme"
                : "border-border bg-card text-muted hover:bg-card-strong hover:text-foreground hover:border-white/25"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="apple-panel rounded-[20px] px-6 py-12 text-center">
          <p className="text-base font-medium text-foreground">No posts found.</p>
          <p className="mt-2 text-sm text-muted">Try a different tag.</p>
        </div>
      )}
    </div>
  );
}
