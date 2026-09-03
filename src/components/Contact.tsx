import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-edge border-t border-line py-28 md:py-40"
      aria-labelledby="contact-heading"
    >
      <Reveal
        as="h2"
        id="contact-heading"
        className="font-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-medium leading-[1.05] text-paper"
      >
        Van egy érdekes ötleted?
        <br />
        <span className="text-stone">Beszéljünk.</span>
      </Reveal>

      <Reveal delay={120} className="mt-14">
        <a
          href={`mailto:${site.email}`}
          className="underline-hover inline-block font-display text-[clamp(1.6rem,4.5vw,2.8rem)] text-[var(--gold)]"
        >
          {site.email}
        </a>
      </Reveal>

      <Reveal
        delay={200}
        className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-body text-base text-stone"
      >
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover hover:text-paper"
        >
          LinkedIn
        </a>
        <a
          href={site.studio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover hover:text-paper"
        >
          Koch Digital Studio
        </a>
      </Reveal>
    </section>
  );
}
