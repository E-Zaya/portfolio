import Link from "next/link";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/notion";
import {
  formatPostDate,
  getSafeSummary,
  getSafeTitle,
} from "@/components/blog/blog-utils";

type Props = {
  // [FIX] props統一
  posts: PostMeta[];
  locale: Locale;
};

export default function RelatedPostsRow({ posts, locale }: Props) {
  const t = getMessages(locale).blog;

  if (!posts.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
        {t.related}
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => {
          const title = getSafeTitle(post.title, t.untitled);
          const summary = getSafeSummary(post.summary, t.noSummary);
          const formattedDate = formatPostDate(post.date, locale) ?? t.noDate;

          return (
            <Link
              key={post.slug}
              href={withLocale(locale, `/blog/${post.slug}`)}
              className="group block"
            >
              <article className="h-full rounded-md border border-border bg-card p-4 transition duration-200 hover:-translate-y-0.5 hover:border-foreground/10">
                <div className="text-xs text-muted">{formattedDate}</div>

                <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-[1.2] text-foreground">
                  {title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-soft">
                  {summary}
                </p>

                <span className="mt-4 inline-flex text-sm font-normal text-foreground">
                  {t.readMore}
                </span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}