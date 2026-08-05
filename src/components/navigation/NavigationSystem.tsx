import { useEffect, useMemo, useState } from "react";

import devclubLogo from "@/assets/logos/devclub.png";
import { Container } from "@/components/layout/Container";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import type { NavigationItem } from "@/components/navigation/NavigationLink";
import { useActiveSection } from "@/components/navigation/useActiveSection";
import { officialLinks } from "@/config/official-links";
import { targetedContent } from "@/data/targeted-content";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/preferences/usePreferences";

export function NavigationSystem() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = usePreferences();
  const labels = targetedContent[language].navigation;

  const items = useMemo(
    () => [
      { label: labels.formations, href: "#jornada-aprendizado", sectionId: "jornada-aprendizado" },
      { label: labels.platform, href: "#plataforma", sectionId: "plataforma" },
      { label: labels.community, href: "#comunidade", sectionId: "comunidade" },
      { label: labels.people, href: "#pessoas-resultados", sectionId: "pessoas-resultados" },
      { label: labels.faq, href: "#faq", sectionId: "faq" },
    ] as const satisfies readonly NavigationItem[],
    [labels],
  );
  const sectionIds = useMemo(() => items.map((item) => item.sectionId), [items]);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const updateHeaderState = () => setScrolled(window.scrollY > 18);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <>
      <a
        href="#conteudo-principal"
        className="site-skip-link fixed left-4 top-3 z-[80] rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 shadow-lg outline-none transition-transform focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        {labels.skip}
      </a>
      <header
        className={cn(
          "site-navigation fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
          scrolled
            ? "border-white/12 bg-neutral-950/86 shadow-[0_12px_36px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            : "border-white/[0.06] bg-neutral-950/12",
        )}
      >
        <Container>
          <div className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-3 lg:gap-4 xl:gap-5">
            <a
              href="#hero"
              aria-label="DevClub"
              onClick={() => setMobileOpen(false)}
              className="relative z-[70] inline-flex min-h-11 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <img src={devclubLogo} alt="DevClub" className="h-8 w-auto rounded-sm object-contain sm:h-10" />
            </a>

            <DesktopNavigation
              activeSection={activeSection}
              ctaHref={officialLinks.studentArea}
              items={items}
              scrolled={scrolled}
            />

            <MobileNavigation
              activeSection={activeSection}
              ctaHref={officialLinks.studentArea}
              items={items}
              open={mobileOpen}
              setOpen={setMobileOpen}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
