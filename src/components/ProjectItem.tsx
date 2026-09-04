"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Project } from "@/data/projects";
import { getSiteScreenshotUrl } from "@/lib/screenshot";
import { useReveal } from "@/lib/useReveal";

// Aszimmetrikus editorial ritmus: index szerint váltakozó szélesség/eltolás,
// hogy a projektek ne legyenek három egyforma blokk egymás alatt.
const LAYOUT_PATTERNS = [
  "md:w-[82%]", // 01 — nagy, balról indul
  "md:w-[62%] md:ml-auto", // 02 — keskenyebb, jobbra tolva
  "md:w-[94%] md:ml-[4%]", // 03 — újra nagy, enyhén eltolva
];

const MAX_PARALLAX = 6; // px — nagyon enyhe, csak érzékelhető mértékű

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewErrored, setPreviewErrored] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const revealRef = useReveal<HTMLDivElement>();
  const frameRef = useRef<HTMLDivElement | null>(null);
  const finePointerRef = useRef(false);

  useEffect(() => {
    finePointerRef.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!finePointerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: nx * MAX_PARALLAX * -2, y: ny * MAX_PARALLAX * -2 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const previewSrc =
    project.screenshot ?? (project.href ? getSiteScreenshotUrl(project.href) : null);
  const showPreview = Boolean(previewSrc) && !previewErrored;

  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? {
        href: project.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.title} megtekintése (külső oldal, új lapon nyílik meg)`,
      }
    : {};

  const number = String(index + 1).padStart(2, "0");
  const pattern = LAYOUT_PATTERNS[index % LAYOUT_PATTERNS.length];

  return (
    <article
      className={`container-edge group border-t border-line py-14 md:py-20 ${
        index === 0 ? "border-t-0" : ""
      }`}
    >
      <div className={pattern}>
        <Wrapper
          {...wrapperProps}
          className={`block ${project.href ? "cursor-pointer" : ""}`}
        >
          <div
            ref={(el) => {
              revealRef.current = el;
              frameRef.current = el;
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="clip-reveal relative h-[56vh] max-h-[520px] w-full overflow-hidden bg-ink-soft md:h-[65vh] md:max-h-[620px]"
          >
            <div
              className="absolute -inset-2"
              style={{
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Absztrakt vizuál — alapréteg, amíg az élő screenshot betölt,
                  illetve ha a szolgáltatás nem elérhető. */}
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 80vw, 100vw"
              />

              {showPreview && previewSrc && (
                <Image
                  src={previewSrc}
                  alt={`Élő előnézet: ${project.title} weboldala`}
                  fill
                  unoptimized
                  onLoad={() => setPreviewLoaded(true)}
                  onError={() => setPreviewErrored(true)}
                  className={`object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] ${
                    previewLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(min-width: 768px) 80vw, 100vw"
                />
              )}
            </div>
          </div>

          <div className="mt-8">
            <span className="mb-3 block font-body text-sm text-[var(--blue)]">
              {number}
            </span>
            <h3 className="font-display text-[clamp(2.2rem,6.5vw,5.4rem)] font-medium uppercase leading-[0.95] tracking-tight text-paper transition-colors duration-300 group-hover:text-[var(--blue)]">
              {project.title}
            </h3>
            <div className="mt-4 flex items-center gap-4 font-body text-xs uppercase tracking-[0.08em] text-stone">
              <span>{project.category}</span>
              {project.year && (
                <>
                  <span aria-hidden="true">—</span>
                  <span>{project.year}</span>
                </>
              )}
              {project.href && (
                <span
                  aria-hidden="true"
                  className="text-[var(--blue)] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </article>
  );
}
