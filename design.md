# Design System Inspired by HUANG'S

## 1. Visual Theme & Atmosphere

HUANG'S design system is built on the tension between restraint and authority — a B2B luxury fashion portal that communicates efficiency and prestige in equal measure. The visual language draws from the tradition of Parisian wholesale houses and high-end editorial fashion: cream-toned surfaces that feel tactile and considered, deep burgundy-red that signals confidence and heritage, and typographic compositions that command attention without shouting. Every element is stripped of decoration unless it earns its place. The result is a portal that a Portuguese retailer opens and immediately trusts — not because it dazzles, but because it projects absolute seriousness about the business of fashion. Whitespace is used aggressively as a status signal; density is reserved for product grids where information throughput matters. The system pivots cleanly between seasonal palettes — shifting from the warm Red/Beige all-season identity into cooler Grey/Beige or stark Black/Beige modes for Fall/Winter campaigns — while keeping the structural bones identical.

**Key Characteristics:**
- **Understated luxury:** No gradients, no drop shadows on type, no decorative flourishes — luxury is expressed through proportion and material-like surfaces
- **Editorial authority:** Serif headlines set at confident scales pair with tight, functional sans-serif body copy to evoke high-fashion trade publications
- **Operational precision:** Grid systems are strict, spacing is mathematical, and interactive states are unambiguous — B2B buyers need clarity, not surprise
- **Seasonal adaptability:** The system is palette-swappable; only color tokens change between All-Season, Fall/Winter Grey, and Fall/Winter Black modes
- **Monochromatic restraint:** Accent color is deployed sparingly — the Deep Red appears as a precision tool, not a decoration
- **Surface hierarchy through tone:** Depth is created by layering beige tones rather than shadows, reinforcing the tactile, fabric-inspired atmosphere

---

## 2. Color Palette & Roles

### Primary
- **Brand Burgundy** (`#3A1810`): Primary CTA backgrounds, active navigation states, logo lockup area, section divider accents, and key brand moments requiring maximum authority
- **Brand Beige** (`#E5E1D6`): Page canvas background, hero section fills, card surfaces, and all large-area neutral fills — the "fabric" of the interface

### Accent Colors
- **Warm Ivory** (`#F5F2EC`): Elevated card surfaces, modal backgrounds, and input field fills — slightly lighter than Brand Beige to create subtle surface lift
- **Deep Charcoal** (`#151212`): Primary heading text, logo type rendering, and high-contrast display text on light backgrounds
- **Editorial Grey** (`#4A494A`): Body copy, form labels, secondary headings, descriptive product text, and all supporting typographic content

### Interactive
- **CTA Active** (`#3A1810`): Primary button fill and active anchor states — consistent with primary brand color for visual unity
- **CTA Hover** (`#5C2A1F`): Lightened burgundy for button hover state, providing tactile feedback without abandoning brand identity
- **CTA Pressed** (`#2A100A`): Darkened burgundy for active/pressed button state
- **Link Default** (`#3A1810`): In-text links and navigational anchors — burgundy underline on hover
- **Link Hover** (`#5C2A1F`): Hover state for inline links
- **Focus Ring** (`#3A1810`): Keyboard focus indicator, `2px solid` with `2px offset`

### Neutral Scale
- **Neutral 100** (`#FAFAF8`): Lightest background tier, used for full-page login and portal authenticated surfaces
- **Neutral 200** (`#F0EDE5`): Table row alternates, sidebar fills, and subtle section differentiation
- **Neutral 300** (`#E5E1D6`): Matches Brand Beige — primary canvas; also used for input borders at rest
- **Neutral 400** (`#C8C4BB`): Dividers, horizontal rules, and table borders
- **Neutral 500** (`#9A9690`): Placeholder text, disabled labels, and muted metadata
- **Neutral 600** (`#6B6764`): Secondary body text, breadcrumb links, and caption-level content
- **Neutral 700** (`#4A494A`): Matches Editorial Grey — primary body copy
- **Neutral 800** (`#2C2B2B`): Sub-heading and label weights where full black feels too heavy
- **Neutral 900** (`#151212`): Matches Deep Charcoal — display headings and maximum-contrast contexts

### Surface & Borders
- **Surface Default** (`#E5E1D6`): Page background canvas
- **Surface Raised** (`#F5F2EC`): Cards, dropdowns, and floating panels
- **Surface Overlay** (`#FAFAF8`): Modals, popovers, and authenticated portal workspace background
- **Border Subtle** (`#C8C4BB`): Default input and card border — quiet and structured
- **Border Strong** (`#9A9690`): Focused input borders and active filter chip borders
- **Border Emphasis** (`#3A1810`): Active tab underline, selected state indicator, and form field focus border

### Semantic / Status
- **Success** (`#2D6A4F`): Order confirmed, stock available, successful upload indicators
- **Warning** (`#A67C00`): Low stock alerts, pending order states, and reorder threshold warnings
- **Error** (`#9B2226`): Form validation errors, failed transactions, and destructive action confirmations
- **Info** (`#1D4E7C`): Informational tooltips, shipping timeline notes, and policy callouts

---

## 3. Typography Rules

### Font Family

**Primary (Serif — Headings & Brand Moments):**
`'Cormorant Garamond', 'Garamond', 'Georgia', serif`
A refined, high-contrast serif with fashion-editorial DNA. Cormorant Garamond carries the weight of luxury fashion typography while remaining legible at display scale. Used for all headings, hero text, and brand statements.

**Secondary (Sans-serif — Body, UI, and Product Data):**
`'Inter', 'Helvetica Neue', 'Arial', sans-serif`
The workhorse of the system. Inter's tabular numerals, open apertures, and surgical legibility make it ideal for product listings, pricing tables, form labels, and dense product browsing. Chosen for its neutrality — it never competes with the serif voice.

