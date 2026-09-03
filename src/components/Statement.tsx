import Reveal from "./Reveal";
import GhostNumber from "./GhostNumber";

export default function Statement() {
  return (
    <section
      className="container-edge relative border-t border-line py-32 md:py-48"
      aria-label="Filozófia"
    >
      <GhostNumber value="05" className="absolute -top-6 left-4 md:left-8" />

      <p className="relative max-w-4xl font-display text-[clamp(2rem,6.5vw,5.2rem)] font-medium leading-[1.08] text-paper md:ml-[8%]">
        <Reveal as="span" className="block">
          A jó digitális élmény
        </Reveal>
        <Reveal as="span" delay={120} className="block text-stone">
          nem magyarázza magát.
        </Reveal>
        <Reveal as="span" delay={240} className="block">
          Egyszerűen működik.
        </Reveal>
      </p>
    </section>
  );
}
