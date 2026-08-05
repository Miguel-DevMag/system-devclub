import { useState } from "react";
import { ArrowRight, Code2, Layers3, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import n8nIcon from "@/assets/images/si-n8n.svg";
import claudeIcon from "@/assets/images/si-claude.svg";
import geminiIcon from "@/assets/images/si-googlegemini.svg";
import openaiIcon from "@/assets/images/si-openai.svg";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";

const paths = [
  {
    id: "fundamentos",
    index: "01",
    title: "Fundamentos",
    description:
      "A base para compreender a web, organizar o raciocínio e publicar as primeiras experiências responsivas.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    result: "Uma interface funcional",
    icon: Code2,
    accent: "#67e8f9",
  },
  {
    id: "fullstack",
    index: "02",
    title: "Fullstack JavaScript",
    description:
      "Front-end e back-end conectados para desenvolver produtos completos, dos componentes ao deploy.",
    technologies: ["React", "TypeScript", "Node.js", "Bancos de dados", "Deploy"],
    result: "Um produto completo",
    icon: Layers3,
    accent: "#6ee7b7",
  },
  {
    id: "ia-automacoes",
    index: "03",
    title: "Inteligência Artificial e Automações",
    description:
      "Ferramentas e fluxos aplicados a tarefas reais para ampliar repertório, integração e produtividade.",
    technologies: ["n8n", "ChatGPT", "Claude", "Gemini", "OpenAI"],
    result: "Um fluxo inteligente",
    icon: Workflow,
    accent: "#c4b5fd",
  },
] as const;

const aiIcons = [
  { src: n8nIcon, alt: "n8n" },
  { src: claudeIcon, alt: "Claude" },
  { src: geminiIcon, alt: "Gemini" },
  { src: openaiIcon, alt: "OpenAI" },
];

export function LearningJourneySection() {
  const [activePath, setActivePath] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = paths[activePath];

  return (
    <section
      id="jornada-aprendizado"
      aria-labelledby="learning-journey-title"
      className="institutional-journey"
    >
      <Container>
        <header className="institutional-heading institutional-heading--journey">
          <p className="institutional-eyebrow">Formações DevClub</p>
          <h2 id="learning-journey-title">
            Do primeiro código à construção de produtos completos.
          </h2>
          <p>
            Três caminhos organizam a evolução do básico ao avançado, com prática,
            projetos e repertório para continuar construindo.
          </p>
        </header>

        <div
          className="journey-paths"
          style={{ "--active-accent": active.accent } as React.CSSProperties}
        >
          <div className="journey-paths__rail" aria-hidden="true">
            <motion.span
              animate={{ x: `${activePath * 100}%` }}
              transition={{
                duration: prefersReducedMotion ? 0 : motionTokens.duration.responsive,
                ease: motionTokens.easing.emphasized,
              }}
            />
          </div>

          <div className="journey-paths__list" role="list">
            {paths.map((path, index) => {
              const Icon = path.icon;
              const isActive = activePath === index;

              return (
                <motion.article
                  key={path.id}
                  role="listitem"
                  data-active={isActive}
                  className="journey-path"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: isActive ? 1 : 0.78, y: isActive ? -4 : 0 }
                  }
                  transition={{
                    duration: motionTokens.duration.responsive,
                    ease: motionTokens.easing.standard,
                  }}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActivePath(index)}
                    onFocus={() => setActivePath(index)}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") setActivePath(index);
                    }}
                  >
                    <span className="journey-path__index">{path.index}</span>
                    <span className="journey-path__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <strong>{path.title}</strong>
                  </button>

                  <p className="journey-path__description">{path.description}</p>

                  <div className="journey-path__technologies" aria-label="Tecnologias">
                    {path.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {path.id === "ia-automacoes" && (
                    <div className="journey-path__ai-icons" aria-label="Ferramentas de inteligência artificial">
                      {aiIcons.map((icon) => (
                        <img key={icon.alt} src={icon.src} alt={icon.alt} width="24" height="24" loading="lazy" />
                      ))}
                    </div>
                  )}

                  <div className="journey-path__result">
                    <span>Resultado da etapa</span>
                    <strong>{path.result}</strong>
                    <ArrowRight aria-hidden="true" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
