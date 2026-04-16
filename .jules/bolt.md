## 2025-05-15 - State Updates in Real-time Builder
**Learning:** In a builder application where global state is managed at the root, updating one field (e.g., Hero title) triggers a re-render of the entire preview area. Since the state updates in the Sidebar use nested object spreading (maintaining reference equality for unchanged sections), `React.memo` is highly effective here.
**Action:** Always wrap preview section components in `React.memo` to ensure that only the section being edited re-renders, significantly improving editor responsiveness.
