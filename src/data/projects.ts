import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "monterrey-proyecto-reciente",
    slug: "proyecto-solar-monterrey-nuevo-leon",
    title: "Nuevo proyecto en Monterrey, Nuevo Leon",
    location: "Monterrey, Nuevo Leon",
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
    gallery: ["/images/projects/monterrey-proyecto-reciente.jpeg"],
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
    gallery: ["/images/projects/real-del-nogalar.jpeg"],
    featured: true,
    relatedCities: ["Torreon", "La Laguna", "Coahuila", "Norte de Mexico"],
  },
  {
    id: "ampliacion-senderos",
    slug: "ampliacion-senderos-paneles-solares",
    title: "Ampliacion Senderos",
    location: "Ampliacion Senderos, Coahuila",
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
    gallery: ["/images/projects/ampliacion-senderos.jpeg"],
    featured: true,
    relatedCities: ["Torreon", "La Laguna", "Coahuila", "Norte de Mexico"],
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
