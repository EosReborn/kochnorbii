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
        <span
          className="hero-in mb-5 block h-px w-10 bg-[var(--gold)] md:mb-6"
          style={{ animationDelay: "0ms" }}
          aria-hidden="true"
        />
        <p
          className="hero-in mb-6 font-body text-sm text-stone md:mb-8"
          style={{ animationDelay: "60ms" }}
        >
          Tervező. Fejlesztő. Alkotó.
        </p>

        <h1 className="font-display font-medium leading-[0.92] tracking-tight text-paper">
          <span
            className="hero-in block text-[clamp(3.2rem,14vw,10.5rem)]"
            style={{ animationDelay: "90ms" }}
          >
            Koch
          </span>
          <span
            className="hero-in block text-[clamp(3.2rem,14vw,10.5rem)]"
            style={{ animationDelay: "170ms" }}
          >
            Norbert
          </span>
        </h1>

        <div className="mt-10 flex max-w-md flex-col gap-8 md:mt-14 md:max-w-lg">
          <p
            className="hero-in font-body text-lg leading-relaxed text-paper/85 md:text-xl"
            style={{ animationDelay: "300ms" }}
          >
            Digitális élményeket, weboldalakat és termékeket tervezek és
            építek — a vizuális minőség és a technikai megvalósítás
            metszetében.
          </p>

          <div
            className="hero-in flex flex-wrap items-center gap-x-10 gap-y-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#work"
              className="underline-hover font-body text-base text-paper"
            >
              Kiemelt munkák
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

      <div
        className="hero-in container-edge relative flex items-center justify-between border-t border-line py-6 font-body text-xs text-stone"
        style={{ animationDelay: "520ms" }}
      >
        <LocalTime />
        <span className="hidden items-center gap-2 sm:flex" aria-hidden="true">
          <span className="h-8 w-px animate-pulse bg-[var(--line-strong)]" />
          Görgess
        </span>
      </div>
    </section>
  );
}
