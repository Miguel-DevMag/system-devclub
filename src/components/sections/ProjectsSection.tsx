// Seção de projetos reais — vitrine de portfólio premium

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

// ─── Variantes de animação ────────────────────────────────────────────────────

// Variante do container: cria o efeito de stagger entre os filhos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Variante de cada card: entrada suave com fade + deslocamento vertical
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Paleta de cores por projeto (índice circular) ───────────────────────────

// Cada projeto recebe uma identidade visual única via gradientes e cores de acento
const PROJECT_PALETTE = [
  {
    // Pulse Dashboard — azul índigo analítico
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.18)",
    accentBorder: "rgba(99,102,241,0.35)",
    glowBg: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.22) 0%, transparent 70%)",
    gradA: "#312e81",
    gradB: "#1e1b4b",
    lineColor: "rgba(99,102,241,0.5)",
  },
  {
    // Orbit Academy — verde teal educacional
    accent: "#14b8a6",
    accentSoft: "rgba(20,184,166,0.18)",
    accentBorder: "rgba(20,184,166,0.35)",
    glowBg: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.20) 0%, transparent 70%)",
    gradA: "#134e4a",
    gradB: "#0f2d2a",
    lineColor: "rgba(20,184,166,0.5)",
  },
  {
    // Nexa Flow — violeta automação
    accent: "#a855f7",
    accentSoft: "rgba(168,85,247,0.18)",
    accentBorder: "rgba(168,85,247,0.35)",
    glowBg: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(168,85,247,0.22) 0%, transparent 70%)",
    gradA: "#3b0764",
    gradB: "#1a0533",
    lineColor: "rgba(168,85,247,0.5)",
  },
  {
    // Atlas Commerce — âmbar conversão
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.18)",
    accentBorder: "rgba(245,158,11,0.30)",
    glowBg: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%)",
    gradA: "#451a03",
    gradB: "#1c0a00",
    lineColor: "rgba(245,158,11,0.5)",
  },
] as const;

// ─── Preview abstrata de cada projeto ────────────────────────────────────────

