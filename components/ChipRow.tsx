export type ChipRowProps = {
  label: string;
  chips: string[];
};

export function ChipRow({ label, chips }: ChipRowProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.18em] text-emerald-100/60">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <li key={chip} className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}
