import { useState } from "react";

import { ExperienceSurface } from "@/components/experience/ExperienceSurface";
import { HeroAtmosphere } from "@/components/hero/HeroAtmosphere";
import { HeroBuildArtifact } from "@/components/hero/HeroBuildArtifact";
import {
  HeroContent,
  type ArtifactIntent,
} from "@/components/hero/HeroContent";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const [artifactIntent, setArtifactIntent] = useState<ArtifactIntent>(null);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#030609]"
    >
      <ExperienceSurface className="min-h-[100svh]">
        <HeroAtmosphere intent={artifactIntent} />

        <Container className="relative z-20 flex min-h-[100svh] items-center pb-7 pt-[5.6rem] sm:pb-10 sm:pt-[6.25rem] lg:pb-5 lg:pt-[5.5rem]">
          <div className="grid w-full items-center gap-4 sm:gap-7 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-0">
            <HeroContent onArtifactIntentChange={setArtifactIntent} />
            <HeroBuildArtifact intent={artifactIntent} />
          </div>
        </Container>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-b from-transparent to-neutral-950"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[76%] z-30 h-[4.75rem] w-[18%] sm:left-[78%] lg:left-[82.5%]"
        >
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-100/46 to-violet-200/18 shadow-[0_0_18px_rgba(103,232,249,.2)]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-violet-200/18 to-transparent" />
        </div>
      </ExperienceSurface>
    </section>
  );
}
