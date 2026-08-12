const LOGO_SRC = '/trdavio-logo.png';

const PLATFORM_LINKS: { label: string; href: string }[] = [
  { label: 'AI Trading Assistant', href: '/ai-trading-assistant/' },
  { label: 'AI Chart Analyser', href: '/tools/ai-chart-analyser/' },
  { label: 'AI Strategy Builder', href: '/ai-strategy-builder/' },
  { label: 'AI Trading Ideas', href: '/ai-trading-ideas/' },
  { label: 'Strategy Backtesting', href: '/strategy-backtesting/' },
  { label: 'Paper Trading', href: '/paper-trading/' },
  { label: 'Risk Management', href: '/risk-management/' },
];

const COMPANY_LINKS: { label: string; href: string }[] = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Trust Centre', href: '/trust-centre/' },
  { label: 'Performance Methodology', href: '/performance-methodology/' },
  { label: 'Contact', href: '/contact-us-tradvioai-digital-trading/' },
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-0 text-ink-soft border-t border-border">
      <div className="mx-auto max-w-container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" aria-label="Tradvio AI home">
              <img src={LOGO_SRC} alt="Tradvio AI" width={140} height={28} />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              AI-assisted market research and strategy testing for traders who make their own
              decisions.
            </p>
          </div>

          {/* Platform column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {PLATFORM_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={FOOTER_LINK_CLASSES}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk disclosure */}
        <div className="mt-12 border-t border-border p-4 text-xs leading-relaxed text-ink-soft">
          <p className="text-ink-soft">
            HIGH RISK WARNING: Trading foreign exchange, cryptocurrencies, contracts for
            differences (CFDs), and other financial instruments carries a high level of risk and
            may not be suitable for all investors. The high degree of leverage can work against you
            as well as for you. Before deciding to trade, you should carefully consider your
            investment objectives, level of experience, and risk appetite. You could sustain a loss
            of some or all of your initial investment and should not invest money you cannot afford
            to lose. You should be aware of all the risks associated with trading and seek advice
            from an independent financial advisor if you have any doubts.
          </p>
          <p className="mt-3 text-ink-soft">
            Important: Tradvio AI is a market research and analysis platform. We are not a
            brokerage, financial advisor, or investment service. AI-generated analysis can be
            incorrect. Past performance, backtests, and simulations do not guarantee future
            results. All data on this platform is clearly labelled as Live, Delayed, Backtested,
            or Illustrative. Verify before acting on any information.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border py-4 text-xs">
          <p className="text-ink-soft">&copy; {currentYear} Tradvio AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
