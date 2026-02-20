import { site } from '@/content/site';

export function TerminalHeader() {
  return (
    <header className="panel p-space-16 sm:p-space-24">
      <p className="meta-label">DJ_JONA-MYSTIC.exe v0.1</p>
      <p className="meta-label mt-space-8">STATUS: LIVE • THEME: 2-TONE GREEN</p>
      <h1 className="mt-space-16 text-3xl font-semibold tracking-tight leading-[1.12] text-[var(--text)] sm:text-5xl">{site.name}</h1>
      <p className="mt-space-12 max-w-2xl text-sm leading-[1.5] text-[var(--muted)] sm:text-base">{site.subtitle}</p>
      <span className="cursor-block mt-space-12 inline-block h-5 w-2 bg-[var(--green1)] align-middle" aria-hidden />
    </header>
  );
}
