## 2026-05-23 - Optimized Preview Section Re-renders
**Learning:** In a builder-style application with a large centralized state, editing one section causes all other sections to re-render if they are not memoized, leading to performance degradation as the page grows.
**Action:** Use `React.memo` on all independent UI sections that consume specific parts of the global state to ensure they only re-render when their relevant data changes.
