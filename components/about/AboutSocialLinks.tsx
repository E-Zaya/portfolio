"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function AboutSocialLinks() {
  return (
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
  );
}
