import { BootLog } from '@/components/BootLog';
import { CommandBar } from '@/components/CommandBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Shell } from '@/components/Shell';
import { TerminalHeader } from '@/components/TerminalHeader';
import { site } from '@/content/site';

export default function HomePage() {
  return (
    <Shell>
      <TerminalHeader />
      <BootLog />
      <CommandBar />

      <Section id="mixes" title="Mixes" pathLabel="/mixes">
        <ul className="space-y-2">
          {site.mixes.map((mix) => (
            <li key={mix.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/60 p-3">
              <p className="font-medium text-[var(--txt)]">{mix.title}</p>
              <p>{mix.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="gigs" title="Gigs" pathLabel="/gigs">
        <ul className="space-y-2">
          {site.gigs.map((gig) => (
            <li key={gig.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/60 p-3">
              <p className="font-medium text-[var(--txt)]">{gig.title}</p>
              <p>
                {gig.date} | {gig.location}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact" pathLabel="/contact">
        <p>{site.contact.note}</p>
        <p className="mt-2 text-[var(--txt)]">{site.contact.email}</p>
        <p>{site.contact.phone}</p>
      </Section>

      <Footer />
    </Shell>
  );
}
