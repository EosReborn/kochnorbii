"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("hu-HU", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Budapest",
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {site.location} {time ? `— ${time}` : ""}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[var(--nav-h)]"
      aria-label="Bemutatkozás"
    >
      <div className="noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-edge relative flex flex-1 flex-col justify-center">
        <p className="mb-6 font-body text-sm text-stone md:mb-8">
          Designer. Developer. Builder.
        </p>

        <h1 className="font-display font-medium leading-[0.92] tracking-tight text-paper">
          <span className="block text-[clamp(3.2rem,14vw,10.5rem)]">Koch</span>
          <span className="block text-[clamp(3.2rem,14vw,10.5rem)]">Norbert</span>
        </h1>

        <div className="mt-10 flex max-w-md flex-col gap-8 md:mt-14 md:max-w-lg">
          <p className="font-body text-lg leading-relaxed text-paper/85 md:text-xl">
            Digitális élményeket, weboldalakat és termékeket tervezek és
            építek — a vizuális minőség és a technikai megvalósítás
            metszetében.
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href="#work"
              className="underline-hover font-body text-base text-paper"
            >
              Selected Work
            </a>
            <a
              href={site.studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover font-body text-base text-stone hover:text-paper"
            >
              Koch Digital Studio
            </a>
          </div>
        </div>
      </div>

      <div className="container-edge relative flex items-center justify-between border-t border-line py-6 font-body text-xs text-stone">
        <LocalTime />
        <span className="hidden items-center gap-2 sm:flex" aria-hidden="true">
          <span className="h-8 w-px animate-pulse bg-[var(--line-strong)]" />
          Scroll
        </span>
      </div>
    </section>
  );
}
