## 2026-06-08 - Memoization in Centralized State Builder Apps
**Learning:** In applications with a centralized state object (like a page builder), updating any part of the state triggers a re-render of the entire component tree by default. For complex preview areas, this causes noticeable lag during real-time editing as every keystroke re-renders unrelated sections.
**Action:** Use `React.memo` for top-level UI sections that consume specific slices of the state. This isolates re-renders to only the section being edited, significantly improving typing responsiveness in the sidebar.
