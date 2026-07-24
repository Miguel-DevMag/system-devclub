// Seção da comunidade — hub digital imersivo da experiência DevClub.
// Comunica que existe um ecossistema vivo, pessoas estudando juntas
// e um ambiente colaborativo real por trás da plataforma.

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  Users,
  Radio,
  BookOpen,
  MessageSquare,
  Zap,
  Star,
  TrendingUp,
  Monitor,
  Code2,
  Coffee,
} from "lucide-react";

import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────
// Variantes de animação com orquestração em cascata
// ─────────────────────────────────────────────────────────────────

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const sceneVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

// ─────────────────────────────────────────────────────────────────
// Dados dos nós do mapa de campus digital
// ─────────────────────────────────────────────────────────────────

interface RoomNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  // Posição relativa ao centro do container (em %)
  top: string;
  left: string;
  // Paleta de cor do card
  accent: string;
  glowColor: string;
  status: "live" | "active" | "open";
  count?: string;
  floatDelay: number;
  floatDuration: number;
}

const ROOMS: RoomNode[] = [
  {
    id: "sala-estudos",
    label: "Sala de estudos",
    sublabel: "Estudo em grupo",
    icon: <BookOpen className="h-4 w-4" />,
    top: "12%",
    left: "8%",
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/25",
    glowColor: "bg-cyan-500/30",
    status: "live",
    count: "142",
    floatDelay: 0,
    floatDuration: 6,
  },
  {
    id: "call-ao-vivo",
    label: "Call ao vivo",
    sublabel: "Dev + Mentoria",
    icon: <Monitor className="h-4 w-4" />,
    top: "8%",
    left: "58%",
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/25",
    glowColor: "bg-violet-500/30",
    status: "live",
    count: "38",
    floatDelay: 1.2,
    floatDuration: 7,
  },
  {
    id: "mentoria",
    label: "Mentoria 1:1",
    sublabel: "Sessão privada",
    icon: <Star className="h-4 w-4" />,
    top: "63%",
    left: "72%",
    accent: "from-amber-500/20 to-amber-500/5 border-amber-500/25",
    glowColor: "bg-amber-500/30",
    status: "active",
    count: "12",
    floatDelay: 0.6,
    floatDuration: 8,
  },
  {
    id: "projetos",
    label: "Projetos em grupo",
    sublabel: "Colaboração ativa",
    icon: <Code2 className="h-4 w-4" />,
    top: "68%",
    left: "5%",
    accent: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/25",
    glowColor: "bg-emerald-500/30",
    status: "active",
    count: "27",
    floatDelay: 1.8,
    floatDuration: 6.5,
  },
  {
    id: "network",
    label: "Networking",
    sublabel: "+180 empresas",
    icon: <TrendingUp className="h-4 w-4" />,
    top: "38%",
    left: "78%",
    accent: "from-pink-500/20 to-pink-500/5 border-pink-500/25",
    glowColor: "bg-pink-500/30",
    status: "open",
    count: "180+",
    floatDelay: 2.4,
    floatDuration: 9,
  },
  {
    id: "forum",
    label: "Fórum técnico",
    sublabel: "Dúvidas e respostas",
    icon: <MessageSquare className="h-4 w-4" />,
    top: "42%",
    left: "2%",
    accent: "from-sky-500/20 to-sky-500/5 border-sky-500/25",
    glowColor: "bg-sky-500/30",
    status: "active",
    count: "8.4k",
    floatDelay: 3,
    floatDuration: 7.5,
  },
];

// Cores do indicador de status
const STATUS_CONFIG = {
  live: { dot: "bg-red-400", label: "Ao vivo", ping: "bg-red-400" },
  active: { dot: "bg-emerald-400", label: "Ativo", ping: "bg-emerald-400" },
  open: { dot: "bg-cyan-400", label: "Aberto", ping: "bg-cyan-400" },
} as const;

// ─────────────────────────────────────────────────────────────────
// Subcomponente: card de sala flutuante
// ─────────────────────────────────────────────────────────────────

