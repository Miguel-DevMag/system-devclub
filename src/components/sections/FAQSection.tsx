import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { officialLinks } from "@/config/official-links";

const questions = [
  {
    id: "comecar",
    category: "Começo",
    question: "Preciso saber programar para começar?",
    answer:
      "Não. A formação também é indicada para iniciantes e começa pelos fundamentos antes de avançar para tecnologias e projetos mais completos.",
  },
  {
    id: "formacoes",
    category: "Formações",
    question: "Quais formações estão disponíveis?",
    answer:
      "O DevClub organiza caminhos de Fundamentos, Formação Fullstack JavaScript e Inteligência Artificial e Automações, do básico ao avançado.",
  },
  {
    id: "fullstack",
    category: "Fullstack",
    question: "Como funciona a Formação Fullstack JavaScript?",
    answer:
      "A jornada conecta front-end com React, back-end com Node.js, bancos de dados e deploy. Trilhas, conteúdo, prática e projetos ajudam a transformar conhecimento em construção.",
  },
  {
    id: "iaclub",
    category: "IAClub",
    question: "O que é a IAClub?",
    answer:
      "A IAClub é o caminho dedicado a inteligência artificial e automações, com ferramentas como n8n, ChatGPT, Claude, Gemini e OpenAI.",
  },
  {
    id: "comunidade",
    category: "Comunidade",
    question: "Como funciona a comunidade?",
    answer:
      "A comunidade funciona como espaço de troca e orientação. Pessoas, professores e projetos conectam experiências durante a jornada de aprendizado.",
  },
  {
    id: "acesso",
    category: "Acesso",
    question: "Onde acesso as aulas?",
    answer:
      "As aulas ficam na Área do aluno, disponível pelo endereço oficial aulas.devclub.com.br.",
  },
  {
    id: "matricula",
    category: "Matrícula",
    question: "Como converso com a equipe de matrícula?",
    answer:
      "Use o WhatsApp oficial de matrícula para conversar com a equipe e entender qual formação combina com o seu momento.",
  },
] as const;

export function FAQSection() {
  const [openValue, setOpenValue] = useState<string[]>([questions[0].id]);
  const activeQuestion =
    questions.find((item) => item.id === openValue[0]) ?? questions[0];

  return (
    <section id="faq" aria-labelledby="faq-title" className="institutional-faq">
      <Container>
        <div className="faq-layout">
          <header className="institutional-heading institutional-heading--faq">
            <p className="institutional-eyebrow">Perguntas frequentes</p>
            <h2 id="faq-title">Clareza para escolher o próximo passo.</h2>
            <p>
              Respostas diretas sobre formações, acesso, comunidade e matrícula.
            </p>

            <div className="faq-active-category" aria-live="polite">
              <span>Assunto aberto</span>
              <strong>{activeQuestion.category}</strong>
            </div>
          </header>

          <div>
            <Accordion
              value={openValue}
              onValueChange={setOpenValue}
              multiple={false}
              className="institutional-faq__questions"
            >
              {questions.map((item, index) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="institutional-faq__trigger">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.question}</strong>
                  </AccordionTrigger>
                  <AccordionContent className="institutional-faq__answer">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <a
              href={officialLinks.support}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-support"
            >
              <MessageCircle aria-hidden="true" />
              <span>
                <small>Ainda precisa de ajuda?</small>
                <strong>Conversar com o suporte</strong>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
