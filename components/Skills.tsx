"use client";

import { motion } from "framer-motion";
import { skillItems } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            Tech Stack
          </p>
          <p className="mt-3 text--(--text-soft)]">
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {skillItems.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass group flex min-h-10 flex-col items-center justify-center rounded-[28px] p-6 text-center transition"
              >
                <Icon className="mb-4 text-5xl text-[var(--foreground)] transition duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium text-[var(--foreground)]">{skill.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}