## 2025-06-22 - Centralized State Re-render Bottleneck in Builder Applications
**Learning:** In landing page builder architectures where a single central state object updates on every keystroke, all preview sections re-render by default even when their specific props have not changed.
**Action:** Wrap landing page preview section components in `React.memo` to ensure unchanged sections skip re-rendering during real-time Sidebar edits.
