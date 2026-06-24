import type { Project } from "@/types";

type ProjectStatsProps = {
  project: Project;
};

function getMetricValue(value: string | number | undefined, suffix?: string) {
  if (value === undefined || value === "") {
    return "Por confirmar";
  }

  return suffix ? `${value} ${suffix}` : `${value}`;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  const stats = [
    {
      label: "Capacidad",
      value: getMetricValue(project.capacityKwp, "kWp"),
    },
    {
      label: "Número de paneles",
      value: getMetricValue(project.panelCount),
    },
    {
      label: "Inversor",
      value: getMetricValue(project.inverter),
    },
    {
      label: "Tiempo de instalación",
      value: getMetricValue(project.installationTime),
    },
    {
      label: "Referencia de ahorro",
      value: getMetricValue(project.estimatedSavings),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <div key={stat.label} className="project-plate cut-corner p-5">
          <p className="field-label text-muted-foreground">{stat.label}</p>
          <p className="mt-3 text-base font-medium text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
