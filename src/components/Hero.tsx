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

export default function Hero() {
  return (
    <section id="top" className="relative pt-[var(--nav-h)]" aria-label="Bemutatkozás">
      {/* Mobil spine-helyettesítő: vékony strukturális sáv, ugyanaz a
          "nyomtatott kiadvány" motívum, mint a desktop bal oldali
          gerincvonal — csak vízszintesen, mert md alatt a Spine rejtve
          van. */}
      <div
        className="container-edge flex items-center gap-3 border-b border-line py-3 md:hidden"
        aria-hidden="true"
      >
        <span className="h-px flex-1 bg-[var(--line-strong)]" />
        <span className="whitespace-nowrap font-body text-[0.65rem] tracking-[0.2em] text-stone">
          KOCH NORBERT — PORTFÓLIÓ
        </span>
      </div>

      <div className="flex flex-col">
        {/* Editorial metaadat: kis név + szerepkör + rövid intro.
            Mobilon a fotó FÖLÖTT, desktopon a fotó ALATT jelenik meg —
            ugyanaz a tartalom, csak a sorrend fordul meg (order). */}
        <div className="container-edge order-1 flex flex-col gap-4 pb-8 pt-10 md:order-2 md:flex-row md:items-end md:justify-between md:pb-0 md:pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-[clamp(2rem,3vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-paper">
              Koch Norbert
            </h1>
            <p className="font-body text-sm tracking-wide text-stone">
              Digital Designer &amp; Developer
            </p>
          </div>

          <p className="max-w-sm font-body text-base leading-relaxed text-paper/80">
            Digitális felületeket tervezek és fejlesztek, ahol a design
            és a technológia egyformán fontos.
          </p>
        </div>

        {/* A hero fő vizuális eleme: nagy, cinematic fekete-fehér portré,
            pontosan ott, ahol korábban az oversized "Koch Norbert"
            tipográfia állt. Nincs szöveg a képen, nincs keret, nincs
            gradient — a fotó önmagában marad tiszta. */}
        <div className="bleed-edge order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft sm:aspect-[3/2] md:aspect-[2.15/1]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 768px) calc(100vw - var(--spine-w)), 100vw"
              className="object-cover object-[70%_20%] md:object-[58%_30%]"
            />
          </div>
        </div>
      </div>

      {/* Helyszín / elérhetőség — teljes szélességű elválasztó sáv. */}
      <div className="container-edge relative flex flex-col gap-3 border-t border-line py-6 font-body text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden="true" />
          Elérhető új projektekre
        </span>
        <LocalTime />
      </div>

      {/* Kiemelt munkák link. */}
      <div className="container-edge py-8">
        <a
          href="#work"
          className="underline-hover inline-flex w-fit items-center gap-2 font-body text-base text-[var(--blue)]"
        >
          Kiemelt munkák <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
