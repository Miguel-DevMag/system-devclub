'use client';

import { useReducedMotion } from 'motion/react';
import { useMemo } from 'react';

/**
 * Noise.tsx
 *
 * Camada de textura global do motor visual da experiência DevClub.
 * Responsável exclusivamente por adicionar um grão sutil sobre o fundo,
 * quebrando a "chapadeza" visual e adicionando profundidade cinematográfica.
 *
 * Não deve conter texto, cards, ícones ou qualquer conteúdo de negócio.
 * Implementação 100% CSS (SVG data-uri + gradientes), sem canvas/WebGL,
 * para manter o custo de renderização extremamente baixo.
 */

// SVG de ruído gerado via feTurbulence, embutido como data-uri.
// Leve, escalável e sem dependência de assets externos.
const NOISE_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.85"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
`;

const NOISE_DATA_URI = `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")`;

export default function Noise() {
  // Respeita a preferência do usuário por movimento reduzido.
  const prefersReducedMotion = useReducedMotion();

  // Estilo do padrão de ruído memoizado para evitar recomputação em re-renders.
  const noiseStyle = useMemo(
    () => ({
      backgroundImage: NOISE_DATA_URI,
      backgroundRepeat: 'repeat' as const,
      backgroundSize: '256px 256px',
    }),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {/* Camada de grão sutil, quase imperceptível, apenas para textura */}
      <div
        className={[
          'absolute inset-0 opacity-[0.035] mix-blend-overlay',
          // Drift extremamente lento e discreto, desativado se reduced motion
          prefersReducedMotion ? '' : 'animate-noise-drift',
        ].join(' ')}
        style={noiseStyle}
      />

      {/* Segunda camada, leve deslocamento, reforça sensação de profundidade */}
      <div
        className={[
          'absolute -inset-8 opacity-[0.02] mix-blend-soft-light',
          prefersReducedMotion ? '' : 'animate-noise-drift-slow',
        ].join(' ')}
        style={noiseStyle}
      />

      {/* Vinheta suave para reforçar leitura do conteúdo central */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(0,0,0,0.25)_100%)]"
      />

      {/* Definição local das animações de drift, mantidas mínimas e sutis */}
      <style>{`
        @keyframes noise-drift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-1%, 1%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes noise-drift-slow {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(1%, -1%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-noise-drift {
          animation: noise-drift 24s ease-in-out infinite;
        }
        .animate-noise-drift-slow {
          animation: noise-drift-slow 40s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}