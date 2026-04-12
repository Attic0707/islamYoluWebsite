# İslam Yolu Website — Improvement Roadmap

## Goal
Increase organic traffic to islam-yolu.com and maximize app downloads (App Store + Google Play), while integrating social media presence (Facebook & TikTok).

---

## Current State Analysis

### What exists:
- 8+ static HTML pages: index, blog index, 4 blog articles, privacy, support, terms
- Premium dark green/gold Islamic theme with geometric SVG background patterns
- App Store & Google Play download links with SVG badge buttons
- Full SEO foundation: meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- sitemap.xml, robots.txt, canonical URLs, hreflang tags
- Blog with 4 SEO-optimized articles
- Social media integration (Facebook & TikTok) in footer + dedicated section
- Scroll animations (fade-in on scroll)
- Ornamental Islamic dividers between sections
- Inter + Amiri font pairing

### What's remaining:
- **SEO**: WebSite schema with SearchAction, manifest.json
- **Content**: 1 more blog article (Ramazan), download stats / social proof
- **Visual**: Mobile hamburger menu, back-to-top button
- **Growth**: Analytics (GA4, FB Pixel, TikTok Pixel), OG image asset

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
- [ ] Add a download statistics / social proof section
- [x] Add a "Bizi Takip Et" section with Facebook & TikTok links
- [x] Strengthen CTA buttons with app store icon SVGs
- [ ] Add a testimonial or review section

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

### 4.3 Future SEO Content
- [ ] Build a Ramazan (Ramadan) landing page seasonally
- [ ] Create comparison pages ("İslam Yolu vs diğer uygulamalar")
- [ ] Add a "Günün Ayeti" (Verse of the Day) widget that updates
- [ ] Consider English version for broader reach

### 4.4 Assets Needed
- [ ] Create og-image.png from og-image-template.html (screenshot at 1200x630)
- [ ] Ensure appIcon.png is in project root (favicon + brand mark depend on it)

---

## Priority Order (Updated)

| Priority | Task | Impact | Effort | Status |
|----------|------|--------|--------|--------|
| 🔴 P0 | SEO meta tags + structured data | Very High | Low | DONE |
| 🔴 P0 | sitemap.xml + robots.txt | High | Very Low | DONE |
| 🔴 P0 | Social media links (FB + TikTok) | High | Low | DONE |
| 🟠 P1 | Blog page + 4 articles | Very High | High | DONE |
| 🟠 P1 | Enhanced homepage (how it works, CTA) | High | Medium | DONE |
| 🟠 P1 | Visual upgrade (patterns, animations, fonts) | High | Medium | DONE |
| 🟡 P2 | Favicon + app icon | Medium | Low | DONE |
| 🟡 P2 | og-image.png asset creation | Medium | Low | Template ready |
| 🟡 P2 | Mobile hamburger menu | Medium | Medium | DONE |
| 🟡 P2 | Analytics (GA4 + Clarity) — IDs needed | Medium | Low | CODE READY |
| ⚪ P3 | Ramazan blog article | Medium | Medium | TODO |
| ⚪ P3 | Social proof / testimonials | Medium | Medium | TODO |
| ⚪ P3 | manifest.json (PWA) | Low | Low | TODO |
| ⚪ P3 | English version | High | High | TODO |

---

## Notes
- The site is pure static HTML/CSS/JS — no build step needed, changes deploy immediately
- All content is in Turkish (lang="tr") targeting Turkish-speaking Muslim audience
- App links: [App Store](https://apps.apple.com/us/app/islam-yolu/id6755595522) | [Google Play](https://play.google.com/store/apps/details?id=com.tavanarasi.islamyolu)
- Social: [Facebook](https://www.facebook.com/share/1E1125eAk6/?mibextid=wwXIfr) | [TikTok](https://www.tiktok.com/@islamyoluapp)
- OG image template available at og-image-template.html — open in browser and screenshot at 1200x630
