# PKHosting VPS Hosting

A self-contained, responsive pricing page assessment for an invented VPS product line. It uses plain HTML, CSS and JavaScript with no external requests, fonts, images, analytics or APIs.

## Open and test

Open [index.html](./index.html) directly in Chrome or Firefox, or run `npm install` then `npm run dev` for a local Vite preview. I tested the layout at 360px, 768px and 1440px widths and checked the production build with `npm run build`.

The page works without JavaScript: monthly PKR plan prices, the complete comparison table and FAQ content are present in the HTML. JavaScript adds annual pricing, hard-coded currency conversion (1 USD = 278.50 PKR, 1 GBP = 355.00 PKR), `localStorage` persistence and live announcements.

## Decisions and trade-offs

- Annual billing is 10 months for 12. The script calculates the effective monthly price, annual total and savings from the monthly PKR source values.
- `localStorage` remembers period and currency on the same origin. If storage is unavailable, the page still falls back to monthly PKR.
- The footer keeps four practical Pakistani payment choices: bank transfer, cards, JazzCash and EasyPaisa. I dropped the less broadly useful options from PKHosting's eight-item list (such as cheque, cash deposit, PayPal and international transfer) to keep this invented checkout focused; a real checkout would validate availability and settlement fees first.
- The comparison table scrolls inside its own container on narrow screens so the page itself never gains horizontal overflow.

## Accessibility and performance

Semantic landmarks, labelled controls, keyboard-visible focus, native `details` FAQ disclosure, table headers, colour contrast and an `aria-live` price announcement are included. There are no third-party requests and the source is comfortably under 300 KB.

## Screenshots and audit

The review screenshots are captured at 360px, 768px and 1440px widths during review. A lightweight Lighthouse-style checklist is committed in [lighthouse-report.json](./lighthouse-report.json); run Lighthouse in Chrome for a browser-generated report when desired.

## Unfinished / assessment scope

Checkout, authentication, real provisioning, tax calculation, payment processing, monitoring and production content are intentionally not implemented. All plan names and prices are invented for this assessment.

I used an AI assistant to help implement and validate the page, then reviewed the resulting HTML, CSS and JavaScript.
