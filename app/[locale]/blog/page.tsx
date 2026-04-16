import Link from "next/link";
import { getBlogPosts, getAllTags } from "@/lib/notion";
import BlogListClient from "@/components/blog/BlogListClient";
import { getMessages, isLocale, withLocale, type Locale } from "@/lib/i18n";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  const t = getMessages(locale).blog;
  const posts = await getBlogPosts(locale);
  const tags = getAllTags(posts);

  return (
    <main className="section-space pb-20">
      <section className="container-custom">
        <div className="relative overflow-hidden rounded-[34px] border border-border bg-card px-5 pb-8 pt-6 shadow-theme backdrop-blur-xl md:px-8 md:pb-10 md:pt-7 xl:px-10 xl:pb-12">
          <div className="blog-shell-blob blog-shell-blob-primary" />
          <div className="blog-shell-blob blog-shell-blob-secondary" />
          <div className="blog-shell-blob blog-shell-blob-bottom" />

          <div className="relative z-10">
            <nav
              aria-label={t.breadcrumbAria}
              // [FIX] Keep only the breadcrumb and remove the oversized hero/title block.
              className="mb-5 flex flex-wrap items-center gap-2 text-sm text-soft md:mb-6"
            >
              <Link href={withLocale(locale, "/")} className="transition hover:text-foreground">
                {t.breadcrumbHome}
              </Link>

              <span className="text-muted">/</span>

              <span className="font-medium text-foreground">{t.breadcrumbBlog}</span>
            </nav>

            {/* [FIX] Leave a little breathing room so the list does not start too abruptly. */}
            <div className="pt-1 md:pt-2">
              <BlogListClient posts={posts} tags={tags} locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
