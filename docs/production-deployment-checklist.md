# Production deployment checklist

Date: 2026-02-20

## Requested actions

1. Merge `codex/fix-routing-and-not_found-behavior` into `main`.
2. Ensure `main` is configured as Vercel Production Branch.
3. Confirm `jona-mystic.vercel.app` is assigned to Production.
4. Validate that `/` returns HTTP 200.

## What was completed in this environment

- `main` branch was created locally from `work` at commit `c032dfe`, which already contains merge commit `Merge pull request #15 from Dj-Shortcut/codex/fix-routing-and-not_found-behavior`.
- Local production build and runtime checks were executed successfully.
- Local HTTP validation for `/` returned status code `200`.

## Blockers for remote checks

This container cannot reach GitHub or Vercel APIs due outbound proxy restrictions (HTTP CONNECT tunnel returns `403`).
Because of that, remote operations (updating Vercel project Production Branch and verifying production domain assignment) could not be performed directly from this environment.

## Commands run

```bash
git checkout -B main work
git log --oneline -n 3
npm run build
npm run start
curl -sS -o /tmp/jona-home.html -w '%{http_code}\n' http://127.0.0.1:3000/
```
