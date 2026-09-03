import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-edge border-t border-line py-10">
      <div className="flex flex-col gap-6 font-body text-sm text-stone md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span>
            {site.name} © {year}
          </span>
          <span>{site.location}</span>
        </div>

        <nav className="flex gap-8" aria-label="Footer navigáció">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover hover:text-paper"
          >
            GitHub
          </a>
          <a
            href={site.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover hover:text-paper"
          >
            Koch Digital Studio
          </a>
        </nav>
      </div>

      <p className="mt-8 font-body text-xs text-stone/70">
        Built by Koch Norbert
      </p>
    </footer>
  );
}
