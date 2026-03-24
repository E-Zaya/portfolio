"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroBadges } from "@/data/portfolio";
import ReactCountryFlag from "react-country-flag";

export default function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion(); // Reducemotion. Scrollエフェクトなどが苦手な方を配慮。ユーザー設定を取得 
  // 設定が有効なら 0、無効なら元の動きを適用
  const imageY = useTransform(scrollY, [0, 500], [0, -35]);
  const glowY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section className="section-space pt-8">
      <div className="container-custom">
        <div className="apple-panel gradient-border relative overflow-hidden rounded-4xl px-6 py-12 md:px-12 md:py-16">
          <div
            className="hero-orb -left-10 -top-10 h-40 w-40"
            style={{
              background:
                "color-mix(in srgb, var(--accent-1) 30%, transparent)",
            }}
          />
          <div
            className="hero-orb -bottom-10 -right-5 h-48 w-48"
            style={{
              background:
                "color-mix(in srgb, var(--accent-4) 24%, transparent)",
            }}
          />

<div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">            
              <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}   >
              
              <p className="mb-4 text-sm uppercase tracking-[0.3em] hero-gradient">
                Full-stack Developer / Multilingual Engineer
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {"Hello, I'm Zaya."}
                <span className="hero-gradient">
                  {" "}
                  Bridging cultures through code.
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-base leading-8 text-soft md:text-lg">
                From Tokyo to Ulaanbaatar, my journey has shaped how I learn and
                build. With strong access to Japanese and English technical
                resources, I create clean, thoughtful web experiences while
                growing toward a global standard.
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                {heroBadges.map((badge) => (
                  <span key={badge} className="badge text-soft">
                    {badge}
                  </span>
                ))}
              </div>
              
              

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/itgelzaya-enkh-amgalan-800a833b7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground shadow-theme transition hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/E-Zaya"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground shadow-theme transition hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>

              {/* 画像、国旗 */}


            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ y: imageY }}
              className="relative flex justify-center lg:justify-end "
            >
              <motion.div
                className="pointer-events-none absolute -right-6 top-10 h-40 w-40 rounded-full blur-3xl"
                style={{
                  y: glowY,
                  background:
                    "color-mix(in srgb, var(--accent-4) 18%, transparent)",
                }}
              />
              <motion.div
                className="pointer-events-none absolute -left-6 bottom-10 h-44 w-44 rounded-full blur-3xl"
                style={{
                  y: glowY,
                  background:
                    "color-mix(in srgb, var(--accent-1) 16%, transparent)",
                }}
              />

              <div className="relative gradient-border rounded-[26px] p-px">
                <motion.div
                  whileHover={{ scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-theme"
                >
                  <Image
                    src="/IMG_6346.JPEG"
                    alt="Zaya portrait"
                    width={300}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="w-full max-w-75 h-auto object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </motion.div>

              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:absolute lg:right-3 lg:-top-8 lg:z-20 lg:mt-0 lg:max-w-full lg:justify-end-safe">                      {[
                        { code: "MN", country: "MN" },
                        { code: "JP", country: "JP" },
                        { code: "EN", country: "US" },
                        { code: "CN", country: "CN" },
                      ].map((lang) => (
                        <div
                          key={lang.code}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs"
                        >
                          <ReactCountryFlag
                            countryCode={lang.country}
                            svg
                            style={{ width: "1em", height: "1em" }}
                          />
                          <span>{lang.code}</span>
                        </div>
                      ))}

                </div>
              </div>


            </motion.div>

            {/* エンド */}
          </div>
        </div>
      </div>
    </section>
  );
}