import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { peopleResults } from "@/data/people-results";

export function PeopleResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const primaryPerson = peopleResults.people[0];
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const lightX = useSpring(pointerX, motionTokens.pointer.spring);
  const lightY = useSpring(pointerY, motionTokens.pointer.spring);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const personFocus = useTransform(scrollYProgress, [0, 0.52, 1], [1, 0.76, 0.58]);
  const capabilityFocus = useTransform(scrollYProgress, [0, 0.38, 0.82], [0.56, 0.78, 1]);
  const capabilityX = useTransform(scrollYProgress, [0.16, 0.72], [18, 0]);
  const transmissionScale = useTransform(scrollYProgress, [0.12, 0.72], [0.04, 1]);
  const transmissionGlow = useTransform(scrollYProgress, [0.18, 0.68, 1], [0.34, 1, 0.66]);

  const moveLight = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === "touch" || !fieldRef.current) return;
    const bounds = fieldRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(relativeX * 8);
    pointerY.set(relativeY * 8);
  };

  const resetLight = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="pessoas-resultados"
      aria-labelledby="people-results-title"
      className="people-results-section"
    >
      <div className="people-results__continuity" aria-hidden="true">
        <span>conexões do campus</span>
        <i />
        <strong>ganham autoria humana</strong>
      </div>

      <div className="people-results__sticky">
        <Container className="people-results__container">
          <motion.header
            className="people-results__header"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: reducedMotion ? 0 : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
          >
            <div className="people-results__eyebrow"><span />{peopleResults.eyebrow}</div>
            <div>
              <h2 id="people-results-title">{peopleResults.title}</h2>
              <p>{peopleResults.description}</p>
            </div>
            <small>{peopleResults.disclosure}</small>
          </motion.header>

          <div
            ref={fieldRef}
            className="people-results__field"
            onPointerMove={moveLight}
            onPointerLeave={resetLight}
          >
            <motion.div
              className="people-results__pointer-light"
              style={reducedMotion ? undefined : { x: lightX, y: lightY }}
              aria-hidden="true"
            />

            <motion.article
              className="people-results__person"
              style={reducedMotion ? undefined : { opacity: personFocus }}
              aria-labelledby="people-results-person-name"
            >
              <div className="people-results__person-meta">
                <span>01 / pessoa confirmada</span>
                <i />
                <strong>{primaryPerson.role}</strong>
              </div>

              <div className="people-results__portrait" aria-hidden="true">
                <div className="people-results__name-plane">
                  <span>RODOLFO</span>
                  <span>MORI</span>
                </div>
                <div className="people-results__human-form">
                  <i />
                  <i />
                </div>
                <div className="people-results__registration-mark">DC / HUMAN LAYER</div>
              </div>

              <div className="people-results__person-copy">
                <p className="sr-only" id="people-results-person-name">{primaryPerson.name}</p>
                <p>{primaryPerson.context}</p>
              </div>
            </motion.article>

            <div className="people-results__transmission" aria-hidden="true">
              <motion.i
                style={reducedMotion ? undefined : { scaleY: transmissionScale, opacity: transmissionGlow }}
              />
              <span>experiência</span>
              <b />
              <span>prática</span>
              <b />
              <span>capacidade</span>
            </div>

            <motion.article
              className="people-results__result"
              style={reducedMotion ? undefined : { opacity: capabilityFocus, x: capabilityX }}
              aria-labelledby="people-results-capability-title"
            >
              <header>
                <span>{peopleResults.result.eyebrow}</span>
                <h3 id="people-results-capability-title">{peopleResults.result.title}</h3>
                <p>{peopleResults.result.description}</p>
              </header>

              <ol className="people-results__capabilities">
                {peopleResults.capabilities.map((capability) => (
                  <li key={capability.index}>
                    <span>{capability.index}</span>
                    <div>
                      <p><strong>{capability.action}</strong> {capability.title}</p>
                      <small>{capability.description}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.article>
          </div>

          <div className="people-results__exit" aria-hidden="true">
            <span>capacidade construída</span>
            <i />
            <strong>busca reconhecimento</strong>
          </div>
        </Container>
      </div>
    </section>
  );
}
