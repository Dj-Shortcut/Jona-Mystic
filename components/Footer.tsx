import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="pb-space-8 pt-space-4 text-center text-xs leading-[1.5] text-[var(--muted)]">
      <p>© 2026 {site.name}</p>
      <p className="mt-space-4">build: live // terminal-ui stable</p>
    </footer>
  );
}
