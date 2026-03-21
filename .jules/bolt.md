## 2025-05-15 - Memoizing Landing Page Sections

**Learning:** In applications using a large, centralized state object (like the `LandingPageData` in `Home`), any small update to a single field (e.g., editing the Hero title in the Sidebar) triggers a re-render of the entire component tree. This is especially impactful when the UI is split between an editor and a live preview, as the preview area can contain many complex sections.

**Action:** Wrap independent UI sections (Hero, Features, Pricing, etc.) in `React.memo`. This ensures they only re-render if their specific slice of the state actually changes, significantly improving the responsiveness of the editor experience. Always set `displayName` to maintain visibility in React DevTools.
