## 2025-05-15 - Memoizing Preview Sections and Sidebar
**Learning:** In a builder-style application with a large centralized state, editing one section causes all other sections to re-render. This leads to performance degradation as the page grows. React.memo effectively isolates these sections and prevents unnecessary re-renders.
**Action:** Always memoize independent UI sections that are rendered from a large, frequently updated shared state object.
