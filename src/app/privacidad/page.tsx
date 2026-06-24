import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/pages/page-hero";

export const metadata = createMetadata({
  title: "Aviso de Privacidad | Enerza",
  description:
    "Consulta el aviso de privacidad de Enerza sobre el uso y protección de datos personales.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidad"
        title="Aviso de Privacidad"
        description="Última actualización: Febrero 2026"
      />
      <Container className="py-16 lg:py-20">
        <article className="cut-corner technical-grid mx-auto max-w-4xl space-y-10 border border-foreground/12 bg-card p-8 text-sm leading-7 text-muted-foreground lg:p-10">
          <section className="space-y-4">
            <p>
              Enerza, con domicilio en , es responsable del uso y protección de sus
              datos personales, y al respecto le informamos lo siguiente:
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              ¿Para qué fines utilizaremos sus datos personales?
            </h2>
            <p>
              Los datos personales que recabamos de usted, los utilizaremos para las
              siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-primary">
              <li>Responder a sus solicitudes de cotización</li>
              <li>Realizar la visita técnica y el estudio de factibilidad</li>
              <li>Gestionar los trámites de interconexión ante CFE</li>
              <li>Proporcionar acceso al panel de monitoreo</li>
              <li>Dar seguimiento post-instalación y mantenimiento</li>
              <li>
                Enviar comunicaciones sobre promociones y novedades (con su
                consentimiento)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              ¿Qué datos personales utilizaremos?
            </h2>
            <ul className="list-disc space-y-2 pl-5 marker:text-primary">
              <li>Nombre completo</li>
              <li>Teléfono de contacto</li>
              <li>Correo electrónico</li>
              <li>Dirección del inmueble</li>
              <li>Datos de consumo eléctrico (recibo CFE)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted,
              para qué los utilizamos y las condiciones de uso que les damos
              (Acceso). Asimismo, es su derecho solicitar la corrección de su
              información personal en caso de que esté desactualizada, sea inexacta o
              incompleta (Rectificación); que la eliminemos de nuestros registros o
              bases de datos cuando considere que la misma no está siendo utilizada
              adecuadamente (Cancelación); así como oponerse al uso de sus datos
              personales para fines específicos (Oposición).
            </p>
            <p>
              Para el ejercicio de cualquiera de los derechos ARCO, puede comunicarse
              al correo electrónico:{" "}
              <a
                href="mailto:enerzatrc@gmail.com"
                className="font-medium text-foreground underline decoration-primary/60 underline-offset-4"
              >
                enerzatrc@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              Consentimiento
            </h2>
            <p>
              Si usted no manifiesta su oposición para que sus datos personales sean
              transferidos, se entenderá que ha otorgado su consentimiento para ello.
              El titular de los datos podrá revocar su consentimiento enviando un
              correo a{" "}
              <a
                href="mailto:enerzatrc@gmail.com"
                className="font-medium text-foreground underline decoration-primary/60 underline-offset-4"
              >
                enerzatrc@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </Container>
    </>
  );
}
