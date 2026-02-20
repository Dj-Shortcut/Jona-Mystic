'use client';

import { useEffect, useRef, useState } from 'react';

import { BOOT_LOG_LINES, getBootLogDelay } from '@/lib/bootLog';
import { usePrefersReducedMotion } from '@/lib/motion';

export function BootLog() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCount(BOOT_LOG_LINES.length);
      return;
    }

    const playLine = (index: number) => {
      if (index >= BOOT_LOG_LINES.length) {
        return;
      }

      timeoutRef.current = window.setTimeout(() => {
        setVisibleCount(index + 1);
        playLine(index + 1);
      }, getBootLogDelay(BOOT_LOG_LINES[index]));
    };

    playLine(0);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const completeLog = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setVisibleCount(BOOT_LOG_LINES.length);
  };

  const isComplete = visibleCount >= BOOT_LOG_LINES.length;

  return (
    <button type="button" className="boot-log-click panel w-full p-space-16 text-left" onClick={completeLog} aria-live="polite">
      <p className="meta-label mb-space-12">BOOT_LOG</p>
      <ul className="boot-log-list text-sm text-[var(--text)]">
        {BOOT_LOG_LINES.map((line, index) => {
          const isVisible = index < visibleCount;
          const isActive = !isComplete && index === visibleCount;

          return (
            <li key={line} className={`boot-log-line ${isVisible ? 'is-visible' : ''}`}>
              <span>{isVisible ? line : '\u00a0'}</span>
              <span
                className={`cursor-block boot-caret ${isActive ? 'is-active' : ''} ${prefersReducedMotion ? 'is-reduced' : ''}`}
                aria-hidden
              >
                ▋
              </span>
            </li>
          );
        })}
      </ul>
    </button>
  );
}
