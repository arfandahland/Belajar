## 2025-05-14 - React Dev Mode Re-renders
**Learning:** React components in this project's development environment may trigger console logs twice during re-renders due to React's StrictMode behavior. This doubling is expected in development and should be factored into performance baselines.
**Action:** When verifying optimizations via console logs, focus on the *relative* reduction in logs (e.g., specific sections stopping renders entirely) rather than the absolute count of logs per component.
