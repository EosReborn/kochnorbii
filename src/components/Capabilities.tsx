import { capabilities } from "@/data/capabilities";
import Reveal from "./Reveal";
import GhostNumber from "./GhostNumber";

export default function Capabilities() {
  return (
    <section
      className="container-edge relative border-t border-line py-28 md:py-40"
      aria-labelledby="capabilities-heading"
    >
      <GhostNumber value="03" className="absolute -top-6 left-4 md:left-8" />

      <Reveal
        as="h2"
        id="capabilities-heading"
        className="relative mb-16 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium text-paper md:mb-20"
      >
        Miben tudok segíteni
      </Reveal>

      <ul className="relative">
        {capabilities.map((cap, i) => (
          <Reveal
            as="li"
            key={cap.index}
            delay={i * 40}
            className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 border-t border-line py-7 last:border-b md:grid-cols-[6rem_1fr_2fr] md:items-center md:py-9"
          >
            <span className="font-body text-sm text-[var(--gold)]">{cap.index}</span>
            <span className="font-display text-3xl text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-4xl">
              {cap.title}
            </span>
            <span className="col-span-2 mt-2 max-w-md font-body text-sm text-stone md:col-span-1 md:mt-0 md:text-right md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
              {cap.description}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
