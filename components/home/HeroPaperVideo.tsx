"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

// 依頼メモに藍のペンが入り、本物の画面になる 13.8 秒の loop（音なし）。
// 紙の色は tokens.css の --paper と同じなので、枠なしで Hero の紙に溶ける。
// ダークは濃紺の紙 (paper-dark)、ライトは白い紙 (paper)。見えていない方は読み込まない。
const VARIANTS = [
  { theme: "dark", name: "paper-dark" },
  { theme: "light", name: "paper" },
] as const;

const noopSubscribe = () => () => {};

export default function HeroPaperVideo() {
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});
  const reduce = useReducedMotion();
  // hydrate が済むまでは既定のダーク (ThemeProvider の defaultTheme)。サーバーの HTML と揃える
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme } = useTheme();
  const active = mounted && resolvedTheme === "light" ? "light" : "dark";

  useEffect(() => {
    for (const { theme } of VARIANTS) {
      const video = refs.current[theme];
      if (!video) continue;
      if (theme === active && !reduce) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [active, reduce]);

  return (
    <>
      {VARIANTS.map(({ theme, name }) => (
        <video
          key={theme}
          ref={(el) => {
            refs.current[theme] = el;
          }}
          className={`hero-paper-video hero-paper-video-${theme} block h-auto w-full`}
          width={1080}
          height={1350}
          muted
          loop
          playsInline
          preload={theme === active ? "metadata" : "none"}
          poster={`/hero/${name}-poster.jpg`}
          aria-hidden
          tabIndex={-1}
        >
          <source src={`/hero/${name}.webm`} type="video/webm" />
          <source src={`/hero/${name}.mp4`} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
