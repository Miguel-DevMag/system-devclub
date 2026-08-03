import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type HeroActionProps = {
  active: boolean;
};

/**
 * Final compositional layer of the Hero. It is intentionally non-interactive:
 * a quiet horizon that settles the scene and carries the eye into the page.
 */
export function HeroAction({ active }: HeroActionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
      transition={{ delay: active && !prefersReducedMotion ? 0.35 : 0, duration: 0.9, ease: EASE }}
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-[30vh] min-h-48"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_42%_at_50%_100%,rgba(103,232,249,.11),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#05070a]/82 to-[#05070a]" />
      <motion.div
        animate={prefersReducedMotion ? { opacity: 0.55 } : { opacity: [0.3, 0.62, 0.3], scaleX: [0.96, 1, 0.96] }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 left-1/2 h-px w-[min(64vw,46rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent"
      />
    </motion.div>
  );
}
