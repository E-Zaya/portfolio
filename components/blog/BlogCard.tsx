"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { withLocale, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/notion";

type Props = {
  post: PostMeta;
  locale: Locale;
  isLarge?: boolean;   // ← 追加
};

export default function BlogCard({ post, locale, isLarge = false }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link href={withLocale(locale, `/blog/${post.slug}`)} className="group block h-full">
        <motion.div
          whileHover={{ y: -4 }}
          className={`
            apple-panel-strong gradient-border
            relative overflow-hidden rounded-3xl h-full
            flex flex-col
            p-6 md:p-8
            transition-all duration-300
            group-hover:border-white/30
            ${isLarge ? "md:p-10" : ""}
          `}
        >
          {/* 既存の内容はそのまま + isLarge時はsummaryを長めに表示など調整可 */}
          {/* ... 現在の内容をそのまま貼り付けてOK ... */}

          {/* 例: isLarge時はsummaryを2行以上表示 */}
          <p className={`text-sm leading-7 text-soft ${isLarge ? "line-clamp-4" : "line-clamp-2"}`}>
            {post.summary}
          </p>
        </motion.div>
      </Link>
    </motion.article>
  );
}