## 2025-05-15 - Real-time Preview Optimization
**Learning:** In real-time builder applications with a centralized state, updating any field in the sidebar causes the entire preview tree to re-render. Combining `React.memo` on section components with `useDeferredValue` on the state passed to the preview ensures that high-priority input events (typing) remain responsive while the expensive preview updates asynchronously.
**Action:** Always pair `React.memo` on leaf/section components with transition-based state management (`useDeferredValue` or `useTransition`) in builder-like interfaces.
