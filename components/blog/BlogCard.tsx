"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

type Props = {
  post: PostMeta;
  index: number;
};

export default function BlogCard({ post, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="project-card apple-panel gradient-border relative flex h-full flex-col overflow-hidden rounded-[28px] p-6 transition duration-300 hover:bg-card-strong">
          <div className="absolute inset-x-0 top-0 h-px gradient-line" />

          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge text-soft capitalize">{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>

              <h2 className="text-xl font-semibold leading-tight text-foreground transition group-hover:opacity-95">
                {post.title}
              </h2>
            </div>

            <div className="rounded-full border border-border bg-card p-2 text-soft transition group-hover:-translate-y-0.5 group-hover:text-foreground">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <p className="mb-6 line-clamp-3 text-sm leading-7 text-soft">
            {post.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-soft"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}