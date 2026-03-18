## 2025-03-18 - [Memoization of Preview Sections]
**Learning:** In a real-time editor where a single global state object drives multiple preview sections, every keystroke in the editor (Sidebar) triggers a re-render of the entire preview area. Wrapping large preview sections in `React.memo` is a highly effective O(1) complexity optimization to ensure only the affected section re-renders, significantly reducing CPU cycles during rapid typing.

**Action:** Always check if a dashboard/editor pattern uses a shared state for multiple independent display components and apply `React.memo` to prevent "render-all" bottlenecks.
