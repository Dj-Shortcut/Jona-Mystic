import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  pathLabel: string;
  children: ReactNode;
};

export function Section({ id, title, pathLabel, children }: SectionProps) {
  return (
    <section id={id} className="panel p-4 sm:p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{pathLabel}</p>
      <h2 className="mt-2 text-xl font-semibold text-[var(--txt)] sm:text-2xl">{title}</h2>
      <div className="mt-4 text-sm text-[var(--muted)]">{children}</div>
    </section>
  );
}
