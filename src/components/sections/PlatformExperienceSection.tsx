import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { ProductLearningSurface } from "@/components/platform/ProductLearningSurface";
import { platformExperience } from "@/data/platform-experience";

export function PlatformExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reducedMotion) return;
    const nextStage = Math.min(
      platformExperience.stages.length - 1,
      Math.floor(latest * platformExperience.stages.length),
    );
    setActiveStage((current) => (current === nextStage ? current : nextStage));
  });

  return (
    <section
      ref={sectionRef}
      id="plataforma"
      aria-labelledby="platform-experience-title"
      className="platform-experience-section"
    >
      <div className="platform-experience__entry" aria-hidden="true">
        <span>produto construído</span>
        <i />
        <small>entra na experiência</small>
      </div>
      <div className="platform-experience__ambient" aria-hidden="true" />

      <div className="platform-experience__sticky">
        <Container className="relative z-10">
          <motion.header
            className="platform-experience__header"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
          >
            <div className="platform-experience__eyebrow">
              <span />
              {platformExperience.eyebrow}
            </div>
            <div className="platform-experience__heading-copy">
              <h2 id="platform-experience-title">{platformExperience.title}</h2>
              <p>{platformExperience.description}</p>
            </div>
            <div className="platform-experience__progress" aria-hidden="true">
              <span>{String(activeStage + 1).padStart(2, "0")} / 05</span>
              <i><b style={{ transform: `scaleX(${(activeStage + 1) / 5})` }} /></i>
            </div>
          </motion.header>

          <ProductLearningSurface
            activeStage={activeStage}
            reducedMotion={reducedMotion}
            onStageChange={setActiveStage}
          />

          <div className="platform-experience__exit" aria-hidden="true">
            <span><i /><i /><i /></span>
            <b>pessoas e atividade entram no próximo capítulo</b>
          </div>
        </Container>
      </div>
    </section>
  );
}
