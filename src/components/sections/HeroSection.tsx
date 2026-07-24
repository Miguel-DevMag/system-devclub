// Seção hero — experiência cinematográfica DevClub.
// Refinamento com animação orbital contínua, linear e suave para os cards
// e remoção do badge conforme solicitado.

import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Radio,
  Users,
  BookOpen,
  Zap,
  Star,
  TrendingUp,
  Code2,
  Globe,
} from "lucide-react";

import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────────
// Constantes de easing — curvas premium usadas em todo o arquivo
// ─────────────────────────────────────────────────────────────────

// Easing "overshoot suave" — natural, nunca genérico
const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
// Easing de saída — para elementos que entram do zero
const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

// ─────────────────────────────────────────────────────────────────
// Variantes de animação em cascata
// ─────────────────────────────────────────────────────────────────

// Container orquestra os filhos com stagger mais refinado
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
};

// Cada item materializa suavemente — blur-to-clear + translate
const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_PREMIUM },
  },
};

// Painel direito entra com mais peso — delay e blur maiores
const panelVariants = {
  hidden: { opacity: 0, x: 48, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.25 },
  },
};

// ─────────────────────────────────────────────────────────────────
// Nós do núcleo orbital — composição do lado direito
// ─────────────────────────────────────────────────────────────────

interface OrbitalNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  angle: number;  // ângulo inicial da órbita
  radius: number; // raio em px a partir do centro
  // Classes de gradiente + borda do badge
  accent: string;
  // Cor do glow atrás do badge
  glow: string;
  // Atraso de entrada
  delay: number;
  // Duração e amplitude da flutuação vertical
  floatDuration: number;
  floatAmplitude: number;
}

// Os cards organizados em posições angulares equidistantes e com raios intercalados
// para criar profundidade e não sobrepor durante a órbita.
const ORBITAL_NODES: OrbitalNode[] = [
  {
    id: "formacoes",
    label: "Formações",
    sublabel: "Dev Full Stack",
    icon: <BookOpen className="h-3.5 w-3.5" />,
    angle: 0,
    radius: 190,
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    glow: "bg-cyan-500/40",
    delay: 0.55,
    floatDuration: 5.8,
    floatAmplitude: 6,
  },
  {
    id: "comunidade",
    label: "Comunidade",
    sublabel: "25k+ alunos",
    icon: <Users className="h-3.5 w-3.5" />,
    angle: 72,
    radius: 160,
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
    glow: "bg-violet-500/40",
    delay: 0.72,
    floatDuration: 7.2,
    floatAmplitude: 7,
  },
  {
    id: "carreira",
    label: "Carreira",
    sublabel: "+180 empresas",
    icon: <TrendingUp className="h-3.5 w-3.5" />,
    angle: 144,
    radius: 190,
    accent: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
    glow: "bg-emerald-500/40",
    delay: 0.88,
    floatDuration: 6.5,
    floatAmplitude: 5,
  },
  {
    id: "projetos",
    label: "Projetos",
    sublabel: "Portfólio real",
    icon: <Code2 className="h-3.5 w-3.5" />,
    angle: 216,
    radius: 160,
    accent: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    glow: "bg-amber-500/40",
    delay: 1.04,
    floatDuration: 8.0,
    floatAmplitude: 8,
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    sublabel: "Stack moderna",
    icon: <Zap className="h-3.5 w-3.5" />,
    angle: 288,
    radius: 190,
    accent: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
    glow: "bg-pink-500/40",
    delay: 1.2,
    floatDuration: 6.9,
    floatAmplitude: 6,
  },
];

// ─────────────────────────────────────────────────────────────────
// Subcomponente: linha de conexão do nó ao centro do núcleo
// ─────────────────────────────────────────────────────────────────

function ConnectionLine({ length, delay }: { length: number; delay: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT_EXPO }}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: length,
        height: 1,
        transformOrigin: "left center",
      }}
      // Gradiente que vai do branco (origem) ao transparente (ponta)
      className="bg-gradient-to-r from-white/25 to-transparent -translate-y-1/2"
      aria-hidden="true"
    />
  );
}

// ─────────────────────────────────────────────────────────────────
// Subcomponente: badge orbital flutuante com rotação infinita
// ─────────────────────────────────────────────────────────────────

