import { useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 88;

interface SectionState {
  isIntersecting: boolean;
  ratio: number;
  top: number;
}

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = typeof window === "undefined" ? "" : window.location.hash.slice(1);
    return sectionIds.includes(hash) ? hash : "";
  });
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const states = new Map<string, SectionState>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          states.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          });
        });

        const candidates = sectionIds
          .map((id) => ({ id, state: states.get(id) }))
          .filter(
            (candidate): candidate is { id: string; state: SectionState } =>
              Boolean(candidate.state?.isIntersecting),
          )
          .sort((a, b) => {
            const aDistance = Math.abs(a.state.top - HEADER_OFFSET);
            const bDistance = Math.abs(b.state.top - HEADER_OFFSET);
            const distanceDifference = aDistance - bDistance;

            return Math.abs(distanceDifference) > 48
              ? distanceDifference
              : b.state.ratio - a.state.ratio;
          });

        const nextSection = candidates[0]?.id;
        if (nextSection && nextSection !== activeSectionRef.current) {
          activeSectionRef.current = nextSection;
          setActiveSection(nextSection);
        } else if (
          !nextSection &&
          activeSectionRef.current &&
          [...states.values()].every((state) => state.top > HEADER_OFFSET)
        ) {
          activeSectionRef.current = "";
          setActiveSection("");
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -45% 0px`,
        threshold: [0, 0.15, 0.35, 0.6, 0.85],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
