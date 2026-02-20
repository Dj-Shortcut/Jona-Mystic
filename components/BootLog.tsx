'use client';

import { useEffect, useRef, useState } from 'react';

import { BOOT_LOG_LINES, getBootLogDelay } from '@/lib/bootLog';
import { usePrefersReducedMotion } from '@/lib/motion';

export function BootLog() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeTextLength, setActiveTextLength] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCount(BOOT_LOG_LINES.length);
      setActiveTextLength(0);
      return;
    }

    const typeLine = (index: number, charIndex: number) => {
      if (index >= BOOT_LOG_LINES.length) {
        setActiveTextLength(0);
        return;
      }

      const line = BOOT_LOG_LINES[index];

      if (charIndex <= line.length) {
        timeoutRef.current = window.setTimeout(() => {
          setVisibleCount(index);
          setActiveTextLength(charIndex);
          typeLine(index, charIndex + 1);
        }, 14);

        return;
      }

      timeoutRef.current = window.setTimeout(() => {
        setVisibleCount(index + 1);
        setActiveTextLength(0);
        typeLine(index + 1, 0);
      }, getBootLogDelay(line));
    };

    typeLine(0, 0);

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
    setActiveTextLength(0);
  };

  const isComplete = visibleCount >= BOOT_LOG_LINES.length;

  return (
    <button type="button" className="boot-log-click panel w-full p-space-16 text-left" onClick={completeLog} aria-live="polite">
      <p className="meta-label mb-space-12">BOOT_LOG</p>
      <ul className="boot-log-list text-sm text-[var(--text)]">
        {BOOT_LOG_LINES.map((line, index) => {
          const isVisible = index < visibleCount;
          const isTyping = !isComplete && index === visibleCount;
          const isActive = !isComplete && index === visibleCount;
          const displayedLine = isVisible ? line : isTyping ? line.slice(0, activeTextLength) : '\u00a0';

          return (
            <li key={line} className={`boot-log-line ${isVisible || isTyping ? 'is-visible' : ''}`}>
              <span>{displayedLine}</span>
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
