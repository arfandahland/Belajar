## 2025-06-22 - Centralized State Re-renders in Builder Architecture

**Learning:** In landing page builder architectures where state is centralized at the root page component (`data` object), any keystroke in the sidebar causes the root state to update. Without `React.memo`, every single preview section component re-renders on every keystroke, even if that section's sub-object reference was unchanged.
**Action:** Always wrap preview section components in `React.memo` and ensure immutable state updates preserve unmodified reference identities, reducing re-renders from O(N) to O(1) per keystroke.
