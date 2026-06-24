import { cityCoverage } from "@/config/business";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/panel-de-control", label: "Panel de control" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const headerLinks = navLinks.filter((link) =>
  ["/", "/beneficios", "/servicios", "/proyectos", "/contacto"].includes(link.href),
);

export const operationsStrip = [
  "Instalación profesional",
  "Trámite CFE e interconexión",
  "Monitoreo desde panel de control",
  "Torreón, La Laguna, Monterrey y norte de México",
];

export const calculatorOptions = {
  cities: [
    "Torreón",
    "Gómez Palacio",
    "Lerdo",
    "Matamoros",
    "San Pedro",
    "Monterrey",
    "Guadalupe",
    "Apodaca",
    "San Nicolás",
    "Otra ciudad del norte de México",
  ],
  customerTypes: ["Residencial", "Comercial", "Industrial", "Agrícola", "Otro"],
  services: [
    "Instalación de paneles solares",
    "Mantenimiento",
    "Trámite CFE",
    "Bombeo solar",
    "Diagnóstico",
  ],
};

export const verifiedCurrentSiteContent = {
  hero: {
    title: "Ahorra en tu recibo de luz con paneles solares instalados por expertos",
    subtitle:
      "Diseñamos e instalamos sistemas solares con trámite CFE, mantenimiento y monitoreo para hogares, negocios e industria en Torreón, La Laguna, Monterrey y el norte de México.",
    coverage:
      "Torreón y La Laguna son zonas principales. Monterrey y Nuevo León también forman parte de la atención activa.",
  },
  benefits: {
    title: "¿Por qué instalar paneles solares?",
    subtitle:
      "Un sistema bien dimensionado puede ayudarte a reducir costos de energía y ordenar mejor tu consumo.",
    note:
      "El resultado depende del consumo, la tarifa, el dimensionamiento, la ubicación y las condiciones del sitio.",
    items: [
      {
        id: "ahorro",
        title: "Ahorro en el recibo de luz",
        description:
          "Un sistema diseñado según tu consumo real puede reducir la carga mensual de energía.",
      },
      {
        id: "energia-limpia",
        title: "Generación solar para tu operación",
        description:
          "La energía solar ayuda a producir parte del consumo del inmueble con una solución técnica más estable.",
      },
      {
        id: "plusvalia",
        title: "Mejor aprovechamiento del inmueble",
        description:
          "Aprovechar techos y superficies útiles puede sumar valor operativo al espacio.",
      },
      {
        id: "proteccion-tarifaria",
        title: "Menor exposición tarifaria",
        description:
          "Reducir dependencia de la red ayuda a controlar mejor el impacto de los costos eléctricos.",
      },
      {
        id: "retorno",
        title: "Inversión con criterio técnico",
        description:
          "La propuesta debe revisarse con consumo real y objetivos claros antes de hablar de retorno.",
      },
      {
        id: "soporte",
        title: "Soporte posterior",
        description:
          "La instalación no termina al energizar el sistema: también importa el seguimiento y el mantenimiento.",
      },
      {
        id: "tramite-cfe",
        title: "Interconexión con CFE",
        description:
          "Enerza TRC acompaña la ruta documental y técnica para que el sistema pueda operar correctamente.",
      },
      {
        id: "panel-control",
        title: "Panel de control",
        description:
          "Puedes revisar generación, ahorro estimado y estado del sistema desde una vista clara para el cliente.",
      },
    ],
  },
  installationQuality: {
    title: "Instalación profesional, segura y bien dimensionada",
    description:
      "Una instalación deficiente puede generar bajo rendimiento, fallas o riesgos eléctricos. Cada proyecto se revisa con criterio técnico antes, durante y después de la instalación.",
    points: [
      "Revisión de consumo y dimensionamiento correcto.",
      "Evaluación de condiciones del sitio.",
      "Materiales adecuados para la instalación.",
      "Seguridad eléctrica en montaje y conexión.",
      "Pruebas antes de la entrega.",
      "Seguimiento posterior a la instalación.",
    ],
  },
  cfe: {
    title: "Interconexión con CFE con acompañamiento técnico",
    description:
      "El trámite debe alinearse con la instalación y la documentación del proyecto. Enerza TRC acompaña ese proceso para evitar pasos improvisados.",
    steps: [
      "Revisión de factibilidad.",
      "Integración de documentación.",
      "Seguimiento del trámite.",
      "Interconexión.",
      "Puesta en marcha.",
    ],
  },
  process: {
    title: "Cómo funciona",
    steps: [
      {
        index: "01",
        title: "Cotización y diagnóstico",
        description:
          "Revisamos tu recibo CFE, el tipo de inmueble y el objetivo del proyecto.",
      },
      {
        index: "02",
        title: "Visita técnica",
        description:
          "Validamos condiciones del sitio, espacio disponible y variables eléctricas relevantes.",
      },
      {
        index: "03",
        title: "Diseño del sistema",
        description:
          "La solución se plantea según consumo real, condiciones del sitio y alcance técnico.",
      },
      {
        index: "04",
        title: "Instalación y pruebas",
        description:
          "Ejecutamos la instalación con seguridad eléctrica y pruebas previas a la entrega.",
      },
      {
        index: "05",
        title: "Puesta en marcha y monitoreo",
        description:
          "Se habilita la operación del sistema y el acceso al panel de control.",
      },
    ],
  },
  monitoring: {
    title: "Monitorea tu sistema desde un panel de control",
    description:
      "Después de la instalación, el cliente puede revisar generación, ahorro estimado y estado general del sistema desde una vista clara.",
    points: [
      "Generación por día, semana o mes.",
      "Ahorro estimado con lectura simple.",
      "Estado general del sistema.",
      "Acceso desde computadora y celular.",
      "Seguimiento útil para hogares, negocios e industria.",
    ],
  },
  faq: [
    {
      question: "¿Cuánto puedo ahorrar con paneles solares?",
      answer:
        "El ahorro depende del consumo, la tarifa, el dimensionamiento, la ubicación y las condiciones del sitio. Enerza TRC evita prometer un porcentaje fijo sin revisar el caso.",
    },
    {
      question: "¿Qué pasa si está nublado o llueve?",
      answer:
        "La generación puede variar, pero el sistema sigue operando. El desempeño real depende del diseño del proyecto y de las condiciones del sitio.",
    },
    {
      question: "¿La CFE corta la luz?",
      answer:
        "La continuidad depende del tipo de sistema y de la configuración del proyecto. Por eso es importante revisar cada caso antes de prometer un comportamiento específico.",
    },
    {
      question: "¿Qué garantía tienen los paneles y el inversor?",
      answer:
        "Las garantías específicas deben confirmarse según la marca y la configuración del sistema.",
    },
    {
      question: "¿Cómo funciona el trámite de interconexión con CFE?",
      answer:
        "Enerza TRC acompaña la revisión de factibilidad, la documentación, la gestión del trámite y el seguimiento hasta la interconexión.",
    },
    {
      question: "¿Necesito dar mantenimiento?",
      answer:
        "Sí. La frecuencia depende del ambiente, polvo, acceso y comportamiento del sistema.",
    },
    {
      question: "¿Por qué elegir Enerza TRC?",
      answer:
        "Porque combina instalación profesional, lectura responsable del consumo, acompañamiento en CFE, soporte postinstalación y cobertura regional.",
    },
    {
      question: "¿Cómo accedo al panel de control?",
      answer:
        "Después de la instalación y la puesta en marcha se puede habilitar el acceso al monitoreo del sistema.",
    },
    {
      question: "¿Hay opciones de financiamiento?",
      answer:
        "Las opciones de pago o financiamiento deben confirmarse según el proyecto y la disponibilidad vigente.",
    },
    {
      question: "¿Qué tipo de paneles instalan?",
      answer:
        "La selección del equipo depende del proyecto, del sitio y del objetivo técnico.",
    },
  ],
  quote: {
    title: "Solicita tu cotización",
    description:
      "Déjanos tus datos para revisar tu recibo CFE, tu ciudad y el servicio que necesitas.",
  },
} as const;

