export type FooterProps = {
  message: string;
  links: Array<{ href: string; label: string }>;
};

export function Footer({ message, links }: FooterProps) {
  return (
    <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-400/20 pt-4 text-xs text-emerald-100/60">
      <p>{message}</p>
      <nav>
        <ul className="flex gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a className="hover:text-emerald-200" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
