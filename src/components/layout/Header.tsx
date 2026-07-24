// Header principal — navegação fixa com menu mobile hambúrguer

import { useState, useEffect } from "react";

import devclubLogo from "@/assets/logos/devclub.png";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Formações", href: "#formacoes" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para intensificar o blur do header
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Fecha o menu ao clicar num link
  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-neutral-950/90 backdrop-blur-2xl"
          : "border-transparent bg-neutral-950/60 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — volta ao topo */}
        <a href="#hero" className="flex items-center" onClick={handleNavClick}>
          <img
            src={devclubLogo}
            alt="DevClub"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/65 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#formacoes"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.4)] active:scale-[0.98]"
          >
            Quero ser aluno
          </a>
        </div>

        {/* Botão hamburger mobile */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={cn(
          "overflow-hidden border-b border-white/10 transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav
          className="flex flex-col gap-1 bg-neutral-950/95 px-4 py-4 backdrop-blur-2xl"
          aria-label="Navegação mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#formacoes"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-neutral-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero ser aluno
          </a>
        </nav>
      </div>
    </header>
  );
}