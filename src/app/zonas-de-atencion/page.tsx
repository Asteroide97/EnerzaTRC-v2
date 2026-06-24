import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { AreasServed } from "@/components/sections/areas-served";

export const metadata = createMetadata({
  title: "Zonas de atencion | Paneles solares en La Laguna y Monterrey",
  description:
    "Enerza TRC atiende proyectos solares en Torreon, La Laguna, Monterrey, Nuevo Leon y el norte de Mexico. Instalacion, mantenimiento y tramite CFE.",
  path: "/zonas-de-atencion",
  keywords: [
    "paneles solares Torreon",
    "paneles solares La Laguna",
    "paneles solares Monterrey",
    "paneles solares Nuevo Leon",
    "zonas de atencion paneles solares",
  ],
});

const regionalNotes = [
  {
    title: "Torreon y La Laguna",
    description:
      "Atencion para instalacion, mantenimiento, tramite CFE y seguimiento postinstalacion.",
  },
  {
    title: "Monterrey y Nuevo Leon",
    description:
      "Atencion activa para hogares, negocios e industria, sin afirmar oficina fisica donde no esta confirmada.",
  },
  {
    title: "Norte de Mexico",
    description:
      "Enerza TRC tambien atiende proyectos regionales en Coahuila, Durango y otras zonas del norte segun el caso.",
  },
];

export default function ZonasDeAtencionPage() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Zonas de atencion para proyectos solares"
        description="Enerza TRC atiende Torreon, La Laguna, Monterrey, Nuevo Leon y otras zonas del norte de Mexico."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Cotizar proyecto
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <AreasServed />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Cobertura"
            title="Atencion regional para distintos tipos de proyecto"
            description="Enerza TRC trabaja proyectos solares para hogares, negocios, industria y operacion agricola."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {regionalNotes.map((note, index) => (
              <article key={note.title} className="project-plate cut-corner p-6">
                <p className="field-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                  {note.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {note.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Link
            href="/paneles-solares-torreon"
            className="project-plate cut-corner grid gap-4 p-6 transition hover:-translate-y-1 hover:border-primary/40"
          >
            <p className="field-label text-primary">La Laguna</p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Paneles solares en Torreon y La Laguna
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Informacion para hogares, negocios e industria en Torreon, Gomez
              Palacio, Lerdo y la region lagunera.
            </p>
          </Link>
          <Link
            href="/paneles-solares-monterrey"
            className="project-plate cut-corner grid gap-4 p-6 transition hover:-translate-y-1 hover:border-primary/40"
          >
            <p className="field-label text-primary">Monterrey</p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Paneles solares en Monterrey y Nuevo Leon
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Informacion para proyectos solares en Monterrey y zona metropolitana,
              con un caso reciente como referencia comercial.
            </p>
          </Link>
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Cotizacion</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
            Si tu proyecto esta en La Laguna, Monterrey u otra zona del norte,
            podemos revisarlo.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Comparte tu ciudad, tipo de inmueble, recibo CFE aproximado y el
            servicio que necesitas.
          </p>
          <div className="mt-6">
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
