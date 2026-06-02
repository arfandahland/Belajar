## 2026-05-31 - Centralized State Re-render Pattern in Builder Apps
**Learning:** In builder-style applications where a single state object drives multiple UI sections, every update to that state (e.g., via a sidebar editor) triggers a full re-render of all sections by default.
**Action:** Use `React.memo` on independent UI sections to ensure only the section whose data has changed re-renders, significantly improving real-time editor performance.
