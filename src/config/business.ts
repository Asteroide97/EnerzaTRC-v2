const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://enerzatrc.com.mx";

export const businessConfig = {
  businessName: "Enerza TRC",
  domain: siteUrl,
  phone: "+52 871 143 0137",
  whatsapp: "+52 871 143 0137",
  // TODO: Confirmar correo publico del sitio.
  email: "",
  // TODO: Agregar direccion solo si se confirma una ubicacion publica.
  address: "",
  areasServed: [
    "Torreon",
    "La Laguna",
    "Monterrey",
    "Nuevo Leon",
    "Norte de Mexico",
    "Gomez Palacio",
    "Lerdo",
    "Matamoros",
    "San Pedro",
    "Coahuila",
    "Durango",
    "San Pedro Garza Garcia",
    "Guadalupe",
    "Apodaca",
    "San Nicolas",
  ],
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  defaultSeo: {
    defaultTitle:
      "Paneles solares para hogares, negocios e industria | Enerza TRC",
    titleTemplate: "%s | Enerza TRC",
    defaultDescription:
      "Diseno, instalacion, mantenimiento y tramite CFE para sistemas solares con zonas principales en Torreon y La Laguna, atencion activa en Monterrey y Nuevo Leon, y proyectos regionales en el norte de Mexico.",
  },
  // TODO: Confirmar correo interno para contacto si se quiere reutilizar en frontend.
  contactEmail: "",
} as const;

export const serviceTypes = [
  "Instalacion de paneles solares",
  "Mantenimiento de sistemas solares",
  "Tramite CFE e interconexion",
  "Sistemas solares residenciales",
  "Sistemas solares comerciales",
  "Sistemas solares industriales",
  "Bombeo solar",
  "Diagnostico",
] as const;

export const cityCoverage = [
  "Torreon",
  "La Laguna",
  "Monterrey",
  "Nuevo Leon",
  "Gomez Palacio",
  "Lerdo",
  "Matamoros",
  "San Pedro",
  "San Pedro Garza Garcia",
  "Guadalupe",
  "Apodaca",
  "San Nicolas",
  "Coahuila",
  "Durango",
  "Norte de Mexico",
] as const;
