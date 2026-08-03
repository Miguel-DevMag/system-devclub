import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import portalClosed from "@/assets/hero/portal-closed.png";
import portalOpening from "@/assets/hero/portal-opening.png";
import portalOpening2 from "@/assets/hero/portal-opening-2.png";
import portalOpen from "@/assets/hero/portal-open.png";
import watermarkSubtle from "@/assets/hero/logo-watermark-subtle.png";
import { HeroAction } from "@/components/hero/HeroAction";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const OPENING_DURATION_MS = 1_850;

type CinematicIntroProps = {
  /** Content from HeroReveal can be mounted here in the next architecture step. */
  children?: ReactNode;
  onComplete?: () => void;
};

type PortalFrameProps = {
  src: string;
  opacity: number;
  active: boolean;
};

function PortalFrame({ src, opacity, active }: PortalFrameProps) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable="false"
      animate={{ opacity, scale: active ? 1 : 1.015 }}
      transition={{ duration: active ? 0.7 : 0.45, ease: EASE }}
      className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
    />
  );
}

/**
 * The opening beat of the Hero. It deliberately owns only the portal sequence;
 * HeroReveal, HeroProof and HeroAction remain separate concerns.
 */
export function CinematicIntro({ children, onComplete }: CinematicIntroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [hasStarted, setHasStarted] = useState(false);
  const [portalStage, setPortalStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const beginOpening = useCallback(() => {
    if (hasStartedRef.current) return;

    hasStartedRef.current = true;
    if (prefersReducedMotion) {
      setPortalStage(3);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    setHasStarted(true);
  }, [onComplete, prefersReducedMotion]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const bounds = section.getBoundingClientRect();
      const isReadingIntro = bounds.top <= 0 && bounds.bottom > window.innerHeight * 0.45;

      if (isReadingIntro && window.scrollY > 0) beginOpening();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [beginOpening]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    const firstOpeningFrame = window.setTimeout(() => setPortalStage(1), 80);
    const secondOpeningFrame = window.setTimeout(() => setPortalStage(2), 620);
    const openPortal = window.setTimeout(() => setPortalStage(3), 1_180);
    const completion = window.setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, OPENING_DURATION_MS);

    return () => {
      window.clearTimeout(firstOpeningFrame);
      window.clearTimeout(secondOpeningFrame);
      window.clearTimeout(openPortal);
      window.clearTimeout(completion);
    };
  }, [hasStarted, onComplete, prefersReducedMotion]);

  const portalOpacity = isComplete ? 0.08 : 1;
  const watermarkOpacity = isComplete ? 0.025 : hasStarted ? 0.07 : 0.11;

  return (
    <section
      id="hero"
      ref={sectionRef}
      onWheel={beginOpening}
      onTouchMove={beginOpening}
      className="relative h-[155svh] min-h-[760px] overflow-clip bg-[#05070a] sm:min-h-[820px]"
    >
      <div className="sticky top-0 h-svh min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 bg-[#05070a]" />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: watermarkOpacity, scale: isComplete ? 1.04 : 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="pointer-events-none absolute inset-0 z-0 grid place-items-center"
        >
          <img
            src={watermarkSubtle}
            alt=""
            className="w-[min(110vw,58rem)] opacity-90 sm:w-[min(78vw,64rem)]"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{
            opacity: hasStarted ? 0.48 : 0.18,
            scale: hasStarted ? 1.15 : 0.94,
          }}
          transition={{ duration: 1.35, ease: EASE }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[42vmax] w-[42vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[120px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: portalOpacity, scale: isComplete ? 1.035 : 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <PortalFrame src={portalClosed} active={portalStage === 0} opacity={portalStage === 0 ? 1 : 0} />
          <PortalFrame src={portalOpening} active={portalStage === 1} opacity={portalStage === 1 ? 1 : 0} />
          <PortalFrame src={portalOpening2} active={portalStage === 2} opacity={portalStage === 2 ? 1 : 0} />
          <PortalFrame src={portalOpen} active={portalStage === 3} opacity={portalStage === 3 ? 1 : 0} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,.42),transparent_48%,rgba(2,5,8,.3))]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,5,8,.72),transparent_42%,rgba(2,5,8,.18))]" />
        </motion.div>

        <motion.div
          aria-hidden={!isComplete}
          animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 14 }}
          transition={{ duration: 0.65, ease: EASE }}
          className={cn(
            "relative z-20 mx-auto flex h-full w-full max-w-7xl items-end px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10",
            isComplete ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {children}
        </motion.div>

        <HeroAction active={isComplete} />
      </div>
    </section>
  );
}
