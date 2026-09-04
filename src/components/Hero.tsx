"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, heroImage } from "@/lib/site";

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
      {site.location}
      {time ? ` — ${time}` : ""}
    </span>
  );
}

function WorkLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="#work"
      className={`underline-hover inline-flex w-fit items-center gap-2 font-body text-base text-[var(--blue)] ${className}`}
    >
      Kiemelt munkák <span aria-hidden="true">→</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[var(--nav-h)]" aria-label="Bemutatkozás">
      {/* Aszimmetrikus fő terület: bal ~35% szöveg, jobb ~65% nagy kép.
          Mobilon egyetlen oszlopba rendeződik (lásd sorrend lent). */}
      <div className="flex flex-col md:grid md:min-h-[86svh] md:grid-cols-[minmax(0,35%)_minmax(0,65%)]">
        {/* 1. Név + szerepkör + bemutatkozás (+ desktopon itt a link is) */}
        <div className="container-edge order-1 flex flex-col justify-center gap-6 py-12 md:py-16 md:pr-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[clamp(2.5rem,4vw,5rem)] font-medium leading-[1.05] tracking-tight text-paper">
              Koch Norbert
            </h1>
            <p className="font-body text-sm tracking-wide text-stone">
              Digital Designer &amp; Developer
            </p>
            <p className="max-w-sm font-body text-base leading-relaxed text-paper/80">
              Digitális felületeket tervezek és fejlesztek, ahol a design
              és a technológia egyformán fontos.
            </p>
          </div>

          <WorkLink className="hidden md:inline-flex" />
        </div>

        {/* 2. Nagy, közel full-bleed kép — nincs card, keret, gradient. */}
        <div className="relative order-2 min-h-[48vh] w-full overflow-hidden sm:min-h-[58vh] md:min-h-0">
          <div className="group relative h-full w-full overflow-hidden">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 768px) 65vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* 3. Helyszín / elérhetőség — teljes szélességű elválasztó sáv. */}
      <div className="container-edge relative flex flex-col gap-3 border-t border-line py-6 font-body text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden="true" />
          Elérhető új projektekre
        </span>
        <LocalTime />
      </div>

      {/* 4. Kiemelt munkák link — mobilon a helyszín-sáv UTÁN jelenik meg. */}
      <div className="container-edge py-8 md:hidden">
        <WorkLink />
      </div>
    </section>
  );
}
