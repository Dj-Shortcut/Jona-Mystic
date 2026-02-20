export type SiteContent = {
  name: string;
  subtitle: string;
  bpmRange: string;
  genre: string;
  region: string;
  mixes: Array<{
    title: string;
    description: string;
    platform: string;
    href: string;
  }>;
  gigs: Array<{
    title: string;
    date: string;
    venue: string;
    city: string;
    details: string;
  }>;
};

export const site: SiteContent = {
  name: 'DJ Jona-Mystic',
  subtitle: 'Terminal-grade energy for dancefloors after midnight.',
  bpmRange: '124–132',
  genre: 'Progressive / Melodic House (placeholder)',
  region: 'BE',
  mixes: [
    {
      title: 'MIDNIGHT_SIGNAL_001',
      description: 'Late-night melodic pressure test with rolling lows.',
      platform: 'SoundCloud',
      href: '#',
    },
    {
      title: 'NEON_PULSE_002',
      description: 'Warm-up sequence for peak-time transitions.',
      platform: 'Mixcloud',
      href: '#',
    },
  ],
  gigs: [
    {
      title: 'TBA',
      date: 'PENDING',
      venue: 'Venue',
      city: 'City',
      details: 'Line check pending. Contact node unlocked after confirmation.',
    },
    {
      title: 'TBA',
      date: 'PENDING',
      venue: 'Venue',
      city: 'City',
      details: 'Support slot placeholder. Full routing data will be published later.',
    },
  ],
};
