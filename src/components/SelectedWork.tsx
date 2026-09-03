import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="container-edge py-28 md:py-36" aria-labelledby="work-heading">
      <Reveal
        as="h2"
        id="work-heading"
        className="font-display text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[1.02] text-paper"
      >
        Selected Work
      </Reveal>

      <div>
        {projects.map((project, i) => (
          <ProjectItem
            key={project.slug}
            project={project}
            index={i}
            total={projects.length}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
