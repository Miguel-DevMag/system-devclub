/**
 * PlatformExperienceSection.tsx
 *
 * Seção institucional da Plataforma DevClub.
 * Responde: "Como é estudar e construir dentro do DevClub?"
 *
 * Composição assimétrica: contexto editorial + screenshot real protagonista.
 * Fundo grafite ligeiramente mais claro que as seções anteriores — diferenciação clara.
 * Sem sticky prolongado. Altura máxima próxima de 100svh.
 * id="plataforma" preservado para navegação do Header.
 */

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { Container } from "@/components/layout/Container";
import { PlatformShowcase } from "@/components/platform/PlatformShowcase";
import { motionTokens } from "@/components/motion/motion-tokens";

export function PlatformExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={sectionRef}
      id="plataforma"
      aria-labelledby="platform-showcase-title"
      className="pshow-section"
    >
      {/* Atmosfera de fundo */}
      <div className="pshow-section__bg" aria-hidden="true">
        <div className="pshow-section__noise noise-overlay" />
        {/* Luz suave vindo da direita — simula o screenshot iluminando a seção */}
        <motion.div
          className="pshow-section__ambient-light"
          initial={reducedMotion ? undefined : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            delay: 0.15,
            ease: motionTokens.easing.standard,
          }}
        />
      </div>

      {/* Linha de entrada — continuidade do Ecossistema */}
      <div className="pshow-section__entry" aria-hidden="true">
        <span className="pshow-section__entry-line" />
      </div>

      <Container className="pshow-section__container">
        <PlatformShowcase />
      </Container>

      {/* Linha de saída — prepara Comunidade */}
      <div className="pshow-section__exit" aria-hidden="true">
        <span className="pshow-section__exit-label">o método se completa na comunidade</span>
        <span className="pshow-section__exit-line" />
      </div>
    </section>
  );
}
