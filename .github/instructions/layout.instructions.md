---
description: "Use when creating or structuring slide layouts, positioning content, or organizing visual elements. Enforces layout patterns and spatial organization for presentations. Keywords: layout, structure, grid, columns, positioning, alignment, spacing, flex, split layout, content organization."
applyTo: ["**/*.css", "**/*.jsx", "src/components/**"]
---

# Layout — Presentation System

## Base Requirements

Every slide must:
- Use full viewport
- No scrolling (vertical or horizontal)
- Content fully visible at once

**Rule**: A slide must be understood without scrolling

## Core Structure

1. **Header** (title + subtitle)
2. **Content area** (main structure)
3. **Footer** (optional)

**Rule**: Content starts high after header. Use space intentionally, not passively.

## Alignment

**Default**: Left

**Exceptions**: Agenda slides, symmetrical diagrams

**Rule**: Left alignment improves readability and scanning

## Layout Patterns

| Pattern | Use Case | Structure |
|---------|----------|-----------|
| **Grid** | Evenly distributed items | Consistent gaps, equal sizing |
| **Columns** | 2–4 parallel sections | Equal or defined widths |
| **Sequence** | Step-by-step flow | Horizontal or vertical order |
| **Split** | Label + Content | Left 25-35%, Right 65-75% |

## Proportions

**Split layouts**:
- Left area: 25–35% (label/category)
- Right area: 65–75% (content)

**Rule**: Content area dominates

## Density

- Avoid overcrowding
- Avoid empty slides with too little content

**Rule**: Balance density and air

## Visual Flow

- Eye follows structure naturally
- No competing focal points
- Top → context
- Middle → structure
- Bottom → reinforcement (optional)

**Rule**: One visual narrative per slide

## Restrictions

- ❌ No elements just to fill space
- ❌ No breaking consistency between slides
- ❌ No random alignments
- ❌ No vertical stacking if horizontal is more effective
- ❌ No arbitrary spacing (use spacing tokens)

**Principle**: Layout is structure. If structure is unclear, the message is lost.
