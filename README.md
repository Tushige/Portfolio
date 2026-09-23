# Tushig's portfolio

A Next.js portfolio balancing frontend engineering and creative exploration.

## Run locally

Install the dependencies with pnpm, then run `pnpm dev`.

For a production preview, stop the development server before running `pnpm build`, then run `pnpm start`. Next.js development and production builds share the `.next` directory, so do not run a build while the development server is compiling.

To run an isolated production preview alongside development, set `PORTFOLIO_DIST_DIR=.next-preview` for both the build and start processes and choose a free port (for example `pnpm start --port 3002`).

## Pages

- `/`: selected projects, experience, toolkit and contact.
- `/playground`: the original interactive 3D planet, with pause/resume and a reduced-motion poster.
- `/about`: redirects to the experience section on the portfolio.
- `/projects`: preserves the existing 3D gallery.

## Content and design

Professional history lives in `src/data/work-experience.js`. Portfolio content and presentation live in `app/ui/Portfolio.jsx` and `Portfolio.module.css`; the interactive preview is isolated in `ProjectSwitcher.jsx`. Project screenshot sources are recorded in `public/projects/README.md`.

`PRODUCT.md` records product facts and open questions. `DESIGN.md` documents the visual system. No current availability, email address or unverified professional metrics are invented.
