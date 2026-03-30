"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";
import type { PostMeta } from "@/lib/blog";

type Props = {
  posts: PostMeta[];
  tags: string[];
};

export default function BlogListClient({ posts, tags }: Props) {
  const [activeTag, setActiveTag] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeTag === "all") return posts;
    return posts.filter((p) => p.tags.includes(activeTag));
  }, [posts, activeTag]);

  return (
    <>
      <BlogFilter
        tags={tags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />

      <div className="grid-auto mt-8">
        {filteredPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </>
  );
}