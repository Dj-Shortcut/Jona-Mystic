export type TerminalHeaderProps = {
  hostname: string;
  status: string;
  time: string;
};

export function TerminalHeader({ hostname, status, time }: TerminalHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-emerald-400/30 bg-emerald-400/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-emerald-200">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span>{hostname}</span>
      </div>
      <div className="text-emerald-100/80">{status}</div>
      <time dateTime={time}>{time}</time>
    </header>
  );
}
