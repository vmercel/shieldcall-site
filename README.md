# ShieldCall project website

Public research overview for ShieldCall: the problem, dual-stream approach, interactive scripted illustration, app screenshots, reproducible results, current limitations, roadmap, and ways to contribute.

## Run locally

No build step or dependencies are required. From this directory:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. The existing Vercel project serves `index.html` and `assets/` directly.

## Structure

- `index.html`: project content, benchmark sources, existing signup integrations, scenario and roadmap logic.
- `assets/site.css`: responsive visual system and layout.
- `assets/site.js`: navigation, reading progress, gallery, command copying, and keyboard tab behavior.
- `assets/app/`: screenshots rendered from the actual prototype, not deployment evidence.

## Content and integrations

Demo scores are scripted illustrations. Keep their disclaimer visible and separate from measured benchmark results. Reference the linked experimental protocol when updating numbers; EER is not fraud-prevention accuracy. Label planned work explicitly.

Beta requests and collaboration notes retain the existing Supabase insert integration and email fallback. Do not add service-role keys to browser code. The public TestFlight URL is deliberately empty until available; signup is an invitation request, not instant app access.

## Verification checklist

- Desktop, narrow mobile (390 px), and tablet layouts; mobile menu opens, closes on navigation, and supports Escape.
- Scenario tabs, play/pause/restart, offline fail-open illustration, and keyboard arrows.
- Roadmap panels and keyboard navigation; app gallery arrows; command copying; FAQ disclosure.
- Empty and invalid form fields show validation without a network submission.
- All internal anchors and local assets resolve; inline and external JavaScript pass `node --check`.
- For signup delivery testing, use an authorized test identity and inspect the real response. Never treat UI-only tests as proof of backend delivery.
