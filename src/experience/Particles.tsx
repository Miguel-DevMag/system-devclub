"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

// Camada global de partículas: cria profundidade e atmosfera cinematográfica
// sem competir com o conteúdo. Apenas pontos de luz sutis flutuando no fundo.

interface Particle {
  id: number;
  x: number; // posição horizontal em %
  y: number; // posição vertical em %
  size: number; // tamanho em px
  opacity: number; // opacidade base
  duration: number; // duração da animação de flutuação
  delay: number; // atraso para dessincronizar o movimento
  driftX: number; // deslocamento horizontal sutil
  driftY: number; // deslocamento vertical sutil
  bright: boolean; // define se é um "nó" mais brilhante
}

const PARTICLE_COUNT = 28;

// Gera um conjunto determinístico de partículas com variações orgânicas
function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    const bright = i % 6 === 0; // poucas partículas mais brilhantes

    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: bright ? 2.5 + Math.random() * 1.5 : 1 + Math.random() * 1.5,
      opacity: bright ? 0.5 + Math.random() * 0.3 : 0.15 + Math.random() * 0.25,
      duration: 14 + Math.random() * 18,
      delay: Math.random() * 10,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 60,
      bright,
    });
  }

  return particles;
}

export default function Particles() {
  const shouldReduceMotion = useReducedMotion();

  // Memoiza as partículas para evitar recomputação em re-renders
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full ${
            particle.bright
              ? "bg-white/80 blur-[1px]"
              : "bg-white/40 blur-[0.5px]"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            opacity: particle.opacity * 0.6,
            x: 0,
            y: 0,
            scale: 0.9,
          }}
          animate={
            shouldReduceMotion
              ? {
                  // Movimento desabilitado: partículas ficam estáticas e discretas
                  opacity: particle.opacity,
                }
              : {
                  opacity: [
                    particle.opacity * 0.5,
                    particle.opacity,
                    particle.opacity * 0.6,
                  ],
                  x: [0, particle.driftX, 0],
                  y: [0, particle.driftY, 0],
                  scale: [0.9, 1.1, 0.9],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}