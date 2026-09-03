import { site } from "@/lib/site";
import Reveal from "./Reveal";
import GhostNumber from "./GhostNumber";

export default function About() {
  return (
    <section
      id="about"
      className="container-edge relative border-t border-line py-28 md:py-40"
      aria-labelledby="about-heading"
    >
      <GhostNumber value="02" className="absolute -top-6 right-4 md:right-8" />

      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <Reveal
          as="p"
          id="about-heading"
          className="font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-medium leading-[1.25] text-paper md:col-span-9 md:col-start-4"
        >
          Koch Norbert vagyok, tervező és fejlesztő. Olyan digitális
          élményeket építek, amelyek egyszerre működnek jól és néznek ki
          jól — a design, a fejlesztés és az üzleti gondolkodás
          metszetében. A konkrét céges weboldal-projekteket a{" "}
          <a
            href={site.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover text-paper"
          >
            Koch Digital Studio
          </a>{" "}
          keretében készítem.
        </Reveal>
      </div>
    </section>
  );
}
