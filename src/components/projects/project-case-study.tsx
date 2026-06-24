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

function getMetricValue(value: string | number | undefined, suffix?: string) {
  if (value === undefined || value === "") {
    return "Por confirmar";
  }

  return suffix ? `${value} ${suffix}` : `${value}`;
}

export function ProjectCaseStudy({
  project,
  relatedProjects,
}: ProjectCaseStudyProps) {
  const technicalRows = [
    { label: "Ubicación", value: project.location },
    { label: "Tipo de cliente", value: customerTypeLabels[project.clientType] },
    { label: "Servicio realizado", value: project.serviceType },
    { label: "Capacidad", value: getMetricValue(project.capacityKwp, "kWp") },
    { label: "Número de paneles", value: getMetricValue(project.panelCount) },
    { label: "Inversor", value: getMetricValue(project.inverter) },
    {
      label: "Tiempo de instalación",
      value: getMetricValue(project.installationTime),
    },
  ];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos", href: "/proyectos" },
          { label: project.title, href: `/proyectos/${project.slug}` },
        ]}
      />

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="field-label text-primary">Caso de estudio</p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
            {project.location} · {customerTypeLabels[project.clientType]} ·{" "}
            {project.serviceType}
          </p>
          <div className="relative min-h-[340px] overflow-hidden border border-foreground/12 bg-card sm:aspect-[16/10] sm:min-h-0 lg:min-h-[520px]">
            <Image
              src={project.coverImage}
              alt={`${project.title} en ${project.location}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 64vw"
              priority
            />
          </div>
        </div>

        <aside className="xl:sticky xl:top-24 xl:h-fit">
          <div className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
            <p className="field-label text-primary">Resumen técnico</p>
            <dl className="section-rule spec-table mt-4 pt-4">
              {technicalRows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="section-rule mt-6 pt-5">
              <p className="field-label text-slate-400">Referencia de ahorro</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {getMetricValue(project.estimatedSavings)}
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="section-rule pt-5">
          <p className="field-label text-primary">Reto</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.challenge}
          </p>
        </article>
        <article className="section-rule pt-5">
          <p className="field-label text-primary">Solución</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.solution}
          </p>
        </article>
        <article className="section-rule pt-5">
          <p className="field-label text-primary">Resultado</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.results}
          </p>
        </article>
      </section>

      {project.gallery.length > 1 ? (
        <section className="space-y-6">
          <div className="section-rule pt-5">
            <p className="field-label text-primary">Galería</p>
          </div>
          <ProjectGallery images={project.gallery} title={project.title} />
        </section>
      ) : null}

      <section className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="field-label text-primary">Cotización</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">
              Quiero un sistema similar
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Comparte tu recibo CFE, tu ciudad y el tipo de operación para revisar
              una propuesta técnica ajustada a tu consumo.
            </p>
          </div>
          <CTAButton href="/cotizar" showArrow size="lg">
            Solicitar revisión
          </CTAButton>
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="space-y-6">
          <p className="field-label text-primary">Proyectos relacionados</p>
          <ProjectGrid projects={relatedProjects} cardVariant="compact" />
        </section>
      ) : null}
    </div>
  );
}
