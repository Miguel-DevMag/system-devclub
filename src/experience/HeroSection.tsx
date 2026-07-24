"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Lighting.tsx
 * Sistema de iluminação dinâmica do herói.
 * Responsável apenas pelas camadas de luz de fundo — sem texto, sem UI, sem navegação.
 * Cria atmosfera, profundidade e hierarquia visual para o restante da página.
 */
export default function Lighting() {
  const prefersReducedMotion = useReducedMotion();
  // Esta é uma aplicação Vite somente cliente; não há hidratação para aguardar.
  const animate = !prefersReducedMotion;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Camada base: lavagem ambiente suave para unificar o fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Glow ciano: luz principal, posicionada no topo esquerdo, respiração lenta */}
      <motion.div
        className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[120px]"
        initial={{ opacity: 0.25, scale: 1 }}
        animate={
          animate
            ? {
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.08, 1],
                x: [0, 20, 0],
                y: [0, 10, 0],
              }
            : { opacity: 0.28, scale: 1 }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow violeta: contraponto cromático no lado direito, movimento amplo e lento */}
      <motion.div
        className="absolute top-1/4 -right-32 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-[130px]"
        initial={{ opacity: 0.2, scale: 1 }}
        animate={
          animate
            ? {
                opacity: [0.18, 0.3, 0.18],
                scale: [1, 1.1, 1],
                x: [0, -25, 0],
                y: [0, -15, 0],
              }
            : { opacity: 0.22, scale: 1 }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Accent esmeralda: leve toque de cor na parte inferior, reforça profundidade */}
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/15 blur-[110px]"
        initial={{ opacity: 0.15, scale: 1 }}
        animate={
          animate
            ? {
                opacity: [0.12, 0.22, 0.12],
                scale: [1, 1.06, 1],
                x: [0, 15, 0],
                y: [0, -10, 0],
              }
            : { opacity: 0.16, scale: 1 }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Lavagem radial central: profundidade suave que guia o olhar ao centro */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gradient bg-white/[0.03] blur-[100px]"
        initial={{ opacity: 0.5 }}
        animate={
          animate
            ? {
                opacity: [0.4, 0.55, 0.4],
              }
            : { opacity: 0.5 }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vinheta final: escurece as bordas para concentrar o foco no centro da tela */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}
