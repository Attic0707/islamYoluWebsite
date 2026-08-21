  MEMORY.md (index)
  # Memory Index

  - [user_profile.md](user_profile.md) — App developer, Islam Yolu app, manages website + social media
  - [project_website_goals.md](project_website_goals.md) — Website SEO/traffic/download optimization project

  user_profile.md
  - Develops the "İslam Yolu" (Path of Islam) mobile app — available on both App Store and Google Play
  - Manages the app's website at islam-yolu.com
  - Actively posts daily on Facebook and TikTok to drive app usage
  - Primary goal: increase website traffic and app downloads
  - Email: islamyoluapp@gmail.com

  project_website_goals.md
  Website at islam-yolu.com — ongoing improvement project to drive app downloads and organic traffic.

  Why: Primary metric is app installs (App Store + Google Play). Site needs analytics to measure conversion funnel and SEO to attract organic traffic.
  
  Current state (2026-04-12):
  - All Phase 1 (SEO) and Phase 2 (content/social) mostly complete
  - Phase 3 (UX) now complete: hamburger menu, back-to-top button added to all pages
  - Phase 4 (Analytics) code is ready but needs IDs:
    - GA4: add Measurement ID (G-XXXXXXXX) from analytics.google.com → replace G-XXXXXXXXXX in all 9 HTML files
    - Microsoft Clarity: add Project ID from clarity.microsoft.com → replace XXXXXXXXXX in all 9 HTML files
    - App Store + Play Store clicks are tracked via analytics.js (event: app_download_click) — set as Conversion in GA4
  - Files added: analytics.js (shared JS), manifest.json (PWA)
  - Remaining TODO items: Ramazan blog article, social proof / download stats section, FB Pixel, TikTok Pixel, og-image.png

  How to apply: Prioritize conversion and analytics over visual polish. Always keep app download CTAs prominent. The next actions are: (1) plug in real GA4 + Clarity IDs,
  (2) write Ramazan article, (3) add social proof section to homepage.

  ---

  Note some of this (e.g. "Phase 4 needs IDs") may be stale — ROADMAP.md, which is now tracked in git, is the more current source of truth. On the new PC, you can just
  paste these three blocks into a message to Claude Code and ask it to save them as memory, and it'll be primed with the same context.