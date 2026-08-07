/* ============================================================
   Trader AI — Lead Capture Form
   Trust-first, low-friction form. No phone required.
   UTM capture, loading/success/error states.
   ============================================================ */

const T = window.TraderAI;

(function(ns) {
  'use strict';

  /* --- Config from global ---------------------------------- */
  const API_ENDPOINT = (window.TRADERAI_CONFIG && window.TRADERAI_CONFIG.leadApiEndpoint) || '';

  /* --- Render lead form ------------------------------------ */
  ns.renderLeadForm = (container, opts = {}) => {
    if (typeof container === 'string') container = document.querySelector(container);
    if (!container) return;

    const formId = opts.formId || ns.uid('lead');
    const formName = opts.formName || 'homepage_lead';
    const sourcePage = opts.sourcePage || window.location.pathname;
    const ctaText = opts.ctaText || 'Start Free Access';
    const title = opts.title || 'Start Analysing — Free';
    const subtitle = opts.subtitle || 'No credit card. No phone number required. Paper trading first.';
    const showPrivacy = opts.showPrivacy !== false;
    const successTitle = opts.successTitle || 'Check Your Inbox';
    const successMessage = opts.successMessage || 'We\'ve sent your access details. Explore the platform and start with paper trading.';
    const showExperience = opts.showExperience !== false;
    const showMarket = opts.showMarket !== false;

    const experienceOptions = [
      { value: '', label: 'Select experience level...' },
      { value: 'beginner', label: 'Beginner (less than 1 year)' },
      { value: 'intermediate', label: 'Intermediate (1–3 years)' },
      { value: 'experienced', label: 'Experienced (3–7 years)' },
      { value: 'advanced', label: 'Advanced (7+ years)' },
    ];

    const marketOptions = [
      { value: 'forex', label: 'Forex' },
      { value: 'indices', label: 'Indices' },
      { value: 'commodities', label: 'Commodities' },
      { value: 'crypto', label: 'Crypto' },
      { value: 'stocks', label: 'Stocks' },
      { value: 'etfs', label: 'ETFs' },
    ];

    container.innerHTML = `
      <div class="lead-form-wrap">
        <div class="lead-form-body" id="${formId}-body">
          ${title ? `<h3>${title}</h3>` : ''}
          ${subtitle ? `<p class="lead-form-subtitle">${subtitle}</p>` : ''}
          <div class="lead-form-error-msg" id="${formId}-error" role="alert" aria-live="assertive"></div>
          <form id="${formId}" novalidate>
            <div class="form-group">
              <label class="form-label" for="${formId}-first_name">First Name <span class="form-required" aria-hidden="true">*</span></label>
              <input class="form-input" type="text" id="${formId}-first_name" name="first_name" required autocomplete="given-name" placeholder="Your first name" aria-required="true">
              <span class="form-error" id="${formId}-first_name-error" role="alert">Please enter your first name.</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="${formId}-email">Email Address <span class="form-required" aria-hidden="true">*</span></label>
              <input class="form-input" type="email" id="${formId}-email" name="email" required autocomplete="email" placeholder="you@example.com" aria-required="true">
              <span class="form-error" id="${formId}-email-error" role="alert">Please enter a valid email address.</span>
            </div>

            ${showExperience ? `
            <div class="form-group">
              <label class="form-label" for="${formId}-trading_experience">Trading Experience</label>
              <select class="form-select" id="${formId}-trading_experience" name="trading_experience">
                ${experienceOptions.map(o => `<option value="${o.value}">${o.label}</option>`).join('')}
              </select>
            </div>` : ''}

            ${showMarket ? `
            <div class="form-group">
              <label class="form-label">Markets You're Interested In</label>
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
                ${marketOptions.map(m => `
                  <label style="display:flex;align-items:center;gap:6px;font-size:0.875rem;color:var(--muted-dark);cursor:pointer;">
                    <input type="checkbox" name="markets[]" value="${m.value}" style="accent-color:var(--blue);">
                    ${m.label}
                  </label>
                `).join('')}
              </div>
            </div>` : ''}

            <!-- Honeypot anti-spam -->
            <div class="honeypot" aria-hidden="true">
              <label for="${formId}-website">Website</label>
              <input type="text" id="${formId}-website" name="website" tabindex="-1" autocomplete="off">
            </div>

            ${showPrivacy ? `
            <div class="form-group">
              <div class="form-checkbox">
                <input type="checkbox" id="${formId}-privacy" name="privacy" required aria-required="true">
                <label for="${formId}-privacy">I agree to the <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a> and understand that AI analysis can be incorrect and trading involves risk. <span class="form-required" aria-hidden="true">*</span></label>
              </div>
              <span class="form-error" id="${formId}-privacy-error" role="alert">You must agree to continue.</span>
            </div>` : ''}

            <input type="hidden" name="source_page" value="${sourcePage}">
            <input type="hidden" name="form_name" value="${formName}">
            <input type="hidden" name="submitted_at" value="">

            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">
              ${ctaText}
            </button>
          </form>

          <div class="risk-callout" style="margin-top:var(--space);">
            <div class="risk-callout-icon">&#9888;</div>
            <p><strong>Risk reminder:</strong> We never sell your data. Trading involves risk of loss. AI-generated analysis can be incorrect. Past performance, backtests, and simulations do not guarantee future results. See our <a href="/risk-disclosure/" target="_blank" rel="noopener">Risk Disclosure</a> and <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>.</p>
          </div>
        </div>

        <div class="lead-form-success" id="${formId}-success" role="status">
          <div class="lead-form-success-icon">&#10003;</div>
          <h3>${successTitle}</h3>
          <p>${successMessage}</p>
        </div>
      </div>`;

    attachFormHandler(formId, formName, sourcePage);
    return formId;
  };

  /* --- Attach validation and submission -------------------- */
  function attachFormHandler(formId, formName, sourcePage) {
    const form = document.getElementById(formId);
    if (!form) return;

    const errorEl = document.getElementById(formId + '-error');
    const bodyEl = document.getElementById(formId + '-body');
    const successEl = document.getElementById(formId + '-success');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Real-time validation on blur
    form.querySelectorAll('input:not([type="checkbox"]):not([type="hidden"]), select').forEach(field => {
      field.addEventListener('blur', () => validateField(formId, field));
      field.addEventListener('input', () => {
        const errEl = document.getElementById(`${formId}-${field.name}-error`);
        if (errEl && errEl.classList.contains('visible')) validateField(formId, field);
      });
    });

    // Privacy checkbox validation
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (privacyCheckbox) {
      privacyCheckbox.addEventListener('change', () => {
        const errEl = document.getElementById(`${formId}-privacy-error`);
        if (errEl && errEl.classList.contains('visible') && privacyCheckbox.checked) {
          errEl.classList.remove('visible');
          privacyCheckbox.classList.remove('error');
        }
      });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = form.querySelector('input[name="website"]');
      if (honeypot && honeypot.value) {
        console.log('Spam detected — submission blocked.');
        return;
      }

      // Validate all fields
      let valid = true;
      form.querySelectorAll('input[required], select[required]').forEach(f => {
        if (!validateField(formId, f)) valid = false;
      });

      // Check privacy
      if (privacyCheckbox && !privacyCheckbox.checked) {
        valid = false;
        const errEl = document.getElementById(`${formId}-privacy-error`);
        if (errEl) errEl.classList.add('visible');
        privacyCheckbox.classList.add('error');
      }

      if (!valid) {
        errorEl.textContent = 'Please fix the errors above before submitting.';
        errorEl.classList.add('visible');
        errorEl.focus();
        return;
      }

      // Collect data
      const formData = new FormData(form);
      const utm = ns.getUTMParams();

      const marketCheckboxes = form.querySelectorAll('input[name="markets[]"]:checked');
      const markets = Array.from(marketCheckboxes).map(cb => cb.value);

      const payload = {
        first_name: formData.get('first_name') || '',
        email: formData.get('email') || '',
        trading_experience: formData.get('trading_experience') || '',
        markets: markets,
        source_page: sourcePage,
        form_name: formName,
        ...utm,
        referrer: utm.referrer || document.referrer,
        submitted_at: ns.now(),
      };

      // Loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      submitBtn.setAttribute('aria-busy', 'true');
      if (errorEl) errorEl.classList.remove('visible');

      try {
        if (API_ENDPOINT) {
          const res = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error(`Server returned ${res.status}`);
        } else {
          // Simulate submission when no backend configured
          await new Promise(r => setTimeout(r, 800));
          console.log('Lead captured (no backend configured):', payload);
        }

        // Success
        if (bodyEl) bodyEl.style.display = 'none';
        if (successEl) {
          successEl.style.display = 'block';
          successEl.classList.add('visible');
        }
        ns.store('lead_submitted_' + formName, { timestamp: ns.now(), source: sourcePage });

        // Track conversion
        if (typeof gtag === 'function') {
          gtag('event', 'lead_form_submit', {
            event_category: 'lead',
            event_label: formName,
            value: 1,
          });
        }

      } catch (err) {
        if (errorEl) {
          errorEl.textContent = 'Something went wrong. Please try again or contact support.';
          errorEl.classList.add('visible');
          errorEl.focus();
        }
        console.error('Lead form error:', err);
        // Track error
        if (typeof gtag === 'function') {
          gtag('event', 'exception', {
            description: 'Lead form submission error: ' + err.message,
            fatal: false,
          });
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
        submitBtn.setAttribute('aria-busy', 'false');
      }
    });
  }

  /* --- Validate single field ------------------------------- */
  function validateField(formId, field) {
    const fieldName = field.name;
    // Skip checkbox groups and honeypot
    if (!fieldName || fieldName === 'markets[]' || fieldName === 'website' || field.type === 'hidden') return true;

    const errEl = document.getElementById(`${formId}-${fieldName}-error`);
    if (!field) return true;

    let valid = true;

    if (field.required && !field.value.trim()) {
      valid = false;
    } else if (field.type === 'email' && field.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(field.value.trim())) valid = false;
    }

    if (!valid) {
      field.classList.add('error');
      if (errEl) errEl.classList.add('visible');
    } else {
      field.classList.remove('error');
      if (errEl) errEl.classList.remove('visible');
    }

    return valid;
  }

})(T);
