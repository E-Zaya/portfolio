"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { PostMeta } from "@/lib/blog";
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
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedTag("all")}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            selectedTag === "all"
              ? "border-transparent bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2),var(--accent-3))] text-white shadow-theme"
              : "border-border bg-card text-soft hover:bg-card-strong hover:text-foreground"
          }`}
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              selectedTag === tag
                ? "border-transparent bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2),var(--accent-3))] text-white shadow-theme"
                : "border-border bg-card text-soft hover:bg-card-strong hover:text-foreground"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-5 md:space-y-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-border bg-card px-6 py-10 text-center">
          <p className="text-lg font-medium text-foreground">No posts found.</p>
          <p className="mt-2 text-sm text-soft">Try a different tag.</p>
        </div>
      )}
    </div>
  );
}