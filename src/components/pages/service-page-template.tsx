import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { getFaqJsonLd } from "@/lib/json-ld";
import { verifiedCurrentSiteContent } from "@/data/site-content";
import type { ServicePageContent } from "@/data/service-pages";

type ServicePageTemplateProps = {
  content: ServicePageContent;
};

const installationQualityPaths = new Set([
  "/paneles-solares-residenciales",
  "/paneles-solares-comerciales",
  "/paneles-solares-industriales",
]);

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const showInstallationQuality = installationQualityPaths.has(content.path);
  const showCfeSupport = content.path === "/tramites-cfe-paneles-solares";

  return (
    <>
      <SEOJsonLd data={getFaqJsonLd(content.faq)} />
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.heroDescription}
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar propuesta
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-20 py-16 lg:py-20">
        <section className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Resumen"
              title={content.heroTitle}
              description={content.intro}
            />
          </div>
          <div className="section-rule grid gap-6 pt-1">
            {content.highlights.map((item, index) => (
              <div key={item} className="grid gap-4 py-5 lg:grid-cols-[120px_1fr]">
                <div className="font-heading text-4xl font-semibold text-foreground/28">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-3">
                  <h2 className="font-heading text-2xl font-semibold">{item}</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Servicio orientado a consumo real, seguridad electrica y
                    acompanamiento durante el proyecto.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {showInstallationQuality ? (
          <section className="space-y-8">
            <SectionHeading
              eyebrow="Instalacion profesional"
              title={verifiedCurrentSiteContent.installationQuality.title}
              description={verifiedCurrentSiteContent.installationQuality.description}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {verifiedCurrentSiteContent.installationQuality.points.map((item, index) => (
                <article key={item} className="project-plate cut-corner p-6">
                  <p className="field-label text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
            <p className="field-label text-primary">Aplicaciones</p>
            <ul className="section-rule mt-4 space-y-4 pt-4 text-sm leading-7 text-slate-300">
              {content.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cut-corner border border-foreground/14 bg-background p-6 lg:p-8">
            <p className="field-label text-primary">Proceso</p>
            <ol className="section-rule mt-4 space-y-4 pt-4">
              {content.process.map((step, index) => (
                <li key={step} className="grid gap-3 lg:grid-cols-[70px_1fr]">
                  <span className="font-heading text-3xl font-semibold text-foreground/28">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2 text-sm leading-7 text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {showCfeSupport ? (
          <section className="space-y-8">
            <SectionHeading
              eyebrow="Interconexion CFE"
              title={verifiedCurrentSiteContent.cfe.title}
              description={verifiedCurrentSiteContent.cfe.description}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {verifiedCurrentSiteContent.cfe.steps.map((step, index) => (
                <article key={step} className="project-plate cut-corner p-6">
                  <p className="field-label text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="field-label text-primary">Que incluye</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Diagnostico, propuesta tecnica, instalacion ordenada y
                acompanamiento segun el alcance del servicio.
              </p>
            </div>
            <CTAButton href="/cotizar" size="lg" showArrow>
              Ir a cotizar
            </CTAButton>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={`FAQ sobre ${content.title.toLowerCase()}`}
            description="Respuestas directas para resolver dudas habituales antes de cotizar."
          />
          <FAQAccordion items={content.faq} />
        </section>
      </Container>
    </>
  );
}
