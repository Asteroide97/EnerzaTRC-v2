import { monterreyFeaturedProject } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedMonterreyProject() {
  if (!monterreyFeaturedProject) {
    return null;
  }

  return <ProjectCard project={monterreyFeaturedProject} variant="featured" />;
}
