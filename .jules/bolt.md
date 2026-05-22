## 2025-05-22 - Centralized State Re-render Pattern
**Learning:** In builder-style applications where a central state (e.g., in `page.tsx`) manages multiple UI sections, any update to one section's data triggers a re-render of all other sections by default.
**Action:** Use `React.memo` on independent preview sections to ensure only the modified section re-renders, significantly improving editor responsiveness.

## 2025-05-22 - Turbopack Workspace Root Error
**Learning:** Next.js 16.1.7 with Turbopack may occasionally fail with an error claiming it cannot find `next/package.json` from the project directory after environment changes.
**Action:** Delete the `.next` directory and restart the development server to clear the corrupted state.
