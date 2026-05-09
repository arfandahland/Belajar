## 2026-05-09 - Optimized Preview Section Re-renders
**Learning:** In a centralized state pattern like this landing page builder, a single change in the Sidebar triggers a full re-render of the entire preview area because the parent component's state updates. Applying `React.memo` to individual section components effectively isolates these updates.
**Action:** Use `React.memo` with explicit `displayName` for major UI sections in real-time editors to maintain performance as the page scale.
