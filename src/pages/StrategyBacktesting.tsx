import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const faqItems = [
  { q: 'What is strategy backtesting?', a: 'Backtesting is the process of testing a trading strategy against historical market data to see how it would have performed. It helps you validate your ideas before risking real capital.' },
  { q: 'Which markets can I backtest?', a: 'You can backtest strategies across stocks, crypto, forex, commodities, indices, ETFs, and CFDs — all in one platform with consistent data.' },
  { q: 'How far back does the historical data go?', a: 'Our platform provides up to 10 years of historical data for most markets, with granular tick-by-tick data for precise simulation.' },
  { q: 'Can I backtest multiple strategies at once?', a: 'Yes. You can run multiple strategies simultaneously and compare their performance side by side to find the best approach.' },
  { q: 'Does backtesting guarantee future results?', a: 'No. Backtesting shows how a strategy performed in the past. Markets change, and past performance does not guarantee future results. Always use proper risk management.' },
  { q: 'Is my strategy data kept private?', a: 'Absolutely. Your strategies and backtest results are encrypted and never shared. You own your intellectual property.' },
];

const steps = [
  { step: '01', title: 'Define strategy', desc: 'Set your entry rules, exit conditions, stop-loss, and take-profit levels using our visual builder or code editor.' },
  { step: '02', title: 'Select markets', desc: 'Choose which markets to test — a single symbol, a basket, or across entire asset classes.' },
  { step: '03', title: 'Configure parameters', desc: 'Set your position size, timeframes, date range, and any additional filters or conditions.' },
  { step: '04', title: 'Run & analyse', desc: 'Execute the backtest and review detailed reports with key metrics, equity curves, and trade logs.' },
];

const metrics = [
  { label: 'Win Rate', value: '68.4%', desc: 'Percentage of winning trades', color: 'text-success' },
  { label: 'Sharpe Ratio', value: '2.41', desc: 'Risk-adjusted return', color: 'text-ink' },
  { label: 'Max Drawdown', value: '-12.3%', desc: 'Largest peak-to-trough decline', color: 'text-danger' },
  { label: 'Profit Factor', value: '3.2', desc: 'Gross profit / gross loss', color: 'text-success' },
  { label: 'Avg Trade', value: '+$142', desc: 'Average profit per trade', color: 'text-success' },
  { label: 'Total Trades', value: '1,247', desc: 'Over 5-year period', color: 'text-ink' },
];

const features = [
  {
    title: 'Multi-market testing',
    desc: 'Test across stocks, crypto, forex, commodities, indices, ETFs, and CFDs with unified data and consistent metrics.',
    icon: '🌐',
  },
  {
    title: 'Visual strategy builder',
    desc: 'No coding required. Build complex strategies with drag-and-drop conditions, or use the code editor for advanced logic.',
    icon: '🧩',
  },
  {
    title: 'Realistic simulation',
    desc: 'Accounts for slippage, commissions, spread, and liquidity. Your backtest results reflect real-world trading conditions.',
    icon: '📊',
  },
  {
    title: 'Detailed analytics',
    desc: 'Equity curves, drawdown charts, monthly breakdowns, trade logs, and Monte Carlo simulations for robustness testing.',
    icon: '📈',
  },
  {
    title: 'Optimisation engine',
    desc: 'Automatically test thousands of parameter combinations to find the optimal settings for your strategy.',
    icon: '⚡',
  },
  {
    title: 'Export & share',
    desc: 'Download reports as PDF or CSV. Share results with your team or import into your trading journal.',
    icon: '📁',
  },
];

