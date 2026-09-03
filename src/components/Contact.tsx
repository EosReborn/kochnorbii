import { site } from "@/lib/site";
import Reveal from "./Reveal";
import GhostNumber from "./GhostNumber";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-edge relative flex min-h-[70vh] flex-col justify-center border-t border-line py-28 md:py-40"
      aria-labelledby="contact-heading"
    >
      <GhostNumber value="06" className="absolute -top-6 right-4 md:right-8" />

      <Reveal>
        <a
          href={`mailto:${site.email}`}
          className="underline-hover block font-display text-[clamp(2.4rem,8vw,6.5rem)] font-medium leading-[1.05] text-paper"
        >
          Van egy érdekes ötleted?
          <br />
          Beszéljünk<span className="text-[var(--gold)]">.</span>
        </a>
      </Reveal>

      <Reveal
        delay={150}
        className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-body text-sm text-stone"
      >
        <a href={`mailto:${site.email}`} className="underline-hover hover:text-paper">
          {site.email}
        </a>
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
