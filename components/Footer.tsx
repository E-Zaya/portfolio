import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="container-custom">
        <div className="glass rounded-[28px] px-6 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-[var(--foreground)]">Zaya Portfolio</p>
              <p className="mt-1 text-sm text-[var(--text-soft)]">
                Next.js / Tailwind CSS / Framer Motion
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--foreground)] transition hover:-translate-y-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}