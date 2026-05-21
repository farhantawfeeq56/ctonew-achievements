# AGENTS.md

## Project Overview

This project experiments with product interactions, onboarding flows, achievement systems, and behavioral UX patterns.

Current focus:
Improving the achievement/discovery experience inside cto.new.

The goal is to build interactions that feel:
- responsive
- intentional
- motivating
- clear

This repo is prototype-heavy and iteration-driven.

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- TailwindCSS v4

Package manager:
- npm

Run locally:

```bash
npm install
npm run dev
````

Build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

---

# Development Philosophy

Optimize for:

* speed
* clarity
* interaction quality
* frontend polish

Avoid:

* overengineering
* premature abstraction
* unnecessary dependencies
* enterprise-style complexity

Keep solutions simple and editable.

---

# UI & Interaction Principles

Prioritize:

* clear user feedback
* smooth state transitions
* visible progression
* responsive interactions

Every important action should feel acknowledged by the interface.

Avoid dead states where users are unsure:

* what happened
* what changed
* what to do next

---

# Animation Guidelines

Animations should support usability.

Good animations:

* guide attention
* clarify transitions
* reinforce state changes
* improve responsiveness

Avoid:

* decorative motion without purpose
* excessive bounce effects
* slow transitions

Preferred patterns:

* subtle fades
* slide transitions
* progressive reveals
* contextual microinteractions

---

# Component Guidelines

Prefer:

* modular components
* readable logic
* descriptive naming
* local state where possible

Good:

* `achievement-toast.tsx`
* `discovery-sidebar.tsx`

Bad:

* `helper-final.ts`
* `utils2.ts`

---

# Styling Guidelines

Use Tailwind utilities directly.

Avoid:

* deeply nested styles
* inconsistent spacing
* excessive custom CSS

Maintain:

* strong visual hierarchy
* clean layouts
* consistent spacing

---

# Testing Expectations

Test for:

* interaction clarity
* animation smoothness
* responsive behavior
* edge states
* visual consistency

Manual testing is important for interaction-heavy features.

---

# Git Guidelines

Keep commits focused and readable.

Good:

* `add achievement toast animation`
* `improve sidebar transition`
* `refine unlock state feedback`

Bad:

* `misc fixes`
* `changes`
* `final final`

---

# Final Principle

Build interfaces that feel clear, responsive, and intentional.

```
```
