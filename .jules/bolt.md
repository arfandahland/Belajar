## 2025-05-14 - Optimized Landing Page Section Rendering
**Learning:** In a real-time editor where a centralized state object contains data for multiple independent UI sections, updating any single field causes a re-render of all sections if they are siblings in the same parent component.
**Action:** Use `React.memo` on independent UI sections to ensure they only re-render when their specific slice of state changes. This is particularly effective in "Builder" style applications where the state is deeply nested.
