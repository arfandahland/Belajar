## 2026-06-22 - [Centralized State Re-render Bottleneck]
**Learning:** In a builder-style application where a single large state object in a parent component is updated frequently (e.g., via a sidebar editor), all child components that consume pieces of that state will re-render by default, even if their specific data hasn't changed.
**Action:** Use `React.memo` for top-level section components to ensure they only re-render when their specific slice of the state changes. This is highly effective when the state is updated immutably, preserving object references for unchanged sections.
