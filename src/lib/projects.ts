import type { Project } from "@/types";

export const customerTypeLabels: Record<Project["clientType"], string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  industrial: "Industrial",
  agricola: "Agricola",
  mantenimiento: "Mantenimiento",
};

export function sortProjectsForShowcase(projects: Project[]) {
  return [...projects].sort((a, b) => {
    if (a.id === "monterrey-proyecto-reciente") {
      return -1;
    }

    if (b.id === "monterrey-proyecto-reciente") {
      return 1;
    }

    return 0;
  });
}
