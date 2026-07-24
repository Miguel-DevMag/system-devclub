// Seção de certificação e credencial formal — vitrine institucional premium

import { motion, useReducedMotion } from "motion/react";
import { Award, BadgeCheck, GraduationCap, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";

// ─── Tokens de cor do certificado ────────────────────────────────────────────

// Paleta ouro-âmbar: transmite credencial, conquista e seriedade institucional
const GOLD = {
  primary: "#d4a853",
  soft: "rgba(212,168,83,0.15)",
  border: "rgba(212,168,83,0.28)",
  borderSubtle: "rgba(212,168,83,0.14)",
  glow: "rgba(212,168,83,0.10)",
  text: "#e8c87a",
  dim: "rgba(212,168,83,0.45)",
} as const;

// ─── Marca de canto decorativa — detalhe clássico de diplomas ────────────────

// Renderiza linhas de canto em L usando bordas CSS, sem SVG ou imagem
function CornerMark({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  // Mapeia posição para classes de canto e direção das bordas
  const positionClasses: Record<string, string> = {
    tl: "top-0 left-0 border-t border-l rounded-tl-sm",
    tr: "top-0 right-0 border-t border-r rounded-tr-sm",
    bl: "bottom-0 left-0 border-b border-l rounded-bl-sm",
    br: "bottom-0 right-0 border-b border-r rounded-br-sm",
  };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-5 w-5 ${positionClasses[position]}`}
      style={{ borderColor: GOLD.primary, opacity: 0.6 }}
    />
  );
}

// ─── Padrão de marca d'água em CSS puro ──────────────────────────────────────

// Grade diagonal discreta — reforça a estética de documento oficial
function WatermarkPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{
        // Linhas diagonais via gradiente repetido — sem imagem externa
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 18px,
          rgba(212,168,83,0.03) 18px,
          rgba(212,168,83,0.03) 19px
        )`,
      }}
    />
  );
}

// ─── Selo de verificação central ─────────────────────────────────────────────

// Anel concêntrico com ícone — referência visual a selos e emblemas institucionais
function VerificationSeal() {
  return (
    <div className="relative flex items-center justify-center" aria-hidden>
      {/* Anel externo translúcido */}
      <div
        className="absolute h-20 w-20 rounded-full"
        style={{
          border: `1px solid ${GOLD.borderSubtle}`,
          background: `radial-gradient(circle, ${GOLD.glow} 0%, transparent 70%)`,
        }}
      />
      {/* Anel intermediário */}
      <div
        className="absolute h-14 w-14 rounded-full"
        style={{ border: `1px dashed ${GOLD.dim}` }}
      />
      {/* Núcleo do selo com ícone Award */}
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-full border"
        style={{
          background: GOLD.soft,
          borderColor: GOLD.border,
          boxShadow: `0 0 16px ${GOLD.glow}`,
        }}
      >
        <Award size={18} strokeWidth={1.5} style={{ color: GOLD.text }} />
      </div>
    </div>
  );
}

// ─── Os dois itens de suporte: Diploma e Reconhecimento ──────────────────────

// Dados fixos conforme o conteúdo original — sem remoção ou reescrita
const CREDENTIAL_ITEMS = [
  {
    id: "diploma",
    Icon: GraduationCap,
    title: "Diploma",
    description: "Certificado de conclusão da formação",
  },
  {
    id: "reconhecimento",
    Icon: ShieldCheck,
    title: "Reconhecimento",
    description: "Conclusão da Jornada. Comprova a conclusão da formação e dos projetos desenvolvidos.",
  },
] as const;

// ─── Card de credencial de suporte ───────────────────────────────────────────

