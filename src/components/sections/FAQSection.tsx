import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { motionTokens } from "@/components/motion/motion-tokens";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export function FAQSection() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <section id="faq" aria-labelledby="faq-title" className="faq-knowledge">
      <div className="faq-knowledge__entry" aria-hidden="true">
        <span>impacto pede clareza</span>
        <i />
        <strong>base de conhecimento</strong>
      </div>

      <Container className="faq-knowledge__container">
        <motion.header
          className="faq-knowledge__header"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="faq-knowledge__eyebrow"><span />Base de conhecimento</div>
          <div>
            <h2 id="faq-title">Contexto para decidir com mais clareza.</h2>
            <p>
              Respostas diretas sobre o começo, a prática e os limites da jornada apresentada nesta página.
            </p>
          </div>
          <small>06 tópicos / leitura sob demanda</small>
        </motion.header>

        <motion.div
          className="faq-knowledge__workspace"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.standard,
          }}
        >
          <aside className="faq-knowledge__index" aria-label="Índice da base de conhecimento">
            <div>
              <span>Índice</span>
              <p>Escolha um tópico para navegar até a resposta.</p>
            </div>
            <ol>
              {faq.map((item, index) => (
                <li key={item.id}>
                  <a href={`#faq-${item.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.category}</strong>
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="faq-knowledge__document">
            <div className="faq-knowledge__document-head">
              <div>
                <span>DevClub / ajuda</span>
                <strong>Perguntas essenciais</strong>
              </div>
              <small>Atualizado para esta experiência</small>
            </div>

            <Accordion className="faq-knowledge__questions">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  id={`faq-${item.id}`}
                  value={item.id}
                  className="faq-knowledge__item"
                >
                  <AccordionTrigger className="faq-knowledge__trigger">
                    <span className="faq-knowledge__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-knowledge__question-copy">
                      <small>{item.category}</small>
                      <strong>{item.question}</strong>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-knowledge__answer">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="faq-knowledge__document-foot">
              <span>As respostas descrevem a estrutura apresentada nesta página.</span>
              <strong>Sem promessas de resultado individual.</strong>
            </div>
          </div>
        </motion.div>

        <div className="faq-knowledge__exit" aria-hidden="true">
          <span>contexto reunido</span>
          <i />
          <strong>decisão à frente</strong>
        </div>
      </Container>
    </section>
  );
}
