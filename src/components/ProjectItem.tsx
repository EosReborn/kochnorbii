"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { getHostname, getSiteScreenshotUrl } from "@/lib/screenshot";
import Reveal from "./Reveal";

export default function ProjectItem({
  project,
  index,
  total,
  reversed,
}: {
  project: Project;
  index: number;
  total: number;
  reversed: boolean;
}) {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewErrored, setPreviewErrored] = useState(false);
  const number = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? {
        href: project.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.title} megtekintése (külső oldal, új lapon nyílik meg)`,
      }
    : {};

  const hostname = project.href ? getHostname(project.href) : null;
  const previewSrc =
    project.screenshot ?? (project.href ? getSiteScreenshotUrl(project.href) : null);
  const showPreview = Boolean(previewSrc) && !previewErrored;

  return (
    <Reveal
      as="article"
      className="group grid grid-cols-1 gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-6 md:py-24"
    >
      <div
        className={`order-2 flex flex-col justify-center md:col-span-5 md:py-6 ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <span className="mb-6 font-body text-xs text-[var(--gold)]">
          {number} / {totalStr}
        </span>
        <h3 className="font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.02] text-paper">
          {project.title}
        </h3>
        <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-paper/75">
          {project.description}
        </p>
        <div className="mt-8 flex items-center justify-between text-sm text-stone md:max-w-sm">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <Wrapper
        {...wrapperProps}
        className={`group/image order-1 block self-start overflow-hidden rounded-lg border border-line bg-ink-soft shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-7 md:hover:-translate-y-1 ${
          reversed ? "md:order-1" : "md:order-2"
        } ${project.href ? "cursor-pointer" : ""}`}
      >
        {/* Sötét fejléc-sáv, ahogy a Koch Digital Studio esettanulmány-mockupjain is */}
        <div className="flex h-10 items-center justify-between gap-3 border-b border-line bg-ink px-4">
          <span className="truncate font-body text-xs text-paper/90">
            {project.title}
          </span>
          {project.href && (
            <span
              aria-hidden="true"
              className="shrink-0 font-body text-xs text-stone transition-colors duration-300 group-hover/image:text-paper"
            >
              ↗
            </span>
          )}
        </div>

        {/* Fix, breakpointenként explicit magasság — nem aspect-ratio és nem
            százalékos gyerekmagasság, hogy Safariban is garantáltan
            megfelelően vágja a tartalmat (ld. korábbi hibát). */}
        <div className="relative h-64 w-full overflow-hidden bg-ink sm:h-72 md:h-80 lg:h-[22rem]">
          {/* Absztrakt vizuál — alapréteg, amíg az élő screenshot betölt,
              illetve ha a szolgáltatás nem elérhető. */}
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            className="object-cover"
            sizes="(min-width: 768px) 55vw, 100vw"
          />

          {showPreview && previewSrc && (
            <Image
              src={previewSrc}
              alt={`Élő előnézet: ${project.title} weboldala${hostname ? ` (${hostname})` : ""}`}
              fill
              unoptimized
              onLoad={() => setPreviewLoaded(true)}
              onError={() => setPreviewErrored(true)}
              className={`object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-105 ${
                previewLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          )}
        </div>
      </Wrapper>
    </Reveal>
  );
}
