# Bolt's Performance Journal ⚡

## 2025-06-22 - [Centralized State Re-render Bottleneck]
**Learning:** In the landing page builder architecture, all sectional components (Hero, Features, etc.) re-render whenever any part of the global `data` state is updated via the Sidebar. This causes significant UI lag as the number of sections grows, especially during real-time text input.
**Action:** Wrap sectional components in `React.memo` to ensure they only re-render when their specific slice of the data changes.
