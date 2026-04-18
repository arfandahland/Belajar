## 2026-04-18 - Component Memoization with Nested State
**Learning:** React.memo is highly effective in this landing page builder because the Sidebar's state update functions use nested object spreading. This maintains reference equality for data sections that aren't being edited, allowing memoized sections to skip re-renders.
**Action:** Always verify that parent state updates are immutable and granular before relying on React.memo for child components.
