"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -35]);
  const glowY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <SectionShell className="pt-8">
      <Card gradientBorder className="relative overflow-hidden rounded-[32px] px-6 py-12 md:px-12 md:py-16 hero-bg">
        
  

        {/* 元のorb（少し調整） */}
        <div
          className="hero-orb left-[-40px] top-[-40px] h-40 w-40"
          style={{ background: "color-mix(in srgb, var(--accent-1) 30%, transparent)" }}
        />
        <div
          className="hero-orb bottom-[-40px] right-[-20px] h-48 w-48"
          style={{ background: "color-mix(in srgb, var(--accent-4) 24%, transparent)" }}
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          
          {/* 左側テキスト（元のままシンプルに） */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] hero-gradient">{t.eyebrow}</p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
              {t.title}
              <span className="hero-gradient" style={{ whiteSpace: "pre-line" }}>
                {t.highlight}
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-8 text-soft md:text-lg">{t.description}</p>

            <div className="mb-8 flex flex-wrap gap-3">
              {t.badges.map((badge) => (
                <Badge key={badge} className="text-soft">
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href="https://www.linkedin.com/in/itgelzaya-enkh-amgalan-800a833b7"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </Button>

              <Button href="https://github.com/E-Zaya" target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </Button>
            </div>
          </motion.div>

          {/* 右側画像エリア */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ y: imageY }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            {/* 強いglowエフェクト */}
            <motion.div
              style={{ y: glowY }}
              className="absolute -inset-12 -z-10 rounded-full bg-gradient-to-br from-accent-1/25 via-accent-4/20 to-transparent blur-3xl"
            />

            <div className="gradient-border rounded-[30px] p-[1px]">
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

            {/* Based in バッジ） */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-5 right-4 rounded-2xl bg-card/90 backdrop-blur-md px-5 py-2.5 text-xs border border-border shadow-md"
            >
              Based in Ulaanbaatar 🇲🇳
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </SectionShell>
  );
}