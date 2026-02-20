'use client';

import { site } from '@/content/site';
import { useState } from 'react';

export function MixesList() {
  const [activeMix, setActiveMix] = useState<string | null>(null);

  return (
    <ul className="space-y-space-8">
      {site.mixes.map((mix) => {
        const open = activeMix === mix.title;
        return (
          <li key={mix.title}>
            <button type="button" className="row-trigger w-full text-left" onClick={() => setActiveMix(open ? null : mix.title)}>
              <p className="font-medium leading-[1.4] text-[var(--text)]">[MIX] {mix.title}</p>
              <p className="mt-space-4 leading-[1.5]">{mix.description}</p>
            </button>
            {open ? (
              <div className="mt-space-8 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-space-12 text-xs text-[var(--muted)]">
                <p className="text-[var(--green1)]">{`> ${mix.platform.toUpperCase()} endpoint:`}</p>
                <p>{mix.href === '#' ? 'COMING_SOON // link not configured yet.' : mix.href}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
