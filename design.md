# Design System Inspired by HUANG'S

## 1. Visual Theme & Atmosphere

HUANG'S design system is built on the tension between restraint and authority — a B2B luxury fashion portal that communicates efficiency and prestige in equal measure. The visual language draws from the tradition of Parisian wholesale houses and high-end editorial fashion: cream-toned surfaces that feel tactile and considered, deep burgundy-red that signals confidence and heritage, and typographic compositions that command attention without shouting. Every element is stripped of decoration unless it earns its place. The result is a portal that a Portuguese retailer opens and immediately trusts — not because it dazzles, but because it projects absolute seriousness about the business of fashion. Whitespace is used aggressively as a status signal; density is reserved for the catalog where information throughput matters. The system pivots cleanly between seasonal palettes — shifting from the warm Red/Beige all-season identity into cooler Grey/Beige or stark Black/Beige modes for Fall/Winter campaigns — while keeping the structural bones identical.

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

**Secondary (Sans-serif — Body, UI, and Catalog):**
`'Inter', 'Helvetica Neue', 'Arial', sans-serif`
The workhorse of the system. Inter's tabular numerals, open apertures, and surgical legibility make it ideal for product listings, pricing tables, form labels, and bulk catalog browsing. Chosen for its neutrality — it never competes with the serif voice.

**Tertiary (Monospace — Reference Numbers, SKUs, Order IDs):**
`'JetBrains Mono', 'Courier New', monospace`
Used exclusively for order reference numbers, SKU identifiers, and pricing data in table contexts. Provides instant visual distinction for machine-readable strings.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| **Display / Hero** | Cormorant Garamond | 72px | 300 (Light) | 78px | `0.02em` | All-caps optional; brand statements only |
| **H1 — Page Title** | Cormorant Garamond | 52px | 400 (Regular) | 60px | `0.01em` | One per page; catalog titles, section heroes |
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

**Primary Button** (Main CTA — "Place Order", "View Catalog", "Login")
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

**Secondary Button** (Supporting action — "Download Catalog", "Save Draft")
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

**Product Card** (Primary unit of the catalog)
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

**Search Input** (Catalog search bar)
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

**Filter Chip** (Catalog filters — size, category, color)
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

**Breadcrumb** (Catalog & portal pages)
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

### Tables (Order Management / Catalog Grid View)

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

**Catalog Grid:**
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

The system is intentionally flat-radius. The `2