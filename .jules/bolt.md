## 2025-05-14 - Real-time Editor Optimization
**Learning:** In a split-screen editor where the parent state is shared between the Sidebar (inputs) and Preview (renders), heavy re-renders in the Preview area can cause noticeable input lag. Using `useDeferredValue` on the shared state specifically for the Preview components allows the Sidebar to remain responsive. Complementing this with `React.memo` on the individual Preview sections ensures that when the deferred update does occur, only the modified sections are re-processed.

**Action:** Always consider the "Input-to-Preview" path as a candidate for `useDeferredValue` and granular memoization to maintain a snappy editing experience.
