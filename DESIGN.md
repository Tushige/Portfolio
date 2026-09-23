---
name: Tushig Portfolio
description: Professional frontend engineering and creative exploration in a soft violet visual world.
colors:
  paper: "#fcfaff"
  tint: "#f0e9fa"
  ink: "#241734"
  muted: "#6f637a"
  accent: "#7040c8"
  accent-hover: "#5930a6"
  line: "#ded5e8"
  white: "#fff"
  project-mat: "#e8ddf8"
  studio-light-bg: "#faf9fc"
  studio-light-ink: "#25202d"
  studio-light-muted: "#696170"
  studio-light-accent: "#7146ae"
  studio-light-line: "#dcd7e2"
  studio-light-panel: "#eee8f4"
  studio-light-button: "#292132"
  studio-light-on-button: "#faf7ff"
  studio-dark-bg: "#17131d"
  studio-dark-ink: "#f0ebf5"
  studio-dark-muted: "#b5aabc"
  studio-dark-accent: "#bc9ae7"
  studio-dark-line: "#3d3347"
  studio-dark-panel: "#30243e"
  studio-dark-button: "#c4a0ec"
  studio-dark-on-button: "#241330"
  index-light-bg: "#f7f8fa"
  index-light-ink: "#202c3c"
  index-light-muted: "#5f6c7c"
  index-light-accent: "#2855c0"
  index-light-line: "#d3dbe5"
  index-light-panel: "#e8edf3"
  index-light-button: "#274db0"
  index-light-on-button: "#fff"
  index-dark-bg: "#121b27"
  index-dark-ink: "#e4edf6"
  index-dark-muted: "#a6b6c9"
  index-dark-accent: "#9bbcff"
  index-dark-line: "#344254"
  index-dark-panel: "#202e40"
  index-dark-button: "#9bbcff"
  index-dark-on-button: "#152444"
  playroom-light-bg: "#f1e9fa"
  playroom-light-ink: "#302044"
  playroom-light-muted: "#655271"
  playroom-light-accent: "#7b40b2"
  playroom-light-line: "#d3c1e2"
  playroom-light-panel: "#e4d5f2"
  playroom-light-button: "#39214c"
  playroom-light-on-button: "#faf6ff"
  playroom-dark-bg: "#201629"
  playroom-dark-ink: "#f3eafa"
  playroom-dark-muted: "#bdaccb"
  playroom-dark-accent: "#c69ae8"
  playroom-dark-line: "#51405e"
  playroom-dark-panel: "#302139"
  playroom-dark-button: "#d9baee"
  playroom-dark-on-button: "#32203e"
  original-dark-paper: "#17121f"
  original-dark-tint: "#292033"
  original-dark-ink: "#f4eefb"
  original-dark-muted: "#bcb0ca"
  original-dark-accent: "#ba91fc"
  original-dark-line: "#44364f"
  original-dark-white: "#211a2b"
  original-dark-project-mat: "#342642"
  original-dark-caption: "#cfc0df"
  original-dark-on-button: "#21122f"
  original-dark-accent-hover: "#cbaafa"
  dark-focus: "#c4a0ff"
  playroom-lime: "#dcecc2"
  playroom-lime-ink: "#233222"
  playroom-lilac: "#e0c3f5"
  playroom-lilac-ink: "#372348"
  playroom-apricot: "#f5c6aa"
  playroom-apricot-ink: "#4d2c24"
  playroom-dark-lime: "#c3d8a7"
  playroom-dark-lilac: "#c4a2dc"
  playroom-dark-apricot: "#dfb090"
  controls-light-bg: "#eeeaf3"
  controls-light-ink: "#33293e"
  controls-light-line: "#d8d0e0"
  controls-light-muted: "#6b6077"
  controls-light-hover: "#ded6e8"
  controls-dark-control-bg: "#211d29"
  controls-dark-control-ink: "#eae4f1"
  controls-dark-control-muted: "#b8acc6"
  controls-dark-control-line: "#3c3348"
  controls-dark-control-hover: "#3b3148"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 4.7vw, 68px)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(30px, 3.3vw, 44px)"
    fontWeight: 650
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  action:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 600
  studio-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(50px, 7.1vw, 96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  index-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 4.5vw, 62px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  playroom-display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(55px, 7.6vw, 100px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
rounded:
  image: "8px"
  control: "12px"
  project: "16px"
  feature: "20px"
  pill: "999px"
spacing:
  detail: "5px"
  small: "12px"
  copy: "18px"
  group: "22px"
  action: "30px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "10px 0"
  text-link-hover:
    textColor: "{colors.accent}"
  preview-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 17px"
  preview-option-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  project-container:
    backgroundColor: "{colors.project-mat}"
    rounded: "{rounded.project}"
    padding: "32px 26px 22px"
---

# Design System: Tushig Portfolio

## Overview

**Creative North Star: "Engineering and exploration in violet"**

This system extends the portfolio's purple identity with pale surfaces, dark plum text and expressive Manrope headings. Real project imagery supplies the visual detail; the surrounding interface stays spacious, readable and direct.

Soft corners, restrained shadows and short state changes give the work a tactile frame. Professional evidence and creative exploration share the same typography and controls. The full-screen 3D routes retain their immersive setting rather than copying the portfolio's page composition.

**Key Characteristics:**
- Porcelain surfaces with violet actions and plum text.
- Manrope headings paired with Inter reading and control text.
- Real project media in gently rounded frames.
- Native links, buttons and disclosures with visible keyboard focus.
- Motion that can be reduced or explicitly paused.

This record is extracted from `app/ui/Portfolio.module.css`, `Portfolio.jsx`, `ProjectSwitcher.jsx`, `Home.module.css`, `Home.jsx`, `app/global.css`, `app/layout.jsx` and the route layout. The surface direction remains in `.impeccable/surfaces/portfolio.md`; this document records the built system.

### Comparison worlds

The original system remains the default reference for /. Three comparison worlds at /variations/studio, /variations/index and /variations/playroom give professional engineering and creative exploration equal weight. Their scoped additions below describe built code; original rules apply to the original route unless a variation explicitly overrides them. Existing verified project captures and their provenance are reused. No generated comparison artwork or catalog seed is asserted.

## Colors

The palette moves from warm, near-white porcelain through pale lilac to dark plum, with saturated violet reserved for emphasis and actions.

### Primary
- **Violet** (`accent`): primary actions, the emphasized display line, link hover, identity punctuation and global focus outlines.
- **Deep violet** (`accent-hover`): primary action hover state.

### Neutral
- **Porcelain** (`paper`): page canvas and light control surfaces.
- **Pale lilac** (`tint`): the playground invitation and unselected switcher hover.
- **Plum ink** (`ink`): headings, principal text and selected preview options.
- **Muted plum** (`muted`): supporting copy, roles, dates and inactive options.
- **Lilac line** (`line`): quiet section rules, disclosures and outlined controls.
- **White** (`white`): text on violet buttons.
- **Project lilac** (`project-mat`): the shared frame behind both project screenshots.

The preview frame also uses a local lavender fill (`#e8daf8`) and darker caption text (`#574166`); these are specific to that composition, not a second general surface scale. Selection uses `#decaf9`. The playground's full-screen radial gradient remains route-specific: `#c0a0c9`, `#8a1b99`, `#300933`, `#0b0f11`.

**The Shared Frame Rule.** Both project categories use the same lilac frame; the work itself supplies their visual difference.

### Scoped light and dark palettes

Frontmatter names follow <world>-<mode>-<role>. Studio uses porcelain and plum; Index uses cool gray and blue; Playroom uses lilac with lime and apricot project cards. For every comparison world, bg, ink, muted, accent, line, panel, button and on-button map to the same local CSS roles. Dark mode replaces these authored values through the document data-theme attribute; it does not filter imagery.

Original dark mode uses original-dark-* tokens for its canvas, text, panels, caption and action states. The existing white role becomes a dark foreground, with a specific on-button override for primary actions. Global dark keyboard focus uses dark-focus. The shared comparison bar has its own controls-light-* and controls-dark-control-* palette, independent of each route canvas.

Playroom card fills use the named lime, lilac and apricot tokens, with separate dark fills and persistent dark card text. This variation deliberately gives each project its own card color; the original Shared Frame Rule remains scoped to the original route.

## Typography

**Display Font:** Manrope, with sans-serif fallback. **Body Font:** Inter, with sans-serif fallback. Both are loaded through `next/font/google`, expose CSS variables and use swap display.

### Hierarchy
- **Display:** the largest heading role, with tight tracking and a violet emphasis line. Its desktop size is fluid; responsive overrides are recorded below.
- **Headline:** section headings with compact leading. Toolkit headings use a local 30px size, the playground invitation uses 38px, and contact uses `clamp(34px, 4vw, 52px)`.
- **Title:** project names. Preview titles use a smaller local 19px/750 treatment.
- **Body:** descriptive reading text. Intro copy is 16px; section introductions and playground copy are 14px; project and about copy use the 15px body role. Paragraphs share 1.75 line height.
- **Action and label:** Inter controls retain mixed case. Experience titles use 14px/650; disclosure company names use 16px/650; secondary metadata ranges from 11px to 13px.

Reading width follows the content: intro copy is 45ch, section introduction 35ch, playground invitation 38ch and contact copy 48ch. There is no fixed-ratio type scale; the frontmatter records the actual repeated roles.

**The Two Voice Rule.** Manrope carries headings and identity; Inter carries reading text, metadata and controls.

### Comparison typography

Studio and Index retain Manrope headings with Inter reading and control text. Studio uses the large studio-display role; Index uses the tighter index-display role and compact project metadata. Playroom uses playroom-display and Space Grotesk for headings, identity and card titles; body and controls remain Inter. Space Grotesk is also loaded through next/font/google with swap display.

At 760px and below, Studio display uses clamp(44px, 8vw, 60px), Index uses clamp(38px, 7vw, 56px), and Playroom uses clamp(52px, 10vw, 76px). Reading copy remains 13–14px with 1.75 leading; shared section headings use clamp(30px, 3.8vw, 52px) before route-specific overrides.

## Layout

The portfolio shares a centered container capped at 1280px with a total horizontal inset of 112px. The hero uses two columns in a 1:1.1 ratio; projects alternate 1.5:1 and 1:1.5 compositions. About and toolkit share 0.85:1.15 columns. Wide gaps and 76–100px section padding create the primary rhythm; fine detail uses 5–30px intervals rather than a rigid universal spacing grid.

At 1100px and below, the total container inset becomes 64px, the hero gap reduces to 30px and its heading becomes 48px. At 800px and below, the total inset becomes 40px, content grids stack, reverse project ordering resets to image-first, and the hero heading uses `clamp(40px, 8.8vw, 64px)`. The header wraps, its optional contact shortcut hides, and footer links wrap. Project text is limited to 58ch; the preview is capped at 620px. At 380px and below, navigation gaps, switcher padding, captions and disclosure dates become more compact. The standalone playground stacks its bottom controls at 500px and below.

Route organization is intentional: `/` hosts the complete portfolio, `/about` redirects to `/#about`, `/playground` hosts the interactive planet, and `/projects` preserves the existing 3D gallery. Only `/playground` and `/projects` mount the shared canvas and immersive route header. Their scene dependencies are dynamically loaded; portfolio navigation into the playground disables prefetch.

### Comparison layouts

- **Studio:** a 1320px maximum container with 112px total inset, oversized left-aligned introduction, wide Arcane media, a 0.8:1.2 engineering feature and circular playground crop. The engineering feature uses an 80px gap and 112px vertical padding.
- **Index:** a 1280px maximum container with 96px total inset; a 1.35:0.65 introduction precedes a 0.7:1.3 project-list/preview grid with a 32px gap. Rules, compact labels and 64px supporting sections establish a denser rhythm.
- **Playroom:** the Studio container width, a centered introduction and overlapping project deck. Cards occupy 61% of the container and fan around a selected center; the supporting experience panel uses 54px horizontal and 64px vertical padding.

All comparison containers use 64px total inset at 1100px, 40px at 760px, and 32px at 380px. At 760px, grids stack and Playroom shows only the selected card at 94% width; named options and previous/next controls remain available. The comparison bar reduces its spacing at 750px and wraps its appearance control at 420px. These routes preserve the original project destinations and immersive playground.

## Elevation & Depth

The page is mostly flat: tonal surfaces and thin rules separate content. Diffuse shadows sit under media, with a small static rotation on the hero preview. No general card-shadow scale is established.

### Shadow Vocabulary
- **Preview lift** (`0 24px 50px -28px #62438d66`): the tilted hero media frame.
- **Screenshot lift** (`0 14px 30px -16px #24173466`): screenshots inside project frames.

**The Media Depth Rule.** Shadows belong to media; the reading layout relies on space, color and rules.

### Comparison depth

Studio and Index use tonal panels and rules. Playroom gives only its overlapping media cards a diffuse shadow (0 20px 40px -24px #24123266); stacking order communicates selection, and a focused card rises above the deck.

## Shapes

Controls use the control radius, embedded project images use the image radius, project frames use the project radius, and larger feature containers use the feature radius. Preview images have a local 10px radius. The two-option switcher uses pill geometry; its circular caption link is 42px square. The planet preview is a circular crop with a 1:1 aspect ratio, capped at 360px on wide layouts and 260px on narrow layouts.

Project media preserves its proportions. The hero preview uses a 16:9 aspect ratio and a static two-degree counterclockwise tilt, reduced to one degree on narrow layouts. These are media treatments, not blanket transforms for all containers.

### Comparison shapes

Studio media uses 16px outer corners, 8px screenshot corners and a circular playground crop. Index uses 12px preview and selection corners with 6px image corners. Playroom uses 16px cards, 8px image corners, a 20px experience panel and pill actions. Shared filled actions have a 52px minimum height and 16px by 22px padding; comparison navigation and appearance controls have a 40px minimum height.

## Components

### Buttons and text links

Primary and contact actions share violet fill, white text, the control radius and a 24px icon gap. Hover deepens the fill and raises the action by 2px over 0.2 seconds. Text links use a 9px icon gap and violet hover. Portfolio icons are Heroicons SVGs, generally 20px square with 1.7 stroke width; decorative SVGs are hidden from assistive technology.

Global keyboard focus is a 3px violet outline with 5px offset. The skip link appears on focus and leads to the main content. External destinations use `noopener noreferrer`; their link text or accessible labels explains the new tab behavior.

### Project preview switcher

Two native buttons form an explicitly named group. The selected button has ink fill, porcelain text and `aria-pressed`; both point to the same preview through `aria-controls`. Selection updates the real image, caption and in-page project destination. Caption changes use a polite live region. This is a button group, not an incomplete tab implementation, and it does not autoplay.

### Project containers

Both projects use the same lilac surface and rounded frame. Each screenshot links to the actual project destination and has descriptive alternative text. Image hover raises the screenshot by 4px over 0.35 seconds. Supporting copy is structured into project title, description and definition-list details.

### Experience disclosures

Native `details` and `summary` elements display company, role and date, with a thin bottom rule. Productive Edge is initially open. A violet SVG chevron rotates when open; detail text remains part of the native disclosure. There are no invented employment relationships for overlapping dates.

### Navigation and motion

Portfolio navigation is in normal document flow and links to work, about, the playground and contact. The page uses smooth anchor scrolling with 100px scroll padding; reduced motion changes scrolling to automatic. Reduced motion also removes portfolio animations and transitions and disables hover displacement. The image swap has a 0.3-second ease-out opacity/scale entrance only when reduced motion is not requested.

The playground shows a poster by default when reduced motion is requested and offers an explicit start action. Otherwise it offers pause/resume controls for scene rotation. Loading and scene-error messages use status semantics, with a poster on a reported scene-loading error. Dragging the 3D scene is a pointer interaction; these behaviors are implementation evidence, not a claim of comprehensive accessibility certification.

### Comparison navigation and appearance

Original, Studio, Index and Playroom are normal route links with aria-current. A labeled native select offers System, Light and Dark. System is the first-visit default, follows operating-system changes, and shares the portfolio-theme preference in local storage across comparison routes. The early head script resolves the saved preference before paint; storage failures fall back to the system preference on startup. The comparison bar appears only on the original and comparison routes.

### Interactive work selection

Index uses native project buttons with aria-pressed and aria-controls to replace the adjacent image, description and destination. Playroom offers clickable cards, named project options and previous/next buttons; selection rearranges the deck and updates its description and destination. Both announce changes through polite, atomic live regions. These are explicit button groups with no autoplay.

### Comparison motion

Studio image inspection uses 400–500ms transform transitions; actions use 180ms. Index preview selection enters over 260ms from 10px right and 0.65 opacity. Playroom card rearrangement uses 500ms. The media easing is cubic-bezier(0.16, 1, 0.3, 1); background state changes use 150ms. Reduced motion disables comparison-surface transitions and animations while preserving immediate selection and usable controls; decorative resting card poses remain. Global anchor scrolling becomes automatic. The shared comparison bar retains its short background-color state transition.

## Do's and Don'ts

### Do:
- **Do** preserve the shared lilac framing and let real project imagery carry the differences between projects.
- **Do** use Manrope for headings and Inter for reading text and controls.
- **Do** keep native navigation and disclosure semantics, descriptive accessible names and visible keyboard focus.
- **Do** respect reduced motion and keep an explicit motion control in the playground.
- **Do** keep professional claims tied to the supplied history and actual projects.

### Don't:
- **Don't** introduce an unrelated surface palette for each project category.
- **Don't** replace real project captures with invented interface mockups.
- **Don't** make animation a prerequisite for reading the portfolio.
- **Don't** treat route-specific scene styling as a general-purpose page theme.

Not canonized: the surface brief's proposed magnolia value is not used by the finished portfolio CSS. The retained `/projects` gallery is a legacy immersive route, not a documented source of new portfolio component tokens. No standards-conformance claim is inferred from the implemented accessibility features.

Comparison guardrail: keep each world's palette, type and composition scoped to its route, while sharing verified content, destination links and appearance preference. Existing asset provenance remains authoritative.
