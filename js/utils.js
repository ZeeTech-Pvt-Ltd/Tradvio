/* ============================================================
   Trader AI — Utility Functions
   Vanilla JS namespace for DOM helpers, UTM capture,
   cookies, localStorage, formatting.
   ============================================================ */

(function(global) {
  'use strict';

  const ns = {};

  /* --- Unique ID ------------------------------------------- */
  ns.uid = (prefix) => (prefix || 'ta') + '_' + Math.random().toString(36).slice(2, 10);

  /* --- DOM helpers ----------------------------------------- */
  ns.qs = (sel, ctx) => (ctx || document).querySelector(sel);
  ns.qsa = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  ns.on = (el, evt, fn) => {
    if (typeof el === 'string') el = ns.qs(el);
    if (el) el.addEventListener(evt, fn);
  };

  ns.trigger = (el, evtName, detail) => {
    if (typeof el === 'string') el = ns.qs(el);
    if (el) el.dispatchEvent(new CustomEvent(evtName, { detail, bubbles: true }));
  };

  /* --- Fetch with timeout ---------------------------------- */
  ns.fetchJSON = async (url, opts = {}) => {
    const timeout = opts.timeout || 10000;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const res = await fetch(url, { ...opts, signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  };

  /* --- Debounce -------------------------------------------- */
  ns.debounce = (fn, delay = 150) => {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  /* --- UTM Capture ----------------------------------------- */
  ns.getUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      referrer: document.referrer || '',
    };
  };

  /* --- Cookies --------------------------------------------- */
  ns.setCookie = (name, value, days = 30) => {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
  };

  ns.getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  /* --- localStorage helpers -------------------------------- */
  ns.store = (key, value) => {
    try { localStorage.setItem('traderai_' + key, JSON.stringify(value)); } catch (e) { /* quota exceeded */ }
  };
  ns.retrieve = (key) => {
    try {
      const v = localStorage.getItem('traderai_' + key);
      return v ? JSON.parse(v) : null;
    } catch (e) { return null; }
  };

  /* --- Formatting ------------------------------------------ */
  ns.formatNumber = (n, decimals = 2) => {
    if (n == null) return '—';
    return Number(n).toLocaleString('en-GB', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  ns.formatCurrency = (n, currency = 'GBP') => {
    if (n == null) return '—';
    return Number(n).toLocaleString('en-GB', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    });
  };

  ns.formatPercent = (n, decimals = 2) => {
    if (n == null) return '—';
    const val = Number(n).toFixed(decimals);
    return n >= 0 ? `+${val}%` : `${val}%`;
  };

  ns.now = () => new Date().toISOString();

  /* --- Class toggling -------------------------------------- */
  ns.toggleClass = (el, className, force) => {
    if (typeof el === 'string') el = ns.qs(el);
    if (!el) return;
    el.classList.toggle(className, force);
  };

  /* --- Focus trap (for mobile nav) ------------------------- */
  ns.createFocusTrap = (container) => {
    if (typeof container === 'string') container = ns.qs(container);
    if (!container) return { activate() {}, deactivate() {} };

    const focusable = () => ns.qsa(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      container
    );

    return {
      activate() {
        const els = focusable();
        if (els.length) els[0].focus();
      },
      deactivate() {},
    };
  };

  /* --- Smooth scroll --------------------------------------- */
  ns.smoothScroll = (target, offset = 0) => {
    if (typeof target === 'string') target = ns.qs(target);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  /* --- Set current year in footer -------------------------- */
  ns.setCurrentYear = () => {
    const el = ns.qs('#current-year');
    if (el) el.textContent = new Date().getFullYear();
  };

  /* --- Market Data (stub) ---------------------------------- */
  ns.getMarketData = () => {
    const data = window.TRADERAI_CONFIG && window.TRADERAI_CONFIG.marketData;
    return data || { status: 'unavailable', message: 'Market data not configured.' };
  };

  /* --- Expose ---------------------------------------------- */
  global.TraderAI = ns;

})(window);
