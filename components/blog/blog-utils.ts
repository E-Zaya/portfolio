import { getMessages, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/notion";

const WORDS_PER_MINUTE = 220;

type ReadablePost = Pick<PostMeta, "title" | "summary" | "tags" | "category">;

export function stripMarkup(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[`*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getPostReadingMinutes(post: ReadablePost): number {
  const source = [post.title, post.summary, post.category, post.tags.join(" ")]
    .filter(Boolean)
    .join(" ");

  const words = stripMarkup(source).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatPostDate(date: string, locale: Locale): string | null {
  if (!date?.trim()) return null;

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}

export function getSafeSummary(summary: string, fallback: string): string {
  const normalized = summary.trim();
  return normalized || fallback;
}

export function getSafeTitle(title: string, fallback: string): string {
  const normalized = title.trim();
  return normalized || fallback;
}

export function getSafeCategory(category: string, fallback: string): string {
  const normalized = category.trim();
  return normalized || fallback;
}

export function normalizeCategoryKey(category: string): string {
  return category.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getCategoryLabel(category: string, locale: Locale, fallback: string): string {
  const normalized = getSafeCategory(category, fallback);
  const key = normalizeCategoryKey(normalized);
  const labels = getMessages(locale).blog.categoryLabels;

  return labels[key as keyof typeof labels] ?? normalized;
}

export function getVisibleTags(tags: string[]): string[] {
  return tags.map((tag) => tag.trim()).filter(Boolean).slice(0, 3);
}

export function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}…`;
}

export function slugifyHeading(value: string): string {
  return (
    value
      .normalize("NFKC")
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .trim()
      .replace(/["'`]/g, "")
      .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section"
  );
}

export function escapeHtmlAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function getRelatedPosts(
  posts: PostMeta[],
  currentPost: Pick<PostMeta, "slug" | "tags" | "category">,
  limit = 3,
): PostMeta[] {
  const currentTags = new Set(currentPost.tags);
  const currentCategoryKey = normalizeCategoryKey(currentPost.category);

  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const sameTagCount = post.tags.filter((tag) => currentTags.has(tag)).length;
      const sameCategory =
        Boolean(post.category) &&
        Boolean(currentPost.category) &&
        normalizeCategoryKey(post.category) === currentCategoryKey;

      const timestamp = post.date ? new Date(post.date).getTime() : 0;

      return {
        post,
        sameTagCount,
        sameCategory,
        timestamp: Number.isNaN(timestamp) ? 0 : timestamp,
      };
    })
    .sort((a, b) => {
      if (b.sameTagCount !== a.sameTagCount) {
        return b.sameTagCount - a.sameTagCount;
      }

      if (a.sameCategory !== b.sameCategory) {
        return Number(b.sameCategory) - Number(a.sameCategory);
      }

      return b.timestamp - a.timestamp;
    })
    .slice(0, limit)
    .map((item) => item.post);
}
