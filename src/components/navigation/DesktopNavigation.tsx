import { ArrowUpRight } from "lucide-react";

import { NavigationLink, type NavigationItem } from "@/components/navigation/NavigationLink";
import { PreferenceControls } from "@/components/navigation/PreferenceControls";
import { targetedContent } from "@/data/targeted-content";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/preferences/usePreferences";

interface DesktopNavigationProps {
  activeSection: string;
  ctaHref: string;
  items: readonly NavigationItem[];
  scrolled: boolean;
}

export function DesktopNavigation({ activeSection, ctaHref, items, scrolled }: DesktopNavigationProps) {
  const { language } = usePreferences();
  const labels = targetedContent[language].navigation;

  return (
    <>
      <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1">
        {items.map((item) => (
          <NavigationLink key={item.sectionId} item={item} isActive={activeSection === item.sectionId} />
        ))}
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        <PreferenceControls />
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/80 bg-white px-4 text-sm font-semibold text-neutral-950 shadow-[0_8px_24px_-14px_rgba(255,255,255,0.65)] outline-none transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-px hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:translate-y-0 active:shadow-none xl:px-5",
            !scrolled && "shadow-[0_8px_24px_-16px_rgba(255,255,255,0.5)]",
          )}
        >
          {labels.student}
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </>
  );
}
