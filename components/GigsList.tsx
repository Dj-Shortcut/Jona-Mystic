'use client';

import { site } from '@/content/site';
import { useState } from 'react';

export function GigsList() {
  const [openGig, setOpenGig] = useState<number | null>(null);

  return (
    <ul className="space-y-2">
      {site.gigs.map((gig, index) => {
        const open = openGig === index;
        return (
          <li key={`${gig.title}-${index}`}>
            <button type="button" className="row-trigger w-full text-left" onClick={() => setOpenGig(open ? null : index)}>
              <p className="font-medium text-[var(--txt)]">[{gig.date}] {gig.title} — {gig.venue} — {gig.city}</p>
            </button>
            {open ? (
              <div className="log-line mt-2 rounded-lg border border-[var(--border)] bg-[var(--panel-soft)] p-3 text-xs">
                <p>{gig.details}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
