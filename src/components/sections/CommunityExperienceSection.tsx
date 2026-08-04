import { motion, useReducedMotion } from "motion/react";

import { CommunityCampus } from "@/components/community/CommunityCampus";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { communityExperience } from "@/data/community-experience";

export function CommunityExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="comunidade"
      aria-labelledby="community-experience-title"
      className="community-experience-section"
    >
      <div className="community-experience__ambient" aria-hidden="true" />
      <Container className="relative z-10">
        <motion.header
          className="community-experience__header"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="community-experience__eyebrow"><span />{communityExperience.eyebrow}</div>
          <div>
            <h2 id="community-experience-title">{communityExperience.title}</h2>
            <p>{communityExperience.description}</p>
          </div>
          <small>{communityExperience.disclosure}</small>
        </motion.header>

        <CommunityCampus />

        <div className="community-experience__exit" aria-hidden="true">
          <span>trajetórias individuais</span>
          <i />
          <strong>seguem como conexões humanas</strong>
        </div>
      </Container>
    </section>
  );
}
