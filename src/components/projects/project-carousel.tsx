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
  const featuredProject = sortedProjects[0];
  const supportingProjects = sortedProjects.slice(1, 3);

  if (!sortedProjects.length) {
    return (
      <div className="project-plate cut-corner p-6 text-sm leading-7 text-muted-foreground">
        No hay proyectos cargados por el momento.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-5 border-b border-foreground/12 pb-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-3">
          <p className="field-label text-primary">Proyectos</p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            {note ||
              "Monterrey aparece primero como proyecto reciente. Despues se muestran Real del Nogalar y Ampliacion Senderos."}
          </p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end">
          <span className="field-label text-muted-foreground">
            {sortedProjects.length} proyectos
          </span>
        </div>
      </div>

      <div className="space-y-5 lg:hidden">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sortedProjects.map((project) => (
            <div key={project.id} className="min-w-[90%] snap-start">
              <ProjectCard
                project={project}
                variant={project.id === featuredProject?.id ? "featured" : "default"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        {featuredProject ? (
          <ProjectCard project={featuredProject} variant="featured" />
        ) : null}
        <div className="grid content-start gap-5">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="compact" />
          ))}
        </div>
      </div>
    </div>
  );
}
