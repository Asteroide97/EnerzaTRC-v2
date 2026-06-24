import type { Project } from "@/types";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";

type ProjectDetailProps = {
  project: Project;
  relatedProjects: Project[];
};

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return <ProjectCaseStudy project={project} relatedProjects={relatedProjects} />;
}
