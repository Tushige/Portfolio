# Portfolio design variations

Visitor mode: Experience. Three separate, working routes compare distinct compositions using the same verified project and experience content. All balance professional work with creative exploration, per the user's explicit preference. The original remains at `/`.

- `/variations/studio`: image-led studio, Manrope, generous scale, porcelain and plum. Cinematic Arcane lead, alternating engineering feature, circular playground image. Visual variance 7, motion 3, density 3.
- `/variations/index`: compact project browser, Inter with Manrope headings, blue ink and cool gray. Persistent selection list with adjacent preview and engineering context. Visual variance 5, motion 4, density 6.
- `/variations/playroom`: expressive gallery, Space Grotesk, lilac with lime and apricot accents. A selectable, fanned project deck connects product work to creative exploration. Visual variance 8, motion 6, density 3.

Motion thesis: exploring the same real work should feel like changing the lens. Studio lets project imagery respond quietly to inspection; Index replaces the selected preview with a short horizontal transition; Playroom rearranges the project deck to explain selection. Theme and navigation respond immediately. No autonomous animation, scroll capture, cursor effects or hidden essential controls. Transform and opacity transitions only for spatial changes, 180–500ms, disabled for reduced motion. Touch and keyboard have explicit controls for every selection.

Themes: each direction has authored light and dark tokens. A shared System / Light / Dark control persists across comparison routes. The original receives a dark palette too. System is the first-visit default, and an early head script applies the saved theme before paint.

Facts, assets and links come from the original redesigned portfolio and `src/data/work-experience.js`. No invented clients, dates, availability, metrics or contact details. No new UI dependencies; client state limited to appearance and project selection.

## Direction contract

THESIS: Give professional engineering and creative exploration equal legitimacy through three distinct working portfolio compositions, as explicitly requested. Keep the existing page as a fourth comparison.

OWN-WORLD: Studio uses porcelain/plum with large Manrope and uninterrupted imagery; Index uses cool gray/blue with compact Manrope/Inter and a persistent work list; Playroom uses lilac, lime and apricot with Space Grotesk and a movable project folio. Each has dark tokens rather than a filter over light colors.

STORY: Understand the developer's focus, explore real projects, inspect supporting professional experience, then connect on LinkedIn or enter the existing 3D playground.

FIRST VIEWPORT: Studio's large two-line left-aligned headline leads into a wide Arcane image. Index pairs a concise headline and biography above a project list and adjacent preview. Playroom centers an oversized headline over three overlapping project cards. Comparison and appearance controls stay at the document top on every version.

FORM: Three direct code variations of the established portfolio, per the user's request to build separate routes for comparison. No catalog lottery, single-direction selection, approved generated comp or fabricated seed key is asserted. The existing verified project screenshots are the visual source material.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
