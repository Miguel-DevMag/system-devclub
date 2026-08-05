import { motion, useReducedMotion } from "motion/react";

import arnobioPortrait from "@/assets/images/Arnobio.jpg";
import guilhermePortrait from "@/assets/images/guilherme-soares.jpg";
import lucasPortrait from "@/assets/images/lucas.webp";
import robsonPortrait from "@/assets/images/robson.jpeg";
import rodolfoPortrait from "@/assets/images/rodolfo-people.webp";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

const people = [
  { name: "Guilherme", image: guilhermePortrait },
  { name: "Lucas", image: lucasPortrait },
  { name: "Arnobio", image: arnobioPortrait },
  { name: "Robson", image: robsonPortrait },
] as const;

export function PeopleResultsSection() {
  const reducedMotion = useReducedMotion() ?? false;
  const { language } = usePreferences();
  const content = targetedContent[language].people;

  return (
    <section
      id="pessoas-resultados"
      aria-labelledby="people-results-title"
      className="institutional-people people-refined"
    >
      <Container>
        <header className="people-refined__intro">
          <p className="institutional-eyebrow">{content.eyebrow}</p>
          <h2 id="people-results-title">{content.title}</h2>
          <p>{content.description}</p>
        </header>

        <motion.div
          className="people-refined__composition"
          initial={reducedMotion ? false : { opacity: 0.76, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : motionTokens.duration.expressive, ease: motionTokens.easing.emphasized }}
        >
          <figure className="people-refined__founder">
            <img
              src={rodolfoPortrait}
              width="900"
              height="1350"
              alt={content.founder}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>{content.founder}</strong>
              <span>{content.founderRole}</span>
            </figcaption>
          </figure>

          <div className="people-refined__group">
            <p>{content.groupLabel}</p>
            <div>
              {people.map((person) => (
                <figure key={person.name}>
                  <img src={person.image} width="480" height="480" alt={person.name} loading="lazy" decoding="async" />
                  <figcaption>{person.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
