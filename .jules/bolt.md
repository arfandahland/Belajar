## 2026-06-08 - Centralized State Re-render Bottleneck
**Learning:** In builder applications where the entire page state is managed in a top-level component, every keystroke in the sidebar causes the entire page to re-render. React 19 in development mode compounds this by double-rendering, leading to a significant amount of redundant work.
**Action:** Use React.memo() on landing page section components to isolate re-renders to only the section currently being edited. This reduces component renders from ~16 per keystroke to ~6 (Home, Sidebar, and the specific section).
