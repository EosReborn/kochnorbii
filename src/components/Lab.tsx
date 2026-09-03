import { labItems } from "@/data/lab";
import Reveal from "./Reveal";

export default function Lab() {
  return (
    <section
      id="lab"
      className="container-edge border-t border-line py-28 md:py-36"
      aria-labelledby="lab-heading"
    >
      <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12">
        <Reveal
          as="h2"
          id="lab-heading"
          className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium text-paper md:col-span-6"
        >
          Lab
        </Reveal>
        <Reveal
          delay={100}
          className="font-body text-base leading-relaxed text-paper/75 md:col-span-4 md:col-start-9"
        >
          Kísérletek, ötletek és dolgok, amiket azért építek, mert kíváncsi
          vagyok rájuk.
        </Reveal>
      </div>

      <ul className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
        {labItems.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 60}
            className="flex flex-col justify-between gap-10 bg-ink px-8 py-10"
          >
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs text-stone">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-stone"
                  aria-hidden="true"
                />
                {item.status}
              </span>
              <h3 className="mt-6 font-display text-2xl text-paper">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-paper/70">
                {item.tagline}
              </p>
            </div>
            <span className="font-body text-xs text-stone">{item.year}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
