import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import communityMain from "@/assets/images/testimonial-1.jpg";
import communityExchange from "@/assets/images/testimonial-2.jpg";
import communityGuidance from "@/assets/images/testimonial-3.jpg";
import fernandaPortrait from "@/assets/images/fernanda.jpeg";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";

const scenes = [
  {
    id: "aprender",
    image: communityMain,
    width: 3744,
    height: 5616,
    alt: "Registro visual de uma pessoa da comunidade DevClub",
    label: "Aprender",
    context: "Conteúdo encontra prática e ganha direção.",
    position: "main",
  },
  {
    id: "trocar",
    image: communityExchange,
    width: 3648,
    height: 3648,
    alt: "Registro visual compartilhado pela comunidade DevClub",
    label: "Trocar",
    context: "Experiências diferentes ampliam o repertório.",
    position: "upper",
  },
  {
    id: "orientacao",
    image: fernandaPortrait,
    width: 480,
    height: 480,
    alt: "Fernanda",
    label: "Receber orientação",
    context: "Pessoas reais ajudam a encontrar o próximo passo.",
    position: "middle",
  },
  {
    id: "construir",
    image: communityGuidance,
    width: 3974,
    height: 5000,
    alt: "Registro visual de uma trajetória compartilhada no DevClub",
    label: "Construir",
    context: "Projetos transformam conhecimento em algo observável.",
    position: "lower",
  },
] as const;

export function CommunityExperienceSection() {
  const [activeScene, setActiveScene] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="comunidade"
      aria-labelledby="community-experience-title"
      className="institutional-community"
    >
      <Container>
        <header className="institutional-heading institutional-heading--community">
          <p className="institutional-eyebrow">Comunidade DevClub</p>
          <h2 id="community-experience-title">Você não precisa evoluir sozinho.</h2>
          <p>
            Pessoas, professores e projetos conectam experiências em uma jornada
            de aprendizado compartilhada.
          </p>
        </header>

        <div
          className="community-collage"
          onPointerLeave={() => setActiveScene(null)}
        >
          {scenes.map((scene, index) => {
            const isActive = activeScene === index;
            const isReceded = activeScene !== null && !isActive;

            return (
              <motion.figure
                key={scene.id}
                data-position={scene.position}
                data-active={isActive}
                className="community-collage__scene"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setActiveScene(index);
                }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: isActive ? -5 : 0, opacity: isReceded ? 0.82 : 1 }
                }
                transition={{
                  duration: motionTokens.duration.responsive,
                  ease: motionTokens.easing.standard,
                }}
              >
                <img
                  src={scene.image}
                  width={scene.width}
                  height={scene.height}
                  alt={scene.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{scene.label}</strong>
                  <p>{scene.context}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
