import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import { authority } from "@/data/authority";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

function useDesktopLayout() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia(DESKTOP_MEDIA_QUERY).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function AuthoritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useDesktopLayout();
  const hasEntered = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const isNearViewport = useInView(sectionRef, { margin: "180px 0px" });
  const shouldDrift =
    isDesktop && isNearViewport && !(prefersReducedMotion ?? false);

  return (
    <section
      ref={sectionRef}
      id="autoridade"
      aria-labelledby="authority-title"
      className="relative isolate overflow-hidden bg-[#070b0e]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030609_0%,#070b0e_27%,#090e12_100%)]" />
        <div className="absolute -right-[14%] top-[-55%] h-[190%] w-[68%] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,.075),rgba(30,64,78,.025)_42%,transparent_72%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(118deg,transparent_0,transparent_31px,rgba(255,255,255,.018)_32px,transparent_33px)] [mask-image:linear-gradient(90deg,transparent_28%,black_72%,transparent)]" />

        <div className="absolute left-[76%] top-0 h-32 w-px sm:left-[78%] lg:left-[82.5%]">
          <motion.div
            initial={prefersReducedMotion ? false : { scaleY: 0, opacity: 0.3 }}
            animate={hasEntered ? { scaleY: 1, opacity: 1 } : undefined}
            transition={{
              duration: prefersReducedMotion
                ? 0
                : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
            className="h-full origin-top bg-gradient-to-b from-cyan-100/68 via-emerald-200/46 to-violet-200/30 shadow-[0_0_16px_rgba(103,232,249,.22)]"
          />
          <motion.div
            initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0.3 }}
            animate={hasEntered ? { scaleX: 1, opacity: 1 } : undefined}
            transition={{
              delay: prefersReducedMotion ? 0 : motionTokens.duration.expressive,
              duration: prefersReducedMotion
                ? 0
                : motionTokens.duration.expressive,
              ease: motionTokens.easing.emphasized,
            }}
            className="absolute bottom-0 right-0 h-px w-[52vw] origin-right bg-gradient-to-l from-violet-200/46 via-cyan-100/26 to-transparent"
          />
          <span className="absolute -bottom-1 -left-1 size-2 rotate-45 border border-cyan-100/56 bg-[#091115]" />
        </div>
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="max-w-[39rem]">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/54 sm:text-[11px]">
              <span className="h-px w-7 bg-gradient-to-r from-cyan-100/64 to-transparent" />
              {authority.eyebrow}
            </p>

            <h2
              id="authority-title"
              className="mt-5 text-[clamp(1.85rem,7.8vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-white md:text-[clamp(2.1rem,3vw,2.5rem)]"
            >
              {authority.title}
            </h2>

            <p className="mt-4 max-w-[34rem] text-sm leading-6 text-white/62 sm:text-[15px] sm:leading-7">
              {authority.description}
            </p>
          </div>

          <div className="relative md:min-h-[15rem]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-white/[0.13] to-transparent md:block"
            />

            <SignalLane
              label={authority.lanes[0].label}
              signals={authority.lanes[0].signals}
              active={shouldDrift}
              distance={motionTokens.authority.nearDistance}
              duration={motionTokens.authority.nearDuration}
              className="md:absolute md:left-[2%] md:top-[18%]"
              itemClassName="text-[15px] font-semibold tracking-[-0.018em] text-white/76 lg:text-[17px]"
            />

            <SignalLane
              label={authority.lanes[1].label}
              signals={authority.lanes[1].signals}
              active={shouldDrift}
              distance={motionTokens.authority.farDistance}
              duration={motionTokens.authority.farDuration}
              reverse
              className="mt-6 md:absolute md:bottom-[17%] md:right-[1%] md:mt-0"
              itemClassName="text-[12px] font-medium uppercase tracking-[0.14em] text-white/54 lg:text-[13px]"
            />

            <div className="mt-8 flex items-center gap-3 md:absolute md:bottom-0 md:left-[8%] md:mt-0">
              <span className="size-1.5 rotate-45 border border-emerald-100/36 bg-emerald-200/12" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/48">
                {authority.continuity}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SignalLane({
  active,
  className,
  distance,
  duration,
  itemClassName,
  label,
  reverse = false,
  signals,
}: {
  active: boolean;
  className: string;
  distance: number;
  duration: number;
  itemClassName: string;
  label: string;
  reverse?: boolean;
  signals: readonly string[];
}) {
  const travel = reverse ? distance : -distance;

  return (
    <motion.ul
      aria-label={label}
      animate={active ? { x: [0, travel, 0] } : { x: 0 }}
      transition={
        active
          ? {
              duration,
              ease: motionTokens.easing.flow,
              repeat: Infinity,
            }
          : { duration: motionTokens.duration.responsive }
      }
      className={`grid grid-cols-2 gap-x-7 gap-y-5 md:flex md:w-max md:items-center md:gap-14 lg:gap-20 ${className}`}
    >
      {signals.map((signal) => (
        <li key={signal} className={`flex items-center gap-3 ${itemClassName}`}>
          <span
            aria-hidden="true"
            className="h-px w-4 shrink-0 bg-gradient-to-r from-white/26 to-transparent"
          />
          <span className="md:whitespace-nowrap">{signal}</span>
        </li>
      ))}
    </motion.ul>
  );
}
