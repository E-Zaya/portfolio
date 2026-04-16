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
  // [FIX] 詳細ページでは本文込みで読了時間を計算
  const readTime = getPostReadingMinutes(post);
  const formattedDate = formatPostDate(post.date, locale) ?? t.noDate;

  return (
    <section className="space-y-5 md:space-y-7">
      {/* [topbar] mobileでは縦積み / desktopでは横並び */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div>
          <Link
            href={withLocale(locale, "/blog")}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-soft transition hover:bg-card-strong hover:text-foreground"
          >
            <ArrowLeft size={16} />
            <span className="truncate">{t.backToAllPosts}</span>
          </Link>
        </div>

        <nav aria-label={t.breadcrumbAria} className="min-w-0 text-sm text-soft">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 leading-6">
            <Link
              href={withLocale(locale, "/")}
              className="shrink-0 transition hover:text-foreground"
            >
              {t.breadcrumbHome}
            </Link>

            <span className="shrink-0 text-muted">/</span>

            <Link
              href={withLocale(locale, "/blog")}
              className="shrink-0 transition hover:text-foreground"
            >
              {t.breadcrumbBlog}
            </Link>

            <span className="shrink-0 text-muted">/</span>

            <span
              className="min-w-0 flex-1 truncate font-medium text-foreground"
              title={title}
            >
              {truncateText(title, 60)}
            </span>
          </div>
        </nav>
      </div>

      {/* [cover] article cover */}
      {post.cover && (
        <div className="relative h-[180px] w-full overflow-hidden rounded-[22px] border border-border bg-card sm:h-[220px] md:h-[280px] lg:h-[320px]">
          <Image
            src={post.cover}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, color-mix(in srgb, var(--card-strong) 82%, transparent), color-mix(in srgb, var(--card) 38%, transparent), transparent)",
            }}
          />
        </div>
      )}

      {/* [header] title + meta */}
      <div className="space-y-3.5 md:space-y-4">
        <h1 className="max-w-4xl text-[clamp(26px,7vw,42px)] font-semibold leading-[1.1] tracking-[-0.04em] text-foreground">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6 text-soft sm:gap-x-4">
          <span>{formattedDate}</span>

          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Clock3 size={14} />
            {t.minRead(readTime)}
          </span>

          <span className="max-w-full rounded-full border border-border bg-card-strong px-3 py-1 text-soft">
            <span className="block truncate">{category}</span>
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
