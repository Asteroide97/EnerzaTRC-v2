import { areasServedSection } from "@/data/site-content";

export function AreasServed() {
  return (
    <section className="cut-corner border border-foreground/14 bg-secondary px-6 py-8 text-secondary-foreground lg:px-8 lg:py-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="field-label text-primary">{areasServedSection.title}</p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight">
            Cobertura regional
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            {areasServedSection.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <p className="field-label text-slate-400">La Laguna</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {areasServedSection.laguna.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="field-label text-slate-400">Nuevo León</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {areasServedSection.nuevoLeon.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="field-label text-slate-400">Norte de México</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {areasServedSection.regional.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
