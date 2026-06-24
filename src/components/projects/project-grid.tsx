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
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} variant={cardVariant} />
      ))}
    </div>
  );
}