**Tertiary (Monospace — Reference Numbers, SKUs, Order IDs):**
`'JetBrains Mono', 'Courier New', monospace`
Used exclusively for order reference numbers, SKU identifiers, and pricing data in table contexts. Provides instant visual distinction for machine-readable strings.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| **Display / Hero** | Cormorant Garamond | 72px | 300 (Light) | 78px | `0.02em` | All-caps optional; brand statements only |
| **H1 — Page Title** | Cormorant Garamond | 52px | 400 (Regular) | 60px | `0.01em` | One per page; product titles, section heroes |
| **H2 — Section Heading** | Cormorant Garamond | 38px | 400 (Regular) | 48px | `0.01em` | "Our Strengths", "New Arrivals", etc. |
| **H3 — Sub-Section** | Cormorant Garamond | 28px | 500 (Medium) | 36px | `0.015em` | Card titles, feature names, sub-categories |
| **H4 — Label Heading** | Inter | 13px | 600 (SemiBold) | 20px | `0.12em` | ALL CAPS; nav labels, section eyebrows, tags |
| **H5 — Form Group Label** | Inter | 12px | 600 (SemiBold) | 18px | `0.08em` | ALL CAPS; form section headers |
| **Body Large** | Inter | 17px | 400 (Regular) | 28px | `0` | Marketing copy, About Us paragraphs |
| **Body Default** | Inter | 15px | 400 (Regular) | 24px | `0` | Product descriptions, portal body text |
| **Body Small** | Inter | 13px | 400 (Regular) | 20px | `0` | Supporting copy, secondary metadata |
| **Button Label** | Inter | 13px | 600 (SemiBold) | 16px | `0.10em` | ALL CAPS; consistent across all button sizes |
| **Link / Anchor** | Inter | 15px | 400 (Regular) | 24px | `0` | Underline on hover; burgundy color |
| **Caption / Meta** | Inter | 11px | 400 (Regular) | 16px | `0.02em` | Timestamps, image credits, footnotes |
| **Price — Wholesale** | Inter | 20px | 700 (Bold) | 28px | `0` | Tabular nums; `font-variant-numeric: tabular-nums` |
| **Price — Per Unit** | Inter | 13px | 400 (Regular) | 20px | `0` | Muted color; shown below wholesale price |
| **SKU / Reference** | JetBrains Mono | 12px | 400 (Regular) | 18px | `0.04em` | Always Neutral 600; never primary text color |
| **Navigation Item** | Inter | 13px | 500 (Medium) | 16px | `0.06em` | ALL CAPS; 5–7 items maximum in primary nav |
| **Table Header** | Inter | 11px | 700 (Bold) | 16px | `0.10em` | ALL CAPS; Neutral 600 color |
| **Table Cell** | Inter | 13px | 400 (Regular) | 20px | `0` | Neutral 700; tabular nums for numeric columns |
| **Code / Token** | JetBrains Mono | 12px | 400 (Regular) | 18px | `0` | Used sparingly for API references if applicable |

### Principles
- **Serif commands, Sans serves:** Cormorant Garamond carries brand identity; Inter carries information. Never reverse these roles.
- **Scale with intention:** There are exactly four serif levels and they should never appear at the same visual weight within a single viewport
- **ALL CAPS with restraint:** Only Inter should go all-caps, and only at 11–13px with `0.08em+` letter-spacing. Never set Cormorant Garamond in all-caps at body scale.
- **Optical sizing matters:** At 72px+, Cormorant Garamond's `font-weight: 300` creates the fashion-editorial thinness expected at display scale. Below 28px, shift to 500 to preserve legibility.
- **Numeric precision:** All currency, quantities, and order numbers must use `font-variant-numeric: tabular-nums` to prevent layout shift in tables during data loading.
- **Minimum body size is 13px:** No content-bearing text appears smaller than 13px regardless of viewport. Captions are informational supplements, never primary communication.

---

## 4. Component Stylings

### Buttons

**Primary Button** (Main CTA — "Shop on Our Store", "Contact", "Register")
- `background: #3A1810`
- `color: #F5F2EC`
- `padding: 14px 32px`
- `border: 1px solid #3A1810`
- `border-radius: 2px`
- `font-family: Inter, sans-serif`
- `font-size: 13px`
- `font-weight: 600`
- `letter-spacing: 0.10em`
- `text-transform: uppercase`
- `transition: background 200ms ease, border-color 200ms ease`
- **Hover:** `background: #5C2A1F; border-color: #5C2A1F`
- **Active/Pressed:** `background: #2A100A; border-color: #2A100A`
- **Disabled:** `background: #C8C4BB; border-color: #C8C4BB; color: #9A9690; cursor: not-allowed`
- **Focus:** `outline: 2px solid #3A1810; outline-offset: 2px`

**Secondary Button** (Supporting action — "Open Microstore", "Contact Sales")
- `background: transparent`
- `color: #3A1810`
- `padding: 13px 32px`
- `border: 1px solid #3A1810`
- `border-radius: 2px`
- `font-family: Inter, sans-serif`
- `font-size: 13px`
- `font-weight: 600`
- `letter-spacing: 0.10em`
- `text-transform: uppercase`
- `transition: background 200ms ease, color 200ms ease`
- **Hover:** `background: #3A1810; color: #F5F2EC`
- **Active/Pressed:** `background: #2A100A; color: #F5F2EC; border-color: #2A100A`
- **Disabled:** `border-color: #C8C4BB; color: #9A9690; cursor: not-allowed`
- **Focus:** `outline: 2px solid #3A1810; outline-offset: 2px`

