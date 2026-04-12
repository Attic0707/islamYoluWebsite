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

})();
