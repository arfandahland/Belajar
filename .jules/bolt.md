## 2025-05-15 - Unnecessary Global Re-renders in Real-time Editor
**Learning:** In a real-time editor with centralized state, updating any field in the sidebar triggers a full re-render of all preview sections if they aren't memoized. This causes noticeable typing lag as the page grows.
**Action:** Always wrap top-level preview sections in `React.memo` and ensure state updates in the parent use immutable patterns (object spreading) to maintain reference equality for unmodified data.
