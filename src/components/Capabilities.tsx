import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section
      className="container-edge border-t border-line py-28 md:py-40"
      aria-labelledby="capabilities-heading"
    >
      <h2
        id="capabilities-heading"
        className="mb-16 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium text-paper md:mb-20"
      >
        Miben tudok segíteni
      </h2>

      <ul>
        {capabilities.map((cap) => (
          <li
            key={cap.index}
            className="group grid grid-cols-1 gap-3 border-t border-line py-8 last:border-b md:grid-cols-[3rem_1fr_2fr] md:items-baseline md:gap-6 md:py-10"
          >
            <span className="font-body text-sm text-[var(--blue)]">{cap.index}</span>
            <span className="font-display text-3xl text-paper transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[var(--blue)] md:text-5xl">
              {cap.title}
            </span>
            <span className="font-body text-sm uppercase tracking-[0.06em] text-stone md:text-right">
              {cap.items.join(" / ")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
