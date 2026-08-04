import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";

import { motionTokens } from "@/components/motion/motion-tokens";
import { devclubOverview, type OverviewPillar } from "@/data/devclub-overview";

interface GrowthArchitectureProps {
  progress: MotionValue<number>;
}

interface GrowthPillarProps {
  pillar: OverviewPillar;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

function GrowthPillar({ pillar, progress, reducedMotion }: GrowthPillarProps) {
  const opacity = useTransform(
    progress,
    [pillar.activation[0], pillar.activation[1]],
    [0.68, 1],
  );
  const y = useTransform(
    progress,
    [pillar.activation[0], pillar.activation[1]],
    [motionTokens.overview.layerDistance, 0],
  );
  const lineScale = useTransform(
    progress,
    [pillar.activation[0], pillar.activation[1]],
    [0.18, 1],
  );

  return (
    <motion.article
      style={reducedMotion ? undefined : { opacity, y }}
      className={`overview-pillar ${pillar.position}`}
    >
      <motion.span
        aria-hidden="true"
        style={reducedMotion ? undefined : { scaleX: lineScale }}
        className="overview-pillar__beam"
      />
      <div className="overview-pillar__meta">
        <span>{pillar.index}</span>
        <span>{pillar.stage === "foundation" ? "base" : pillar.stage === "support" ? "rede" : "avanço"}</span>
      </div>
      <h3>{pillar.title}</h3>
      <p>{pillar.description}</p>
    </motion.article>
  );
}

export function GrowthArchitecture({ progress }: GrowthArchitectureProps) {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const pathLength = useTransform(progress, [0.03, 0.94], [0.08, 1]);
  const signalOpacity = useTransform(progress, [0, 0.12, 0.94], [0.42, 1, 1]);

  return (
    <div className="overview-architecture">
      <div className="overview-architecture__surface" aria-hidden="true" />

      <div className="overview-architecture__input" aria-hidden="true">
        <span>output signal</span>
        <i />
      </div>

      <svg
        aria-hidden="true"
        className="overview-architecture__schematic"
        viewBox="0 0 760 620"
        preserveAspectRatio="none"
      >
        <path className="overview-architecture__rail" d="M380 610 L380 510 L128 510 M380 510 L635 510 M380 510 L380 338 L94 338 M380 338 L380 300 M380 338 L674 338 M380 300 L225 126 M380 300 L548 126 M380 126 L380 20" />
        <motion.path
          style={reducedMotion ? undefined : { pathLength, opacity: signalOpacity }}
          initial={reducedMotion ? false : { pathLength: 0.08 }}
          className="overview-architecture__energy"
          d="M380 610 L380 510 L128 510 M380 510 L635 510 M380 510 L380 338 L94 338 M380 338 L380 300 M380 338 L674 338 M380 300 L225 126 M380 300 L548 126 M380 126 L380 20"
        />
      </svg>

      <div className="overview-architecture__spine" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="overview-architecture__pillars">
        {devclubOverview.pillars.map((pillar) => (
          <GrowthPillar
            key={pillar.id}
            pillar={pillar}
            progress={progress}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      <div className="overview-architecture__output" aria-hidden="true">
        <i />
        <span>direção para a jornada</span>
      </div>
    </div>
  );
}
