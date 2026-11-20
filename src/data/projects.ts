import type { Project } from "@/types";

const losAngelesPhotos = [
  ["panoramica", "Vista general de los paneles sobre la cubierta metálica en Ampliación Los Ángeles, Torreón"],
  ["soportes", "Soportes fijados a la lámina antes de colocar los módulos solares"],
  ["montaje", "Paneles colocados junto a la sección de cubierta con soportes aún visibles"],
  ["instaladores", "Personal de instalación junto a los módulos sobre el techo de lámina"],
  ["inversor", "Inversor instalado en una columna bajo la cubierta, con sus cajas de conexión"],
  ["filas", "Filas de módulos fotovoltaicos con las azoteas de Torreón al fondo"],
  ["trabajo-al-atardecer", "Instalador junto a los paneles a contraluz durante el atardecer"],
  ["modulos-al-atardecer", "Detalle de los módulos con el reflejo del cielo y las montañas al fondo"],
].map(([file, alt]) => ({ src: `/images/projects/ampliacion-los-angeles/${file}.jpg`, alt }));

export const projects: Project[] = [
  {
    id: "monterrey-proyecto-reciente",
    slug: "proyecto-solar-monterrey-nuevo-leon",
    title: "Nuevo proyecto en Monterrey, Nuevo León",
    location: "Monterrey, Nuevo León",
    state: "Nuevo Leon",
    city: "Monterrey",
    clientType: "comercial",
    serviceType: "Instalacion de sistema solar fotovoltaico",
    capacityKwp: undefined,
    panelCount: undefined,
    inverter: "Por confirmar",
    installationTime: "Por confirmar",
    estimatedSavings: undefined,
    challenge:
      "Disenar una solucion solar adaptada al consumo y a las condiciones del inmueble.",
    solution:
      "Evaluacion tecnica, dimensionamiento del sistema e instalacion profesional.",
    results:
      "Proyecto reciente en Monterrey que confirma atencion activa en Nuevo Leon.",
    coverImage: "/images/projects/monterrey-proyecto-reciente.jpeg",
    gallery: [{ src: "/images/projects/monterrey-proyecto-reciente.jpeg", alt: "Instalación fotovoltaica en Monterrey, Nuevo León" }],
    featured: true,
    relatedCities: ["Monterrey", "Nuevo Leon", "Norte de Mexico"],
  },
  {
    id: "real-del-nogalar",
    slug: "real-del-nogalar-paneles-solares",
    title: "Real del Nogalar",
    location: "Real del Nogalar, Coahuila",
    state: "Coahuila",
    city: "Real del Nogalar",
    clientType: "residencial",
    serviceType: "Instalacion de sistema solar fotovoltaico",
    capacityKwp: undefined,
    panelCount: 18,
    inverter: undefined,
    installationTime: undefined,
    estimatedSavings: undefined,
    challenge:
      "Resolver un proyecto residencial con datos tecnicos parciales sin inventar metricas no confirmadas.",
    solution:
      "Instalacion del sistema y puesta en marcha con seguimiento tecnico posterior.",
    results:
      "Proyecto residencial de Enerza TRC con 18 paneles instalados.",
    coverImage: "/images/projects/real-del-nogalar.jpeg",
    gallery: [{ src: "/images/projects/real-del-nogalar.jpeg", alt: "Instalación fotovoltaica en Real del Nogalar, Coahuila" }],
    featured: true,
    relatedCities: ["Torreon", "La Laguna", "Coahuila", "Norte de Mexico"],
  },
  {
    id: "ampliacion-senderos",
    slug: "ampliacion-senderos-paneles-solares",
    title: "Ampliación Senderos",
    location: "Ampliación Senderos, Coahuila",
    state: "Coahuila",
    city: "Ampliacion Senderos",
    clientType: "residencial",
    serviceType: "Instalacion de sistema solar fotovoltaico",
    capacityKwp: undefined,
    panelCount: 6,
    inverter: undefined,
    installationTime: undefined,
    estimatedSavings: undefined,
    challenge:
      "Presentar el caso con datos confirmados y aclarar que Ampliacion Senderos es el nombre de la zona del proyecto.",
    solution:
      "Instalacion solar en la zona Ampliacion Senderos con seguimiento tecnico del sistema.",
    results:
      "Proyecto residencial en Ampliacion Senderos con 6 paneles instalados.",
    coverImage: "/images/projects/ampliacion-senderos.jpeg",
    gallery: [{ src: "/images/projects/ampliacion-senderos.jpeg", alt: "Instalación fotovoltaica en Ampliación Senderos, Coahuila" }],
    featured: true,
    relatedCities: ["Torreon", "La Laguna", "Coahuila", "Norte de Mexico"],
  },
  {
    id: "ampliacion-los-angeles",
    slug: "instalacion-solar-ampliacion-los-angeles-torreon",
    title: "Instalación solar en Ampliación Los Ángeles",
    location: "Ampliación Los Ángeles, Torreón, Coahuila",
    city: "Torreón",
    state: "Coahuila",
    serviceType: "Instalación de sistema solar fotovoltaico",
    coverImage: losAngelesPhotos[0].src,
    gallery: losAngelesPhotos,
    featured: true,
    relatedCities: ["Torreón", "La Laguna", "Coahuila", "Norte de México"],
  },
];

export const monterreyFeaturedProject = projects.find(
  (project) => project.id === "monterrey-proyecto-reciente",
);

export const featuredProjects = [...projects].sort((a, b) => {
  if (a.id === "monterrey-proyecto-reciente") {
    return -1;
  }

  if (b.id === "monterrey-proyecto-reciente") {
    return 1;
  }

  return 0;
});

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 2) {
  return projects.filter((item) => item.slug !== project.slug).slice(0, limit);
}
