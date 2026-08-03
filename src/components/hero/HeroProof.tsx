import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * A compact editorial proof point for the Hero.
 * It intentionally avoids the visual weight of a card or a metric block.
 */
export function HeroProof() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.6, ease: EASE }}
      className="mt-8 flex max-w-md items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 sm:mt-9 sm:text-xs"
    >
      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-gradient-to-r from-cyan-200 to-violet-200/35"
      />
      <span>Formação, prática e carreira em um só sistema.</span>
    </motion.p>
  );
}
