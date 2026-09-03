import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="container-edge border-t border-line py-28 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
        <Reveal
          as="h2"
          id="about-heading"
          className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.08] text-paper md:col-span-7"
        >
          Digitális felületeket tervezek és fejlesztek, ahol a vizuális
          minőség és a technikai megvalósítás ugyanolyan fontos.
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col gap-6 md:col-span-4 md:col-start-9"
        >
          <p className="font-body text-base leading-relaxed text-paper/75">
            Koch Norbert vagyok, tervező és fejlesztő. Olyan digitális
            élményeket szeretek létrehozni, amelyek egyszerre működnek jól és
            néznek ki jól. A design, a fejlesztés és az üzleti gondolkodás
            metszetében dolgozom.
          </p>
          <p className="font-body text-base leading-relaxed text-paper/75">
            A konkrét céges weboldal-projekteket a Koch Digital Studio
            keretében készítem.
          </p>
          <a
            href={site.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover mt-2 w-fit font-body text-base text-paper"
          >
            Koch Digital Studio →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
