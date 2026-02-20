export type BootLogProps = {
  lines: string[];
};

export function BootLog({ lines }: BootLogProps) {
  return (
    <section aria-label="Boot sequence" className="space-y-1 font-mono text-sm text-emerald-100/80">
      {lines.map((line) => (
        <p key={line} className="leading-relaxed">
          <span className="mr-2 text-emerald-300">$</span>
          {line}
        </p>
      ))}
    </section>
  );
}
