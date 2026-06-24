import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectGrid } from "@/components/projects/project-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ServiceCard } from "@/components/sections/service-card";
import { homeServices } from "@/data/site-content";
import { getFaqJsonLd } from "@/lib/json-ld";
import type { Project } from "@/types";

type CityLandingTemplateProps = {
  title: string;
  description: string;
  intro: string;
  localFocus: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  projects: Project[];
  featuredProject?: Project;
};

export function CityLandingTemplate({
  title,
  description,
  intro,
  localFocus,
  faq,
  projects,
  featuredProject,
}: CityLandingTemplateProps) {
  const isMonterreyPage = title.toLowerCase().includes("monterrey");

  return (
    <>
      <SEOJsonLd data={getFaqJsonLd(faq)} />
      <PageHero
        eyebrow="Cobertura"
        title={title}
        description={description}
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar cotizacion
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-20 py-16 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow={isMonterreyPage ? "Monterrey" : "La Laguna"}
              title={title}
              description={intro}
            />
          </div>
          <div className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
            <p className="field-label text-primary">Atencion en la zona</p>
            <div className="section-rule mt-4 spec-table pt-4">
              {localFocus.map((item) => (
                <div key={item}>
                  <dt>{isMonterreyPage ? "NL" : "LAG"}</dt>
                  <dd>{item}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {featuredProject ? (
          <section className="space-y-8">
            <SectionHeading
              eyebrow="Proyecto destacado"
              title={
                isMonterreyPage
                  ? "Proyecto reciente en Monterrey"
                  : "Proyecto destacado en la region"
              }
              description={
                isMonterreyPage
                  ? "Un caso reciente que refuerza la atencion activa en Monterrey y Nuevo Leon."
                  : "Una referencia real para hogares, negocios e industria en la region."
              }
            />
            <ProjectCard project={featuredProject} variant="featured" />
          </section>
        ) : null}

        <section className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Servicios"
              title="Instalacion, mantenimiento y tramite CFE"
              description="Enerza TRC atiende proyectos solares con enfoque tecnico y acompanamiento claro."
            />
          </div>
          <div>
            {homeServices.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Mas proyectos"
            title={isMonterreyPage ? "Otros proyectos de Enerza TRC" : "Proyectos relacionados"}
            description="Casos reales que ayudan a dimensionar el tipo de trabajo que realiza Enerza TRC."
          />
          <ProjectGrid projects={projects} cardVariant="compact" />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={`FAQ sobre ${title.toLowerCase()}`}
            description="Respuestas sobre cobertura, proceso y tipos de servicio."
          />
          <FAQAccordion items={faq} />
        </section>

        <section className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="field-label text-primary">Cotizacion</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold">
                Cotiza tu proyecto solar
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Comparte tu ciudad, tipo de inmueble y recibo CFE para orientar la
                solucion solar adecuada.
              </p>
            </div>
            <CTAButton href="/cotizar" size="lg" showArrow>
              Ir a cotizar
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
