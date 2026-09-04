"use client";

import { useEffect, useState } from "react";

const SECTIONS: { id: string; label: string }[] = [
  { id: "top", label: "Kezdés" },
  { id: "work", label: "Munkák" },
  { id: "about", label: "Rólam" },
  { id: "lab", label: "Labor" },
  { id: "contact", label: "Kapcsolat" },
];

/**
 * Állandó, fix pozíciójú függőleges gerincvonal a bal szélen — nyomtatott
 * kiadvány-jellegű, egyetlen visszatérő szerkezeti elem, ami az egész
 * oldalt egyetlen szerkesztett objektumként köti össze. Csak md+ méretnél
 * jelenik meg; mobilon a Navbar hordozza ugyanezt az információt.
 */
export default function Spine() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeLabel = SECTIONS.find((s) => s.id === active)?.label ?? "Kezdés";

  return (
    <div
      className="fixed inset-y-0 left-0 z-40 hidden w-[var(--spine-w)] flex-col items-center justify-between py-8 md:flex"
      aria-hidden="true"
    >
      <span className="h-16 w-px bg-[var(--line-strong)]" />

      <div className="flex flex-1 items-center">
        <span
          className="whitespace-nowrap font-body text-[0.65rem] tracking-[0.2em] text-stone"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          KOCH NORBERT — PORTFÓLIÓ
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span
          className="whitespace-nowrap font-body text-[0.65rem] tracking-[0.15em] text-[var(--blue)] transition-opacity duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          {activeLabel}
        </span>
        <span className="h-8 w-px bg-[var(--line-strong)]" />
      </div>
    </div>
  );
}
