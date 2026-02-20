'use client';

import { useEffect, useState } from 'react';

const logLines = [
  '[SYS] INITIALIZING AUDIO GRAPH...',
  '[OK] LOADING VISUAL MODULES...',
  '[OK] SYNCING BPM CLOCK...',
  '[OK] ROUTING OUTPUT -> MAIN',
  '[OK] READY',
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
    }, 220);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="panel p-4 sm:p-5" aria-live="polite">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">BOOT_LOG</p>
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
