"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { withLocale, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/notion";

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
      <Link
        href={withLocale(locale, `/blog/${post.slug}`)}
        className="group block"
      >
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="
            apple-panel-strong gradient-border
            relative overflow-hidden rounded-[24px]
            grid grid-cols-[1fr_auto] gap-6 items-start
            p-6 md:p-7
            transition-all duration-200
            group-hover:border-white/30
          "
        >
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_36%)]" />

          {/* main content */}
          <div className="relative z-10 flex flex-col gap-3">
            {/* meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge text-muted capitalize text-xs">
                {post.category}
              </span>
              <span className="text-xs text-muted">{post.date}</span>
            </div>

            {/* title */}
            <h3
              className="
                text-xl md:text-2xl font-semibold leading-snug tracking-tight
                text-foreground
                transition-colors duration-200
                group-hover:text-[color:var(--accent-2)]
              "
            >
              {post.title}
            </h3>

            {/* summary */}
            <p className="text-sm leading-7 text-soft max-w-2xl">
              {post.summary}
            </p>

            {/* tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full border border-border bg-card
                      px-3 py-1 text-xs text-muted
                      transition-colors duration-200
                      group-hover:border-white/20
                    "
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* arrow */}
          <span
            className="
              relative z-10
              text-lg text-muted pt-1
              transition-all duration-200
              group-hover:text-[color:var(--accent-2)]
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </motion.div>
      </Link>
    </motion.article>
  );
}
