"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CTAButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  customerTypeOptions,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/validators/contact";
import { getWhatsAppHref } from "@/lib/contact";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const selectClassName =
  "h-11 w-full border border-white/16 bg-[#fbf7ef] px-4 text-sm text-foreground";

const defaultContactValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  customerType: "residencial",
  averageBill: "",
  service: serviceOptions[0],
  message: "",
  company: "",
  privacyAccepted: false,
  sourceUrl: "",
};

type ContactFormProps = {
  formId?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  secondaryCtaLabel?: string;
  submitMicrocopy?: string;
  projectPrefillNote?: string;
  successMessage?: string;
  initialValues?: Partial<ContactFormValues>;
};

export function ContactForm({
  formId,
  eyebrow = "Solicitud",
  title = "Cotiza tu proyecto solar",
  description = "Déjanos tus datos para revisar tu recibo CFE, tu ciudad y el servicio que necesitas.",
  submitLabel = "Enviar solicitud",
  secondaryCtaLabel = "Cotizar por WhatsApp",
  submitMicrocopy,
  projectPrefillNote,
  successMessage = "Recibimos tu solicitud. El siguiente paso es revisar tu consumo y el tipo de servicio para responder con una orientación inicial.",
  initialValues,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultContactValues,
  });

  useEffect(() => {
    setValue("sourceUrl", window.location.href);
  }, [setValue]);

  useEffect(() => {
    if (!initialValues) {
      return;
    }

    reset({
      ...defaultContactValues,
      ...initialValues,
      sourceUrl: window.location.href,
    });
  }, [initialValues, reset]);

  const onSubmit = (values: ContactFormValues) => {
    setSubmitState("idle");
    setSubmitMessage("");
    setIsSubmitting(true);

    void (async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const data = (await response.json().catch(() => null)) as
            | { error?: string }
            | null;
          throw new Error(data?.error || "No fue posible enviar la solicitud.");
        }

        window.gtag?.("event", "generate_lead", {
          event_category: "contact",
          event_label: values.service,
        });
        window.dataLayer?.push({
          event: "generate_lead",
          form_name: "contacto_enerza",
          service: values.service,
        });

        setSubmitState("success");
        setSubmitMessage(successMessage);
        reset({
          ...defaultContactValues,
          sourceUrl: window.location.href,
        });
      } catch (error) {
        setSubmitState("error");
        setSubmitMessage(
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar el formulario.",
        );
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  return (
    <section
      id={formId}
      className="cut-corner border border-foreground/14 bg-secondary p-6 text-secondary-foreground lg:p-8"
    >
      <div className="space-y-3">
        <p className="field-label text-primary">{eyebrow}</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">{description}</p>
      </div>

      <form className="mt-8 grid gap-8" onSubmit={handleSubmit(onSubmit)}>
        <section className="section-rule grid gap-4 pt-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <p className="field-label text-slate-400">Datos de contacto</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300">
              Nombre
            </Label>
            <Input id="name" {...register("name")} />
            {errors.name ? <p className="text-sm text-rose-300">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-300">
              Teléfono
            </Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone ? <p className="text-sm text-rose-300">{errors.phone.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">
              Correo
            </Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email ? <p className="text-sm text-rose-300">{errors.email.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-slate-300">
              Ciudad / colonia
            </Label>
            <Input id="city" {...register("city")} />
            {errors.city ? <p className="text-sm text-rose-300">{errors.city.message}</p> : null}
          </div>
        </section>

        <section className="section-rule grid gap-4 pt-6 md:grid-cols-2">
          <div className="md:col-span-2 space-y-3">
            <p className="field-label text-slate-400">Datos del proyecto</p>
            {projectPrefillNote ? (
              <p className="text-sm leading-7 text-slate-300">{projectPrefillNote}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="state" className="text-slate-300">
              Estado
            </Label>
            <Input id="state" {...register("state")} />
            {errors.state ? <p className="text-sm text-rose-300">{errors.state.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerType" className="text-slate-300">
              Tipo de inmueble
            </Label>
            <select id="customerType" className={selectClassName} {...register("customerType")}>
              {customerTypeOptions.map((item) => (
                <option key={item} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>
            {errors.customerType ? (
              <p className="text-sm text-rose-300">{errors.customerType.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-slate-300">
              Servicio requerido
            </Label>
            <select id="service" className={selectClassName} {...register("service")}>
              {serviceOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p className="text-sm text-rose-300">{errors.service.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="averageBill" className="text-slate-300">
              Recibo CFE aproximado
            </Label>
            <Input id="averageBill" placeholder="Ej. $4,800 MXN" {...register("averageBill")} />
            {errors.averageBill ? (
              <p className="text-sm text-rose-300">{errors.averageBill.message}</p>
            ) : null}
          </div>
        </section>

        <section className="section-rule grid gap-4 pt-6">
          <div>
            <p className="field-label text-slate-400">Mensaje adicional</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-300">
              Mensaje opcional
            </Label>
            <Textarea
              id="message"
              placeholder="Comparte más contexto sobre tu proyecto si lo consideras necesario."
              {...register("message")}
            />
            {errors.message ? <p className="text-sm text-rose-300">{errors.message.message}</p> : null}
          </div>
        </section>

        <input type="hidden" tabIndex={-1} autoComplete="off" {...register("company")} />
        <input type="hidden" {...register("sourceUrl")} />

        <section className="section-rule grid gap-4 pt-6">
          <label className="flex items-start gap-3 border border-white/14 bg-white/5 p-4 text-sm leading-6 text-slate-300">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 border-white/20"
              {...register("privacyAccepted")}
            />
            <span>
              Acepto el tratamiento de mis datos conforme al{" "}
              <a href="/privacidad" className="font-medium text-white underline">
                aviso de privacidad
              </a>
              .
            </span>
          </label>
          {errors.privacyAccepted ? (
            <p className="text-sm text-rose-300">{errors.privacyAccepted.message}</p>
          ) : null}
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : submitLabel}
          </Button>
          <CTAButton
            href={getWhatsAppHref()}
            external
            variant="outline"
            className="border-white/18 text-white hover:bg-white/5"
          >
            {secondaryCtaLabel}
          </CTAButton>
        </div>

        {submitMicrocopy ? (
          <p className="text-sm leading-7 text-slate-400">{submitMicrocopy}</p>
        ) : null}
      </form>

      {submitState !== "idle" ? (
        <div
          className={`mt-6 border p-4 text-sm leading-7 ${
            submitState === "success"
              ? "border-success/30 bg-success/10 text-slate-100"
              : "border-rose-400/30 bg-rose-500/10 text-rose-100"
          }`}
        >
          {submitMessage}
        </div>
      ) : null}
    </section>
  );
}
