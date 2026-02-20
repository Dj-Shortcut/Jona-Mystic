import { ReactNode } from 'react';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <main className="shell scanlines relative min-h-screen overflow-hidden px-space-16 py-space-24 sm:px-space-24 sm:py-space-32">
      <div className="vignette pointer-events-none" aria-hidden />
      <div className="crt-glow pointer-events-none" aria-hidden />
      <div className="terminal-frame mx-auto w-full max-w-5xl space-y-space-16 p-space-16 sm:p-space-24">{children}</div>
    </main>
  );
}
