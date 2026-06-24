import type { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";
import { projects } from "@/data/projects";

const staticRoutes = [
  "",
  "/beneficios",
  "/como-funciona",
  "/panel-de-control",
  "/preguntas-frecuentes",
  "/servicios",
  "/proyectos",
  "/zonas-de-atencion",
  "/cotizar",
  "/nosotros",
  "/paneles-solares-torreon",
  "/paneles-solares-monterrey",
  "/paneles-solares-residenciales",
  "/paneles-solares-comerciales",
  "/paneles-solares-industriales",
  "/mantenimiento-paneles-solares",
  "/tramites-cfe-paneles-solares",
  "/bombeo-solar",
  "/privacidad",
  "/terminos-y-condiciones",
] as const;

const routePriorityMap: Record<(typeof staticRoutes)[number], number> = {
  "": 1,
  "/beneficios": 0.84,
  "/como-funciona": 0.84,
  "/panel-de-control": 0.8,
  "/preguntas-frecuentes": 0.74,
  "/servicios": 0.86,
  "/proyectos": 0.9,
  "/zonas-de-atencion": 0.84,
  "/cotizar": 0.92,
  "/nosotros": 0.72,
  "/paneles-solares-torreon": 0.95,
  "/paneles-solares-monterrey": 0.95,
  "/paneles-solares-residenciales": 0.8,
  "/paneles-solares-comerciales": 0.82,
  "/paneles-solares-industriales": 0.82,
  "/mantenimiento-paneles-solares": 0.82,
  "/tramites-cfe-paneles-solares": 0.8,
  "/bombeo-solar": 0.78,
  "/privacidad": 0.2,
  "/terminos-y-condiciones": 0.2,
};

const routeFrequencyMap: Record<
  (typeof staticRoutes)[number],
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  "": "weekly",
  "/beneficios": "monthly",
  "/como-funciona": "monthly",
  "/panel-de-control": "monthly",
  "/preguntas-frecuentes": "monthly",
  "/servicios": "monthly",
  "/proyectos": "weekly",
  "/zonas-de-atencion": "monthly",
  "/cotizar": "monthly",
  "/nosotros": "monthly",
  "/paneles-solares-torreon": "weekly",
  "/paneles-solares-monterrey": "weekly",
  "/paneles-solares-residenciales": "monthly",
  "/paneles-solares-comerciales": "monthly",
  "/paneles-solares-industriales": "monthly",
  "/mantenimiento-paneles-solares": "monthly",
  "/tramites-cfe-paneles-solares": "monthly",
  "/bombeo-solar": "monthly",
  "/privacidad": "yearly",
  "/terminos-y-condiciones": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${businessConfig.domain}${route}`,
      lastModified: now,
      changeFrequency: routeFrequencyMap[route],
      priority: routePriorityMap[route],
    })),
    ...projects.map((project) => ({
      url: `${businessConfig.domain}/proyectos/${project.slug}`,
      lastModified: now,
      changeFrequency:
        project.id === "monterrey-proyecto-reciente" ? ("weekly" as const) : ("monthly" as const),
      priority: project.id === "monterrey-proyecto-reciente" ? 0.86 : 0.72,
    })),
  ];
}
