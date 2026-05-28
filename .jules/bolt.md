## 2026-05-27 - Centralized State Re-render Bottleneck
**Learning:** In builder-style applications where state is centralized in a parent (like `page.tsx`), every keystroke in the sidebar triggers a full re-render of all preview sections. Since preview sections are independent and only depend on their specific data slice, they are ideal candidates for memoization.
**Action:** Always wrap independent preview section components in `React.memo` when using centralized state management to prevent O(N) re-renders during edits.
