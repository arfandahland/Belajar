## 2025-05-15 - Optimizing Real-time Editor Responsiveness

**Learning:** In applications where a single state object drives both an editor (sidebar) and a heavy preview area, every keystroke in the editor can cause the entire preview to re-render synchronously. This leads to input lag as the main thread is blocked by the preview's DOM updates.

**Action:** Use `useDeferredValue` for the state passed to the preview sections. This allows React to prioritize the "urgent" update of the input fields in the sidebar, deferring the "non-urgent" re-rendering of the preview area until the main thread is free. Combine this with `React.memo` on preview sections to ensure they only re-render when their specific data actually changes, further reducing the workload for the deferred render cycle.
