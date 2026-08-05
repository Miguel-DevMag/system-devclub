import { useState } from "react";
import { ArrowRight, Code2, Layers3, Workflow } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

const icons = [Code2, Layers3, Workflow] as const;

export function LearningJourneySection() {
  const [activePath, setActivePath] = useState(0);
  const reducedMotion = useReducedMotion() ?? false;
  const { language } = usePreferences();
  const content = targetedContent[language].journey;
  const active = content.paths[activePath];

  return (
    <section
      id="jornada-aprendizado"
      aria-labelledby="learning-journey-title"
      className="institutional-journey journey-refined"
    >
      <Container>
        <header className="journey-refined__intro">
          <p className="institutional-eyebrow">{content.eyebrow}</p>
          <h2 id="learning-journey-title">{content.title}</h2>
          <p>{content.description}</p>
        </header>

        <div className="journey-refined__experience">
          <div className="journey-refined__steps" role="tablist" aria-label={content.eyebrow}>
            {content.paths.map((path, index) => {
              const Icon = icons[index];
              const isActive = activePath === index;
              return (
                <button
                  key={path.index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="journey-active-panel"
                  onClick={() => setActivePath(index)}
                  onFocus={() => setActivePath(index)}
                >
                  <span>{path.index}</span>
                  <Icon aria-hidden="true" />
                  <strong>{path.title}</strong>
                  <ArrowRight aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              id="journey-active-panel"
              role="tabpanel"
              key={active.index}
              data-step={active.index}
              className="journey-refined__panel"
              initial={reducedMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -8 }}
              transition={{ duration: reducedMotion ? 0 : motionTokens.duration.responsive, ease: motionTokens.easing.standard }}
            >
              <span className="journey-refined__panel-index">{active.index} / 03</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="journey-refined__technologies">
                {active.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="journey-refined__result">
                <span>{content.resultLabel}</span>
                <strong>{active.result}</strong>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
