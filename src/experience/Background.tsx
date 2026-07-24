import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type TargetAndTransition, type Transition } from 'motion/react';

/**
 * Background.tsx
 *
 * Camada de ambientacao global da experiencia DevClub.
 * Responsavel exclusivamente pela atmosfera visual (gradientes, glows, vinheta).
 * Nao deve conter textos, botoes, cards ou qualquer conteudo de negocio.
 *
 * Todas as camadas sao posicionadas de forma absoluta e isoladas,
 * criando profundidade sem comprometer a performance.
 */

// Duracoes longas e variadas para reforcar a sensacao de calma e premiumness
const DURATION_SLOW = 25;
const DURATION_SLOWER = 35;
const DURATION_MEDIUM = 18;

// Paleta de cores usada nos glows (evita repetir hex ao longo do arquivo)
const COLOR_GLOW_CYAN = '0, 217, 255';
const COLOR_ACCENT_PURPLE = '139, 92, 246';
const COLOR_ACCENT_GREEN = '34, 211, 238';
const COLOR_BASE_DARK = '5, 8, 22';

function buildTransition(duration: number): Transition {
  return {
    duration,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  };
}

export default function Background() {
  const prefersReducedMotionHook = useReducedMotion();

  // Detecta preferencia de movimento reduzido tambem via matchMedia,
  // garantindo fallback estatico mesmo em navegadores sem suporte total ao hook
  const [systemReducedMotion, setSystemReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const reducedMotion = systemReducedMotion || Boolean(prefersReducedMotionHook);

  // Quando o movimento reduzido esta ativo, as camadas ficam estaticas.
  // Tipado explicitamente como TargetAndTransition para satisfazer o Motion.
  const glowOneAnimate: TargetAndTransition = reducedMotion
    ? {}
    : { opacity: [0.4, 0.6, 0.4], scale: [1, 1.08, 1], x: [0, 30, 0], y: [0, -20, 0] };

  const glowTwoAnimate: TargetAndTransition = reducedMotion
    ? {}
    : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1], x: [0, -25, 0], y: [0, 15, 0] };

  const glowThreeAnimate: TargetAndTransition = reducedMotion
    ? {}
    : { opacity: [0.2, 0.35, 0.2], scale: [1, 1.05, 1], x: [0, 20, 0], y: [0, 30, 0] };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Camada 1: Base escura profunda, fundamento de toda a experiencia */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #050816 0%, #0A1024 50%, #050816 100%)',
        }}
      />

      {/* Camada 2: Glow radial azul/ciano, fonte de luz principal, muito suave */}
      <motion.div
        className="absolute left-1/2 top-1/4 h-[60vw] w-[60vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(${COLOR_GLOW_CYAN}, 0.16) 0%, rgba(${COLOR_GLOW_CYAN}, 0) 70%)`,
        }}
        initial={{ opacity: 0.5, scale: 1, x: 0, y: 0 }}
        animate={glowOneAnimate}
        transition={reducedMotion ? undefined : buildTransition(DURATION_SLOWER)}
      />

      {/* Camada 3: Glow secundario roxo, cria contraste e profundidade cromatica */}
      <motion.div
        className="absolute bottom-0 right-0 h-[50vw] w-[50vw] max-h-[800px] max-w-[800px] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(${COLOR_ACCENT_PURPLE}, 0.14) 0%, rgba(${COLOR_ACCENT_PURPLE}, 0) 70%)`,
        }}
        initial={{ opacity: 0.4, scale: 1, x: 0, y: 0 }}
        animate={glowTwoAnimate}
        transition={reducedMotion ? undefined : buildTransition(DURATION_SLOW)}
      />

      {/* Camada 4: Circulos grandes desfocados, reforcam a sensacao de volume e movimento sutil */}
      <motion.div
        className="absolute -left-1/4 top-1/2 h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(${COLOR_ACCENT_GREEN}, 0.10) 0%, rgba(${COLOR_ACCENT_GREEN}, 0) 70%)`,
        }}
        initial={{ opacity: 0.3, scale: 1, x: 0, y: 0 }}
        animate={glowThreeAnimate}
        transition={reducedMotion ? undefined : buildTransition(DURATION_MEDIUM)}
      />

      {/* Camada 5: Vinheta sutil, escurece as bordas para direcionar o foco ao centro */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${COLOR_BASE_DARK}, 0) 40%, rgba(${COLOR_BASE_DARK}, 0.65) 100%)`,
        }}
      />

      {/* Camada 6: Mascara final, garante contraste e legibilidade do conteudo sobreposto */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(${COLOR_BASE_DARK}, 0.4) 0%, rgba(${COLOR_BASE_DARK}, 0) 20%, rgba(${COLOR_BASE_DARK}, 0) 80%, rgba(${COLOR_BASE_DARK}, 0.5) 100%)`,
        }}
      />
    </div>
  );
}
