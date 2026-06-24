"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CTAButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculatorOptions } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

const estimatorSchema = z.object({
  city: z.string().min(1, "Selecciona una ciudad."),
  customerType: z.string().min(1, "Selecciona un tipo de cliente."),
  averageBill: z.string().min(1, "Ingresa tu recibo aproximado."),
  service: z.string().min(1, "Selecciona un servicio."),
});

export type EstimatorValues = z.infer<typeof estimatorSchema>;

type SavingsEstimatorProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
  onEstimateSubmit?: (values: EstimatorValues) => void;
  scrollTargetId?: string;
};

export function SavingsEstimator({
  secondaryHref = getWhatsAppHref(),
  secondaryLabel = "WhatsApp",
  onEstimateSubmit,
  scrollTargetId,
}: SavingsEstimatorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<EstimatorValues>({
    resolver: zodResolver(estimatorSchema),
  });

  const onSubmit = (values: EstimatorValues) => {
    onEstimateSubmit?.(values);

    if (scrollTargetId) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTargetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <section className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <p className="field-label text-primary">Pre-diagnostico</p>
        <h2 className="font-heading text-4xl font-semibold tracking-tight">
          Comparte lo basico antes de enviar la solicitud
        </h2>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground">
          Ciudad, tipo de inmueble, recibo aproximado y servicio requerido nos
          ayudan a revisar el caso con mejor contexto antes de pedir mas datos.
        </p>
        <div className="section-rule max-w-2xl pt-5">
          <p className="field-label text-muted-foreground">Por que importa el recibo CFE</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            El recibo ayuda a entender consumo, comportamiento del servicio y
            viabilidad inicial del proyecto. No lo usamos para prometer cifras
            rapidas ni ahorros inventados.
          </p>
        </div>
      </div>

      <div className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="estimator-city" className="text-slate-300">
              Ciudad
            </Label>
            <select
              id="estimator-city"
              className="h-11 w-full border border-white/16 bg-[#fbf7ef] px-4 text-sm text-foreground"
              {...register("city")}
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona una ciudad
              </option>
              {calculatorOptions.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city ? <p className="text-sm text-rose-300">{errors.city.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="estimator-customerType" className="text-slate-300">
              Tipo de inmueble
            </Label>
            <select
              id="estimator-customerType"
              className="h-11 w-full border border-white/16 bg-[#fbf7ef] px-4 text-sm text-foreground"
              {...register("customerType")}
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona un tipo
              </option>
              {calculatorOptions.customerTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.customerType ? (
              <p className="text-sm text-rose-300">{errors.customerType.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="estimator-averageBill" className="text-slate-300">
              Recibo CFE mensual aproximado
            </Label>
            <Input
              id="estimator-averageBill"
              placeholder="Ej. $3,500 MXN"
              {...register("averageBill")}
            />
            {errors.averageBill ? (
              <p className="text-sm text-rose-300">{errors.averageBill.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="estimator-service" className="text-slate-300">
              Servicio requerido
            </Label>
            <select
              id="estimator-service"
              className="h-11 w-full border border-white/16 bg-[#fbf7ef] px-4 text-sm text-foreground"
              {...register("service")}
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {calculatorOptions.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p className="text-sm text-rose-300">{errors.service.message}</p>
            ) : null}
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Continuar con estos datos</Button>
            <CTAButton
              href={secondaryHref}
              variant="outline"
              className="border-white/18 text-white hover:bg-white/5"
            >
              {secondaryLabel}
            </CTAButton>
          </div>
        </form>

        <div className="section-rule mt-6 pt-6">
          <p className="field-label text-slate-400">Resultado</p>
          <div className="mt-3 border border-white/14 bg-white/5 p-4 text-sm leading-7 text-slate-200">
            {isSubmitSuccessful
              ? "Ya puedes enviar la solicitud. Tomaremos estos datos como base y, si hace falta mas precision, te pediremos tu recibo CFE mas reciente."
              : "Podemos preparar una orientacion inicial a partir de tu ciudad, tipo de inmueble, recibo mensual y servicio requerido."}
          </div>
        </div>
      </div>
    </section>
  );
}
