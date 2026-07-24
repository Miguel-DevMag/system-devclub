// Seção de depoimentos — histórias reais de transformação

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types/testimonial";

// ─── Variantes de animação ────────────────────────────────────────────────────

// Orquestra a entrada escalonada dos cards filhos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.05,
    },
  },
};

// Cada card entra com fade + deslocamento vertical suave
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Paleta de cores por índice de depoimento ─────────────────────────────────

// Cada depoimento recebe um acento único para reforçar identidade sem uniformidade
const CARD_ACCENTS = [
  {
    // Marina — esmeralda: transmite conquista, crescimento
    avatarBg: "rgba(16,185,129,0.15)",
    avatarBorder: "rgba(16,185,129,0.35)",
    avatarText: "#34d399",
    resultBg: "rgba(16,185,129,0.10)",
    resultBorder: "rgba(16,185,129,0.25)",
    resultText: "#6ee7b7",
    quoteMark: "rgba(16,185,129,0.18)",
    glowColor: "rgba(16,185,129,0.07)",
    hoverBorder: "rgba(16,185,129,0.30)",
  },
  {
    // Rafael — índigo: transmite estabilidade, técnica
    avatarBg: "rgba(99,102,241,0.15)",
    avatarBorder: "rgba(99,102,241,0.35)",
    avatarText: "#a5b4fc",
    resultBg: "rgba(99,102,241,0.10)",
    resultBorder: "rgba(99,102,241,0.25)",
    resultText: "#c7d2fe",
    quoteMark: "rgba(99,102,241,0.18)",
    glowColor: "rgba(99,102,241,0.07)",
    hoverBorder: "rgba(99,102,241,0.30)",
  },
  {
    // Juliana — violeta: transmite clareza, direção, transformação
    avatarBg: "rgba(168,85,247,0.15)",
    avatarBorder: "rgba(168,85,247,0.35)",
    avatarText: "#d8b4fe",
    resultBg: "rgba(168,85,247,0.10)",
    resultBorder: "rgba(168,85,247,0.25)",
    resultText: "#e9d5ff",
    quoteMark: "rgba(168,85,247,0.18)",
    glowColor: "rgba(168,85,247,0.07)",
    hoverBorder: "rgba(168,85,247,0.30)",
  },
] as const;

// ─── Iniciais do avatar ───────────────────────────────────────────────────────

// Extrai até duas iniciais do nome completo para o avatar tipográfico
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ─── Card de depoimento individual ───────────────────────────────────────────

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
  reduced: boolean | null;
}

function TestimonialCard({ item, index, reduced }: TestimonialCardProps) {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  const initials = getInitials(item.name);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduced
          ? {}
          : {
              y: -5,
              transition: { duration: 0.28, ease: "easeOut" },
            }
      }
      // Cartão com superfície de vidro sutil, profundidade e borda de acento
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-500"
      style={{
        // Sombra de profundidade + borda hover colorida via box-shadow composta
        boxShadow: `0 1px 0 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.35)`,
      }}
      // Aria: semântica de citação para leitores de tela
      aria-label={`Depoimento de ${item.name}`}
    >
      {/* Brilho de borda superior — aparece no hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent 10%, ${accent.hoverBorder} 50%, transparent 90%)`,
        }}
      />

      {/* Glow de fundo sutil no canto superior — fixo, não anima */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent.glowColor} 0%, transparent 70%)` }}
      />

      {/* ── Aspas decorativas ── */}
      {/*
        Símbolo tipográfico de aspas em segundo plano.
        Reforça visualmente que é uma citação sem ser genérico.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-5 top-4 select-none text-7xl font-serif leading-none"
        style={{ color: accent.quoteMark }}
      >
        "
      </div>

      {/* ── Corpo do depoimento ── */}
      <div className="relative flex flex-1 flex-col gap-5">

        {/* Citação — tipografia editorial, hierarquia clara */}
        <blockquote className="flex-1">
          <p className="text-[15px] font-normal leading-7 tracking-[0.01em] text-white/75">
            "{item.quote}"
          </p>
        </blockquote>

        {/* Resultado em destaque — badge refinado quando disponível */}
        {item.result ? (
          <div
            className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1"
            style={{
              background: accent.resultBg,
              borderColor: accent.resultBorder,
            }}
          >
            {/* Indicador visual de resultado positivo */}
            <span
              aria-hidden
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: accent.resultText }}
            />
            <span
              className="text-[11px] font-medium leading-none tracking-wide"
              style={{ color: accent.resultText }}
            >
              {item.result}
            </span>
          </div>
        ) : null}

        {/* Divisor refinado antes dos dados do autor */}
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`,
          }}
        />

        {/* ── Identificação do autor ── */}
        <div className="flex items-center gap-3">
          {/* Avatar tipográfico com iniciais e cor de acento */}
          <div
            className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border text-xs font-semibold tracking-wider"
            style={{
              background: accent.avatarBg,
              borderColor: accent.avatarBorder,
              color: accent.avatarText,
            }}
            aria-hidden
          >
            {initials}
          </div>

          {/* Nome, cargo e localização com hierarquia tipográfica clara */}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white/90">
              {item.name}
            </p>
            <p className="mt-0.5 truncate text-xs text-white/45">
              {item.role}
              {item.location ? (
                <>
                  <span className="mx-1.5 opacity-50">·</span>
                  <span>{item.location}</span>
                </>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function TestimonialsSection() {
  // Respeita a configuração de movimento reduzido do sistema operacional
  const reduced = useReducedMotion();

  return (
    <Section id="depoimentos" className="bg-neutral-950">
      {/* Atmosfera de fundo — luzes ambientes com gradientes radiais */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz esquerda — esmeralda suave */}
        <div
          className="absolute -left-1/3 top-1/3 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Luz direita — violeta suave */}
        <div
          className="absolute -right-1/3 bottom-1/4 h-[450px] w-[450px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Textura discreta de grade pontilhada */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
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
            <Badge>Transformação</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Histórias que mostram o impacto da jornada."
                description="Os resultados precisam ser sentidos. Os depoimentos reforçam a mudança de direção, confiança e clareza que o ecossistema gera."
              />
            </div>
          </motion.div>

          {/* ── Grid de depoimentos ── */}
          {/*
            Mobile: coluna única com espaçamento generoso.
            Tablet (md): duas colunas equilibradas.
            Desktop (xl): três colunas — composição editorial balanceada.
          */}
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={index}
                reduced={reduced}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}