import { MOTION_DURATIONS } from '@/lib/motion';

export const BOOT_LOG_LINES = [
  '[SYS] INITIALIZING AUDIO GRAPH...',
  '[OK] LOADING VISUAL MODULES...',
  '[OK] SYNCING BPM CLOCK...',
  '[OK] ROUTING OUTPUT -> MAIN',
  '[OK] READY',
] as const;

export function getBootLogDelay(line: string) {
  if (line.includes('READY')) {
    return MOTION_DURATIONS.long;
  }

  return MOTION_DURATIONS.medium;
}

export function getBootLogTotalDuration(lines = BOOT_LOG_LINES) {
  return lines.reduce((total, line) => total + getBootLogDelay(line), 0);
}
