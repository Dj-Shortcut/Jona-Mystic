'use client';

import { useEffect, useState } from 'react';

const logLines = [
  '[  OK  ] Booting Jona-Mystic sound kernel',
  '[  OK  ] Loading mixer buses and FX chains',
  '[  OK  ] Syncing BPM range to 122-128',
  '[  OK  ] Establishing crowd-energy signal',
  '[ DONE ] Terminal profile online',
];

export function BootLog() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCount(logLines.length);
      return;
    }

    const interval = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= logLines.length) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="panel p-4 sm:p-5" aria-live="polite">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">boot.log</p>
      <ul className="space-y-1.5 text-sm text-[var(--txt)]">
        {logLines.slice(0, visibleCount).map((line) => (
          <li key={line} className="font-mono">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
