## 2025-06-22 - [React.memo for Builder Architecture]
**Learning:** In a landing page builder where state is centralized in a parent component (Home), every keystroke in the sidebar triggers a full re-render of all preview sections. Since the sidebar updates specific sub-objects immutably, other sections' props remain referentially identical, making them perfect candidates for `React.memo`.
**Action:** Always wrap preview section components in `React.memo` when using a centralized state pattern to ensure smooth real-time editing experience.
