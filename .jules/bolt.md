## 2025-06-22 - Tree-shaking Icon Imports in Landing Page Builder

**Learning:** Importing icon libraries using namespace wildcard syntax (`import * as Icons from 'lucide-react'`) prevents tree-shaking and causes bundlers to include all 1000+ icon components in the client JavaScript bundle. Using explicit named imports alongside a static map (`ICON_MAP`) drastically reduces bundle size while preserving dynamic icon selection.

**Action:** Always prefer explicit named icon imports and a static lookup object/type union instead of wildcard namespace imports when using icon libraries like `lucide-react`.
