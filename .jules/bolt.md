## 2026-03-20 - Memoizing Landing Page Sections
**Learning:** In a real-time editor where state is lifted to a common parent, every keystroke in the sidebar triggers a full re-render of the entire preview area. As the landing page grows with more complex sections (e.g., Features, Pricing), this can lead to input lag and a degraded user experience.
**Action:** Use `React.memo` for all preview section components to prevent unnecessary re-renders when unrelated state changes occur (e.g., editing the Hero title should not re-render the Pricing or Footer sections).
