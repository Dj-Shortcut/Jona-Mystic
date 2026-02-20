import { site } from '@/content/site';

export function TerminalHeader() {
  return (
    <header className="panel glow p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--acc)]" />
          <span>{site.name.toLowerCase().replace(/\s+/g, '.')}</span>
        </div>
        <span className="chip">region: {site.region}</span>
      </div>

      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">terminal profile</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--txt)] sm:text-5xl">{site.name}</h1>
      <p className="mt-3 text-sm text-[var(--muted)] sm:text-base">
        {site.tagline}
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-[var(--acc)] align-middle" aria-hidden />
      </p>
    </header>
  );
}
