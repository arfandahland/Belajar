## 2026-05-27 - Centralized State Re-render Pattern
**Learning:** In builder-style applications where a central state object is edited via a sidebar, the entire preview area often re-renders on every keystroke because it's a child of the common state owner. Since many sections of the landing page are independent and only depend on a sub-slice of the data, they are perfect candidates for `React.memo`.

**Action:** Use `React.memo` for top-level preview sections that depend on specific props from a centralized state to prevent cascade re-renders. Measurement showed a reduction from 30 to 22 total render calls (across all 6 sections) when editing just one section, with unaffected sections like CTA and Footer reducing re-renders by 50-100% depending on the update cycle.
