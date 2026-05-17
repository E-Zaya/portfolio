"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * LazyMotion ラッパー。
 *
 * `framer-motion` を `motion.X` で直接 import すると "full" 版のアニメーション
 * 機能セットが初期 JS バンドルに乗ってしまい、Hero に到達するまでのコストが
 * 大きくなる。LazyMotion + domAnimation により、必要な機能だけ遅延読み込み
 * させてバンドルを ~25KB ほど削減できる。
 *
 * strict={false} にしておくと既存の `motion.div` 等の書き方をそのまま許容する
 * ので、現状コードを壊さずに導入できる。将来 `m.div` に統一できれば strict
 * を有効化したい。
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      {children}
    </LazyMotion>
  );
}
