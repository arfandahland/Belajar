## 2026-05-24 - Memoize Preview Sections
**Learning:** In a builder application where the entire landing page state is managed in a central `Home` component, any small change in one section (e.g., Hero) triggers a re-render of all other sections (Features, Pricing, etc.). This leads to O(N) re-renders where N is the number of sections.

**Action:** Use `React.memo` for top-level preview sections to ensure they only re-render when their specific props change. This reduces re-renders to O(1) for targeted edits.
