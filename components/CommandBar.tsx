'use client';

import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/lib/motion';

const commands = [
  { href: '#mixes', label: 'PLAY_LATEST_MIX' },
  { href: '#gigs', label: 'VIEW_GIGS' },
  { href: '#contact', label: 'BOOKING_CONTACT' },
];

export function CommandBar() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [feedback, setFeedback] = useState<string>('');
  const feedbackTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) {
        window.clearTimeout(feedbackTimer.current);
      }
    };
  }, []);

  const runCommand = (href: string, label: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    setFeedback(`> ${label} // command executed`);

    if (feedbackTimer.current) {
      window.clearTimeout(feedbackTimer.current);
    }

    feedbackTimer.current = window.setTimeout(() => setFeedback(''), 1200);
  };

  return (
    <nav className="panel p-space-16" aria-label="Command shortcuts">
      <p className="meta-label mb-space-12">COMMANDS</p>
      <div className="flex flex-wrap gap-space-8">
        {commands.map((command) => (
          <button key={command.href} type="button" onClick={() => runCommand(command.href, command.label)} className="cmd">
            {command.label}
          </button>
        ))}
      </div>
      <p className="mt-space-12 min-h-5 text-xs text-[var(--green1)]">{feedback}</p>
    </nav>
  );
}
