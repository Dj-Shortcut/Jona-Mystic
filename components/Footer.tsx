import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="pb-4 pt-1 text-center text-xs text-[var(--muted)]">
      <p>
        © {new Date().getFullYear()} {site.name} | Terminal Session Active
      </p>
    </footer>
  );
}
