"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

const strengths = [
  {
    title: "Multilingual Learning",
    description:
      "I learn primarily through Japanese technical resources and documentation, supported by English. This gives me access to a wider and deeper range of knowledge.",
  },
  {
    title: "Frontend Focus",
    description:
      "I am focused on frontend development with Next.js and React, building interfaces that feel clean, modern, and comfortable to use.",
  },
  {
    title: "Global Vision",
    description:
      "My journey across languages and cultures shapes how I think as a developer. I want to create products that combine local passion with global standards.",
  },
];

const journeyItems = [
  {
    year: "2014",
    title: "Move to Japan",
    description:
      "Started a new chapter abroad and built the foundation for a cross-cultural perspective.",
  },
  {
    year: "2024",
    title: "Return to Mongolia",
    description:
      "Came back to Mongolia to focus seriously on a future in web development.",
  },
  {
    year: "Now",
    title: "IO Institute",
    description:
      "Studying in an intensive environment and strengthening my frontend development skills.",
  },
  {
    year: "Future",
    title: "Global Developer",
    description:
      "Aiming to become a world-class developer who bridges cultures through code.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <div className="apple-panel gradient-border relative overflow-hidden rounded-[32px] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div
            className="absolute left-[-40px] top-[-40px] h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--accent-1) 14%, transparent)",
            }}
          />
          <div
            className="absolute bottom-[-50px] right-[-30px] h-48 w-48 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--accent-4) 14%, transparent)",
            }}
          />

          <div className="relative z-10 space-y-14 md:space-y-16">
            <motion.div
              {...fadeUp}
              className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)]"
            >
              <div className="max-w-3xl">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] hero-gradient">
                  About Me
                </p>

                <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  From Tokyo to Ulaanbaatar
                </h1>

                <div className="gradient-line mt-4 h-px w-28" />

                <div className="mt-6 space-y-5 text-soft">
                  <p className="leading-8">
                    After spending a decade in Japan, I returned to Mongolia to
                    pursue my goal of becoming a Web Developer. To fully focus
                    on my growth, I enrolled in IO Institute&apos;s intensive
                    program and committed myself to learning modern web
                    development in a dedicated environment.
                  </p>

                  <p className="leading-8">
                    Living in Japan for 10 years made me more fluent in Japanese
                    than my native Mongolian. This gives me a unique advantage:
                    I can learn from Japan&apos;s rich technical ecosystem
                    through documentation, articles, and educational resources,
                    while also expanding my perspective through English.
                  </p>

                  <p className="leading-8">
                    My goal is to become a world-class developer who bridges
                    cultures through code — combining multilingual learning,
                    global thinking, and thoughtful design to build clean and
                    meaningful digital experiences.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div
                  className="pointer-events-none absolute -left-5 bottom-8 h-28 w-28 rounded-full blur-3xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-1) 18%, transparent)",
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-5 top-8 h-28 w-28 rounded-full blur-3xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-4) 18%, transparent)",
                  }}
                />

                <div className="gradient-border rounded-[26px] p-[1px]">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    className="group overflow-hidden rounded-[24px] border border-border bg-card shadow-theme"
                  >
                    <Image
                      src="/IMG_6346.JPEG"
                      alt="Zaya portrait"
                      width={300}
                      height={400}
                      priority
                      className="h-[400px] w-[300px] object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="space-y-6"
            >
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">
                  Strengths
                </p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  What I Bring
                </h2>
              </div>

              <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="apple-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 md:p-6"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-soft">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="space-y-6"
            >
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">
                  Journey
                </p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  My Path
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
                {journeyItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: index * 0.14 }}
                    className="apple-panel relative overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 md:p-6"
                  >
                    <div
                      className="pointer-events-none absolute -right-4 -top-2 h-16 w-16 rounded-full blur-2xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent-4) 14%, transparent)",
                      }}
                    />
                    <div
                      className="pointer-events-none absolute -bottom-2 -left-3 h-14 w-14 rounded-full blur-2xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent-1) 12%, transparent)",
                      }}
                    />

                    <div className="relative z-10">
                      <p className="text-sm font-medium tracking-[0.2em] text-muted">
                        {item.year}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-soft">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="pt-1"
            >
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-theme transition duration-300 hover:-translate-y-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}