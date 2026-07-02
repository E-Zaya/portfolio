"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * 蛍光ペンでひと塗りしたようなマーカー下線。
 * スクロールで見えた瞬間に左から右へシュッと走る(1回のみ・reduced-motion対応)。
 *
 * サイト全体のタイトル強調はこのコンポーネントに統一する。
 * 例: <h2>お店は、<MarkerHighlight>もっと選ばれる</MarkerHighlight>。</h2>
 */
export default function MarkerHighlight({
  children,
  delay = 0.35,
  className = "",
}: {
  children: React.ReactNode;
  /** マーカーが走り出すまでの遅延(秒) */
  delay?: number;
  /** 外側spanへの追加クラス(例: "sm:table" で1行1ブロック表示) */
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.35em] origin-left rounded-sm sm:-rotate-1"
        style={{
          // ダーク=Zazaの金色 / ライト=インディゴ(tokens.cssの--markerで管理)
          background: "var(--marker)",
        }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}