**Ghost Button** (Low-priority action — "Cancel", "Clear Filters")
- `background: transparent`
- `color: #4A494A`
- `padding: 13px 24px`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `font-family: Inter, sans-serif`
- `font-size: 13px`
- `font-weight: 600`
- `letter-spacing: 0.10em`
- `text-transform: uppercase`
- `transition: border-color 200ms ease, color 200ms ease`
- **Hover:** `border-color: #4A494A; color: #151212`
- **Active/Pressed:** `background: #F0EDE5; border-color: #4A494A`
- **Disabled:** `color: #9A9690; border-color: #E5E1D6; cursor: not-allowed`
- **Focus:** `outline: 2px solid #3A1810; outline-offset: 2px`

**Icon Button** (Compact actions — reorder, favorites, share)
- `background: transparent`
- `color: #4A494A`
- `width: 40px; height: 40px`
- `border: 1px solid transparent`
- `border-radius: 2px`
- `display: flex; align-items: center; justify-content: center`
- **Hover:** `background: #F0EDE5; border-color: #C8C4BB`
- **Active:** `background: #E5E1D6`

---

### Cards & Containers

**Product Card** (Primary unit of product presentation)
- `background: #F5F2EC`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `overflow: hidden`
- `transition: box-shadow 250ms ease, border-color 250ms ease`
- **Image Area:** `aspect-ratio: 3/4; background: #E5E1D6; overflow: hidden`
- **Image hover:** `transform: scale(1.03); transition: transform 400ms ease`
- **Info Area:** `padding: 16px 20px 20px`
- **Product Name:** `font-family: Cormorant Garamond; font-size: 17px; font-weight: 500; color: #151212`
- **Category Tag:** `font-family: Inter; font-size: 11px; font-weight: 600; letter-spacing: 0.10em; text-transform: uppercase; color: #9A9690`
- **Wholesale Price:** `font-family: Inter; font-size: 20px; font-weight: 700; color: #3A1810`
- **Card hover state:** `border-color: #9A9690; box-shadow: 0 4px 20px rgba(58, 24, 16, 0.08)`
- **Quick Reorder Badge:** absolute positioned top-right; `background: #3A1810; color: #F5F2EC; font-size: 10px; letter-spacing: 0.08em; padding: 4px 8px; text-transform: uppercase`

**Feature Card** (Homepage "Comprehensive / Plentiful / Fast" pillars)
- `background: #F5F2EC`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `padding: 48px 40px`
- **Number/Icon:** `font-family: Cormorant Garamond; font-size: 52px; font-weight: 300; color: #C8C4BB`
- **Title:** `font-family: Cormorant Garamond; font-size: 28px; font-weight: 400; color: #151212; margin-top: 16px`
- **Body:** `font-family: Inter; font-size: 15px; color: #4A494A; margin-top: 12px; line-height: 24px`

**Content Container / Section Wrapper**
- `max-width: 1320px`
- `margin: 0 auto`
- `padding: 0 48px` (desktop), `0 24px` (tablet), `0 16px` (mobile)
- Section vertical padding: `96px 0` (hero/major sections), `72px 0` (standard sections), `48px 0` (compact sections)

**Portal Dashboard Card** (B2B authenticated zone)
- `background: #FAFAF8`
- `border: 1px solid #E5E1D6`
- `border-radius: 2px`
- `padding: 32px`
- **Header:** `border-bottom: 1px solid #E5E1D6; padding-bottom: 20px; margin-bottom: 24px`

---

### Inputs & Forms

**Text Input — Default**
- `background: #F5F2EC`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `padding: 12px 16px`
- `font-family: Inter, sans-serif`
- `font-size: 15px`
- `font-weight: 400`
- `color: #151212`
- `width: 100%`
- `transition: border-color 180ms ease, box-shadow 180ms ease`
- **Placeholder:** `color: #9A9690`

**Text Input — Focus**
- `border-color: #3A1810`
- `outline: none`
- `box-shadow: 0 0 0 3px rgba(58, 24, 16, 0.10)`

**Text Input — Error**
- `border-color: #9B2226`
- `box-shadow: 0 0 0 3px rgba(155, 34, 38, 0.10)`
- Error message: `font-family: Inter; font-size: 12px; color: #9B2226; margin-top: 6px`

**Text Input — Disabled**
- `background: #E5E1D6`
- `border-color: #E5E1D6`
- `color: #9A9690`
- `cursor: not-allowed`

**Label**
- `font-family: Inter; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #4A494A`
- `display: block; margin-bottom: 8px`

**Select / Dropdown**
- Same base styles as text input
- `appearance: none`
- Custom chevron: `right: 16px; color: #4A494A`
- **Focus:** same as text input focus

**Search Input** (Product search bar)
- `background: #F5F2EC`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `padding: 12px 16px 12px 44px` (icon on left)
- `font-size: 15px; color: #151212`
- `width: 100%; max-width: 480px`
- **Focus:** `border-color: #3A1810; box-shadow: 0 0 0 3px rgba(58, 24, 16, 0.10)`

**Quantity Input** (Bulk order entry)
- `background: #F5F2EC`
- `border: 1px solid #C8C4BB`
- `border-radius: 2px`
- `padding: 10px 12px`
- `font-family: Inter; font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums`
- `text-align: center; width: 80px`
- Flanked by `–` and `+` ghost icon buttons (`width: 36px; height: 36px`)

**Checkbox & Radio**
- Custom styled: `width: 18px; height: 18px; border: 1.5px solid #C8C4BB; border-radius: 2px; background: #F5F2EC`
- **Checked state:** `background: #3A1810; border-color: #3A1810`; checkmark in `#F5F2EC`
- `label font-family: Inter; font-size: 14px; color: #4A494A`

**Filter Chip** (Product filters — size, category, color)
- `background: transparent; border: 1px solid #C8C4BB; border-radius: 2px`
- `padding: 6px 14px`
- `font-family: Inter; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #4A494A`
- **Active/Selected:** `background: #3A1810; border-color: #3A1810; color: #F5F2EC`
- **Hover (inactive):** `border-color: #4A494A`

