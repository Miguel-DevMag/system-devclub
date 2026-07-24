import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
const entranceVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};
const principles = [
  {
    number: "01",
    title: "Missão",
    description:
      "Ajudar pessoas a entrarem e evoluírem na tecnologia com clareza, consistência e suporte real.",
    accent: "from-cyan-300/20 via-cyan-300/5 to-transparent",
    glow: "bg-cyan-400/15",
    className: "sm:col-span-2 lg:col-span-7",
  },
  {
    number: "02",
    title: "Visão",
    description:
      "Construir uma comunidade forte, moderna e conectada ao mercado.",
    accent: "from-violet-300/20 via-violet-300/5 to-transparent",
    glow: "bg-violet-400/15",
    className: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Diferencial",
    description:
      "Trilhas organizadas, projetos práticos, suporte humano e uso inteligente de IA para acelerar a evolução do aluno.",
    accent: "from-blue-300/20 via-blue-300/5 to-transparent",
    glow: "bg-blue-400/15",
    className: "sm:col-span-2 lg:col-span-12",
  },
];
export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section id="sobre" className="bg-neutral-950 py-24 md:py-32">
      {/* Camadas de luz mantêm a seção conectada ao restante da experiência. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -left-40 top-8 h-80 w-80 rounded-full bg-cyan-500/12 blur-[110px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.35, 0.7, 0.35], y: [0, -18, 0] }
          }
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,10,0.5)_100%)]" />
      </div>
  <Container>
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="relative"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-16">
        <motion.div variants={entranceVariants} className="lg:col-span-7">
          <Badge>Quem é o DevClub</Badge>

          <div className="mt-6">
            <SectionHeading
              title="Muito além de cursos. Um ecossistema para crescer na tecnologia."
              description="O DevClub foi pensado para quem quer aprender com direção, apoio e prática. A proposta é unir formação, comunidade, mentoria e oportunidades em um único ambiente."
            />
          </div>
        </motion.div>

        <motion.aside
          variants={entranceVariants}
          className="relative self-end border-l border-white/10 pl-5 sm:pl-7 lg:col-span-5"
        >
          <span className="absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/35">
            Um sistema vivo
          </p>
          <p className="mt-4 max-w-sm text-base leading-7 text-white/60">
            Formação com contexto, relações reais e espaço para transformar
            estudo em repertório profissional.
          </p>
        </motion.aside>
      </div>

      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.16 },
          },
        }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
      >
        {principles.map((principle) => (
          <motion.article
            key={principle.title}
            variants={cardVariants}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -5,
                    transition: { duration: 0.28, ease: "easeOut" },
                  }
            }
            className={`group relative min-h-60 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-500 hover:border-white/[0.18] hover:bg-white/[0.055] sm:p-7 ${principle.className}`}
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${principle.glow} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              aria-hidden="true"
            />
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${principle.accent}`}
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">
                  {principle.number}
                </span>
                <span className="h-2 w-2 rounded-full border border-white/30 bg-white/10 transition-colors duration-300 group-hover:border-cyan-200/70 group-hover:bg-cyan-200/80" />
              </div>

              <div className="mt-auto pt-12">
                <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                  {principle.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  </Container>
</Section>
  );
}