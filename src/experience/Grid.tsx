'use client'

import { motion, useReducedMotion } from 'motion/react'

/**
 * Grid.tsx
 * Camada de grid técnico de fundo — parte do motor visual global.
 * Responsável apenas por profundidade, estrutura e atmosfera futurista.
 * Não contém texto, cards, botões ou qualquer conteúdo de negócio.
 */

export default function Grid() {
  const shouldReduceMotion = useReducedMotion()
  const enableMotion = !shouldReduceMotion

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Camada base do grid: linhas finas em baixíssima opacidade */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
        initial={{ opacity: 0.5, x: 0, y: 0 }}
        animate={
          enableMotion
            ? {
                opacity: [0.4, 0.55, 0.4],
                x: [0, 6, 0],
                y: [0, -4, 0],
              }
            : { opacity: 0.5, x: 0, y: 0 }
        }
        transition={
          enableMotion
            ? {
                duration: 40,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      />

      {/* Camada secundária: grid maior para sensação de profundidade/paralaxe */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px',
        }}
        initial={{ x: 0, y: 0 }}
        animate={
          enableMotion
            ? {
                x: [0, -10, 0],
                y: [0, 8, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={
          enableMotion
            ? {
                duration: 70,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      />

      {/* Glow sutil em interseções estratégicas, para reforçar o tom futurista */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-32 w-32 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      {/* Máscara de esmaecimento nas bordas para suavizar o grid contra o fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 45%, black 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 70% at center, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at center, black 40%, transparent 100%)',
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
