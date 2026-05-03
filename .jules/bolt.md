# Bolt's Performance Journal

## 2025-05-14 - Selective Preview Re-renders with React.memo
**Learning:** In a landing page builder where all sections are children of a single `Home` component managing a large state object, any change to a single section's content (e.g., Footer) triggers a full re-render of all other sections (Hero, Features, Pricing, etc.). By wrapping each section in `React.memo`, we can reduce re-renders by ~83% (from 6 sections down to 1) during targeted edits.
**Action:** Always memoize individual preview sections that represent distinct logical blocks when they are controlled by a centralized state container.
