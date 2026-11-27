"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { track } from "@vercel/analytics";
import { getConsultHref, getConsultLinkProps } from "@/lib/contact";
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
  const consultHref = getConsultHref(locale);
  const consultLinkProps = getConsultLinkProps(locale);

  const [visible, setVisible] = useState(false);
  const [bubble, setBubble] = useState(false);

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
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          onMouseEnter={() => setBubble(true)}
          onMouseLeave={() => setBubble(false)}
        >
          {/* Zazaのひとこと吹き出し */}
          <AnimatePresence>
            {bubble && (
              <motion.span
                key="bubble"
                className="absolute -top-11 right-0 z-20 whitespace-nowrap rounded-md rounded-br-sm border px-3.5 py-2 text-xs font-bold"
                style={{
                  background: "var(--background-2)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  boxShadow: "var(--shadow)",
                }}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              >
                {t.zaza.pillBubble}
              </motion.span>
            )}
          </AnimatePresence>
          {/* Zaza — ピルの左肩からひょこっと覗く */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-8 -top-5 z-0 -rotate-[8deg] select-none"
          >
            <Image
              src="/Zaza/mascot/zaza-peek.png"
              alt=""
              width={72}
              height={72}
              className="w-12"
            />
          </span>

          <Link
            href={consultHref}
            {...consultLinkProps}
            onClick={() =>
              track("Floating Consult Click", {
                locale,
                destination: locale === "mn" ? "messenger" : "contact",
              })
            }
            className="services-primary-button relative z-10 inline-flex min-h-11 items-center rounded-full px-5 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow)" }}
          >
            {t.hero.primaryCta}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
