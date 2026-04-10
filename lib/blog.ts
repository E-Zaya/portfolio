import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
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

type ParsedPostFile = Post & {
  fileName: string;
};

function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

function slugifySegment(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function resolveSlug(fileName: string, rawSlug: unknown) {
  if (typeof rawSlug === "string") {
    const normalized = slugifySegment(rawSlug);
    if (normalized) {
      return normalized;
    }
  }

  const fallback = slugifySegment(fileName.replace(/\.md$/, ""));
  return fallback || "post";
}

function parsePostFile(fileName: string): ParsedPostFile {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title ?? "",
    date: data.date ?? "",
    category: data.category ?? "diary",
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
    published: Boolean(data.published),
    slug: resolveSlug(fileName, data.slug),
    content,
    fileName,
  };
}

function compareDatesDescending(a: string, b: string) {
  const aTime = Number.isNaN(Date.parse(a)) ? 0 : new Date(a).getTime();
  const bTime = Number.isNaN(Date.parse(b)) ? 0 : new Date(b).getTime();
  return bTime - aTime;
}

function getParsedPosts() {
  ensureBlogDirectory();

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePostFile);
}

export function getAllPosts(): PostMeta[] {
  return getParsedPosts()
    .filter((post) => post.published)
    .sort((a, b) => compareDatesDescending(a.date, b.date))
    .map((post) => ({
      title: post.title,
      date: post.date,
      category: post.category,
      tags: post.tags,
      summary: post.summary,
      published: post.published,
      slug: post.slug,
    }));
}

export function getPostBySlug(slug: string): Post | null {
  const post = getParsedPosts().find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  return {
    title: post.title,
    date: post.date,
    category: post.category,
    tags: post.tags,
    summary: post.summary,
    published: post.published,
    slug: post.slug,
    content: post.content,
  };
}

export function getAllTags(posts: PostMeta[]) {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b)
  );
}
