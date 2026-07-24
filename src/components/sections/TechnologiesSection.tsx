// Seção de tecnologias — vitrine técnica premium do DevClub

"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechIcons } from "@/components/shared/TechIcons";
import { technologies } from "@/data/technologies";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Technology {
  id: string;
  name: string;
  category: string;
  description?: string;
  icon?: string;
}

// ─── Mapa de cores por categoria ──────────────────────────────────────────────

// Cada categoria recebe uma cor de destaque sutil e um símbolo visual
const CATEGORY_STYLE: Record<
  string,
  { accent: string; border: string; glow: string; symbol: string }
> = {
  "Front End":  { accent: "text-sky-400",     border: "border-sky-500/20",    glow: "shadow-sky-500/10",    symbol: "◈" },
  Linguagem:    { accent: "text-violet-400",  border: "border-violet-500/20", glow: "shadow-violet-500/10", symbol: "λ" },
  "Back End":   { accent: "text-emerald-400", border: "border-emerald-500/20",glow: "shadow-emerald-500/10",symbol: "⬡" },
  Estrutura:    { accent: "text-amber-400",   border: "border-amber-500/20",  glow: "shadow-amber-500/10",  symbol: "▣" },
  Estilo:       { accent: "text-pink-400",    border: "border-pink-500/20",   glow: "shadow-pink-500/10",   symbol: "✦" },
  Fluxo:        { accent: "text-orange-400",  border: "border-orange-500/20", glow: "shadow-orange-500/10", symbol: "⎇" },
  Integração:   { accent: "text-cyan-400",    border: "border-cyan-500/20",   glow: "shadow-cyan-500/10",   symbol: "⬡" },
  IA:           { accent: "text-indigo-400",  border: "border-indigo-500/20", glow: "shadow-indigo-500/10", symbol: "◎" },
  Automação:    { accent: "text-teal-400",    border: "border-teal-500/20",   glow: "shadow-teal-500/10",   symbol: "⟳" },
  Dados:        { accent: "text-rose-400",    border: "border-rose-500/20",   glow: "shadow-rose-500/10",   symbol: "▦" },
};

// Estilo padrão para categorias não mapeadas
const DEFAULT_STYLE = {
  accent: "text-white/60",
  border: "border-white/10",
  glow: "shadow-white/5",
  symbol: "·",
};

function getCategoryStyle(category: string) {
  return CATEGORY_STYLE[category] ?? DEFAULT_STYLE;
}

// ─── Variantes de animação ────────────────────────────────────────────────────

// Container com stagger nos filhos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.1,
    },
  },
};

// Cada card entra com fade + translate suave
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // easing premium suave
    },
  },
};

// Cabeçalho da seção com entrada independente
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Componente do card individual ───────────────────────────────────────────

function TechCard({ tech }: { tech: Technology }) {
  const style = getCategoryStyle(tech.category);

  return (
    <motion.article
      variants={cardVariants}
      // Hover com lift, brilho e escala sutil — CSS puro para performance
      whileHover={{
        y: -4,
        scale: 1.015,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      className={[
        // Base do card — glassmorphism refinado
        "group relative flex flex-col gap-4 overflow-hidden",
        "rounded-2xl border bg-white/[0.03] p-6 backdrop-blur-md",
        "transition-colors duration-300",
        // Borda e sombra dinâmicas pela categoria
        style.border,
        `hover:shadow-lg ${style.glow}`,
        // Borda interna mais brilhante no hover
        "hover:bg-white/[0.06]",
      ].join(" ")}
    >
      {/* Reflexo de luz no canto superior — atmosfera premium */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, var(--tw-gradient-stops))`,
        }}
        aria-hidden="true"
      />

      {/* Linha de topo colorida — identidade por categoria */}
      <div
        className={[
          "absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-current to-transparent",
          "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          style.accent,
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Cabeçalho do card: símbolo + categoria */}
      <header className="flex items-start justify-between gap-2">
        {/* Ícone visual tipográfico por categoria */}
        <span
          className={[
            "flex h-9 w-9 items-center justify-center rounded-lg",
            "border border-white/8 bg-white/5 text-base font-semibold",
            "transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/10",
            style.accent,
          ].join(" ")}
          aria-hidden="true"
        >
          {TechIcons[tech.name] || style.symbol}
        </span>

        {/* Pílula de categoria — rótulo técnico sutil */}
        <span
          className={[
            "inline-flex items-center rounded-full px-2.5 py-0.5",
            "border text-[10px] font-medium uppercase tracking-widest",
            "border-white/8 bg-white/5 text-white/45",
            "transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/60",
          ].join(" ")}
        >
          {tech.category}
        </span>
      </header>

      {/* Nome da tecnologia */}
      <div className="flex-1">
        <h3
          className={[
            "text-lg font-semibold tracking-tight",
            "text-white/90 transition-colors duration-300 group-hover:text-white",
          ].join(" ")}
        >
          {tech.name}
        </h3>

        {/* Descrição — exibida apenas quando disponível */}
        {tech.description ? (
          <p className="mt-2 text-sm leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/60">
            {tech.description}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function TechnologiesSection() {
  // Gatilho de animação quando a seção entra no viewport
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="tecnologias" className="bg-neutral-950">
      {/* ── Atmosfera de fundo — luzes ambiente ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Luz radial central suave */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Brilho lateral esquerdo */}
        <div
          className="absolute -left-32 top-1/3 h-[400px] w-[400px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 65%)",
          }}
        />
        {/* Brilho lateral direito */}
        <div
          className="absolute -right-32 bottom-1/4 h-[350px] w-[350px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 65%)",
          }}
        />
      </div>

      <Container>
        <div ref={ref} className="space-y-16">

          {/* ── Cabeçalho da seção ───────────────────────────────────────── */}
          <motion.div
            className="max-w-3xl"
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Badge>Tecnologias</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Tecnologias que colocam o aluno perto do que o mercado usa."
                description="A base técnica precisa ser útil de verdade. Aqui o foco é aprender ferramentas e conceitos que fazem sentido para produto, carreira e entrega real."
              />
            </div>
          </motion.div>

          {/* ── Grade de cards com stagger reveal ───────────────────────── */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {technologies.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </motion.div>

          {/* ── Rodapé informativo — contador de tecnologias ─────────────── */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/25">
              {technologies.length} tecnologias · stack atual do mercado
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}