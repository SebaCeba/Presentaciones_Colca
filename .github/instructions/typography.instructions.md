---
description: "Use when creating or styling presentation components, defining text hierarchy, or setting font styles. Enforces the typography system for slides. Keywords: typography, font, text, hierarchy, title, subtitle, font-size, font-weight, line-height, text styles."
applyTo: ["**/*.css", "**/*.jsx", "src/components/**"]
---

# Typography — Presentation System

## Font Family

**Primary**: Inter

**Fallback stack**:
```css
font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
```

❌ **Do not introduce additional fonts**

## Typographic Hierarchy

| Level | Weight | Size | Purpose |
|-------|--------|------|---------|
| **Slide Title** | 600–700 | Large (dominant) | Defines slide context |
| **Subtitle/Bajada** | 400 | Medium | Expands title, adds clarity |
| **Section/Card Title** | 500–600 | Medium | Structure within slide |
| **Body/Summary** | 400 | Standard | Explain content (1–2 lines) |
| **Detail/Labels** | 400 | Small | Support information |
| **Numeric/Badges** | 500 | Compact | Sequence and identification |

## Color & Contrast

- **Titles**: Near black (not pure `#000`)
- **Body**: Dark gray
- **Labels**: Light gray

**Rule**: Reduce contrast for secondary content, not for primary

## Line Height & Spacing

- **Titles**: Tight (1.1–1.2)
- **Body**: Comfortable (1.5–1.6)
- **Labels**: Compact (1.3–1.4)

**Rule**: Text should feel dense but readable

## Text Length Limits

- Titles: max 1–2 lines
- Subtitles: max 2 lines
- Cards: max 2–3 lines

**Rule**: If text is too long, reduce content — not font size

## Restrictions

- ❌ No multiple font families
- ❌ No excessive font weights
- ❌ No center alignment by default
- ❌ No justified text
- ❌ No reducing font size to fix layout issues

## Composition Rules

- **One dominant text element** per slide
- **Clear hierarchy** between title, subtitle, and content
- **Avoid visual noise** from inconsistent text styles

## Examples

```css
/* ✅ Good: Clear hierarchy */
.slide-title {
  font-family: Inter, system-ui, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.1;
  color: #1a1a1a; /* near black */
}

.slide-subtitle {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #4a4a4a; /* dark gray */
}

.card-title {
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 1.3;
}

.body-text {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.6;
}

.label {
  font-weight: 400;
  font-size: 0.875rem;
  color: #757575; /* light gray */
}

/* ❌ Bad: Multiple fonts, unclear hierarchy */
.slide-title {
  font-family: "Palatino", serif; /* wrong font */
  font-weight: 400; /* too light for title */
  text-align: center; /* centered by default */
}

.body-text {
  font-size: 0.75rem; /* too small to fix layout */
  text-align: justify; /* justified text */
}
```

**Principle**: Typography defines clarity. If hierarchy is unclear, the slide fails.
