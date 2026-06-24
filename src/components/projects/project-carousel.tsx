"use client";

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
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {note ||
            "Monterrey aparece primero como referencia de servicio activo, seguido por dos casos reales en Coahuila."}
        </p>
        <span className="text-sm text-muted-foreground">{sortedProjects.length} proyectos</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={index === 0 ? "featured" : "default"}
          />
        ))}
      </div>
    </div>
  );
}
