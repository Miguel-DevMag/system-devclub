import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { recognition } from "@/data/recognition";

export function RecognitionSection() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="reconhecimento"
      aria-labelledby="recognition-title"
      className="recognition-section"
    >
      <div className="recognition-section__entry" aria-hidden="true">
        <span>capacidade construída</span>
        <i />
        <strong>entra em circulação</strong>
      </div>

      <Container className="recognition-section__container">
        <motion.header
          className="recognition-section__header"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="recognition-section__eyebrow"><span />{recognition.eyebrow}</div>
          <div>
            <h2 id="recognition-title">{recognition.title}</h2>
            <p>{recognition.description}</p>
          </div>
        </motion.header>

        <div className="recognition-section__field">
          <div className="recognition-section__impact-word" aria-hidden="true">IMPACTO</div>
          <div className="recognition-section__impact-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <motion.div
            className="recognition-section__sequence"
            initial={reducedMotion ? false : { opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-16%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.expressive,
              ease: motionTokens.easing.standard,
            }}
          >
            <motion.i
              aria-hidden="true"
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-16%" }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.duration.cinematic,
                ease: motionTokens.easing.flow,
              }}
            />
            <ol aria-label="Progressão da jornada até impacto">
              {recognition.sequence.map((step) => (
                <li key={step.index}>
                  <span>{step.index}</span>
                  <strong>{step.label}</strong>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.article
            className="recognition-section__outcome"
            initial={reducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
          >
            <span>{recognition.outcome.eyebrow}</span>
            <h3>{recognition.outcome.title}</h3>
            <p>{recognition.outcome.description}</p>
          </motion.article>
        </div>

        <div className="recognition-section__exit" aria-hidden="true">
          <span>impacto pede clareza</span>
          <i />
          <strong>as dúvidas encontram contexto</strong>
        </div>
      </Container>
    </section>
  );
}
