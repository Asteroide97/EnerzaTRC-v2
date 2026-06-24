import { verifiedCurrentSiteContent } from "@/data/site-content";

type ProcessTimelineItem = {
  index?: string;
  title: string;
  description?: string;
};

type ProcessTimelineProps = {
  items?: ReadonlyArray<ProcessTimelineItem>;
  detailed?: boolean;
};

export function ProcessTimeline({
  items = verifiedCurrentSiteContent.process.steps,
  detailed = false,
}: ProcessTimelineProps) {
  return (
    <>
      <ol className="grid gap-5 md:hidden">
        {items.map((step, index) => (
          <li
            key={`${step.title}-${index}`}
            className="section-rule grid grid-cols-[80px_1fr] gap-4 pt-5"
          >
            <span className="font-heading text-4xl font-semibold text-foreground/30">
              {step.index || String(index + 1).padStart(2, "0")}
            </span>
            <div className="space-y-2 pt-2">
              <p className="text-base font-medium text-foreground">{step.title}</p>
              {detailed && step.description ? (
                <p className="text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <ol className="relative hidden gap-6 md:grid md:grid-cols-5">
        <div className="absolute left-0 right-0 top-9 h-px bg-foreground/16" />
        {items.map((step, index) => (
          <li key={`${step.title}-${index}`} className="relative space-y-4">
            <div className="flex h-[4.5rem] items-center">
              <span className="font-heading text-5xl font-semibold text-foreground/28">
                {step.index || String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="h-3 w-3 bg-primary" />
            <div className="space-y-2 pt-2">
              <p className="text-sm font-medium leading-7 text-foreground">
                {step.title}
              </p>
              {detailed && step.description ? (
                <p className="text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