---

### Navigation

**Primary Navigation Bar**
- `background: #FAFAF8`
- `border-bottom: 1px solid #C8C4BB`
- `height: 72px`
- `display: flex; align-items: center; justify-content: space-between`
- `padding: 0 48px`
- `position: sticky; top: 0; z-index: 100`

**Logo Lockup**
- `font-family: Cormorant Garamond; font-size: 22px; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase; color: #151212`

**Nav Item — Default**
- `font-family: Inter; font-size: 13px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #4A494A`
- `padding: 8px 0; margin: 0 20px`
- `border-bottom: 2px solid transparent`
- `transition: color 180ms ease, border-color 180ms ease`

**Nav Item — Hover**
- `color: #151212`
- `border-bottom-color: #C8C4BB`

**Nav Item — Active/Current**
- `color: #3A1810`
- `border-bottom: 2px solid #3A1810`
- `font-weight: 600`

**B2B Portal Login Button** (persistent in nav)
- Styled as Primary Button but compact: `padding: 10px 24px`
- `background: #3A1810; color: #F5F2EC`

**Breadcrumb** (Product & portal pages)
- `font-family: Inter; font-size: 12px; color: #9A9690`
- Separator: `·` or `/` in `#C8C4BB`
- Active/current crumb: `color: #151212; font-weight: 500`
- `margin-bottom: 32px`

**Footer**
- `background: #151212`
- `color: #9A9690`
- `padding: 72px 48px 40px`
- Footer heading: `font-family: Cormorant Garamond; font-size: 18px; font-weight: 400; color: #E5E1D6; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px`
- Footer links: `font-family: Inter; font-size: 13px; color: #9A9690; line-height: 28px`
- Footer links hover: `color: #E5E1D6`
- Address block: `font-family: Inter; font-size: 13px; color: #6B6764; font-style: normal; line-height: 22px`
- Bottom bar: `border-top: 1px solid #2C2B2B; padding-top: 24px; margin-top: 48px`
- Copyright: `font-size: 11px; color: #6B6764; letter-spacing: 0.04em`

---

### Badges & Tags

**New Arrival Badge**
- `background: #3A1810; color: #F5F2EC`
- `font-family: Inter; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase`
- `padding: 4px 8px; border-radius: 2px`

**Low Stock Badge**
- `background: #A67C00; color: #FAFAF8`
- Same typographic treatment as New Arrival

**Trending Badge**
- `background: transparent; border: 1px solid #3A1810; color: #3A1810`
- Same typographic treatment

**Category Tag** (informational, no action)
- `background: #E5E1D6; color: #4A494A`
- `font-family: Inter; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase`
- `padding: 3px 8px; border-radius: 2px`

---

### Tables (Order Management / Product Grid View)

**Table Container**
- `background: #FAFAF8`
- `border: 1px solid #E5E1D6`
- `border-radius: 2px`
- `overflow: hidden`

**Table Header Row**
- `background: #F0EDE5`
- `border-bottom: 1px solid #C8C4BB`
- Header cell: `font-family: Inter; font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: #6B6764; padding: 12px 20px`

**Table Row — Default**
- `border-bottom: 1px solid #E5E1D6`
- Cell: `font-family: Inter; font-size: 13px; color: #4A494A; padding: 16px 20px`

**Table Row — Alternate**
- `background: #F5F2EC`

**Table Row — Hover**
- `background: #F0EDE5`

---

## 5. Layout Principles

### Spacing System

Base unit: `8px`

| Token | Value | Primary Usage |
|---|---|---|
| `space-1` | `4px` | Icon-to-label gap, inline badge padding |
| `space-2` | `8px` | Tag internal padding, tight list gaps |
| `space-3` | `12px` | Input internal padding (vertical), button height adjustments |
| `space-4` | `16px` | Card internal padding (small), stacked form field gap |
| `space-5` | `20px` | Navigation item horizontal margin, label-to-input gap within groups |
| `space-6` | `24px` | Card padding, column gutters (mobile), section sub-component gaps |
| `space-8` | `32px` | Dashboard card padding, between-card gap in grid |
| `space-10` | `40px` | Feature card padding (horizontal sub-value), within-section spacing |
| `space-12` | `48px` | Section padding (compact), container horizontal padding (desktop) |
| `space-16` | `64px` | Between major content blocks within a section |
| `space-18` | `72px` | Standard section vertical padding |
| `space-24` | `96px` | Hero and major section vertical padding |
| `space-32` | `128px` | Largest section separation — used between full-bleed sections |

### Grid & Container

**Max Container Width:** `1320px`  
**Column Count:** 12 columns (desktop), 8 columns (tablet), 4 columns (mobile)  
**Gutter:** `32px` (desktop), `24px` (tablet), `16px` (mobile)  
**Column margin:** `48px` (desktop), `32px` (tablet), `16px` (mobile)

**Product Grid:**
- Desktop (1280px+): 4-column product grid, `gap: 32px`
- Tablet (768px–1279px): 3-column product grid, `gap: 24px`
- Mobile (below 768px): 2-column product grid, `gap: 16px`

**Dashboard Portal Grid:**
- Sidebar: `280px` fixed width (desktop)
- Main content: `flex: 1; min-width: 0`
- Sidebar collapses to off-canvas drawer at tablet breakpoint

**Hero Section Pattern:**
- Full viewport width with constrained inner container
- `min-height: 560px` for homepage hero
- Text column: max `640px` wide, left-aligned within container

### Whitespace Philosophy

HUANG'S deliberately over-spaces rather than under-spaces. The brand's luxury positioning is signaled partly through generous breathing room — content is never crowded, headings have room to assert typographic character, and sections are separated by intervals that feel intentional rather than incidental. Within components (cards, forms, tables), spacing is tighter and functional. Between sections and page regions, spacing is expansive. This creates a clear visual rhythm: enter a section with presence, deliver information efficiently, then rest.

