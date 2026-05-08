## 2025-05-22 - Performance optimization using React.memo

**Learning:** React components in the landing page builder were re-rendering entirely whenever any part of the global state (LandingPageData) was updated in the Sidebar. Applying `React.memo` to individual section components (Hero, Features, etc.) effectively prevents these unnecessary re-renders.

**Action:** Use `React.memo` for large preview components that depend on slices of a shared state object to improve responsiveness during real-time editing.
