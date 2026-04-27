## 2026-04-27 - Component Memoization in Real-time Editor
**Learning:** In a real-time editor where state is centralized in a parent component, every keystroke in the sidebar triggers a full re-render of all preview sections. Wrapping these sections in React.memo effectively prevents unnecessary re-renders of unrelated sections.
**Action:** Use React.memo for presentational components in real-time editors to maintain a smooth editing experience, especially as the number of sections grows.