// Retorna um mock de interface diferente para cada índice de projeto,
// usando apenas HTML + classes Tailwind + gradientes inline (sem imagens remotas)
function ProjectPreview({
  index,
  palette,
  reduced,
}: {
  index: number;
  palette: (typeof PROJECT_PALETTE)[number];
  reduced: boolean | null;
}) {
  const { accent, accentSoft, lineColor, gradA, gradB } = palette;

  // ── Preview 0 · Pulse Dashboard — gráfico de barras + métricas ──────────────
  if (index === 0) {
    return (
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden p-6"
        style={{
          background: `linear-gradient(145deg, ${gradA}cc 0%, ${gradB}dd 100%)`,
        }}
      >
        {/* Linhas de grade de fundo */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-white/10"
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}
        </div>

        {/* Bloco de KPIs no topo */}
        <div className="flex w-full max-w-xs gap-3">
          {["+24%", "R$ 1.2M", "98ms"].map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-lg border px-2 py-1.5 text-center"
              style={{ borderColor: `${accent}44`, background: accentSoft }}
            >
              <p className="text-[10px] font-semibold" style={{ color: accent }}>
                {val}
              </p>
              <p className="mt-0.5 text-[8px] text-white/40">
                {["Crescimento", "Receita", "Latência"][i]}
              </p>
            </div>
          ))}
        </div>

        {/* Gráfico de barras minimalista */}
        <div className="flex w-full max-w-xs items-end gap-1.5 px-2">
          {[55, 72, 48, 88, 65, 94, 71, 80].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h * 0.7}px`,
                background: i === 5 ? accent : `${accent}50`,
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: reduced ? 1 : 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Linha de status inferior */}
        <div
          className="flex w-full max-w-xs items-center gap-2 rounded-lg border px-3 py-1.5"
          style={{ borderColor: `${accent}33`, background: `${accent}10` }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ background: accent }}
          />
          <span className="text-[9px] text-white/50">Sistema online · atualizado agora</span>
        </div>
      </div>
    );
  }

  // ── Preview 1 · Orbit Academy — trilha de aprendizado + progresso ────────────
  if (index === 1) {
    const modules = [
      { name: "Fundamentos React", pct: 100 },
      { name: "Hooks & Context", pct: 78 },
      { name: "TypeScript Avançado", pct: 42 },
      { name: "Deploy & CI/CD", pct: 10 },
    ];
    return (
      <div
        className="relative flex h-full w-full flex-col justify-center gap-3 overflow-hidden px-6 py-5"
        style={{
          background: `linear-gradient(145deg, ${gradA}cc 0%, ${gradB}dd 100%)`,
        }}
      >
        {/* Cabeçalho do painel */}
        <div className="flex items-center gap-2">
          <div
            className="rounded-md px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest"
            style={{ background: accentSoft, color: accent }}
          >
            Trilha Full Stack
          </div>
          <span className="text-[9px] text-white/30">4 módulos</span>
        </div>

        {/* Módulos com barra de progresso */}
        {modules.map((mod, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/70">{mod.name}</span>
              <span className="text-[9px]" style={{ color: accent }}>
                {mod.pct}%
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full" style={{ background: `${accent}20` }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${mod.pct}%`,
                  background: accent,
                  transformOrigin: "left",
                }}
                initial={{ scaleX: reduced ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}

        {/* Rodapé com streak */}
        <div
          className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-1.5"
          style={{ borderColor: `${accent}33`, background: `${accent}10` }}
        >
          <span className="text-[9px]" style={{ color: accent }}>
            🔥
          </span>
          <span className="text-[9px] text-white/50">14 dias de streak · 320 XP conquistados</span>
        </div>
      </div>
    );
  }

  // ── Preview 2 · Nexa Flow — diagrama de automação com nós ───────────────────
  if (index === 2) {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden p-6"
        style={{
          background: `linear-gradient(145deg, ${gradA}cc 0%, ${gradB}dd 100%)`,
        }}
      >
        {/* Linhas conectoras SVG */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          preserveAspectRatio="none"
        >
          <line x1="22%" y1="50%" x2="42%" y2="35%" stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="22%" y1="50%" x2="42%" y2="65%" stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="60%" y1="35%" x2="78%" y2="50%" stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="60%" y1="65%" x2="78%" y2="50%" stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Nós do fluxo */}
        <div className="relative flex w-full max-w-xs items-center justify-between">
          {/* Nó de entrada */}
          <div className="flex flex-col items-center gap-1">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border text-[10px] font-bold"
              style={{ borderColor: `${accent}55`, background: accentSoft, color: accent }}
            >
              IN
            </div>
            <span className="text-[8px] text-white/40">Webhook</span>
          </div>

          {/* Nós intermediários */}
          <div className="flex flex-col gap-2">
            {["Filter", "Transform"].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div
                  className="flex h-8 w-16 items-center justify-center rounded-lg border text-[9px] font-medium"
                  style={{ borderColor: `${accent}44`, background: `${accent}15`, color: accent }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Nó de saída */}
          <div className="flex flex-col items-center gap-1">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border text-[10px] font-bold"
              style={{ borderColor: `${accent}55`, background: accentSoft, color: accent }}
            >
              OUT
            </div>
            <span className="text-[8px] text-white/40">DB + API</span>
          </div>
        </div>

        {/* Label de status */}
        <div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border px-3 py-1"
          style={{ borderColor: `${accent}33`, background: `${accent}10` }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          <span className="text-[9px] text-white/50">3 processos ativos</span>
        </div>
      </div>
    );
  }

  // ── Preview 3 · Atlas Commerce — grid de produto + carrinho ─────────────────
  if (index === 3) {
    const items = [
      { name: "Sneaker Pro", price: "R$ 349" },
      { name: "Urban Jacket", price: "R$ 529" },
      { name: "Canvas Bag", price: "R$ 189" },
      { name: "Retro Watch", price: "R$ 799" },
    ];
    return (
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden p-5"
        style={{
          background: `linear-gradient(145deg, ${gradA}cc 0%, ${gradB}dd 100%)`,
        }}
      >
        {/* Grid de produtos */}
        <div className="grid w-full max-w-xs grid-cols-2 gap-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border p-2"
              style={{ borderColor: `${accent}33`, background: `${accent}0d` }}
            >
              {/* Placeholder visual do produto */}
              <div
                className="mb-1.5 h-10 w-full rounded-lg"
                style={{ background: `${accent}25` }}
              />
              <p className="text-[9px] font-medium text-white/70">{item.name}</p>
              <p className="text-[10px] font-semibold" style={{ color: accent }}>
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Botão de checkout */}
        <div
          className="flex w-full max-w-xs items-center justify-between rounded-lg border px-3 py-2"
          style={{ borderColor: `${accent}44`, background: accentSoft }}
        >
          <span className="text-[9px] text-white/60">2 itens · R$ 878</span>
          <span
            className="rounded-md px-2 py-0.5 text-[9px] font-semibold"
            style={{ background: accent, color: "#000" }}
          >
            Finalizar
          </span>
        </div>
      </div>
    );
  }

  // Fallback: nunca deve ser alcançado com 4 projetos, mas garante tipagem
  return null;
}

