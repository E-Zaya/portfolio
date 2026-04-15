"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import type { PostMeta } from "@/lib/notion";
import { getMessages, type Locale } from "@/lib/i18n";

type Props = {
  // [FIX] props統一
  posts: PostMeta[];
  tags: string[];
  locale: Locale;
};

export default function BlogListClient({ posts, tags, locale }: Props) {
  const t = getMessages(locale).blog;
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredPosts = useMemo(() => {
    if (selectedTag === "all") return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[clamp(22px,2.4vw,30px)] font-semibold tracking-[-0.04em] text-foreground">
          {t.browseTitle}
        </h2>
      </div>

      <BlogFilter
        tags={tags}
        activeTag={selectedTag}
        onTagChange={setSelectedTag}
        locale={locale}
      />

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-border bg-card px-6 py-14 text-center backdrop-blur-xl">
          <p className="text-base font-medium text-foreground">
            {t.noPostsTitle}
          </p>
          <p className="mt-2 text-sm leading-7 text-soft">
            {t.noPostsDescription}
          </p>
        </div>
      )}
    </div>
  );
}