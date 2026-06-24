import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";

export const metadata = createMetadata({
  title: "Nosotros",
  description:
    "Enerza TRC es una empresa enfocada en instalacion, mantenimiento, diseno, diagnostico, tramite CFE y soluciones solares con operacion regional en La Laguna, Monterrey y el norte de Mexico.",
  path: "/nosotros",
  keywords: ["Enerza TRC", "empresa de paneles solares", "ingenieria solar regional"],
});

const aboutRows = [
  {
    index: "01",
    title: "Enfoque tecnico",
    description:
      "Enerza TRC trabaja proyectos solares para hogares, negocios, industria y operacion agricola con atencion en consumo real, seguridad electrica y acompanamiento posterior.",
  },
  {
    index: "02",
    title: "Forma de trabajo",
    description:
      "Cada proyecto se revisa desde el recibo CFE, el diagnostico del inmueble, la propuesta tecnica, la instalacion y el seguimiento del sistema.",
  },
  {
    index: "03",
    title: "Cobertura regional",
    description:
      "Torreon y La Laguna son zonas principales. Monterrey y Nuevo Leon tambien forman parte de la atencion activa, junto con proyectos en otras zonas del norte de Mexico.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Ingenieria solar con enfoque tecnico y cobertura regional"
        description="Enerza TRC trabaja con diseno segun consumo real, instalacion segura, mantenimiento y seguimiento postventa."
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="grid gap-6 border-y border-foreground/12 py-8">
          {aboutRows.map((item) => (
            <article
              key={item.title}
              className="grid gap-4 border-b border-foreground/12 pb-6 last:border-b-0 last:pb-0 lg:grid-cols-[90px_260px_1fr]"
            >
              <p className="field-label text-primary">{item.index}</p>
              <h2 className="font-heading text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Compromiso"
            title="Soluciones solares con criterio tecnico"
            description="Cada propuesta debe responder al consumo, al tipo de inmueble y al objetivo del proyecto."
          />
          <div className="cut-corner border border-foreground/12 bg-secondary p-8 text-secondary-foreground">
            <p className="field-label text-primary">Experiencia</p>
            <h2 className="mt-4 font-heading text-2xl font-semibold">
              Instalacion, mantenimiento y soporte
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Enerza TRC acompana proyectos solares con una lectura clara del
              consumo, una ejecucion ordenada y seguimiento despues de la puesta en
              marcha.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
