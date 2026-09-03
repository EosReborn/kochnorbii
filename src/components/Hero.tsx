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

      <div className="relative flex flex-1 flex-col justify-center">
        {/* Full-bleed tipográfia — a legnagyobb szöveg valóban a viewport
            széléig fut, nincs jobb oldali korlát. Statikus: a Hero
            animáció nélkül is erős és felismerhető. */}
        <h1 className="bleed-edge font-display font-medium leading-[0.86] tracking-tight text-paper">
          <span className="block text-[clamp(4rem,17vw,13rem)]">Koch</span>
          <span className="block text-[clamp(4rem,17vw,13rem)]">Norbert</span>
        </h1>

        <div className="container-edge mt-10 flex flex-col items-start gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xs font-body text-sm leading-relaxed text-stone sm:max-w-sm">
            Digital Designer &amp; Developer — digitális felületeket
            tervezek és fejlesztek, ahol a design és a technológia
            egyformán fontos.
          </p>

          <a href="#work" className="underline-hover shrink-0 font-body text-base text-paper">
            Kiemelt munkák
          </a>
        </div>
      </div>

      <div className="container-edge relative flex items-center justify-between border-t border-line py-6 font-body text-xs text-stone">
        <LocalTime />
        <span className="hidden items-center gap-2 sm:flex" aria-hidden="true">
          <span className="h-8 w-px bg-[var(--line-strong)]" />
          Görgess
        </span>
      </div>
    </section>
  );
}
