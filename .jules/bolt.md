## 2025-05-15 - Real-time Editor Optimization
**Learning:** In a landing page builder with centralized state, every small update to one section triggers a full re-render of all other sections. Memoizing independent preview components is critical for maintaining editor performance.
**Action:** Use React.memo on all independent UI sections in real-time builders to prevent unnecessary re-renders.

**Learning:** Wildcard imports from `lucide-react` (e.g., `import * as Icons from 'lucide-react'`) prevent tree-shaking and bloat the bundle.
**Action:** Use named imports and a static mapping object for dynamic icon rendering while maintaining tree-shaking.
