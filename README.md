# PKHosting VPS Hosting

A self-contained, responsive pricing page assessment for an invented VPS product line. It uses Vue 3 with JSX, local CSS and no external requests, fonts, images, analytics or APIs.

## Open and test

Install dependencies with `npm install`, then run `npm run dev` for the Vue JSX preview. For an offline production copy, run `npm run build` and open `dist/index.html`; Vite is configured with a relative base so the built folder works from `file://`. The source `index.html` contains the noscript fallback, but JSX requires the Vite build to render the full application.

The Vue page is split into data, composable pricing state, and focused JSX components under `src/components/`, composed by `src/App.jsx` and mounted by `src/main.jsx`. It adds annual pricing, hard-coded currency conversion (1 USD = 278.50 PKR, 1 GBP = 355.00 PKR), `localStorage` persistence and live announcements. CSS is organized under `src/css/`, with `main.css` as the local entry point. A small `<noscript>` fallback remains in `index.html`; the full comparison table is generated from Vue data when JavaScript is enabled.

## Version 1 structure

This is intentionally a small baseline for GitHub and future iterations. The folder-by-folder map and rules are in [docs/PROJECT-STRUCTURE.txt](./docs/PROJECT-STRUCTURE.txt). Visible sections are separate components, repeated cards use one component, and pricing data/state are isolated without adding a router, state library, or API layer.

## Decisions and trade-offs

- Annual billing is 10 months for 12. The script calculates the effective monthly price, annual total and savings from the monthly PKR source values.
- `localStorage` remembers period and currency on the same origin. If storage is unavailable, the page still falls back to monthly PKR.
- The footer keeps four practical Pakistani payment choices: bank transfer, cards, JazzCash and EasyPaisa. I dropped the less broadly useful options from PKHosting's eight-item list (such as cheque, cash deposit, PayPal and international transfer) to keep this invented checkout focused; a real checkout would validate availability and settlement fees first.
- The comparison table scrolls inside its own container on narrow screens so the page itself never gains horizontal overflow.

## Accessibility and performance

Semantic landmarks, labelled controls, keyboard-visible focus, native `details` FAQ disclosure, table headers, colour contrast and an `aria-live` price announcement are included. There are no third-party requests and the built output is comfortably under 300 KB.

## Screenshots and audit

The review screenshots were captured at 360px, 768px and 1440px widths during review. A lightweight Lighthouse-style checklist is committed in [lighthouse-report.json](./lighthouse-report.json); run Lighthouse in Chrome for a browser-generated report when desired. A detailed requirement-by-requirement status is in [docs/REQUIREMENTS-CHECK.txt](./docs/REQUIREMENTS-CHECK.txt).

## Unfinished / assessment scope

Checkout, authentication, real provisioning, tax calculation, payment processing, monitoring and production content are intentionally not implemented. All plan names and prices are invented for this assessment.

I used an AI assistant to help implement and validate the page, then reviewed the resulting HTML, CSS and JavaScript.
