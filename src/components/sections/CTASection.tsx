// Seção final de chamada para ação — conversão, energia e fechamento da jornada

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cta } from "@/data/cta";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CTASection() {
  const reduced = useReducedMotion();

  return (
    <Section id="cta" className="relative bg-neutral-950 pb-20 md:pb-32 pt-10">
      {/* 
        Atmosfera de fundo da página (fora do card)
        Glow muito difuso para integrar o card com a página escura.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />

      <Container>
        {/* ── Card Principal de Conversão ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 px-6 py-16 text-center shadow-2xl md:rounded-[3rem] md:px-16 md:py-24"
        >
          {/* 
            === Camadas de Background do Card === 
          */}
          
          {/* Brilho radial superior central — tom de índigo e violeta */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)",
            }}
          />

          {/* Brilho radial inferior — para equilibrar o peso visual */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Grade técnica sutil com máscara radial para desvanecer nas bordas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 100%)",
            }}
          />

          {/* Linha luminosa horizontal decorativa (light trail) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[20%] h-px opacity-60"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 50%, transparent 100%)",
            }}
          />

          {/* 
            === Conteúdo Principal === 
          */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Label superior refinado */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-md">
              <Sparkles size={12} strokeWidth={2.5} />
              <span>Próximo passo</span>
            </div>

            {/* Título com forte hierarquia visual e kerning ajustado */}
            <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.1]">
              {cta.title}
            </h2>

            {/* Texto de suporte legível e claro */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              {cta.description}
            </p>

            {/* Grupo de Ações (Botões) */}
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              {/* Botão Primário: foco em alta conversão e contraste */}
              <motion.a
                href={cta.primaryHref}
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group relative h-14 w-full overflow-hidden px-8 text-[15px] font-semibold sm:w-auto",
                  "shadow-[0_0_32px_-8px_rgba(99,102,241,0.5)] transition-shadow hover:shadow-[0_0_48px_-12px_rgba(99,102,241,0.7)]"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cta.primaryLabel}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                {/* Efeito de brilho interno sutil no hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </motion.a>

              {/* Botão Secundário: presença visual equilibrada, menos agressiva */}
              {cta.secondaryLabel && cta.secondaryHref ? (
                <motion.a
                  href={cta.secondaryHref}
                  whileHover={reduced ? {} : { scale: 1.02 }}
                  whileTap={reduced ? {} : { scale: 0.98 }}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 w-full border-white/15 bg-white/5 px-8 text-[15px] font-medium transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
                  )}
                >
                  {cta.secondaryLabel}
                </motion.a>
              ) : null}
            </div>

            {/* Detalhe elegante de momento/confiança (Momentum detail) */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center gap-4 text-sm text-white/40"
            >
              {/* Representação visual abstrata de comunidade (3 avatares genéricos) */}
              <div className="flex -space-x-2" aria-hidden>
                <div className="h-7 w-7 rounded-full border border-neutral-800 bg-white/10 backdrop-blur-sm" />
                <div className="h-7 w-7 rounded-full border border-neutral-800 bg-white/15 backdrop-blur-sm" />
                <div className="h-7 w-7 rounded-full border border-neutral-800 bg-white/20 backdrop-blur-sm" />
              </div>
              <span className="font-medium tracking-wide">
                Ecossistema completo de tecnologia
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}