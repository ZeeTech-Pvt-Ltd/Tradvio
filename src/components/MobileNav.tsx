import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const LOGO_SRC = '/trdavio-logo.png';

const PLATFORM_LINKS: { label: string; href: string }[] = [
  { label: 'AI Trading Assistant', href: '/ai-trading-assistant/' },
  { label: 'AI Chart Analyser', href: '/tools/ai-chart-analyser/' },
  { label: 'AI Strategy Builder', href: '/ai-strategy-builder/' },
  { label: 'Backtesting', href: '/backtesting/' },
  { label: 'Paper Trading', href: '/paper-trading/' },
  { label: 'Risk Management', href: '/risk-management/' },
];

const SITE_LINKS: { label: string; href: string }[] = [
  { label: 'Traders', href: '/trader/' },
  { label: 'Leaderboard', href: '/leaderboard/' },
  { label: 'AI Trading Platform', href: '/ai-trading-platform/' },
  { label: 'How It Works', href: '/how-it-works-tradvio-ai/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Trust Centre', href: '/trust-centre/' },
  { label: 'Contact', href: '/contact-us-tradvioai-digital-trading/' },
];

const MOBILE_LINK_CLASSES =
  'block border-b border-border py-2 text-[1.05rem] font-medium text-white/85';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Focus the first link when the panel opens.
  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[1999] bg-black/70 transition-opacity duration-300',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <aside
        className={cn(
          'fixed top-0 z-[2000] h-full w-[300px] bg-navy p-8 shadow-card-xl transition-all duration-300',
          isOpen ? 'right-0' : 'right-[-100%]'
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <a href="/" onClick={onClose} aria-label="Tradvio AI home" className="flex-shrink-0">
            <img src={LOGO_SRC} alt="Tradvio AI" width={128} height={26} />
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="cursor-pointer border-none bg-transparent text-2xl text-ink"
          >
            &times;
          </button>
        </div>

        {/* Products links */}
        <p className="mt-8 mb-2 text-xs uppercase tracking-wider text-ink-soft">Products</p>
        <nav aria-label="Products links">
          {PLATFORM_LINKS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              onClick={onClose}
              className={MOBILE_LINK_CLASSES}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Site links */}
        <p className="mt-6 mb-2 text-xs uppercase tracking-wider text-ink-soft">Site</p>
        <nav aria-label="Site links">
          {SITE_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={MOBILE_LINK_CLASSES}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="/get-started/" onClick={onClose} className="btn btn-primary mt-8 w-full">
          Start Free Analysis
        </a>
      </aside>
    </>
  );
}
