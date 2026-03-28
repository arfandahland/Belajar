## 2025-05-15 - Optimizing Real-Time Editor with Deferred Updates
**Learning:** In a landing page builder with a split-screen layout (Sidebar/Preview), frequent state updates from sidebar inputs can cause the UI to feel sluggish if the preview area is large and complex. Using `useDeferredValue` allows React to prioritize keeping the input responsive while deferring the "non-urgent" update of the preview.
**Action:** Use `useDeferredValue` for the preview data and wrap section components in `React.memo` to minimize the work needed during deferred renders.
