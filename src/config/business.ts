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
    "Torreón",
    "La Laguna",
    "Monterrey",
    "Nuevo León",
    "Norte de México",
    "Gómez Palacio",
    "Lerdo",
    "Matamoros",
    "San Pedro",
    "Coahuila",
    "Durango",
    "San Pedro Garza García",
    "Guadalupe",
    "Apodaca",
    "San Nicolás",
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
      "Diseño, instalación, mantenimiento y trámite CFE para sistemas solares con zonas principales en Torreón y La Laguna, atención activa en Monterrey y Nuevo León, y proyectos regionales en el norte de México.",
  },
  // TODO: Confirmar correo interno para contacto si se quiere reutilizar en frontend.
  contactEmail: "",
} as const;

export const serviceTypes = [
  "Instalación de paneles solares",
  "Mantenimiento de paneles solares",
  "Trámite CFE",
  "Sistemas solares residenciales",
  "Sistemas solares comerciales",
  "Sistemas solares industriales",
  "Bombeo solar",
] as const;

export const cityCoverage = [
  "Torreón",
  "La Laguna",
  "Monterrey",
  "Nuevo León",
  "Gómez Palacio",
  "Lerdo",
  "Matamoros",
  "San Pedro",
  "San Pedro Garza García",
  "Guadalupe",
  "Apodaca",
  "San Nicolás",
  "Coahuila",
  "Durango",
  "Norte de México",
] as const;
