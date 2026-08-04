import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { communityExperience } from "@/data/community-experience";

function CampusPresence({ position }: { position: "near" | "middle" | "far" }) {
  return (
    <span className="community-campus__presence" data-position={position}>
      <i />
      <i />
      <b />
    </span>
  );
}

function CampusWorld({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const cameraY = useTransform(progress, [0, 1], [14, -18]);
  const cameraScale = useTransform(progress, [0, 0.38, 0.72, 1], [0.97, 1, 1.035, 1.065]);
  const convergence = useTransform(progress, [0.48, 0.92], [0.18, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="community-campus__world"
      style={{ y: cameraY, scale: cameraScale }}
    >
      <div className="community-campus__ceiling">
        <i /><i /><i /><i />
      </div>
      <div className="community-campus__depth community-campus__depth--far" />
      <div className="community-campus__depth community-campus__depth--middle" />
      <div className="community-campus__depth community-campus__depth--near" />

      <div className="community-campus__study-plane">
        <span /><span /><span />
        <CampusPresence position="far" />
        <CampusPresence position="middle" />
      </div>

      <div className="community-campus__guidance-plane">
        <span>contexto</span>
        <i /><i /><i />
        <CampusPresence position="middle" />
      </div>

      <div className="community-campus__project-plane">
        <div><i /><i /><i /></div>
        <div><i /><i /></div>
        <CampusPresence position="near" />
      </div>

      <svg className="community-campus__connections" viewBox="0 0 1000 520" preserveAspectRatio="none">
        <motion.path d="M 40 395 C 220 350, 245 180, 460 245 S 690 410, 950 210" style={{ pathLength: convergence }} />
        <motion.path d="M 118 118 C 300 170, 330 335, 510 278 S 730 118, 970 310" style={{ pathLength: convergence }} />
        <motion.path d="M 210 460 C 350 400, 500 400, 615 292 S 790 205, 1000 205" style={{ pathLength: convergence }} />
      </svg>

      <div className="community-campus__shared-light" />
      <div className="community-campus__exit-line"><i /><i /><i /></div>
    </motion.div>
  );
}

function ZoneNarrative({ activeZone }: { activeZone: number }) {
  return (
    <div className="community-campus__narrative" aria-live="polite">
      {communityExperience.zones.map((zone, index) => (
        <article
          key={zone.id}
          className="community-campus__zone-copy"
          data-active={index === activeZone}
          style={{ "--community-accent": zone.accent } as React.CSSProperties}
        >
          <div className="community-campus__zone-meta">
            <span>{zone.index}</span>
            <i />
            <span>{zone.eyebrow}</span>
          </div>
          <h3>{zone.title}</h3>
          <p>{zone.description}</p>
          <small>{zone.outcome}</small>
        </article>
      ))}
    </div>
  );
}

function MobileCampus() {
  return (
    <ol className="community-campus-mobile">
      {communityExperience.zones.map((zone, index) => (
        <li key={zone.id} style={{ "--community-accent": zone.accent } as React.CSSProperties}>
          <div className="community-campus-mobile__plane" aria-hidden="true">
            <span /><span /><span />
            <i /><i />
          </div>
          <article>
            <div><span>{zone.index}</span><small>{zone.eyebrow}</small></div>
            <h3>{zone.title}</h3>
            <p>{zone.description}</p>
            <strong>{zone.outcome}</strong>
          </article>
          {index < communityExperience.zones.length - 1 && <i className="community-campus-mobile__continuity" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function CommunityCampus() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeZone, setActiveZone] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.45 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reducedMotion) return;
    const nextZone = Math.min(
      communityExperience.zones.length - 1,
      Math.floor(latest * communityExperience.zones.length),
    );
    setActiveZone((current) => (current === nextZone ? current : nextZone));
  });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div ref={sectionRef} className="community-campus">
      <div
        className="community-campus__sticky"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div className="community-campus__stage" style={reducedMotion ? undefined : { x, y }}>
          <CampusWorld progress={scrollYProgress} />
          <ZoneNarrative activeZone={activeZone} />
          <div className="community-campus__rail" aria-hidden="true">
            {communityExperience.zones.map((zone) => (
              <span key={zone.id}>{zone.index}</span>
            ))}
          </div>
        </motion.div>
      </div>
      <MobileCampus />
    </div>
  );
}
