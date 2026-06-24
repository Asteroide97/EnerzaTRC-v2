import Image from "next/image";
import { CTAButton } from "@/components/common/cta-button";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectGrid } from "@/components/projects/project-grid";
import { customerTypeLabels } from "@/lib/projects";
import type { Project } from "@/types";

type ProjectCaseStudyProps = {
  project: Project;
  relatedProjects: Project[];
};

export function ProjectCaseStudy({
  project,
  relatedProjects,
}: ProjectCaseStudyProps) {
  const technicalRows = [
    { label: "Ubicacion", value: project.location },
    { label: "Tipo de cliente", value: customerTypeLabels[project.clientType] },
    { label: "Servicio", value: project.serviceType },
    project.panelCount ? { label: "Paneles", value: `${project.panelCount}` } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos", href: "/proyectos" },
          { label: project.title, href: `/proyectos/${project.slug}` },
        ]}
      />

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="field-label text-primary">Caso de estudio</p>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            {project.location} · {customerTypeLabels[project.clientType]} · {project.serviceType}
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-border bg-card">
            <Image
              src={project.coverImage}
              alt={`${project.title} en ${project.location}`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 64vw"
              priority
            />
          </div>

          <aside className="rounded-[28px] border border-border bg-card p-6 shadow-sm lg:p-7">
            <p className="field-label text-primary">Resumen tecnico</p>
            <dl className="mt-4 grid gap-4">
              {technicalRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-medium text-muted-foreground">{row.label}</dt>
                  <dd className="text-base font-semibold text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="project-plate cut-corner p-6">
          <p className="field-label text-primary">Reto</p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">{project.challenge}</p>
        </article>
        <article className="project-plate cut-corner p-6">
          <p className="field-label text-primary">Solucion</p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">{project.solution}</p>
        </article>
        <article className="project-plate cut-corner p-6">
          <p className="field-label text-primary">Resultado</p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">{project.results}</p>
        </article>
      </section>

      {project.gallery.length > 1 ? (
        <section className="space-y-5">
          <p className="field-label text-primary">Galeria</p>
          <ProjectGallery images={project.gallery} title={project.title} />
        </section>
      ) : null}

      <section className="rounded-[28px] bg-secondary p-7 text-secondary-foreground lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="field-label text-primary">Cotizacion</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white">
              Quiero un sistema similar
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Comparte tu recibo CFE, tu ciudad y el tipo de operacion para revisar
              una propuesta ajustada al consumo real del proyecto.
            </p>
          </div>
          <CTAButton href="/cotizar" showArrow size="lg">
            Solicitar cotizacion
          </CTAButton>
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="space-y-5">
          <p className="field-label text-primary">Proyectos relacionados</p>
          <ProjectGrid projects={relatedProjects} cardVariant="compact" />
        </section>
      ) : null}
    </div>
  );
}
