## 2025-06-13 - Centralized State Re-render Pattern
**Learning:** In builder-style applications where a single large state object controls multiple UI sections, any minor update to one section triggers a full re-render of all sections if they are not memoized.
**Action:** Use React.memo() on independent UI sections to prevent unnecessary re-renders when unrelated parts of the state tree change.
