import { ReactNode } from 'react';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <main className="shell scanlines relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      <div className="vignette pointer-events-none" aria-hidden />
      <div className="terminal-frame mx-auto w-full max-w-5xl space-y-5 p-4 sm:p-7">{children}</div>
    </main>
  );
}
