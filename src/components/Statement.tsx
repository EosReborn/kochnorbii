import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section
      className="container-edge border-t border-line py-32 md:py-48"
      aria-label="Filozófia"
    >
      <p className="max-w-5xl font-display text-[clamp(2rem,6.5vw,5.2rem)] font-medium leading-[1.08] text-paper">
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
