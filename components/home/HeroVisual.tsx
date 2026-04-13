"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVisual() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -35]);
  const glowY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ y: imageY }}
      className="relative mx-auto w-full max-w-105"
    >
      {/* 強いglowエフェクト */}
      <motion.div
        style={{ y: glowY }}
        className="absolute -inset-12 -z-10 rounded-full bg-gradient-to-br from-accent-1/25 via-accent-4/20 to-transparent blur-3xl"
      />

      <div className="gradient-border rounded-[30px] p-px">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-theme">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
          <Image
            src="/IMG_6346.JPEG"
            alt="Zaya portrait"
            width={720}
            height={900}
            priority
            className="h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.06]"
          />
        </div>
      </div>

      {/* Based in バッジ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -bottom-5 right-4 rounded-2xl bg-card/90 backdrop-blur-md px-5 py-2.5 text-xs border border-border shadow-md"
      >
        Based in Ulaanbaatar 🇲🇳
      </motion.div>
    </motion.div>
  );
}