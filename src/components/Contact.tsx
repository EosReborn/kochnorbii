import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-edge flex min-h-[65vh] flex-col justify-center border-t border-line py-28 md:py-40"
      aria-labelledby="contact-heading"
    >
      <a
        href={`mailto:${site.email}`}
        id="contact-heading"
        className="underline-hover block font-display text-[clamp(2.4rem,8vw,6.5rem)] font-medium leading-[1.05] text-paper transition-colors duration-300 hover:text-[var(--blue-dark)]"
      >
        Van egy érdekes ötleted?
        <br />
        Beszéljünk<span className="text-[var(--blue)]">.</span>
      </a>

      <div className="mt-10 flex flex-col gap-2 font-body text-sm text-stone">
        <span>{site.location}</span>
        <span className="inline-flex items-center gap-2">
          Elérhető új projektekre
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-body text-sm text-stone">
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover transition-colors hover:text-[var(--blue)]"
        >
          LinkedIn
        </a>
        <a
          href={site.studio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover transition-colors hover:text-[var(--blue)]"
        >
          Koch Digital Studio
        </a>
      </div>
    </section>
  );
}
