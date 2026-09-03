import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import GhostNumber from "./GhostNumber";

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-28 md:py-40" aria-labelledby="work-heading">
      <GhostNumber value="01" className="absolute -top-4 left-4 md:left-[calc(var(--spine-w)+1rem)]" />

      <h2
        id="work-heading"
        className="container-edge relative font-display text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[1.02] text-paper"
      >
        Kiemelt munkák
      </h2>

      <div className="mt-16 md:mt-24">
        {projects.map((project, i) => (
          <ProjectItem key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
