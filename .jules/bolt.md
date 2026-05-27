## 2026-05-27 - Centralized state re-render bottleneck
**Learning:** In builder-style applications where a central parent component holds a large state object and distributes it to multiple UI sections, any update to one part of the state triggers re-renders for all sections by default.
**Action:** Wrap independent UI sections in `React.memo` to prevent unnecessary re-renders. This is especially critical when the parent state update maintains reference equality for unchanged state branches.
