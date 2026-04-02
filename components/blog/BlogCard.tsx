"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { withLocale, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/blog";

type Props = {
  post: PostMeta;
  locale: Locale;
};

export default function BlogCard({ post, locale }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link href={withLocale(locale, `/blog/${post.slug}`)} className="group block">
        <motion.div
          whileHover={{ y: -4, scale: 1.004 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="apple-panel-strong gradient-border relative overflow-hidden rounded-[28px] border border-border bg-card/80 p-5 shadow-theme backdrop-blur md:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_36%)] opacity-80" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="badge text-soft capitalize">{post.category}</span>
              <span>{post.date}</span>
            </div>

            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground transition-all duration-200 group-hover:text-[color:var(--accent-2)] md:text-[1.9rem]">
              {post.title}
            </h3>

            <p className="max-w-3xl text-sm leading-7 text-soft md:text-base">
              {post.summary}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-soft transition-colors duration-200 group-hover:border-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}