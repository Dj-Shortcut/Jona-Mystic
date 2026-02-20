import { site } from '@/content/site';

export function TerminalHeader() {
  return (
    <header className="panel glow glow-flicker p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">DJ_JONA-MYSTIC.exe v0.1</p>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">STATUS: LIVE • THEME: 2-TONE GREEN</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--txt)] sm:text-5xl">{site.name}</h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">{site.subtitle}</p>
      <span className="cursor-block mt-3 inline-block h-5 w-2 bg-[var(--green)] align-middle" aria-hidden />
    </header>
  );
}
