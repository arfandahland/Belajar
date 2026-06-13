## 2026-06-13 - Memoizing Landing Page Sections
**Learning:** In a builder-style application where state is centralized in a parent component (e.g., Home), every keystroke in the sidebar causes the entire preview area to re-render. This includes all landing page sections, even if their data hasn't changed.
**Action:** Use React.memo() on independent UI sections that receive specific slices of the state. This significantly reduces the re-render count per keystroke, improving real-time editing responsiveness.
