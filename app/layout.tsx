import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DJ Jona-Mystic',
    template: '%s | DJ Jona-Mystic',
  },
  description: 'Terminal-style DJ profile for Jona-Mystic.',
  metadataBase: new URL('https://jona-mystic.vercel.app'),
  openGraph: {
    title: 'DJ Jona-Mystic',
    description: 'Terminal-style DJ profile for Jona-Mystic.',
    images: ['/og.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
