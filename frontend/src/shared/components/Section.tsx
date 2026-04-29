import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

// Section — a titled content block. The heading gets a gold underline
// accent derived from the brand CSS custom property.
export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="inline-block border-b-2 border-[color:var(--color-accent)] pb-1.5 text-xl font-bold tracking-tight text-[color:var(--color-primary)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
