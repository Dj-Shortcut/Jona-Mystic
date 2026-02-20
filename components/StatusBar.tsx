export function StatusBar() {
  return (
    <div className="panel sticky top-3 z-20 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>LIVE</span>
        <span>BPM 124–132</span>
        <span>LAST BUILD: STABLE</span>
      </div>
    </div>
  );
}
