export type SiteContent = {
  name: string;
  tagline: string;
  bpmRange: string;
  genre: string;
  region: string;
  links: {
    instagram: string;
    soundcloud: string;
    booking: string;
  };
  mixes: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  gigs: Array<{
    title: string;
    date: string;
    location: string;
    href: string;
  }>;
  contact: {
    email: string;
    phone: string;
    note: string;
  };
};

export const site: SiteContent = {
  name: 'DJ Jona-Mystic',
  tagline: 'Booting deep grooves for late-night dancefloors...',
  bpmRange: '122-128 BPM',
  genre: 'Progressive / Melodic House (placeholder)',
  region: 'BE',
  links: {
    instagram: '',
    soundcloud: '',
    booking: '',
  },
  mixes: [
    {
      title: 'Midnight Signal // Placeholder',
      description: 'Placeholder mix. Replace with live stream or SoundCloud link.',
      href: '#',
    },
    {
      title: 'Neon Pulse // Placeholder',
      description: 'Placeholder mix description for future drop.',
      href: '#',
    },
  ],
  gigs: [
    {
      title: 'TBA // Club Night',
      date: 'TBA',
      location: 'Belgium',
      href: '#',
    },
  ],
  contact: {
    email: 'booking@jona-mystic.com',
    phone: '+32 000 00 00 00',
    note: 'Open for club nights, festival warmups and private events.',
  },
};