function OrbitalNodeBadge({
  node,
  reduced,
}: {
  node: OrbitalNode;
  reduced: boolean | null;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20"
      initial={{ rotate: node.angle }}
      animate={
        reduced
          ? { rotate: node.angle }
          : { rotate: [node.angle, node.angle + 360] }
      }
      transition={
        reduced
          ? undefined
          : { duration: 60, ease: "linear", repeat: Infinity }
      }
    >
      {/* Linha de conexão visual entre o nó e o núcleo */}
      <ConnectionLine length={node.radius} delay={node.delay} />

      {/* Wrapper do nó, deslocado pelo raio */}
      <motion.div
        style={{ x: node.radius }}
        initial={{ rotate: -node.angle }}
        // Contra-rotação contínua para manter o card alinhado ao horizonte
        animate={
          reduced
            ? { rotate: -node.angle }
            : { rotate: [-node.angle, -(node.angle + 360)] }
        }
        transition={
          reduced
            ? undefined
            : { duration: 60, ease: "linear", repeat: Infinity }
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: node.delay, ease: EASE_PREMIUM }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Flutuação orgânica — cada nó tem ritmo próprio */}
          <motion.div
            animate={reduced ? undefined : { y: [0, -node.floatAmplitude, 0] }}
            transition={
              reduced
                ? undefined
                : {
                    duration: node.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: node.delay * 0.4,
                  }
            }
            className="relative"
          >
            {/* Halo de glow atrás do badge */}
            <div
              className={cn(
                "absolute -inset-2 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover/node:opacity-50",
                node.glow
              )}
              aria-hidden="true"
            />

            {/* Card do nó — glass premium */}
            <motion.div
              whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "group/node relative flex cursor-default select-none flex-col gap-0.5",
                "rounded-[14px] border bg-gradient-to-br px-3.5 py-2.5",
                "shadow-lg shadow-black/40 backdrop-blur-xl",
                "transition-shadow duration-300 hover:shadow-[0_0_16px_-2px] hover:shadow-white/10",
                node.accent
              )}
            >
              {/* Reflexo de vidro sutil no topo */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[14px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                aria-hidden="true"
              />
              {/* Linha superior: ícone */}
              <span className="text-white/65">{node.icon}</span>
              {/* Label principal */}
              <span className="whitespace-nowrap text-[11px] font-semibold leading-none text-white/90">
                {node.label}
              </span>
              {/* Sublabel */}
              <span className="whitespace-nowrap text-[9px] text-white/40">
                {node.sublabel}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Subcomponente: partículas flutuantes no núcleo (puro CSS + Motion)
// ─────────────────────────────────────────────────────────────────

const NUCLEUS_PARTICLES = [
  { top: "15%", left: "20%", size: 2, opacity: 0.6, dur: 4.2, del: 0 },
  { top: "25%", left: "75%", size: 1.5, opacity: 0.4, dur: 5.5, del: 1 },
  { top: "70%", left: "15%", size: 2.5, opacity: 0.5, dur: 6.1, del: 0.5 },
  { top: "75%", left: "80%", size: 1.5, opacity: 0.35, dur: 4.8, del: 1.5 },
  { top: "50%", left: "88%", size: 2, opacity: 0.45, dur: 5.2, del: 0.8 },
  { top: "10%", left: "55%", size: 1, opacity: 0.3, dur: 7, del: 2 },
];

function NucleusParticles({ reduced }: { reduced: boolean | null }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      {NUCLEUS_PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, -10, 0],
                  opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: p.dur,
                  delay: p.del,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────────────

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // ── Parallax de scroll: hero prepara transição para a próxima seção ──
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Conteúdo sobe levemente ao rolar — efeito de "câmera passando"
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ── Parallax de mouse: posição normalizada -0.5 → 0.5 ──
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring mais suave que antes — sensação mais premium
  const springCfg = { stiffness: 85, damping: 24, mass: 0.8 };
  const smoothX = useSpring(rawX, springCfg);
  const smoothY = useSpring(rawY, springCfg);

  // Cada camada de glow se desloca numa profundidade diferente
  const glowCyanX = useTransform(smoothX, (v) => v * -50);
  const glowCyanY = useTransform(smoothY, (v) => v * -38);
  const glowVioletX = useTransform(smoothX, (v) => v * 60);
  const glowVioletY = useTransform(smoothY, (v) => v * 32);
  const glowAmbX = useTransform(smoothX, (v) => v * 22);
  const glowAmbY = useTransform(smoothY, (v) => v * -22);

  // Painel direito: inclinação 3D sutil e deslocamento espacial
  const panelRotX = useTransform(smoothY, (v) => v * -6);
  const panelRotY = useTransform(smoothX, (v) => v * 8);
  const panelShiftX = useTransform(smoothX, (v) => v * 8);
  const panelShiftY = useTransform(smoothY, (v) => v * 8);

  function handlePointerMove(e: ReactMouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const b = sectionRef.current?.getBoundingClientRect();
    if (!b) return;
    rawX.set((e.clientX - b.left) / b.width - 0.5);
    rawY.set((e.clientY - b.top) / b.height - 0.5);
  }

  function handlePointerLeave() {
    // Retorna suavemente ao centro quando o mouse sai
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-white/[0.06] bg-neutral-950 pt-24"
    >
      {/* ══════════════════════════════════════════
          CAMADA DE FUNDO — iluminação e atmosfera
          ══════════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* Glow ciano principal — luz dominante, reage ao mouse */}
        <motion.div
          style={{ x: glowCyanX, y: glowCyanY }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.6, 0.9, 0.6], scale: [1, 1.12, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.13] blur-[130px]"
        />

        {/* Glow violeta — contraponto; mais saturado que antes */}
        <motion.div
          style={{ x: glowVioletX, y: glowVioletY }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-0 top-16 h-[36rem] w-[36rem] rounded-full bg-violet-500/[0.12] blur-[140px]"
        />

        {/* Glow âmbar — acento quente profundo na base, novo */}
        <motion.div
          style={{ x: glowAmbX, y: glowAmbY }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.15, 0.28, 0.15], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-emerald-500/[0.08] blur-[100px]"
        />

        {/* Spot de luz secundário no centro — dá volume à cena */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.06, 0.12, 0.06] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[90px]"
        />

        {/* Grade técnica — opacidade levemente aumentada para presença */}
        <div
          className="absolute inset-0 opacity-[0.033]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Grade secundária maior — sensação de perspectiva */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "192px 192px",
          }}
        />

        {/* Máscara radial — vinheta suave que concentra o olhar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 45% 45%, transparent 35%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════
          CONTEÚDO PRINCIPAL — parallax de scroll
          ══════════════════════════════════════════ */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8"
        >
          {/* ═══════════════════════════════════════
              COLUNA ESQUERDA — hierarquia narrativa
              ═══════════════════════════════════════ */}
          <div className="flex flex-col justify-center">

            {/* Headline — tipografia dominante, hierarquia clara */}
            <motion.h1
              variants={itemVariants}
              className="max-w-2xl text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl md:text-[3.6rem] lg:text-[4.1rem]"
            >
              {/* Linha 1 — neutra, âncora da leitura */}
              <span className="block text-white/85">Transforme seu</span>
              {/* Linha 2 — destaque cromático, ponto de atenção máxima */}
              <span className="relative block">
                {/* Camada de texto gradiente */}
                <span className="bg-gradient-to-r from-cyan-300 via-white/95 to-violet-300 bg-clip-text text-transparent">
                  aprendizado
                </span>
                {/* Brilho difuso sob a palavra — efeito de glow no texto */}
                <span
                  className="pointer-events-none absolute -inset-x-2 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-violet-500/0 blur-sm"
                  aria-hidden="true"
                />
              </span>
              {/* Linha 3 — conclusão, ligeiramente mais suave */}
              <span className="block text-white/80">em carreira real.</span>
            </motion.h1>

            {/* Descrição — leading e opacidade refinados */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-[34rem] text-[1.025rem] leading-[1.75] text-white/50"
            >
              {hero.description}
            </motion.p>

            {/* ── CTAs: botões de nível de produto ── */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-3.5"
            >
              {/* CTA primário — gradiente luxuoso, shimmer no hover */}
              <a
                href={hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  // Reset das classes do variant e aplicação manual premium
                  "group relative h-auto overflow-hidden rounded-xl border-0 px-7 py-3 text-sm font-semibold tracking-[-0.01em] text-white",
                  // Gradiente base
                  "bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-500",
                  // Sombra que respira no hover
                  "shadow-[0_0_24px_-4px_rgba(6,182,212,0.45)] transition-all duration-300",
                  "hover:shadow-[0_0_36px_-4px_rgba(6,182,212,0.65)] hover:brightness-110",
                  // Pressão sutil no active
                  "active:scale-[0.98]"
                )}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  {hero.primaryCta.label}
                  <motion.span
                    animate={prefersReducedMotion ? undefined : { x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                </span>
                {/* Shimmer diagonal no hover — toque de luxo */}
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/15 transition-transform duration-600 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </a>

              {/* CTA secundário — glass refinado */}
              <a
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group relative h-auto overflow-hidden rounded-xl border border-white/12 bg-white/[0.04] px-7 py-3",
                  "text-sm font-medium tracking-[-0.01em] text-white/65 backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:border-white/25 hover:bg-white/[0.08] hover:text-white/90",
                  "active:scale-[0.98]"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Globe
                    className="h-4 w-4 text-white/45 transition-colors duration-300 group-hover:text-white/75"
                    aria-hidden="true"
                  />
                  {hero.secondaryCta.label}
                </span>
                {/* Borda superior como highlight de vidro */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            {/* ── Cards de estatísticas — glass premium ── */}
            <motion.div
              variants={itemVariants}
              className="mt-11 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {hero.stats.map((stat, i) => {
                // Cores dos acentos por índice
                const accentColors = [
                  {
                    bar: "bg-cyan-400",
                    glow: "hover:shadow-[0_0_20px_-6px_rgba(34,211,238,0.5)]",
                    border: "hover:border-cyan-500/30",
                  },
                  {
                    bar: "bg-violet-400",
                    glow: "hover:shadow-[0_0_20px_-6px_rgba(167,139,250,0.5)]",
                    border: "hover:border-violet-500/30",
                  },
                  {
                    bar: "bg-emerald-400",
                    glow: "hover:shadow-[0_0_20px_-6px_rgba(52,211,153,0.5)]",
                    border: "hover:border-emerald-500/30",
                  },
                ];
                const c = accentColors[i];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6 + i * 0.11,
                      ease: EASE_PREMIUM,
                    }}
                    whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.02 }}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] p-[18px] backdrop-blur-sm",
                      "cursor-default shadow-lg shadow-black/30",
                      "transition-all duration-300",
                      "hover:border-white/20 hover:bg-white/[0.07]",
                      c.glow,
                      c.border
                    )}
                  >
                    {/* Barra de accent colorida */}
                    <span
                      className={cn("mb-2.5 block h-[3px] w-8 rounded-full", c.bar)}
                      aria-hidden="true"
                    />

                    {/* Valor numérico */}
                    <p className="text-[1.6rem] font-semibold leading-none tracking-[-0.02em] text-white">
                      {stat.value}
                    </p>

                    {/* Rótulo */}
                    <p className="mt-1.5 text-[11px] leading-snug text-white/45">
                      {stat.label}
                    </p>

                    {/* Highlight de borda superior — como vidro molhado */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Selos de credibilidade — mais espaçados, melhor ritmo */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              {[
                { icon: <Star className="h-3.5 w-3.5 text-amber-400" />, text: "Mentoria especializada" },
                { icon: <Users className="h-3.5 w-3.5 text-cyan-400" />, text: "+25 mil alunos ativos" },
                { icon: <Zap className="h-3.5 w-3.5 text-violet-400" />, text: "Projetos reais" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-[11px] text-white/35 transition-colors duration-200 hover:text-white/55"
                >
                  {icon}
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ═══════════════════════════════════
              COLUNA DIREITA — núcleo vivo
              ═══════════════════════════════════ */}
          <motion.div
            variants={panelVariants}
            className="relative hidden items-center justify-center lg:flex [perspective:1600px]"
          >
            {/* Wrapper 3D que reage ao mouse - Area ampliada para acomodar a órbita */}
            <motion.div
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      rotateX: panelRotX,
                      rotateY: panelRotY,
                      x: panelShiftX,
                      y: panelShiftY,
                      transformStyle: "preserve-3d",
                    }
              }
              className="relative flex h-[540px] w-full max-w-[540px] items-center justify-center"
            >
              {/* ── Glow ambiente atrás de toda a composição ── */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.25, 0.4, 0.25], scale: [1, 1.08, 1] }
                }
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[80px]"
                aria-hidden="true"
              />
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.2, 0.32, 0.2], scale: [1, 1.1, 1] }
                }
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute h-[240px] w-[240px] rounded-full bg-violet-500/15 blur-[70px]"
                aria-hidden="true"
              />

              {/* ── Anel de órbita externo ── */}
              <motion.div
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute h-[420px] w-[420px] rounded-full border border-white/[0.07]"
                aria-hidden="true"
              />

              {/* ── Anel de órbita intermediário — tracejado ── */}
              <motion.div
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-white/[0.06]"
                aria-hidden="true"
              />

              {/* ── Anel interno — pulsa com o núcleo ── */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.06, 1], opacity: [0.04, 0.09, 0.04] }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[220px] w-[220px] rounded-full border border-white/[0.1] bg-cyan-500/[0.03]"
                aria-hidden="true"
              />

              {/* ── Nós orbitais ── */}
              {ORBITAL_NODES.map((node) => (
                <OrbitalNodeBadge
                  key={node.id}
                  node={node}
                  reduced={prefersReducedMotion}
                />
              ))}

              {/* ── Núcleo central: coração vivo do ecossistema ── */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Glow triplo de respiração — mais camadas = mais profundidade */}
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scale: [1, 1.22, 1], opacity: [0.28, 0.5, 0.28] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl"
                  aria-hidden="true"
                />
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scale: [1, 1.15, 1], opacity: [0.2, 0.38, 0.2] }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute h-28 w-28 rounded-full bg-violet-500/25 blur-2xl"
                  aria-hidden="true"
                />
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }
                  }
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute h-16 w-16 rounded-full bg-white/15 blur-xl"
                  aria-hidden="true"
                />

                {/* Card do núcleo — glassmorphism aprofundado */}
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[2.2rem] border border-white/[0.18] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02] shadow-[0_0_60px_-10px_rgba(6,182,212,0.4)] backdrop-blur-2xl">
                  {/* Partículas no interior do núcleo */}
                  <NucleusParticles reduced={prefersReducedMotion} />

                  {/* Ícone principal com rotação suave */}
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { rotate: [0, 6, -6, 0] }
                    }
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Radio className="h-9 w-9 text-cyan-300/90" aria-hidden="true" />
                  </motion.div>

                  {/* Labels do núcleo */}
                  <span className="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                    DevClub
                  </span>

                  {/* Borda superior brilhante — vidro com exposição à luz */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[2.2rem] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Borda esquerda luminosa sutil */}
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-px rounded-l-[2.2rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Pílula flutuante "ao vivo" — acima do núcleo */}
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { y: [0, -6, 0] }
                  }
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2"
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/25 bg-emerald-500/[0.1] px-3 py-1 text-[10px] font-semibold text-emerald-300 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    25k+ alunos online
                  </span>
                </motion.div>
              </div>

              {/* ── Painel de status inferior: Community Hub ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: EASE_PREMIUM }}
                className="absolute bottom-0 left-1/2 z-30 w-[17.5rem] -translate-x-1/2"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.05] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                  {/* Destaque de borda superior */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Cabeçalho */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                      Community Hub
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Ao vivo
                    </span>
                  </div>

                  {/* Métricas — bordas mais cuidadas */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { value: "25k+", label: "Alunos", color: "text-cyan-300" },
                      { value: "180+", label: "Empresas", color: "text-violet-300" },
                      { value: "7d", label: "Desafio", color: "text-emerald-300" },
                    ].map(({ value, label, color }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center rounded-xl border border-white/[0.07] bg-white/[0.04] py-2.5 transition-colors duration-200 hover:border-white/[0.13] hover:bg-white/[0.07]"
                      >
                        <span className={cn("text-[15px] font-semibold leading-none", color)}>
                          {value}
                        </span>
                        <span className="mt-1 text-[9px] text-white/35">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Barra de atividade — gradiente animado */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                      <motion.div
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { scaleX: [0.5, 0.82, 0.62, 0.91, 0.5] }
                        }
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      />
                    </div>
                    <span className="text-[9px] text-white/30">atividade</span>
                  </div>
                </div>
              </motion.div>

              {/* Reflexo de vidro sobre toda a composição */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Gradiente de transição elegante para a próxima seção ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(9,9,11,0.6) 60%, rgba(9,9,11,0.9) 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}