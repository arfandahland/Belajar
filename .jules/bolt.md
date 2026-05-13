## 2025-05-15 - Optimizing Landing Page Builder Real-time Editor
**Learning:** In a landing page builder where state is centralized in a parent component (Home), every keystroke in the Sidebar triggers a re-render of the entire preview area. Wrapping large section components (Hero, Features, etc.) in `React.memo` effectively isolates these re-renders, ensuring only the section being edited is updated.
**Action:** Always use `React.memo` for top-level UI sections in real-time editors to maintain a smooth user experience as the page grows in complexity.
