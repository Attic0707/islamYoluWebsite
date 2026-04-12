# İslam Yolu Website — Improvement Roadmap

## Goal
Increase organic traffic to islam-yolu.com and maximize app downloads (App Store + Google Play), while integrating social media presence (Facebook & TikTok).

---

## Current State Analysis

### What exists:
- 18 static HTML pages: TR + EN versions of index, blog, privacy, support, terms + 8 blog articles
- Premium dark green/gold Islamic theme with geometric SVG background patterns
- App Store & Google Play download links with SVG badge buttons
- Full SEO foundation: meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- sitemap.xml (with hreflang annotations), robots.txt, canonical URLs
- Blog with 4 articles in TR + 4 matching EN articles
- Social media integration (Facebook & TikTok) in footer + dedicated section
- Scroll animations, mobile hamburger menu, back-to-top button
- GA4 + Microsoft Clarity analytics with app_download_click conversion events
- Social proof section (stats + testimonials) on homepage
- manifest.json, PWA-ready

### What's remaining:
- **Content**: Ramazan article, city-specific landing pages, comparison article
- **Growth**: Smart App Banner, Facebook Pixel, TikTok Pixel, Apple Search Ads, Ramadan campaign
- **ASO**: Better screenshots, preview video, in-app rating prompt
- **Assets**: og-image.png

---

## Phase 1: SEO Foundation — COMPLETE

### 1.1 Meta Tags & Open Graph
- [x] Add Open Graph tags to all pages (og:title, og:description, og:image, og:url, og:type)
- [x] Add Twitter Card meta tags
- [x] Add canonical URLs to all pages
- [x] Improve page titles with target keywords (e.g., "Ezan Vakitleri", "Namaz Hatırlatıcı", "Kuran Oku")
- [x] Add hreflang tags (tr primary, potentially en later)
- [x] Add meta keywords relevant to Islamic apps in Turkish

### 1.2 Structured Data (JSON-LD)
- [x] Add SoftwareApplication schema to index.html (app name, rating, download links, price)
- [x] Add Organization schema (brand info)
- [x] Add FAQPage schema to the FAQ section (Google will display these in search results)
- [x] Add BreadcrumbList schema to all pages
- [x] Add WebSite schema with SearchAction

### 1.3 Sitemap & Robots
- [x] Create sitemap.xml with all pages (including 4 blog articles)
- [x] Create robots.txt allowing all crawlers + sitemap reference

### 1.4 Favicon & App Icons
- [x] Add favicon using appIcon.png
- [x] Add apple-touch-icon using appIcon.png
- [x] Add manifest.json for PWA-readiness

---

## Phase 2: Content & Social Media Integration — MOSTLY COMPLETE

### 2.1 Social Media Links
- [x] Add Facebook and TikTok links to footer with icons
- [x] Add a "Bizi Takip Et" (Follow Us) section on the homepage
- [x] Add social sharing meta tags so shared links look great on Facebook/TikTok

### 2.2 Blog / Articles Page (Organic Traffic Engine)
- [x] Create a blog index page (blog.html) with card layout
- [x] Create article template structure with full SEO (meta, OG, JSON-LD, breadcrumbs)
- [x] Write seed content:
  - [x] "Ezan vakitlerini telefondan nasıl takip edersiniz?"
  - [x] "Günlük Kuran okuma alışkanlığı nasıl kazanılır?"
  - [x] "Namaz hatırlatıcı uygulaması neden önemli?"
  - [x] "İslami yaşam için dijital araçlar"
  - [ ] "Ramazan'a hazırlık: En iyi mobil uygulamalar"
- [x] Add blog link to navigation on all pages

### 2.3 Enhanced Homepage Content
- [x] Add a "Nasıl Çalışır?" (How It Works) section with 3 steps
- [x] Add a download statistics / social proof section
- [x] Add a "Bizi Takip Et" section with Facebook & TikTok links
- [x] Strengthen CTA buttons with app store icon SVGs
- [x] Add a testimonial / review section

---

## Phase 3: Visual & UX Improvements — MOSTLY COMPLETE

### 3.1 Design Enhancements
- [x] Add App Store and Google Play SVG icon buttons
- [x] Add scroll fade-in animations (IntersectionObserver based)
- [x] Add Islamic geometric SVG background pattern (8-pointed star + arabesque)
- [x] Add ornamental gold star dividers between sections
- [x] Add Inter + Amiri (Arabic serif) font pairing
- [x] Add hover lift effects on all cards
- [x] Add decorative glow effects (hero card, CTA section)
- [x] Improve header with glass-blur effect
- [x] Brand mark shows appIcon.png with text fallback
- [x] Improve mobile hamburger menu (currently nav wraps on small screens)
- [x] Add a "back to top" button

