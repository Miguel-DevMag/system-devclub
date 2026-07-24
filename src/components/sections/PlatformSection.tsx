// Seção da plataforma DevClub — vitrine premium do produto

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MonitorPlay,
  Route,
  Users,
  Sparkles,
  FlaskConical,
  Award,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/shared/Badge";
import { platformFeatures } from "@/data/platform";
import AnimatedCardStack from "@/components/ui/animate-card-animation";

// ─── Mapeamento de ícones por identificador ───────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  "monitor-play": <MonitorPlay size={18} strokeWidth={1.5} />,
  route: <Route size={18} strokeWidth={1.5} />,
  users: <Users size={18} strokeWidth={1.5} />,
  sparkles: <Sparkles size={18} strokeWidth={1.5} />,
  "flask-conical": <FlaskConical size={18} strokeWidth={1.5} />,
  award: <Award size={18} strokeWidth={1.5} />,
};

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// ─── Variantes de animação ────────────────────────────────────────────────────

// Container com stagger nos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Item individual com fade + translação sutil
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

// Variante para o bloco visual principal
const visualVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

// ─── Sub-componente: cartão de métrica dentro da interface ────────────────────
function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-4 transition-colors duration-300",
        accent
          ? "border-violet-500/25 bg-violet-500/8 hover:border-violet-500/40"
          : "border-white/8 bg-white/4 hover:border-white/14",
      ].join(" ")}
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
        {label}
      </p>
      <p className="mt-2.5 text-base font-semibold tracking-tight text-white">
        {value}
      </p>
    </div>
  );
}

// ─── Sub-componente: cartão de funcionalidade ─────────────────────────────────
function FeatureCard({
  id,
  title,
  description,
  icon,
}: {
  id: string;
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <motion.article
      variants={itemVariants}
      // Hover elevação e brilho da borda — microinteração handcrafted
      whileHover={{
        y: -3,
        transition: { duration: 0.25, ease: EASE_PREMIUM },
      }}
      className="group relative rounded-3xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm
                 transition-colors duration-300 hover:border-white/16 hover:bg-white/6"
      aria-labelledby={`feature-title-${id}`}
    >
      {/* Brilho sutil no hover — glow interno no topo do card */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full
                   bg-gradient-to-r from-transparent via-white/20 to-transparent
                   opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Ícone com tratamento visual refinado */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10
                   bg-white/5 text-white/50 transition-all duration-300
                   group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-300"
      >
        {icon ? iconMap[icon] ?? <span className="text-xs">{icon}</span> : null}
      </div>

      <h3
        id={`feature-title-${id}`}
        className="mt-5 text-[0.9375rem] font-semibold tracking-tight text-white"
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-[1.7] text-white/55 transition-colors duration-300 group-hover:text-white/70">
        {description}
      </p>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export function PlatformSection() {
  // Referência para ativar animações somente quando visível
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="plataforma" className="relative overflow-hidden bg-neutral-950">
      {/* Atmosfera de fundo — luz ambiente radial suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(124,58,237,0.07) 0%, transparent 70%), " +
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(99,102,241,0.05) 0%, transparent 65%)",
        }}
      />

      <Container>
        <div ref={ref} className="space-y-16">

          {/* ── Cabeçalho da seção ───────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={visualVariants}
            className="max-w-2xl"
          >
            <Badge>Plataforma</Badge>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Uma plataforma moderna para aprender,{" "}
              <span className="text-white/45">praticar e evoluir.</span>
            </h2>

            <p className="mt-4 text-base leading-[1.75] text-white/55">
              A experiência do aluno não termina no conteúdo. Ela continua em
              um ambiente organizado, visual e pensado para o ritmo de estudo.
            </p>
          </motion.div>

          {/* ── Layout principal: interface + cards ──────────────────────── */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

            {/* ── Visual da interface da plataforma ──────────────────────── */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={visualVariants}
              className="relative"
            >
              {/* Brilho externo por trás do painel — sombra de cor */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Painel de glassmorphism externo */}
              <div
                className="relative rounded-[2rem] border border-white/10 bg-white/[0.04]
                           p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_32px_64px_-16px_rgba(0,0,0,0.6)]
                           backdrop-blur-xl"
              >
                {/* Interface interna — superfície escura com profundidade */}
                <div
                  className="rounded-[1.6rem] border border-white/8
                             bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_100%)]
                             bg-neutral-950 p-6 shadow-inner"
                >
                  {/* Barra de topo da interface */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* Pontos decorativos estilo janela de aplicativo */}
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
                        DevClub Platform
                      </span>
                    </div>

                    {/* Indicador de status online */}
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-[10px] font-medium text-emerald-400/80">
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Separador com gradiente */}
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                  {/* Bloco — Área do aluno */}
                  <div className="mt-5 rounded-2xl border border-white/8 bg-white/3 p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      <p className="text-sm font-semibold tracking-tight text-white">
                        Área do aluno
                      </p>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">
                      Acesso rápido a trilhas, aulas e progresso.
                    </p>
                  </div>

                  {/* Grid de métricas */}
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <MetricCard label="Aulas" value="Organizadas" />
                    <MetricCard label="Comunidade" value="Ativa" accent />
                  </div>

                  {/* Bloco — Playground */}
                  <div className="mt-3 rounded-2xl border border-white/8 bg-white/3 p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <p className="text-sm font-semibold tracking-tight text-white">
                        Playground de treinamento
                      </p>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">
                      Um espaço para testar ideias, praticar e acelerar a evolução.
                    </p>
                  </div>

                  {/* Linha de progresso decorativa */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Progresso da trilha
                      </span>
                      <span className="text-[10px] font-semibold text-violet-400">
                        67%
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
                        style={{ width: "67%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Grade de funcionalidades ────────────────────────────────── */}
            <div className="w-full flex flex-col items-center">
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="grid w-full gap-3 sm:grid-cols-2 lg:hidden"
              >
                {platformFeatures.map((feature) => (
                  <FeatureCard key={feature.id} {...feature} />
                ))}
              </motion.div>

              <div className="hidden w-full lg:flex items-center justify-center">
                <AnimatedCardStack />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}