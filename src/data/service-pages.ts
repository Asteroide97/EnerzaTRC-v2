import { homeFaqs } from "@/data/site-content";

export type ServicePageContent = {
  path: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  highlights: string[];
  scope: string[];
  process: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const generalServicesPage = {
  title: "Servicios solares para hogares, negocios e industria",
  description:
    "Instalación, mantenimiento, diseño, diagnóstico, bombeo solar e interconexión CFE con cobertura regional desde La Laguna hacia Monterrey y otras zonas del norte de México.",
};

export const servicePages: Record<string, ServicePageContent> = {
  residenciales: {
    path: "/paneles-solares-residenciales",
    title: "Paneles solares residenciales",
    eyebrow: "Hogares y casas",
    heroTitle: "Sistemas solares diseñados para el consumo real de tu hogar",
    heroDescription:
      "Evaluamos tu recibo CFE, hábitos de uso y condiciones del sitio para plantear una instalación residencial segura y clara.",
    metaTitle: "Paneles solares residenciales",
    metaDescription:
      "Diseño e instalación de paneles solares residenciales con revisión de consumo, propuesta técnica y acompañamiento postinstalación.",
    keywords: [
      "paneles solares residenciales",
      "paneles solares para casa",
      "paneles solares para hogares",
    ],
    intro:
      "El objetivo no es llenar el techo de paneles, sino construir un sistema coherente con tu consumo, tu presupuesto y la operación real del inmueble.",
    highlights: [
      "Revisión de recibo CFE y patrón de consumo",
      "Dimensionamiento responsable",
      "Instalación con enfoque en seguridad",
      "Acompañamiento en trámites y puesta en marcha",
    ],
    scope: [
      "Viviendas unifamiliares",
      "Casas con alto consumo de climatización",
      "Residencias en desarrollo o ampliación de obra",
      "Clientes que buscan reducir dependencia de la red",
    ],
    process: [
      "Levantamiento de datos de consumo",
      "Evaluación del techo o área disponible",
      "Propuesta técnica y económica",
      "Instalación y revisión final",
    ],
    faq: homeFaqs.slice(4),
  },
  comerciales: {
    path: "/paneles-solares-comerciales",
    title: "Paneles solares comerciales",
    eyebrow: "Negocios y operación",
    heroTitle: "Energía solar para negocios, locales y oficinas",
    heroDescription:
      "Proyectos pensados para horarios extendidos, control de costos y mínima interrupción operativa durante la instalación.",
    metaTitle: "Paneles solares comerciales",
    metaDescription:
      "Instalación de paneles solares para negocios, oficinas y locales con análisis de consumo, propuesta técnica y acompañamiento CFE.",
    keywords: [
      "paneles solares para negocio",
      "paneles solares comerciales",
      "sistemas solares para locales",
    ],
    intro:
      "En un negocio, la ingeniería debe alinearse con la operación. Enerza TRC diseña propuestas que consideran demanda, continuidad y tiempos de intervención.",
    highlights: [
      "Planeación de instalación por ventanas operativas",
      "Diagnóstico de consumo y horarios de carga",
      "Preparación para interconexión y documentación",
      "Soporte técnico posterior",
    ],
    scope: [
      "Locales comerciales",
      "Oficinas",
      "Bodegas con consumo relevante",
      "Negocios en expansión",
    ],
    process: [
      "Lectura del historial de consumo",
      "Revisión técnica del sitio",
      "Diseño y propuesta por etapas si aplica",
      "Instalación y seguimiento",
    ],
    faq: [
      homeFaqs[5],
      homeFaqs[6],
      {
        question: "¿Pueden instalar sin detener completamente la operación?",
        answer:
          "Depende del sitio y del alcance eléctrico, pero la planeación del proyecto busca reducir afectaciones y coordinar trabajos por etapas cuando es necesario.",
      },
    ],
  },
  industriales: {
    path: "/paneles-solares-industriales",
    title: "Paneles solares industriales",
    eyebrow: "Naves, plantas y alto consumo",
    heroTitle: "Ingeniería solar para operaciones con consumo energético alto",
    heroDescription:
      "Revisamos perfiles de carga, escalabilidad y restricciones del sitio para plantear una solución solar con criterio técnico y operativo.",
    metaTitle: "Paneles solares industriales",
    metaDescription:
      "Soluciones solares industriales para plantas, naves y operaciones con alto consumo energético en La Laguna, Monterrey y otras zonas del norte de México.",
    keywords: [
      "paneles solares industriales",
      "sistemas solares industriales",
      "energia solar para industria",
    ],
    intro:
      "Los proyectos industriales exigen más que una instalación estándar. Se requiere lectura de carga, coordinación en sitio y claridad sobre la viabilidad real del sistema.",
    highlights: [
      "Análisis técnico previo a la propuesta",
      "Lectura de cargas y crecimiento esperado",
      "Implementación con enfoque en seguridad",
      "Ruta de mantenimiento para continuidad operativa",
    ],
    scope: [
      "Naves industriales",
      "Procesos con demanda constante",
      "Operaciones con espacios amplios de cubierta",
      "Instalaciones con necesidad de escalabilidad",
    ],
    process: [
      "Revisión de consumo y restricciones técnicas",
      "Diagnóstico del sitio",
      "Propuesta solar con alcance definido",
      "Instalación, pruebas y seguimiento",
    ],
    faq: [
      homeFaqs[6],
      {
        question: "¿Trabajan proyectos fuera de La Laguna?",
        answer:
          "Sí. Enerza TRC presenta cobertura regional y puede atender proyectos industriales en Monterrey, Nuevo León, Coahuila, Durango y otras zonas del norte de México.",
      },
      {
        question: "¿La propuesta puede contemplar crecimiento futuro?",
        answer:
          "Sí. Cuando el sitio y la operación lo permiten, la ingeniería puede plantearse para escalar por etapas.",
      },
    ],
  },
  mantenimiento: {
    path: "/mantenimiento-paneles-solares",
    title: "Mantenimiento de paneles solares",
    eyebrow: "Limpieza, revisión y diagnóstico",
    heroTitle: "Mantenimiento preventivo y correctivo para sistemas solares",
    heroDescription:
      "Atención para limpieza, revisión eléctrica, diagnóstico de fallas, inversores, tableros y recuperación de desempeño.",
    metaTitle: "Mantenimiento de paneles solares",
    metaDescription:
      "Mantenimiento de sistemas solares en Torreón, La Laguna, Monterrey y Nuevo León: limpieza, revisión, diagnóstico, inversores y tableros.",
    keywords: [
      "mantenimiento de paneles solares",
      "mantenimiento de sistemas solares",
      "diagnostico paneles solares",
    ],
    intro:
      "Un sistema solar también necesita revisión periódica. Enerza TRC puede intervenir instalaciones existentes para detectar riesgos, corregir desviaciones y mantener desempeño.",
    highlights: [
      "Limpieza controlada",
      "Diagnóstico de componentes críticos",
      "Revisión visual, eléctrica y funcional",
      "Ruta de mantenimiento sugerida",
    ],
    scope: [
      "Sistemas residenciales",
      "Instalaciones comerciales",
      "Sistemas instalados por terceros",
      "Casos con caída de producción aparente",
    ],
    process: [
      "Evaluación del estado general",
      "Inspección y pruebas disponibles",
      "Reporte de hallazgos y acciones",
      "Mantenimiento preventivo o correctivo",
    ],
    faq: [
      homeFaqs[2],
      {
        question: "¿Cada cuánto se recomienda revisar un sistema solar?",
        answer:
          "La frecuencia depende de polvo, ambiente, acceso y comportamiento del sistema. Una revisión periódica ayuda a detectar desviaciones antes de que escalen.",
      },
      {
        question: "¿También revisan inversores y tableros?",
        answer:
          "Sí. El mantenimiento contempla componentes clave del sistema, no solo la limpieza superficial de los paneles.",
      },
    ],
  },
  tramites: {
    path: "/tramites-cfe-paneles-solares",
    title: "Trámite CFE para paneles solares",
    eyebrow: "Interconexión y documentación",
    heroTitle: "Acompañamiento técnico y documental para trámite CFE",
    heroDescription:
      "Enerza TRC ayuda a ordenar la documentación del proyecto y avanzar en la ruta de interconexión con una visión práctica.",
    metaTitle: "Trámite CFE para paneles solares",
    metaDescription:
      "Apoyo en interconexión CFE y documentación para sistemas solares residenciales, comerciales e industriales.",
    keywords: [
      "tramite cfe paneles solares",
      "interconexion cfe paneles solares",
      "cfe paneles solares",
    ],
    intro:
      "El trámite no debe dejarse al final sin preparación. Integrarlo desde la propuesta técnica ayuda a reducir fricciones y a entender mejor el proceso.",
    highlights: [
      "Orden documental del proyecto",
      "Acompañamiento sobre interconexión",
      "Seguimiento alineado con la instalación",
      "Comunicación clara sobre lo que depende del cliente y del proveedor",
    ],
    scope: [
      "Proyectos residenciales",
      "Instalaciones comerciales",
      "Proyectos industriales",
      "Casos con documentación incompleta",
    ],
    process: [
      "Revisión del tipo de proyecto",
      "Integración documental",
      "Seguimiento a la ruta de interconexión",
      "Coordinación con puesta en marcha",
    ],
    faq: [
      homeFaqs[3],
      {
        question: "¿Puedo cotizar solo el apoyo con trámite CFE?",
        answer:
          "Sí. Enerza TRC puede revisar el caso y definir si el alcance es acompañamiento documental, regularización o trámite ligado a una instalación nueva.",
      },
      {
        question: "¿El trámite reemplaza la evaluación técnica?",
        answer:
          "No. La instalación, el dimensionamiento y la documentación deben estar alineados.",
      },
    ],
  },
  bombeo: {
    path: "/bombeo-solar",
    title: "Bombeo solar",
    eyebrow: "Agrícola y rural",
    heroTitle: "Bombeo solar para ranchos, pozos y operación agrícola",
    heroDescription:
      "Soluciones para llevar energía útil a operación rural con revisión de demanda, sitio y condiciones de trabajo.",
    metaTitle: "Bombeo solar",
    metaDescription:
      "Bombeo solar para ranchos, agricultura, pozos y zonas rurales en Coahuila, Durango, Monterrey y otras zonas del norte de México.",
    keywords: ["bombeo solar", "paneles solares para pozo", "bombeo solar agricola"],
    intro:
      "El bombeo solar requiere entender el punto de extracción, la demanda y el contexto del sitio. No es solo una variante de un sistema residencial.",
    highlights: [
      "Evaluación del uso esperado",
      "Dimensionamiento del arreglo y bombeo",
      "Enfoque en operación rural",
      "Cobertura regional para proyectos agrícolas",
    ],
    scope: [
      "Ranchos",
      "Pozos",
      "Agricultura",
      "Sitios rurales con acceso energético limitado",
    ],
    process: [
      "Diagnóstico de demanda",
      "Revisión técnica del punto de trabajo",
      "Propuesta solar y de bombeo",
      "Instalación y validación operativa",
    ],
    faq: [
      {
        question: "¿El bombeo solar aplica solo para zonas remotas?",
        answer:
          "No necesariamente. También puede ser útil cuando se busca una operación más eficiente o independiente en entornos agrícolas y rurales.",
      },
      {
        question: "¿Atienden proyectos agrícolas fuera de Torreón?",
        answer:
          "Sí. Enerza TRC comunica cobertura regional en Coahuila, Durango, Monterrey, Nuevo León y otras zonas del norte de México según el proyecto.",
      },
      {
        question: "¿Se requiere visita para cotizar?",
        answer:
          "En muchos casos sí, porque el dimensionamiento depende de variables del sitio y del requerimiento de operación.",
      },
    ],
  },
};

export const cityPages = {
  torreon: {
    path: "/paneles-solares-torreon",
    title: "Paneles solares en Torreón y La Laguna",
    metaTitle: "Paneles solares en Torreón | Instalación y mantenimiento",
    metaDescription:
      "Instalación, mantenimiento y trámite CFE para paneles solares en Torreón y La Laguna. Sistemas residenciales, comerciales e industriales.",
    keywords: [
      "paneles solares Torreón",
      "paneles solares en Torreón",
      "instalación de paneles solares Torreón",
      "mantenimiento de paneles solares Torreón",
      "paneles solares La Laguna",
      "paneles solares Gómez Palacio",
    ],
    intro:
      "Torreón y La Laguna combinan clima exigente, consumo por climatización y sitios con necesidades distintas entre vivienda, comercio e industria. La propuesta solar debe responder a esas condiciones.",
    localFocus: [
      "Atención en Torreón, Gómez Palacio, Lerdo, Matamoros y San Pedro",
      "Proyectos para hogares, negocios e industria en la región lagunera",
      "Mantenimiento y diagnóstico para sistemas ya instalados",
      "Cobertura principal en La Laguna con atención activa en Monterrey y Nuevo León",
    ],
    faq: [
      {
        question: "¿Atienden solo Torreón?",
        answer:
          "No. La cobertura también contempla La Laguna en su conjunto, incluyendo Gómez Palacio, Lerdo, Matamoros y otras zonas cercanas.",
      },
      {
        question: "¿Enerza TRC también trabaja en Monterrey y Nuevo León?",
        answer:
          "Sí. Aunque esta página se enfoca en Torreón y La Laguna, la empresa también atiende Monterrey, Nuevo León y proyectos regionales en el norte de México.",
      },
      {
        question: "¿El clima de La Laguna influye en el diseño?",
        answer:
          "Sí. Las condiciones térmicas, el polvo y los patrones de consumo cambian la forma en que debe plantearse un sistema solar y su mantenimiento.",
      },
      {
        question: "¿Pueden dar mantenimiento a un sistema ya instalado en la región?",
        answer:
          "Sí. Enerza TRC puede revisar, diagnosticar y proponer mantenimiento preventivo o correctivo para sistemas existentes.",
      },
    ],
  },
  monterrey: {
    path: "/paneles-solares-monterrey",
    title: "Paneles solares en Monterrey y Nuevo León",
    metaTitle: "Paneles solares en Monterrey | Instalación solar",
    metaDescription:
      "Diseño, instalación y mantenimiento de sistemas solares en Monterrey y Nuevo León. Proyecto reciente en Monterrey y cobertura activa para hogares, negocios e industria.",
    keywords: [
      "paneles solares Monterrey",
      "paneles solares en Monterrey",
      "instalación de paneles solares Monterrey",
      "paneles solares Nuevo León",
    ],
    intro:
      "Monterrey y su zona metropolitana requieren propuestas técnicas claras, ejecución ordenada y capacidad para atender proyectos de distinta escala. Enerza TRC ya cuenta con un proyecto reciente en Monterrey, por lo que la cobertura en Nuevo León se comunica como activa junto con sus zonas principales en Torreón y La Laguna.",
    localFocus: [
      "Atención en Monterrey, Guadalupe, Apodaca, San Nicolás y San Pedro Garza García",
      "Cobertura activa en Nuevo León sin afirmar oficina física donde no esté confirmada",
      "Proyecto reciente en Monterrey como referencia comercial destacada",
      "Servicios para residencias, comercios e industria dentro de una operación regional",
    ],
    faq: [
      {
        question: "¿Enerza TRC tiene proyectos en Monterrey?",
        answer:
          "Sí. El sitio destaca un proyecto reciente en Monterrey como prueba de cobertura activa en Nuevo León.",
      },
      {
        question: "¿Atienden la zona metropolitana?",
        answer:
          "Sí. La cobertura comunicada incluye Monterrey y municipios de la zona metropolitana, según alcance técnico y operativo del proyecto.",
      },
      {
        question: "¿Tienen oficina física en Monterrey?",
        answer:
          "Esta página comunica atención y proyectos en Monterrey y Nuevo León, pero no afirma oficina física si ese dato no está confirmado.",
      },
      {
        question: "¿Pueden cotizar proyectos comerciales e industriales en Nuevo León?",
        answer:
          "Sí. Enerza TRC atiende hogares, negocios e industria con enfoque técnico y propuesta ajustada al consumo real.",
      },
    ],
  },
};
