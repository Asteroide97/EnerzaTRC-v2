import {
  BellRing,
  CheckCircle2,
  Smartphone,
  SunMedium,
  TrendingUp,
  Zap,
} from "lucide-react";

const topMetrics = [
  {
    label: "Energia hoy",
    value: "24.8 kWh",
    note: "Lectura visible del dia",
    icon: SunMedium,
    compact: false,
  },
  {
    label: "Generacion este mes",
    value: "682 kWh",
    note: "Seguimiento acumulado",
    icon: TrendingUp,
    compact: false,
  },
  {
    label: "Ahorro estimado",
    value: "Revisar con recibo CFE",
    note: "Referencia para seguimiento",
    icon: Zap,
    compact: true,
  },
  {
    label: "Estado",
    value: "Sistema en linea",
    note: "Operacion correcta",
    icon: CheckCircle2,
    compact: false,
  },
] as const;

const productionBars = [
  { label: "Lun", value: 48 },
  { label: "Mar", value: 64 },
  { label: "Mie", value: 58 },
  { label: "Jue", value: 74 },
  { label: "Vie", value: 66 },
  { label: "Sab", value: 52 },
  { label: "Dom", value: 61 },
] as const;

const rangeChips = ["Hoy", "Semana", "Mes"] as const;

export function PanelDashboardPreview() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-foreground/12 bg-secondary text-secondary-foreground shadow-sm">
      <div className="border-b border-white/10 px-5 py-4 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <p className="field-label text-primary">Panel Enerza</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Sistema en linea
              </span>
            </div>
            <p className="text-sm text-slate-300">Ultima lectura sincronizada</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {rangeChips.map((item, index) => (
              <span
                key={item}
                className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] ${
                  index === 0
                    ? "bg-primary text-white"
                    : "border border-white/12 text-slate-300"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1.35fr_0.65fr] lg:p-6">
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {topMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.label}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="field-label text-slate-300">{metric.label}</p>
                      <p
                        className={`mt-3 font-semibold text-white ${
                          metric.compact ? "text-lg leading-7" : "text-2xl"
                        }`}
                      >
                        {metric.value}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/8 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{metric.note}</p>
                </article>
              );
            })}
          </div>

          <article className="rounded-[28px] border border-white/10 bg-white/5 p-5 lg:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="field-label text-primary">Generacion</p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Comportamiento reciente del sistema
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Lectura sincronizada
              </span>
            </div>

            <div className="mt-6 grid h-[240px] grid-cols-7 items-end gap-3 sm:gap-4">
              {productionBars.map((bar) => (
                <div key={bar.label} className="grid h-full grid-rows-[1fr_auto] gap-3">
                  <div className="relative flex items-end">
                    <div className="absolute inset-0 grid grid-rows-4 gap-4">
                      {[0, 1, 2, 3].map((row) => (
                        <div key={row} className="border-t border-dashed border-white/10" />
                      ))}
                    </div>
                    <div
                      className="relative w-full rounded-t-[14px] bg-gradient-to-t from-accent via-primary to-primary/70"
                      style={{ height: `${bar.value}%` }}
                    />
                  </div>
                  <div className="text-center text-xs uppercase tracking-[0.14em] text-slate-400">
                    {bar.label}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="grid gap-4">
          <article className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="field-label text-primary">Estado del sistema</p>
            <div className="mt-4 flex items-center gap-3 text-white">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold">Sistema en linea</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Operando correctamente con lectura disponible para seguimiento.
            </p>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="field-label text-primary">Alertas</p>
            <div className="mt-4 flex items-start gap-3">
              <BellRing className="mt-1 h-4 w-4 text-primary" />
              <p className="text-sm leading-7 text-slate-300">
                Si el comportamiento cambia, el panel ayuda a detectar que hace falta
                una revision.
              </p>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="field-label text-primary">Vista movil</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-[92px] rounded-[22px] border border-white/10 bg-slate-950/45 p-2">
                <div className="rounded-[16px] border border-white/10 bg-slate-950/55 p-3">
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <span>Movil</span>
                    <Smartphone className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-md bg-primary/70 px-2 py-2 text-[11px] font-semibold text-white">
                      24.8 kWh hoy
                    </div>
                    <div className="rounded-md bg-white/8 px-2 py-2 text-[11px] text-slate-200">
                      Sistema en linea
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                La lectura del sistema tambien puede consultarse desde celular.
              </p>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
