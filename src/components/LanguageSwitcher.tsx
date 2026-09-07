import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { LANGUAGES, useLanguage, type Language } from '@/lib/i18n';

/**
 * LanguageSwitcher — flag image + short-code dropdown in the header.
 * Stores the selection in localStorage and updates the whole site instantly.
 * Flag images come from flagcdn.com so they render on all platforms,
 * including Windows where flag emoji are not supported.
 */
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Language: ${current.label}`}
        className="flex items-center gap-1.5 rounded-md border border-border px-2 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
      >
        <img
          src={current.flag}
          alt={`${current.label} flag`}
          width={20}
          height={14}
          loading="lazy"
          className="rounded-[3px] border border-border object-cover"
        />
        <span>{current.label}</span>
        <svg
          className={cn('h-3 w-3 transition-transform duration-fast', open && 'rotate-180')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[120px] rounded-md border border-border bg-navy p-1.5 shadow-card-lg z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code as Language);
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-xs font-semibold transition-colors',
                l.code === lang ? 'bg-accent/10 text-accent' : 'text-ink-soft hover:bg-medium-navy hover:text-ink'
              )}
            >
              <img
                src={l.flag}
                alt={`${l.label} flag`}
                width={20}
                height={14}
                loading="lazy"
                className="rounded-[3px] border border-border object-cover"
              />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