const benefitsPreviewIds = new Set(["ahorro", "tramite-cfe", "panel-control"]);

export const benefitsPreviewItems = verifiedCurrentSiteContent.benefits.items.filter(
  (item) => benefitsPreviewIds.has(item.id),
);

export const processPreviewItems = verifiedCurrentSiteContent.process.steps.slice(0, 3);

export const homeServices = [
  {
    index: "01",
    href: "/paneles-solares-residenciales",
    title: "Instalación de paneles solares residenciales",
    description:
      "Sistemas diseñados a partir del consumo real del hogar y las condiciones del sitio.",
    applications: "Hogar / Casa",
  },
  {
    index: "02",
    href: "/paneles-solares-comerciales",
    title: "Sistemas solares comerciales",
    description:
      "Proyectos para negocios, locales y oficinas con foco en consumo real y continuidad operativa.",
    applications: "Negocio / Local / Oficina",
  },
  {
    index: "03",
    href: "/paneles-solares-industriales",
    title: "Sistemas solares industriales",
    description:
      "Ingeniería solar para naves, plantas y operaciones con requerimientos energéticos más amplios.",
    applications: "Industria / Nave / Planta",
  },
  {
    index: "04",
    href: "/mantenimiento-paneles-solares",
    title: "Mantenimiento de sistemas solares",
    description:
      "Limpieza, revisión, diagnóstico, inversores y tableros para mantener desempeño y seguridad.",
    applications: "Hogar / Negocio / Industria",
  },
  {
    index: "05",
    href: "/tramites-cfe-paneles-solares",
    title: "Trámite CFE e interconexión",
    description:
      "Acompañamiento documental y técnico para avanzar con el proceso de interconexión.",
    applications: "Hogar / Negocio / Industria",
  },
  {
    index: "06",
    href: "/bombeo-solar",
    title: "Bombeo solar",
    description:
      "Soluciones para ranchos, pozos, agricultura y operación en zonas rurales.",
    applications: "Agrícola / Rancho / Pozo",
  },
];

