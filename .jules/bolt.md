## 2025-05-14 - ReferenceError: window is not defined in Next.js (SSR)
**Learning:** Accessing the `window` object directly in a component body or during initialization in a Next.js (App Router) project causes a `ReferenceError` during the Server-Side Rendering (SSR) or pre-rendering phase.
**Action:** Always check if `typeof window !== 'undefined'` or use the `useEffect` hook to ensure code that depends on browser-only globals (like `window`, `document`, or custom debugging flags) only runs on the client.
