## 2025-05-14 - Selective Icon Imports for Performance
**Learning:** Using `import * as Icons from 'lucide-react'` prevents tree-shaking and significantly bloats the bundle size, even in a small application. It's a major performance bottleneck.
**Action:** Always use named imports for specific icons and maintain a local mapping if dynamic icon rendering is required.

## 2025-05-14 - React.memo and Prop Stability
**Learning:** `React.memo` is effective for preventing re-renders in a real-time editor when the parent state updates, but its effectiveness depends on the stability of props passed from the parent.
**Action:** When memoizing components that receive objects or arrays, ensure the parent component provides stable references (e.g., by utilizing nested state updates that preserve unchanged object references).
