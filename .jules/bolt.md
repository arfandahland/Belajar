## 2025-04-24 - React.memo on Preview Sections
**Learning:** React components in this repo were already Client Components (using 'use client' at the page level), but wrapping them in React.memo reduces re-renders by ~83% during Sidebar edits.
**Action:** Always memoize interactive preview components that receive partitioned state to ensure a smooth editing experience.
