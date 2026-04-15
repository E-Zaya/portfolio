import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { getBlogPost, getBlogPosts } from "@/lib/notion";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostTOC, { type BlogHeading } from "@/components/blog/BlogPostTOC";
import RelatedPostsRow from "@/components/blog/RelatedPostsRow";
import BlogPostCTA from "@/components/blog/BlogPostCTA";
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
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
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
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  const post = await getBlogPost(slug, locale);
  if (!post) notFound();

  const processed = await remark().use(html, { sanitize: true }).process(post.content);
  const rawHtml = processed.toString();
  const t = getMessages(locale).blog;
  const { newHtml, headings } = injectIds(rawHtml, t.tocItemAria);

  const allPosts = await getBlogPosts(locale);
  const related = getRelatedPosts(allPosts, post, 3);

  return (
    <main className="section-space pb-20">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[34px] border border-border bg-card px-5 pb-8 pt-6 shadow-theme backdrop-blur-xl md:px-8 md:pb-10 md:pt-7 xl:px-10 xl:pb-12">
          <div className="blog-shell-blob blog-shell-blob-primary" />
          <div className="blog-shell-blob blog-shell-blob-secondary" />

          <div className="relative z-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-8">
                <BlogPostHero post={post} locale={locale} />

                {/* [mobile-toc] hero直下に表示 */}
                <div className="lg:hidden">
                  <BlogPostTOC headings={headings} locale={locale} />
                </div>

                <article className="article-card rounded-[28px] border border-border bg-card-strong p-5 shadow-theme backdrop-blur-xl md:p-7">
                  <CodeCopy locale={locale} />
                  <div
                    className="blog-article mx-auto max-w-[74ch]"
                    dangerouslySetInnerHTML={{ __html: newHtml }}
                  />
                </article>

                <RelatedPostsRow posts={related} locale={locale} />
                <BlogPostCTA locale={locale} />
              </div>

              {/* [desktop-toc] 右サイドのみ */}
              <aside className="hidden lg:block">
                <BlogPostTOC headings={headings} locale={locale} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 