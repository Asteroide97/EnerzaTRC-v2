import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { customerTypeLabels } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "featured" | "compact";
};

function buildMetricRows(project: Project) {
  return [
    project.capacityKwp
      ? { label: "Capacidad", value: `${project.capacityKwp} kWp` }
      : null,
    project.panelCount ? { label: "Paneles", value: `${project.panelCount}` } : null,
  ].filter(Boolean) as { label: string; value: string }[];
}

function getProjectLocationLabel(project: Project) {
  const locality = [project.city, project.state].filter(Boolean).join(", ");
  return locality || project.location || "Ubicación por confirmar";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const metrics = buildMetricRows(project);
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "project-plate cut-corner overflow-hidden",
        isFeatured && "bg-transparent",
      )}
    >
      <div
        className={cn(
          "grid",
          isFeatured
            ? "lg:grid-cols-[1.16fr_0.84fr]"
            : isCompact
              ? "lg:grid-cols-[300px_1fr]"
              : "",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-foreground/12",
            isFeatured
              ? "min-h-[340px] sm:min-h-[420px] lg:min-h-full lg:border-b-0"
              : isCompact
                ? "min-h-[280px] lg:min-h-full lg:border-b-0"
                : "min-h-[320px]",
          )}
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} en ${getProjectLocationLabel(project)}`}
            fill
            className="object-cover"
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 58vw"
                : isCompact
                  ? "(max-width: 1024px) 100vw, 300px"
                  : "(max-width: 1024px) 100vw, 48vw"
            }
            priority={project.id === "monterrey-proyecto-reciente"}
          />
        </div>

        <div
          className={cn(
            "grid gap-5 p-5 lg:p-6",
            isFeatured ? "bg-secondary text-secondary-foreground lg:p-8" : "",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="field-label text-primary">
              {project.id === "monterrey-proyecto-reciente"
                ? "Proyecto reciente"
                : "Proyecto destacado"}
            </span>
            <span
              className={cn(
                "field-label",
                isFeatured ? "text-slate-400" : "text-muted-foreground",
              )}
            >
              {getProjectLocationLabel(project)}
            </span>
          </div>

          <div className="space-y-3">
            <h3
              className={cn(
                "font-heading font-semibold tracking-tight",
                isFeatured ? "text-3xl text-white" : "text-2xl text-foreground",
              )}
            >
              {project.title}
            </h3>
            <p
              className={cn(
                "text-sm leading-7",
                isFeatured ? "text-slate-300" : "text-muted-foreground",
              )}
            >
              {project.serviceType}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p
                className={cn(
                  "field-label",
                  isFeatured ? "text-slate-400" : "text-muted-foreground",
                )}
              >
                Tipo de cliente
              </p>
              <p
                className={cn(
                  "mt-2 text-sm font-medium",
                  isFeatured ? "text-white" : "text-foreground",
                )}
              >
                {customerTypeLabels[project.clientType]}
              </p>
            </div>
            <div>
              <p
                className={cn(
                  "field-label",
                  isFeatured ? "text-slate-400" : "text-muted-foreground",
                )}
              >
                Servicio realizado
              </p>
              <p
                className={cn(
                  "mt-2 text-sm font-medium",
                  isFeatured ? "text-white" : "text-foreground",
                )}
              >
                {project.serviceType}
              </p>
            </div>
          </div>

          <div className="section-rule pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {metrics.length ? (
                metrics.map((metric) => (
                  <div key={metric.label}>
                    <p
                      className={cn(
                        "field-label",
                        isFeatured ? "text-slate-400" : "text-muted-foreground",
                      )}
                    >
                      {metric.label}
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-sm font-medium",
                        isFeatured ? "text-white" : "text-foreground",
                      )}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))
              ) : (
                <p
                  className={cn(
                    "text-xs leading-6",
                    isFeatured ? "text-slate-400" : "text-muted-foreground",
                  )}
                >
                  Dato por confirmar.
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <p
                className={cn(
                  "field-label",
                  isFeatured ? "text-slate-400" : "text-muted-foreground",
                )}
              >
                Reto técnico breve
              </p>
              <p
                className={cn(
                  "mt-2 text-sm leading-7",
                  isFeatured ? "text-slate-200" : "text-muted-foreground",
                )}
              >
                {project.challenge}
              </p>
            </div>
            <div className="section-rule pt-4">
              <p
                className={cn(
                  "field-label",
                  isFeatured ? "text-slate-400" : "text-muted-foreground",
                )}
              >
                Resultado breve
              </p>
              <p
                className={cn(
                  "mt-2 text-sm leading-7",
                  isFeatured ? "text-slate-200" : "text-muted-foreground",
                )}
              >
                {project.results}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/proyectos/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition hover:gap-3"
            >
              Ver caso de estudio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
