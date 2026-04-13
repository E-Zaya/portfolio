import { getBlogPosts, getAllTags } from "@/lib/notion";
import BlogListClient from "@/components/blog/BlogListClient";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = getMessages(locale).blog;

  const posts = await getBlogPosts();
  const tags = getAllTags(posts);

  return (
    <main className="section-space pb-20">
      {/* 超シンプルなヘッダー（長い説明は完全に削除） */}
      <section className="container-custom text-center mb-16">
        <span className="badge text-soft">{t.eyebrow || "Writing"}</span>
        <h1 className="section-title mt-4 text-5xl md:text-6xl font-bold tracking-tighter">
          {t.title}
        </h1>
      </section>

      {/* Bentoグリッド風コンテナ */}
      <section className="container-custom">
        <div className="apple-panel-strong gradient-border relative overflow-hidden rounded-4xl p-8 md:p-12">
          {/* アクセントのぼかし背景（今までのhero-bg風） */}
          <div className="absolute -left-20 top-12 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute right-8 bottom-20 h-52 w-52 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">
            {/* フィルター部分（少しコンパクトに） */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm text-muted">{t.filterLabel}</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {t.browseTitle}
                </h2>
              </div>
              <p className="text-sm text-soft">{t.postCount(posts.length)}</p>
            </div>

            {/* BlogListClientにBentoグリッドを任せる */}
            <BlogListClient 
              posts={posts} 
              tags={tags} 
              locale={locale} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}