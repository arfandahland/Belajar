## 2026-03-17 - Preview Section Memoization Bottleneck in Builder Architecture
**Learning:** In builder applications where a top-level parent component manages the entire page state and passes sections as individual props, every keystroke in the editor sidebar triggers top-level state updates that re-render all preview section components unless wrapped in `React.memo`.
**Action:** Always wrap independent preview section components in `React.memo` and ensure prop references are stable or immutably updated to prevent O(N) re-render cascades during live editing.
