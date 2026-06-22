## 2026-06-22 - Memoize landing page sections to reduce redundant re-renders
**Learning:** In a builder architecture where a single large state object is updated via a Sidebar, all preview components re-render on every keystroke unless memoized. React 19's double-rendering in development mode exacerbates this bottleneck, making it easily detectable.
**Action:** Always wrap preview section components in `React.memo` to ensure that only the section being edited is re-rendered during Sidebar updates, significantly improving the real-time editing experience.
