import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-semibold text-zinc-100">{title}</h2>
      <div className="text-zinc-300">{children}</div>
    </section>
  );
}
