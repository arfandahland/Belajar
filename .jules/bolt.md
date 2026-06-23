## 2026-06-22 - Optimize real-time builder re-renders
**Learning:** In a landing page builder where a single central state object is updated via a Sidebar, all preview sections re-render on every keystroke because their parent (Home component) re-renders.
**Action:** Use `React.memo` for all independent section components in the preview area. This reduced re-renders from 12 to 2 (83.3% reduction) in development mode (React 19 double-renders).
