import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { verifiedCurrentSiteContent } from "@/data/site-content";

export const metadata = createMetadata({
  title: "Como funciona la instalacion de paneles solares",
  description:
    "Conoce el proceso de cotizacion, visita tecnica, diseno, instalacion, interconexion CFE y monitoreo de tu sistema solar.",
  path: "/como-funciona",
  keywords: [
    "como funciona la instalacion de paneles solares",
    "proceso de paneles solares",
    "interconexion CFE paneles solares",
  ],
});

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        eyebrow="Proceso"
        title={verifiedCurrentSiteContent.process.title}
        description="Enerza TRC acompana tu proyecto desde la cotizacion inicial hasta la instalacion, la interconexion y el monitoreo del sistema."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar cotizacion
            </CTAButton>
            <CTAButton href="/tramites-cfe-paneles-solares" variant="outline">
              Ver tramite CFE
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Proceso completo"
            title="Conoce nuestro proceso de instalacion"
            description="Cada paso responde a una decision real del proyecto, desde la lectura del consumo hasta el monitoreo posterior a la puesta en marcha."
          />
          <ProcessTimeline detailed />
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
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

        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Panel de control"
            title={verifiedCurrentSiteContent.monitoring.title}
            description={verifiedCurrentSiteContent.monitoring.description}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verifiedCurrentSiteContent.monitoring.points.map((item, index) => (
              <article key={item} className="project-plate cut-corner p-6">
                <p className="field-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight">
            Si ya conoces el proceso, continua con tu cotizacion.
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
            <CTAButton href="/panel-de-control" variant="outline">
              Ver panel de control
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
