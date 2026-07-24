import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";
import devclubLogo from "@/assets/logos/devclub.png";

const footerLinks = [
  {
    title: "Institucional",
    links: [
      { name: "Formações", href: "#formacoes" },
      { name: "Plataforma", href: "#plataforma" },
      { name: "Comunidade", href: "#comunidade" },
      { name: "FAQ", href: "#faq" },
    ],
  }
];

export function Footer() {
  return (
    <RuixenGradientFooter gradientHeight="50vh" className="bg-neutral-950">
      <div className="relative w-full overflow-hidden font-sans antialiased border-t border-white/10">
        
        {/* Texto Grande de Fundo (Mais sutil e premium) */}
        <div className="relative z-0 flex w-full items-center justify-center pt-16 pb-8 md:pt-24 select-none pointer-events-none">
          <h1 className="text-[80px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white/10 to-white/0 bg-clip-text text-transparent">
            DEVCLUB
          </h1>
        </div>

        {/* Painel de Conteúdo */}
        <div className="relative z-10 w-full pb-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-16 md:px-12 lg:flex-row lg:justify-between lg:px-24 lg:pb-20">
            
            {/* Lado Esquerdo - Info da Marca */}
            <div className="flex w-full max-w-md flex-col gap-8">
              <div className="flex flex-col gap-6">
                <img
                  src={devclubLogo}
                  alt="DevClub Logo"
                  className="h-12 w-auto object-contain object-left"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    Construa sua carreira de sucesso na tecnologia.
                  </h2>
                  <p className="text-base leading-relaxed text-white/60">
                    O ecossistema definitivo para quem deseja dominar a programação, 
                    acelerar a carreira e fazer parte da comunidade mais engajada do Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* Lado Direito - Links */}
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
              {footerLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base font-medium text-white/60 transition-colors hover:text-white"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Copyright e Links Legais (Barra Inferior) */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
              <p className="text-sm font-medium text-white/50 text-center sm:text-left">
                © {new Date().getFullYear()} DevClub. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm font-medium text-white/50">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </RuixenGradientFooter>
  );
}