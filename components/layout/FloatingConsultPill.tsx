"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  getMessages,
  stripLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

/**
 * 右下フローティングの「無料相談」ピル + 左から覗くZaza。
 * - ヒーローを過ぎたら登場、ページ末尾(Contact付近)では退場
 * - /contact ページでは表示しない
 * - ヘッダーがスクロールで隠れても、相談導線だけは常に生きている状態を作る
 */
export default function FloatingConsultPill({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPathname(pathname);
  const reduce = useReducedMotion();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Contactセクションと重なる末尾では引っ込む
      const nearBottom =
        y + window.innerHeight >
        document.documentElement.scrollHeight - 360;
      setVisible(y > 480 && !nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (cleanPath === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="consult-pill"
          className="fixed right-4 z-40 sm:right-6"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
          }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          {/* Zaza — ピルの左肩からひょこっと覗く */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -left-8 -top-5 z-0 select-none"
            initial={reduce ? false : { x: 16, rotate: 0, opacity: 0 }}
            animate={{ x: 0, rotate: -8, opacity: 1 }}
            transition={{
              delay: 0.25,
              type: "spring",
              stiffness: 260,
              damping: 16,
            }}
          >
            <Image
              src="/Zaza/mascot/zaza-peek.png"
              alt=""
              width={72}
              height={72}
              className="w-12"
            />
          </motion.span>

          <Link
            href={`/${locale}/contact`}
            className="services-primary-button relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              boxShadow:
                "0 10px 30px color-mix(in srgb, var(--accent-2) 40%, transparent)",
            }}
          >
            {t.hero.primaryCta}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
