## 2025-05-15 - Optimizing Real-time Editor Performance

**Learning:** In a real-time landing page builder where state is held at the top level (e.g., `src/app/page.tsx`), every keystroke in the sidebar causes the entire application to re-render. This includes all preview sections, even if their specific props have not changed. As the landing page grows with more sections and complex UI (like Framer Motion animations), this can lead to input lag and a degraded user experience.

**Action:**
1. Use `React.memo` for all preview section components to prevent unnecessary re-renders when their props remain identical.
2. Implement `useDeferredValue` for the landing page state passed to the preview sections. This allows React to prioritize the sidebar input updates while deferring the more expensive preview area re-renders, ensuring a fluid editing experience.
