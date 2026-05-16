## 2025-05-15 - Centralized state re-render bottleneck
**Learning:** In builder-style applications where a central state resides in a parent component, every child re-renders on every keystroke in the Sidebar. React.memo is highly effective here, reducing re-renders from O(N) sections to O(1) targeted section.
**Action:** Always wrap independent UI sections in React.memo when using a centralized "source of truth" state pattern.

## 2025-05-15 - Tree-shaking Lucide icons
**Learning:** Wildcard imports like `import * as Icons from 'lucide-react'` prevent tree-shaking and bloat the bundle. Using named imports and a static map significantly reduces the JavaScript footprint.
**Action:** Use named imports and a local mapping object for dynamic icon rendering in performance-critical components.
