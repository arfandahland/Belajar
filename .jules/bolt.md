# Bolt's Performance Journal ⚡

## 2025-06-22 - Identifying Builder Bottlenecks
**Learning:** In a landing page builder with centralized state, every keystroke in the sidebar triggers a full re-render of all preview sections. While React is fast, as sections grow in complexity (more icons, cards, animations), this O(N) re-render pattern will lead to noticeable input lag.
**Action:** Use `React.memo()` on section components to ensure only the modified section re-renders during editing.
