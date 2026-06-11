## 2026-06-08 - React.memo for landing page builder sections
**Learning:** In a landing page builder with a centralized state object, editing one section causes all other sections to re-render. Since these sections are independent and the data object structure is stable, `React.memo` is highly effective.
**Action:** Use `React.memo` for top-level UI components in builder-style applications to ensure that real-time editing only re-renders the component being modified.
