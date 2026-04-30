## 2026-04-30 - Optimize Preview Re-renders with React.memo
**Learning:** In a real-time editor where state is centralized in a parent component (Home), every keystroke in the Sidebar causes the entire Preview area to re-render. Since each section (Hero, Features, etc.) only depends on a specific slice of the state, wrapping them in React.memo is highly effective.
**Action:** Use React.memo on preview components that receive granular props from a larger central state to avoid unnecessary re-renders during editing.
