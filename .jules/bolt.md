## 2025-05-15 - Memoization of Preview Sections

**Learning:** In a real-time editor where state is shared across multiple sections, updating one section causes all other sections to re-render by default. In this project, with 6 sections, every character typed in the Sidebar triggered 6 re-renders in the Preview area.

**Action:** Use `React.memo` for all preview sections to isolate re-renders. This reduced re-renders from 6 to 1 per character change (aside from the edited section), a ~83% improvement in render efficiency for the Preview area. Always set `displayName` for memoized components for better DX.
