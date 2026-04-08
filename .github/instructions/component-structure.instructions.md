---
description: "Use when creating, modifying, or refactoring React/TypeScript UI components. Enforces component reusability, prevents duplication, and maintains clean component architecture. Keywords: component, create component, new component, UI, frontend, React component, reusable component, duplicate component."
applyTo: ["**/*.jsx", "**/*.tsx", "src/components/**"]
---

# Component Structure — Presentation System

## Purpose

Define clear boundaries between primitives, composed components, and content-driven slides.

Prevent duplication. Maximize reuse.

## Component Layers

The system has three layers:

| Layer | Purpose | Location |
|-------|---------|----------|
| **Primitives** | Base building blocks | `src/components/base/` |
| **Composed** | Reusable slide templates | `src/components/presentation/` |
| **Configured** | Content-specific slides | `src/components/slides/` |

**Rule**: Lower layers do not depend on upper layers

## Reuse Rules

- Use existing primitives before creating new ones
- Use existing composed components before creating new ones
- Configure composed components with content instead of duplicating

**Rule**: Duplication is a design failure

## When to Create a Primitive

Create a primitive when:
- Pattern repeats across multiple slides
- Component has no business logic
- Component accepts generic props
- Component can combine with others

**Do NOT create** if it only serves one specific slide.

## When to Create a Composed Component

Create a composed component when:
- Layout pattern repeats (bullets, agenda, framework, diagram)
- Structure is fixed but content varies
- Multiple slides use same visual structure

**Do NOT create** if content is unique and never repeats.

## When to Create a Configured Slide

Create in `src/components/slides/` when:
- Content is specific and unique
- Slide composes existing components with business data
- Slide is a final presentation artifact

**Rule**: Configured slides consume, they do not define structure

## Naming Rules

**Primitives**: Descriptive, generic
- `SlideBase`, `SlideSection`, `Card`, `Badge`

**Composed**: Purpose-driven
- `BulletsSlide`, `AgendaSlide`, `FrameworkSlide`

**Configured**: Business-specific
- `StaffIntro`, `TeamOverview`, `ProjectTimeline`

**Rule**: Name reveals layer

## Restrictions

- ❌ No primitives in `slides/`
- ❌ No business logic in primitives
- ❌ No duplicating composed components with minor variations
- ❌ No creating a primitive for a single use case
- ❌ No mixing presentation logic with business data in composed components

## Composition Principle

Compose from bottom to top:
- Primitives combine into composed components
- Composed components receive content to become configured slides

**Rule**: Never skip a layer

## Principle

Reuse is not optional. If a pattern exists, use it. If a pattern repeats, extract it.

Components are contracts, not files.
