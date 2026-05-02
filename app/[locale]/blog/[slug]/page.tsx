import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { getBlogPost, getBlogPosts } from "@/lib/notion";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostTOC, { type BlogHeading } from "@/components/blog/BlogPostTOC";
import RelatedPostsRow from "@/components/blog/RelatedPostsRow";
import CodeCopy from "@/components/blog/CodeCopy";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import {
  escapeHtmlAttribute,
  getRelatedPosts,
  slugifyHeading,
} from "@/components/blog/blog-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = getMessages(locale).blog;
  const post = await getBlogPost(slug, locale);

  if (!post) {
    return { title: t.notFoundTitle };
  }

  return {
    title: post.title || t.notFoundTitle,
    description: post.summary || t.noSummary,
  };
}

function createHeadingIdFactory() {
  const used = new Map<string, number>();

  return (text: string) => {
    const base = slugifyHeading(text);
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);

    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

function injectIds(
  htmlStr: string,
  tocLabel: string,
): { newHtml: string; headings: BlogHeading[] } {
  const headings: BlogHeading[] = [];
  const makeId = createHeadingIdFactory();

  const newHtml = htmlStr.replace(/<h([1-3])>(.*?)<\/h\1>/g, (_, level, inner) => {
    const text = String(inner).replace(/<[^>]+>/g, "").trim();
    const id = makeId(text);
    const headingLevel = Number(level) as 1 | 2 | 3;
    const ariaLabel = escapeHtmlAttribute(`${tocLabel} ${text}`.trim());

    if (headingLevel === 2 || headingLevel === 3) {
      headings.push({
        id,
        text,
        level: headingLevel,
      });
    }

    return `<h${level} id="${id}" class="heading scroll-mt-28"><a href="#${id}" class="anchor" aria-label="${ariaLabel}">#</a>${inner}</h${level}>`;
  });

  return { newHtml, headings };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  const post = await getBlogPost(slug, locale);
  if (!post) notFound();

  // [FIX] notFound() 後の型を明示的に確定させる
  const currentPost = post;

  const processed = await remark().use(html, { sanitize: true }).process(currentPost.content);
  const rawHtml = processed.toString();
  const t = getMessages(locale).blog;
  const { newHtml, headings } = injectIds(rawHtml, t.tocItemAria);

  const allPosts = await getBlogPosts(locale);
  const related = getRelatedPosts(allPosts, currentPost, 3);

  return (
    <main className="section-space pb-10 sm:pb-14 md:pb-16">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] xl:rounded-[34px] border border-border bg-card px-4 pb-4 pt-4 sm:px-5 sm:pb-6 sm:pt-5 md:px-8 md:pb-8 md:pt-7 xl:px-10 xl:pb-12 shadow-theme backdrop-blur-xl">
          <div className="blog-shell-blob blog-shell-blob-primary" />
          <div className="blog-shell-blob blog-shell-blob-secondary" />

          <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
              <div className="space-y-6 sm:space-y-8">
                <BlogPostHero post={currentPost} locale={locale} />

                {/* [mobile-toc] hero直下に表示 */}
                <div className="lg:hidden">
                  <BlogPostTOC headings={headings} locale={locale} mode="mobile" />
                </div>

                <article className="article-card rounded-[22px] border border-border bg-card-strong p-4 shadow-theme backdrop-blur-xl sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-7">
                  <CodeCopy locale={locale} />
                  <div
                    className="blog-article mx-auto max-w-[74ch]"
                    dangerouslySetInnerHTML={{ __html: newHtml }}
                  />
                </article>

                <RelatedPostsRow posts={related} locale={locale} />
              </div>

              {/* [desktop-toc] 右サイドのみ */}
              <aside className="hidden lg:block">
                <BlogPostTOC headings={headings} locale={locale} mode="desktop" />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 