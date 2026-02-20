'use client';

import { site } from '@/content/site';
import { useState } from 'react';

export function MixesList() {
  const [activeMix, setActiveMix] = useState<string | null>(null);

  return (
    <ul className="space-y-2">
      {site.mixes.map((mix) => {
        const open = activeMix === mix.title;
        return (
          <li key={mix.title}>
            <button type="button" className="row-trigger w-full text-left" onClick={() => setActiveMix(open ? null : mix.title)}>
              <p className="font-medium text-[var(--txt)]">[MIX] {mix.title}</p>
              <p>{mix.description}</p>
            </button>
            {open ? (
              <div className="mt-2 rounded-lg border border-[var(--border)] bg-[var(--panel-soft)] p-3 text-xs text-[var(--muted)]">
                <p className="text-[var(--green)]">{`> ${mix.platform.toUpperCase()} endpoint:`}</p>
                <p>{mix.href === '#' ? 'COMING_SOON // link not configured yet.' : mix.href}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
