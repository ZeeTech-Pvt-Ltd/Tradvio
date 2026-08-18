import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const LOGO_SRC = '/trdavio-logo.png';

const PLATFORM_ITEMS: { label: string; href: string }[] = [
  { label: 'AI Trading Assistant', href: '/ai-trading-assistant/' },
  { label: 'AI Chart Analyser', href: '/ai-chart-analyser/' },
  { label: 'AI Strategy Builder', href: '/ai-strategy-builder/' },
  { label: 'AI Trading Ideas', href: '/ai-trading-ideas/' },
  { label: 'Strategy Backtesting', href: '/strategy-backtesting/' },
  { label: 'Risk Calculator', href: '/risk-calculator/' },
  { label: 'Trade Journal', href: '/trade-journal/' },
];

const RESOURCE_ITEMS: { label: string; href: string }[] = [
  { label: 'Academy', href: '/academy/' },
  { label: 'Performance Verification', href: '/performance-verification/' },
  { label: 'Why Choose Tradvio AI', href: '/why-choose-tradvio-ai/' },
  { label: 'Blog', href: '/blog/' },
];

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Traders', href: '/trader/' },
  { label: 'Leaderboard', href: '/leaderboard/' },
  { label: 'AI Trading Platform', href: '/ai-trading-platform/' },
  { label: 'Contact', href: '/contact-us-tradvioai-digital-trading/' },
];

const NAV_LINK_CLASSES =
  'text-[0.925rem] font-medium text-white/75 transition-colors hover:text-white';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const platformRef = useRef<HTMLDivElement | null>(null);
  const resourcesRef = useRef<HTMLDivElement | null>(null);

  // Track scroll position past 72px, throttled via requestAnimationFrame.
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 72);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click and Escape.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (platformRef.current && !platformRef.current.contains(target) &&
          resourcesRef.current && !resourcesRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const platformOpen = openDropdown === 'platform';
  const resourcesOpen = openDropdown === 'resources';

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-nav w-full backdrop-blur-sm transition-all duration-fast border-b',
        scrolled ? 'bg-navy shadow-card border-border' : 'bg-transparent border-transparent'
      )}
    >
      <div className="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" aria-label="Tradvio AI home" className="flex-shrink-0">
          <img src={LOGO_SRC} alt="Tradvio AI" width={160} height={32} />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {/* Products dropdown */}
          <div ref={platformRef} className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('platform')}
              aria-expanded={platformOpen}
              aria-haspopup="true"
              className={cn(
                'flex items-center text-[0.925rem] font-medium text-white/75 transition-colors hover:text-white',
                platformOpen && 'text-white'
              )}
            >
              Products
              <svg
                className={cn(
                  'ml-1 h-4 w-4 transition-transform duration-fast',
                  platformOpen && 'rotate-180'
                )}
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

            {platformOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-md border border-border bg-navy p-2 shadow-card-lg">
                {PLATFORM_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block rounded-md px-3 py-2 text-sm text-white/75 transition-colors hover:bg-medium-navy hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('resources')}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className={cn(
                'flex items-center text-[0.925rem] font-medium text-white/75 transition-colors hover:text-white',
                resourcesOpen && 'text-white'
              )}
            >
              Resources
              <svg
                className={cn(
                  'ml-1 h-4 w-4 transition-transform duration-fast',
                  resourcesOpen && 'rotate-180'
                )}
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

            {resourcesOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-md border border-border bg-navy p-2 shadow-card-lg">
                {RESOURCE_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block rounded-md px-3 py-2 text-sm text-white/75 transition-colors hover:bg-medium-navy hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Plain nav links */}
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={NAV_LINK_CLASSES}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a href="/get-started/" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Start Free Analysis
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => onMenuToggle?.()}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink transition-colors hover:bg-medium-navy lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
