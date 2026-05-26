## 2025-05-22 - Memoize landing page sections
**Learning:** In a builder application where state is centralized in the parent component (e.g., `Home`), every keystroke in the sidebar causes the entire preview area to re-render. Since many sections are independent and only depend on a slice of the state, `React.memo` is highly effective at preventing unnecessary re-renders of unrelated sections.
**Action:** Always wrap preview section components in `React.memo` when they receive props from a shared state object that is frequently updated.
