import { labItems } from "@/data/lab";
import Reveal from "./Reveal";
import GhostNumber from "./GhostNumber";

export default function Lab() {
  return (
    <section
      id="lab"
      className="container-edge relative border-t border-line py-28 md:py-40"
      aria-labelledby="lab-heading"
    >
      <GhostNumber value="04" className="absolute -top-6 right-4 md:right-8" />

      <div className="relative mb-16 grid grid-cols-1 gap-6 md:mb-24 md:grid-cols-12">
        <Reveal
          as="h2"
          id="lab-heading"
          className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium text-paper md:col-span-6"
        >
          Labor
        </Reveal>
        <Reveal
          delay={100}
          className="font-body text-base leading-relaxed text-paper/75 md:col-span-4 md:col-start-9"
        >
          Kísérletek, ötletek és dolgok, amiket azért építek, mert kíváncsi
          vagyok rájuk.
        </Reveal>
      </div>

      <ul className="relative flex flex-col">
        {labItems.map((item, i) => {
          const alignRight = i % 2 === 1;
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              className={`group flex flex-col gap-3 border-t border-line py-10 last:border-b md:py-14 ${
                alignRight ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <span
                className={`inline-flex items-center gap-2 font-body text-xs text-stone ${
                  alignRight ? "flex-row-reverse" : ""
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden="true" />
                {item.status} — {item.year}
              </span>
              <h3
                className={`max-w-2xl font-display text-[clamp(2rem,6vw,4.2rem)] font-medium leading-[0.95] text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  alignRight
                    ? "group-hover:-translate-x-2 group-hover:-skew-x-2"
                    : "group-hover:translate-x-2 group-hover:skew-x-2"
                }`}
              >
                {item.title}
              </h3>
              <p className="max-w-sm font-body text-sm leading-relaxed text-stone">
                {item.tagline}
              </p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
