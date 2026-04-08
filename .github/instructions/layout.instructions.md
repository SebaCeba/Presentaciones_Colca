---
description: "Use when creating or structuring slide layouts, positioning content, or organizing visual elements. Enforces layout patterns and spatial organization for presentations. Keywords: layout, structure, grid, columns, positioning, alignment, spacing, flex, split layout, content organization."
applyTo: ["**/*.css", "**/*.jsx", "src/components/**"]
---

# Layout — Presentation System

## Base Requirements

Every slide must:
- Use full viewport (`100vh`)
- No scrolling (vertical or horizontal)
- Content fully visible at once

**Rule**: A slide must be understood without scrolling

## Core Structure

1. **Header** (title + subtitle)
2. **Content area** (main structure)
3. **Footer** (optional closing note)

**Rule**: Content must start high after header. Use space intentionally, not passively.

## Alignment

**Default**: Left aligned

**Exceptions**: Agenda slides, symmetrical diagrams

**Rule**: Left alignment improves readability and scanning

## Layout Patterns

| Pattern | Use Case | Structure |
|---------|----------|-----------|
| **Grid** | Evenly distributed items | Consistent gaps, equal sizing |
| **Columns** | 2–4 parallel sections | Equal or defined widths |
| **Sequence** | Step-by-step flow | Horizontal or vertical order |
| **Split Layout** | Label + Content | Left 25-35%, Right 65-75% |

## Split Layout Proportions

```css
.split-container {
  display: flex;
  gap: 2rem;
}

.split-left {
  flex: 0 0 30%; /* label/category area */
}

.split-right {
  flex: 1; /* content area - dominates */
}
```

**Rule**: Content area should always dominate

## Density Balance

- ❌ Avoid overcrowding
- ❌ Avoid empty slides with too little content

**Rule**: Balance density and air

## Visual Flow

- Eye must naturally follow the structure
- No competing focal points
- Top → context
- Middle → structure  
- Bottom → reinforcement (optional)

**Rule**: One visual narrative per slide

## Restrictions

- ❌ No elements just to fill space
- ❌ No breaking layout consistency between slides
- ❌ No random alignments
- ❌ No vertical stacking if horizontal is more effective
- ❌ No arbitrary margins or padding (use spacing tokens)

## Examples

```css
/* ✅ Good: Clear grid pattern */
.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem; /* intentional space after header */
}

/* ✅ Good: Split layout with clear proportions */
.split-layout {
  display: flex;
  gap: 3rem;
  height: 100%;
}

.category-section {
  flex: 0 0 30%;
  text-align: left;
}

.content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ✅ Good: Sequence pattern */
.sequence {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

/* ❌ Bad: Random positioning */
.slide-content {
  position: absolute;
  top: 45%; /* arbitrary centering */
  left: 23%; /* random offset */
  transform: translate(-50%, -50%);
}

/* ❌ Bad: Competing focal points */
.overcrowded {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* too many columns */
  grid-template-rows: repeat(4, 1fr); /* too dense */
}
```

```jsx
// ✅ Good: Clear structure with intentional layout
const InfoSlide = () => {
  return (
    <SlideBase title="TÍTULO">
      <div className="split-layout">
        <div className="category-section">
          <h2>Categoría</h2>
        </div>
        <div className="content-section">
          <Card>Contenido 1</Card>
          <Card>Contenido 2</Card>
          <Card>Contenido 3</Card>
        </div>
      </div>
    </SlideBase>
  );
};

// ❌ Bad: Unclear structure
const ConfusedSlide = () => {
  return (
    <SlideBase title="TÍTULO">
      <div style={{ marginTop: "10px" }}> {/* arbitrary spacing */}
        <div style={{ float: "left" }}> {/* outdated positioning */}
          Content
        </div>
        <div style={{ position: "absolute", top: "200px" }}>
          More content
        </div>
      </div>
    </SlideBase>
  );
};
```

**Principle**: Layout is structure. If structure is unclear, the message is lost.
