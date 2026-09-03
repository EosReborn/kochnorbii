import { capabilities } from "@/data/capabilities";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section
      className="container-edge border-t border-line py-28 md:py-36"
      aria-labelledby="capabilities-heading"
    >
      <Reveal
        as="h2"
        id="capabilities-heading"
        className="mb-14 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium text-paper md:mb-20"
      >
        Miben tudok segíteni
      </Reveal>

      <ul>
        {capabilities.map((cap, i) => (
          <Reveal
            as="li"
            key={cap.index}
            delay={i * 40}
            className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 border-t border-line py-6 last:border-b md:grid-cols-[5rem_1fr_2fr] md:items-center md:py-8"
          >
            <span className="font-body text-sm text-stone">{cap.index}</span>
            <span className="font-display text-2xl text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
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
