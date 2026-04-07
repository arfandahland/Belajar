## 2025-05-14 - Selective State Spreading for Memoization
**Learning:** The real-time editor's performance relies on the Sidebar's state update pattern, which uses selective spreading to maintain reference equality for unmodified sections. This allows React.memo on preview components to successfully skip re-renders even though they receive props from a shared parent state.
**Action:** Always ensure state updates in editors maintain reference equality for unmodified data branches to enable effective memoization of downstream components.
