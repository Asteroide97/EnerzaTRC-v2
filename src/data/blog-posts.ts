export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  keywords: string[];
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuantos-paneles-solares-necesito-para-una-casa",
    title: "¿Cuántos paneles solares necesito para una casa?",
    description:
      "Guía inicial para entender por qué el número de paneles depende del consumo, horarios de uso y condiciones del sitio.",
    publishedAt: "2026-06-23",
    readTime: "6 min",
    keywords: [
      "cuantos paneles solares necesito para una casa",
      "paneles solares para casa",
      "dimensionamiento solar residencial",
    ],
    sections: [
      {
        title: "El recibo CFE es el punto de partida",
        paragraphs: [
          "La cantidad de paneles no se define por metros cuadrados solamente. El punto de partida es el consumo real que aparece en tu recibo CFE y la forma en que usas la energía en casa.",
          "Climatización, bombas, electrodomésticos, horarios de ocupación y crecimiento futuro cambian el cálculo. Por eso una cotización seria empieza por revisar el historial de consumo y no por prometer un número fijo desde el primer mensaje.",
        ],
      },
      {
        title: "No conviene sobredimensionar ni recortar de más",
        paragraphs: [
          "Un sistema demasiado pequeño puede quedarse corto y uno demasiado grande puede no responder a la lógica económica del proyecto. El diseño debe buscar equilibrio técnico, no una cifra vistosa.",
          "También importa la orientación del sitio, sombras, estado del techo y si el cliente necesita solo interconexión o además respaldo con baterías.",
        ],
      },
      {
        title: "Qué preparar antes de cotizar",
        paragraphs: [
          "Ten a la mano tu recibo CFE más reciente, la ciudad, el tipo de inmueble y cualquier dato relevante sobre tus equipos de alto consumo.",
          "Con eso, Enerza TRC puede orientar la primera propuesta y definir si hace falta visita, diagnóstico más profundo o una solución escalable por etapas.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-el-tramite-cfe-para-paneles-solares",
    title: "¿Cómo funciona el trámite CFE para paneles solares?",
    description:
      "Explicación práctica sobre por qué la interconexión debe entenderse como parte del proyecto y no como un trámite aislado.",
    publishedAt: "2026-06-23",
    readTime: "6 min",
    keywords: [
      "tramite cfe paneles solares",
      "interconexion cfe paneles solares",
      "como funciona cfe paneles solares",
    ],
    sections: [
      {
        title: "El trámite empieza desde la planeación",
        paragraphs: [
          "La interconexión no debería pensarse al final. La documentación, el alcance técnico y la instalación deben estar alineados desde la propuesta.",
          "Cuando el trámite se deja para después, es más fácil que aparezcan faltantes de información o expectativas poco realistas sobre tiempos y pasos.",
        ],
      },
      {
        title: "Qué suele revisar el equipo técnico",
        paragraphs: [
          "Se ordena la información del cliente, del sistema y del alcance del proyecto para que el proceso tenga una ruta más clara.",
          "El objetivo es acompañar la parte documental sin desconectarla de la realidad eléctrica y operativa del sitio.",
        ],
      },
      {
        title: "Por qué conviene pedir apoyo",
        paragraphs: [
          "Un acompañamiento adecuado ayuda a reducir fricción y a que el cliente entienda mejor qué depende del proveedor, qué depende del usuario y cómo se relaciona el trámite con la puesta en marcha del sistema.",
        ],
      },
    ],
  },
  {
    slug: "mantenimiento-de-paneles-solares-cuando-hacerlo",
    title: "Mantenimiento de paneles solares: cuándo hacerlo",
    description:
      "Señales para revisar un sistema solar y por qué el mantenimiento no se limita a una limpieza superficial.",
    publishedAt: "2026-06-23",
    readTime: "5 min",
    keywords: [
      "mantenimiento de paneles solares",
      "cuando hacer mantenimiento paneles solares",
      "mantenimiento de sistemas solares",
    ],
    sections: [
      {
        title: "La limpieza no es todo",
        paragraphs: [
          "Un sistema puede verse limpio y aun así tener desviaciones de desempeño, conexiones deterioradas o componentes que requieren revisión.",
          "Por eso el mantenimiento serio contempla inspección visual, revisión eléctrica y diagnóstico de puntos críticos como inversores y tableros.",
        ],
      },
      {
        title: "Cuándo conviene programar una revisión",
        paragraphs: [
          "Si el entorno tiene polvo, si notas cambios en el comportamiento del sistema o si no existe historial claro de mantenimiento, vale la pena pedir una evaluación.",
          "También es útil revisar sistemas instalados por terceros cuando no se tiene certeza sobre el estado actual del arreglo.",
        ],
      },
      {
        title: "Qué gana el cliente",
        paragraphs: [
          "Mantener el sistema ayuda a detectar riesgos antes de que escalen, recuperar continuidad operativa y tomar decisiones con mejor información.",
        ],
      },
    ],
  },
  {
    slug: "paneles-solares-para-negocios-con-alto-consumo",
    title: "Paneles solares para negocios con alto consumo",
    description:
      "Aspectos que un comercio u operación debe revisar antes de cotizar un sistema solar.",
    publishedAt: "2026-06-23",
    readTime: "6 min",
    keywords: [
      "paneles solares para negocio",
      "paneles solares comerciales",
      "negocios con alto consumo energia",
    ],
    sections: [
      {
        title: "La operación manda",
        paragraphs: [
          "En un negocio, la propuesta debe respetar horarios, picos de demanda y ventanas reales para intervenir el sitio sin frenar la operación.",
          "No basta con trasladar la lógica de un proyecto residencial a un inmueble comercial.",
        ],
      },
      {
        title: "La cotización debe partir del consumo real",
        paragraphs: [
          "El historial de recibos, la distribución de cargas y los equipos de mayor demanda son esenciales para evitar promesas genéricas.",
          "También importa saber si el cliente busca una implementación por etapas o una solución de una sola fase.",
        ],
      },
      {
        title: "Qué revisar antes de decidir",
        paragraphs: [
          "Conviene preparar recibos CFE, información de horarios de operación y una idea clara del objetivo principal: ahorro, orden energético, crecimiento o continuidad.",
        ],
      },
    ],
  },
  {
    slug: "paneles-solares-en-monterrey-que-revisar-antes-de-cotizar",
    title: "Paneles solares en Monterrey: qué revisar antes de cotizar",
    description:
      "Guía inicial para hogares, comercios e industria que buscan una propuesta solar en Monterrey y Nuevo León.",
    publishedAt: "2026-06-23",
    readTime: "6 min",
    keywords: [
      "paneles solares Monterrey",
      "paneles solares en Monterrey",
      "cotizar paneles solares Monterrey",
    ],
    sections: [
      {
        title: "No todas las cotizaciones sirven para Monterrey igual",
        paragraphs: [
          "Monterrey y su zona metropolitana concentran necesidades muy distintas entre vivienda, negocio e industria. Una propuesta útil debe partir del consumo y del sitio, no de un paquete fijo.",
        ],
      },
      {
        title: "Qué información conviene reunir",
        paragraphs: [
          "Recibo CFE, ubicación, tipo de inmueble, horarios de operación y restricciones del sitio ayudan a aterrizar mejor el proyecto.",
          "Si se busca respaldo o continuidad operativa, eso también debe comunicarse desde el inicio.",
        ],
      },
      {
        title: "Cobertura sin afirmaciones imprecisas",
        paragraphs: [
          "Al cotizar en Monterrey es importante distinguir entre cobertura activa y presencia física. Enerza TRC atiende proyectos y brinda atencion en Nuevo Leon sin afirmar una oficina no confirmada.",
        ],
      },
    ],
  },
  {
    slug: "paneles-solares-en-torreon-y-la-laguna-guia-para-hogares-y-negocios",
    title: "Paneles solares en Torreón y La Laguna: guía para hogares y negocios",
    description:
      "Qué considerar al cotizar paneles solares en Torreón, Gómez Palacio, Lerdo y la región lagunera.",
    publishedAt: "2026-06-23",
    readTime: "7 min",
    keywords: [
      "paneles solares Torreón",
      "paneles solares La Laguna",
      "paneles solares Gomez Palacio",
    ],
    sections: [
      {
        title: "La región exige diseño y mantenimiento conscientes",
        paragraphs: [
          "Torreón y La Laguna combinan calor, polvo y hábitos de consumo que influyen tanto en el dimensionamiento como en la rutina de mantenimiento.",
        ],
      },
      {
        title: "No todos los inmuebles necesitan la misma estrategia",
        paragraphs: [
          "Una casa, un local y una nave industrial pueden compartir ciudad pero no lógica de diseño. El sistema debe responder al tipo de operación y al patrón real de demanda.",
        ],
      },
      {
        title: "Qué esperar de un proveedor serio",
        paragraphs: [
          "Revisión de recibo CFE, claridad sobre alcance, acompañamiento técnico y una propuesta sin frases vacías ni estimaciones inventadas.",
        ],
      },
    ],
  },
  {
    slug: "bombeo-solar-para-ranchos-y-agricultura",
    title: "Bombeo solar para ranchos y agricultura",
    description:
      "Variables que importan al evaluar una solución de bombeo solar en contextos rurales y agrícolas.",
    publishedAt: "2026-06-23",
    readTime: "5 min",
    keywords: ["bombeo solar", "bombeo solar para ranchos", "bombeo solar agricultura"],
    sections: [
      {
        title: "No es una adaptación menor de un sistema residencial",
        paragraphs: [
          "El bombeo solar debe considerar el punto de trabajo, la demanda, el entorno y la continuidad que necesita la operación.",
        ],
      },
      {
        title: "La visita técnica suele ser importante",
        paragraphs: [
          "En muchos proyectos agrícolas o rurales se necesita entender mejor el sitio antes de prometer una solución. Eso reduce errores de dimensionamiento.",
        ],
      },
      {
        title: "Dónde aporta valor",
        paragraphs: [
          "Puede ser una opción útil para ranchos, pozos y actividad agrícola en Coahuila, Durango y otras zonas del norte donde la operación requiere autonomía y criterio técnico.",
        ],
      },
    ],
  },
  {
    slug: "como-leer-tu-recibo-cfe-antes-de-cotizar-paneles-solares",
    title: "Cómo leer tu recibo CFE antes de cotizar paneles solares",
    description:
      "Datos del recibo que ayudan a pedir una cotización solar con mejor contexto y menos suposiciones.",
    publishedAt: "2026-06-23",
    readTime: "5 min",
    keywords: [
      "como leer recibo cfe paneles solares",
      "recibo cfe para cotizar paneles solares",
      "cotizacion paneles solares recibo cfe",
    ],
    sections: [
      {
        title: "Por qué el recibo importa tanto",
        paragraphs: [
          "El recibo es una de las mejores referencias para iniciar la conversación técnica porque muestra consumo, comportamiento y contexto del servicio.",
        ],
      },
      {
        title: "Qué datos ayudan más",
        paragraphs: [
          "Consumo reciente, historial disponible, ubicación del inmueble y si existen equipos de alta demanda como climatización, bombeo o maquinaria.",
        ],
      },
      {
        title: "Qué logra una cotización mejor informada",
        paragraphs: [
          "Reduce suposiciones, ayuda a plantear una propuesta más coherente y acelera la definición de si hace falta visita técnica o levantamiento adicional.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
