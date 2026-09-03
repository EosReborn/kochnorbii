"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
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
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const number = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- csak kliensen elérhető böngésző API kiolvasása mountkor
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!isFinePointer) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setPos({ x, y }));
  };

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
    <Reveal
      as="article"
      className="group grid grid-cols-1 gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-6 md:py-24"
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
        className={`group/image relative order-1 block overflow-hidden bg-ink-soft md:col-span-7 ${
          reversed ? "md:order-1" : "md:order-2"
        } ${project.href ? "cursor-pointer" : ""}`}
        onMouseMove={handleMouseMove}
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
        </div>

        {project.href && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute flex h-16 w-16 items-center justify-center rounded-full bg-paper font-body text-xs text-ink opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 group-focus-visible/image:opacity-100"
            style={
              isFinePointer
                ? {
                    left: 0,
                    top: 0,
                    transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`,
                  }
                : { left: "50%", top: "50%", transform: "translate(-50%, -50%)" }
            }
          >
            Megnyitás
          </span>
        )}
      </Wrapper>
    </Reveal>
  );
}
