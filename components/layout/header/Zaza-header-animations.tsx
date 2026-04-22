"use client";

// =========================
// ZAZA Header Animations
// Next.js + Framer Motion component
// =========================
// 使い方:
// 1. public に透過PNGの ZAZA 画像を置く
//    例: /images/zaza/zaza-main.png
// 2. このファイルを components/ZazaHeaderAnimations.tsx などに保存
// 3. Hero / Header section で <ZazaHeaderAnimations variant="float" /> のように使う
//
// 必要パッケージ:
// npm install framer-motion
//
// ポイント:
// - 軽量な 2D アニメーション構成
// - 3パターン切り替え可能
// - コメントを各セクションに明記
// - TypeScript で型を定義

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

// =========================
// type
// =========================
export type ZazaAnimationVariant = "float" | "tilt" | "blink";

type ZazaHeaderAnimationsProps = {
  // image
  src?: string;
  alt?: string;

  // layout
  width?: number;
  height?: number;
  className?: string;

  // animation
  variant?: ZazaAnimationVariant;
  priority?: boolean;
};

// =========================
// helper: class merge (簡易版)
// =========================
function joinClassNames(...values: Array<string | undefined | false | null>): string {
  return values.filter(Boolean).join(" ");
}

// =========================
// root component
// =========================
export default function ZazaHeaderAnimations({
  src = "/images/zaza/zaza-main.png",
  alt = "ZAZA mascot",
  width = 360,
  height = 360,
  className,
  variant = "float",
  priority = false,
}: ZazaHeaderAnimationsProps) {
  // =========================
  // type safety check
  // =========================
  const safeWidth = Number.isFinite(width) && width > 0 ? width : 360;
  const safeHeight = Number.isFinite(height) && height > 0 ? height : 360;

  if (variant === "tilt") {
    return (
      <TiltZaza
        src={src}
        alt={alt}
        width={safeWidth}
        height={safeHeight}
        className={className}
        priority={priority}
      />
    );
  }

  if (variant === "blink") {
    return (
      <BlinkZaza
        src={src}
        alt={alt}
        width={safeWidth}
        height={safeHeight}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <FloatZaza
      src={src}
      alt={alt}
      width={safeWidth}
      height={safeHeight}
      className={className}
      priority={priority}
    />
  );
}

type BaseZazaProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

// =========================
// variant 1: float
// ふわっと上下 + 少し回転
// 一番自然で使いやすい
// =========================
function FloatZaza({ src, alt, width, height, className, priority = false }: BaseZazaProps) {
  return (
    <motion.div
      // wrapper
      className={joinClassNames("relative inline-block select-none", className)}
      initial={{ y: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, -1.2, 0.8, 0],
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 4.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-[18%] rounded-full blur-2xl"
        style={{ background: "var(--overlay-void-soft, rgba(99, 102, 241, 0.18))" }}
      />

      {/* image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="relative z-10 h-auto w-full max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
      />
    </motion.div>
  );
}

// =========================
// variant 2: tilt
// カーソルに反応して少し傾く
// ヒーローの右側に置くと映える
// =========================
function TiltZaza({ src, alt, width, height, className, priority = false }: BaseZazaProps) {
  // =========================
  // motion values
  // =========================
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 18, mass: 0.8 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 18, mass: 0.8 });
  const x = useSpring(xRaw, { stiffness: 160, damping: 16, mass: 0.7 });
  const y = useSpring(yRaw, { stiffness: 160, damping: 16, mass: 0.7 });

  const shadowOpacity = useTransform(rotateY, [-10, 0, 10], [0.2, 0.16, 0.2]);

  const wrapperClassName = useMemo(
    () => joinClassNames("relative inline-block select-none [perspective:1000px]", className),
    [className],
  );

  return (
    <div
      className={wrapperClassName}
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - target.left) / target.width;
        const py = (event.clientY - target.top) / target.height;

        const nextRotateY = (px - 0.5) * 14;
        const nextRotateX = (0.5 - py) * 14;
        const nextX = (px - 0.5) * 8;
        const nextY = (py - 0.5) * 6;

        rotateXRaw.set(nextRotateX);
        rotateYRaw.set(nextRotateY);
        xRaw.set(nextX);
        yRaw.set(nextY);
      }}
      onMouseLeave={() => {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
        xRaw.set(0);
        yRaw.set(0);
      }}
    >
      {/* shadow */}
      <motion.div
        className="pointer-events-none absolute inset-x-[14%] bottom-[8%] h-[18%] rounded-full blur-2xl"
        style={{
          background: "var(--overlay-void-strong, rgba(99, 102, 241, 0.28))",
          opacity: shadowOpacity,
        }}
      />

      {/* image */}
      <motion.div
        className="relative z-10"
        style={{ rotateX, rotateY, x, y, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
        />
      </motion.div>
    </div>
  );
}

// =========================
// variant 3: blink
// ゆるい浮遊 + 疑似まばたきオーバーレイ
// 画像を描き直さずに動き感を出す簡易版
// =========================
function BlinkZaza({ src, alt, width, height, className, priority = false }: BaseZazaProps) {
  return (
    <motion.div
      className={joinClassNames("relative inline-block select-none", className)}
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* shadow */}
      <div
        className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-[18%] rounded-full blur-2xl"
        style={{ background: "var(--overlay-void-soft, rgba(99, 102, 241, 0.18))" }}
      />

      {/* image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="relative z-10 h-auto w-full max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
      />

      {/* pseudo blink overlay */}
      <motion.div
        className="pointer-events-none absolute left-[31%] top-[23%] z-20 flex w-[38%] justify-between"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          times: [0, 0.18, 0.2, 0.215, 0.23, 0.5, 0.72, 0.82, 0.84, 0.855, 0.87],
        }}
      >
        {/* left eye lid */}
        <div
          className="h-[10px] w-[44px] rounded-full"
          style={{ background: "rgba(214, 166, 68, 0.95)" }}
        />

        {/* right eye lid */}
        <div
          className="h-[10px] w-[44px] rounded-full"
          style={{ background: "rgba(214, 166, 68, 0.95)" }}
        />
      </motion.div>
    </motion.div>
  );
}

// =========================
// Example usage
// =========================
// import ZazaHeaderAnimations from "@/components/ZazaHeaderAnimations";
//
// <ZazaHeaderAnimations
//   variant="float"
//   src="/images/zaza/zaza-main.png"
//   width={340}
//   height={340}
//   className="w-[220px] sm:w-[280px] lg:w-[340px]"
//   priority
// />
//
// 推奨:
// - 一番安定: variant="float"
// - インタラクティブ: variant="tilt"
// - キャラ感強め: variant="blink"
