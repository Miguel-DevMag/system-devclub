import { useRef } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import devclubLogo from "@/assets/images/logo-devclub-green.png";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { officialLinks } from "@/config/official-links";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, motionTokens.pointer.spring);
  const smoothY = useSpring(pointerY, motionTokens.pointer.spring);
  const buttonX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const buttonY = useTransform(smoothY, [-1, 1], [-4, 4]);
  const energyX = useTransform(smoothX, [-1, 1], [-42, 42]);
  const energyY = useTransform(smoothY, [-1, 1], [-18, 18]);

  function trackPointer(event: React.PointerEvent<HTMLElement>) {
    if (
      prefersReducedMotion ||
      event.pointerType !== "mouse" ||
      !sectionRef.current
    ) {
      return;
    }

    const bounds = sectionRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-title"
      className="institutional-cta"
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
    >
      <motion.div
        aria-hidden="true"
        className="institutional-cta__energy"
        style={prefersReducedMotion ? undefined : { x: energyX, y: energyY }}
      />
      <img
        src={devclubLogo}
        width="1024"
        height="1024"
        alt=""
        loading="lazy"
        className="institutional-cta__mark"
      />

      <Container className="institutional-cta__container">
        <div className="institutional-cta__content">
          <p className="institutional-eyebrow">Seu ponto de partida</p>
          <h2 id="cta-title">Seu próximo projeto pode começar aqui.</h2>
          <p>
            Conheça as formações do DevClub e converse com a equipe para
            encontrar o melhor ponto de partida.
          </p>

          <div className="institutional-cta__actions">
            <motion.a
              href={officialLinks.enrollment}
              target="_blank"
              rel="noopener noreferrer"
              className="institutional-cta__primary"
              style={prefersReducedMotion ? undefined : { x: buttonX, y: buttonY }}
            >
              <span>Conversar sobre matrícula</span>
              <ArrowRight aria-hidden="true" />
            </motion.a>
            <a href={officialLinks.formations} className="institutional-cta__secondary">
              <GraduationCap aria-hidden="true" />
              Ver formações
            </a>
          </div>

          <a
            href={officialLinks.studentArea}
            target="_blank"
            rel="noopener noreferrer"
            className="institutional-cta__student"
          >
            Já sou aluno
          </a>
        </div>
      </Container>
    </section>
  );
}
