import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import portalClosed from "@/assets/hero/portal-closed.png";
import portalOpening from "@/assets/hero/portal-opening.png";
import portalOpening2 from "@/assets/hero/portal-opening-2.png";
import portalOpen from "@/assets/hero/portal-open.png";
import watermarkSubtle from "@/assets/hero/logo-watermark-subtle.png";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";
const EASE = [0.16, 1, 0.3, 1] as const;
const OPENING_DURATION = 1_450;
type PortalStage = "closed" | "opening-one" | "opening-two" | "open";
const portalFrames: Record<PortalStage, string> = {
  closed: portalClosed,
  "opening-one": portalOpening,
  "opening-two": portalOpening2,
  open: portalOpen,
};
function PortalScene({ stage, revealed }: { stage: PortalStage; revealed: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: revealed ? 0.2 : 1, scale: revealed ? 1.04 : 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden lg:left-[43%] lg:right-[-18%]"
    >
      {Object.entries(portalFrames).map(([name, src]) => (
        <motion.img
          key={name}
          src={src}
          alt=""
          draggable="false"
          animate={{ opacity: name === stage ? 1 : 0, scale: name === stage ? 1 : 1.025 }}
          transition={{ duration: name === stage ? 0.58 : 0.36, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,10,.76),rgba(3,6,10,.22)_54%,rgba(3,6,10,.42))] lg:bg-[linear-gradient(90deg,rgba(3,6,10,.15),rgba(3,6,10,.06)_55%,rgba(3,6,10,.56))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,6,10,.7),transparent_44%,rgba(3,6,10,.28))]" />
    </motion.div>
  );
}
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<PortalStage>("closed");
  const [revealed, setRevealed] = useState(false);
  const startOpening = useCallback(() => {
    if (hasStartedRef.current) return;
hasStartedRef.current = true;

if (prefersReducedMotion) {
  setStage("open");
  setRevealed(true);
  return;
}

setStage("opening-one");
  }, [prefersReducedMotion]);
  useEffect(() => {
    if (stage !== "opening-one" || prefersReducedMotion) return;
const secondFrame = window.setTimeout(() => setStage("opening-two"), 430);
const openFrame = window.setTimeout(() => setStage("open"), 920);
const revealContent = window.setTimeout(() => setRevealed(true), OPENING_DURATION);

return () => {
  window.clearTimeout(secondFrame);
  window.clearTimeout(openFrame);
  window.clearTimeout(revealContent);
};
  }, [prefersReducedMotion, stage]);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
const handleScroll = () => {
  const bounds = section.getBoundingClientRect();
  if (window.scrollY > 0 && bounds.bottom > window.innerHeight * 0.4) startOpening();
};

window.addEventListener("scroll", handleScroll, { passive: true });
return () => window.removeEventListener("scroll", handleScroll);
  }, [startOpening]);
  return (
    <section
      id="hero"
      ref={sectionRef}
      onWheel={startOpening}
      onTouchMove={startOpening}
      className="relative h-[145svh] min-h-[760px] overflow-clip bg-[#030609]"
    >
      <div className="sticky top-0 h-svh min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,#0d2029_0%,#05080b_42%,#030609_82%)]" />
    <motion.img
      src={watermarkSubtle}
      alt=""
      aria-hidden="true"
      animate={{ opacity: revealed ? 0.055 : 0.085, scale: revealed ? 1.04 : 1 }}
      transition={{ duration: 1.1, ease: EASE }}
      className="pointer-events-none absolute -right-[32%] top-1/2 z-0 w-[min(112vw,68rem)] -translate-y-1/2 sm:-right-[15%] lg:right-[2%]"
    />

    <motion.div
      aria-hidden="true"
      animate={{ opacity: revealed ? 0.34 : 0.12, scale: revealed ? 1.12 : 0.94 }}
      transition={{ duration: 1.2, ease: EASE }}
      className="pointer-events-none absolute left-[68%] top-[52%] z-0 h-[44vmax] w-[44vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[120px]"
    />

    <PortalScene stage={stage} revealed={revealed} />

    <motion.div
      aria-hidden="true"
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 14 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[30vh] min-h-48 bg-[radial-gradient(ellipse_72%_42%_at_50%_100%,rgba(103,232,249,.11),transparent_70%)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#030609]/75 to-[#030609]" />
      <div className="absolute bottom-9 left-1/2 h-px w-[min(64vw,46rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
    </motion.div>

    <motion.div
      aria-hidden={!revealed}
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 22, scale: revealed ? 1 : 0.99 }}
      transition={{ duration: 0.82, ease: EASE }}
      className={cn(
        "relative z-30 mx-auto flex h-full w-full max-w-7xl items-start px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:items-center lg:px-10 lg:py-24",
        revealed ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div className="max-w-3xl lg:max-w-4xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scaleX: 0.35 }}
          animate={revealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.35 }}
          transition={{ delay: revealed ? 0.08 : 0, duration: 0.58, ease: EASE }}
          style={{ originX: 0 }}
          className="mb-5 h-px w-14 bg-gradient-to-r from-cyan-100 via-cyan-100/60 to-transparent"
          aria-hidden="true"
        />

        <h1 className="max-w-[15ch] text-balance text-[clamp(2.8rem,7vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
          {hero.title.split(" ").map((word, index, words) => (
            <Fragment key={`${word}-${index}`}>
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
                animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.985 }}
                transition={{ delay: revealed ? 0.14 + index * 0.055 : 0, duration: 0.7, ease: EASE }}
                className={cn(
                  "inline-block",
                  word.replace(".", "") === "aprendizado"
                    ? "bg-gradient-to-r from-cyan-100 via-white to-violet-200 bg-clip-text text-transparent"
                    : undefined
                )}
              >
                {word}
              </motion.span>
              {index < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
          animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.99 }}
          transition={{ delay: revealed ? 0.5 : 0, duration: 0.7, ease: EASE }}
          className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-white/72 sm:mt-7 sm:text-lg sm:leading-8"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
          animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.985 }}
          transition={{ delay: revealed ? 0.65 : 0, duration: 0.65, ease: EASE }}
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

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: revealed ? 1.05 : 0, duration: 0.6, ease: EASE }}
          className="mt-8 flex max-w-md items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 sm:mt-9 sm:text-xs"
        >
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gradient-to-r from-cyan-200 to-violet-200/35" />
          <span>Formação, prática e carreira em um só sistema.</span>
        </motion.p>
      </div>
    </motion.div>
  </div>
</section>
  );
}