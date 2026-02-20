import { ReactNode } from "react";

export type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-3 rounded-lg border border-emerald-400/20 bg-black/40 p-4">
      <div>
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-200">{title}</h2>
        {description ? <p className="mt-1 text-sm text-emerald-100/70">{description}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
