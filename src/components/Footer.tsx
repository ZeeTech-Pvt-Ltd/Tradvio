import { useLanguage } from '@/lib/i18n';

const LOGO_SRC = '/trdavio-logo.png';

const PLATFORM_LINKS: { label: string; href: string }[] = [
  { label: 'AI Trading Assistant', href: '/ai-trading-assistant/' },
  { label: 'AI Chart Analyser', href: '/ai-chart-analyser/' },
  { label: 'AI Strategy Builder', href: '/ai-strategy-builder/' },
  { label: 'AI Trading Ideas', href: '/ai-trading-ideas/' },
  { label: 'Strategy Backtesting', href: '/strategy-backtesting/' },
  { label: 'Risk Calculator', href: '/risk-calculator/' },
  { label: 'Trade Journal', href: '/trade-journal/' },
];

const COMPANY_LINKS: { label: string; href: string }[] = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact-us/' },
];

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Risk Disclosure', href: '/risk-disclosure/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];

const FOOTER_LINK_CLASSES =
  'text-sm text-ink-soft transition-colors hover:text-white';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-0 text-ink-soft border-t border-border">
      <div className="mx-auto max-w-container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" aria-label="Tradvio AI home">
              <img src={LOGO_SRC} alt="Tradvio AI" width={140} height={28} loading="lazy" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Products column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              {t('footer.products')}
            </h3>
            <ul className="space-y-2.5">
              {PLATFORM_LINKS.map((item, pi) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {t('fl.t' + (pi + 1))}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item, ci) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {t('fl.c' + (ci + 1))}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item, li) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {t('fl.l' + (li + 1))}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk disclosure */}
        <div className="mt-12 border-t border-border p-4 text-xs leading-relaxed text-ink-soft">
          <p className="text-ink-soft">
            {t('footer.risk1')}
          </p>
          <p className="mt-3 text-ink-soft">
            {t('footer.risk2')}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border py-4 text-xs">
          <p className="text-ink-soft">&copy; {currentYear} Tradvio AI. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
