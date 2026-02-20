import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jona Mystic',
  description: 'Next.js app met App Router, TypeScript en Tailwind CSS.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
