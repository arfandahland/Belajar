## 2025-05-15 - Optimizing Real-time Editor Responsiveness

**Learning:** In builder-style applications where a central state drives multiple complex preview components, a single keystroke can trigger a waterfall of re-renders across the entire preview area. React 19's Strict Mode in development can amplify this, making each component render twice per change.

**Action:** Use `React.memo` on expensive section components to isolate re-renders to only the affected section. Additionally, implement `useDeferredValue` for the preview data to ensure the UI (inputs) remains high-priority and responsive, while the heavier preview updates are handled during idle time.
