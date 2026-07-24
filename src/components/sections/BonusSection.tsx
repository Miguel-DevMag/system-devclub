// Seção de módulos bônus — vitrine de valor expandido

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  RotateCcw,
  LayoutTemplate,
  Presentation,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { bonus } from "@/data/bonus";

// ─── Variantes de animação ────────────────────────────────────────────────────

// Container orquestra o stagger entre os cards filhos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

// Cada card entra com fade suave + deslocamento vertical controlado
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Configuração visual por item de bônus ────────────────────────────────────

/*
  Cada módulo bônus recebe:
    - ícone Lucide contextual para a sua natureza
    - paleta de cor que reforça a categoria do recurso:
      01 Revisões semanais → âmbar    (ritmo, consistência)
      02 Modelos prontos   → ciano    (eficiência, velocidade)
      03 Aulas especiais   → violeta  (conhecimento aprofundado)
      04 Suporte estendido → esmeralda (confiança, segurança)
*/
interface BonusConfig {
  Icon: LucideIcon;
  accentColor: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  glowColor: string;
  hoverBorderGlow: string;
  numberColor: string;
}

const BONUS_CONFIG: BonusConfig[] = [
  {
    // Revisões semanais — âmbar: cadência, progresso constante
    Icon: RotateCcw,
    accentColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.12)",
    iconBorder: "rgba(245,158,11,0.30)",
    iconColor: "#fbbf24",
    glowColor: "rgba(245,158,11,0.08)",
    hoverBorderGlow: "rgba(245,158,11,0.35)",
    numberColor: "rgba(245,158,11,0.25)",
  },
  {
    // Modelos prontos — ciano: velocidade, entregas, estrutura
    Icon: LayoutTemplate,
    accentColor: "#22d3ee",
    iconBg: "rgba(6,182,212,0.12)",
    iconBorder: "rgba(6,182,212,0.30)",
    iconColor: "#38bdf8",
    glowColor: "rgba(6,182,212,0.08)",
    hoverBorderGlow: "rgba(6,182,212,0.35)",
    numberColor: "rgba(6,182,212,0.22)",
  },
  {
    // Aulas especiais — violeta: profundidade, especialistas, aprendizado rico
    Icon: Presentation,
    accentColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.12)",
    iconBorder: "rgba(168,85,247,0.30)",
    iconColor: "#c084fc",
    glowColor: "rgba(168,85,247,0.08)",
    hoverBorderGlow: "rgba(168,85,247,0.35)",
    numberColor: "rgba(168,85,247,0.22)",
  },
  {
    // Suporte estendido — esmeralda: confiança, segurança, suporte humano
    Icon: Headphones,
    accentColor: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    iconBorder: "rgba(16,185,129,0.30)",
    iconColor: "#34d399",
    glowColor: "rgba(16,185,129,0.08)",
    hoverBorderGlow: "rgba(16,185,129,0.35)",
    numberColor: "rgba(16,185,129,0.22)",
  },
];

// ─── Card individual de módulo bônus ─────────────────────────────────────────

interface BonusCardProps {
  item: { id: string; title: string; description: string };
  index: number;
  reduced: boolean | null;
}

function BonusCard({ item, index, reduced }: BonusCardProps) {
  const config = BONUS_CONFIG[index % BONUS_CONFIG.length];
  const { Icon } = config;

  // Número de ordem com zero à esquerda — tratamento editorial
  const orderLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduced
          ? {}
          : {
              y: -5,
              transition: { duration: 0.27, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
      style={{
        // Sombra de profundidade + highlight inset no topo
        boxShadow:
          "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.35)",
      }}
    >
      {/* Brilho de borda superior — visível apenas no hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${config.hoverBorderGlow} 50%, transparent 95%)`,
        }}
      />

      {/* Glow difuso no canto superior — cor do módulo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${config.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Número de ordem em watermark — profundidade visual decorativa */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-5 select-none font-mono text-6xl font-black leading-none"
        style={{ color: config.numberColor }}
      >
        {orderLabel}
      </div>

      <div className="relative flex flex-col gap-5">
        {/* ── Ícone do módulo ── */}
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl border"
          style={{
            background: config.iconBg,
            borderColor: config.iconBorder,
            // Sombra colorida sutil sob o ícone
            boxShadow: `0 4px 14px ${config.glowColor}`,
          }}
          aria-hidden
        >
          <Icon
            size={20}
            strokeWidth={1.75}
            style={{ color: config.iconColor }}
          />
        </div>

        {/* ── Conteúdo textual ── */}
        <div className="flex flex-col gap-2">
          {/* Título com hierarquia forte */}
          <h3 className="text-[15px] font-semibold leading-snug text-white/95">
            {item.title}
          </h3>

          {/* Descrição com boa legibilidade */}
          <p className="text-sm leading-6 text-white/55">{item.description}</p>
        </div>

        {/* ── Chip de status — reforça que é um recurso incluído ── */}
        <div className="mt-auto flex items-center gap-2 pt-1">
          <span
            aria-hidden
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: config.accentColor }}
          />
          <span
            className="text-[11px] font-medium tracking-wide"
            style={{ color: config.accentColor }}
          >
            Incluso na formação
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function BonusSection() {
  // Respeita a configuração de movimento reduzido do sistema operacional
  const reduced = useReducedMotion();

  return (
    <Section id="bonus" className="bg-neutral-950">
      {/* Atmosfera de fundo — gradientes radiais suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz âmbar à esquerda — remete ao primeiro item */}
        <div
          className="absolute -left-1/4 bottom-1/3 h-[460px] w-[460px] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Luz ciano à direita — balanceia a composição */}
        <div
          className="absolute -right-1/4 top-1/4 h-[420px] w-[420px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grade pontilhada discreta */}
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
            <Badge>Bônus</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Recursos extras para acelerar ainda mais a evolução."
                description="Os bônus fortalecem o valor percebido e ampliam o suporte da jornada."
              />
            </div>
          </motion.div>

          {/* ── Grid de módulos bônus ── */}
          {/*
            Mobile: coluna única com espaçamento amplo.
            Tablet (md): 2 colunas equilibradas.
            Desktop (xl): 4 colunas — ritmo visual modular.
          */}
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {bonus.map((item, index) => (
              <BonusCard
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