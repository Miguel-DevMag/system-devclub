import { ReactiveLight } from "@/components/experience/ReactiveLight";
import { useExperienceSurface } from "@/components/experience/experience-context";
import type { HeroIntent } from "@/components/hero/HeroContent";
import { cn } from "@/lib/utils";

interface HeroAtmosphereProps {
  active: boolean;
  intent: HeroIntent;
}

export function HeroAtmosphere({ active, intent }: HeroAtmosphereProps) {
  const { reducedMotion } = useExperienceSurface();
  const shouldBreathe = active && !reducedMotion;

  return (
    <div aria-hidden="true" className="hero-atmosphere">
      <div className="hero-atmosphere__base" />

      <div
        className={cn("hero-atmosphere__breath", shouldBreathe && "is-active")}
      />

      <ReactiveLight
        energized={intent === "ecosystem"}
        className="hero-atmosphere__light hero-atmosphere__light--cyan"
      />
      <ReactiveLight
        energized={intent === "platform"}
        className="hero-atmosphere__light hero-atmosphere__light--violet"
      />

      <div className="hero-atmosphere__grid" />
      <div className="hero-atmosphere__volume" />
      <div className="hero-atmosphere__mist" />
      <div className="hero-atmosphere__vignette" />
    </div>
  );
}
