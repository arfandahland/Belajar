# Bolt's Performance Journal

## 2025-06-22 - Identifying Re-render Bottleneck in Landing Page Builder
**Learning:** In a centralized state architecture like this landing page builder, any state update in the parent component (Home) triggers a re-render of all section components (Hero, Features, etc.) because they are passed props from that state. Even if only one section's data changed, all others re-render by default.
**Action:** Use `React.memo` on section components to ensure they only re-render when their specific props change. This is especially important for a "real-time" editor experience to keep the interface snappy.