function CredentialItem({
  Icon,
  title,
  description,
}: {
  Icon: typeof GraduationCap;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col gap-3 rounded-xl border p-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: GOLD.borderSubtle,
      }}
    >
      {/* Ícone com tratamento de cor de acento */}
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg border"
        style={{
          background: GOLD.soft,
          borderColor: GOLD.border,
        }}
        aria-hidden
      >
        <Icon size={16} strokeWidth={1.75} style={{ color: GOLD.text }} />
      </div>

      {/* Textos com hierarquia clara */}
      <div>
        <p className="text-sm font-semibold text-white/90">{title}</p>
        <p className="mt-0.5 text-xs text-white/50">{description}</p>
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function CertificationSection() {
  // Respeita a preferência de redução de movimento do sistema operacional
  const reduced = useReducedMotion();

  return (
    <Section id="certificacao" className="bg-neutral-950">
      {/* Atmosfera de fundo — glow ouro difuso */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz ouro-âmbar central — reforça o tom institucional */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%)",
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
        {/*
          Layout editorial em duas colunas no desktop:
            - esquerda: cabeçalho da seção com o texto original
            - direita: artefato de certificado premium
        */}
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* ── Coluna esquerda: texto da seção ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Certificação</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Conclua a Formação Full Stack e receba seu certificado."
                description="Ao finalizar a trilha de estudos e os projetos práticos, você recebe um certificado que comprova sua conclusão da formação e reforça sua evolução profissional."
              />
            </div>

            {/* Indicador de verificação — reforço textual de credibilidade */}
            <div className="mt-8 flex items-center gap-2.5">
              <BadgeCheck
                size={16}
                strokeWidth={2}
                style={{ color: GOLD.text }}
                aria-hidden
              />
              <span
                className="text-sm font-medium"
                style={{ color: GOLD.text }}
              >
                Certificação oficial DevClub
              </span>
            </div>
          </motion.div>

          {/* ── Coluna direita: artefato de certificado ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={
              reduced
                ? {}
                : {
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }
            }
            className="group"
          >
            {/* Camada externa: moldura do certificado com vidro e borda sutil */}
            <div
              className="relative overflow-hidden rounded-2xl border p-1 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                borderColor: GOLD.border,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset, 0 16px 48px rgba(0,0,0,0.5), 0 0 40px ${GOLD.glow}`,
              }}
            >
              {/* Linha de glow superior — efeito de luz premium */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent 5%, ${GOLD.primary}55 50%, transparent 95%)`,
                }}
              />

              {/* Marca d'água diagonal de fundo */}
              <WatermarkPattern />

              {/* Camada interna: corpo do certificado */}
              <div
                className="relative overflow-hidden rounded-xl p-6 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(18,18,20,0.95) 0%, rgba(10,10,12,0.98) 100%)",
                  borderColor: GOLD.borderSubtle,
                  border: `1px solid ${GOLD.borderSubtle}`,
                }}
              >
                {/* Marcas de canto — detalhe clássico de diplomas */}
                <CornerMark position="tl" />
                <CornerMark position="tr" />
                <CornerMark position="bl" />
                <CornerMark position="br" />

                <div className="flex flex-col gap-6">
                  {/* ── Cabeçalho institucional do certificado ── */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {/* Label institucional */}
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                        style={{ color: GOLD.dim }}
                      >
                        Certificação oficial
                      </p>
                      {/* Título do certificado — texto original preservado */}
                      <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white/95 md:text-2xl">
                        Certificado de Conclusão da Formação Full Stack
                      </h3>
                    </div>

                    {/* Selo de verificação — posição institucional */}
                    <div className="flex-shrink-0 pt-1">
                      <VerificationSeal />
                    </div>
                  </div>

                  {/* Linha divisória com gradiente dourado */}
                  <div
                    aria-hidden
                    className="h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${GOLD.borderSubtle} 0%, ${GOLD.border} 40%, transparent 100%)`,
                    }}
                  />

                  {/* ── Descrição — texto original preservado ── */}
                  <p className="text-sm leading-6 text-white/60">
                    Concedido aos alunos que concluem a Formação Full Stack, finalizando a trilha de estudos e os projetos propostos. O certificado representa a conclusão da jornada de aprendizado e pode ser utilizado para demonstrar sua formação.
                  </p>

                  {/* ── Itens de suporte: Diploma e Reconhecimento ── */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {CREDENTIAL_ITEMS.map(({ id, Icon, title, description }) => (
                      <CredentialItem
                        key={id}
                        Icon={Icon}
                        title={title}
                        description={description}
                      />
                    ))}
                  </div>

                  {/* ── Rodapé do certificado — linha de autenticidade sutil ── */}
                  <div
                    className="flex items-center gap-2 pt-1"
                    aria-label="Indicador de autenticidade"
                  >
                    <div
                      aria-hidden
                      className="h-px flex-1"
                      style={{ background: GOLD.borderSubtle }}
                    />
                    <ShieldCheck
                      size={12}
                      strokeWidth={2}
                      style={{ color: GOLD.dim }}
                      aria-hidden
                    />
                    <p
                      className="text-[10px] font-medium tracking-widest uppercase"
                      style={{ color: GOLD.dim }}
                    >
                      DevClub · Certificado de Conclusão Full Stack
                    </p>
                    <div
                      aria-hidden
                      className="h-px flex-1"
                      style={{ background: GOLD.borderSubtle }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}