### Border Radius Scale

| Token | Value | Applied To |
|---|---|---|
| `radius-none` | `0px` | Dividers, full-bleed images, hero overlays |
| `radius-sm` | `2px` | **Primary radius** — buttons, inputs, cards, badges, chips, tables — universal default |
| `radius-md` | `4px` | Modals and larger overlay panels only |
| `radius-full` | `9999px` | Loading spinners, avatar circles — never buttons or inputs |

The system is intentionally flat-radius. The `2px` default is the only radius that matters in day-to-day implementation. It signals craft without mimicking skeuomorphism — a considered edge, not a rounded corner. Avoid introducing intermediate values like `6px` or `8px`; they fracture the visual grammar.

---

## 6. Motion & Animation

### Principles

HUANG'S motion philosophy mirrors its visual language: restrained, purposeful, never decorative. Animation is a tool for orientation and feedback, not spectacle. A B2B buyer navigating product ranges and wholesale information does not want choreography — they want immediate response and confident transitions.

- **Transitions, not animations:** Elements transition between states; they do not perform entrances. Reserve keyframe-based motion for loading states and skeleton screens only.
- **200ms is the default:** Most interactive state changes (hover, focus, active) complete in `200ms ease`.
- **Opacity + translate for reveals:** When content appears (dropdowns, modals, tooltips), combine `opacity: 0 → 1` with `transform: translateY(-4px) → translateY(0)`.
- **Respect prefers-reduced-motion:** Wrap all decorative transitions in `@media (prefers-reduced-motion: no-preference)`. Functional feedback (focus rings, error states) is never suppressed.

### Duration Scale

| Token | Duration | Applied To |
|---|---|---|
| `duration-fast` | `120ms` | Focus ring appearance, checkbox tick, icon swap |
| `duration-default` | `200ms` | Button states, input borders, nav item hover |
| `duration-medium` | `250ms` | Card hover lift, filter chip toggle |
| `duration-slow` | `400ms` | Product image zoom on card hover |
| `duration-enter` | `280ms` | Dropdown open, modal enter, drawer slide-in |
| `duration-exit` | `200ms` | Dropdown close, modal exit — exits always faster than enters |

### Easing Functions

- **`ease`**: Default for state changes — button hover, input focus
- **`ease-out`** (`cubic-bezier(0, 0, 0.2, 1)`): Content entering the screen — dropdowns, modals
- **`ease-in`** (`cubic-bezier(0.4, 0, 1, 1)`): Content leaving the screen
- **`ease-in-out`** (`cubic-bezier(0.4, 0, 0.2, 1)`): Bidirectional state transitions — accordion, tab switching

### Specific Patterns

**Dropdown open:** `opacity: 0 → 1` + `transform: translateY(-6px) → translateY(0)` over `280ms ease-out`

**Modal enter:** Backdrop `opacity: 0 → 0.4` over `200ms ease`; panel `opacity: 0 → 1` + `transform: translateY(12px) → translateY(0)` over `280ms ease-out`

**Skeleton loading pulse:**
- `background: #E5E1D6`
- `animation: skeleton-pulse 1.6s ease-in-out infinite`
- Keyframes: `0%, 100% { opacity: 1 }` → `50% { opacity: 0.45 }`

---

## 7. Iconography

### Icon System

HUANG'S uses a **line-weight icon set** consistent with the typographic restraint of the system. Icons are functional wayfinding tools, never illustrative decoration. Recommended: [Lucide](https://lucide.dev/) at `1.5px` stroke weight. Avoid filled icon styles.

### Sizing

| Context | Size | Stroke |
|---|---|---|
| Inline with body text | `16px` | `1.5px` |
| Button / navigation icon | `18px` | `1.5px` |
| Section feature icon | `24px` | `1.5px` |
| Empty state | `48px` | `1.5px` |

### Color Rules

- Default: `#4A494A` (Editorial Grey)
- Within primary button: `#F5F2EC`
- Active/brand context: `#3A1810`
- Disabled: `#C8C4BB`

Icons paired with text use `display: flex; align-items: center; gap: 8px`. Never use an icon without a visible label or `aria-label`.

---

## 8. Brand Identity & Physical Touchpoints

The physical brand system extends the same four-color palette (`#3A1810`, `#E5E1D6`, `#4A494A`, `#151212`) across all tangible brand surfaces. Every print application observes the same restraint as the digital system: the mark is placed with purpose, breathing room is generous, and the beige ground reads as craft quality.

### Logo Color Modes

Three sanctioned logo treatments, mapped to background context:

| Mode | Background | Logo Color | Notes |
|---|---|---|---|
| **Red + Beige** (All-Season primary) | `#E5E1D6` | `#3A1810` | Default; used year-round on all light surfaces |
| **Grey + Beige** (FW light) | `#E5E1D6` | `#4A494A` | Autumn/Winter seasonal variant on light grounds |
| **Black + Beige** (FW light) | `#E5E1D6` | `#151212` | Maximum contrast on light ground for FW campaigns |
| **Black + Beige** (deep bg) | `#151212` | `#E5E1D6` | Dark ground application — ivory logo on black |
| **Black + White** (deep bg) | `#151212` | `#FFFFFF` | Maximum contrast dark-ground version |

The geometric H-mark icon and the wordmark "HUANG'S" always maintain their proportional relationship. "PORTUGAL" subtitle appears as a secondary line in `Inter`, `font-size: 11px`, `letter-spacing: 0.16em`, `text-transform: uppercase`, vertically separated from the wordmark by `6px`.

### Business Card (名片)

