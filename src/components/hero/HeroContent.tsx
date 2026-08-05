import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";

export type HeroIntent = "ecosystem" | "platform" | null;

interface HeroContentProps {
  onIntentChange: (intent: HeroIntent) => void;
}

export function HeroContent({ onIntentChange }: HeroContentProps) {
  return (
    <div className="hero-copy">
      <div className="hero-eyebrow">
        <span aria-hidden="true" className="hero-eyebrow__line" />
        <span>{hero.eyebrow}</span>
        <small>01 / descoberta</small>
      </div>

      <h1 id="hero-title" className="hero-title">
        <span className="sr-only">{hero.title}</span>
        <span aria-hidden="true">
          {hero.titleLines.map((line, index) => (
            <span
              key={line}
              className={cn(
                "hero-title__line",
                index === hero.titleLines.length - 1 && "hero-title__accent",
              )}
            >
              {line}
            </span>
          ))}
        </span>
      </h1>

      <p className="hero-description">{hero.description}</p>

      <div className="hero-actions">
        <a
          href={hero.primaryCta.href}
          onMouseEnter={() => onIntentChange("ecosystem")}
          onMouseLeave={(event) => {
            if (!event.currentTarget.matches(":focus-visible")) {
              onIntentChange(null);
            }
          }}
          onFocus={() => onIntentChange("ecosystem")}
          onBlur={(event) => {
            if (!event.currentTarget.matches(":hover")) {
              onIntentChange(null);
            }
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "hero-cta hero-cta--primary",
          )}
        >
          {hero.primaryCta.label}
          <ArrowRight aria-hidden="true" className="hero-cta__icon" size={16} />
        </a>

        <a
          href={hero.secondaryCta.href}
          onMouseEnter={() => onIntentChange("platform")}
          onMouseLeave={(event) => {
            if (!event.currentTarget.matches(":focus-visible")) {
              onIntentChange(null);
            }
          }}
          onFocus={() => onIntentChange("platform")}
          onBlur={(event) => {
            if (!event.currentTarget.matches(":hover")) {
              onIntentChange(null);
            }
          }}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "hero-cta hero-cta--secondary",
          )}
        >
          {hero.secondaryCta.label}
          <ArrowRight aria-hidden="true" className="hero-cta__icon" size={15} />
        </a>
      </div>

      <ol className="hero-pillars" aria-label="Dimensões do ecossistema DevClub">
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
