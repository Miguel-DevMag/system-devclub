import { useEffect, useId, useRef, type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { NavigationLink, type NavigationItem } from "@/components/navigation/NavigationLink";
import { PreferenceControls } from "@/components/navigation/PreferenceControls";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

interface MobileNavigationProps {
  activeSection: string;
  ctaHref: string;
  items: readonly NavigationItem[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileNavigation({ activeSection, ctaHref, items, open, setOpen }: MobileNavigationProps) {
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = usePreferences();
  const labels = targetedContent[language].navigation;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [open, setOpen]);

  useEffect(() => {
    const desktopMedia = matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktopMedia.addEventListener("change", closeOnDesktop);
    return () => desktopMedia.removeEventListener("change", closeOnDesktop);
  }, [setOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="relative z-[70] inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white outline-none transition-colors duration-200 hover:bg-white/[0.11] focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60]">
            <motion.button
              type="button"
              aria-label={labels.closeMenu}
              className="absolute inset-0 cursor-default bg-black/72 backdrop-blur-[3px]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            />
            <motion.div
              ref={panelRef}
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label={labels.explore}
              className="mobile-navigation-panel absolute inset-x-0 top-0 max-h-[min(46rem,100dvh)] overflow-y-auto rounded-b-[2rem] border-b border-white/12 bg-[#090909]/98 px-4 pb-7 pt-24 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.9)] sm:px-6 sm:pb-9"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav aria-label={labels.explore} className="mx-auto w-full max-w-2xl">
                <p className="mb-4 px-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">{labels.explore}</p>
                <div className="grid gap-1 sm:grid-cols-2 sm:gap-x-3">
                  {items.map((item) => (
                    <NavigationLink key={item.sectionId} item={item} isActive={activeSection === item.sectionId} mobile onClick={() => setOpen(false)} />
                  ))}
                </div>
                <PreferenceControls mobile />
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group mt-4 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 outline-none transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:translate-y-0"
                >
                  {labels.student}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