**Size:** 80 × 54mm  
**Face:** Brand Burgundy (`#3A1810`) background; logo mark + "HUANG'S" wordmark in `#E5E1D6`  
**Reverse:** `#E5E1D6` background; contact details in `#151212`  
**Contact typography:** Inter, 8–9pt, `color: #151212`; address in `color: #4A494A`  
**Finish:** Matte laminate; logo side may use spot UV on the mark

### Main Label — 主麦

**Size:** 25mm × 90mm  
**Construction:** Woven fabric label  
**Variants:**
- **Beige ground:** `#E5E1D6` base, `#3A1810` logo — default, all-season
- **Burgundy ground:** `#3A1810` base, `#E5E1D6` logo — premium or seasonal emphasis
- **Grey ground:** `#4A494A` base, `#E5E1D6` logo — FW grey variant

Logo mark is centered vertically; "HUANG'S" wordmark below the mark with `4mm` separation.

### Hang Tags — 吊牌

Multiple format sizes, all using the four-color system:

| Format | Size | Primary Use |
|---|---|---|
| Large portrait | 80mm × 138mm | Hero product tag; full brand presentation |
| Standard portrait | 66mm × 98mm | Standard garment tag |
| Medium portrait | 56mm × 132mm | Slim vertical format |
| Small square | 42mm × 56mm or 43mm × 56mm | Compact accessory tag |
| Narrow ribbon | 20mm × 140mm | Bookmark-style or ribbon tag |
| Wide landscape | 76mm × 114mm | Flat fold-over tag |
| Tall narrow | 68mm × 133mm | Slim tall format |

**Construction:** 350gsm+ artboard; matte laminate standard; burgundy variant uses `#3A1810` card with `#E5E1D6` print. Hang cord: burgundy wax cord (beige tags) or grey grosgrain (all variants).

**Layout (large portrait, 80mm × 138mm):**
- Top border: continuous fret-pattern decorative band in `#3A1810` / `#E5E1D6` — 12mm height
- Center: H-mark icon, large scale (~40mm height)
- Below mark: "HUANG'S" wordmark
- Bottom: "PORTUGAL" subtitle
- Reverse: blank or barcode/price zone

### Size Label — 尺码麦

**Size:** 30mm × 50mm  
**Construction:** Woven  
**Content:** H-mark icon top-center; size designation (XS / S / M / L / XL / XXL) in Inter Bold, ~18pt, centered  
**Variants:** Beige-ground (`#E5E1D6` base, `#3A1810` mark) and grey-ground (`#4A494A` base, `#E5E1D6` mark)

### Care & Composition Label — 成分麦 / 洗水麦

**Size:** 40mm × 50mm  
**Construction:** Woven satin  
**Layout:**
- Top: "HUANG'S" wordmark, Inter SemiBold, 7pt, `#3A1810`
- Fiber content: e.g. "Cotton 100%", Inter Regular, 7pt
- Care symbols row: standard ISO wash/dry/iron icons
- Care instructions text: "Machine wash cold / 30°C Tumble dry", Inter Regular, 6pt
- Bottom line: "Lua Cintilante Comercio Vestuario", Inter Regular, 5pt, `#9A9690`

### Metal Casting — 小铸件

Small cast-metal brand markers applied directly to garments:

- **Rectangular plate:** ~15mm × 8mm; raised H-mark, brushed silver finish; stitched or riveted at hem or cuff
- **Round disc:** ~18mm diameter; raised H-mark, gunmetal or silver finish; sewn to collar or shoulder seam
- **Heart charm:** ~20mm; raised H-mark on face, gold or silver finish; suspended from hang tag cord or zipper pull

All metal castings are secondary brand signals — they reinforce logo presence without replacing the woven main label.

### Product Box — 产品盒

**Size:** 45cm × 30cm × 8cm  
**Colors:** `#E5E1D6` (kraft-toned board) with `#3A1810` print; or `#3A1810` board with `#E5E1D6` print  
**Front face:** H-mark centered, "HUANG'S" below; minimal layout with generous margin  
**Ribbon:** Branded grosgrain ribbon — burgundy variant (`#3A1810` with `#E5E1D6` repeat wordmark) or grey variant (`#4A494A` ground)

### Mailer Box — 产品飞机盒

**Size:** 45cm × 35cm × 8cm  
**Construction:** Corrugated board, self-locking tuck-top  
**Variants:**
- **Beige:** Natural kraft board with `#3A1810` print; H-mark top-center on lid, "HUANG'S PORTUGAL" below
- **Burgundy:** `#3A1810` board with `#E5E1D6` print
**Side panels:** "HUANG'S" wordmark repeated in small scale

### Paper Shopping Bag — 纸袋

**Size:** 35cm × 32cm × 12cm  
**Handles:** Flat grosgrain — grey (`#4A494A`) standard  
**Variants:**
- **Beige bag:** `#E5E1D6` art paper; H-mark + "HUANG'S" + "Lua Cintilante Unipessoal Lda" in `#3A1810`
- **Burgundy bag:** `#3A1810` coated stock; logo in `#E5E1D6`
**Layout:** Logo centered at ~60% of bag height from bottom; company name at ~25% from bottom in Inter, 8pt

### Canvas Tote Bag — 编织袋

**Size:** 21cm × 24cm × 11cm  
**Handles:** Sewn ribbon handles — burgundy (`#3A1810`) on beige bag; grey (`#4A494A`) on red bag  
**Variants:**
- **Beige (米底):** Natural canvas; H-mark + "HUANG'S" in `#3A1810`; "Lua Cintilante Unipessoal Lda" at base in Inter 7pt
- **Burgundy (红底):** `#3A1810` canvas; logo in `#E5E1D6`
**Back face:** "HUANG'S PORTUGAL" wordmark only, bottom-center, small scale

### Clear Polybag — 透明袋子

