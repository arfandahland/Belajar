## 2025-05-15 - Optimizing Real-time Builders with Memoization
**Learning:** In applications using a centralized state for real-time editing (like this landing page builder), updating one section causes the entire component tree to re-render by default. This leads to redundant virtual DOM diffing for all other static sections.
**Action:** Wrap section components in `React.memo` and provide `displayName`. This ensures sections only re-render when their specific slice of the global state changes, significantly improving the responsiveness of the editor sidebar interactions.
