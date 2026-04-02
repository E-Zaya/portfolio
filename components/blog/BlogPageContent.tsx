"use client";

import type { PostMeta } from "@/lib/blog";
import { getMessages, type Locale } from "@/lib/i18n";
import BlogListClient from "./BlogListClient";

type Props = {
  posts: PostMeta[];
  tags: string[];
  locale?: Locale;
};

export default function BlogPageContent({ posts, tags, locale = "en" }: Props) {
  const t = getMessages(locale).blog;

  return (
    <main className="section-space">
      <section className="container-custom">
        <div className="apple-panel-strong gradient-border relative overflow-hidden rounded-[32px] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-fuchsia-400/15 blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="badge text-soft">{t.eyebrow}</span>

            <div className="space-y-4">
              <h1 className="section-title">{t.title}</h1>

              <p className="max-w-2xl text-base leading-8 text-soft md:text-lg">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom mt-10 space-y-8">
        <div className="apple-panel rounded-[28px] p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-muted">{t.filterLabel}</p>
              <h2 className="mt-1 text-xl font-semibold text-foreground">{t.browseTitle}</h2>
            </div>

            <p className="text-sm text-soft">{t.postCount(posts.length)}</p>
          </div>

          <BlogListClient posts={posts} tags={tags} />
        </div>
      </section>
    </main>
  );
}
