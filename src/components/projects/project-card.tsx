import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "featured" | "compact";
};

function getProjectLocationLabel(project: Project) {
  const locality = [project.city, project.state].filter(Boolean).join(", ");
  return locality || project.location || "Ubicacion por confirmar";
}

function getProjectBadges(project: Project) {
  return [
    project.serviceType ? project.serviceType : null,
    project.panelCount ? `${project.panelCount} paneles` : null,
  ].filter(Boolean) as string[];
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const badges = getProjectBadges(project);

  return (
    <article
      className={cn(
        "project-plate cut-corner overflow-hidden transition hover:-translate-y-1 hover:border-primary/30",
        isFeatured && "border-primary/20 shadow-lg",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isCompact ? "aspect-[16/11]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} en ${getProjectLocationLabel(project)}`}
          fill
          className="object-cover"
          sizes={
            isCompact
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          priority={project.id === "monterrey-proyecto-reciente"}
        />
      </div>

      <div className={cn("space-y-4 p-5", isFeatured ? "lg:p-6" : "")}>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-primary">
              {project.id === "monterrey-proyecto-reciente"
                ? "Proyecto reciente"
                : "Caso real"}
            </span>
            <span>•</span>
            <span>{getProjectLocationLabel(project)}</span>
          </div>
          <h3
            className={cn(
              "font-heading tracking-tight text-foreground",
              isFeatured ? "text-2xl font-bold" : "text-xl font-semibold",
            )}
          >
            {project.title}
          </h3>
        </div>

        {badges.length ? (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : null}

        <p className="text-sm leading-7 text-muted-foreground">{project.results}</p>

        <Link
          href={`/proyectos/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          Ver caso de estudio
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