### 3.2 Performance
- [ ] Minify CSS for production
- [x] Add preconnect hints (Google Fonts)
- [ ] Ensure all CSS is above-the-fold optimized
- [ ] Add `loading="lazy"` to any images added later

---

## Phase 4: Growth & Analytics (Ongoing)

### 4.1 Analytics Setup
- [x] Add Google Analytics 4 (GA4) snippet — replace G-XXXXXXXXXX with real ID
- [x] Add Microsoft Clarity snippet — replace XXXXXXXXXX with real Project ID (heatmaps + sessions)
- [ ] Add Facebook Pixel placeholder for ad tracking
- [ ] Add TikTok Pixel placeholder

### 4.2 Conversion Optimization
- [ ] A/B test different hero copy
- [ ] Add deep links for app-specific pages
- [ ] Create a QR code section for easy mobile scanning
- [ ] Add app screenshots carousel (when assets are available)

### 4.3 Content SEO Expansion
- [ ] Build a Ramazan (Ramadan) dedicated landing page — seasonal, very high traffic spike
- [ ] Create comparison article ("En İyi Ezan Vakitleri Uygulaması 2026") — captures high-intent search
- [ ] Create city-specific prayer time landing pages (İstanbul, Ankara, İzmir) — massive local SEO volume
- [x] English version for broader reach (TR/EN bilingual site done)
- [ ] Arabic version for largest Muslim language market (long-term)

### 4.4 Website → App Conversion
- [ ] Add Smart App Banner (`<meta name="apple-itunes-app">`) — shows native iOS download prompt to mobile visitors
- [ ] Add Android Smart Banner (custom JS banner for Android visitors to website)
- [ ] Add QR code section on homepage — for desktop visitors to scan and download
- [ ] Add app screenshots carousel on homepage (when assets are available)
- [ ] Create a dedicated `/download` landing page with feature highlights + both store CTAs

### 4.5 Paid User Acquisition
- [ ] **Apple Search Ads** — highest ROI paid channel for apps; target "ezan vakitleri", "namaz hatırlatıcı", "prayer times app" keywords; very high intent, lower competition than Meta
- [ ] Facebook Pixel integration (already in plan) → enables Meta App Install Ads retargeting
- [ ] TikTok Pixel integration (already in plan) → enables TikTok App Install campaign
- [ ] Meta (Facebook/Instagram) App Install Ads — target Muslims by religious interest (prayer, mosque, Quran)
- [ ] Google Universal App Campaigns (UAC) — shown across Google Search, YouTube, Play Store simultaneously

### 4.6 ASO (App Store Optimization) — App-side
> These are changes in App Store Connect / Google Play Console, not the website — but they are the #1 driver of organic downloads.
- [ ] Audit and optimize app title & subtitle with target keywords ("Ezan Vakitleri · Namaz Hatırlatıcı")
- [ ] Create 5–8 professional screenshots showing key features — this is the biggest conversion factor on the store listing
- [ ] Record a 15–30 second preview/promo video for both stores
- [ ] A/B test screenshots and icon using App Store Connect Product Page Optimization
- [ ] Add in-app rating prompt (SKStoreReviewAPI / Play Core) at a high-satisfaction moment (e.g., after successfully seeing prayer times for the first time, or after reading 5 verses)
- [ ] Respond to all App Store / Play Store reviews publicly — signals active developer, improves ranking
- [ ] Localize App Store listing to Arabic + English subtitles

### 4.7 Ramadan Campaign (Annual — biggest opportunity)
> Ramadan is when Islamic app downloads spike 3–5×. Plan this 4–6 weeks in advance.
- [ ] Ramazan landing page (islam-yolu.com/ramazan) with iftar/sahur time focus + download CTA
- [ ] Ramazan blog article (TR + EN) — "Ramazan'a hazırlık" — targets high-traffic seasonal search
- [ ] App Store screenshots swap for Ramadan (add iftar countdown, sahur reminder visual)
- [ ] Social media content calendar for Ramadan (30 days of posts scheduled in advance)
- [ ] Paid ads budget increase during Ramadan window (~2 weeks before to 2 weeks after start)

