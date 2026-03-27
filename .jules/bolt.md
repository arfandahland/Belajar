## 2025-05-14 - Decoupling Editor State from Preview Rendering
**Learning:** In real-time editors, frequent state updates (e.g., on every keystroke) in a sidebar can cause sluggishness if the entire preview area re-renders synchronously. Using `useDeferredValue` allows React to prioritize the input fields, while `React.memo` on preview sections prevents redundant renders of unchanged components.
**Action:** Always consider `useDeferredValue` for "heavy" preview panes in CMS-like or editor interfaces to maintain UI responsiveness.
