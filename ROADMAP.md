# İslam Yolu Website — Improvement Roadmap

## Goal
Increase organic traffic to islam-yolu.com and maximize app downloads (App Store + Google Play), while integrating social media presence (Facebook & TikTok).

---

## Current State Analysis

### What exists:
- 4 static HTML pages: index, privacy, support, terms
- Dark green/gold Islamic theme (CSS)
- App Store & Google Play download links
- Basic meta description on index only

### What's missing (critical):
- **SEO**: No structured data (JSON-LD), no Open Graph tags, no Twitter Cards, no sitemap.xml, no robots.txt, no canonical URLs, no hreflang tags
- **Social Media**: No Facebook or TikTok links anywhere on the site
- **Content**: No blog or article pages — zero organic content strategy
- **Technical**: No favicon, no performance optimizations, no analytics setup guidance
- **Conversion**: No social proof, no download stats, no testimonials, weak CTAs

---

## Phase 1: SEO Foundation (Critical — Immediate Impact)

### 1.1 Meta Tags & Open Graph
- [ ] Add Open Graph tags to all pages (og:title, og:description, og:image, og:url, og:type)
- [ ] Add Twitter Card meta tags
- [ ] Add canonical URLs to all pages
- [ ] Improve page titles with target keywords (e.g., "Ezan Vakitleri", "Namaz Hatırlatıcı", "Kuran Oku")
- [ ] Add hreflang tags (tr primary, potentially en later)
- [ ] Add meta keywords relevant to Islamic apps in Turkish

### 1.2 Structured Data (JSON-LD)
- [ ] Add SoftwareApplication schema to index.html (app name, rating, download links, price)
- [ ] Add Organization schema (brand info)
- [ ] Add FAQPage schema to the FAQ section (Google will display these in search results)
- [ ] Add BreadcrumbList schema to all pages
- [ ] Add WebSite schema with SearchAction

### 1.3 Sitemap & Robots
- [ ] Create sitemap.xml with all pages
- [ ] Create robots.txt allowing all crawlers + sitemap reference

### 1.4 Favicon & App Icons
- [ ] Add SVG favicon (gold IY monogram matching the brand-mark)
- [ ] Add apple-touch-icon
- [ ] Add manifest.json for PWA-readiness

---

## Phase 2: Content & Social Media Integration

### 2.1 Social Media Links
- [ ] Add Facebook and TikTok links to header nav or a social bar
- [ ] Add social media links to footer
- [ ] Add a "Bizi Takip Et" (Follow Us) section on the homepage
- [ ] Add social sharing meta tags so shared links look great on Facebook/TikTok

### 2.2 Blog / Articles Page (Organic Traffic Engine)
- [ ] Create a blog index page (blog.html)
- [ ] Create article template structure
- [ ] Write seed content ideas:
  - "Ezan vakitlerini telefondan nasıl takip edersiniz?" (How to track prayer times on phone)
  - "Günlük Kuran okuma alışkanlığı nasıl kazanılır?" (How to build daily Quran reading habit)
  - "Ramazan'a hazırlık: En iyi mobil uygulamalar" (Ramadan prep: Best mobile apps)
  - "Namaz hatırlatıcı uygulaması neden önemli?" (Why prayer reminder apps matter)
  - "İslami yaşam için dijital araçlar" (Digital tools for Islamic life)
- [ ] Add blog link to navigation

### 2.3 Enhanced Homepage Content
- [ ] Add a "Nasıl Çalışır?" (How It Works) section with 3 steps
- [ ] Add a download statistics / social proof section
- [ ] Add a "Bizi Takip Et" section with Facebook & TikTok embeds or links
- [ ] Strengthen CTA buttons with app store badges (SVG)
- [ ] Add a testimonial or review section

---

## Phase 3: Visual & UX Improvements

### 3.1 Design Enhancements
- [ ] Add official App Store and Google Play badge SVGs (instead of text-only buttons)
- [ ] Add subtle animations (fade-in on scroll for sections)
- [ ] Improve mobile hamburger menu (currently nav wraps awkwardly on small screens)
- [ ] Add a "back to top" button
- [ ] Add loading state / smooth scroll behavior

### 3.2 Performance
- [ ] Minify CSS for production
- [ ] Add preconnect hints for external resources
- [ ] Ensure all CSS is above-the-fold optimized
- [ ] Add `loading="lazy"` to any images added later

---

## Phase 4: Growth & Analytics (Ongoing)

### 4.1 Analytics Setup
- [ ] Add Google Analytics 4 (GA4) snippet placeholder
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

---

## Priority Order

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 🔴 P0 | SEO meta tags + structured data | Very High | Low |
| 🔴 P0 | sitemap.xml + robots.txt | High | Very Low |
| 🔴 P0 | Social media links (FB + TikTok) | High | Low |
| 🟠 P1 | Blog page structure | Very High | Medium |
| 🟠 P1 | Enhanced homepage (social proof, how it works) | High | Medium |
| 🟠 P1 | App store badge SVGs | Medium | Low |
| 🟡 P2 | Favicon + icons | Medium | Low |
| 🟡 P2 | Visual animations | Low | Medium |
| 🟡 P2 | Analytics placeholders | Medium | Low |
| ⚪ P3 | Blog seed articles | Very High | High |
| ⚪ P3 | English version | High | High |

---

## Notes
- The site is pure static HTML/CSS — no build step needed, changes deploy immediately
- All content is in Turkish (lang="tr") targeting Turkish-speaking Muslim audience
- App links: [App Store](https://apps.apple.com/us/app/islam-yolu/id6755595522) | [Google Play](https://play.google.com/store/apps/details?id=com.tavanarasi.islamyolu)
- Social: Facebook and TikTok accounts exist (URLs to be provided by developer)
