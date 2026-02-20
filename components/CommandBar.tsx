export type CommandBarProps = {
  prompt: string;
  command: string;
};

export function CommandBar({ prompt, command }: CommandBarProps) {
  return (
    <div className="mt-6 rounded-md border border-emerald-400/40 bg-black/60 px-4 py-3 font-mono text-sm text-emerald-100">
      <span className="text-emerald-300">{prompt}</span>
      <span className="ml-2">{command}</span>
      <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-200 align-middle" aria-hidden />
    </div>
  );
}
