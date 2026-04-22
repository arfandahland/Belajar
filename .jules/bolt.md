## 2025-05-15 - React.memo on preview sections
**Learning:** In a real-time editor where state is centralized in a parent component, every keystroke in a sidebar input triggers a full re-render of all preview components if they are not memoized.
**Action:** Always wrap preview section components in React.memo and use 'use client' when they receive stable props from a parent state, especially in landing page builders.
