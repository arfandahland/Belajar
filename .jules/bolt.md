## 2025-06-22 - Bottleneck in centralized state landing page builder
**Learning:** In a builder architecture where all data is managed in a single parent state, every keystroke in the sidebar triggers a full re-render of all preview sections. This scales poorly as the page grows.
**Action:** Use React.memo on preview section components. Since the parent updates state immutably, sections whose data hasn't changed will skip re-rendering, reducing work from O(N) to O(1) per keystroke (where N is the number of sections).
