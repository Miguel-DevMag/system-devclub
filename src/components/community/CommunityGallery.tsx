import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { motionTokens } from "@/components/motion/motion-tokens";
import { communityExperience } from "@/data/community-experience";
import type { CommunityScene } from "@/data/community-experience";

const sceneClassNames: Record<CommunityScene["position"], string> = {
  main: "col-span-2 h-[clamp(21rem,110vw,32rem)] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[58%]",
  upper: "h-48 lg:absolute lg:right-0 lg:top-0 lg:h-[44%] lg:w-[34%]",
  middle: "h-52 lg:absolute lg:bottom-[5%] lg:left-[51%] lg:h-[39%] lg:w-[27%]",
  lower: "hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:h-[34%] lg:w-[20%]",
};

const sceneEntry = [
  { delay: 0, x: 0, y: 0, duration: 0 },
  { delay: 0.15, x: 18, y: -10, duration: motionTokens.duration.responsive },
  { delay: 0.3, x: -16, y: 12, duration: motionTokens.duration.responsive },
  { delay: 0.45, x: 14, y: 12, duration: motionTokens.duration.responsive },
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function CommunityGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeScene, setActiveScene] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const depthX = useSpring(pointerX, motionTokens.pointer.spring);
  const depthY = useSpring(pointerY, motionTokens.pointer.spring);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch" || !galleryRef.current) return;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    sceneRefs.current.forEach((scene, index) => {
      if (!scene || scene.offsetParent === null) return;
      const bounds = scene.getBoundingClientRect();
      const distance = Math.hypot(
        event.clientX - (bounds.left + bounds.width / 2),
        event.clientY - (bounds.top + bounds.height / 2),
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const bounds = galleryRef.current.getBoundingClientRect();
    pointerX.set(clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 10, -5, 5));
    pointerY.set(clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 10, -5, 5));
    setActiveScene((current) => (current === nearestIndex ? current : nearestIndex));
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
    setActiveScene(null);
  }

  return (
    <div
      ref={galleryRef}
      className="relative mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:block lg:h-[min(47vw,42rem)]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {communityExperience.scenes.map((scene, index) => {
        const entry = sceneEntry[index];
        const active = activeScene === index;
        const receded = activeScene !== null && !active;

        return (
          <motion.figure
            ref={(node) => {
              sceneRefs.current[index] = node;
            }}
            key={scene.id}
            className={`group relative m-0 overflow-hidden bg-neutral-900 ${sceneClassNames[scene.position]}`}
            initial={
              reducedMotion || index === 0
                ? false
                : { opacity: 0, x: entry.x, y: entry.y }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-6%" }}
            transition={{
              duration: reducedMotion ? 0 : entry.duration,
              delay: reducedMotion ? 0 : entry.delay,
              ease: motionTokens.easing.emphasized,
            }}

          >
            <motion.div
              className="absolute -inset-2"
              style={reducedMotion || !active ? undefined : { x: depthX, y: depthY }}
              animate={{
                filter: reducedMotion
                  ? "brightness(0.94) contrast(1) saturate(0.9)"
                  : active
                    ? "brightness(1.08) contrast(1.06) saturate(1.04)"
                    : receded
                      ? "brightness(0.7) contrast(0.9) saturate(0.72)"
                      : "brightness(0.94) contrast(1) saturate(0.9)",
              }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.duration.responsive,
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
                className={`h-full w-full object-cover ${
                  scene.position === "main" ? "object-[center_22%]" : "object-center"
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(7,10,13,0.18)_58%,rgba(7,10,13,0.94)_100%)]"
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_54%_32%,rgba(122,247,214,0.18),transparent_46%)]"
                initial={reducedMotion ? false : { opacity: 0.18 }}
                whileInView={{ opacity: 0.62 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : motionTokens.duration.responsive,
                  delay: reducedMotion ? 0 : 0.65,
                  ease: motionTokens.easing.emphasized,
                }}
              />
            </motion.div>

            <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5 lg:p-6">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
                {scene.stage}
              </span>
              <p className={`mt-1 font-semibold leading-tight text-white ${
                index === 0 ? "text-xl md:text-2xl" : "text-sm md:text-base"
              }`}>
                {scene.statement}
              </p>
              <motion.p
                aria-hidden="true"
                className="mt-2 hidden max-w-sm text-xs leading-relaxed text-white/68 lg:block"
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 4 }}
                transition={{ duration: reducedMotion ? 0 : motionTokens.duration.responsive, ease: motionTokens.easing.standard }}
              >
                {scene.context}
              </motion.p>
            </figcaption>
          </motion.figure>
        );
      })}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -bottom-14 hidden h-36 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_66%)] blur-2xl lg:block"
      />
    </div>
  );
}
