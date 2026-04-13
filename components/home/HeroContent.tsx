"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getMessages, type Locale } from "@/lib/i18n";

export default function HeroContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;

  return (
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
  );
}