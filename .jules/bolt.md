## 2025-05-15 - Memoizing Section Components
**Learning:** In a landing page builder where all section data is managed in a single parent state (App/Page), editing one field triggers a full re-render of all preview sections. This is a common bottleneck in builder architectures.
**Action:** Use `React.memo` for all independent UI sections in the preview area to ensure they only re-render when their specific props change.

## 2025-05-15 - Performance Verification
**Learning:** `React.memo` effectively reduced re-renders from 6 sections to 1 section during a targeted edit in the Sidebar. Measured ~83% reduction in section re-renders per character typed.
**Action:** Always verify memoization with console logs or profiling tools to confirm it's actually preventing renders as expected.
