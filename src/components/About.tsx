import { site } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="container-edge border-t border-line py-28 md:py-40"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col gap-6 md:col-span-9 md:col-start-4">
          <p
            id="about-heading"
            className="font-display text-[clamp(2rem,4.8vw,3.6rem)] font-medium leading-[1.2] text-paper"
          >
            Digitális felületeket tervezek és fejlesztek, ahol a vizuális
            minőség és a technikai megvalósítás egyformán fontos.
          </p>
          <p className="font-body text-lg leading-relaxed text-paper/80 md:text-xl">
            Koch Norbert vagyok, designer és developer. Olyan digitális
            élményeket szeretek létrehozni, amelyek egyszerűek,
            karakteresek és jól működnek.
          </p>
          <p className="font-body text-lg leading-relaxed text-paper/80 md:text-xl">
            A konkrét üzleti weboldal-projekteket a{" "}
            <a
              href={site.studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover text-paper transition-colors hover:text-[var(--blue)]"
            >
              Koch Digital Studio
            </a>{" "}
            keretében készítem.
          </p>

          <p className="mt-4 font-body text-sm text-stone">
            Önálló designer és fejlesztő — 2026 óta.
          </p>
        </div>
      </div>
    </section>
  );
}
