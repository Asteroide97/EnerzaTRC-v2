import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { PanelDashboardPreview } from "@/components/panel-control/panel-dashboard-preview";
import { verifiedCurrentSiteContent } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Panel de control solar | Monitorea tu ahorro",
  description:
    "Monitorea la producción de energía, el ahorro estimado y el estado de tu sistema solar con el panel de control de Enerza TRC.",
  path: "/panel-de-control",
  keywords: [
    "panel de control solar",
    "monitoreo de sistema solar",
    "ahorro estimado paneles solares",
  ],
});

export default function PanelDeControlPublicPage() {
  return (
    <>
      <PageHero
        eyebrow="Monitoreo"
        title={verifiedCurrentSiteContent.monitoring.title}
        description="Enerza TRC presenta el panel de control como una vista clara para seguir producción de energía, ahorro estimado y estado general del sistema."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar sistema con monitoreo
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-14 py-14 lg:space-y-16 lg:py-16">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Vista del cliente"
            title="Un panel pensado para entender el sistema con rapidez"
            description="La vista principal muestra lo más importante: hoy, este mes, ahorro, estado del sistema y generación histórica."
          />
          <PanelDashboardPreview />
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <SectionHeading
            eyebrow="Monitoreo"
            title="Lo importante es la lectura del sistema"
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
            <article className="project-plate cut-corner p-6">
              <p className="field-label text-primary">06</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Alertas del sistema para detectar cuando el comportamiento cambia y
                conviene revisar el proyecto.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-[28px] border border-border bg-muted/50 p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight">
            Si quieres una propuesta con instalación, CFE y monitoreo, continúa con
            la cotización.
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
            <CTAButton href={getWhatsAppHref()} external variant="outline">
              WhatsApp
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
