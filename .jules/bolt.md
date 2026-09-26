## 2025-06-22 - Prevent Unnecessary Landing Page Section Re-renders with React.memo

**Learning:** In builder-style applications where top-level state holds all landing page section data, updating a single section's state immutably creates new sub-object references for that section while preserving object references for untouched sections. Without `React.memo`, all section preview components re-render on every single keystroke. Wrapping preview section components in `React.memo` successfully skips rendering for all unchanged sections.

**Action:** Wrap landing page section components in `React.memo` when top-level state updates are section-scoped to achieve O(1) section re-renders during live editing.
