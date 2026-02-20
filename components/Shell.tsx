import { BootLog } from "./BootLog";
import { ChipRow } from "./ChipRow";
import { CommandBar } from "./CommandBar";
import { Footer } from "./Footer";
import { Section } from "./Section";
import { TerminalHeader } from "./TerminalHeader";

export type ShellProps = {
  hostname: string;
  status: string;
  time: string;
  intro: string;
  bootLines: string[];
  command: { prompt: string; value: string };
  sections: Array<{
    title: string;
    description?: string;
    rows: Array<{ label: string; chips: string[] }>;
  }>;
  footer: {
    message: string;
    links: Array<{ href: string; label: string }>;
  };
};

export function Shell({
  hostname,
  status,
  time,
  intro,
  bootLines,
  command,
  sections,
  footer,
}: ShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030806] px-4 py-8 text-emerald-100 sm:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(16,185,129,0.12) 4px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl rounded-xl border border-emerald-400/30 bg-black/70 shadow-[0_0_70px_rgba(16,185,129,0.15)] backdrop-blur">
        <TerminalHeader hostname={hostname} status={status} time={time} />

        <div className="space-y-8 p-6">
          <p className="max-w-2xl text-sm text-emerald-100/80">{intro}</p>

          <BootLog lines={bootLines} />
          <CommandBar prompt={command.prompt} command={command.value} />

          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <Section key={section.title} title={section.title} description={section.description}>
                <div className="space-y-4">
                  {section.rows.map((row) => (
                    <ChipRow key={`${section.title}-${row.label}`} label={row.label} chips={row.chips} />
                  ))}
                </div>
              </Section>
            ))}
          </div>

          <Footer message={footer.message} links={footer.links} />
        </div>
      </div>
    </main>
  );
}
