import { useMemo, useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import logoDevClub from "@/assets/images/logo-devclub-green.png";
import { motionTokens } from "@/components/motion/motion-tokens";
import { ecosystemRelations } from "@/data/ecosystem-map";
import type { EcosystemRelation, EcosystemRelationId } from "@/types/ecosystem";

const connectionPaths: Record<EcosystemRelationId, string> = {
  people: "M500 340 C404 302 294 214 164 166",
  community: "M500 340 C372 356 254 402 142 468",
  technologies: "M500 340 C470 244 414 160 326 92",
  ai: "M500 340 C528 236 576 148 654 84",
  infrastructure: "M500 340 C624 286 734 224 842 174",
  practice: "M500 340 C474 430 430 514 366 600",
  platform: "M500 340 C548 436 612 522 706 600",
  market: "M500 340 C630 348 756 382 872 428",
};

const connectionEndpoints: Record<EcosystemRelationId, readonly [number, number]> = {
  people: [164, 166],
  community: [142, 468],
  technologies: [326, 92],
  ai: [654, 84],
  infrastructure: [842, 174],
  practice: [366, 600],
  platform: [706, 600],
  market: [872, 428],
};

const nodeGroupVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.expressive,
      ease: motionTokens.easing.emphasized,
    },
  },
};

function RelationAssets({ relation }: { relation: EcosystemRelation }) {
  const markers = relation.markers;

  if (markers?.length) {
    return (
      <span className="ecosystem-relation__markers" aria-label={markers.join(", ")}>
        {markers.map((marker, index) => (
          <span key={marker}>
            {marker}
            {index < markers.length - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className="ecosystem-relation__assets">
      {relation.assets.map((asset) => (
        <img
          key={asset.alt}
          src={asset.src}
          alt={asset.kind === "portrait" ? asset.alt : ""}
          title={asset.kind === "logo" ? asset.alt : undefined}
          className={`ecosystem-relation__asset ecosystem-relation__asset--${asset.kind}`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ))}
      {relation.assets.some((asset) => asset.kind === "logo") && (
        <span className="sr-only">
          {relation.assets.map((asset) => asset.alt).join(", ")}
        </span>
      )}
    </span>
  );
}

function RelationNode({
  relation,
  active,
  dimmed,
  onActivate,
  onDeactivate,
}: {
  relation: EcosystemRelation;
  active: boolean;
  dimmed: boolean;
  onActivate: (id: EcosystemRelationId) => void;
  onDeactivate: () => void;
}) {
  return (
    <motion.li
      variants={nodeGroupVariants}
      className={`ecosystem-relation ecosystem-relation--${relation.id}`}
      data-active={active || undefined}
      data-dimmed={dimmed || undefined}
    >
      <button
        type="button"
        className="ecosystem-relation__trigger"
        aria-pressed={active}
        onMouseEnter={() => onActivate(relation.id)}
        onMouseLeave={onDeactivate}
        onFocus={() => onActivate(relation.id)}
        onBlur={onDeactivate}
        onClick={() => (active ? onDeactivate() : onActivate(relation.id))}
      >
        <span className="ecosystem-relation__meta">
          <span>{relation.index}</span>
          <span>{relation.label}</span>
        </span>
        <strong>{relation.verb}</strong>
        <span className="ecosystem-relation__description">{relation.description}</span>
        <RelationAssets relation={relation} />
      </button>
    </motion.li>
  );
}

export function EcosystemWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<EcosystemRelationId | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, motionTokens.pointer.spring);
  const smoothY = useSpring(pointerY, motionTokens.pointer.spring);
  const mapX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const mapY = useTransform(smoothY, [-1, 1], [-3, 3]);

  const activeRelation = useMemo(
    () => ecosystemRelations.find((relation) => relation.id === activeId) ?? null,
    [activeId],
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="ecossistema"
      aria-labelledby="ecosystem-title"
      className="ecosystem-system"
    >
      <div className="ecosystem-system__atmosphere" aria-hidden="true" />

      <div className="ecosystem-system__shell">
        <motion.header
          className="ecosystem-system__header"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="ecosystem-system__eyebrow">
            <span aria-hidden="true" />
            <b>Ecossistema DevClub</b>
            <small>02 / continuidade</small>
          </div>
          <div className="ecosystem-system__heading-row">
            <h2 id="ecosystem-title">Sua carreira não se constrói sozinha.</h2>
            <p>
              Pessoas, prática e tecnologia trabalham como uma rede — cada parte
              prepara a próxima e mantém você em movimento.
            </p>
          </div>
        </motion.header>

        <div
          className="ecosystem-system__field"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          onPointerCancel={resetPointer}
        >
          <motion.div
            className="ecosystem-system__map"
            style={reducedMotion ? undefined : { x: mapX, y: mapY }}
          >
            <motion.svg
              className="ecosystem-system__connections"
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
              aria-hidden="true"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {ecosystemRelations.map((relation) => {
                const [cx, cy] = connectionEndpoints[relation.id];

                return (
                  <g
                    key={relation.id}
                    className="ecosystem-connection"
                    data-active={activeId === relation.id || undefined}
                    data-dimmed={activeId && activeId !== relation.id ? true : undefined}
                  >
                    <motion.path
                      d={connectionPaths[relation.id]}
                      variants={{
                        hidden: {
                          pathLength: reducedMotion ? 1 : 0,
                          opacity: reducedMotion ? 1 : 0,
                        },
                        visible: { pathLength: 1, opacity: 1 },
                      }}
                      transition={{
                        pathLength: {
                          duration: reducedMotion ? 0 : motionTokens.duration.cinematic,
                          delay: reducedMotion ? 0 : 0.16,
                          ease: motionTokens.easing.emphasized,
                        },
                        opacity: { duration: reducedMotion ? 0 : 0.2 },
                      }}
                    />
                    <circle cx={cx} cy={cy} r="3" />
                  </g>
                );
              })}
            </motion.svg>

            <motion.div
              className="ecosystem-core"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.duration.expressive,
                delay: reducedMotion ? 0 : 0.12,
                ease: motionTokens.easing.emphasized,
              }}
            >
              <span className="ecosystem-core__signal" aria-hidden="true" />
              <img src={logoDevClub} alt="DevClub" draggable={false} />
              <span>formação conectada</span>
              <small aria-live="polite">
                {activeRelation
                  ? `${activeRelation.label} ${activeRelation.verb}`
                  : "tudo trabalha junto"}
              </small>
            </motion.div>

            <motion.ul
              className="ecosystem-system__relations"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                staggerChildren: reducedMotion ? 0 : 0.055,
                delayChildren: reducedMotion ? 0 : 0.28,
              }}
            >
              {ecosystemRelations.map((relation) => (
                <RelationNode
                  key={relation.id}
                  relation={relation}
                  active={activeId === relation.id}
                  dimmed={Boolean(activeId && activeId !== relation.id)}
                  onActivate={setActiveId}
                  onDeactivate={() => setActiveId(null)}
                />
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <footer className="ecosystem-system__footer">
          <p>
            Logos identificam tecnologias e referências presentes na formação.
            Não representam parceria ou vínculo comercial.
          </p>
          <div aria-hidden="true">
            <span>da rede para a rotina</span>
            <i />
            <b>Plataforma</b>
          </div>
        </footer>
      </div>
    </section>
  );
}
