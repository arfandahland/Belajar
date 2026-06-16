## 2025-06-13 - [Centralized state re-render bottleneck]
**Learning:** In builder-style applications with a large centralized state, any granular update triggers a re-render of the entire preview pane. React.memo is highly effective here as most sections are independent and their props remain referentially equal if not directly edited.
**Action:** Always check for React.memo opportunities in preview/display sections of builder UIs.
