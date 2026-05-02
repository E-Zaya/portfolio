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
      <div className="flex flex-wrap justify-end gap-3">
        {socialLinks.map((item) => {
          // social icon
          const Icon = item.icon;

          // email button shows icon + text
          const isEmail = item.name === "Email";

          return (
            <a
              key={item.name}
              href={item.url}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer"}
              aria-label={item.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-theme transition duration-300 hover:-translate-y-1 hover:border-foreground/30"
            >
              {/* icon */}
              <Icon
                className="h-4 w-4 shrink-0"
                style={{ color: item.color }}
              />

              {/* email label */}
              {isEmail && <span>メール</span>}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}