import type { Metadata } from 'next';

const jonathanBio =
  "Hey, my name is Jonathan, better known as 'jona-mystic'. From 1987 I started walkin' on this bizarre planet and I immediately knew that music was in my blood. At age 15 I started very small with a few vinyls and expanded into the DJ I have become now.";

export const metadata: Metadata = {
  title: {
    default: 'DJ Jona-Mystic',
    template: '%s | DJ Jona-Mystic',
  },
  description: jonathanBio,
  openGraph: {
    title: 'DJ Jona-Mystic',
    description: jonathanBio,
    images: ['/og.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
