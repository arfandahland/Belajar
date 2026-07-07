## 2025-06-22 - Optimizing Builder Architectures with React.memo
**Learning:** In applications where a global state drives multiple independent UI sections (like a landing page builder), updating a single field triggers a re-render of the entire preview pane. This scales O(N) where N is the number of sections, causing noticeable lag as the page grows.
**Action:** Wrap top-level section components in `React.memo` and ensure they receive primitive props or memoized objects from the parent. This reduces re-renders to O(1) for the section being edited.
