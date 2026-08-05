import { ArrowUpRight } from "lucide-react";

import devclubLogo from "@/assets/logos/devclub.png";
import { Container } from "@/components/layout/Container";
import { officialLinks } from "@/config/official-links";

const footerLinks = [
  { label: "Formações", href: "#jornada-aprendizado" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Professores", href: "#pessoas-resultados" },
  { label: "FAQ", href: "#faq" },
] as const;

const externalLinks = [
  { label: "Área do aluno", href: officialLinks.studentArea },
  { label: "Conversar sobre matrícula", href: officialLinks.enrollment },
  { label: "MBA DevClub", href: officialLinks.mba },
] as const;

export function Footer() {
  return (
    <footer className="institutional-footer" aria-label="Rodapé institucional">
      <Container>
        <div className="institutional-footer__grid">
          <a
            href="#hero"
            className="institutional-footer__brand"
            aria-label="DevClub — voltar ao início"
          >
            <img src={devclubLogo} width="182" height="48" alt="DevClub" />
            <span>
              Formação prática para construir uma carreira em tecnologia.
            </span>
          </a>

          <nav aria-label="Navegação do rodapé" className="institutional-footer__links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="institutional-footer__external">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="institutional-footer__bottom">
          <a href="mailto:contato@devclub.com.br">contato@devclub.com.br</a>
          <p>© 2026 DevClub. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
