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

function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureBlogDirectory();

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title ?? "",
        date: data.date ?? "",
        category: data.category ?? "diary",
        tags: Array.isArray(data.tags) ? data.tags : [],
        summary: data.summary ?? "",
        published: Boolean(data.published),
        slug,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  ensureBlogDirectory();

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title ?? "",
    date: data.date ?? "",
    category: data.category ?? "diary",
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
    published: Boolean(data.published),
    slug,
    content,
  };
}

export function getAllTags(posts: PostMeta[]) {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b)
  );
}