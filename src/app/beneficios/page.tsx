import { CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { verifiedCurrentSiteContent } from "@/data/site-content";

const reviewChecklist = [
  "Recibo CFE",
  "Tipo de tarifa",
  "Consumo real",
  "Espacio disponible",
] as const;

const benefitCards = [
  {
    title: "Ahorro en el recibo de luz",
    description:
      "Un sistema dimensionado segun tu consumo puede reducir la carga mensual de energia.",
  },
  {
    title: "Interconexion con CFE",
    description:
      "Enerza acompana la ruta documental y tecnica para avanzar con orden.",
  },
  {
    title: "Instalacion profesional",
    description:
      "La ejecucion del proyecto se plantea con criterio tecnico, seguridad y pruebas.",
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "El seguimiento posterior ayuda a conservar rendimiento y detectar revisiones necesarias.",
  },
  {
    title: "Panel de control",
    description:
      "Puedes revisar generacion, ahorro estimado y estado general desde una vista clara.",
  },
  {
    title: "Mejor aprovechamiento del inmueble",
    description:
      "Aprovechar techos y superficies utiles puede sumar valor operativo al espacio.",
  },
] as const;

const projectReferences = [
  "Real del Nogalar - 18 paneles",
  "Ampliacion Senderos - 6 paneles",
  "Monterrey, Nuevo Leon - Proyecto reciente",
] as const;

export const metadata = createMetadata({
  title: "Beneficios de instalar paneles solares",
  description:
    "Ahorro mensual, mejor control del consumo, interconexion CFE y monitoreo claro con sistemas solares de Enerza TRC.",
  path: "/beneficios",
  keywords: [
    "beneficios de instalar paneles solares",
    "ahorro con paneles solares",
    "paneles solares para hogar",
    "paneles solares para negocio",
  ],
});

export default function BeneficiosPage() {
  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title="Ahorro, control y soporte para tu sistema solar"
        description="Analizamos tu consumo, tu recibo CFE y las condiciones del inmueble para proponerte una solucion solar adecuada a tu caso."
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

      <Container className="space-y-12 py-12 lg:space-y-14 lg:py-14">
        <section className="space-y-5">
          <SectionHeading
            eyebrow="Revision inicial"
            title="Antes de instalar, revisamos lo importante"
            description="La orientacion inicial parte de cuatro puntos concretos para entender si la solucion solar encaja con el inmueble y el consumo."
          />
          <div className="grid gap-3 rounded-[28px] border border-border bg-card p-5 shadow-sm md:grid-cols-2 xl:grid-cols-4">
            {reviewChecklist.map((item, index) => (
              <article
                key={item}
                className="flex items-center gap-3 rounded-[20px] border border-border/80 bg-muted/40 px-4 py-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Beneficios"
            title="Seis beneficios que importan al momento de evaluar el sistema"
            description="La lectura comercial cambia segun el consumo, la tarifa, el tipo de inmueble y el soporte que necesite el proyecto."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefitCards.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-border bg-card p-5 shadow-sm"
              >
                <p className="field-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-border bg-card p-6 shadow-sm lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-3">
              <p className="field-label text-primary">Proyectos reales</p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                Beneficios respaldados por proyectos reales
              </h2>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                Enerza ya cuenta con instalaciones en La Laguna y proyectos
                activos en Monterrey y Nuevo Leon.
              </p>
            </div>
            <div>
              <CTAButton href="/proyectos" variant="outline">
                Ver proyectos
              </CTAButton>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {projectReferences.map((item) => (
              <article
                key={item}
                className="rounded-[20px] border border-border/80 bg-muted/40 px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-border/70 bg-muted/35 px-5 py-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
            <p className="text-sm leading-7 text-muted-foreground">
              {verifiedCurrentSiteContent.benefits.note}
            </p>
          </div>
        </section>

        <section className="rounded-[28px] border border-border bg-primary/10 p-7 lg:p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-foreground">
            Descubre que beneficios aplican a tu caso
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            Compartenos tu recibo CFE y revisamos si tu casa, negocio o proyecto
            puede aprovechar energia solar.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Cotizar por WhatsApp
            </CTAButton>
            <CTAButton href="/como-funciona" variant="outline">
              Ver proceso
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
