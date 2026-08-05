import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "motion/react";

import { Container } from "@/components/layout/Container";
import { GrowthArchitecture } from "@/components/overview/GrowthArchitecture";
import { motionTokens } from "@/components/motion/motion-tokens";
import { devclubOverview } from "@/data/devclub-overview";

export function DevClubOverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Beyond MBA: Aplicando física de mola (Spring) no scroll para evitar o "engasgo" linear
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  const progressScale = useTransform(springProgress, [0, 1], [0.08, 1]);

  return (
    <section
      ref={sectionRef}
      id="devclub-por-inteiro"
      aria-labelledby="devclub-overview-title"
      className="overview-section relative overflow-hidden bg-[#111416] lg:h-[132svh]"
    >
      <div className="overview-section__ambient" aria-hidden="true" />
      <div className="overview-section__grain" aria-hidden="true" />

      <div className="relative flex min-h-svh items-center py-24 lg:sticky lg:top-0 lg:h-svh lg:py-8">
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(620px,1.28fr)] lg:gap-8 xl:grid-cols-[minmax(390px,0.78fr)_minmax(720px,1.22fr)]">
            <motion.header
              initial={reducedMotion ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.duration.expressive,
                ease: motionTokens.easing.emphasized,
              }}
              className="relative max-w-xl lg:self-center"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-glass px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/68">
                <span className="animate-pulse-glow h-[5px] w-[5px] rounded-full bg-cyan-400/60" />
                {devclubOverview.eyebrow}
              </div>

              <h2
                id="devclub-overview-title"
                className="mt-6 text-[clamp(2.35rem,5.2vw,4.7rem)] font-bold leading-[0.94] tracking-[-0.04em] text-white"
              >
                Tudo o que acelera sua evolução
                <span className="block text-white/55 text-glow">conectado em uma única experiência.</span>
              </h2>

              <p className="mt-6 max-w-[42ch] text-base leading-7 text-white/62 md:text-lg md:leading-8">
                {devclubOverview.description}
              </p>

              <div className="mt-10 hidden items-stretch gap-4 lg:flex">
                <div className="relative w-px overflow-hidden bg-white/10" aria-hidden="true">
                  <motion.span
                    style={reducedMotion ? undefined : { scaleY: progressScale }}
                    className="absolute inset-0 origin-top bg-gradient-to-b from-cyan-200 via-violet-300 to-emerald-200"
                  />
                </div>
                <ol className="space-y-3">
                  {devclubOverview.stages.map((stage) => (
                    <li key={stage.id} className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/34">
                      <span className="w-12 text-white/18">{stage.range}</span>
                      {stage.label}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.header>

            <GrowthArchitecture progress={springProgress} />
          </div>
        </Container>
      </div>
    </section>
  );
}
