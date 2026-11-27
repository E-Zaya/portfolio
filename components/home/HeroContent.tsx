"use client";

import { track } from "@vercel/analytics";
import Button from "@/components/ui/Button";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { getConsultHref, getConsultLinkProps } from "@/lib/contact";
import { getMessages, type Locale } from "@/lib/i18n";

export default function HeroContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).hero;

  const contactHref = getConsultHref(locale);
  const consultLinkProps = getConsultLinkProps(locale);
  const projectsHref = `/${locale}/projects`;

  // モバイルでは文単位で自然に流し、sm以上では行ごとにブロック表示(4行の大組み)
  const titleLines = t.title.split("\n").filter((line) => line.trim());
  const highlightLines = t.highlight.split("\n").filter((line) => line.trim());

  // 段は tokens.css の文字の段から。モンゴル語(キリル文字)は語が長いので1段小さく。
  // 字間は base.css の見出しの値 (欧文 -0.02em、和文 0)。
  const headingSizeClass =
    locale === "mn"
      ? "text-xl sm:text-2xl md:text-3xl"
      : "text-2xl sm:text-3xl lg:text-4xl";

  return (
    <div className="flex min-w-0 flex-col items-start text-left">
      {/* headline — 翻訳側で決めた改行を保ち、長いMN文言も画面内に収める */}
      <h1 className={`heading-display jp-tight text-foreground ${headingSizeClass}`}>
        <span className="block">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
        <span className="block">
          {highlightLines.map((line) => (
            <span key={line} className="block w-fit max-w-full">
              <MarkerHighlight>
                {line}
              </MarkerHighlight>
            </span>
          ))}
        </span>
      </h1>
      {/* description */}
      <p className="mt-4 max-w-xl whitespace-pre-line text-base text-soft sm:mt-7">
        {t.description}
      </p>

      {/* CTAs — 長い翻訳でも切れないよう、モバイルは縦並び */}
      <div className="mt-6 grid w-full grid-cols-1 items-center gap-3 sm:mt-10 sm:flex sm:w-auto sm:flex-row">
        <Button
          href={contactHref}
          {...consultLinkProps}
          variant="primary"
          size="compact"
          className="min-h-12 w-full font-bold sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          onClick={() =>
            track("Hero CTA Click", {
              locale,
              destination: locale === "mn" ? "messenger" : "contact",
            })
          }
        >
          {t.primaryCta}
        </Button>

        <Button
          href={projectsHref}
          variant="secondary"
          size="compact"
          className="min-h-12 w-full font-semibold sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          onClick={() => track("Hero Projects Click", { locale })}
        >
          {t.secondaryCta}
        </Button>
      </div>

    </div>
  );
}
