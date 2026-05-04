## 2025-05-22 - React.memo on Preview Sections
**Learning:** In a real-time editor layout where a single state object manages the entire page content, every keystroke in the sidebar triggers a re-render of the entire preview area. Wrapping large section components in `React.memo` effectively isolates these updates to only the affected section, provided the state update logic maintains reference equality for unchanged data slices.
**Action:** Always use `React.memo` for major UI sections in real-time editors or builders to ensure smooth typing experience and UI responsiveness.
