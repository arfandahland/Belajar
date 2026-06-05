# Bolt's Performance Journal

## 2026-05-31 - Centralized State Re-render Bottleneck in Builder Applications
**Learning:** In applications like landing page builders where a single top-level state object manages multiple UI sections, every keystroke in the Sidebar triggers a full re-render of all Preview sections. While React is efficient at DOM diffing, the cumulative cost of rendering 6+ complex sections on every character input leads to noticeable input lag (approx. 12 renders per keystroke in dev mode).
**Action:** Use `React.memo` with `displayName` for all independent UI sections in builder applications to ensure only the section being edited re-renders.
