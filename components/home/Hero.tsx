"use client";

import Card from "@/components/ui/Card";
import SectionShell from "@/components/ui/SectionShell";
import type { Locale } from "@/lib/i18n";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero({ locale }: { locale: Locale }) {

  return (
    <SectionShell className="pt-8">
      <Card gradientBorder className="relative overflow-hidden rounded-4xl px-6 py-12 md:px-12 md:py-16 hero-bg">
        
  

        {/* 元のorb（少し調整） */}
        <div
          className="hero-orb left-[-40px] top-[-40px] h-40 w-40"
          style={{ background: "color-mix(in srgb, var(--accent-1) 30%, transparent)" }}
        />
        <div
          className="hero-orb bottom-[-40px] right-[-20px] h-48 w-48"
          style={{ background: "color-mix(in srgb, var(--accent-4) 24%, transparent)" }}
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          
          <HeroContent locale={locale} />
          <HeroVisual />
        </div>
      </Card>
    </SectionShell>
  );
}