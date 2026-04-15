import Link from "next/link";
import { getMessages, type Locale } from "@/lib/i18n";
import { contactEmail, socialLinks } from "@/data/social";

type Props = {
  locale: Locale;
};

export default function BlogPostCTA({ locale }: Props) {
  const t = getMessages(locale).blog;
  const github = socialLinks.find((link) => link.name === "GitHub")?.url ?? "https://github.com/E-Zaya";
  const linkedIn =
    socialLinks.find((link) => link.name === "LinkedIn")?.url ??
    "https://www.linkedin.com/in/itgelzaya-enkh-amgalan-800a833b7";

  return (
    <section className="rounded-[28px] border border-border bg-card px-6 py-6 shadow-theme backdrop-blur-xl md:px-8 md:py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[clamp(24px,2.6vw,34px)] font-semibold tracking-[-0.04em] text-foreground">
          {t.ctaTitle}
        </h2>

        <div className="flex flex-wrap gap-3">
          <Link
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card-strong px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-card"
          >
            {t.ctaGithub}
          </Link>

          <Link
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card-strong px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-card"
          >
            {t.ctaLinkedin}
          </Link>

          <Link
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center rounded-full border border-border bg-card-strong px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-card"
          >
            {t.ctaEmail}
          </Link>
        </div>
      </div>
    </section>
  );
}
