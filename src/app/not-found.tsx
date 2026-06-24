import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="cut-corner technical-grid border border-foreground/12 bg-card p-10">
        <p className="text-sm uppercase tracking-[0.16em] text-primary">
          Página no encontrada
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight">
          No encontramos la ruta solicitada
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Puedes volver al inicio, revisar servicios o ir al portafolio para ver
          proyectos solares en Torreón, Monterrey y otras zonas del norte de México.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href="/" showArrow>
            Ir al inicio
          </CTAButton>
          <CTAButton href="/proyectos" variant="outline">
            Ver proyectos
          </CTAButton>
        </div>
      </div>
    </Container>
  );
}
