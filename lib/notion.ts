import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

// 記事一覧を取得
export async function getBlogPosts(lang: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Lang", select: { equals: lang } },
      ],
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    slug: page.properties.Slug.rich_text[0]?.plain_text ?? "",
    date: page.properties.Date.date?.start ?? "",
    tags: page.properties.Tags.multi_select.map((t: any) => t.name),
    summary: page.properties.Summary.rich_text[0]?.plain_text ?? "",
  }));
}

// 記事個別を取得（Markdownに変換）
export async function getBlogPost(slug: string, lang: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Lang", select: { equals: lang } },
      ],
    },
  });

  const page = response.results[0] as any;
  if (!page) return null;

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks).parent;

  return {
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    date: page.properties.Date.date?.start ?? "",
    tags: page.properties.Tags.multi_select.map((t: any) => t.name),
    markdown,
  };
}