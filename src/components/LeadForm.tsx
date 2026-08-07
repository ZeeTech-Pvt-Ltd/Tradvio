import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import { cn, uid, getUTMParams, now } from '@/lib/utils';
import type { LeadFormOptions } from '@/types';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// intl-tel-input global type
declare global {
  interface Window {
    intlTelInput?: (input: HTMLInputElement, options?: Record<string, unknown>) => IntlTelInputInstance;
  }
}
interface IntlTelInputInstance {
  getNumber(): string;
  getNumberType(): number;
  isValidNumber(): boolean;
  getValidationError(): number;
  setNumber(number: string): void;
  destroy(): void;
}

const ITI_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css';
const ITI_JS = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
const ITI_UTILS = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js';

const API_URL = 'https://quantryxtech.com/homeMailAction.php';

const PREFERRED_COUNTRIES = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'es', 'it'];

/**
 * Map intl-tel-input validation error codes to user-friendly messages.
 * Error codes from libphonenumber via intl-tel-input utils:
 *   0 = TOO_SHORT, 1 = TOO_LONG, 2 = INVALID_COUNTRY_CODE,
 *   3 = INVALID_LENGTH, 4 = NOT_A_NUMBER
 */
function getPhoneValidationMessage(code: number): string | undefined {
  switch (code) {
    case 0:
      return 'Phone number is too short for this country.';
    case 1:
      return 'Phone number is too long for this country.';
    case 2:
      return 'Invalid country code. Please select your country.';
    case 3:
      return 'Phone number length is invalid for this country.';
    case 4:
      return 'Please enter a valid phone number.';
    default:
      return 'Please enter a valid phone number.';
  }
}

/**
 * Parse server-side validation errors from the API response.
 * Maps error codes to form field names.
 * 10001=firstName, 10002=lastName, 10003=email, 10005=phone, 10008=email
 */
interface ApiErrorItem {
  code: number;
  message: string;
}

function parseServerErrors(data: Record<string, unknown>): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  try {
    const raw = data._debug as Record<string, unknown> | undefined;
    if (!raw?.affilix_raw || typeof raw.affilix_raw !== 'string') return fieldErrors;

    const parsed = JSON.parse(raw.affilix_raw);
    const errors: ApiErrorItem[] = parsed?.errors || [];

    for (const err of errors) {
      switch (err.code) {
        case 10001:
        case 10006:
          fieldErrors.first_name = err.message;
          break;
        case 10002:
        case 10007:
          fieldErrors.last_name = err.message;
          break;
        case 10003:
        case 10008:
          fieldErrors.email = err.message;
          break;
        case 10005:
          fieldErrors.phone = err.message;
          break;
      }
    }
  } catch {
    // If we can't parse the raw errors, use the top-level message
    if (typeof data.message === 'string' && data.message) {
      fieldErrors._server = data.message;
    }
  }

  return fieldErrors;
}

let itiCssLoaded = false;

function loadItiCss(): void {
  if (itiCssLoaded || document.querySelector('#iti-css')) return;
  const link = document.createElement('link');
  link.id = 'iti-css';
  link.rel = 'stylesheet';
  link.href = ITI_CSS;
  document.head.appendChild(link);
  itiCssLoaded = true;
}