**Size:** 35cm × 45cm  
**Construction:** Frosted CPE zip-top  
**Print:** H-mark + "HUANG'S" + "Lua Cintilante Unipessoal Lda / PORTUGAL" in `#4A494A` (Editorial Grey) — subdued against translucent ground  
**Logo position:** Centered, ~35% from top of bag face

### Sticker — 贴纸

**Size:** 50mm × 50mm circular  
**Variants:**
- **Burgundy:** `#3A1810` ground, H-mark + "HUANG'S" in `#E5E1D6`
- **Beige/Silver:** `#E5E1D6` or metallic silver ground, mark in `#3A1810`
**Finish:** Gloss laminate

### Staff Badge — 员工牌

**Size:** 85mm × 54mm  
**Construction:** PVC card with lanyard eyelet; housed in a card-slot lanyard holder  
**Variants:**
- **Black ground:** `#151212` card; H-mark + "HUANG'S" in `#E5E1D6`; "值班 / Em Serviço" role text top-right in `#E5E1D6`
- **Burgundy ground:** `#3A1810` card; same layout in `#E5E1D6`
**Lanyard:** Black grosgrain or burgundy grosgrain

### Signage — 公司招牌

**Fascia application:** Dimensional stainless-steel letters — natural brushed finish — mounted to building facade  
**Letterforms:** "Lua Cintilante Unipessoal Lda" in Inter; "黄 氏" in the brand Chinese character form; H-mark icon as a separate dimensional piece  
**Scale:** Mark at minimum 600mm height for exterior visibility; wordmark proportionally scaled  
**Illumination:** Non-illuminated preferred; back-lit halo if required by building code

---

## 9. Seasonal Palette Variants

The structural system (typography, spacing, components, grid) is constant across seasons. Only the color token layer is swapped.

### All-Season — 红 + 米 (Default)

The primary identity. Applied to all year-round marketing, the default product presentation, and physical touchpoints unless a seasonal override is declared.

| Role | Color | Hex |
|---|---|---|
| Brand Primary | Brand Burgundy | `#3A1810` |
| Canvas | Brand Beige | `#E5E1D6` |
| Heading | Deep Charcoal | `#151212` |
| Body | Editorial Grey | `#4A494A` |

### Fall/Winter — 灰 + 米

Cooler, more restrained. Applied as a seasonal campaign overlay for autumn/winter light-background contexts.

| Role | All-Season | FW Grey Override |
|---|---|---|
| Brand Primary | `#3A1810` | `#4A494A` |
| CTA Hover | `#5C2A1F` | `#2C2B2B` |
| Border Emphasis | `#3A1810` | `#4A494A` |

### Fall/Winter — 黑 + 米 (Light ground)

Maximum editorial austerity on a light ground. Used for hero takeovers, campaign pages, seasonal product detail pages.

| Role | All-Season | FW Black Override |
|---|---|---|
| Brand Primary | `#3A1810` | `#151212` |
| CTA Hover | `#5C2A1F` | `#2C2B2B` |
| Nav Active border | `#3A1810` | `#151212` |

### Fall/Winter — 黑 + 米 (Dark ground)

Full canvas inversion. Used for high-impact hero sections and full-page campaign takeovers.

| Role | All-Season | FW Dark Override |
|---|---|---|
| Canvas | `#E5E1D6` | `#151212` |
| Elevated Surface | `#F5F2EC` | `#1C1B1B` |
| Heading | `#151212` | `#E5E1D6` |
| Body | `#4A494A` | `#9A9690` |
| Border Subtle | `#C8C4BB` | `#2C2B2B` |
| Primary Button | `bg: #3A1810` | `bg: #E5E1D6; color: #151212` |

### 黑 + 白 (Dark ground, maximum contrast)

Pure black ground with white logo — used for the most severe editorial contexts, single-image campaigns, and print-on-dark backgrounds where beige reads as off-white.

| Role | Value |
|---|---|
| Canvas | `#151212` |
| Logo / Heading | `#FFFFFF` |
| Body | `#9A9690` |

---

## 10. Accessibility Standards

### Color Contrast (WCAG 2.1)

| Pairing | Contrast | Standard |
|---|---|---|
| `#151212` on `#E5E1D6` | 12.6:1 | AAA |
| `#4A494A` on `#F5F2EC` | 7.2:1 | AAA |
| `#3A1810` on `#F5F2EC` | 13.4:1 | AAA |
| `#F5F2EC` on `#3A1810` | 13.4:1 | AAA |
| `#6B6764` on `#E5E1D6` | 4.7:1 | AA |
| `#9A9690` on `#E5E1D6` | 2.9:1 | Large text only |

Neutral 500 (`#9A9690`) is used **only** for non-content-bearing text: placeholders, disabled labels, decorative metadata. Never use it for content a user must read to operate the interface.

### Keyboard Navigation

- All interactive elements reachable via `Tab` in logical DOM order
- Focus ring: `outline: 2px solid #3A1810; outline-offset: 2px` — never suppressed without a custom replacement
- Skip-to-content link present on all authenticated portal pages, visible on focus
- `Escape` always dismisses dropdowns, modals, and drawers
- Custom components expose full ARIA roles per ARIA Authoring Practices Guide

### Screen Reader Support

- Icon-only buttons carry `aria-label`
- Product images carry descriptive `alt` text
- Tables use `<th scope="col">` headers
- Status badges are supplemented with `<span class="sr-only">` text
- Form errors announced via `aria-live="polite"` and linked via `aria-describedby`

### Touch Targets

Minimum `44×44px` on mobile viewports. Icon buttons (`40×40px` visual) receive `padding: 2px` to meet this threshold.

---

## 11. Page Templates

### Homepage (Marketing)

