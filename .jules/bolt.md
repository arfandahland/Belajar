## 2025-06-22 - Preventing Cascading Re-renders in Builder Applications with React.memo

**Learning:** In a landing page or app builder architecture where parent state (`data`) holds all section configs, typing in the editor sidebar triggers parent state updates. Without memoization, every single section component (Hero, Features, Testimonials, Pricing, CTA, Footer) re-renders on every keystroke, leading to high render counts and potential input lag as complexity grows. Since immutable state updates preserve references for untouched sub-objects, `React.memo` effectively skips re-rendering untouched sections.

**Action:** Wrap section components in `React.memo` and set explicit `displayName`s when building live-editing preview areas fed by top-level state.
