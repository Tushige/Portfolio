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

## Layout

The portfolio shares a centered container capped at 1280px with a total horizontal inset of 112px. The hero uses two columns in a 1:1.1 ratio; projects alternate 1.5:1 and 1:1.5 compositions. About and toolkit share 0.85:1.15 columns. Wide gaps and 76–100px section padding create the primary rhythm; fine detail uses 5–30px intervals rather than a rigid universal spacing grid.

At 1100px and below, the total container inset becomes 64px, the hero gap reduces to 30px and its heading becomes 48px. At 800px and below, the total inset becomes 40px, content grids stack, reverse project ordering resets to image-first, and the hero heading uses `clamp(40px, 8.8vw, 64px)`. The header wraps, its optional contact shortcut hides, and footer links wrap. Project text is limited to 58ch; the preview is capped at 620px. At 380px and below, navigation gaps, switcher padding, captions and disclosure dates become more compact. The standalone playground stacks its bottom controls at 500px and below.

Route organization is intentional: `/` hosts the complete portfolio, `/about` redirects to `/#about`, `/playground` hosts the interactive planet, and `/projects` preserves the existing 3D gallery. Only `/playground` and `/projects` mount the shared canvas and immersive route header. Their scene dependencies are dynamically loaded; portfolio navigation into the playground disables prefetch.

## Elevation & Depth

The page is mostly flat: tonal surfaces and thin rules separate content. Diffuse shadows sit under media, with a small static rotation on the hero preview. No general card-shadow scale is established.

### Shadow Vocabulary
- **Preview lift** (`0 24px 50px -28px #62438d66`): the tilted hero media frame.
- **Screenshot lift** (`0 14px 30px -16px #24173466`): screenshots inside project frames.

**The Media Depth Rule.** Shadows belong to media; the reading layout relies on space, color and rules.

## Shapes

Controls use the control radius, embedded project images use the image radius, project frames use the project radius, and larger feature containers use the feature radius. Preview images have a local 10px radius. The two-option switcher uses pill geometry; its circular caption link is 42px square. The planet preview is a circular crop with a 1:1 aspect ratio, capped at 360px on wide layouts and 260px on narrow layouts.

Project media preserves its proportions. The hero preview uses a 16:9 aspect ratio and a static two-degree counterclockwise tilt, reduced to one degree on narrow layouts. These are media treatments, not blanket transforms for all containers.

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