1. Sticky Navigation — `72px`, `z-index: 100`
2. Hero — Full-width, `min-height: 560px`; H1 Cormorant Garamond 52px left-aligned; primary CTA; optional image right-column
3. Brand Proposition Strip — 3-column Feature Cards ("一全 / 二多 / 三快"); `padding: 96px 0`
4. New Arrivals Grid — H2 + 4-column product grid + CTA to Microstore
5. Social Proof Strip — retailer logos or pull-quote in Cormorant Garamond italic
6. Brand Story Module — full-bleed image left, text right; `padding: 96px 0`
7. External-Store CTA — Brand Burgundy ground; ivory headline + "Shop on Our Store" secondary button (external link, `target="_blank"`)
8. Footer — `#151212` ground, 4-column link grid + address

### Product Detail Page (Public, Display-Only)

1. Breadcrumb
2. Two-column: image gallery left (60%) + info panel right (40%)
3. Info panel: product name (H2), category tag, SKU in monospace, short description, size/color swatches (non-interactive display), "Shop on Our Store" primary button (external link) + "Contact for Wholesale" ghost button
4. Details Accordion — description, materials, care, sizing chart
5. Related Products Strip — H3 + 4-item scroll on mobile

### About / Brand Story Page

1. Hero text — legal-entity overline + Cormorant Garamond H1 subtitle
2. Hero image — full-width 21:9 editorial photograph
3. Narrative columns — long-form copy in Inter 17px, `max-width: 720px`
4. Values Grid — 3-column "一全 / 二多 / 三快" expanded description on ivory ground
5. Timeline / milestones — vertical dated list
6. **Brand end-mark** — small H-monogram (logo-mark.svg, ~56px) centred on canvas as an editorial closing punctuation; reinforces brand identity at the narrative's close without competing with the headline at the top
7. Contact CTA — burgundy ground with wholesale enquiry email + store link

### Contact Page

1. Page Header — H1 + supporting copy
2. Two-column: contact details (address, email, phone, business hours) left + enquiry form right
3. Form fields: Name, Company, Country, Message; `submit` posts to email relay (Resend)
4. Map embed (optional) — greyscale style

---

## 12. Tech Stack

Implementation is optimised for a **display-first marketing and product showcase site**. All purchase actions deep-link to the existing storefront — this site carries no cart, auth, or transactional database.

### 12.1 Core Framework

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Static export / ISR for marketing and product pages; fast SEO; `next/image` for editorial imagery; React Server Components keep bundle small |
| Language | **TypeScript (strict)** | Type-safe product schema |
| Styling | **Tailwind CSS v4** | Token-based; maps 1:1 to color / spacing (8px) / radius (2px) / type scales from Sections 2–5 |
| UI Primitives | **shadcn/ui (Radix UI)** | Accessible primitives (focus rings, keyboard nav, ARIA) per Section 10 |
| Icons | **Lucide React** | Matches 1.5px stroke weight in Section 7 |

### 12.2 Content & Data

| Concern | Choice | Why |
|---|---|---|
| Product data | **MDX / JSON files in `content/products/`** (v1) | Version-controlled, no CMS overhead; migrate to **Sanity** when non-dev editing is required |
| Forms | **React Hook Form + Zod** | Contact / wholesale-enquiry form only |
| Form relay | **Resend** | Enquiry email delivery |
| Images | **`next/image` + Cloudflare R2** | AVIF/WebP, responsive sizes, EU-proximate origin |
| Fonts | **`next/font` (self-hosted)** | Cormorant Garamond + Inter + JetBrains Mono; zero CLS |

### 12.3 Internationalisation

| Concern | Choice |
|---|---|
| i18n | **next-intl** — `/pt` (default), `/en`, `/zh` |
| Currency | Not displayed on this site (prices live on storefront) |

### 12.4 External Integrations

| Concern | Choice |
|---|---|
| Storefront link-out | Config-driven base URL (`NEXT_PUBLIC_STORE_URL`); each product has a `storeUrl` slug |
| Analytics | **Plausible** (GDPR-clean, cookieless) |
| Monitoring | **Sentry** |

### 12.5 Deployment

| Concern | Choice |
|---|---|
| Hosting | **Vercel** — static + ISR, EU edge |
| Domain | `huangs.pt` (or per registrar) |
| Preview | Vercel preview per PR |

### 12.6 Developer Experience

| Concern | Choice |
|---|---|
| Package manager | **pnpm** |
| Lint / format | **ESLint + Prettier + `prettier-plugin-tailwindcss`** |
| Git hooks | **Husky + lint-staged** |
| Testing | **Playwright** (smoke: home → product → outbound click) |
| CI | **GitHub Actions** — lint, typecheck, preview deploy |

### 12.7 Directory Structure

```
huangs/
├── app/
│   └── [locale]/
│       ├── page.tsx              # homepage
│       ├── products/[slug]/      # product detail
│       ├── about/
│       ├── contact/
│       └── layout.tsx
├── components/
│   ├── ui/                       # shadcn primitives
│   ├── brand/                    # Logo, Wordmark
│   ├── layout/                   # SiteHeader, SiteFooter
│   └── products/                 # ProductCard, ProductGallery, ProductGrid
├── content/
│   └── products/                 # slug/product.json; category lives in JSON
├── lib/
│   ├── products.ts               # read + filter product data
│   ├── i18n/                     # next-intl config
│   └── site.ts                   # site-wide config (store URL, contact)
├── styles/
│   └── tokens.css                # CSS variables from Sections 2–5
├── messages/                     # pt.json, en.json, zh.json
└── public/
    └── products/                 # local product images by slug
```

### 12.8 Non-Goals (v1)

- No authentication, accounts, carts, or checkout — all purchase actions redirect externally
- No native mobile apps
- No live chat widget
- No multi-currency display; prices shown only on storefront
- No custom CMS admin — MDX/JSON edits via PR
