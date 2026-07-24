// Seção de perguntas frequentes — clareza e remoção de atrito

import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ─── Variantes de animação ────────────────────────────────────────────────────

// ease como const para satisfazer o tipo BezierDefinition da motion
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export function FAQSection() {
  const reduced = useReducedMotion();

  return (
    <Section id="faq" className="bg-neutral-950">
      {/* Atmosfera de fundo — luzes ambientes sutis para continuidade visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Glow esquerdo violeta */}
        <div
          className="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Glow direito índigo */}
        <div
          className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Grade pontilhada muito leve */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container>
        {/*
          Layout editorial em duas colunas no desktop:
            - esquerda: Cabeçalho + bloco de segurança (reassurance)
            - direita: Lista de FAQ
        */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          
          {/* ── Coluna esquerda: Cabeçalho e Segurança ── */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariants}
            >
              <Badge>FAQ</Badge>
              <div className="mt-6">
                <SectionHeading
                  title="Respostas diretas para fechar as dúvidas."
                  description="A última etapa antes do CTA é remover obstáculos e deixar a decisão mais fácil."
                />
              </div>
            </motion.div>

            {/* Bloco de segurança (Reassurance) — visível no desktop para ancorar conversão */}
            <motion.div
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUpVariants}
              className="relative hidden flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm lg:flex"
              style={{
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.05) inset",
              }}
            >
              {/* Brilho interno sutil */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              />
              
              {/* Ícone de suporte em destaque */}
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl border"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  borderColor: "rgba(139,92,246,0.25)",
                  color: "#d8b4fe",
                }}
              >
                <MessageCircle size={22} strokeWidth={1.75} />
              </div>
              
              <div className="relative">
                <h3 className="text-[17px] font-semibold text-white/95">
                  Ainda tem dúvidas?
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Nossa equipe de suporte está disponível para responder suas
                  perguntas e garantir que a formação é o passo certo para a sua
                  carreira.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Coluna direita: Acordeão de perguntas ── */}
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
            className="w-full"
          >
            {/* O componente Accordion lida com toda a semântica e acessibilidade */}
            <Accordion className="w-full">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  // Item isolado como um card individual, com transição de vidro e borda no estado ativo
                  className="mb-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-5 transition-all duration-300 last:mb-0 hover:bg-white/[0.04] has-[[aria-expanded=true]]:border-white/15 has-[[aria-expanded=true]]:bg-white/[0.05] has-[[aria-expanded=true]]:shadow-[0_8px_32px_rgba(0,0,0,0.25)] sm:px-6"
                >
                  <AccordionTrigger
                    className="py-5 text-left text-[15px] font-medium text-white/90 transition-colors hover:no-underline hover:text-white sm:py-6 sm:text-[17px] [&_[data-slot=accordion-trigger-icon]]:text-white/30 [&_[data-slot=accordion-trigger-icon]]:transition-colors hover:[&_[data-slot=accordion-trigger-icon]]:text-white/70"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Número da pergunta — tratamento editorial, ajuda na escaneabilidade */}
                      <span className="flex w-7 shrink-0 items-center text-left font-mono text-sm font-semibold text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pb-6 pl-11 text-sm leading-relaxed text-white/60 sm:pl-12 sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}