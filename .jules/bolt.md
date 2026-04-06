## 2025-05-14 - Selective Memoization in Builder Pattern
**Learning:** The state update pattern in Sidebar (nested object spreading) ensures that sibling objects in the state tree maintain reference equality. This is crucial for React.memo to be effective on preview sections.
**Action:** When implementing real-time editors, ensure state updates are immutable and granular so that memoization can prevent downstream re-renders.
