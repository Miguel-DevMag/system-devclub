// Título padrão das seções

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {label ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-white/50">
          {label}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}