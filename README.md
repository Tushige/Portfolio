# Tushig's portfolio

A Next.js portfolio balancing frontend engineering and creative exploration.

## Run locally

Install the dependencies with pnpm, then run `pnpm dev`.

For a production preview, stop the development server before running `pnpm build`, then run `pnpm start`. Next.js development and production builds share the `.next` directory, so do not run a build while the development server is compiling.

To run an isolated production preview alongside development, set `PORTFOLIO_DIST_DIR=.next-preview` for both the build and start processes and choose a free port (for example `pnpm start --port 3002`).

## Pages

- `/`: selected projects, experience, toolkit and contact.
- `/variations/studio`: oversized typography and cinematic project imagery.
- `/variations/index`: a compact project browser with selectable previews.
- `/variations/playroom`: an interactive, layered project gallery.
- `/variations`: redirects to Studio.
- `/playground`: the original interactive 3D planet, with pause/resume and a reduced-motion poster.
- `/about`: redirects to the experience section on the portfolio.
- `/projects`: preserves the existing 3D gallery.

## Content and design

Professional history lives in `src/data/work-experience.js`. Portfolio content and presentation live in `app/ui/Portfolio.jsx` and `Portfolio.module.css`; the interactive preview is isolated in `ProjectSwitcher.jsx`. Project screenshot sources are recorded in `public/projects/README.md`.

`PRODUCT.md` records product facts and open questions. `DESIGN.md` documents the visual system. No current availability, email address or unverified professional metrics are invented.

The comparison bar links the original and all three variations. Each supports System, Light and Dark appearance; the choice persists across routes and reloads. First visits follow the operating system. Variant layouts share verified project content in `app/variations/data.js` and professional history above. Interactive selection is isolated in small client components, while page composition remains server-rendered. The 3D scene loads only on its dedicated routes.

Animations are triggered by interaction, with reduced-motion alternatives. The variations use existing dependencies and real project screenshots, rather than loading the 3D scene into every portfolio page.
