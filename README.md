# Jona Mystic

## Build check (zonder secrets)

```bash
npm install
npm run build
```

Deze app gebruikt geen verplichte environment secrets voor de build.

## Vercel-compatibiliteit

De app gebruikt de standaard Next.js output (`next build`) zonder `output: 'export'` of custom server, en is daardoor direct compatibel met Vercel.

## Korte deploy instructie (Vercel)

1. Push deze repository naar GitHub/GitLab/Bitbucket.
2. Importeer het project in Vercel.
3. Build Command: `npm run build` (standaard).
4. Output-instelling: Next.js (standaard auto-detectie).
5. Klik op **Deploy**.
