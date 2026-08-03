import { ArrowRight, Globe2 } from "lucide-react";
import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { HeroProof } from "@/components/hero/HeroProof";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.055, duration: 0.72, ease: EASE },
  }),
};

/**
 * Editorial content revealed after CinematicIntro completes.
 * Proof, metrics and downstream conversion remain outside this component.
 */
export function HeroReveal() {
  const prefersReducedMotion = useReducedMotion();
  const headlineWords = hero.title.split(" ");

  return (
    <div className="relative top-20 mt-16 w-full max-w-3xl self-start pb-2 sm:top-0 sm:mt-0 sm:self-auto sm:pb-4 lg:max-w-4xl">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scaleX: 0.35 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ originX: 0 }}
        className="mb-5 h-px w-14 bg-gradient-to-r from-cyan-200 via-cyan-100/60 to-transparent"
        aria-hidden="true"
      />

      <h1 className="max-w-[16ch] text-balance text-[clamp(2.75rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
        {headlineWords.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <motion.span
              custom={index}
              variants={wordVariants}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              className={cn(
                "inline-block",
                word.replace(/[.]/g, "") === "aprendizado"
                  ? "bg-gradient-to-r from-cyan-100 via-white to-violet-200 bg-clip-text text-transparent"
                  : undefined
              )}
            >
              {word}
            </motion.span>
            {index < headlineWords.length - 1 ? " " : null}
          </Fragment>
        ))}
      </h1>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
        className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-white/70 sm:mt-7 sm:text-lg sm:leading-8"
      >
        {hero.description}
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.56, duration: 0.65, ease: EASE }}
        className="mt-7 flex flex-wrap gap-3 sm:mt-8"
      >
        <a
          href={hero.primaryCta.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "group h-auto rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-[0_12px_38px_-12px_rgba(165,243,252,.72)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_-12px_rgba(165,243,252,.9)] active:translate-y-0 sm:px-6 sm:py-3.5"
          )}
        >
          {hero.primaryCta.label}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href={hero.secondaryCta.href}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-auto rounded-xl border-white/20 bg-[#071018]/52 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.1] sm:px-6 sm:py-3.5"
          )}
        >
          <Globe2 />
          {hero.secondaryCta.label}
        </a>
      </motion.div>

      <HeroProof />
    </div>
  );
}
