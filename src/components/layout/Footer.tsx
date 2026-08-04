import { ArrowUp } from "lucide-react";

import devclubLogo from "@/assets/logos/devclub.png";
import { Container } from "@/components/layout/Container";

const footerLinks = [
  { name: "Jornada", href: "#jornada-aprendizado" },
  { name: "Plataforma", href: "#plataforma" },
  { name: "Comunidade", href: "#comunidade" },
  { name: "Reconhecimento", href: "#reconhecimento" },
  { name: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé institucional">
      <Container>
        <div className="site-footer__top">
          <a href="#hero" className="site-footer__brand" aria-label="DevClub — voltar ao início">
            <img src={devclubLogo} alt="DevClub" />
            <span>Formação, prática e comunidade em uma jornada conectada.</span>
          </a>

          <nav aria-label="Navegação do rodapé">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.name}</a>
            ))}
          </nav>

          <a href="#hero" className="site-footer__return">
            Voltar ao início
            <ArrowUp aria-hidden="true" />
          </a>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
          <span>Experiência institucional DevClub</span>
        </div>
      </Container>
    </footer>
  );
}
