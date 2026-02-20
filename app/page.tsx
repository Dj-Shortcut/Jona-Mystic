import Link from 'next/link';
import Section from './components/Section';

const commandButtons = [
  { label: 'Mixes', href: '#mixes' },
  { label: 'Gigs', href: '#gigs' },
  { label: 'Contact', href: '#contact' },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-zinc-50">Jona Mystic</h1>
        <p className="text-zinc-300">Electronic journeys, live sets and future dates.</p>
        <nav className="flex flex-wrap gap-3">
          {/* TODO: switch to routes when links/gigs exist */}
          {commandButtons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-400"
            >
              {button.label}
            </Link>
          ))}
        </nav>
      </header>

      <Section id="mixes" title="Mixes">
        Placeholder voor mix-overzicht. Voeg hier binnenkort de eerste sets toe.
      </Section>

      <Section id="gigs" title="Gigs">
        Placeholder voor aankomende gigs. Binnenkort volgen data en locaties.
      </Section>

      <Section id="contact" title="Contact">
        Placeholder voor contactinformatie. Voeg hier socials en boekingsinformatie toe.
      </Section>
    </main>
  );
}
