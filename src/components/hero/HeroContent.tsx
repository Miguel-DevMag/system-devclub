import { ArrowRight, Globe2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";

export type ArtifactIntent = "primary" | "secondary" | null;

interface HeroContentProps {
  onArtifactIntentChange: (intent: ArtifactIntent) => void;
}

export function HeroContent({ onArtifactIntentChange }: HeroContentProps) {
  return (
    <div className="relative z-30 max-w-[42rem] lg:pr-1">
      <h1 className="text-[clamp(2.42rem,10.65vw,4.4rem)] font-semibold leading-[0.905] tracking-[-0.066em] text-white lg:text-[clamp(4.35rem,5.35vw,5.7rem)]">
        <span className="sr-only">{hero.title}</span>
        <span aria-hidden="true">
          {hero.titleLines.map((line, index) => (
            <span
              key={line}
              className={cn(
                "block whitespace-nowrap",
                index === 2 &&
                  "bg-[linear-gradient(98deg,#fff_0%,#fff_72%,#cffafe_100%)] bg-clip-text text-transparent [filter:drop-shadow(14px_5px_22px_rgba(103,232,249,.08))]",
              )}
            >
              {line}
            </span>
          ))}
        </span>
      </h1>

      <p className="mt-4 max-w-[35rem] text-pretty text-[14px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[16px] sm:leading-7 lg:mt-[1.15rem]">
        {hero.description}
      </p>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3 lg:mt-6">
        <a
          href={hero.primaryCta.href}
          onMouseEnter={() => onArtifactIntentChange("primary")}
          onMouseLeave={(event) => {
            if (!event.currentTarget.matches(":focus-visible")) {
              onArtifactIntentChange(null);
            }
          }}
          onFocus={() => onArtifactIntentChange("primary")}
          onBlur={(event) => {
            if (!event.currentTarget.matches(":hover")) {
              onArtifactIntentChange(null);
            }
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "group min-h-12 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_14px_40px_-18px_rgba(103,232,249,.74)] outline-none transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-cyan-50 hover:shadow-[0_18px_44px_-16px_rgba(103,232,249,.82)] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030609] active:translate-y-0",
          )}
        >
          {hero.primaryCta.label}
          <ArrowRight
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </a>
        <a
          href={hero.secondaryCta.href}
          onMouseEnter={() => onArtifactIntentChange("secondary")}
          onMouseLeave={(event) => {
            if (!event.currentTarget.matches(":focus-visible")) {
              onArtifactIntentChange(null);
            }
          }}
          onFocus={() => onArtifactIntentChange("secondary")}
          onBlur={(event) => {
            if (!event.currentTarget.matches(":hover")) {
              onArtifactIntentChange(null);
            }
          }}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "group min-h-12 rounded-full border-white/18 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/88 outline-none transition-[border-color,background-color,color] duration-200 hover:border-cyan-100/32 hover:bg-cyan-100/[0.075] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030609]",
          )}
        >
          <Globe2
            aria-hidden="true"
            className="transition-colors duration-200 group-hover:text-cyan-200 group-focus-visible:text-cyan-200"
          />
          {hero.secondaryCta.label}
        </a>
      </div>

      <p className="mt-4 flex max-w-md items-start gap-3 text-[11px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-white/62 sm:mt-5">
        <span
          aria-hidden="true"
          className="mt-[7px] h-px w-7 shrink-0 bg-gradient-to-r from-cyan-200 to-violet-200/30"
        />
        {hero.proof}
      </p>
    </div>
  );
}