async function loadIntlTelInput(): Promise<void> {
  loadItiCss();
  if (window.intlTelInput) return;
  await new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = ITI_JS;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

export default function LeadForm({
  formName = 'homepage_lead',
  sourcePage = '/',
  ctaText = 'Get Started — Free',
  title = 'Start Analysing — Free',
  subtitle = 'No credit card. No deposit required.',
  successTitle = 'Check Your Inbox',
  successMessage = "We've sent your access details. Start with paper trading — no real money needed.",
}: LeadFormOptions) {
  const formId = uid('lead');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [privacy, setPrivacy] = useState(true);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');

  // intl-tel-input refs
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<IntlTelInputInstance | null>(null);
  const [itiReady, setItiReady] = useState(false);

  // Load & init intl-tel-input
  useEffect(() => {
    let cancelled = false;

    (async () => {
      await loadIntlTelInput();
      if (cancelled || !phoneInputRef.current || !window.intlTelInput) return;

      itiRef.current = window.intlTelInput(phoneInputRef.current, {
        initialCountry: 'us',
        separateDialCode: true,
        preferredCountries: PREFERRED_COUNTRIES,
        utilsScript: ITI_UTILS,
      });

      setItiReady(true);
    })();

    return () => {
      cancelled = true;
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  // Sync phone state when ITI changes the input
  const handlePhoneChange = useCallback(() => {
    if (phoneInputRef.current) {
      setPhone(phoneInputRef.current.value);
    }
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  }, [errors.phone]);

  // Get the full international number
  const getPhoneNumber = (): string => {
    if (itiRef.current) {
      return itiRef.current.getNumber();
    }
    return phone.trim();
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.first_name = 'Please enter your first name.';
    if (!lastName.trim()) errs.last_name = 'Please enter your last name.';
    if (!email.trim()) {
      errs.email = 'Please enter a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    // Validate phone — use intl-tel-input's isValidNumber when available
    if (phone.trim()) {
      if (itiRef.current) {
        // Use ITI's built-in validation (checks length & format per country)
        if (!itiRef.current.isValidNumber()) {
          const errCode = itiRef.current.getValidationError();
          const phoneErr = getPhoneValidationMessage(errCode);
          if (phoneErr) errs.phone = phoneErr;
        }
      } else {
        // Fallback: basic check before ITI loads
        if (phone.length < 6) {
          errs.phone = 'Please enter a valid phone number.';
        }
      }
    }
    if (!privacy) errs.privacy = 'You must agree to continue.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError('');

    // Honeypot check
    const honeypot = (e.target as HTMLFormElement).querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypot?.value) return;

    if (!validate()) return;

    setFormState('submitting');

    const utm = getUTMParams();

    // Build payload matching API format (camelCase, with password + offerName)
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: getPhoneNumber(),
      password: 'Lh23s3',
      offerName: 'TradvioAI-Site',
      source_page: sourcePage,
      form_name: formName,
      ...utm,
      submitted_at: now(),
    };

    const endpoint =
      (typeof window !== 'undefined' &&
        (window as unknown as Record<string, unknown>).TRADVIOAI_CONFIG
          ? ((window as unknown as Record<string, unknown>).TRADVIOAI_CONFIG as Record<string, string>)
              .leadApiEndpoint
          : '') || API_URL;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      // Check for API-level errors
      if (data.status === 'error') {
        const serverErrors = parseServerErrors(data);
        // Separate field errors from general server message
        const { _server, ...fieldErrs } = serverErrors;
        if (Object.keys(fieldErrs).length > 0) {
          setErrors(fieldErrs);
        }
        if (_server) {
          setServerError(_server);
        } else if (Object.keys(fieldErrs).length === 0) {
          setServerError(data.message || 'Server error. Please try again.');
        }
        setFormState('idle');
        return;
      }

      if (!res.ok) throw new Error(`Server returned ${res.status}`);

      // Track conversion before redirect
      if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
        const gtag = (window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void;
        gtag('event', 'lead_form_submit', {
          event_category: 'lead',
          event_label: formName,
          value: 1,
        });
      }

      // Redirect to thank-you page
      window.location.href = '/thank-you/';
    } catch (err) {
      setServerError('Something went wrong. Please try again or contact support.');
      setFormState('error');
      console.error('Lead form error:', err);
    }
  };

  const fieldError = (name: string) => errors[name];

  return (
    <div className="bg-navy border border-border rounded-lg p-5 md:p-6 shadow-card-lg">
      {title && <h3 className="mb-0.5">{title}</h3>}
      {subtitle && <p className="text-sm text-ink-soft mb-4">{subtitle}</p>}

      {serverError && (
        <div className="bg-danger-bg border border-danger/25 text-danger text-sm p-3 rounded-md mb-4" role="alert">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate id={formId}>
        {/* First Name + Last Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="form-group">
            <label className="form-label" htmlFor={`${formId}-first_name`}>
              First Name <span className="form-required">*</span>
            </label>
            <input
              className={cn('form-input', fieldError('first_name') && 'error')}
              type="text"
              id={`${formId}-first_name`}
              name="first_name"
              required
              autoComplete="given-name"
              placeholder="John"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (fieldError('first_name')) setErrors((prev) => ({ ...prev, first_name: '' }));
              }}
              onBlur={() => {
                if (!firstName.trim()) setErrors((prev) => ({ ...prev, first_name: 'Please enter your first name.' }));
              }}
            />
            {fieldError('first_name') && (
              <span className="form-error visible">{fieldError('first_name')}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor={`${formId}-last_name`}>
              Last Name <span className="form-required">*</span>
            </label>
            <input
              className={cn('form-input', fieldError('last_name') && 'error')}
              type="text"
              id={`${formId}-last_name`}
              name="last_name"
              required
              autoComplete="family-name"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (fieldError('last_name')) setErrors((prev) => ({ ...prev, last_name: '' }));
              }}
              onBlur={() => {
                if (!lastName.trim()) setErrors((prev) => ({ ...prev, last_name: 'Please enter your last name.' }));
              }}
            />
            {fieldError('last_name') && (
              <span className="form-error visible">{fieldError('last_name')}</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor={`${formId}-email`}>
            Email Address <span className="form-required">*</span>
          </label>
          <input
            className={cn('form-input', fieldError('email') && 'error')}
            type="email"
            id={`${formId}-email`}
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldError('email')) setErrors((prev) => ({ ...prev, email: '' }));
            }}
            onBlur={() => {
              if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
                setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
              }
            }}
          />
          {fieldError('email') && (
            <span className="form-error visible">{fieldError('email')}</span>
          )}
        </div>

        {/* Phone (optional) */}
        <div className="form-group">
          <label className="form-label" htmlFor={`${formId}-phone`}>
            Phone Number <span className="text-ink-soft font-normal">(optional)</span>
          </label>
          <input
            ref={phoneInputRef}
            className={cn('form-input', fieldError('phone') && 'error')}
            type="tel"
            id={`${formId}-phone`}
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
          {fieldError('phone') && (
            <span className="form-error visible">{fieldError('phone')}</span>
          )}
          {!itiReady && (
            <p className="text-xs text-ink-soft mt-1">Loading country picker…</p>
          )}
        </div>

        {/* Honeypot */}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input type="text" id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Privacy */}
        <div className="form-group">
          <div className="form-checkbox">
            <input
              type="checkbox"
              id={`${formId}-privacy`}
              name="privacy"
              required
              checked={privacy}
              onChange={(e) => {
                setPrivacy(e.target.checked);
                if (e.target.checked && fieldError('privacy')) {
                  setErrors((prev) => ({ ...prev, privacy: '' }));
                }
              }}
            />
            <label htmlFor={`${formId}-privacy`}>
              I agree to the{' '}
              <a href="/privacy-policy/" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover">
                Privacy Policy
              </a>{' '}
              and understand that AI analysis can be incorrect and trading involves risk.{' '}
              <span className="form-required">*</span>
            </label>
          </div>
          {fieldError('privacy') && (
            <span className="form-error visible">{fieldError('privacy')}</span>
          )}
        </div>

        <input type="hidden" name="source_page" value={sourcePage} />
        <input type="hidden" name="form_name" value={formName} />

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className={cn('btn btn-primary btn-lg w-full', formState === 'submitting' && 'btn-loading')}
          aria-busy={formState === 'submitting'}
        >
          {formState === 'submitting' ? 'Submitting...' : ctaText}
        </button>
      </form>

    </div>
  );
}
