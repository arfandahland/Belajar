## 2026-05-27 - [Memoization of Preview Sections]
**Learning:** In builder-style applications with centralized state, every keystroke in the sidebar triggers a full re-render of the entire preview area. Wrapping independent UI sections in React.memo significantly reduces CPU load and improves typing responsiveness by skipping reconciliation for unchanged sections.
**Action:** Always consider memoizing top-level preview sections in builder interfaces when they consume sub-sections of a shared state object.
