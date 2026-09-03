"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
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
  const [hovered, setHovered] = useState(false);
  const number = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal
      as="article"
      className={`group grid grid-cols-1 gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-6 md:py-24 ${
        reversed ? "" : ""
      }`}
    >
      <div
        className={`order-2 flex flex-col justify-center md:col-span-5 md:py-6 ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <span className="mb-6 font-body text-xs text-stone">
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
        className={`order-1 block overflow-hidden bg-ink-soft md:col-span-7 ${
          reversed ? "md:order-1" : "md:order-2"
        } ${project.href ? "cursor-pointer" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 55vw, 100vw"
          />
          {project.href && (
            <span
              className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-sm text-paper transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              Megnyitás
            </span>
          )}
        </div>
      </Wrapper>
    </Reveal>
  );
}
