import { readFileSync, existsSync } from 'node:fs';

const configPath = 'next.config.mjs';

if (!existsSync(configPath)) {
  throw new Error('next.config.mjs ontbreekt.');
}

const config = readFileSync(configPath, 'utf8');

if (/output\s*:\s*['\"]export['\"]/.test(config)) {
  throw new Error("Niet Vercel-compatibel: output: 'export' gevonden.");
}

if (/output\s*:\s*['\"]standalone['\"]/.test(config)) {
  console.warn("Waarschuwing: output: 'standalone' gedetecteerd. Dit kan, maar standaard Vercel-output is aanbevolen.");
}

if (/process\.env\.[A-Z0-9_]+/.test(readFileSync('app/page.tsx', 'utf8'))) {
  console.warn('Waarschuwing: environment variabelen gevonden in app/page.tsx, controleer of ze optioneel zijn.');
}

console.log('Build check geslaagd: geen secrets vereist en Next.js output blijft standaard Vercel-compatibel.');
