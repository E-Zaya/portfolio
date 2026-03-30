"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroBadges } from "@/data/portfolio";
import ReactCountryFlag from "react-country-flag";

export default function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const imageY = useTransform(scrollY, [0, 500], [0, -35]);
  const glowY = useTransform(scrollY, [0, 500], [0, -20]);

  const languages = [
    { code: "MN", country: "MN" },
    { code: "JP", country: "JP" },
    { code: "EN", country: "US" },
    { code: "CN", country: "CN" },
  ];

  return (
    <section className="section-space pt-8">
      <div className="container-custom">
        <div className="apple-panel gradient-border relative overflow-hidden rounded-4xl px-6 py-12 md:px-12 md:py-16">
          <div
            className="hero-orb -left-10 -top-10 h-40 w-40"
            style={{
              background: "color-mix(in srgb, var(--accent-1) 30%, transparent)",
            }}
          />
          <div
            className="hero-orb -bottom-10 -right-5 h-48 w-48"
            style={{
              background: "color-mix(in srgb, var(--accent-4) 24%, transparent)",
            }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.9fr)]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ y: shouldReduceMotion ? 0 : imageY }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                className="pointer-events-none absolute -right-4 top-8 h-28 w-28 rounded-full blur-3xl"
                style={{
                  y: shouldReduceMotion ? 0 : glowY,
                  background: "color-mix(in srgb, var(--accent-4) 12%, transparent)",
                }}
              />
              <motion.div
                className="pointer-events-none absolute -left-4 bottom-8 h-32 w-32 rounded-full blur-3xl"
                style={{
                  y: shouldReduceMotion ? 0 : glowY,
                  background: "color-mix(in srgb, var(--accent-1) 10%, transparent)",
                }}
              />

              <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]">
                <div className="relative rounded-[28px] bg-gradient-to-br from-white/60 via-white/20 to-white/10 p-[1px]">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/30 bg-card/90 shadow-theme"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src="/IMG_6346.JPEG"
                        alt="Zaya portrait"
                        fill
                        priority
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
                        className="object-cover object-[58%_center] transition duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/6" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                  </motion.div>
                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-end">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs shadow-sm backdrop-blur"
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
          </div>
        </div>
      </div>
    </section>
  );
}