export default function StrategyBacktesting() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Strategy Backtesting — Test Before You Trade | Tradvio AI</title>
        <meta name="description" content="Backtest your trading strategies against years of historical data. Validate ideas, optimise parameters, and trade with confidence. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/backtesting/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-accent bg-accent/10 text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Strategy Backtesting
                </div>
                <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                  Test before you<br />
                  <span className="text-accent">risk a penny.</span>
                </h1>
                <p className="text-lg text-muted-dark leading-relaxed mb-8 max-w-[480px]">
                  Validate every trading idea against years of historical data. Tradvio AI's backtesting engine lets you simulate, refine, and perfect your strategies before going live. No surprises — just data-driven confidence.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="/get-started/" className="btn btn-primary btn-lg">Start Backtesting Free</a>
                  <a href="#how-it-works" className="btn btn-secondary btn-lg">How it works</a>
                </div>
                <div className="mt-5 flex items-center gap-4 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> No credit card</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> 10+ years of data</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Free to start</span>
                </div>
              </div>

              {/* Right — Dashboard mockup */}
              <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">Backtesting Dashboard</span>
                  <span className="text-[0.6rem] text-success font-bold">● SIMULATED</span>
                </div>
                <div className="p-5">
                  {/* Equity curve */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Equity Curve</span>
                      <span className="text-[0.65rem] text-success font-mono">+32.5%</span>
                    </div>
                    <svg viewBox="0 0 400 90" preserveAspectRatio="none" className="w-full h-[90px]">
                      <defs>
                        <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polygon points="0,90 0,60 40,55 80,52 120,45 160,48 200,38 240,40 280,28 320,32 360,20 400,22 400,90" fill="url(#eqGrad)" />
                      <polyline points="0,60 40,55 80,52 120,45 160,48 200,38 240,40 280,28 320,32 360,20 400,22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {metrics.slice(0, 6).map((m) => (
                      <div key={m.label} className="bg-deep border border-border rounded-lg p-2.5">
                        <div className="text-[0.58rem] text-ink-soft uppercase tracking-wider mb-1">{m.label}</div>
                        <div className={cn('font-mono text-sm font-bold', m.color)}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                From idea to validated<br />
                <span className="text-ink-soft font-light italic">in four steps.</span>
              </h2>
              <p className="text-muted-dark max-w-[480px] mx-auto">Backtesting doesn't have to be complicated. Here's how it works on Tradvio AI:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-8 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ METRICS DEEP DIVE ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Key Metrics</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Every metric that<br />
                <span className="text-ink-soft font-light italic">matters to your strategy.</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">Stop guessing. Our backtesting engine gives you every number you need to decide if a strategy is ready for live markets.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
              {metrics.map((m) => (
                <div key={m.label} className="bg-navy border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                  <div className={cn('font-mono text-2xl font-bold mb-1', m.color)}>{m.value}</div>
                  <div className="text-[0.65rem] text-ink-soft uppercase tracking-wider font-semibold mb-1">{m.label}</div>
                  <div className="text-[0.6rem] text-ink-soft/60">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Platform capabilities</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Everything you need to<br />
                <span className="text-ink-soft font-light italic">test with confidence.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ BEFORE / AFTER ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">The difference</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                With vs without<br />
                <span className="text-ink-soft font-light italic">backtesting.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden">
              <div className="p-8 bg-navy">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-danger/10 text-danger border border-danger/20">Without backtesting</span>
                <ul className="space-y-3">
                  {[
                    'Trade based on gut feeling or tips',
                    'No idea if the strategy actually works',
                    'Risk real money on untested ideas',
                    'No way to measure improvement',
                    'Emotional decision-making under pressure',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-danger" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-navy border-t md:border-t-0 md:border-l border-border">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-success/10 text-success border border-success/20">With Tradvio AI</span>
                <ul className="space-y-3">
                  {[
                    'Data-driven strategy validation',
                    'Know your win rate before you trade',
                    'Paper trade first — no real money at risk',
                    'Track and optimise performance over time',
                    'Trade with confidence, not emotion',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-success" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Frequently asked<br />
                <span className="text-ink-soft font-light italic">questions.</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-deep border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {item.q}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              Stop guessing.<br />
              <span className="text-accent">Start testing.</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              Upload your strategy, run a backtest, and see the results in minutes. Free to start — no credit card required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/get-started/" className="btn btn-primary btn-lg">Start Backtesting Free →</a>
              <a href="/leaderboard/" className="btn btn-secondary btn-lg">See top strategies</a>
            </div>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              Backtesting uses historical data. Past performance does not guarantee future results.
              All trading involves risk. Only trade with capital you can afford to lose.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
