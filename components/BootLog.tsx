import { useEffect, useState } from "react";

const lines = [
  "[    0.000000] Mystic kernel initializing...",
  "[    0.114723] Loading encrypted memory map",
  "[    0.231995] Verifying entropy sources",
  "[    0.348271] Mounting /dev/arcane",
  "[    0.466802] Starting daemon: spectrald",
  "[    0.589114] Network interface myst0: link up",
  "[    0.708529] Synchronizing astral clock",
  "[    0.826001] Boot sequence complete",
];

export default function BootLog() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setVisibleCount(lines.length);
      return;
    }

    const intervalId = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= lines.length) {
          window.clearInterval(intervalId);
          return current;
        }

        return current + 1;
      });
    }, 180);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div aria-live="polite" aria-atomic="true">
      {lines.slice(0, visibleCount).map((line, index) => (
        <div key={`${index}-${line}`}>{line}</div>
      ))}
    </div>
  );
}
