import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.35em] text-metal-silver/70">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <div className="mt-4 text-base leading-relaxed text-metal-silver/85 sm:text-lg">
            {description}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
