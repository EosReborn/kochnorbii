import { labItems, labSlots } from "@/data/lab";

export default function Lab() {
  const hasItems = labItems.length > 0;

  return (
    <section
      id="lab"
      className="container-edge border-t border-line py-28 md:py-40"
      aria-labelledby="lab-heading"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <h2
          id="lab-heading"
          className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium text-paper md:col-span-6"
        >
          Labor
        </h2>

        <p className="font-body text-base leading-relaxed text-paper/80 md:col-span-5 md:col-start-8 md:text-lg">
          Ötletek, kísérletek és dolgok, amelyeknek nem feltétlenül kell
          ügyfélprojektnek lenniük.
        </p>
      </div>

      {hasItems ? (
        <ul className="mt-16 md:mt-20">
          {labItems.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={item.title} className="border-t border-line py-8 last:border-b md:py-10">
                <Wrapper
                  {...wrapperProps}
                  className={`group flex flex-col gap-2 ${item.href ? "cursor-pointer" : ""}`}
                >
                  <span className="font-display text-2xl text-paper transition-colors duration-300 group-hover:text-[var(--blue)] md:text-3xl">
                    {item.title}
                  </span>
                  <span className="max-w-md font-body text-sm text-stone">{item.tagline}</span>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="mt-16 md:mt-20">
          {labSlots.map((slot) => (
            <li
              key={slot.index}
              className="flex items-baseline justify-between gap-6 border-t border-line py-8 last:border-b md:py-10"
            >
              <span className="flex items-baseline gap-6">
                <span className="font-body text-sm text-[var(--blue)]">{slot.index}</span>
                <span className="font-display text-2xl text-paper/50 md:text-3xl">
                  {slot.label}
                </span>
              </span>
              <span className="shrink-0 font-body text-xs uppercase tracking-[0.08em] text-stone">
                Hamarosan
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
