import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { officialLinks } from "@/config/official-links";
import { targetedContent } from "@/data/targeted-content";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/preferences/usePreferences";

export type HeroIntent = "ecosystem" | "platform" | null;

interface HeroContentProps {
  onIntentChange: (intent: HeroIntent) => void;
}

export function HeroContent({ onIntentChange }: HeroContentProps) {
  const { language } = usePreferences();
  const hero = targetedContent[language].hero;

  return (
    <div className="hero-copy">
      <div className="hero-eyebrow">
        <span aria-hidden="true" className="hero-eyebrow__line" />
        <span>{hero.eyebrow}</span>
        <small>01 / {language === "pt" ? "descoberta" : "discovery"}</small>
      </div>

      <h1 id="hero-title" className="hero-title">
        <span className="sr-only">{hero.title}</span>
        <span aria-hidden="true">
          {hero.lines.map((line, index) => (
            <span
              key={line}
              className={cn("hero-title__line", index === hero.lines.length - 1 && "hero-title__accent")}
            >
              {line}
            </span>
          ))}
        </span>
      </h1>

      <p className="hero-description">{hero.description}</p>

      <div className="hero-actions">
        <a
          href={officialLinks.formationsPage}
          onMouseEnter={() => onIntentChange("ecosystem")}
          onMouseLeave={() => onIntentChange(null)}
          onFocus={() => onIntentChange("ecosystem")}
          onBlur={() => onIntentChange(null)}
          className={cn(buttonVariants({ size: "lg" }), "hero-cta hero-cta--primary")}
        >
          {hero.primary}
          <ArrowRight aria-hidden="true" className="hero-cta__icon" size={16} />
        </a>
        <a
          href="#plataforma"
          onMouseEnter={() => onIntentChange("platform")}
          onMouseLeave={() => onIntentChange(null)}
          onFocus={() => onIntentChange("platform")}
          onBlur={() => onIntentChange(null)}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "hero-cta hero-cta--secondary")}
        >
          {hero.secondary}
          <ArrowRight aria-hidden="true" className="hero-cta__icon" size={15} />
        </a>
      </div>

      <ol className="hero-pillars" aria-label={language === "pt" ? "Pilares do DevClub" : "DevClub pillars"}>
        {hero.pillars.map((pillar, index) => (
          <li key={pillar}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {pillar}
          </li>
        ))}
      </ol>
    </div>
  );
}
