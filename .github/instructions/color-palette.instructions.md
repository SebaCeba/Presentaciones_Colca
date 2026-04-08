---
description: "Use when creating or styling presentation components, slides, or visual layouts. Enforces the fixed color palette for the presentation system. Keywords: color, palette, style, CSS, component styling, presentation design, visual hierarchy."
applyTo: ["**/*.css", "**/*.jsx", "src/components/**"]
---

# Color Palette — Presentation System

## Fixed Palette

The system uses exactly four colors:

| Token | Hex | Purpose |
|-------|-----|---------|
| `color.primary.dark` | `#002E46` | Main titles, key anchors, strong backgrounds |
| `color.primary.accent` | `#027B76` | Active elements, highlights, selected states |
| `color.secondary.light` | `#E6D6A7` | Background sections, soft containers |
| `color.secondary.dark` | `#836A4D` | Secondary emphasis, labels |

## Usage Rules

**Primary Dark (#002E46)**
- Use for main titles (optional) and visual anchors
- Do NOT overuse across entire slide

**Primary Accent (#027B76)**
- Active elements, highlights, important features

**Secondary Light (#E6D6A7)**
- Background sections with soft contrast

**Secondary Dark (#836A4D)**
- Secondary emphasis and complementary blocks

## Composition Principles

- **One dominant color per slide**
- **One accent color maximum**
- Remaining colors as support only
- If everything is highlighted, nothing is important

## Restrictions

- ❌ No new colors
- ❌ No gradients
- ❌ No arbitrary brand palettes
- ❌ Do not apply all colors in same slide without hierarchy

## Accessibility

- Ensure sufficient contrast for text readability
- Prefer dark text over light backgrounds
- Avoid low-contrast combinations

## When Color Is Not Necessary

Prefer neutral (black, white, gray).

**Principle**: Color supports meaning, not decoration.

## Examples

```css
/* ✅ Good: One dominant color with accent */
.slide-title {
  color: #002E46; /* primary dark */
}

.highlight-box {
  background-color: #027B76; /* primary accent */
  color: white;
}

/* ❌ Bad: Too many colors competing */
.slide {
  background: #E6D6A7;
  border: 2px solid #027B76;
  color: #002E46;
  box-shadow: 0 0 10px #836A4D;
}
```
