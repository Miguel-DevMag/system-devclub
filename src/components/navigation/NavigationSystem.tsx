import { useEffect, useMemo, useState } from "react";

import devclubLogo from "@/assets/logos/devclub.png";
import { Container } from "@/components/layout/Container";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import type { NavigationItem } from "@/components/navigation/NavigationLink";
import { useActiveSection } from "@/components/navigation/useActiveSection";
import { cn } from "@/lib/utils";

const NAVIGATION_ITEMS = [
  { label: "Formações", href: "#formacoes", sectionId: "formacoes" },
  { label: "Ecossistema", href: "#ecossistema", sectionId: "ecossistema" },
  { label: "Plataforma", href: "#plataforma", sectionId: "plataforma" },
  { label: "Professores", href: "#mentores", sectionId: "mentores" },
  { label: "Comunidade", href: "#comunidade", sectionId: "comunidade" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
] as const satisfies readonly NavigationItem[];

const STUDENT_CTA_HREF = "#formacoes" as const;

export function NavigationSystem() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = useMemo(
    () => NAVIGATION_ITEMS.map((item) => item.sectionId),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const updateHeaderState = () => setScrolled(window.scrollY > 18);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "border-white/12 bg-neutral-950/86 shadow-[0_12px_36px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          : "border-white/[0.06] bg-neutral-950/12",
      )}
    >
      <Container>
        <div className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-3 lg:gap-4 xl:gap-7">
          <a
            href="#hero"
            aria-label="DevClub — ir para o início"
            onClick={() => setMobileOpen(false)}
            className="relative z-[70] inline-flex min-h-11 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            <img
              src={devclubLogo}
              alt="DevClub"
              className="h-8 w-auto object-contain sm:h-10 rounded-sm"
            />
          </a>

          <DesktopNavigation
            activeSection={activeSection}
            ctaHref={STUDENT_CTA_HREF}
            items={NAVIGATION_ITEMS}
            scrolled={scrolled}
          />

          <MobileNavigation
            activeSection={activeSection}
            ctaHref={STUDENT_CTA_HREF}
            items={NAVIGATION_ITEMS}
            open={mobileOpen}
            setOpen={setMobileOpen}
          />
        </div>
      </Container>
    </header>
  );
}
