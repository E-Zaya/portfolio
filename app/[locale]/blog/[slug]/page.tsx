import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { remark } from "remark";
import html from "remark-html";
import { getPostBySlug } from "@/lib/blog";
import { getMessages, isLocale, withLocale, type Locale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = getMessages(locale).blog;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: t.notFoundTitle,
    };
  }

  return {
    title: `${post.title} | Zaya Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = getMessages(locale).blog;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="section-space">
      <article className="container-custom max-w-4xl space-y-8">
        <div className="apple-panel-strong gradient-border rounded-[32px] p-6 md:p-10">
          <Link
            href={withLocale(locale, "/blog")}
            className="mb-6 inline-flex items-center gap-2 text-sm text-soft transition hover:text-foreground"
          >
            <ArrowLeft size={16} />
            {t.backToBlog}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="badge text-soft capitalize">{post.category}</span>
            <span className="text-sm text-muted">{post.date}</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-soft md:text-lg">
            {post.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-soft"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="apple-panel rounded-[32px] p-6 md:p-10">
          <div
            className="
              prose max-w-none
              prose-headings:text-foreground
              prose-p:text-soft
              prose-strong:text-foreground
              prose-li:text-soft
              prose-a:text-foreground
              prose-code:text-foreground
              prose-pre:bg-black/30
              prose-pre:text-slate-100
              prose-blockquote:text-soft
            "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </main>
  );
}