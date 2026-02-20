import { BootLog } from '@/components/BootLog';
import { CommandBar } from '@/components/CommandBar';
import { Footer } from '@/components/Footer';
import { GigsList } from '@/components/GigsList';
import { MixesList } from '@/components/MixesList';
import { Section } from '@/components/Section';
import { Shell } from '@/components/Shell';
import { StatusBar } from '@/components/StatusBar';
import { TerminalHeader } from '@/components/TerminalHeader';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <Shell>
      <StatusBar />
      <TerminalHeader />
      <BootLog />
      <CommandBar />

      <div className="panel p-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)] sm:p-5">
        <div className="flex flex-wrap gap-2.5">
          <span className="chip">BPM: {site.bpmRange}</span>
          <span className="chip">GENRE: {site.genre}</span>
          <span className="chip">REGION: {site.region}</span>
        </div>
      </div>

      <Section id="mixes" title="> MIXES" pathLabel="/usr/mixes">
        <MixesList />
      </Section>

      <Section id="gigs" title="> GIGS" pathLabel="/usr/gigs">
        <GigsList />
      </Section>

      <Section id="contact" title="> CONTACT" pathLabel="/usr/contact">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-soft)] p-3">
          <p className="font-medium text-[var(--txt)]">/contact/booking</p>
          <p className="mt-2 text-[var(--green)]">ERR: CONTACT_NOT_CONFIGURED</p>
          <p className="mt-2">Voeg later toe…</p>
        </div>
      </Section>

      <Footer />
    </Shell>
  );
}
