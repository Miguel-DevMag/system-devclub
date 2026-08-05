import { useRef, useState } from "react";
import { useInView } from "motion/react";

import { ExperienceSurface } from "@/components/experience/ExperienceSurface";
import { HeroAtmosphere } from "@/components/hero/HeroAtmosphere";
import { HeroEditorialVisual } from "@/components/hero/HeroEditorialVisual";
import { HeroContent, type HeroIntent } from "@/components/hero/HeroContent";
import { Container } from "@/components/layout/Container";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [intent, setIntent] = useState<HeroIntent>(null);
  const isVisible = useInView(sectionRef, { margin: "80px 0px" });
  const { language } = usePreferences();
  const copy = targetedContent[language].hero;

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-title"
      className="hero-definitive hero-definitive--refined"
    >
      <ExperienceSurface className="hero-surface">
        <HeroAtmosphere active={isVisible} intent={intent} />
        <Container className="hero-shell">
          <div className="hero-stage">
            <HeroContent onIntentChange={setIntent} />
            <HeroEditorialVisual intent={intent} />
          </div>
        </Container>
        <div aria-hidden="true" className="hero-continuity">
          <div className="hero-continuity__line" />
          <div className="hero-continuity__rail">
            <span />
            <small>{copy.continuity}</small>
          </div>
        </div>
      </ExperienceSurface>
    </section>
  );
}
