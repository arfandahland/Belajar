## 2026-04-13 - [React.memo in Real-time Builders]
**Learning:** In a real-time editor where state is centralized in a parent component, any state update (even for a small field) triggers a re-render of all child components by default. Memoizing preview sections is critical to ensure a smooth editing experience as the page grows in complexity.
**Action:** Always wrap preview section components in `React.memo` when building real-time editors to prevent unnecessary re-renders of stable sections.
