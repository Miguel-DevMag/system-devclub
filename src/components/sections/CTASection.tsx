import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { cta } from "@/data/cta";

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <section id="cta" aria-labelledby="cta-title" className="cta-final">
      <div className="cta-final__entry" aria-hidden="true">
        <span>contexto reunido</span>
        <i />
        <strong>uma decisão</strong>
      </div>

      <div className="cta-final__word" aria-hidden="true">COMEÇAR</div>
      <div className="cta-final__light" aria-hidden="true" />

      <Container className="cta-final__container">
        <div className="cta-final__convergence" aria-hidden="true">
          <motion.i
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-18%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.cinematic,
              ease: motionTokens.easing.flow,
            }}
          />
          <motion.i
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-18%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.cinematic,
              ease: motionTokens.easing.flow,
            }}
          />
        </div>

        <motion.div
          className="cta-final__content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="cta-final__eyebrow"><span />{cta.eyebrow}</div>
          <h2 id="cta-title">{cta.title}</h2>
          <p>{cta.description}</p>

          <motion.a
            href={cta.primaryHref}
            className="cta-final__action"
            whileHover={reducedMotion ? undefined : { y: -1 }}
            whileTap={reducedMotion ? undefined : { y: 1 }}
            transition={{
              duration: motionTokens.duration.responsive,
              ease: motionTokens.easing.standard,
            }}
          >
            <span>{cta.primaryLabel}</span>
            <ArrowRight aria-hidden="true" />
          </motion.a>
          <small>{cta.destination}</small>
        </motion.div>

        <div className="cta-final__release" aria-hidden="true">
          <span>aprender</span>
          <span>construir</span>
          <span>evoluir</span>
        </div>
      </Container>
    </section>
  );
}
