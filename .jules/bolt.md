## 2025-06-22 - Centralized State Re-renders in Builder Applications
**Learning:** In real-time landing page builder applications where top-level state updates on every keystroke in the editor sidebar, unmemoized preview section components re-render en masse on every input change, creating unnecessary rendering overhead.
**Action:** Wrap section components in React.memo and ensure immutable updates in the parent state so props for untouched sections remain reference-equal, reducing re-renders from O(N) to O(1) during editing.
