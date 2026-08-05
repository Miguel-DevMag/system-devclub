import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import arnobioPortrait from "@/assets/images/Arnobio.jpg";
import guilhermePortrait from "@/assets/images/guilherme-soares.jpg";
import lucasPortrait from "@/assets/images/lucas.webp";
import robsonPortrait from "@/assets/images/robson.jpeg";
import rodolfoPortrait from "@/assets/images/rodolfo-2.png";
import rodrigoPortrait from "@/assets/images/rodrigo.jpeg";
import saraPortrait from "@/assets/images/sara.jpeg";
import tiagoPortrait from "@/assets/images/tiago.jpeg";
import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";

const featuredPeople = [
  {
    id: "rodolfo",
    name: "Rodolfo Mori",
    role: "Fundador do DevClub",
    image: rodolfoPortrait,
    width: 1920,
    height: 2880,
    position: "founder",
  },
  {
    id: "guilherme",
    name: "Guilherme",
    image: guilhermePortrait,
    width: 480,
    height: 480,
    position: "upper",
  },
  {
    id: "sara",
    name: "Sara",
    image: saraPortrait,
    width: 480,
    height: 480,
    position: "lower",
  },
] as const;

const editorialBand = [
  { name: "Lucas", image: lucasPortrait },
  { name: "Arnobio", image: arnobioPortrait },
  { name: "Robson", image: robsonPortrait },
  { name: "Rodrigo", image: rodrigoPortrait },
  { name: "Tiago", image: tiagoPortrait },
] as const;

export function PeopleResultsSection() {
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pessoas-resultados"
      aria-labelledby="people-results-title"
      className="institutional-people"
    >
      <Container>
        <header className="institutional-heading institutional-heading--people">
          <p className="institutional-eyebrow">Aprenda com quem vive tecnologia</p>
          <h2 id="people-results-title">
            Experiência prática para orientar cada etapa.
          </h2>
          <p>
            Professores reais aproximam repertório técnico, prática e direção ao
            longo da jornada.
          </p>
        </header>

        <div
          className="people-portraits"
          onPointerLeave={() => setActivePerson(null)}
        >
          {featuredPeople.map((person) => {
            const active = activePerson === person.id;
            return (
              <motion.figure
                key={person.id}
                data-position={person.position}
                data-active={active}
                className="people-portraits__figure"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setActivePerson(person.id);
                }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { x: active ? 3 : 0, y: active ? -4 : 0 }
                }
                transition={{
                  duration: motionTokens.duration.responsive,
                  ease: motionTokens.easing.standard,
                }}
              >
                <img
                  src={person.image}
                  width={person.width}
                  height={person.height}
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <strong>{person.name}</strong>
                  {"role" in person && <span>{person.role}</span>}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        <div className="people-band" role="list" aria-label="Professores DevClub">
          {editorialBand.map((person) => (
            <figure key={person.name} role="listitem">
              <img
                src={person.image}
                width="480"
                height="480"
                alt={person.name}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{person.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
