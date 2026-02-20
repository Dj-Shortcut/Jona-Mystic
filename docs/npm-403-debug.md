# npm 403 debug log

Date: 2026-02-20  
Repo: `Jona-Mystic`  
Goal: diagnose npm `403 Forbidden` on npm registry and unblock dependency upgrades.

## Environment notes
- Requested runbook is Windows PowerShell; this execution environment is Linux CI/container.
- Equivalent npm/curl diagnostics were run with the same npm endpoints/config keys.

## A1) Collected diagnostics

### 1) `npm --version`
```bash
11.4.2
```

### 2) `node --version`
```bash
v22.21.1
```

### 3) `npm config get registry`
```bash
https://registry.npmjs.org/
```

### 4) `npm config get proxy`
```bash
null
```

### 5) `npm config get https-proxy`
```bash
http://proxy:8080
```

### 6) `npm config get always-auth`
```bash
undefined
```

### 7) `npm config list -l | (registry/auth/token/proxy)`
```bash
_auth = (protected)
; https-proxy = null ; overridden by env
noproxy = [""]
omit-lockfile-registry-resolved = false
proxy = null
registry = "https://registry.npmjs.org/"
replace-registry-host = "npmjs"
http-proxy = "http://proxy:8080"
https-proxy = "http://proxy:8080"
```

### 8) `curl -I https://registry.npmjs.org/next`
```bash
HTTP/1.1 403 Forbidden
...
curl: (56) CONNECT tunnel failed, response 403
```

Interpretation: `curl` also returns `403`, so this is **network/proxy policy**, not only npm package/auth config.

## A2) `.npmrc` audit

### Project `.npmrc`
```bash
(not found)
```

### User `.npmrc`
```bash
(not found)
```

Result: no local `.npmrc` override causing bad registry/auth.

## A3) Fix attempts executed

Executed:
```bash
npm config set registry https://registry.npmjs.org/
npm config set always-auth false
npm config delete //registry.npmjs.org/:_authToken
npm logout --registry=https://registry.npmjs.org/
npm cache clean --force
npm config delete proxy
npm config delete https-proxy
```

Observed:
- `npm config set always-auth false` failed on npm 11 (`always-auth` not a valid npm option).
- `https-proxy` remains injected from environment variables (`... overridden by env`).

## A4) Verify after fixes

### `npm ping`
```bash
npm notice PING https://registry.npmjs.org/
npm ERR! code E403
npm ERR! 403 Forbidden - GET https://registry.npmjs.org/-/ping
```

### `npm view next version`
Not executed after failed `npm ping` in this run because registry access is already blocked by `E403`.

## Root cause
The npm traffic is forced through a proxy (`http://proxy:8080`) via environment variables (`HTTP_PROXY`, `HTTPS_PROXY`, `npm_config_https_proxy`, etc.). The proxy returns `403` for npm registry CONNECT requests.

## Exact change that would be required to unblock
No repository change fixes this. The required fix is in network/proxy policy:

1. Allow/whitelist `registry.npmjs.org:443` (and ideally `*.npmjs.org`) on the corporate proxy/firewall, or
2. Use a network without this proxy policy (e.g., hotspot), or
3. Configure the proxy to allow npm registry tunneling for this user/host.

After proxy policy is fixed, rerun:
```bash
npm ping
npm view next version
npm install next@latest react@latest react-dom@latest
```

## Why Phase B was not executed
Per task instruction: if Phase A fails because `curl` returns `403`, stop after Phase A and report required network action. This run stopped here.
