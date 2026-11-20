import type { Project } from "@/types";
import { sortProjectsForShowcase } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectCarouselProps = {
  projects: Project[];
  note?: string;
};

export function ProjectCarousel({ projects, note }: ProjectCarouselProps) {
  const sortedProjects = sortProjectsForShowcase(projects);

  if (!sortedProjects.length) {
    return (
      <div className="project-plate cut-corner p-6 text-base leading-7 text-muted-foreground">
        No hay proyectos cargados por el momento.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
        {note && <p className="text-muted-foreground">{note}</p>}
        <span className="text-sm text-muted-foreground">{sortedProjects.length} proyectos</span>
      </div>

      <ul aria-label="Proyectos solares" tabIndex={0} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 focus-visible:outline-primary">
        {sortedProjects.map((project) => (
          <li key={project.id} className="w-[86%] flex-none snap-start sm:w-[46%] lg:w-[32%]">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
