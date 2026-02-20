import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="pb-2 pt-1 text-center text-xs text-[var(--muted)]">
      <p>© 2026 {site.name}</p>
      <p className="mt-1">build: live // terminal-ui stable</p>
    </footer>
  );
}
