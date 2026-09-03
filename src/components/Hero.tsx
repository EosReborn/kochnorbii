"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { site } from "@/lib/site";

const BASE_WEIGHT = 500;
const MAX_DELTA = 150; // 500 → max. ~650, tudatosan visszafogott (nem black)
const FALLOFF_CHARS = 4; // a hatás kb. 3–5 karakter szélességében érezhető
const LERP_EASE = 0.14; // enyhe, természetes késés a kurzor mögött
const SETTLE_EPSILON = 0.12;
const MOBILE_MAX_DELTA = 60; // scroll-alapú, nagyon visszafogott sweep

/**
 * A Hero signature interactionje: a "KOCH NORBERT" betűi finoman,
 * súlyban reagálnak a kurzor közelségére (valódi variable font
 * `font-variation-settings` — nem transform/opacity szimuláció).
 *
 * - Desktopon (fine pointer): kurzor-alapú, Gauss-görbével lágyított
 *   távolság-hatás, requestAnimationFrame + lerp simítással.
 * - Touch eszközön: nagyon visszafogott, scroll-vezérelt egységes
 *   súly-sweep, ugyanazzal a "nyelvvel" (súlyváltozás), más bemenettel.
 * - `prefers-reduced-motion` esetén teljesen statikus, semmilyen
 *   listener nem csatlakozik.
 *
 * Teljesítmény: a betűk pozícióját csak mountkor / resize-kor mérjük
 * (getBoundingClientRect), a hot path (mousemove/scroll) kizárólag
 * gyorsítótárazott koordinátákkal számol — nincs layout thrashing.
 */
function useHeroTypeWeight(containerRef: RefObject<HTMLElement | null>) {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const centersRef = useRef<{ cx: number; cy: number }[]>([]);
  const currentRef = useRef<number[]>([]);
  const targetRef = useRef<number[]>([]);
  const radiusRef = useRef(200);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const activeRef = useRef(false);

  const registerLetter = (el: HTMLSpanElement | null, index: number) => {
    lettersRef.current[index] = el;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const letters = lettersRef.current;
    currentRef.current = letters.map(() => BASE_WEIGHT);
    targetRef.current = letters.map(() => BASE_WEIGHT);

    const measure = () => {
      centersRef.current = letters.map((el) => {
        if (!el) return { cx: 0, cy: 0 };
        const r = el.getBoundingClientRect();
        return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
      });
      const widths = letters.map((el) => el?.getBoundingClientRect().width ?? 0);
      const avgWidth = widths.reduce((s, w) => s + w, 0) / (widths.length || 1);
      radiusRef.current = Math.max(40, avgWidth * FALLOFF_CHARS);
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(container);

    // A webfont betöltése (font-display: swap) után a fallback fonttal
    // mért betűszélességek/pozíciók elavulhatnak — a valódi font
    // betöltődése után újramérjük.
    let cancelled = false;
    document.fonts.ready
      .then(() => {
        if (!cancelled) measure();
      })
      .catch(() => {});

    // ---- Desktop: kurzor-vezérelt súly ----
    const runLoop = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      const tick = () => {
        let stillMoving = false;
        const currents = currentRef.current;
        const targets = targetRef.current;
        for (let i = 0; i < letters.length; i++) {
          const c = currents[i];
          const t = targets[i];
          const next = c + (t - c) * LERP_EASE;
          currents[i] = next;
          const el = letters[i];
          if (el) el.style.fontVariationSettings = `'wght' ${next.toFixed(1)}`;
          if (Math.abs(t - next) > SETTLE_EPSILON) stillMoving = true;
        }
        if (stillMoving || activeRef.current) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          runningRef.current = false;
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      activeRef.current = true;
      const centers = centersRef.current;
      const radius = radiusRef.current;
      const targets = targetRef.current;
      for (let i = 0; i < centers.length; i++) {
        const dx = centers[i].cx - e.clientX;
        const dy = centers[i].cy - e.clientY;
        const distSq = dx * dx + dy * dy;
        const influence = Math.exp(-distSq / (2 * radius * radius));
        targets[i] = BASE_WEIGHT + MAX_DELTA * influence;
      }
      runLoop();
    };

    const handleLeave = () => {
      activeRef.current = false;
      targetRef.current = targetRef.current.map(() => BASE_WEIGHT);
      runLoop();
    };

    // ---- Mobil/touch: scroll-vezérelt, egységes, nagyon visszafogott sweep ----
    let scrollTicking = false;
    const handleScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const raw = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.6)));
        const eased = raw * raw * (3 - 2 * raw); // smoothstep
        const weight = BASE_WEIGHT + MOBILE_MAX_DELTA * eased;
        for (const el of letters) {
          if (el) el.style.fontVariationSettings = `'wght' ${weight.toFixed(1)}`;
        }
        scrollTicking = false;
      });
    };

    if (isFinePointer) {
      container.addEventListener("mousemove", handleMove, { passive: true });
      container.addEventListener("mouseleave", handleLeave);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      cancelled = true;
      ro.disconnect();
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return registerLetter;
}

function AnimatedWord({
  word,
  startIndex,
  registerLetter,
  className,
}: {
  word: string;
  startIndex: number;
  registerLetter: (el: HTMLSpanElement | null, index: number) => void;
  className: string;
}) {
  return (
    <span className={className}>
      {word.split("").map((char, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => registerLetter(el, startIndex + i)}
          className="inline-block"
          style={{ fontVariationSettings: `'wght' ${BASE_WEIGHT}` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

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
  const heroRef = useRef<HTMLElement | null>(null);
  const registerLetter = useHeroTypeWeight(heroRef);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[var(--nav-h)]"
      aria-label="Bemutatkozás"
    >
      <div className="noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative flex flex-1 flex-col justify-center">
        {/* Full-bleed tipográfia — a legnagyobb szöveg valóban a viewport
            széléig fut, nincs jobb oldali korlát. A vizuális betűk
            dekoratívak (aria-hidden); a valódi, felolvasható szöveg egy
            külön sr-only elemben van. */}
        <h1 className="bleed-edge font-display font-medium leading-[0.86] tracking-tight text-paper">
          <span className="sr-only">Koch Norbert</span>
          <span aria-hidden="true">
            <AnimatedWord
              word="Koch"
              startIndex={0}
              registerLetter={registerLetter}
              className="block text-[clamp(4rem,17vw,13rem)]"
            />
            <AnimatedWord
              word="Norbert"
              startIndex={4}
              registerLetter={registerLetter}
              className="block text-[clamp(4rem,17vw,13rem)]"
            />
          </span>
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
