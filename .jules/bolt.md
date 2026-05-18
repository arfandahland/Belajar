## 2026-05-18 - Optimized real-time editor with React.memo
**Learning:** The landing page builder uses a centralized state in the parent component. Every keystroke in the Sidebar triggers a state update, causing all preview sections to re-render by default. In a large landing page, this causes noticeable typing lag.
**Action:** Use React.memo on independent UI sections (Hero, Features, etc.) that depend on specific parts of the centralized state. This ensures that editing one section doesn't waste resources re-rendering others.
