"use client";
import { motion, useReducedMotion } from "motion/react";
const particles = [
  { left: "12%", top: "22%", size: 3, delay: 0.2 },
  { left: "24%", top: "58%", size: 2, delay: 1.1 },
  { left: "37%", top: "18%", size: 2, delay: 0.6 },
  { left: "52%", top: "44%", size: 3, delay: 1.6 },
  { left: "66%", top: "24%", size: 2, delay: 0.9 },
  { left: "78%", top: "56%", size: 3, delay: 1.9 },
  { left: "89%", top: "32%", size: 2, delay: 1.3 },
];
export default function HeroToCommunityTransition() {
  const prefersReducedMotion = useReducedMotion();
  const drift = prefersReducedMotion
    ? undefined
    : {
        y: [0, 14, 0],
        x: [0, 4, 0],
        opacity: [0.25, 0.75, 0.25],
      };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative isolate -mt-20 h-56 overflow-hidden sm:-mt-28 sm:h-72 lg:-mt-36 lg:h-96"
    >
      {/* A malha prolonga visualmente o espaço do Hero. */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[72%] opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_42%,transparent)] sm:[background-size:56px_56px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "0px 42px"] }
        }
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      />
  <div className="absolute inset-x-[-18%] bottom-[-58%] h-[120%] rounded-[50%] border border-cyan-300/15 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.16),rgba(59,130,246,0.06)_32%,transparent_68%)] blur-[1px]" />

  <motion.div
    className="absolute left-1/2 top-[44%] h-24 w-[130%] -translate-x-1/2 rounded-[50%] border border-cyan-200/20 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent blur-sm sm:h-32"
    animate={
      prefersReducedMotion
        ? undefined
        : { y: [0, 12, 0], scaleX: [0.96, 1.03, 0.96], opacity: [0.45, 0.85, 0.45] }
    }
    transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
  />

  <motion.svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute inset-x-0 top-[18%] h-[72%] w-full overflow-visible"
  >
    <defs>
      <linearGradient id="community-flow" x1="0" x2="1">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
        <stop offset="42%" stopColor="#67e8f9" stopOpacity="0.38" />
        <stop offset="62%" stopColor="#a5b4fc" stopOpacity="0.32" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
      </linearGradient>
    </defs>

    <motion.path
      d="M-80 68 C 205 2, 382 242, 694 162 S 1126 44, 1520 178"
      fill="none"
      stroke="url(#community-flow)"
      strokeWidth="1.5"
      initial={{ pathLength: 0.15, opacity: 0.2 }}
      animate={
        prefersReducedMotion
          ? { pathLength: 0.8, opacity: 0.45 }
          : { pathLength: [0.15, 0.9, 0.35], pathOffset: [0, 0.3, 0.65], opacity: [0.15, 0.65, 0.2] }
      }
      transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
    />

    <motion.path
      d="M-50 178 C 262 286, 440 30, 764 134 S 1174 306, 1510 84"
      fill="none"
      stroke="url(#community-flow)"
      strokeWidth="1"
      initial={{ pathLength: 0.25, opacity: 0.18 }}
      animate={
        prefersReducedMotion
          ? { pathLength: 0.7, opacity: 0.3 }
          : { pathLength: [0.2, 0.82, 0.28], pathOffset: [0.55, 0.1, 0.55], opacity: [0.12, 0.45, 0.12] }
      }
      transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 1 }}
    />
  </motion.svg>

  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 dark:to-slate-950" />

  {particles.map((particle) => (
    <motion.span
      key={`${particle.left}-${particle.top}`}
      className="absolute rounded-full bg-cyan-100 shadow-[0_0_14px_rgba(103,232,249,0.8)]"
      style={{
        left: particle.left,
        top: particle.top,
        width: particle.size,
        height: particle.size,
      }}
      animate={drift}
      transition={{
        duration: 6 + particle.delay,
        delay: particle.delay,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  ))}
</div>
  );
}