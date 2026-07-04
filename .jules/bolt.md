## 2025-06-22 - Optimize builder performance with React.memo
**Learning:** In a builder architecture where state is centralized at the top level and passed down, every small update (like a keystroke in a sidebar) triggers a re-render of the entire preview area. React 19's development mode double-renders components, making this bottleneck even more visible (6 sections became 12 render calls).
**Action:** Use `React.memo` for static or independent visual sections in real-time editors to reduce re-renders from O(N) to O(1) during typical field updates.
