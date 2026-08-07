import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { UtmParams } from '@/types';

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Generate a unique ID */
export function uid(prefix: string = 'ta'): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Capture UTM parameters from URL */
export function getUTMParams(): UtmParams {
  if (typeof window === 'undefined') {
    return { utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '', referrer: '' };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    referrer: document.referrer || '',
  };
}

/** Set cookie */
export function setCookie(name: string, value: string, days: number = 30): void {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

/** Get cookie */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

/** localStorage helpers with prefix */
export function store<T>(key: string, value: T): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tradvioai_' + key, JSON.stringify(value));
    }
  } catch { /* quota exceeded */ }
}

export function retrieve<T>(key: string): T | null {
  try {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('tradvioai_' + key);
      return v ? (JSON.parse(v) as T) : null;
    }
  } catch { /* parse error */ }
  return null;
}

/** Formatting */
export function formatNumber(n: number | null | undefined, decimals: number = 2): string {
  if (n == null) return '—';
  return n.toLocaleString('en-GB', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatCurrency(n: number | null | undefined, currency: string = 'GBP'): string {
  if (n == null) return '—';
  return n.toLocaleString('en-GB', { style: 'currency', currency, minimumFractionDigits: 2 });
}

export function formatPercent(n: number | null | undefined, decimals: number = 2): string {
  if (n == null) return '—';
  const val = n.toFixed(decimals);
  return n >= 0 ? `+${val}%` : `${val}%`;
}

/** ISO timestamp */
export function now(): string {
  return new Date().toISOString();
}
