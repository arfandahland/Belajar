# Bolt's Performance Journal

## 2025-05-14 - Unnecessary Re-renders in Real-time Editor
**Learning:** The real-time landing page builder manages all state in a single root `Home` component. Without memoization, any change to a single section's data (e.g., typing in the Hero title) causes every section in the preview area to re-render, even if their props haven't changed. This is a common performance bottleneck in "builder" style applications with centralized state.
**Action:** Use `React.memo` for all preview section components to ensure they only re-render when their specific data changes. This will significantly improve the responsiveness of the editor as the number of sections grows.