// ─── Card individual de projeto ───────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  // Cards de destaque recebem tratamento visual mais proeminente
  featured?: boolean;
  reduced: boolean | null;
}

function ProjectCard({ project, index, featured = false, reduced }: ProjectCardProps) {
  const palette = PROJECT_PALETTE[index % PROJECT_PALETTE.length];
  const { accent, accentSoft, accentBorder, glowBg } = palette;

  // Número do projeto com zero à esquerda para estética editorial
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduced
          ? {}
          : {
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
      style={{
        // Borda com cor de acento levemente aplicada
        boxShadow: `0 0 0 1px ${accentBorder}, 0 4px 32px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Brilho de hover na borda superior */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      {/* ── Área de preview visual ── */}
      <div
        className="relative overflow-hidden"
        style={{
          // Cards em destaque recebem preview mais alta
          aspectRatio: featured ? "16/9" : "16/10",
        }}
      >
        {/* Glow de fundo com a cor do projeto */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: glowBg }}
        />

        {/* Número do projeto — canto superior esquerdo */}
        <div className="absolute left-4 top-4 z-10">
          <span
            className="rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium tracking-widest"
            style={{
              borderColor: `${accent}44`,
              background: accentSoft,
              color: accent,
            }}
          >
            {projectNumber}
          </span>
        </div>

        {/* Preview abstrata gerada por índice */}
        <div className="absolute inset-0">
          <ProjectPreview index={index} palette={palette} reduced={reduced} />
        </div>

        {/* Gradiente inferior para fundir preview com corpo do card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent" />
      </div>

      {/* ── Corpo do card ── */}
      <div className="flex flex-1 flex-col gap-3 p-5 pt-4">
        {/* Título */}
        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="flex-1 text-sm leading-6 text-white/55">
          {project.description}
        </p>

        {/* Stack de tecnologias — chips técnicos refinados */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide transition-colors duration-200"
              style={{
                borderColor: `${accent}30`,
                background: `${accent}0c`,
                color: `${accent}cc`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Linha decorativa de acento na base do card */}
      <div
        className="h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
      />
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function ProjectsSection() {
  // Respeita a preferência de redução de movimento do sistema operacional
  const reduced = useReducedMotion();

  return (
    <Section id="projetos" className="bg-neutral-950">
      {/* Atmosfera de fundo — gradientes radiais sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz ambiente esquerda — índigo */}
        <div
          className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
        {/* Luz ambiente direita — violeta */}
        <div
          className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
        />
        {/* Grade pontilhada de fundo */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container>
        <div className="space-y-14">
          {/* ── Cabeçalho da seção ── */}
          <motion.div
            className="max-w-3xl"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Projetos reais</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Prática de verdade para aprender construindo."
                description="Os projetos mostram que o foco é entregar solução, não apenas assistir conteúdo. É assim que a evolução ganha força."
              />
            </div>
          </motion.div>

          {/* ── Grid de projetos ── */}
          {/*
            Layout editorial: no desktop, dois cards laterais ganham destaque
            visual (aspect ratio mais alto no preview) graças à prop `featured`.
            Tablet: duas colunas equilibradas.
            Mobile: coluna única.
          */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                // Primeiro e último card ganham destaque visual no grid
                featured={index === 0 || index === projects.length - 1}
                reduced={reduced}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}