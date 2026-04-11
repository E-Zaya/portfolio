import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// ─── クライアント初期化 ────────────────────────────────
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

const DB_ID = process.env.NOTION_BLOG_DB_ID!;

// ─── 型定義 ───────────────────────────────────────────
export type PostMeta = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  published: boolean;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

// ─── Notionページ → PostMeta に変換 ──────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pageToPostMeta(page: any): PostMeta {
  const props = page.properties;

  return {
    id: page.id,
    title: props.Title?.title?.[0]?.plain_text ?? "",
    date: props.Date?.date?.start ?? "",
    category: props.Category?.select?.name ?? "diary",
    tags: props.Tags?.multi_select?.map((t: { name: string }) => t.name) ?? [],
    summary: props.Summary?.rich_text?.[0]?.plain_text ?? "",
    published: props.Published?.checkbox ?? false,
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? page.id,
  };
}

// ─── 記事一覧取得 ─────────────────────────────────────
export async function getBlogPosts(lang?: string): Promise<PostMeta[]> {
  const filter = lang
    ? {
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Lang", select: { equals: lang } },
        ],
      }
    : {
        property: "Published",
        checkbox: { equals: true },
      };

  const response = await notion.databases.query({
    database_id: DB_ID,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter: filter as any,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map(pageToPostMeta);
}

// ─── slug で記事1件取得（本文付き） ──────────────────
export async function getBlogPost(slug: string, lang?: string): Promise<Post | null> {
  const filter = lang
    ? {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Lang", select: { equals: lang } },
        ],
      }
    : {
        property: "Slug",
        rich_text: { equals: slug },
      };

  const response = await notion.databases.query({
    database_id: DB_ID,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter: filter as any,
  });

  const page = response.results[0];
  if (!page) return null;

  const meta = pageToPostMeta(page);

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const content = n2m.toMarkdownString(mdBlocks).parent;

  return { ...meta, content };
}

// ─── タグ一覧取得 ─────────────────────────────────────
export function getAllTags(posts: PostMeta[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b)
  );
}