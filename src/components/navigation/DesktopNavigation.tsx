import { ArrowUpRight } from "lucide-react";

import {
  NavigationLink,
  type NavigationItem,
} from "@/components/navigation/NavigationLink";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  activeSection: string;
  ctaHref: string;
  items: readonly NavigationItem[];
  scrolled: boolean;
}

export function DesktopNavigation({
  activeSection,
  ctaHref,
  items,
  scrolled,
}: DesktopNavigationProps) {
  return (
    <>
      <nav
        aria-label="Navegação principal"
        className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1"
      >
        {items.map((item) => (
          <NavigationLink
            key={item.sectionId}
            item={item}
            isActive={activeSection === item.sectionId}
          />
        ))}
      </nav>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group hidden min-h-11 items-center justify-center gap-2 rounded-full border border-white/80 bg-white px-4 text-sm font-semibold text-neutral-950 shadow-[0_8px_24px_-14px_rgba(255,255,255,0.65)] outline-none transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-px hover:bg-neutral-100 hover:shadow-[0_12px_28px_-14px_rgba(255,255,255,0.8)] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:translate-y-0 active:shadow-none lg:inline-flex xl:px-5",
          !scrolled && "shadow-[0_8px_24px_-16px_rgba(255,255,255,0.5)]",
        )}
      >
        Área do aluno
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </>
  );
}
