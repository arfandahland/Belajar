## 2025-06-22 - Centralized State Re-renders in Builder Architecture

**Learning:** In builder applications with a centralized state at the root (`src/app/page.tsx`), editing any single field in the sidebar updates state immutably. Without memoization, all preview section components re-render on every keystroke even if their section props remain unchanged.

**Action:** Wrap all modular preview section components in `React.memo` and set explicit `displayName`s to prevent unnecessary re-renders during live sidebar editing.
