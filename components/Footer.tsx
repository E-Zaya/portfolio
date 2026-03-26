import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="container-custom">
        <div className="glass rounded-[28px] px-6 py-8">

          {/* Top */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            {/* Left */}
            <div>
              <p className="text-lg font-semibold text-[var(--foreground)]">
                Zaya Portfolio
              </p>
              <p className="mt-1 text-sm text-[var(--text-soft)]">
                Web Developer / Next.js / Tailwind CSS / Framer Motion / Prisma / 
              </p>

              {/* Optional（信頼感UP） */}
              <p className="mt-3 text-xs text-[var(--text-soft)]">
                Available for freelance / collaboration
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue/15 px-4 py-2 text-sm text-[var(--foreground)] transition hover:-translate-y-1 hover:border-white/30"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

            {/* Copyright */}
            <p className="text-xs text-[var(--text-soft)]">
              © {new Date().getFullYear()} Zaya. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-4 text-xs text-[var(--text-soft)]">
              <a href="#" className="hover:text-[var(--foreground)] transition">
                Contact
              </a>
              <a href="#" className="hover:text-[var(--foreground)] transition">
                Privacy Policy
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}