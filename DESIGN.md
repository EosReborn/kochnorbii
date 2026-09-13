---
name: Neo-Swiss Editorial
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004dea'
  primary: '#0041c8'
  on-primary: '#ffffff'
  primary-container: '#0055ff'
  on-primary-container: '#e3e6ff'
  inverse-primary: '#b6c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#972500'
  on-tertiary: '#ffffff'
  tertiary-container: '#c13301'
  on-tertiary-container: '#ffe1d9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b3'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872100'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the ethos of a high-caliber Creative Technologist: where rigorous International Typographic Style converges with modern algorithmic precision. The brand voice is authoritative, intellectual, uncompromising, and forward-looking. 

The aesthetic is grounded in high-contrast editorial minimalism—combining pristine off-white canvas surfaces, surgical hairline dividing structures, and intentional typographic rhythm. The emotional response is one of clarity, calculated elegance, and technological sophistication. Visual tension is deliberately cultivated between classic grid architecture and an electric cobalt blue focal point, signaling an agile mind bridging computational design, spatial software, and expressive digital craft.

## Colors

The palette leverages a sterile, clinical light mode architecture engineered for high-legibility typographic hierarchy and sharp surface separation.

- **Primary (`#0055ff`)**: Electric Cobalt. Used surgically for decisive interactive states, key focal points, active badges, and directional indicators. It must never overwhelm; it functions as an energetic pulse against a monotone environment.
- **Secondary (`#0f172a`)**: Deep Ink Slate. Serves as the primary content value for headlines, key interface copy, and primary action fills. It carries higher visual weight than standard neutral darks.
- **Tertiary (`#64748b`)**: Cool Technical Slate. Used for structural metadata, secondary labels, timestamps, line numbers, and caption details.
- **Neutral Surface Hierarchy**:
  - Base Canvas: `#f8fafc` (Slate 50) creates an atmospheric off-white field.
  - Surface Card / Raised Layer: `#ffffff` (Pure White) provides subtle contrast without shadows.
  - Hairline Borders / Grid Lines: `#e2e8f0` (Slate 200) provides precise 1px architectural definition.

## Typography

The typographic hierarchy pairs the idiosyncratic, geometric tension of **Bricolage Grotesque** with the utilitarian neutrality of **Inter**, reinforced by **JetBrains Mono** for indexing, technical tags, and specifications.

- **Display & Headlines**: Bricolage Grotesque features tight negative tracking and compact leading to echo classic Swiss poster typography and editorial grid layouts.
- **Body**: Inter provides neutral, highly legible reading text across dense project briefs and technical documentation.
- **Labels & Metatags**: JetBrains Mono enforces a programmatic, precision-engineered aesthetic for indices, coordinates, categories, and timestamps. All uppercase labels must carry letter spacing between `0.04em` and `0.08em`.

## Layout & Spacing

The layout is built on a 12-column modular fluid grid anchored by architectural hairline guides. The layout follows a structural cadence where whitespace is generous, deliberate, and structural rather than decorative.

- **Desktop (1200px+)**: 12 columns, `margin: 3rem`, `gutter: 1.5rem`. Outer containers employ explicit 1px slate borders (`#e2e8f0`) to visually communicate alignment axes.
- **Tablet (768px - 1199px)**: 8 columns, `margin: 2rem`, `gutter: 1.25rem`. Complex asymmetric columns collapse into 4/4 or full-width stacked configurations.
- **Mobile (< 768px)**: 4 columns, `margin: 1.25rem`, `gutter: 1rem`. Information density is maintained by nesting metadata in horizontal scrolling bands or structured vertical indexes.

Sections are separated by crisp 1px borders rather than arbitrary white gaps, instilling the tactile feel of an architect's blueprint or a physical publication.

## Elevation & Depth

This design system intentionally rejects diffuse ambient drop shadows and volumetric blurs in favor of architectural planar depth and low-contrast outlines.

- **Planar Stacking**: Hierarchy is created exclusively through background tone shift (`#f8fafc` base vs. `#ffffff` surfaces) framed with explicit 1px hairline strokes (`#e2e8f0`).
- **Active & Hover Elevation**: Interactive elements do not lift along the Z-axis via shadows. Instead, elevation is communicated through color inversion (e.g., `#0f172a` turning into `#0055ff`), outline shifts, or crisp, offset architectural drop lines (`1px 1px 0px #0f172a`).
- **Overlays & Dialogs**: Modal viewports utilize pure white surfaces with solid 1px `#0f172a` borders, accompanied by an ultra-light, non-blurred neutral backdrop overlay (`rgba(15, 23, 42, 0.25)`).

## Shapes

The design system employs a disciplined, structural geometry. Curvature is kept subtle (`roundedness: 1` — 4px base radius) to maintain an architectural, technical edge while avoiding harsh brutalist sharpness.

- **Base Radius (`0.25rem` / `4px`)**: Interactive buttons, input fields, tags, and small cards.
- **Outer Containers (`0.5rem` / `8px`)**: Large structural module frames and media viewports.
- **Pure Pills / Capsules**: Permitted strictly for micro-status indicators (e.g., "Available for Q3", "Live Demo"), with a maximum vertical height of 20px.

## Components

### Buttons
- **Primary**: Solid Deep Slate (`#0f172a`) background, pure white text, 4px radius, JetBrains Mono or Inter Medium. On hover, background shifts instantaneously or with a linear 120ms transition to Electric Cobalt (`#0055ff`).
- **Secondary**: 1px `#e2e8f0` border, `#ffffff` surface, `#0f172a` text. On hover, border color darkens to `#0f172a`.
- **Ghost/Tertiary**: No border, no background. Underlined or paired with a mono-spaced directional arrow (`->`), shifting to `#0055ff` on hover.

### Badges & Chips
- Formatted in `label-caps` (JetBrains Mono).
- Enclosed in a 1px border (`#e2e8f0`), background `#ffffff`, text `#64748b`.
- Active or highlighted tags feature an electric cobalt indicator dot (`#0055ff`) measuring 6x6px.

### Project & Experiment Cards
- Layered in pure white (`#ffffff`) over the canvas (`#f8fafc`).
- Framed with an explicit 1px `#e2e8f0` hairline border.
- Cards feature strict internal divisions: media viewport up top, separated from project metadata by an internal 1px horizontal hairline divider.
- Hover states must not enlarge the card; they shift the border to `#0f172a` or trigger an accent shift on title elements.

### Inputs & Form Elements
- Text Fields: Clean 1px `#e2e8f0` border on pure white, 4px radius, 12px horizontal padding.
- Focused State: 1px border shifts sharply to Electric Cobalt (`#0055ff`) with zero soft focus rings or outer glow rings.
- Checkboxes & Radios: Strict square/circular 1px geometric controls. When checked, filled with `#0f172a` or `#0055ff` with a 1px white mark.

### Interactive Data Lists & Indexes
- Editorial-style tabular lists for archive items, experiments, and talks.
- Separated by top-and-bottom hairline dividers (`#e2e8f0`).
- Columns display index number (`01`, `02`), title, category, year, and external links in fixed monotonic widths. Row background shifts to `#ffffff` on hover.