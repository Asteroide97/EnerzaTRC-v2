import {
  Activity,
  BellRing,
  CalendarRange,
  CheckCircle2,
  MonitorSmartphone,
  Smartphone,
  SunMedium,
  TrendingUp,
  Zap,
} from "lucide-react";

const topMetrics = [
  {
    label: "Hoy",
    value: "24.8 kWh",
    note: "Producción estimada",
    icon: SunMedium,
  },
  {
    label: "Este mes",
    value: "682 kWh",
    note: "Generación acumulada",
    icon: TrendingUp,
  },
  {
    label: "Ahorro",
    value: "Por confirmar",
    note: "Se revisa según recibo CFE",
    icon: Zap,
  },
  {
    label: "Estado",
    value: "Sistema en línea",
    note: "Operando correctamente",
    icon: CheckCircle2,
  },
] as const;

const productionBars = [
  { label: "Lun", value: 38 },
  { label: "Mar", value: 54 },
  { label: "Mié", value: 61 },
  { label: "Jue", value: 47 },
  { label: "Vie", value: 66 },
  { label: "Sáb", value: 58 },
  { label: "Dom", value: 42 },
] as const;

const monitoringItems = [
  "Producción de energía por día, semana o mes.",
  "Comparativos de comportamiento del sistema.",
  "Alertas visuales cuando se requiere revisión.",
  "Acceso desde computadora y celular.",
] as const;

export function PanelDashboardPreview() {
  return (
    <section className="cut-corner overflow-hidden border border-foreground/12 bg-secondary text-secondary-foreground">
      <div className="grid gap-0 lg:grid-cols-[1.45fr_0.55fr]">
        <div className="grid gap-0 border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="field-label text-primary">Panel de control</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">
                Vista principal del sistema
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-300">
              <CalendarRange className="h-4 w-4 text-primary" />
              <span>Hoy</span>
              <span className="rounded-full border border-white/12 px-3 py-1">Semana</span>
              <span className="rounded-full border border-white/12 px-3 py-1">Mes</span>
            </div>
          </div>

          <div className="grid gap-4 border-b border-white/10 px-6 py-6 md:grid-cols-2 xl:grid-cols-4">
            {topMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article key={metric.label} className="cut-corner border border-white/10 bg-white/6 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="field-label text-slate-300">{metric.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/8 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{metric.note}</p>
                </article>
              );
            })}
          </div>

          <div className="grid gap-6 px-6 py-6 xl:grid-cols-[1.25fr_0.75fr]">
            <article className="cut-corner border border-white/10 bg-white/5 p-5">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="field-label text-primary">Generación de energía</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Historial de generación
                  </h3>
                </div>
                <div className="text-sm leading-7 text-slate-300">
                  Lectura diaria con comparativo semanal y mensual.
                </div>
              </div>

              <div className="mt-6 grid h-[280px] grid-cols-7 items-end gap-4">
                {productionBars.map((bar) => (
                  <div key={bar.label} className="grid h-full grid-rows-[1fr_auto] gap-3">
                    <div className="relative flex items-end">
                      <div className="absolute inset-0 grid grid-rows-4 gap-4">
                        {[0, 1, 2, 3].map((row) => (
                          <div key={row} className="border-t border-dashed border-white/10" />
                        ))}
                      </div>
                      <div
                        className="relative w-full rounded-t-[12px] bg-gradient-to-t from-accent to-primary"
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

            <article className="grid gap-4">
              <div className="cut-corner border border-white/10 bg-white/5 p-5">
                <p className="field-label text-primary">Estado del sistema</p>
                <div className="mt-4 flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Sistema operando correctamente</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Indicador general de conexión, generación y comportamiento del sistema.
                </p>
              </div>

              <div className="cut-corner border border-white/10 bg-white/5 p-5">
                <p className="field-label text-primary">Alertas del sistema</p>
                <div className="mt-4 flex items-start gap-3">
                  <BellRing className="mt-1 h-4 w-4 text-primary" />
                  <p className="text-sm leading-7 text-slate-300">
                    Cuando el rendimiento cambia o se requiere revisión, el panel
                    permite identificar la atención necesaria.
                  </p>
                </div>
              </div>

              <div className="cut-corner border border-white/10 bg-white/5 p-5">
                <p className="field-label text-primary">Vista móvil</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="cut-corner w-[118px] border border-white/10 bg-slate-950/40 p-3">
                    <div className="rounded-[14px] border border-white/10 bg-slate-950/50 p-3">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-400">
                        <span>App</span>
                        <Smartphone className="h-3.5 w-3.5" />
                      </div>
                      <div className="space-y-2">
                        <div className="rounded-md bg-primary/70 px-2 py-2 text-[11px] font-semibold text-white">
                          24.8 kWh hoy
                        </div>
                        <div className="rounded-md bg-white/8 px-2 py-2 text-[11px] text-slate-200">
                          Sistema en línea
                        </div>
                        <div className="rounded-md bg-accent/70 px-2 py-2 text-[11px] font-semibold text-secondary">
                          Operación estable
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    El cliente puede revisar el sistema desde computadora y celular
                    con una lectura simple de producción, ahorro y estado general.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 bg-slate-950/18 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <Activity className="h-4 w-4 text-accent" />
              <span>Operación estable y comparativos históricos disponibles.</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <MonitorSmartphone className="h-4 w-4 text-primary" />
              <span>Escritorio y móvil con lectura sincronizada.</span>
            </div>
          </div>
        </div>

        <aside className="grid gap-0 bg-slate-950/18">
          <div className="border-b border-white/10 px-6 py-5">
            <p className="field-label text-primary">Lo que ve el cliente</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Resumen claro del sistema
            </h3>
          </div>
          <div className="grid gap-4 px-6 py-6">
            {monitoringItems.map((item) => (
              <article key={item} className="cut-corner border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
