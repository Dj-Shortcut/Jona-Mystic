'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/lib/motion';

type SectionProps = {
  id?: string;
  title: string;
  pathLabel: string;
  children: ReactNode;
};

export function Section({ id, title, pathLabel, children }: SectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section id={id} ref={ref} className={`panel section-panel reveal p-space-16 ${visible ? 'is-visible' : ''}`}>
      <p className="meta-label">{pathLabel}</p>
      <h2 className="title mt-space-8 text-[var(--text)]">{title}</h2>
      <div className="mt-space-16 text-sm leading-[1.5] text-[var(--muted)]">{children}</div>
    </section>
  );
}
