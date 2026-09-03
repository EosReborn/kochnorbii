import { labItems } from "@/data/lab";

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

        {!hasItems && (
          <p className="font-body text-base leading-relaxed text-paper/80 md:col-span-6 md:col-start-7 md:text-lg">
            Ide kerülnek majd a saját projektek, web experimentek, AI
            projektek, UI ötletek, digitális termékek és creative coding
            kísérletek — ahogy elkészülnek.
          </p>
        )}
      </div>

      {hasItems && (
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
                  <span className="font-display text-2xl text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
                    {item.title}
                  </span>
                  <span className="max-w-md font-body text-sm text-stone">{item.tagline}</span>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
