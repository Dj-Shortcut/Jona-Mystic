import { ReactNode } from 'react';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <main className="scanlines relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl space-y-5">{children}</div>
    </main>
  );
}
