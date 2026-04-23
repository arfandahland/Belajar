## 2026-04-23 - Memoize preview sections to prevent unnecessary re-renders
**Learning:** React components in a real-time editor can cause a cascade of unnecessary re-renders if they are all consumers of a large central state object. Using React.memo on the individual preview sections significantly improves the responsiveness of the editor by ensuring only the modified section re-renders.
**Action:** Always check for unnecessary re-renders in real-time editors and apply React.memo or similar optimizations to consumer components that only depend on a subset of the shared state.