function RoomCard({
  room,
  reduced,
}: {
  room: RoomNode;
  reduced: boolean | null;
}) {
  const cfg = STATUS_CONFIG[room.status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.6 + room.floatDelay * 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ position: "absolute", top: room.top, left: room.left }}
      className="z-10"
    >
      {/* Flutuação suave e independente por nó */}
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                y: [0, -8, 0],
                rotate: [0, 0.8, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: room.floatDuration,
                delay: room.floatDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Halo de glow atrás do card */}
        <div
          className={cn(
            "absolute -inset-3 rounded-2xl opacity-30 blur-xl",
            room.glowColor
          )}
          aria-hidden="true"
        />

        {/* Card principal */}
        <div
          className={cn(
            "relative flex min-w-[148px] flex-col gap-1.5 rounded-2xl border bg-gradient-to-br p-3.5 backdrop-blur-xl shadow-xl shadow-black/30",
            room.accent
          )}
        >
          {/* Linha superior: ícone + status */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-white/70">{room.icon}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white/75">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                {room.status === "live" && (
                  <span
                    className={cn(
                      "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                      cfg.ping
                    )}
                  />
                )}
                <span
                  className={cn(
                    "relative inline-flex h-1.5 w-1.5 rounded-full",
                    cfg.dot
                  )}
                />
              </span>
              {cfg.label}
            </span>
          </div>

          {/* Label e sublabel */}
          <p className="text-[12px] font-semibold leading-tight text-white">
            {room.label}
          </p>
          <p className="text-[10px] text-white/50">{room.sublabel}</p>

          {/* Contagem de participantes */}
          {room.count && (
            <div className="mt-1 flex items-center gap-1 text-[10px] text-white/45">
              <Users className="h-3 w-3" aria-hidden="true" />
              <span>{room.count}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Subcomponente: linha de conexão SVG entre nó e centro
// ─────────────────────────────────────────────────────────────────

interface ConnectionProps {
  // Coordenadas em % relativas ao container da cena
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

function ConnectionLine({ x1, y1, x2, y2, delay }: ConnectionProps) {
  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
      strokeDasharray="4 6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    />
  );
}

// Pares de conexão: [nó] -> [centro] (em % do container da cena)
// Os nós têm posições top/left relativas ao container de 600px de altura
const CENTER = { x: 50, y: 50 };

const CONNECTIONS: ConnectionProps[] = [
  { x1: 14, y1: 18, x2: CENTER.x, y2: CENTER.y, delay: 1.1 },
  { x1: 66, y1: 14, x2: CENTER.x, y2: CENTER.y, delay: 1.3 },
  { x1: 80, y1: 64, x2: CENTER.x, y2: CENTER.y, delay: 1.5 },
  { x1: 14, y1: 74, x2: CENTER.x, y2: CENTER.y, delay: 1.7 },
  { x1: 87, y1: 43, x2: CENTER.x, y2: CENTER.y, delay: 1.9 },
  { x1: 8, y1: 48, x2: CENTER.x, y2: CENTER.y, delay: 2.1 },
];

// ─────────────────────────────────────────────────────────────────
// Subcomponente: avatares simulados de alunos ativos
// ─────────────────────────────────────────────────────────────────

const AVATAR_INITIALS = ["MF", "AK", "LS", "RC", "JP", "BT", "GS", "VM"];
const AVATAR_COLORS = [
  "bg-cyan-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-sky-500",
  "bg-orange-500",
  "bg-teal-500",
];

// ─────────────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────────────

export function CommunitySection() {
  const reduced = useReducedMotion();

  // Referência para detecção de entrada na viewport
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Parallax leve do mouse aplicado na cena central
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 80, damping: 20, mass: 0.8 };
  const sceneX = useSpring(mouseX, springCfg);
  const sceneY = useSpring(mouseY, springCfg);
  const sceneRotX = useTransform(sceneY, (v) => v * -4);
  const sceneRotY = useTransform(sceneX, (v) => v * 5);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduced) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="comunidade"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-neutral-950 py-24 md:py-32"
    >
      {/* ── Atmosfera de fundo da seção ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Glow ciano — polo de luz dominante */}
        <motion.div
          animate={
            reduced
              ? undefined
              : { opacity: [0.18, 0.32, 0.18], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/20 blur-[140px]"
        />
        {/* Glow violeta — contraponto cromático */}
        <motion.div
          animate={
            reduced
              ? undefined
              : { opacity: [0.14, 0.25, 0.14], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-violet-500/18 blur-[130px]"
        />
        {/* Glow esmeralda — profundidade inferior */}
        <motion.div
          animate={
            reduced
              ? undefined
              : { opacity: [0.1, 0.2, 0.1], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]"
        />
        {/* Grade técnica sutil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Vinheta nas bordas */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 45%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════
            CABEÇALHO DA SEÇÃO
            ═══════════════════════════ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariants} className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-violet-300/80 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              Comunidade
            </span>
          </motion.div>

          {/* Título e descrição — máx. 2 colunas no desktop */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={fadeUpVariants} className="max-w-2xl">
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
                Um espaço vivo para{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  estudar, interagir
                </span>{" "}
                e evoluir junto.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-md text-sm leading-relaxed text-white/50 lg:text-right"
            >
              No DevClub você não estuda sozinho. Existe uma comunidade real,
              salas temáticas, calls ao vivo e mentores disponíveis — tudo
              dentro de um ecossistema conectado.
            </motion.p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            CENA IMERSIVA — mapa do campus digital
            ═══════════════════════════════════════════════ */}
        <motion.div
          variants={sceneVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            style={
              reduced
                ? undefined
                : {
                    rotateX: sceneRotX,
                    rotateY: sceneRotY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative"
            // perspective aplicada via estilo inline para ter controle exato
          >
            {/* Container externo da cena */}
            <div
              className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-2xl shadow-black/60 backdrop-blur-sm"
              style={{ height: "560px", perspective: "1200px" }}
            >
              {/* Fundo interno da cena: gradiente radial escuro */}
              <div
                className="absolute inset-0 rounded-[2.5rem]"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* SVG de linhas de conexão — ficam atrás dos cards */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {CONNECTIONS.map((conn, i) => (
                  <ConnectionLine key={i} {...conn} />
                ))}
              </svg>

              {/* Anel decorativo externo — órbita externa */}
              <motion.div
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"
                aria-hidden="true"
              />

              {/* Anel decorativo intermediário */}
              <motion.div
                animate={reduced ? undefined : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
                aria-hidden="true"
              />

              {/* Cards de salas — nós do campus */}
              {ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} reduced={reduced} />
              ))}

              {/* ── NÚCLEO CENTRAL: coração do hub ── */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                {/* Glow de respiração */}
                <motion.div
                  animate={
                    reduced
                      ? undefined
                      : { scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-10 rounded-full bg-cyan-500/20 blur-2xl"
                  aria-hidden="true"
                />
                <motion.div
                  animate={
                    reduced
                      ? undefined
                      : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -inset-6 rounded-full bg-violet-500/20 blur-xl"
                  aria-hidden="true"
                />

                {/* Card do núcleo */}
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.03] shadow-2xl shadow-black/60 backdrop-blur-2xl">
                  {/* Ícone pulsante */}
                  <motion.div
                    animate={
                      reduced
                        ? undefined
                        : { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
                    }
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Radio className="h-9 w-9 text-cyan-300" aria-hidden="true" />
                  </motion.div>
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    DevClub
                  </span>
                  <span className="mt-0.5 text-[9px] text-white/35">Hub</span>

                  {/* Reflexo de vidro */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-60"
                    aria-hidden="true"
                  />
                </div>

                {/* Micro-rótulo flutuante acima do núcleo */}
                <motion.div
                  animate={reduced ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2"
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/25 bg-emerald-500/[0.1] px-3 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur-sm">
                    <span
                      className="relative flex h-1.5 w-1.5"
                      aria-hidden="true"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    25k+ alunos online
                  </span>
                </motion.div>
              </div>

              {/* Reflexo premium sobre toda a cena */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Rótulo do ambiente — canto inferior esquerdo */}
              <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                <Zap className="h-3 w-3 text-cyan-400" aria-hidden="true" />
                <span className="text-[10px] font-medium text-white/50">
                  Campus Digital DevClub
                </span>
              </div>

              {/* Indicador de atividade — canto inferior direito */}
              <motion.div
                animate={reduced ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
                </span>
                <span className="text-[10px] font-medium text-white/50">
                  Transmissão ao vivo
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            CARDS DE APOIO — callouts abaixo da cena
            ═══════════════════════════════════════════════ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <Coffee className="h-4 w-4 text-amber-400" />,
              title: "Sala de estudos",
              desc: "Estude com outros alunos em salas temáticas abertas.",
              accent: "hover:border-amber-500/25",
            },
            {
              icon: <Monitor className="h-4 w-4 text-violet-400" />,
              title: "Calls ao vivo",
              desc: "Participe de sessões gravadas e transmissões em tempo real.",
              accent: "hover:border-violet-500/25",
            },
            {
              icon: <Star className="h-4 w-4 text-cyan-400" />,
              title: "Mentoria 1:1",
              desc: "Acesso direto a mentores experientes para tirar dúvidas.",
              accent: "hover:border-cyan-500/25",
            },
            {
              icon: <TrendingUp className="h-4 w-4 text-emerald-400" />,
              title: "Aceleração de carreira",
              desc: "+180 empresas conectadas ao ecossistema DevClub.",
              accent: "hover:border-emerald-500/25",
            },
          ].map(({ icon, title, desc, accent }) => (
            <motion.div
              key={title}
              variants={fadeUpVariants}
              whileHover={reduced ? undefined : { y: -4 }}
              className={cn(
                "group rounded-2xl border border-white/[0.09] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]",
                accent
              )}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                {icon}
              </div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/45">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════
            LINHA FINAL — avatares + prova social
            ═══════════════════════════════════════ */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Pilha de avatares simulados */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATAR_INITIALS.map((initials, i) => (
                <div
                  key={initials}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-950 text-[10px] font-bold text-white",
                    AVATAR_COLORS[i]
                  )}
                  title={`Aluno ${initials}`}
                  aria-label={`Aluno ${initials}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/45">
              <span className="font-semibold text-white/70">+25 mil alunos</span>{" "}
              já fazem parte da comunidade
            </p>
          </div>

          {/* CTA textual sutil */}
          <a
            href="#formacoes"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400/80 transition-colors hover:text-cyan-300"
          >
            Entrar na comunidade
            <motion.span
              animate={reduced ? undefined : { x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}