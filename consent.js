/**
 * İslam Yolu — consent.js
 *
 * GDPR cookie/tracking consent gate. Must be included in <head> BEFORE any
 * analytics script. Google Analytics 4 and Microsoft Clarity are NOT loaded
 * at all until the visitor explicitly opts in — no request to
 * googletagmanager.com or clarity.ms happens before that.
 *
 * Consent choice is stored in localStorage (key: iy_consent) and can be
 * reopened at any time via window.iyReopenConsent(), wired to the "Cookie
 * Settings" link in the footer of every page.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'iy_consent';
  var CONSENT_VERSION = 1;
  var GA_ID = 'G-BCTYJ84CHM';
  var CLARITY_ID = 'wak36hg03f';

  var thisScript = document.currentScript;
  var basePath = thisScript
    ? thisScript.src.replace(/consent\.js(\?.*)?(#.*)?$/, '')
    : '';

  var isEn = document.documentElement.lang === 'en';

  var t = isEn ? {
    message: 'We use cookies to understand how visitors use this site (Google Analytics & Microsoft Clarity). These only run if you agree — see our <a href="' + basePath + 'privacy.html">Privacy Policy</a> for details.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    save: 'Save Preferences',
    necessary: 'Necessary',
    necessaryDesc: 'Required to remember your cookie choice. Always on.',
    analytics: 'Analytics',
    analyticsDesc: 'Google Analytics & Microsoft Clarity — helps us understand site usage. Off by default.',
    back: 'Back'
  } : {
    message: 'Bu siteyi nasıl kullandığınızı anlamak için çerez kullanıyoruz (Google Analytics ve Microsoft Clarity). Bunlar yalnızca onayınızla çalışır — ayrıntılar için <a href="' + basePath + 'privacy.html">Gizlilik Politikası</a>\'na bakın.',
    acceptAll: 'Tümünü Kabul Et',
    rejectAll: 'Tümünü Reddet',
    customize: 'Özelleştir',
    save: 'Tercihleri Kaydet',
    necessary: 'Gerekli',
    necessaryDesc: 'Çerez tercihinizi hatırlamak için gereklidir. Her zaman açık.',
    analytics: 'Analitik',
    analyticsDesc: 'Google Analytics ve Microsoft Clarity — site kullanımını anlamamıza yardımcı olur. Varsayılan olarak kapalı.',
    back: 'Geri'
  };

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== CONSENT_VERSION) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(analytics) {
    var record = { analytics: !!analytics, version: CONSENT_VERSION, ts: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(record)); } catch (e) {}
    return record;
  }

  function loadAnalytics() {
    if (window.__iyAnalyticsLoaded) return;
    window.__iyAnalyticsLoaded = true;

    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  var banner = null;

  function removeBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
    document.body.classList.remove('iy-consent-open');
  }

  function renderSimple(reopening) {
    removeBanner();
    banner = document.createElement('div');
    banner.className = 'iy-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', isEn ? 'Cookie consent' : 'Çerez onayı');
    banner.innerHTML =
      '<div class="iy-consent-inner">' +
        '<p class="iy-consent-text">' + t.message + '</p>' +
        '<div class="iy-consent-actions">' +
          '<button type="button" class="iy-consent-btn iy-consent-btn-ghost" data-act="customize">' + t.customize + '</button>' +
          '<button type="button" class="iy-consent-btn iy-consent-btn-ghost" data-act="reject">' + t.rejectAll + '</button>' +
          '<button type="button" class="iy-consent-btn iy-consent-btn-primary" data-act="accept">' + t.acceptAll + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    document.body.classList.add('iy-consent-open');

    banner.querySelector('[data-act="accept"]').addEventListener('click', function () {
      saveConsent(true);
      loadAnalytics();
      removeBanner();
    });
    banner.querySelector('[data-act="reject"]').addEventListener('click', function () {
      saveConsent(false);
      removeBanner();
      if (reopening) location.reload();
    });
    banner.querySelector('[data-act="customize"]').addEventListener('click', function () {
      renderCustomize(reopening);
    });
  }

  function renderCustomize(reopening) {
    removeBanner();
    var current = getConsent();
    var analyticsOn = current ? !!current.analytics : false;

    banner = document.createElement('div');
    banner.className = 'iy-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', isEn ? 'Cookie preferences' : 'Çerez tercihleri');
    banner.innerHTML =
      '<div class="iy-consent-inner">' +
        '<div class="iy-consent-row iy-consent-row-locked">' +
          '<div>' +
            '<div class="iy-consent-row-title">' + t.necessary + '</div>' +
            '<div class="iy-consent-row-desc">' + t.necessaryDesc + '</div>' +
          '</div>' +
          '<label class="iy-consent-switch iy-consent-switch-disabled">' +
            '<input type="checkbox" checked disabled />' +
            '<span class="iy-consent-slider"></span>' +
          '</label>' +
        '</div>' +
        '<div class="iy-consent-row">' +
          '<div>' +
            '<div class="iy-consent-row-title">' + t.analytics + '</div>' +
            '<div class="iy-consent-row-desc">' + t.analyticsDesc + '</div>' +
          '</div>' +
          '<label class="iy-consent-switch">' +
            '<input type="checkbox" id="iy-consent-analytics"' + (analyticsOn ? ' checked' : '') + ' />' +
            '<span class="iy-consent-slider"></span>' +
          '</label>' +
        '</div>' +
        '<div class="iy-consent-actions">' +
          '<button type="button" class="iy-consent-btn iy-consent-btn-ghost" data-act="back">' + t.back + '</button>' +
          '<button type="button" class="iy-consent-btn iy-consent-btn-primary" data-act="save">' + t.save + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    document.body.classList.add('iy-consent-open');

    banner.querySelector('[data-act="back"]').addEventListener('click', function () {
      renderSimple(reopening);
    });
    banner.querySelector('[data-act="save"]').addEventListener('click', function () {
      var wantsAnalytics = banner.querySelector('#iy-consent-analytics').checked;
      saveConsent(wantsAnalytics);
      removeBanner();
      if (wantsAnalytics) {
        loadAnalytics();
      } else if (reopening) {
        location.reload();
      }
    });
  }

  function showBanner(reopening) {
    renderSimple(!!reopening);
  }

  window.iyReopenConsent = function () {
    showBanner(true);
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-iy-cookie-settings]');
    if (el) {
      e.preventDefault();
      showBanner(true);
    }
  });

  function init() {
    var consent = getConsent();
    if (consent && consent.analytics) {
      loadAnalytics();
      return;
    }
    if (consent && !consent.analytics) {
      window['ga-disable-' + GA_ID] = true;
      return;
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { showBanner(false); });
    } else {
      showBanner(false);
    }
  }

  init();
})();
