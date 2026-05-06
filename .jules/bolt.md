## 2026-05-06 - React.memo for Editor Performance

**Learning:** In a real-time landing page builder where the entire state is managed at the top level, every keystroke in the sidebar triggers a full re-render of all landing page sections. Since most sections are unrelated to the specific field being edited, this causes significant UI lag as the page grows.

**Action:** Wrap all major landing page section components in `React.memo`. In this codebase, the state update logic in `Sidebar.tsx` correctly uses object spreading to maintain reference equality for unchanged data sections, making `React.memo` highly effective (reducing re-renders by ~83% in a typical 6-section page). Always verify that parent state updates don't break reference equality before relying on `React.memo`.
