'use client';

import { useState } from 'react';

const commands = [
  { href: '#mixes', label: 'PLAY_LATEST_MIX' },
  { href: '#gigs', label: 'VIEW_GIGS' },
  { href: '#contact', label: 'BOOKING_CONTACT' },
];

export function CommandBar() {
  const [feedback, setFeedback] = useState<string>('');

  const runCommand = (href: string, label: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setFeedback(`> ${label} // command executed`);
    window.setTimeout(() => setFeedback(''), 1200);
  };

  return (
    <nav className="panel p-4 sm:p-5" aria-label="Command shortcuts">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">COMMANDS</p>
      <div className="flex flex-wrap gap-2.5">
        {commands.map((command) => (
          <button key={command.href} type="button" onClick={() => runCommand(command.href, command.label)} className="cmd">
            {command.label}
          </button>
        ))}
      </div>
      <p className="mt-3 min-h-5 text-xs text-[var(--green)]">{feedback}</p>
    </nav>
  );
}
