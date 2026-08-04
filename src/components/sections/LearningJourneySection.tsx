import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

import { Container } from "@/components/layout/Container";
import { LearningJourney } from "@/components/learning/LearningJourney";
import { motionTokens } from "@/components/motion/motion-tokens";
import { learningJourney } from "@/data/learning-journey";

export function LearningJourneySection() {
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
      learningJourney.stages.length - 1,
      Math.floor(latest * learningJourney.stages.length),
    );
    setActiveStage((current) => (current === nextStage ? current : nextStage));
  });

  return (
    <section
      ref={sectionRef}
      id="jornada-aprendizado"
      aria-labelledby="learning-journey-title"
      className="learning-journey-section relative bg-[#090d10]"
    >
      <div className="learning-journey__continuity" aria-hidden="true">
        <span>growth architecture / output</span>
        <i />
      </div>
      <div className="learning-journey__ambient" aria-hidden="true" />

      <div className="learning-journey__sticky">
        <Container className="relative z-10">
          <motion.header
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
            className="learning-journey__header"
          >
            <div className="learning-journey__eyebrow">
              <span />
              {learningJourney.eyebrow}
            </div>
            <div>
              <h2 id="learning-journey-title">{learningJourney.title}</h2>
              <p>{learningJourney.description}</p>
            </div>
          </motion.header>

          <LearningJourney
            activeStage={activeStage}
            progress={scrollYProgress}
            reducedMotion={reducedMotion}
          />

          <div className="learning-journey__exit" aria-hidden="true">
            <span>produto construído</span>
            <i />
            <small>continua na plataforma</small>
          </div>
        </Container>
      </div>
    </section>
  );
}
