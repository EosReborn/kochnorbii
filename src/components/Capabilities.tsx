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
            className="group grid grid-cols-1 items-baseline gap-x-4 border-t border-line py-7 last:border-b md:grid-cols-[1fr_2fr] md:items-center md:py-9"
          >
            <span className="font-display text-3xl text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-4xl">
              {cap.title}
            </span>
            <span className="mt-2 max-w-md font-body text-sm text-stone md:mt-0 md:text-right md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
              {cap.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
