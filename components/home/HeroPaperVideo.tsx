"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// 依頼メモに藍のペンが入り、本物の画面になる 13.8 秒の loop（音なし）。
// 紙の色は .hero-paper と同じ #f6f5f1 なので、枠なしで Hero の紙に溶ける。
export default function HeroPaperVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="hero-paper-video block h-auto w-full"
      width={1080}
      height={1350}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/hero/paper-poster.jpg"
      aria-hidden
      tabIndex={-1}
    >
      <source src="/hero/paper.webm" type="video/webm" />
      <source src="/hero/paper.mp4" type="video/mp4" />
    </video>
  );
}
