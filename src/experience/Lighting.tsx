import { useReducedMotion, motion } from "motion/react";

/**
 * Lighting.tsx
 * Sistema de iluminação global da experiência DevClub.
 * Camadas de luz posicionadas atrás do conteúdo, responsáveis por
 * criar atmosfera, profundidade e hierarquia visual.
 * Não deve conter texto, cards, botões ou qualquer conteúdo de negócio.
 */

export default function Lighting() {
  // Respeita a preferência do usuário por movimento reduzido
  const shouldReduceMotion = useReducedMotion();

  // Transição base: muito lenta, suave, como uma respiração
  const breathingTransition = (duration: number, delay = 0) => ({
    duration,
    delay,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Wash ambiente suave de fundo, dá profundidade geral à cena */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Glow ciano principal, luz de destaque no topo esquerdo */}
      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/20 blur-[120px]"
        initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.25, scale: 1, x: 0, y: 0 }
            : { opacity: [0.2, 0.35, 0.2], scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, 15, 0] }
        }
        transition={breathingTransition(14)}
      />

      {/* Glow violeta, luz secundária no lado direito, cria contraste cromático */}
      <motion.div
        className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-[130px]"
        initial={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.2, scale: 1, x: 0, y: 0 }
            : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1], x: [0, -15, 0], y: [0, -20, 0] }
        }
        transition={breathingTransition(18, 2)}
      />

      {/* Acento esmeralda, luz discreta na parte inferior, equilibra a composição */}
      <motion.div
        className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[110px]"
        initial={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.15, scale: 1, x: 0, y: 0 }
            : { opacity: [0.1, 0.22, 0.1], scale: [1, 1.06, 1], x: [0, 10, 0], y: [0, -10, 0] }
        }
        transition={breathingTransition(20, 4)}
      />

      {/* Luz ambiente central, sutil, unifica as camadas e suaviza transições */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[150px]"
        initial={{ opacity: 0.08, scale: 1 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.08, scale: 1 }
            : { opacity: [0.05, 0.12, 0.05], scale: [1, 1.05, 1] }
        }
        transition={breathingTransition(24, 1)}
      />

      {/* Vinheta final, escurece as bordas e concentra o foco no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}