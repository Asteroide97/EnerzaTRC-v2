import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contacto",
  description: "Ruta redirigida a cotizacion.",
  path: "/contacto",
  noIndex: true,
});

export default function ContactoPage() {
  redirect("/cotizar");
}
