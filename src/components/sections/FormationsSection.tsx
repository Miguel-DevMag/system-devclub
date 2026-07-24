// Seção de formações do DevClub — experiência premium de plataforma de aprendizado

import { motion, useReducedMotion } from "motion/react";
import {
  LayoutDashboard,
  Server,
  Layers3,
  Smartphone,
  Cpu,
  Braces,
  Code2,
  Palette,
  Sparkles,
  Bot,
  Brain,
  Workflow,
  BarChart3,
  Monitor,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { formations } from "@/data/formations";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { Formation } from "@/types/formation";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// Mapa de ícones Lucide para cada slug de ícone da formação
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "layout-dashboard": LayoutDashboard,
  server: Server,
  "layers-3": Layers3,
  smartphone: Smartphone,
  react: Cpu,
  cpu: Cpu,
  braces: Braces,
  "code-2": Code2,
  palette: Palette,
  sparkles: Sparkles,
  bot: Bot,
  brain: Brain,
  workflow: Workflow,
  "bar-chart-3": BarChart3,
  monitor: Monitor,
};

// Configuração visual de cada categoria — cor de acento e label de exibição
const categoryConfig: Record<
  string,
  { accent: string; pill: string; dot: string }
> = {
  Web: {
    accent: "from-blue-500/20 to-indigo-500/10",
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
  },
  Apps: {
    accent: "from-violet-500/20 to-purple-500/10",
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
  },
  Backend: {
    accent: "from-emerald-500/20 to-teal-500/10",
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  Fundamentos: {
    accent: "from-amber-500/20 to-orange-500/10",
    pill: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    dot: "bg-amber-400",
  },
  IA: {
    accent: "from-pink-500/20 to-rose-500/10",
    pill: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    dot: "bg-pink-400",
  },
  Automação: {
    accent: "from-cyan-500/20 to-sky-500/10",
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
  },
  Dados: {
    accent: "from-teal-500/20 to-green-500/10",
    pill: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    dot: "bg-teal-400",
  },
};

// Fallback para categorias não mapeadas
const defaultCategoryConfig = {
  accent: "from-white/10 to-white/5",
  pill: "bg-white/10 text-white/60 border-white/10",
  dot: "bg-white/40",
};

// Representação visual do nível de dificuldade com bolinhas preenchidas
function DifficultyDots({ level }: { level: Formation["level"] }) {
  const levelMap: Record<Formation["level"], number> = {
    Iniciante: 1,
    Intermediário: 2,
    Avançado: 3,
    "Todos os níveis": 3,
  };

  const filled = levelMap[level] ?? 1;
  const isAllLevels = level === "Todos os níveis";

  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-all",
            isAllLevels
              ? "bg-gradient-to-r from-violet-400 to-blue-400"
              : i <= filled
                ? "bg-white/70"
                : "bg-white/15"
          )}
        />
      ))}
      <span className="ml-1 text-[11px] font-medium text-white/45 tracking-wide">
        {level}
      </span>
    </div>
  );
}

// Card individual de formação com glassmorphism e hover premium
function FormationCard({
  formation,
  index,
}: {
  formation: Formation;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const config = categoryConfig[formation.category] ?? defaultCategoryConfig;
  const Icon = iconMap[formation.icon ?? ""] ?? Code2;

  // Variante de animação de entrada com stagger
  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.06,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        // Base do card — glassmorphism com borda sutil
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl",
        // Transição suave para hover
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.06]",
        // Sombra em camadas para profundidade
        "shadow-[0_1px_1px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2),0_16px_32px_rgba(0,0,0,0.15)]",
        "hover:shadow-[0_2px_2px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.25),0_32px_64px_rgba(0,0,0,0.2)]"
      )}
    >
      {/* Gradiente de acento no topo do card — cor baseada na categoria */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-white/20 to-transparent",
          "opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        )}
      />

      {/* Glow sutil no hover — radial baseado na categoria */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
          `bg-gradient-to-br ${config.accent}`
        )}
      />

      {/* Conteúdo principal do card */}
      <div className="relative flex flex-1 flex-col p-6">
        {/* Cabeçalho: ícone + badge de categoria */}
        <div className="flex items-start justify-between gap-3">
          {/* Ícone da formação com fundo glassmorphism */}
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
              "border border-white/[0.08] bg-white/[0.06] backdrop-blur-sm",
              "transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-white/[0.1]"
            )}
          >
            <Icon className="h-4.5 w-4.5 text-white/70 transition-colors duration-300 group-hover:text-white/90" />
          </div>

          {/* Badge de categoria — pill com cor por categoria */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide",
              config.pill
            )}
          >
            <span className={cn("h-1 w-1 rounded-full", config.dot)} />
            {formation.category}
          </span>
        </div>

        {/* Título e descrição da formação */}
        <div className="mt-4 flex-1">
          <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
            {formation.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/55">
            {formation.description}
          </p>
        </div>

        {/* Rodapé: nível + duração + CTA */}
        <div className="mt-5 space-y-4">
          {/* Metadados — nível e duração */}
          <div className="flex items-center justify-between">
            <DifficultyDots level={formation.level} />

            {/* Duração com ícone refinado */}
            {formation.duration && (
              <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                <Clock className="h-3 w-3 shrink-0" />
                <span className="font-medium tracking-wide">
                  {formation.duration}
                </span>
              </div>
            )}
          </div>

          {/* Linha separadora sutil */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* Botão de ação — minimalista com seta */}
          <a
            href="#hero"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "group/btn -mx-1 w-[calc(100%+0.5rem)] justify-between px-3",
              "text-white/50 transition-colors duration-300",
              "hover:bg-white/[0.06] hover:text-white/90"
            )}
          >
            <span className="text-[13px] font-medium">Ver formação</span>
            <ArrowRight
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                "group-hover/btn:translate-x-0.5"
              )}
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// Seção principal de formações
export function FormationsSection() {
  const shouldReduceMotion = useReducedMotion();

  // Variantes de animação para o cabeçalho da seção
  const headingVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_PREMIUM },
    },
  };

  return (
    <Section id="formacoes" className="bg-neutral-950">
      {/* Luzes radiais de atmosfera — sem poluição visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz radial principal — canto superior esquerdo */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[120px]" />
        {/* Luz radial secundária — canto inferior direito */}
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-violet-600/[0.04] blur-[140px]" />
        {/* Luz central muito sutil */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.01] blur-[100px]" />
      </div>

      <Container>
        <div className="space-y-16">
          {/* Cabeçalho da seção com animação de entrada */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl"
          >
            <Badge>Formações</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Trilhas organizadas para aprender do zero ao avançado."
                description="Cada formação foi pensada para guiar a evolução com clareza, prática e uma estrutura que faz sentido para o mercado."
              />
            </div>

            {/* Contador de formações disponíveis — detalhe premium */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs text-white/40 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                <span className="font-medium">
                  {formations.length} formações disponíveis
                </span>
              </div>
            </div>
          </motion.div>

          {/* Grade de cards de formação com layout responsivo */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {formations.map((formation, index) => (
              <FormationCard
                key={formation.id}
                formation={formation}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}