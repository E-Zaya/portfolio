"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Pin } from "lucide-react";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/notion";
import {
  formatPostDate,
  getCategoryLabel,
  getPostReadingMinutes,
  getSafeCategory,
  getSafeSummary,
  getSafeTitle,
  getVisibleTags,
} from "@/components/blog/blog-utils";

type Props = {
  post: PostMeta;
  locale: Locale;
};

export default function BlogCard({ post, locale }: Props) {
  const t = getMessages(locale).blog;

  const title = getSafeTitle(post.title, t.untitled);
  const summary = getSafeSummary(post.summary, t.noSummary);
  const category = getCategoryLabel(
    getSafeCategory(post.category, t.uncategorized),
    locale,
    t.uncategorized,
  );
  const readTime = getPostReadingMinutes(post);
  const visibleTags = getVisibleTags(post.tags);
  const formattedDate = formatPostDate(post.date, locale) ?? t.noDate;

  return (
    <article className="group h-full overflow-hidden rounded-lg border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-foreground/10">
      <Link href={withLocale(locale, `/blog/${post.slug}`)} className="flex h-full flex-col">
        {post.cover ? (
          <div className="relative aspect-[1.75/1] overflow-hidden border-b border-border bg-card-strong">
            <Image
              src={post.cover}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="blog-card-cover relative aspect-[1.75/1] overflow-hidden border-b border-border bg-card-strong">
            <div className="blog-card-cover-blob blog-card-cover-blob-primary" />
            <div className="blog-card-cover-blob blog-card-cover-blob-secondary" />
            <div className="absolute inset-x-[14%] top-[18%] h-[52%] rounded-md border border-border bg-card" />
            <div className="absolute left-[14%] top-[38%] pr-6 text-lg font-semibold text-foreground">
              {category}
            </div>
          </div>
        )}

        <div className="flex min-h-[280px] flex-1 flex-col p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted">
            <span>{formattedDate}</span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-strong px-2.5 py-1 text-soft">
              <Clock3 className="h-3.5 w-3.5" />
              {t.minRead(readTime)}
            </span>
          </div>

          {post.pinned ? (
            <span className="mb-2 inline-flex w-fit items-center gap-1 text-xs font-semibold text-foreground">
              <Pin className="h-3.5 w-3.5" aria-hidden="true" />
              {t.pinnedBadge}
            </span>
          ) : null}

          <h3 className="line-clamp-2 text-xl font-semibold leading-[1.18] text-foreground">
            {title}
          </h3>

          {visibleTags.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card-strong px-2.5 py-1 text-xs text-soft"
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-soft">{summary}</p>

          <span className="mt-auto pt-5 text-sm font-normal text-foreground">{t.readMore}</span>
        </div>
      </Link>
    </article>
  );
}
