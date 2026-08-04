import { AnimatePresence, motion, type MotionValue } from "motion/react";
import type { CSSProperties } from "react";

import { motionTokens } from "@/components/motion/motion-tokens";
import {
  learningJourney,
  type LearningStage,
} from "@/data/learning-journey";

interface LearningJourneyProps {
  activeStage: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

function ProjectArtifact({
  stage,
  stageIndex,
  compact = false,
}: {
  stage: LearningStage;
  stageIndex: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`learning-project ${compact ? "learning-project--compact" : ""}`}
      data-kind={stage.project.kind}
      style={{ "--journey-accent": stage.accent } as CSSProperties}
      aria-hidden="true"
    >
      <div className="learning-project__meta">
        <span>capacidade / {stage.index}</span>
        <span>protótipo visual</span>
      </div>

      <div className="learning-project__canvas">
        {Array.from({ length: stageIndex + 2 }, (_, layerIndex) => (
          <span
            key={layerIndex}
            className="learning-project__layer"
            style={
              {
                "--layer-index": layerIndex,
                "--layer-count": stageIndex + 2,
              } as CSSProperties
            }
          />
        ))}
        <div className="learning-project__product">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="learning-project__channel" />
      </div>

      <div className="learning-project__caption">
        <strong>{stage.project.title}</strong>
        <span>{stage.project.description}</span>
      </div>
    </div>
  );
}

function AccessibleJourney() {
  return (
    <ol className="sr-only">
      {learningJourney.stages.map((stage) => (
        <li key={stage.id}>
          <h3>{stage.title}</h3>
          <p>{stage.objective}</p>
          <p>
            Tecnologias: {stage.technologies.map((item) => item.name).join(", ")}.
          </p>
          <p>
            Capacidade desenvolvida: {stage.project.title}. {stage.project.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

function DesktopJourney({
  activeStage,
  progress,
  reducedMotion,
}: LearningJourneyProps) {
  const stage = learningJourney.stages[activeStage];

  return (
    <div className="learning-journey__desktop" aria-hidden="true">
      <div className="learning-journey__rail" aria-hidden="true">
        <motion.span
          style={reducedMotion ? undefined : { scaleX: progress }}
          className="learning-journey__rail-progress"
        />
      </div>

      <div className="learning-journey__desktop-grid">
        <div className="learning-journey__index">
          <span className="learning-journey__current">
            {stage.index}<small>/ 05</small>
          </span>
          <ol>
            {learningJourney.stages.map((item, index) => (
              <li key={item.id} data-active={index === activeStage}>
                <span>{item.index}</span>
                {item.title}
              </li>
            ))}
          </ol>
        </div>

        <div className="learning-journey__active-stage">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.article
              key={stage.id}
              initial={reducedMotion ? false : { y: 24 }}
              animate={{ y: 0 }}
              exit={reducedMotion ? undefined : { y: -24 }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.journey.stageDuration,
                ease: motionTokens.easing.flow,
              }}
              style={{ "--journey-accent": stage.accent } as CSSProperties}
            >
              <div className="learning-journey__phase">
                <span>{stage.phase}</span>
                estágio {stage.index}
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.objective}</p>

              <div className="learning-journey__technologies">
                {stage.technologies.map((technology) => (
                  <span key={technology.name}>
                    <strong>{technology.name}</strong>
                    <small>{technology.role}</small>
                  </span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>

          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={stage.project.kind}
              initial={reducedMotion ? false : { x: 18 }}
              animate={{ x: 0 }}
              exit={reducedMotion ? undefined : { x: -18 }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.journey.stageDuration,
                ease: motionTokens.easing.flow,
              }}
            >
              <ProjectArtifact stage={stage} stageIndex={activeStage} />
            </motion.div>
          </AnimatePresence>
        </div>

        <aside
          className="learning-journey__outcome"
          style={{ "--journey-accent": stage.accent } as CSSProperties}
        >
          <span>próxima aquisição</span>
          <p>{stage.continuity}</p>

          <div className="learning-journey__extensions">
            <span>Extensões da jornada</span>
            {learningJourney.extensions.map((extension) => (
              <div key={extension.title}>
                <strong>{extension.title}</strong>
                <small>{extension.description}</small>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function MobileJourney() {
  return (
    <div className="learning-journey__mobile">
      <ol className="learning-journey__mobile-track">
        {learningJourney.stages.map((stage, index) => (
          <li
            key={stage.id}
            style={{ "--journey-accent": stage.accent } as CSSProperties}
          >
            <article>
              <div className="learning-journey__mobile-meta">
                <span>{stage.index}</span>
                <span>{stage.phase}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.objective}</p>

              <div className="learning-journey__mobile-tech">
                {stage.technologies.map((technology) => (
                  <span key={technology.name}>{technology.name}</span>
                ))}
              </div>

              <ProjectArtifact stage={stage} stageIndex={index} compact />

              <p className="learning-journey__mobile-next">
                <span>continuidade</span>
                {stage.continuity}
              </p>
            </article>
          </li>
        ))}
      </ol>

      <div className="learning-journey__mobile-extensions">
        <span>Rotas que ampliam o percurso</span>
        {learningJourney.extensions.map((extension) => (
          <div key={extension.title}>
            <strong>{extension.title}</strong>
            <p>{extension.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LearningJourney(props: LearningJourneyProps) {
  return (
    <>
      <AccessibleJourney />
      <DesktopJourney {...props} />
      <MobileJourney />
    </>
  );
}
