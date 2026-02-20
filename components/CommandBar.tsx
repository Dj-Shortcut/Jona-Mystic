const commands = [
  { href: '#mixes', label: 'open mixes' },
  { href: '#gigs', label: 'open gigs' },
  { href: '#contact', label: 'open contact' },
];

export function CommandBar() {
  return (
    <nav className="panel p-4 sm:p-5" aria-label="Command shortcuts">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">commands</p>
      <div className="flex flex-wrap gap-2.5">
        {commands.map((command) => (
          <a key={command.href} href={command.href} className="cmd hover:glow transition">
            {command.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
