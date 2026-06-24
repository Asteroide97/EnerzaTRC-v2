import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl",
      )}
    >
      {eyebrow ? <p className="field-label text-primary">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.7rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
