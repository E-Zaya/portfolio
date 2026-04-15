import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3 } from "lucide-react";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
import type { Post } from "@/lib/notion";
import {
  formatPostDate,
  getCategoryLabel,
  getPostReadingMinutes,
  getSafeCategory,
  getSafeSummary,
  getSafeTitle,
  truncateText,
} from "@/components/blog/blog-utils";

type Props = {
  post: Post;
  locale: Locale;
};

export default function BlogPostHero({ post, locale }: Props) {
  // [messages] blog text
  const t = getMessages(locale).blog;

  // [derived] safe values
  const title = getSafeTitle(post.title, t.untitled);
  const summary = getSafeSummary(post.summary, t.noSummary);
  const category = getCategoryLabel(
    getSafeCategory(post.category, t.uncategorized),
    locale,
    t.uncategorized,
  );
  const readTime = getPostReadingMinutes(post);
  const formattedDate = formatPostDate(post.date, locale) ?? t.noDate;

  return (
    <section className="space-y-6 md:space-y-7">
      {/* [topbar] back button + breadcrumb */}
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={withLocale(locale, "/blog")}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-soft transition hover:bg-card-strong hover:text-foreground"
        >
          <ArrowLeft size={16} />
          {t.backToAllPosts}
        </Link>

        <nav
          aria-label={t.breadcrumbAria}
          className="min-w-0 flex-1 text-sm text-soft"
        >
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Link
              href={withLocale(locale, "/")}
              className="transition hover:text-foreground"
            >
              {t.breadcrumbHome}
            </Link>

            <span className="text-muted">/</span>

            <Link
              href={withLocale(locale, "/blog")}
              className="transition hover:text-foreground"
            >
              {t.breadcrumbBlog}
            </Link>

            <span className="text-muted">/</span>

            <span
              className="min-w-0 max-w-full truncate font-medium text-foreground"
              title={title}
            >
              {truncateText(title, 72)}
            </span>
          </div>
        </nav>
      </div>

      {/* [cover] article cover */}
      {post.cover && (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-border bg-card md:h-[280px] lg:h-[320px]">
          <Image
            src={post.cover}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/6 to-transparent" />
        </div>
      )}

      {/* [header] title + meta */}
      <div className="space-y-4">
        <h1 className="max-w-4xl text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.035em] text-foreground">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-soft">
          <span>{formattedDate}</span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={14} />
            {t.minRead(readTime)}
          </span>

          <span className="rounded-full border border-border bg-card-strong px-3 py-1 text-soft">
            {category}
          </span>
        </div>
      </div>

      {/* [summary] short intro */}
      <p className="max-w-3xl text-[15px] leading-7 text-soft md:text-base md:leading-8">
        {summary}
      </p>
    </section>
  );
}