export const processSteps = verifiedCurrentSiteContent.process.steps.map(
  (step) => step.title,
);

export const homeFaqs = [
  {
    question: "¿Instalan paneles solares en Monterrey y Nuevo León?",
    answer:
      "Sí. Enerza TRC atiende proyectos en Monterrey y en la zona metropolitana de Nuevo León, además de sus zonas principales en Torreón y La Laguna.",
  },
  {
    question: "¿Su cobertura se limita a Torreón?",
    answer:
      "No. Torreón y La Laguna son zonas principales de atención, pero Enerza TRC también trabaja de forma activa en Monterrey, Nuevo León y en proyectos regionales del norte de México.",
  },
  {
    question: "¿Dan mantenimiento a sistemas que no instalaron ustedes?",
    answer:
      "Sí. Se puede revisar un sistema existente, diagnosticar fallas y proponer mantenimiento preventivo o correctivo aunque otro proveedor haya hecho la instalación original.",
  },
  {
    question: "¿Ayudan con el trámite de CFE?",
    answer:
      "Sí. El servicio contempla acompañamiento en documentación e interconexión para que el proyecto avance con una ruta técnica clara.",
  },
  {
    question: "¿Qué necesito para cotizar?",
    answer:
      "Lo ideal es contar con tu recibo CFE más reciente, ubicación del sitio, tipo de inmueble y una idea general del servicio que necesitas.",
  },
  {
    question: "¿Cuánto tarda una instalación?",
    answer:
      "Depende del tamaño del sistema, las condiciones del sitio, el acceso y el alcance del trámite.",
  },
  {
    question: "¿Instalan sistemas para negocios o industria?",
    answer:
      "Sí. Enerza TRC atiende soluciones para comercios, oficinas, naves y operaciones con requerimientos eléctricos más amplios tanto en La Laguna como en Monterrey y otras zonas del norte de México.",
  },
];

export const quoteFaqs = [
  homeFaqs[4],
  homeFaqs[5],
  {
    question: "¿Prometen ahorros exactos desde el primer mensaje?",
    answer:
      "No. Enerza TRC evita prometer ahorros exactos sin revisar consumo real, recibo CFE y condiciones del sitio.",
  },
  {
    question: "¿Puedo cotizar instalación, mantenimiento o trámite CFE?",
    answer:
      "Sí. La ruta de cotización contempla instalación de paneles solares, mantenimiento, trámite CFE, bombeo solar y diagnóstico.",
  },
];

export const areasServedSection = {
  title: "Zonas de atención",
  description:
    "Torreón y La Laguna son zonas principales. Monterrey y Nuevo León forman parte de la atención activa, además de proyectos regionales en el norte de México.",
  laguna: ["Torreón", "Gómez Palacio", "Lerdo", "Matamoros", "San Pedro"],
  nuevoLeon: [
    "Monterrey",
    "San Pedro Garza García",
    "Guadalupe",
    "Apodaca",
    "San Nicolás",
  ],
  regional: ["Coahuila", "Durango", "Norte de México"],
  items: [...cityCoverage],
};

export const fullFaqs = verifiedCurrentSiteContent.faq;

export type FaqItem = (typeof homeFaqs)[number];
