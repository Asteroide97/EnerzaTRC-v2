import { z } from "zod";

export const customerTypeOptions = [
  "residencial",
  "comercial",
  "industrial",
  "agricola",
  "otro",
] as const;

export const serviceOptions = [
  "Instalacion de paneles solares",
  "Mantenimiento de sistemas solares",
  "Tramite CFE e interconexion",
  "Sistemas solares residenciales",
  "Sistemas solares comerciales",
  "Sistemas solares industriales",
  "Bombeo solar",
  "Diagnostico",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre."),
  email: z.string().trim().email("Ingresa un correo valido."),
  phone: z.string().trim().min(7, "Ingresa un telefono valido."),
  city: z.string().trim().min(2, "Ingresa tu ciudad o colonia."),
  state: z.string().trim().min(2, "Ingresa tu estado."),
  customerType: z.enum(customerTypeOptions, {
    errorMap: () => ({ message: "Selecciona el tipo de inmueble." }),
  }),
  averageBill: z.string().trim().optional(),
  service: z.enum(serviceOptions, {
    errorMap: () => ({ message: "Selecciona el servicio." }),
  }),
  message: z.string().trim().optional(),
  company: z.string().max(0).optional().or(z.literal("")),
  privacyAccepted: z
    .boolean()
    .refine((value) => value, "Debes aceptar el aviso de privacidad."),
  sourceUrl: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
