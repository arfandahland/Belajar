## 2025-06-22 - Prevent Redundant Section Re-renders in Builder Layouts

**Learning:** In builder applications where centralized state controls multiple preview sections, keystrokes in the sidebar mutate the global page state object immutably. Without memoization, every keystroke forces all preview sections to re-render, creating UI lag as the page grows.
**Action:** Wrap independent preview section components in `React.memo` so that only the section whose sub-object reference actually changed will re-render during live editing.
