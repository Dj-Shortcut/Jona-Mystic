export function StatusBar() {
  return (
    <div className="panel sticky top-3 z-20 p-space-12 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
      <div className="flex flex-wrap items-center gap-x-space-16 gap-y-space-4">
        <span>LIVE</span>
        <span>BPM 124–132</span>
        <span>LAST BUILD: STABLE</span>
      </div>
    </div>
  );
}
