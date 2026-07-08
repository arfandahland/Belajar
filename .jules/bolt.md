## 2025-06-22 - [Memoization in Builder Architecture]
**Learning:** In a landing page builder where all state is centralized in a parent component, every keystroke in the sidebar causes the entire preview to re-render. React.memo is highly effective here because the sidebar updates specific parts of the state immutably, preserving references for sections that aren't being edited.
**Action:** Always memoize sectional components in builder-like applications to ensure a smooth, lag-free editing experience as the number of sections grows.
