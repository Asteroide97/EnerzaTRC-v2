import type { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGridProps = {
  projects: Project[];
  cardVariant?: "default" | "compact";
};

export function ProjectGrid({
  projects,
  cardVariant = "default",
}: ProjectGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} variant={cardVariant} />
      ))}
    </div>
  );
}
