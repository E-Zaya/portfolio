"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    // モバイルやタッチ端末では意味がない＆パフォーマンス低下要因なので無効化
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    let nextX = 0;
    let nextY = 0;
    let hasPending = false;

    const applyPosition = () => {
      frameId = 0;
      hasPending = false;
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${nextX}px`);
      root.style.setProperty("--mouse-y", `${nextY}px`);
    };

    const handleMove = (event: MouseEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (hasPending) return;
      hasPending = true;
      frameId = window.requestAnimationFrame(applyPosition);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <div className="mouse-glow" aria-hidden="true" />;
}
