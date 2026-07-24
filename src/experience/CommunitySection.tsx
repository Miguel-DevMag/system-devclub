"use client";

import { useReducedMotion, motion } from "motion/react";

/**
 * Lighting
 * Camada de iluminação dinâmica que fica atrás do conteúdo da página.
 * Responsável apenas por criar atmosfera, profundidade e hierarquia visual.
 * Não deve conter texto, cards, botões, ícones ou conteúdo de negócio.
 */
export default function Lighting() {
  // Respeita a preferência do usuário por movimento reduzido
  const shouldReduceMotion = useReducedMotion();

  // Configuração de "respiração" lenta e sutil para as luzes
  const breathe = (
    delay: number,
    scaleRange: [number, number],
    opacityRange: [number, number]
  ) =>
    shouldReduceMotion
      ? {}
      : {
          animate: {
            scale: [scaleRange[0], scaleRange[1], scaleRange[0]],
            opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
          },
          transition: {
            duration: 18 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  // Deslocamento suave e lento no eixo X/Y para dar sensação de vida
  const drift = (
    delay: number,
    xRange: [number, number],
    yRange: [number, number]
  ) =>
    shouldReduceMotion
      ? {}
      : {
          animate: {
            x: [xRange[0], xRange[1], xRange[0]],
            y: [yRange[0], yRange[1], yRange[0]],
          },
          transition: {
            duration: 26 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Wash ambiente suave de fundo, unifica o tom geral da cena */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Glow ciano principal — fonte de luz fria, canto superior esquerdo */}
      <motion.div
        className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[120px]"
        initial={{ opacity: 0.25, scale: 1 }}
        {...breathe(0, [1, 1.12], [0.18, 0.32])}
      />

      {/* Glow violeta — contraponto quente/frio, canto superior direito */}
      <motion.div
        className="absolute -top-24 -right-32 h-[34rem] w-[34rem] rounded-full bg-violet-500/20 blur-[130px]"
        initial={{ opacity: 0.2, scale: 1 }}
        {...breathe(3, [1, 1.15], [0.15, 0.28])}
      />

      {/* Acento esmeralda — leve toque de profundidade na parte inferior */}
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[140px]"
        initial={{ opacity: 0.15, scale: 1 }}
        {...breathe(6, [1, 1.1], [0.1, 0.22])}
      />

      {/* Luz radial central de suporte — reforça foco no meio da composição */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]"
        initial={{ opacity: 0.12, scale: 1 }}
        {...breathe(9, [1, 1.08], [0.08, 0.18])}
        {...drift(9, [-20, 20], [-15, 15])}
      />

      {/* Névoa violeta flutuante — leve deslocamento para sensação de vida */}
      <motion.div
        className="absolute bottom-10 right-10 h-[24rem] w-[24rem] rounded-full bg-violet-400/10 blur-[100px]"
        initial={{ opacity: 0.1, scale: 1 }}
        {...drift(4, [-25, 15], [10, -20])}
      />

      {/* Camada final de vinheta — escurece as bordas para foco central */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}