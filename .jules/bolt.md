## 2025-05-15 - Optimizing Real-time Builder Re-renders
**Learning:** In applications with centralized state and many independent UI sections (like a builder), a single field update can trigger a cascade of unnecessary re-renders across all sections. React.memo is highly effective here because the state update logic typically preserves reference equality for unmodified data sections (via object spreading).
**Action:** Always wrap independent preview sections in React.memo to isolate them from unrelated state changes in the parent component.

## 2025-05-15 - Lucide Icons Tree-shaking Caveat
**Learning:** Using `import * as Icons from 'lucide-react'` in a dynamic builder context makes tree-shaking difficult. However, replacing it with a hardcoded icon map is a breaking change if users can choose any icon.
**Action:** Before optimizing wildcard icon imports, verify if the application's design allows for arbitrary icon selection or a fixed set. If arbitrary, consider dynamic imports or a more flexible tree-shaking strategy.
