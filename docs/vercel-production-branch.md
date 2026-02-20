# Vercel production branch + domain alias checklist

Use this when Vercel shows a deployment as **Ready** but the production URL returns **404 NOT_FOUND**.

## 1) Ensure project root and framework are correct

In Vercel dashboard:

1. Open the `jona-mystic` project.
2. Go to **Settings → General**.
3. Verify:
   - **Framework Preset** = `Next.js`
   - **Root Directory** = repository root (`.`)
   - **Build Command** = `next build` (or `npm run build`)
   - **Output Directory** is empty/default (do not set `/dist` or `/build`)

## 2) Set production branch to `main`

1. In the same project, go to **Settings → Git**.
2. Under **Production Branch**, click **Edit**.
3. Select `main` and save.

## 3) Trigger a clean production deploy

1. Go to **Deployments**.
2. Find the latest deployment from branch `main`.
3. Open the menu (`⋯`) and choose **Redeploy**.
4. Enable **Use existing Build Cache** = off (redeploy without cache), then deploy.

## 4) Re-attach the production domain alias

1. Go to **Domains**.
2. Ensure `jona-mystic.vercel.app` appears under **Production Domains**.
3. If missing, add/reassign it to the latest production deployment.

## 5) Verify response

After deployment finishes:

```bash
curl -I https://jona-mystic.vercel.app/
```

Expected: `HTTP/2 200`.
