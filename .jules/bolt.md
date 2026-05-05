## 2025-05-15 - React.memo on Landing Page Sections
**Learning:** In a real-time editor where state is shared at the root, every keystroke in the sidebar triggers a full re-render of all preview sections if they aren't memoized. React.memo successfully isolates these updates, reducing re-renders by ~83% (from 6 sections down to 1).
**Action:** Always memoize individual preview sections in landing page builders or similar real-time editors to maintain a smooth editing experience.
