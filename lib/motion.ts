'use client';

import { useEffect, useState } from 'react';

export const MOTION_DURATIONS = {
  short: 120,
  medium: 180,
  long: 240,
} as const;

export const MOTION_EASING = 'cubic-bezier(0.2, 0.8, 0.2, 1)';

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
}
