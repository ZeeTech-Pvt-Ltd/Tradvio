import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. High-Risk Warning',
    body: 'Trading foreign exchange, cryptocurrencies, contracts for difference (CFDs), stocks, indices, commodities, and other financial instruments carries a high level of risk and may not be suitable for all investors. The high degree of leverage available in some markets can work against you as well as for you.',
  },
  {
    title: '2. You Could Lose Your Capital',
    body: 'Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment. You should not invest money that you cannot afford to lose.',
  },
  {
    title: '3. AI Analysis Is Not Infallible',
    bullets: [
      'AI-generated analysis, signals, and predictions can be incorrect.',
      'Pattern recognition and historical data do not predict future price movements.',
      'Past performance, backtests, and simulations do not guarantee future results.',
      'Every signal includes a confidence score — treat it as a research input, not a certainty.',
    ],
  },
  {
    title: '4. Market Volatility',
    body: 'Financial markets can move rapidly and unpredictably. Price gaps, flash crashes, and periods of extreme volatility occur regularly — particularly in cryptocurrency markets, which operate 24/7 with no circuit breakers. A stop-loss order may not protect you at the exact price you expect during such events.',
  },
  {
    title: '5. Leverage Risk',
    body: 'Leveraged products magnify both gains and losses. A small adverse price movement can result in losses that exceed your initial margin. You should fully understand how margin and leverage work before using them.',
  },
  {
    title: '6. Not Financial Advice',
    body: 'Tradvio AI is a market research and analysis platform — not a broker, financial advisor, or investment service. Nothing on this site constitutes a recommendation or solicitation to buy or sell any financial instrument. All trading decisions are yours alone.',
  },
  {
    title: '7. Data Labels',
    body: 'All data on our platform is clearly labelled: Live, Delayed, Backtested, or Illustrative. Verify the label before acting on any information. Delayed data may not reflect current market conditions, and illustrative examples are demonstrations — not real results.',
  },
  {
    title: '8. Your Responsibility',
    bullets: [
      'Verify information independently before acting on it.',
      'Seek advice from an independent financial advisor if you have any doubts.',
      'Only trade with capital you can afford to lose.',
      'You are solely responsible for your trading decisions and their outcomes.',
    ],
  },
  {
    title: '9. Contact',
    body: 'Questions about this risk disclosure? Reach us at support@tradvioai.com.',
  },
];

export default function RiskDisclosure() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Risk Disclosure | Tradvio AI</title>
        <meta name="description" content="Trading involves substantial risk. Read the full Tradvio AI risk disclosure before using the platform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/risk-disclosure/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Risk <span className="text-accent">Disclosure</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              Trading involves substantial risk. Please read this disclosure carefully
              before using the Tradvio AI platform.
            </p>
          </div>
        </section>

        {/* ═══════════ SECTIONS ═══════════ */}
        <section className="py-8 pb-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-ink mb-2">
                    <span className="font-mono text-accent mr-3">{s.title.split('.')[0]}</span>
                    {s.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  {s.body && <p className="text-[15px] text-muted-dark leading-relaxed mb-2">{s.body}</p>}
                  {s.bullets && (
                    <ul className="space-y-2 pl-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-[15px] text-muted-dark leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <p className="text-xs text-ink-soft text-center">
                Last updated: August 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
