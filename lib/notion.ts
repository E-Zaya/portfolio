import "server-only";
import { Client } from "@notionhq/client";
import type { PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

const DB_ID: string = process.env.NOTION_BLOG_DB_ID ?? "";

if (!DB_ID) {
  throw new Error("Missing NOTION_BLOG_DB_ID");
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
};

export type Post = PostMeta & {
  content: string;
};

type BlogPage = PageObjectResponse;

type NotionTag = {
  name?: string;
};

function getTextFromRichText(value: { plain_text?: string }[] | undefined): string {
  return value?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
}

function getNotionCover(page: any): string {
  // ① DBプロパティ優先
  const files = page.properties.Cover?.files;

  if (files && files.length > 0) {
    const file = files[0];
    return file.file?.url || file.external?.url || "";
  }

  // ② Notionページカバー fallback
  const cover = page.cover;
  if (!cover) return "";

  if (cover.type === "external") return cover.external.url;
  if (cover.type === "file") return cover.file.url;

  return "";
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

  return {
    id: page.id,
    title: titleProperty?.type === "title" ? getTextFromRichText(titleProperty.title) : "",
    date: dateProperty?.type === "date" ? dateProperty.date?.start ?? "" : "",
    category:
      categoryProperty?.type === "select" ? categoryProperty.select?.name ?? "diary" : "diary",
    tags:
      tagsProperty?.type === "multi_select"
        ? tagsProperty.multi_select.map((tag: NotionTag) => tag.name ?? "").filter(Boolean)
        : [],
    summary:
      summaryProperty?.type === "rich_text"
        ? getTextFromRichText(summaryProperty.rich_text)
        : "",
    published:
      publishedProperty?.type === "checkbox" ? publishedProperty.checkbox : false,
    slug:
      slugProperty?.type === "rich_text"
        ? getTextFromRichText(slugProperty.rich_text) || page.id
        : page.id,
    cover: getNotionCover(page),
  };
}

function toFilter(filter: QueryDatabaseParameters["filter"]) {
  return filter as QueryDatabaseParameters["filter"];
}

export async function getBlogPosts(lang?: string): Promise<PostMeta[]> {
  const filter = lang
    ? toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Lang", select: { equals: lang } },
        ],
      })
    : toFilter({
        property: "Published",
        checkbox: { equals: true },
      });

  const response = await notion.databases.query({
    database_id: DB_ID,
    filter,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((page): page is BlogPage => page.object === "page")
    .map(pageToPostMeta);
}

export async function getBlogPost(slug: string, lang?: string): Promise<Post | null> {
  const filter = lang
    ? toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Lang", select: { equals: lang } },
        ],
      })
    : toFilter({
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
        ],
      });

  const response = await notion.databases.query({
    database_id: DB_ID,
    filter,
    page_size: 1,
  });

  const page = response.results.find((result): result is BlogPage => result.object === "page");
  if (!page) return null;

  const meta = pageToPostMeta(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const content = n2m.toMarkdownString(mdBlocks).parent;

  return { ...meta, content };
}

export function getAllTags(posts: PostMeta[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags)))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}
