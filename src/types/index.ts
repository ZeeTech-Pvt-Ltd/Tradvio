export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PlatformTool {
  icon: string;
  title: string;
  description: string;
  warning: string;
  href: string;
  linkLabel: string;
}

export interface TrustItem {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  warning: string;
}

export interface DataLabel {
  dot: string;
  dotColor: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  type: 'for' | 'not-for';
}

export interface CanCannotItem {
  helps: string;
  doesNot: string;
}

export interface TrustCentreCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface LeadFormPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  source_page: string;
  form_name: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  submitted_at: string;
}

export interface LeadFormOptions {
  formName?: string;
  sourcePage?: string;
  ctaText?: string;
  title?: string;
  subtitle?: string;
  successTitle?: string;
  successMessage?: string;
}

export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
}
