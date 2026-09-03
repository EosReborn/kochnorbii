"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { getSiteScreenshotUrl } from "@/lib/screenshot";
import { useReveal } from "@/lib/useReveal";

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewErrored, setPreviewErrored] = useState(false);
  const imageRef = useReveal<HTMLDivElement>();

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

  return (
    <article
      className={`container-edge group border-t border-line py-14 md:py-20 ${
        index === 0 ? "border-t-0" : ""
      }`}
    >
      <Wrapper
        {...wrapperProps}
        className={`block ${project.href ? "cursor-pointer" : ""}`}
      >
        <div
          ref={imageRef}
          className="clip-reveal relative h-[56vh] max-h-[520px] w-full overflow-hidden bg-ink-soft md:h-[70vh] md:max-h-[640px]"
        >
          {/* Absztrakt vizuál — alapréteg, amíg az élő screenshot betölt,
              illetve ha a szolgáltatás nem elérhető. */}
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />

          {showPreview && previewSrc && (
            <Image
              src={previewSrc}
              alt={`Élő előnézet: ${project.title} weboldala`}
              fill
              unoptimized
              onLoad={() => setPreviewLoaded(true)}
              onError={() => setPreviewErrored(true)}
              className={`object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
                previewLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 768px) 90vw, 100vw"
            />
          )}
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <h3 className="font-display text-[clamp(2.4rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight text-paper">
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-6 font-body text-sm text-stone md:flex-col md:items-end md:gap-1 md:text-right">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </Wrapper>
    </article>
  );
}
