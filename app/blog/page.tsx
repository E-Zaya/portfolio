import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogListClient from "@/components/blog/BlogListClient";

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);

  return (
    <main className="section-space">
      <section className="container-custom">
        <div className="apple-panel-strong gradient-border relative overflow-hidden rounded-[32px] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-fuchsia-400/15 blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="badge text-soft">Blog</span>

            <div className="space-y-4">
              <h1 className="section-title">
                ゼロから開発者へ。その道のりの学びと挑戦を綴るブログ
              </h1>

              <p className="max-w-2xl text-base leading-8 text-soft md:text-lg">
                日々の開発ログやバグから得た知見、UIデザインの思考プロセス、そして毎週の小さな進捗。
                完成までの道のり,現状の試行錯誤を記録しています。よかったら覗いてみてください。質問やフィードバックも大歓迎です！
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom mt-10 space-y-8">
        <div className="apple-panel rounded-[28px] p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-muted">Filter by tag</p>
              <h2 className="mt-1 text-xl font-semibold text-foreground">
                Browse posts
              </h2>
            </div>

            <p className="text-sm text-soft">
              {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>

          <BlogListClient posts={posts} tags={tags} />
        </div>
      </section>
    </main>
  );
}