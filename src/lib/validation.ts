export interface ValidationErrors {
  [field: string]: string | undefined;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return 'Email is required.';
  if (!EMAIL_RE.test(value.trim())) return 'Please enter a valid email address.';
  return undefined;
}

export function validateRequired(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required.`;
  return undefined;
}

export function validateLeadForm(data: {
  first_name: string;
  email: string;
  privacy: boolean;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  const nameErr = validateRequired(data.first_name, 'First name');
  if (nameErr) errors.first_name = nameErr;

  const emailErr = validateEmail(data.email);
  if (emailErr) errors.email = emailErr;

  if (!data.privacy) {
    errors.privacy = 'You must agree to continue.';
  }

  return errors;
}

/** Check if there are any validation errors */
export function hasErrors(errors: ValidationErrors): boolean {
  return Object.values(errors).some((v) => v !== undefined);
}
