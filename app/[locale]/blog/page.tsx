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
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-soft md:mb-10"
            >
              <Link href={withLocale(locale, "/")} className="transition hover:text-foreground">
                {t.breadcrumbHome}
              </Link>

              <span className="text-muted">/</span>

              <span className="font-medium text-foreground">{t.breadcrumbBlog}</span>
            </nav>

            <header className="mx-auto mb-10 max-w-[760px] text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {t.eyebrow}
              </p>
              <h1 className="text-[clamp(38px,4.5vw,62px)] font-semibold tracking-[-0.05em] text-foreground">
                {t.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-soft md:text-base">
                {t.description}
              </p>
              <p className="mt-4 text-sm text-muted">{t.postCount(posts.length)}</p>
            </header>

            <BlogListClient posts={posts} tags={tags} locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
