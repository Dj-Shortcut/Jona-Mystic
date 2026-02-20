'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  pathLabel: string;
  children: ReactNode;
};

export function Section({ id, title, pathLabel, children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
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
  }, []);

  return (
    <section id={id} ref={ref} className={`panel reveal p-4 sm:p-5 ${visible ? 'is-visible' : ''}`}>
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{pathLabel}</p>
      <h2 className="mt-2 text-xl font-semibold text-[var(--txt)] sm:text-2xl">{title}</h2>
      <div className="mt-4 text-sm text-[var(--muted)]">{children}</div>
    </section>
  );
}
