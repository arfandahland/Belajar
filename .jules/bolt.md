## 2025-06-22 - [Memoization of Landing Page Sections]
**Learning:** In a landing page builder architecture where all data is managed in a single central state object, updating any field in the sidebar causes the entire state object to be recreated. Without memoization, all preview sections re-render even if their specific props haven't changed, leading to noticeable input lag as the page grows.
**Action:** Always wrap independent preview sections in `React.memo` to ensure they only re-render when their specific slice of the data changes.
