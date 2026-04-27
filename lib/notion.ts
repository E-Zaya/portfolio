import "server-only";

import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  QueryDatabaseParameters,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

function getBlogDatabaseId(): string {
  const dbId = process.env.NOTION_BLOG_DB_ID ?? "";

  if (!dbId) {
    throw new Error("Missing NOTION_BLOG_DB_ID");
  }

  return dbId;
}

// [FIX] ブログ記事だけは mn ページでも日本語記事を表示する
function normalizeBlogLang(lang?: string): string | undefined {
  if (!lang) return undefined;
  if (lang === "mn") return "ja";

  return lang;
}

export type PostMeta = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  published: boolean;
  slug: string;
  cover: string;
  readingTime: number;
};

export type Post = PostMeta & {
  content: string;
};

type BlogPage = PageObjectResponse;

type NotionTag = {
  name?: string;
};

function getTextFromRichText(
  value: { plain_text?: string }[] | undefined,
): string {
  return (
    value
      ?.map((item) => item.plain_text ?? "")
      .join("")
      .trim() ?? ""
  );
}

function pageToPostMeta(page: BlogPage): PostMeta {
  const props = page.properties;

  const titleProperty = props.Title;
  const dateProperty = props.Date;
  const categoryProperty = props.Category;
  const tagsProperty = props.Tags;
  const summaryProperty = props.Summary;
  const publishedProperty = props.Published;
  const slugProperty = props.Slug;
  const readingTimeProperty = props.ReadingTime;

  // slug を先に確定させて cover パスの生成に使う
  const slug =
    slugProperty?.type === "rich_text"
      ? getTextFromRichText(slugProperty.rich_text) || page.id
      : page.id;

  return {
    id: page.id,

    title:
      titleProperty?.type === "title"
        ? getTextFromRichText(titleProperty.title)
        : "",

    date: dateProperty?.type === "date" ? (dateProperty.date?.start ?? "") : "",

    category:
      categoryProperty?.type === "select"
        ? (categoryProperty.select?.name ?? "diary")
        : "diary",

    tags:
      tagsProperty?.type === "multi_select"
        ? tagsProperty.multi_select
            .map((tag: NotionTag) => tag.name ?? "")
            .filter(Boolean)
        : [],

    summary:
      summaryProperty?.type === "rich_text"
        ? getTextFromRichText(summaryProperty.rich_text)
        : "",

    published:
      publishedProperty?.type === "checkbox"
        ? publishedProperty.checkbox
        : false,

    slug,

    // Notion の期限付き S3 URL を使わず、public 配下の静的パスを使う
    // 画像ファイルは /public/images/blog/{slug}.png に配置する想定
    // ファイルが未用意の場合は /images/blog/example.png へのフォールバックを参照
    cover: `/images/blog/${slug}.png`,

    // Notion DB の ReadingTime (Number) プロパティを使用
    // プロパティが未設定の場合は 1 分として扱う
    readingTime:
      readingTimeProperty?.type === "number"
        ? (readingTimeProperty.number ?? 1)
        : 1,
  };
}

function toFilter(
  filter: QueryDatabaseParameters["filter"],
): QueryDatabaseParameters["filter"] {
  return filter;
}

export async function getBlogPosts(lang?: string): Promise<PostMeta[]> {
  const blogLang = normalizeBlogLang(lang);

  const filter = blogLang
    ? toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Lang", select: { equals: blogLang } },
        ],
      })
    : toFilter({
        property: "Published",
        checkbox: { equals: true },
      });

  const response = await notion.databases.query({
    database_id: getBlogDatabaseId(),
    filter,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((page): page is BlogPage => page.object === "page")
    .map(pageToPostMeta);
}

export async function getBlogPost(
  slug: string,
  lang?: string,
): Promise<Post | null> {
  const blogLang = normalizeBlogLang(lang);

  const filter = blogLang
    ? toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Lang", select: { equals: blogLang } },
        ],
      })
    : toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
        ],
      });

  const response = await notion.databases.query({
    database_id: getBlogDatabaseId(),
    filter,
    page_size: 1,
  });

  const page = response.results.find(
    (result): result is BlogPage => result.object === "page",
  );

  if (!page) return null;

  const meta = pageToPostMeta(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const content = n2m.toMarkdownString(mdBlocks).parent;

  return {
    ...meta,
    content,
  };
}

export function getAllTags(posts: PostMeta[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags)))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}
