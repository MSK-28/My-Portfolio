<!-- Copilot instructions for contributors and AI coding agents -->
# Project summary

This is an Ionic + React single-page application scaffolded with Vite (see `vite.config.ts`). The app entry is `src/main.tsx` and routing/tabs live in `src/App.tsx`. UI pages are colocated under `src/pages/` (each page has a `.tsx` + `.css` pair). Reusable UI pieces live in `src/components/`.

# What to know up front
- Framework: Ionic React (v8) + React 19 + Vite. See `ionic.config.json` and `package.json` for versions and integrations.
- Native target: Capacitor is included (`capacitor.config.ts`, `@capacitor/*` deps) — changes affecting native behavior should be validated with the Capacitor workflow.
- Tests: Unit tests use Vitest with setup in `src/setupTests.ts`. E2E tests use Cypress under `cypress/` (see `cypress/e2e/test.cy.ts`).

# Important files (quick lookup)
- `src/main.tsx` — app bootstrap and Ionic provider setup
- `src/App.tsx` — routes and tab layout
- `src/pages/` — page implementations (e.g., `Tab1.tsx`, `Tab2.tsx`, `Tab3.tsx`) with local CSS files
- `src/components/` — small reusable components (e.g., `ExploreContainer.tsx`)
- `vite.config.ts` — build/dev/test config (Vitest settings reference `src/setupTests.ts`)
- `package.json` — scripts and noteworthy dependencies
- `ionic.config.json`, `capacitor.config.ts` — native integration
- `public/manifest.json` — web app manifest and static assets

# Build / dev / test commands (exact)
- Install deps: `npm install`
- Dev server: `npm run dev` (runs `vite`)
- Build: `npm run build` (runs `tsc && vite build`)
- Preview build: `npm run preview` (runs `vite preview`)
- Unit tests: `npm run test.unit` (runs `vitest`) — setup file: `src/setupTests.ts`
- E2E tests: `npm run test.e2e` (runs `cypress run`) — interactive: `npx cypress open`
- Lint: `npm run lint` (runs `eslint`)

# Coding conventions & patterns (project-specific)
- TypeScript + ES modules. Keep new source under `src/` and follow existing file layout.
- Colocate styles: pages and small components use a sibling `.css` file (e.g., `src/pages/Tab1.css`). Continue this pattern for readability.
- Routing: add new pages and register routes in `src/App.tsx` (tabs follow the existing Ionic/React Router pattern).
- State: there is no global store in the scaffold — prefer local component state or lift state up to parent components. If adding global state, document the reason and add a small, focused context provider under `src/`.

# Testing & CI hints
- Unit tests use DOM environment (Vitest + jsdom). Use `src/setupTests.ts` for shared mocks and polyfills.
- E2E tests live in `cypress/e2e/`. Reuse fixtures in `cypress/fixtures/` when available.
- Before opening PRs: run `npm run lint` and `npm run test.unit` locally; if you touch E2E flows run `npm run test.e2e` or `npx cypress open` for interactive debugging.

# Integration points to watch
- Capacitor plugins and config (`@capacitor/*`, `capacitor.config.ts`) — modifying native plugins or app lifecycle requires native testing on device/emulator.
- Any environment variables or secrets for external APIs would be wired by Vite config or additional env files — none are present by default; search in `vite.config.ts` and `package.json` scripts if needed.

# How to add a new page (example)
1. Create `src/pages/YourPage.tsx` and `src/pages/YourPage.css` following the existing pages.
2. Add an import and route in `src/App.tsx` (follow `Tab1/Tab2` examples).
3. Run `npm run dev` and verify in the browser; add unit tests under `src/` or component tests using Vitest.

# Merge note
No existing `.github/copilot-instructions.md` was found during this scan. If you have an existing internal AGENT.md, merge its essential guidance here and keep this file concise.

# Feedback
If any workflow or integration is missing from this file (native scripts, CI steps, or additional repos), please tell me what to add or correct.
