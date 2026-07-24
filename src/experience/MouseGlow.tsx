'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

/**
 * MouseGlow
 * Camada global de luz ambiente que segue o cursor.
 * Faz parte do "motor visual" da experiência DevClub — não é decoração isolada,
 * é responsável por dar sensação de profundidade e interface viva.
 *
 * Regras deste arquivo:
 * - Sem conteúdo textual, sem UI de negócio.
 * - Apenas o glow (halo de luz) que reage ao mouse.
 * - Performance leve: só CSS + Motion, sem canvas/WebGL.
 */
export default function MouseGlow() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Estado de presença do cursor na viewport, para atenuar o glow quando ele sai
  const [isActive, setIsActive] = useState(false);

  // Posição bruta do cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suaviza o movimento com spring — evita rastro "grudento" ou nervoso
  const springConfig = { stiffness: 120, damping: 24, mass: 0.6 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Se o usuário prefere menos movimento, mantemos o glow estático e paramos por aqui
    if (prefersReducedMotion) return;

    // Centraliza o glow inicialmente no meio da viewport
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsActive(true);
    };

    const handlePointerLeave = () => {
      // Ao sair da viewport, volta suavemente para o centro e reduz intensidade
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      setIsActive(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [prefersReducedMotion, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Halo principal: núcleo ciano, luz "fonte" que acompanha o cursor */}
      <motion.div
        className="absolute h-[38vmax] w-[38vmax] rounded-full bg-cyan-400/20 blur-[110px]"
        style={
          prefersReducedMotion
            ? { left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }
            : { left: x, top: y, translateX: '-50%', translateY: '-50%' }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 0.25, scale: 1 }
            : {
                opacity: isActive ? 0.32 : 0.12,
                scale: isActive ? 1 : 0.85,
              }
        }
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Halo secundário: violeta, levemente deslocado para dar sensação de profundidade */}
      <motion.div
        className="absolute h-[26vmax] w-[26vmax] rounded-full bg-violet-500/20 blur-[100px]"
        style={
          prefersReducedMotion
            ? { left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }
            : { left: x, top: y, translateX: '-60%', translateY: '-40%' }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 0.18, scale: 1 }
            : {
                opacity: isActive ? 0.22 : 0.08,
                scale: isActive ? 1.05 : 0.8,
              }
        }
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Realce central sutil em branco: dá o brilho "vivo" no núcleo do glow */}
      <motion.div
        className="absolute h-[8vmax] w-[8vmax] rounded-full bg-white/10 blur-[60px]"
        style={
          prefersReducedMotion
            ? { left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }
            : { left: x, top: y, translateX: '-50%', translateY: '-50%' }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 0.15 }
            : {
                opacity: isActive ? [0.15, 0.25, 0.15] : 0.05,
              }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.6 }
            : {
                duration: 4,
                repeat: isActive ? Infinity : 0,
                ease: 'easeInOut',
              }
        }
      />
    </div>
  );
}