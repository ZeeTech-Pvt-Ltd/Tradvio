/* ============================================================
   Trader AI — Core Components
   Header, Footer, Mobile Nav, FAQ Accordion,
   Scroll Effects, Section Reveal Animation
   ============================================================ */

const T = window.TraderAI;

(function(ns) {
  'use strict';

  /* --- Config --------------------------------------------- */
  const NAV_HEIGHT = 72; // matches --nav-height

  /* --- Build Header --------------------------------------- */
  function buildHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-inner">
        <a href="/" class="header-logo" aria-label="Trader AI Home">
          <img src="https://traderai.ai/wp-content/uploads/2025/12/Trader-Ai-logo-1.webp" alt="Trader AI" width="160" height="32">
        </a>
        <nav class="header-nav" aria-label="Main navigation">
          <div class="nav-dropdown">
            <a href="#" class="nav-dropdown-toggle" aria-haspopup="true" aria-expanded="false">Platform</a>
            <div class="nav-dropdown-menu">
              <a href="/ai-trading-assistant/">AI Trading Assistant</a>
              <a href="/tools/ai-chart-analyser/">AI Chart Analyser</a>
              <a href="/ai-strategy-builder/">AI Strategy Builder</a>
              <a href="/backtesting/">Backtesting</a>
              <a href="/paper-trading/">Paper Trading</a>
              <a href="/risk-management/">Risk Management</a>
            </div>
          </div>
          <a href="/how-it-works-trader-ai/">How It Works</a>
          <a href="/blog/">Blog</a>
          <a href="/trust-centre/">Trust Centre</a>
          <a href="/contact-us-traderai-digital-trading/">Contact</a>
        </nav>
        <div class="header-actions">
          <a href="#lead-form" class="btn btn-primary btn-sm" data-smooth-scroll>Start Free Analysis</a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>`;
  }

  /* --- Build Mobile Nav ------------------------------------ */
  function buildMobileNav() {
    // Backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    // Panel
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg);">
        <a href="/" class="header-logo">
          <img src="https://traderai.ai/wp-content/uploads/2025/12/Trader-Ai-logo-1.webp" alt="Trader AI" width="128" height="26">
        </a>
        <button class="mobile-menu-close" aria-label="Close menu" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--ink);padding:8px;">&times;</button>
      </div>
      <strong style="display:block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);margin-bottom:var(--space-sm);">Platform</strong>
      <a href="/ai-trading-assistant/">AI Trading Assistant</a>
      <a href="/tools/ai-chart-analyser/">AI Chart Analyser</a>
      <a href="/ai-strategy-builder/">AI Strategy Builder</a>
      <a href="/backtesting/">Backtesting</a>
      <a href="/paper-trading/">Paper Trading</a>
      <a href="/risk-management/">Risk Management</a>
      <strong style="display:block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);margin:var(--space) 0 var(--space-sm);">Site</strong>
      <a href="/how-it-works-trader-ai/">How It Works</a>
      <a href="/blog/">Blog</a>
      <a href="/trust-centre/">Trust Centre</a>
      <a href="/contact-us-traderai-digital-trading/">Contact</a>
      <a href="#lead-form" class="btn btn-primary" style="margin-top:var(--space-lg);" data-smooth-scroll>Start Free Analysis</a>
    `;
    document.body.appendChild(nav);

    // Toggle
    const toggle = document.querySelector('.mobile-menu-toggle');
    const closeBtn = nav.querySelector('.mobile-menu-close');

    function open() {
      nav.classList.add('open');
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      // Focus first link
      const firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function close() {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) close();
    });

    // Close mobile nav when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) close();
      });
    });
  }

  /* --- Build Footer --------------------------------------- */
  function buildFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const year = new Date().getFullYear();

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" style="display:inline-block;margin-bottom:var(--space-sm);">
              <img src="https://traderai.ai/wp-content/uploads/2025/12/Trader-Ai-logo-1.webp" alt="Trader AI" width="140" height="28">
            </a>
            <p>AI-assisted market research and strategy testing for traders who make their own decisions.</p>
          </div>
          <div class="footer-col">
            <h4>Platform</h4>
            <a href="/ai-trading-assistant/">AI Trading Assistant</a>
            <a href="/tools/ai-chart-analyser/">AI Chart Analyser</a>
            <a href="/ai-strategy-builder/">AI Strategy Builder</a>
            <a href="/backtesting/">Backtesting</a>
            <a href="/paper-trading/">Paper Trading</a>
            <a href="/risk-management/">Risk Management</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="/about-us/">About Us</a>
            <a href="/blog/">Blog</a>
            <a href="/trust-centre/">Trust Centre</a>
            <a href="/performance-methodology/">Performance Methodology</a>
            <a href="/contact-us-traderai-digital-trading/">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-of-service/">Terms of Service</a>
            <a href="/cookie-policy/">Cookie Policy</a>
            <a href="/risk-disclosure/">Risk Disclosure</a>
            <a href="/disclaimer/">Disclaimer</a>
          </div>
        </div>

        <div class="footer-risk">
          <p><strong>HIGH RISK WARNING:</strong> Trading foreign exchange, cryptocurrencies, contracts for differences (CFDs), and other financial instruments carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment and should not invest money you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.</p>
          <p style="margin-top:var(--space-sm);"><strong>Important:</strong> Trader AI is a market research and analysis platform. We are not a brokerage, financial advisor, or investment service. AI-generated analysis can be incorrect. Past performance, backtests, and simulations do not guarantee future results. All data on this platform is clearly labelled as Live, Delayed, Backtested, or Illustrative. Verify before acting on any information.</p>
        </div>

        <div class="footer-bottom">
          <span>&copy; ${year} Trader AI. All rights reserved.</span>
          <span class="footer-lang">
            <a href="/" aria-current="page">EN</a>
            <a href="/ja/">日本語</a>
            <a href="/tr/">TR</a>
            <a href="/es/">ES</a>
            <a href="/de/">DE</a>
            <a href="/pt/">PT</a>
            <a href="/fr/">FR</a>
            <a href="/it/">IT</a>
            <a href="/pl/">PL</a>
          </span>
        </div>
      </div>`;
  }

  /* --- FAQ Accordion -------------------------------------- */
  function initFAQ() {
    ns.qsa('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');

        // Close all others
        ns.qsa('.faq-item.open').forEach(other => {
          other.classList.remove('open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      // Initialize aria
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* --- Smooth Scroll for anchor links --------------------- */
  function initSmoothScroll() {
    ns.qsa('a[data-smooth-scroll]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 16;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      });
    });
  }

  /* --- Section Reveal on Scroll --------------------------- */
  function initRevealAnimations() {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ns.qsa('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    });

    ns.qsa('.reveal').forEach(el => observer.observe(el));
  }

  /* --- Header Scroll Effect ------------------------------- */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > NAV_HEIGHT) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* --- Nav Dropdown Toggle ------------------------------- */
  function initNavDropdowns() {
    ns.qsa('.nav-dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.parentElement;
        const isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns
        ns.qsa('.nav-dropdown.open').forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });

        dropdown.classList.toggle('open', !isOpen);
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        ns.qsa('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ns.qsa('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      }
    });
  }

  /* --- Initialize all ------------------------------------- */
  ns.initCore = () => {
    buildHeader();
    buildMobileNav();
    buildFooter();
    initNavDropdowns();
    initFAQ();
    initSmoothScroll();
    initRevealAnimations();
    initHeaderScroll();
  };

})(T);
