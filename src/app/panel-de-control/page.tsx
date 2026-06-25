import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { PanelDashboardPreview } from "@/components/panel-control/panel-dashboard-preview";
import { getWhatsAppHref } from "@/lib/contact";

const panelBenefits = [
  {
    index: "01",
    title: "Generacion visible",
    description: "Consulta produccion por dia, semana o mes.",
  },
  {
    index: "02",
    title: "Ahorro estimado",
    description:
      "Revisa una referencia de ahorro con base en la lectura del sistema.",
  },
  {
    index: "03",
    title: "Estado del sistema",
    description: "Identifica si el sistema esta operando correctamente.",
  },
  {
    index: "04",
    title: "Acceso desde celular",
    description: "Consulta la informacion desde computadora o celular.",
  },
] as const;

export const metadata = createMetadata({
  title: "Panel de control solar | Monitorea tu ahorro",
  description:
    "Monitorea la produccion de energia, el ahorro estimado y el estado de tu sistema solar con el panel de control de Enerza TRC.",
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
        title="Monitorea tu sistema desde un panel de control"
        description="Consulta la generacion de energia, ahorro estimado y estado general de tu sistema desde una vista clara para el cliente."
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

      <Container className="space-y-10 py-10 lg:space-y-12 lg:py-12">
        <section className="space-y-5">
          <SectionHeading
            eyebrow="Panel de control"
            title="Una vista simple para seguir generacion, ahorro y monitoreo"
            description="La lectura principal concentra lo mas importante del sistema en una sola pantalla para el cliente."
          />
          <PanelDashboardPreview />
        </section>

        <section className="space-y-5">
          <SectionHeading
            eyebrow="Beneficios"
            title="Lo importante del monitoreo, sin saturar la vista"
            description="El panel ayuda a revisar solo la informacion que realmente sirve para entender el comportamiento general del sistema."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {panelBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-border bg-card p-6 shadow-sm"
              >
                <p className="field-label text-primary">{item.index}</p>
                <h2 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-border bg-muted/50 p-7 lg:p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-foreground">
            Quieres un sistema solar con monitoreo?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            Solicita una cotizacion y revisamos tu consumo, tipo de inmueble y
            servicio requerido.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Cotizar proyecto
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
