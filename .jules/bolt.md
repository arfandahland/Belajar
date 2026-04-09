## 2026-04-09 - Memoizing Preview Sections and useDeferredValue
**Learning:** In a real-time editor-preview interface, updating the entire landing page state on every keystroke causes all preview sections to re-render, leading to input lag.
**Action:** Use `React.memo` for all major preview sections and `useDeferredValue` for the data passed to the preview area to prioritize sidebar responsiveness.
