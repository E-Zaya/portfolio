"use client";

import type { PostMeta } from "@/lib/notion";
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

      {/* ── Hero ── */}
      <section className="container-custom">
        <div className="apple-panel-strong gradient-border relative overflow-hidden rounded-[32px] px-6 py-12 md:px-12 md:py-16">
          {/* orbs — same colors as the site's body background */}
          <div className="pointer-events-none absolute -left-10 top-8 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -top-6 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-pink-400/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="badge text-muted">{t.eyebrow}</span>

            <div className="space-y-4">
              <h1
                className="
                  section-title
                  bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))]
                  bg-clip-text text-transparent
                "
              >
                {t.title}
              </h1>

              <p className="max-w-2xl text-base leading-8 text-soft md:text-lg">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse ── */}
      <section className="container-custom mt-8">
        <div className="apple-panel rounded-[28px] p-5 md:p-7">

          {/* section header */}
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                {t.filterLabel}
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                {t.browseTitle}
              </h2>
            </div>
            <p className="text-sm text-muted">{t.postCount(posts.length)}</p>
          </div>

          <BlogListClient posts={posts} tags={tags} locale={locale} />
        </div>
      </section>

    </main>
  );
}
