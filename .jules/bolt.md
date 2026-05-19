## 2025-05-22 - Optimizing Builder Re-renders and Tree-shaking

**Learning:** In builder-style applications where a central state object is updated frequently (e.g., on every keystroke in a sidebar), all components consuming that state or its sub-properties re-render by default. Wrapping independent sections in React.memo reduces re-renders by ~83% in this codebase (from 6 sections to 1 updated section). Additionally, wildcard imports from 'lucide-react' prevent tree-shaking, significantly bloating the bundle.

**Action:** Always use React.memo for independent UI sections in builder interfaces. Replace wildcard icon imports with named imports and a static map to enable tree-shaking.
