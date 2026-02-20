export type SiteConfig = {
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
  mixes: {
    title: string;
    description: string;
    href: string;
  }[];
  gigs: {
    title: string;
    date: string;
    location: string;
    href: string;
  }[];
  contact: {
    email: string;
    phone: string;
    formAction: string;
  };
};

export const site: SiteConfig = {
  name: 'Jona Mystic',
  tagline: 'Hypnotic grooves for deep nights.',
  bpmRange: '122–128 BPM',
  genre: 'Deep / Progressive House',
  region: 'NL / EU',
  links: {
    instagram: '#',
    soundcloud: '#',
    booking: '#',
  },
  mixes: [
    {
      title: 'Mix placeholder',
      description: 'Coming soon',
      href: '#',
    },
  ],
  gigs: [
    {
      title: 'Gig placeholder',
      date: 'TBA',
      location: 'TBA',
      href: '#',
    },
  ],
  contact: {
    email: 'hello@example.com',
    phone: '+31 00 000 0000',
    formAction: '#',
  },
};
