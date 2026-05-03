import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getAllTags } from "@/lib/notion";
import BlogListClient from "@/components/blog/BlogListClient";
import { getMessages, isLocale, locales, withLocale, type Locale } from "@/lib/i18n";

const blogMeta: Record<Locale, { title: string; description: string }> = {
  ja: {
    title: "ブログ | Zaya Dev",
    description:
      "Web開発・TypeScript・Next.jsなどについての技術記事を発信しています。",
  },
  en: {
    title: "Blog | Zaya Dev",
    description:
      "Technical articles on web development, TypeScript, Next.js and more.",
  },
  mn: {
    title: "Блог | Zaya Dev",
    description:
      "Вэб хөгжүүлэлт, TypeScript, Next.js болон бусад сэдвээр нийтлэл.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const { title, description } = blogMeta[locale];

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/blog`])),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/blog`,
      locale: locale === "ja" ? "ja_JP" : locale === "mn" ? "mn_MN" : "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zaya Dev Blog" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  const t = getMessages(locale).blog;
  const posts = await getBlogPosts(locale);
  const tags = getAllTags(posts);

  return (
    <main className="section-space pb-12 sm:pb-16 md:pb-20">
      <section className="container-custom">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl border border-border bg-card px-4 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-6 md:px-8 md:pb-10 md:pt-7 xl:px-10 xl:pb-12 shadow-theme backdrop-blur-xl">
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
