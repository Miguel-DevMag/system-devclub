import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { authority } from "@/data/authority";

export function AuthoritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const hasEntered = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const signalsSettled = hasEntered || (prefersReducedMotion ?? false);

  return (
    <section
      ref={sectionRef}
      id="autoridade"
      aria-labelledby="authority-title"
      className="relative isolate overflow-hidden bg-[#030609]"
    >
      {/* ── Background Atmosférico "Beyond MBA" ──────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_140%_at_50%_-40%,oklch(0.55_0.175_252/0.08),transparent_55%),linear-gradient(180deg,#030609_0%,#05080c_100%)]" />
        <div className="absolute -right-[14%] top-[-15%] h-[150%] w-[68%] bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.14_252/0.1),transparent_72%)] mix-blend-screen" />

        {/* Linha vertical primária que ancora o lado direito */}
        <div className="absolute right-[12%] top-0 h-full w-px">
          <motion.div
            initial={prefersReducedMotion ? false : { scaleY: 0, opacity: 0 }}
            animate={hasEntered ? { scaleY: 1, opacity: 1 } : undefined}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.2,
              ease: [0.16, 1, 0.3, 1], // ease-premium
            }}
            className="h-full origin-top bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent"
          />
        </div>
      </div>

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* ── Conteúdo Textual ─────────────────────────────────────────── */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1], // ease-premium
            }}
            className="max-w-[39rem]"
          >
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-glass px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/68 sm:text-[11px]">
              <span className="animate-pulse-glow h-[5px] w-[5px] rounded-full bg-cyan-400/60" />
              {authority.eyebrow}
            </p>

            <h2
              id="authority-title"
              className="mt-6 text-[clamp(2.1rem,4.5vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
            >
              {authority.title}
            </h2>

            <p className="mt-5 max-w-[34rem] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              {authority.description}
            </p>
          </motion.div>

          {/* ── Painel de Sinais (Chips Físicos) ─────────────────────────── */}
          <div className="relative md:min-h-[22rem] flex flex-col justify-center">

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={hasEntered ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-1/4 top-1/2 -mt-24 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.175_252/0.12),transparent_70%)] blur-2xl"
            />

            <div className="relative z-10 flex flex-col gap-8">
              <SignalLane
                label={authority.lanes[0].label}
                signals={authority.lanes[0].signals}
                active={signalsSettled}
                delayBase={0.1}
                className="self-start md:ml-[-10%]"
                chipClassName="bg-glass-premium text-[15px] font-semibold text-white/88"
              />

              <SignalLane
                label={authority.lanes[1].label}
                signals={authority.lanes[1].signals}
                active={signalsSettled}
                delayBase={0.3}
                className="self-end md:mr-[10%]"
                chipClassName="bg-glass border-white/5 text-[13px] font-medium text-white/54"
              />
            </div>

            <motion.div
               initial={prefersReducedMotion ? false : { opacity: 0 }}
               animate={hasEntered ? { opacity: 1 } : undefined}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="mt-12 flex items-center gap-3 md:absolute md:-bottom-4 md:left-[5%] md:mt-0"
            >
              <span className="size-2 rotate-45 border border-emerald-100/36 bg-emerald-200/12 shadow-[0_0_12px_rgba(110,231,183,0.3)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/48">
                {authority.continuity}
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SignalLane({
  active,
  className,
  chipClassName,
  label,
  signals,
  delayBase = 0,
}: {
  active: boolean;
  className?: string;
  chipClassName: string;
  label: string;
  signals: readonly string[];
  delayBase?: number;
}) {
  return (
    <motion.ul
      aria-label={label}
      className={`flex flex-wrap gap-4 ${className}`}
    >
      {signals.map((signal, index) => (
        <motion.li
          key={signal}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={active ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
          transition={{
            duration: 0.6,
            delay: delayBase + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-transform hover:-translate-y-1 hover:border-white/20 ${chipClassName}`}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/40"
          />
          <span className="whitespace-nowrap">{signal}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
