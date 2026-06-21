## 2025-06-13 - Memoizing Landing Page Sections
**Learning:** In a builder-style application with a centralized state, updating a single field in the sidebar triggers a full re-render of all preview sections. Using `React.memo` on independent UI sections effectively prevents these redundant re-renders.
**Action:** Always wrap independent preview components in `React.memo` when using a single large state object for real-time editing.
