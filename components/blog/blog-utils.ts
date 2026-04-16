import { getMessages, type Locale } from "@/lib/i18n";
import type { Post, PostMeta } from "@/lib/notion";

const WORDS_PER_MINUTE = 220;

type ReadablePost = Pick<PostMeta, "title" | "summary" | "tags" | "category"> & {
  // [FIX] 詳細ページでは本文も読了時間に含められるよう optional で受ける
  content?: string;
};

export function stripMarkup(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/[*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// [FIX] YYYY-MM-DD を安全に解釈して timezone ずれを防ぐ
export function parsePostDate(date: string): Date | null {
  if (!date?.trim()) return null;

  const normalized = date.trim();
  const dateOnlyMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function getPostReadingMinutes(post: ReadablePost): number {
  // [FIX] 本文がある場合は最優先で含める。一覧では summary ベース、詳細では content ベースになる
  const source = [post.title, post.summary, post.category, post.tags.join(" "), post.content ?? ""]
    .filter(Boolean)
    .join(" ");

  const words = stripMarkup(source).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatPostDate(date: string, locale: Locale): string | null {
  const parsed = parsePostDate(date);
  if (!parsed) return null;

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

      // [FIX] 関連記事の並び順でも安全な日付パースを使う
      const timestamp = parsePostDate(post.date)?.getTime() ?? 0;

      return {
        post,
        sameTagCount,
        sameCategory,
        timestamp,
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
