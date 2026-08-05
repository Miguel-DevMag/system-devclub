import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import certificateIcon from "@/assets/images/icon-certificate.svg";
import checkIcon from "@/assets/images/icon-checkmark.svg";
import diplomaIcon from "@/assets/images/icon-diploma.svg";
import toolsIcon from "@/assets/images/icon-tools.svg";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";

const milestones = [
  {
    id: "aprender",
    label: "Aprender",
    result: "Repertório técnico",
    description: "Fundamentos e tecnologias organizados em uma trilha compreensível.",
    icon: certificateIcon,
  },
  {
    id: "praticar",
    label: "Praticar",
    result: "Autonomia",
    description: "Critério para testar caminhos, interpretar desafios e seguir aprendendo.",
    icon: checkIcon,
  },
  {
    id: "construir",
    label: "Construir",
    result: "Projeto publicado",
    description: "Uma entrega concreta torna o conhecimento visível e compartilhável.",
    icon: toolsIcon,
  },
  {
    id: "compartilhar",
    label: "Compartilhar",
    result: "Portfólio",
    description: "Projetos reunidos comunicam processo, decisões e evolução técnica.",
    icon: diplomaIcon,
  },
] as const;

export function RecognitionSection() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = milestones[activeMilestone];

  return (
    <section
      id="reconhecimento"
      aria-labelledby="recognition-title"
      className="institutional-recognition"
    >
      <div className="recognition-impact" aria-hidden="true">IMPACTO</div>
      <Container>
        <header className="institutional-heading institutional-heading--recognition">
          <p className="institutional-eyebrow">Reconhecimento</p>
          <h2 id="recognition-title">
            O conhecimento ganha valor quando vira construção.
          </h2>
          <p>
            Aprender é o começo. Prática, projetos e repertório tornam a evolução
            concreta sem prometer um resultado profissional automático.
          </p>
        </header>

        <div className="recognition-route">
          <div className="recognition-route__line" aria-hidden="true">
            <motion.span
              animate={{ scaleX: (activeMilestone + 1) / milestones.length }}
              transition={{
                duration: prefersReducedMotion ? 0 : motionTokens.duration.responsive,
                ease: motionTokens.easing.emphasized,
              }}
            />
          </div>

          <ol>
            {milestones.map((milestone, index) => (
              <li key={milestone.id} data-active={activeMilestone === index}>
                <button
                  type="button"
                  aria-pressed={activeMilestone === index}
                  onClick={() => setActiveMilestone(index)}
                  onFocus={() => setActiveMilestone(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setActiveMilestone(index);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{milestone.label}</strong>
                </button>
              </li>
            ))}
          </ol>

          <motion.article
            key={active.id}
            className="recognition-outcome"
            initial={prefersReducedMotion ? false : { opacity: 0.72, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : motionTokens.duration.responsive,
              ease: motionTokens.easing.emphasized,
            }}
          >
            <img src={active.icon} width="48" height="48" alt="" />
            <div>
              <span>Possível resultado da formação</span>
              <h3>{active.result}</h3>
              <p>{active.description}</p>
            </div>
          </motion.article>
        </div>

        <div className="recognition-to-faq" aria-hidden="true">
          <span />
          <small>clareza para decidir</small>
        </div>
      </Container>
    </section>
  );
}
