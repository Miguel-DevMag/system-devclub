import { motion, useReducedMotion } from "motion/react";

import studentOne from "@/assets/images/testimonial-1.webp";
import studentTwo from "@/assets/images/testimonial-2.webp";
import studentThree from "@/assets/images/testimonial-3.webp";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

const students = [
  { image: studentOne, width: 1067, height: 1600 },
  { image: studentTwo, width: 1200, height: 1200 },
  { image: studentThree, width: 1200, height: 1510 },
] as const;

export function CommunityExperienceSection() {
  const reducedMotion = useReducedMotion() ?? false;
  const { language } = usePreferences();
  const content = targetedContent[language].community;

  return (
    <section
      id="comunidade"
      aria-labelledby="community-experience-title"
      className="institutional-community community-refined"
    >
      <Container>
        <header className="community-refined__intro">
          <div>
            <p className="institutional-eyebrow">{content.eyebrow}</p>
            <h2 id="community-experience-title">{content.title}</h2>
          </div>
          <p>{content.description}</p>
        </header>

        <motion.div
          className="community-refined__people"
          initial={reducedMotion ? false : { opacity: 0.72, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : motionTokens.duration.expressive, ease: motionTokens.easing.emphasized }}
        >
          {students.map((student, index) => (
            <figure key={student.image}>
              <img
                src={student.image}
                width={student.width}
                height={student.height}
                alt={content.photoAlt + " " + (index + 1)}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{content.labels[index]}</strong>
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <p className="community-refined__note">{content.note}</p>
      </Container>
    </section>
  );
}
