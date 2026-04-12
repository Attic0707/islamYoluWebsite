/**
 * İslam Yolu — analytics.js
 *
 * Handles:
 *   1. App Store / Google Play click event tracking (fires GA4 + Clarity events)
 *   2. Back-to-top button (injected dynamically)
 *   3. Mobile hamburger menu toggle
 *
 * NOTE: Before going live, replace the placeholder IDs in the <head> analytics
 * snippets of every HTML page:
 *   GA4     → replace  G-XXXXXXXXXX  with your Measurement ID from analytics.google.com
 *   Clarity → replace  XXXXXXXXXX    with your Project ID from clarity.microsoft.com
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     1. App Store / Google Play click tracking
     Fires a GA4 custom event + Clarity custom event
     when any link pointing to either store is clicked.
     Targets by URL so it catches store-btn, primary-btn,
     and plain text links in blog articles alike.
     In GA4 you'll see this under Events → app_download_click.
     Set it as a Conversion to track it as a goal.
  ───────────────────────────────────────────── */
  document.querySelectorAll(
    'a[href*="apps.apple.com/us/app/islam-yolu"], ' +
    'a[href*="play.google.com/store/apps/details"]'
  ).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var store = (btn.href && btn.href.indexOf('apple.com') !== -1)
        ? 'app_store'
        : 'google_play';

      // Google Analytics 4
      if (typeof gtag === 'function') {
        gtag('event', 'app_download_click', {
          event_category: 'conversion',
          event_label: store,
          value: 1
        });
      }

      // Microsoft Clarity custom event (visible in Clarity dashboard filters)
      if (typeof clarity === 'function') {
        clarity('event', 'app_download_' + store);
      }
    });
  });

  /* ─────────────────────────────────────────────
     2. Back-to-top button
     Injected into <body>; styles are in styles.css.
  ───────────────────────────────────────────── */
  var backBtn = document.createElement('button');
  backBtn.className = 'back-to-top';
  backBtn.setAttribute('aria-label', 'Yukarı çık');
  backBtn.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">' +
    '<path d="M8 3.8 2.6 9.2l1.4 1.4L8 6.6l4 4 1.4-1.4z"/>' +
    '</svg>';
  document.body.appendChild(backBtn);

  window.addEventListener('scroll', function () {
    backBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─────────────────────────────────────────────
     3. Mobile hamburger menu
  ───────────────────────────────────────────── */
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');

  if (hamburger && nav) {
    function openMenu() {
      nav.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is tapped (important on mobile)
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking anywhere outside the menu
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ─────────────────────────────────────────────
     4. Android Smart Banner
     Shows a dismissible install prompt to Android visitors.
     iOS users see the native banner via the <meta> tag in <head>.
     Dismissed state stored in localStorage so it doesn't reappear.
  ───────────────────────────────────────────── */
  (function () {
    if (!/Android/i.test(navigator.userAgent)) return;
    if (localStorage.getItem('iy_app_banner_dismissed')) return;

    var isEn     = document.documentElement.lang === 'en';
    var appName  = isEn ? 'Islam Yolu'         : 'İslam Yolu';
    var subline  = isEn ? 'Free · Google Play' : 'Ücretsiz · Google Play';
    var btnLabel = isEn ? 'Install'            : 'İndir';
    var closeLabel = isEn ? 'Dismiss'          : 'Kapat';

    var wrap = document.createElement('div');
    wrap.id = 'iy-app-banner';
    wrap.setAttribute('role', 'banner');
    wrap.style.cssText =
      'position:relative;z-index:200;display:flex;align-items:center;gap:10px;' +
      'padding:10px 14px;' +
      'background:linear-gradient(180deg,rgba(11,33,25,.98),rgba(6,15,11,.98));' +
      'border-bottom:1px solid rgba(214,182,109,.18);' +
      'font-family:Inter,system-ui,-apple-system,sans-serif;';

    wrap.innerHTML =
      '<img src="https://islam-yolu.com/appIcon.png" width="40" height="40"' +
        ' style="border-radius:10px;flex-shrink:0" alt=""' +
        ' onerror="this.style.display=\'none\'">' +
      '<div style="flex:1;min-width:0;overflow:hidden">' +
        '<strong style="display:block;font-size:13px;font-weight:700;color:#eef7f0;' +
          'line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
          appName + '</strong>' +
        '<span style="font-size:12px;color:#b7d1c1">' + subline + '</span>' +
      '</div>' +
      '<a id="iy-banner-install"' +
        ' href="https://play.google.com/store/apps/details?id=com.tavanarasi.islamyolu"' +
        ' style="flex-shrink:0;padding:7px 14px;border-radius:10px;font-size:13px;' +
          'font-weight:700;color:#0b2119;background:linear-gradient(135deg,#d6b66d,#bda25d);' +
          'text-decoration:none">' +
        btnLabel + '</a>' +
      '<button id="iy-banner-close" aria-label="' + closeLabel + '"' +
        ' style="flex-shrink:0;background:none;border:none;color:#86aa98;' +
          'cursor:pointer;padding:4px 6px;font-size:22px;line-height:1;margin-left:2px">' +
        '&times;</button>';

    document.body.insertBefore(wrap, document.body.firstChild);

    document.getElementById('iy-banner-close').addEventListener('click', function () {
      wrap.style.display = 'none';
      localStorage.setItem('iy_app_banner_dismissed', '1');
    });

    document.getElementById('iy-banner-install').addEventListener('click', function () {
      localStorage.setItem('iy_app_banner_dismissed', '1');
      if (typeof gtag === 'function') {
        gtag('event', 'app_download_click', {
          event_category: 'conversion',
          event_label: 'android_banner',
          value: 1
        });
      }
    });
  })();

})();