### 4.8 Community & Word of Mouth
- [ ] Create a printable QR code poster/card (A5) for distribution at mosques and Islamic centers
- [ ] Engage in relevant communities: Reddit (r/islam, r/Muslim), Facebook Islamic groups — share helpful blog posts (not spam)
- [ ] Reach out to Islamic lifestyle bloggers / YouTubers for app mentions
- [ ] Add "Share this app" button or deeplink inside the app itself

### 4.9 Assets Needed
- [ ] Create og-image.png from og-image-template.html (screenshot at 1200x630)
- [ ] Professional app screenshots (5+ per store, localized TR/EN)
- [ ] 30-second preview video for App Store / Google Play

---

## Priority Order (Updated)

| Priority | Task | Impact | Effort | Status |
|----------|------|--------|--------|--------|
| 🔴 P0 | SEO meta tags + structured data | Very High | Low | DONE |
| 🔴 P0 | sitemap.xml + robots.txt | High | Very Low | DONE |
| 🔴 P0 | Social media links (FB + TikTok) | High | Low | DONE |
| 🟠 P1 | Blog page + articles (TR + EN) | Very High | High | DONE |
| 🟠 P1 | Enhanced homepage + social proof | High | Medium | DONE |
| 🟠 P1 | Visual upgrade + UX (hamburger, back-to-top) | High | Medium | DONE |
| 🟠 P1 | Analytics (GA4 + Clarity + conversion events) | Very High | Low | DONE |
| 🟠 P1 | English version (full bilingual site) | High | High | DONE |
| 🟡 P2 | **Smart App Banner** (mobile web → app, 1 line) | High | Very Low | DONE |
| 🟡 P2 | **Apple Search Ads** (highest intent paid channel) | Very High | Medium | TODO |
| 🟡 P2 | **ASO: screenshots + subtitle keywords** (app-side) | Very High | Medium | TODO |
| 🟡 P2 | **In-app rating prompt** (review flywheel) | High | Low | TODO |
| 🟡 P2 | Ramazan landing page + campaign | Very High | Medium | TODO |
| 🟡 P2 | og-image.png asset creation | Medium | Low | Template ready |
| ⚪ P3 | Facebook Pixel + Meta App Install Ads | High | Low | TODO |
| ⚪ P3 | TikTok Pixel + TikTok App Install Ads | High | Low | TODO |
| ⚪ P3 | Ramazan blog article (TR + EN) | Medium | Medium | TODO |
| ⚪ P3 | City-specific prayer time pages (SEO) | High | Medium | TODO |
| ⚪ P3 | Comparison article ("en iyi ezan uygulaması") | High | Medium | TODO |
| ⚪ P3 | QR code section on homepage | Medium | Low | TODO |
| ⚪ P3 | /download dedicated landing page | Medium | Low | DONE |
| ⚪ P4 | App screenshots carousel (website) | Medium | Medium | TODO |
| ⚪ P4 | App preview video (store listing) | High | High | TODO |
| ⚪ P4 | Mosque/community QR poster (printable) | Medium | Low | TODO |
| ⚪ P4 | Arabic localization (app + site) | Very High | Very High | Future |

---

## Key Insight: Where Downloads Actually Come From

1. **App Store search (ASO)** — ~60% of app installs come from store search. This is the highest leverage area. Better screenshots + subtitle keywords + reviews = more organic installs on autopilot.
2. **Apple Search Ads** — People searching "prayer times app" or "ezan vakitleri" are ready to install. Very low CPA compared to Meta ads.
3. **Ramadan spike** — One well-executed Ramadan campaign can double your total install base. Plan 6 weeks ahead.
4. **Web → App funnel** — The website already gets visits. Smart App Banner converts those mobile visitors for free.
5. **Review flywheel** — More reviews → higher store ranking → more organic visibility → more reviews. The in-app rating prompt starts this loop.

## Notes
- The site is pure static HTML/CSS/JS — no build step needed, changes deploy immediately
- Bilingual site: Turkish (primary) + English (secondary), both fully SEO-optimized
- App links: [App Store](https://apps.apple.com/us/app/islam-yolu/id6755595522) | [Google Play](https://play.google.com/store/apps/details?id=com.tavanarasi.islamyolu)
- Social: [Facebook](https://www.facebook.com/share/1E1125eAk6/?mibextid=wwXIfr) | [TikTok](https://www.tiktok.com/@islamyoluapp)
- OG image template available at og-image-template.html — open in browser and screenshot at 1200x630
