## 2025-05-14 - Optimizing Real-time Preview with React.memo and useDeferredValue
**Learning:** In applications with a split-screen editor and live preview, updating the entire preview pane on every keystroke in the sidebar can cause noticeable input lag as the main thread is blocked by rendering the preview.
**Action:** Use `useDeferredValue` for the state passed to the preview components to decouple input updates from preview rendering. Additionally, wrap preview section components in `React.memo` to skip re-rendering sections that haven't changed.
