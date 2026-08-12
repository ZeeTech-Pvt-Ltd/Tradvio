import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

/* ─── Data ──────────────────────────────────────────── */
const stepData = [
  {
    num: '01',
    title: 'Create your free account',
    body: 'Register online in minutes. Registration is free — no platform subscription fee required.',
    note: 'Free registration — no platform fee to sign up',
  },
  {
    num: '02',
    title: 'Deposit initial capital',
    body: 'A minimum of £250 in initial capital is required to begin live trading. This is your trading capital, not a fee.',
    note: '£250 minimum initial capital required to trade live',
  },
  {
    num: '03',
    title: 'Connect your broker',
    body: 'Link Trader AI to your existing broker or exchange account. Your funds stay there — the platform never takes custody.',
    note: 'Your funds stay in your own broker account',
  },
  {
    num: '04',
    title: 'Let the AI trade smarter',
    body: 'Configure your strategy, set your risk limits, and Trader AI monitors markets and executes trades automatically on your behalf.',
    note: 'Automated execution, around the clock',
  },
];

const faqItems = [
  {
    q: 'Is there a fee to use Tradvio AI?',
    a: 'Registration is free and there is no ongoing platform subscription fee. A minimum initial capital of £250 is required to begin live trading. This is your trading capital placed with your connected broker or exchange — it is not a fee paid to Tradvio AI.',
  },
  {
    q: 'Does Tradvio AI hold my funds?',
    a: 'No. Your funds remain at all times in your own broker or exchange account. Tradvio AI connects via API to execute trades on your behalf — it does not take custody or hold any of your capital. You retain full ownership and control.',
  },
  {
    q: 'Are profits guaranteed?',
    a: 'No. Profits are never guaranteed. All trading — whether manual or automated — carries risk, including the risk of losing your invested capital. Tradvio AI is a tool to help you execute your strategy more efficiently, not a guarantee of returns. Please only trade with capital you can afford to lose.',
  },
  {
    q: 'Is crypto trading supported? Is it risky?',
    a: 'Yes, Tradvio AI supports cryptocurrency trading across a wide range of digital assets. Cryptocurrency markets are highly volatile and can move rapidly. The value of your investment can decrease as well as increase. Ensure you understand the risks before allocating capital to crypto markets.',
  },
  {
    q: 'Which markets can I trade with Tradvio AI?',
    a: 'Tradvio AI supports trading across stocks, cryptocurrencies, forex (currency pairs), commodities (such as gold and oil), stock market indices, ETFs (exchange-traded funds) and CFDs (contracts for difference). The platform is designed to operate across multiple asset classes simultaneously.',
  },
  {
    q: 'How many countries is Tradvio AI available in?',
    a: 'Tradvio AI is currently available to traders in over 50 countries worldwide, with more than 100,000 traders using the platform. Please check the platform for the current list of supported regions, as availability may vary depending on local regulations.',
  },
];

const marketPills = [
  { name: 'Stocks', desc: 'NYSE • NASDAQ' },
  { name: 'Crypto', desc: 'BTC • ETH • 100+' },
  { name: 'Forex', desc: '50+ currency pairs' },
  { name: 'Commodities', desc: 'Gold • Oil • Silver' },
  { name: 'Indices', desc: 'S&P 500 • FTSE • DAX' },
  { name: 'ETFs', desc: 'Diversified funds' },
  { name: 'CFDs', desc: 'Contract for difference' },
];

export default function AITradingPlatform() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Tradvio AI — Intelligent Automated Trading</title>
        <meta name="description" content="Tradvio AI powers automated trading across stocks, crypto, forex, commodities, indices, ETFs and CFDs. Join 100,000+ traders in 50+ countries." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/ai-trading-platform/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-deep">
          {/* Background blobs */}
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-35 bg-[radial-gradient(circle,rgba(239,68,68,0.4),transparent_70%)] -top-[100px] -right-[100px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-35 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] bottom-0 -left-[80px]" />

          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Copy */}
              <div>
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-accent bg-accent/10 text-xs font-semibold">
                    <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse" />
                    AI-Powered Platform
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-ink-soft bg-navy">
                    Live markets
                  </span>
                </div>

                <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
                  Trade smarter<br />
                  with <em className="italic text-accent not-italic">AI that<br />never sleeps.</em>
                </h1>

                <p className="text-lg text-muted-dark leading-relaxed mb-9 max-w-[490px]">
                  Tradvio AI automates your strategy across stocks, crypto, forex, commodities,
                  indices, ETFs and CFDs — with real-time market analysis and built-in risk controls.
                  You stay in control.
                </p>

                <div className="flex gap-3 flex-wrap mb-11">
                  <a href="/get-started/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-9 py-4 rounded-lg transition-all shadow-[0_0_40px_rgba(220,38,38,0.28)] hover:-translate-y-0.5">
                    Start free — no fees
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a href="#how-it-works" className="inline-flex items-center gap-2 border border-border hover:border-accent text-ink hover:text-accent font-semibold px-9 py-4 rounded-lg transition-all bg-transparent">
                    How it works
                  </a>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                  <div>
                    <strong className="text-lg font-bold text-ink">100,000+</strong>
                    <span className="block text-xs text-ink-soft">Traders worldwide</span>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <strong className="text-lg font-bold text-ink">50+</strong>
                    <span className="block text-xs text-ink-soft">Countries supported</span>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <div className="flex gap-2 flex-wrap">
                      {['iOS', 'Android', 'Web'].map((p) => (
                        <span key={p} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-ink-soft bg-navy">
                          {p}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.7rem] text-ink-soft mt-1">Available on all platforms</p>
                  </div>
                </div>
              </div>

              {/* Right: Command Center Mockup */}
              <div>
                <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(220,38,38,0.18)]" aria-hidden="true">
                  {/* Mockup header */}
                  <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                      <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                      <div className="w-2.5 h-2.5 rounded-full bg-success" />
                    </div>
                    <span className="text-[0.72rem] font-semibold text-ink-soft tracking-wider uppercase">Tradvio AI — Command Center</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-accent/30 text-accent text-[0.6rem] font-bold bg-accent/10">
                      <span className="w-[5px] h-[5px] rounded-full bg-accent" /> LIVE
                    </span>
                  </div>

                  {/* Mockup body */}
                  <div className="grid grid-cols-[140px_1fr]">
                    {/* Sidebar */}
                    <div className="border-r border-border p-3.5">
                      <div className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ink-soft mb-2 px-1">Watchlist</div>
                      {[
                        { sym: 'BTC/USD', chg: '+2.4%', up: true, active: true },
                        { sym: 'ETH/USD', chg: '+1.1%', up: true, active: false },
                        { sym: 'EUR/USD', chg: '-0.3%', up: false, active: false },
                        { sym: 'AAPL', chg: '+0.8%', up: true, active: false },
                        { sym: 'GOLD', chg: '+0.5%', up: true, active: false },
                        { sym: 'S&P 500', chg: '-0.2%', up: false, active: false },
                      ].map((w) => (
                        <div
                          key={w.sym}
                          className={cn(
                            'flex justify-between items-center px-1.5 py-1.5 rounded-md text-[0.72rem] font-semibold cursor-pointer transition-colors',
                            w.active ? 'bg-accent/10' : 'hover:bg-white/5'
                          )}
                        >
                          <span className="text-ink">{w.sym}</span>
                          <span className={cn('text-[0.68rem] font-bold', w.up ? 'text-success' : 'text-danger')}>{w.chg}</span>
                        </div>
                      ))}
                      <div className="h-px bg-border my-2.5" />
                      <div className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ink-soft mb-2 px-1">AI Score</div>
                      <div className="px-1 space-y-2">
                        <div>
                          <div className="text-[0.62rem] text-ink-soft mb-1">BTC Confidence</div>
                          <div className="h-1 bg-white/5 rounded-sm overflow-hidden">
                            <div className="h-full w-[82%] rounded-sm bg-gradient-to-r from-accent to-accent/60" />
                          </div>
                          <div className="text-[0.62rem] text-accent mt-1 text-right">82%</div>
                        </div>
                        <div>
                          <div className="text-[0.62rem] text-ink-soft mb-1">Market Vol.</div>
                          <div className="h-1 bg-white/5 rounded-sm overflow-hidden">
                            <div className="h-full w-[41%] rounded-sm bg-gradient-to-r from-warning to-orange-400" />
                          </div>
                          <div className="text-[0.62rem] text-warning mt-1 text-right">41%</div>
                        </div>
                      </div>
                    </div>

                    {/* Main area */}
                    <div className="p-3.5">
                      {/* Mini chart */}
                      <div className="bg-deep border border-border rounded-lg p-2.5 mb-2.5">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-[0.85rem] font-bold text-ink">BTC / USD</div>
                            <div className="text-[0.65rem] text-ink-soft mt-0.5">Bitcoin — 1H chart</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[1.1rem] font-bold text-accent">$67,420</div>
                            <div className="text-[0.65rem] text-success">+2.41% today</div>
                          </div>
                        </div>
                        <svg viewBox="0 0 300 72" preserveAspectRatio="none" className="w-full h-[72px]" aria-hidden="true">
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,55 L20,50 L40,52 L60,44 L80,46 L100,36 L120,40 L140,30 L160,34 L180,22 L200,26 L220,18 L240,20 L260,12 L280,14 L300,8 L300,72 L0,72 Z" fill="url(#chartGrad)" />
                          <path d="M0,55 L20,50 L40,52 L60,44 L80,46 L100,36 L120,40 L140,30 L160,34 L180,22 L200,26 L220,18 L240,20 L260,12 L280,14 L300,8" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          {[0,20,40,60,80,100,120,140,160,180].map((x, i) => (
                            <rect key={i} x={x} y={62 + (i % 3) * 2} width="14" height={4 + (i % 3) * 2} rx="1" fill="rgba(239,68,68,0.3)" />
                          ))}
                          <circle cx="300" cy="8" r="3" fill="#dc2626" />
                          <line x1="0" y1="8" x2="300" y2="8" stroke="rgba(220,38,38,0.15)" strokeWidth="1" strokeDasharray="4,4" />
                        </svg>
                      </div>

                      {/* AI Signal */}
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-2.5 flex items-center gap-2.5 mb-2.5">
                        <div className="w-[30px] h-[30px] rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0 text-accent font-bold text-sm">⚡</div>
                        <div className="flex-1">
                          <div className="text-[0.72rem] font-bold text-accent">AI SIGNAL: BUY</div>
                          <div className="text-[0.62rem] text-ink-soft mt-0.5">Momentum breakout detected — RSI + volume confirmation</div>
                        </div>
                        <div className="text-[0.68rem] font-bold text-accent bg-accent/15 px-2 py-1 rounded">82% conf.</div>
                      </div>

                      {/* Risk controls */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { label: 'Stop Loss', value: 'Active', ok: true },
                          { label: 'Take Profit', value: '$69,800', ok: true },
                          { label: 'Risk per trade', value: '2%', ok: false },
                          { label: 'Positions open', value: '3 / 10', ok: true },
                        ].map((r) => (
                          <div key={r.label} className="bg-deep border border-border rounded-md px-2 py-2">
                            <div className="text-[0.58rem] font-semibold text-ink-soft uppercase tracking-wider mb-1">{r.label}</div>
                            <div className={cn('text-[0.78rem] font-bold', r.ok ? 'text-success' : 'text-warning')}>{r.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            MARKETS STRIP
        ═══════════════════════════════════════════════ */}
        <div className="py-7 border-y border-border bg-navy overflow-hidden">
          <div className="flex gap-3 animate-marquee w-max">
            {[...marketPills, ...marketPills].map((m, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full border border-border bg-deep whitespace-nowrap flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-ink">{m.name}</span>
                <span className="text-xs text-ink-soft">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            FEATURES
        ═══════════════════════════════════════════════ */}
        <section className="py-[100px] bg-deep">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Platform capabilities</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Everything you need,<br />
                <span className="font-light italic text-ink-soft">nothing you don&rsquo;t.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {[
                {
                  num: '01', icon: '⏱', iconColor: 'text-accent', iconBg: 'bg-accent/10',
                  title: 'Real-time market analysis',
                  body: 'Tradvio AI scans live price feeds across all your connected markets simultaneously — identifying patterns, momentum shifts and entry signals the moment they emerge. No delay, no guesswork.',
                },
                {
                  num: '02', icon: '◆', iconColor: 'text-accent', iconBg: 'bg-accent/10',
                  title: 'Strategy automation',
                  body: 'Set your strategy parameters once. Tradvio AI executes trades automatically, around the clock across every market you trade. You define the rules — the platform works the hours.',
                },
                {
                  num: '03', icon: '🛡', iconColor: 'text-accent', iconBg: 'bg-accent/10',
                  title: 'Built-in risk controls',
                  body: 'Configurable stop-loss limits, per-trade risk caps and drawdown protections are native to every position. Your funds always remain in your own broker or exchange account — Tradvio AI never holds your capital.',
                },
                {
                  num: '04', icon: '📈', iconColor: 'text-accent', iconBg: 'bg-accent/10',
                  title: 'Backtesting engine',
                  body: 'Test any strategy against historical market data before risking a penny live. The backtesting module lets you validate, refine and compare strategies with complete transparency.',
                },
              ].map((f) => (
                <div key={f.num} className="bg-navy p-11 hover:bg-medium-navy transition-colors relative overflow-hidden group">
                  <div className="absolute top-8 right-8 text-[3.5rem] font-bold leading-none text-accent/[0.08] select-none">{f.num}</div>
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5', f.iconBg)}>
                    <span className="text-xl">{f.icon}</span>
                  </div>
                  <h3 className="text-[1.35rem] font-bold text-ink mb-2.5">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-[100px] bg-navy border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Getting started</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                From signup to<br /><em className="italic text-accent not-italic">live trading</em> in four steps.
              </h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              <div>
                {stepData.map((step, i) => (
                  <div
                    key={step.num}
                    className={cn(
                      'flex gap-5 py-6 px-3 border-b border-border last:border-b-0 cursor-pointer rounded-lg transition-colors',
                      i === activeStep ? 'bg-accent/5' : 'hover:bg-white/[0.03]'
                    )}
                    onClick={() => setActiveStep(i)}
                  >
                    <div className={cn(
                      'w-[38px] h-[38px] rounded-full border flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all',
                      i === activeStep ? 'bg-accent text-white border-accent' : 'border-border text-ink-soft'
                    )}>
                      {step.num}
                    </div>
                    <div>
                      <div className="font-bold text-[0.95rem] text-ink mb-1">{step.title}</div>
                      <div className="text-[0.82rem] text-ink-soft leading-relaxed">{step.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy border border-border rounded-2xl p-10 min-h-[380px] flex flex-col justify-center lg:sticky lg:top-[90px]">
                <div className="text-[6rem] font-bold leading-none text-accent/[0.06] mb-4 select-none">{stepData[activeStep].num}</div>
                <h3 className="text-2xl font-bold text-ink mb-3">{stepData[activeStep].title}</h3>
                <p className="text-[0.93rem] text-ink-soft leading-relaxed max-w-[380px]">{stepData[activeStep].body}</p>
                <div className="mt-5 pl-4 py-2.5 border-l-[3px] border-accent bg-accent/[0.04] rounded-r-md">
                  <span className="text-sm text-accent">{stepData[activeStep].note}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            WHY AI vs MANUAL
        ═══════════════════════════════════════════════ */}
        <section className="py-[100px] bg-deep">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Intelligent edge</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                AI-powered<br />vs. manual trading.
              </h2>
            </div>

            <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0">
              <div className="pr-8 md:pr-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-accent/10 text-accent border border-accent/25">Tradvio AI</span>
                <h3 className="text-[1.6rem] font-bold text-ink mb-4 leading-tight">Always on. Always analytical.</h3>
                <ul className="space-y-3">
                  {[
                    'Monitors markets 24/7 without fatigue or distraction',
                    'Executes strategy rules consistently — no emotional drift',
                    'Processes real-time data across multiple markets simultaneously',
                    'Backtests strategies before any live capital is deployed',
                    'Configurable risk controls enforce discipline automatically',
                    'Available on web, iOS and Android — monitor anytime',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-px bg-border hidden md:block" />

              <div className="md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-border">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-danger/10 text-danger border border-danger/20">Manual trading</span>
                <h3 className="text-[1.6rem] font-bold text-ink mb-4 leading-tight">Human limits in a 24/7 market.</h3>
                <ul className="space-y-3">
                  {[
                    'Limited to market hours and personal screen time',
                    'Emotional decisions can override a well-reasoned plan',
                    'Difficult to track multiple assets at the same time',
                    'Strategy testing often relies on hindsight, not data',
                    'Risk management depends on self-discipline under pressure',
                    'Missed signals during sleep or away from the screen',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-danger" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            APP / MULTI-DEVICE
        ═══════════════════════════════════════════════ */}
        <section className="py-[100px] bg-navy border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Multi-platform</div>
                <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
                  Your positions.<br /><em className="italic text-ink-soft not-italic">Any device.</em>
                </h2>
                <p className="text-lg text-muted-dark leading-relaxed mb-7 max-w-[420px]">
                  The Tradvio AI platform runs seamlessly across web, iOS and Android.
                  Monitor your portfolio, review AI signals and adjust your strategy wherever you are.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-ink-soft">
                    <div className="w-11 h-11 rounded-[10px] border border-border bg-deep flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-ink-soft"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.08 2.32.76 3.1.78 1.19-.24 2.32-.93 3.54-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.52 4.01zM12 7.36c-.15-2.78 2.25-5.07 4.84-5.36.32 2.97-2.68 5.27-4.84 5.36z"/></svg>
                    </div>
                    iOS App — available on the App Store
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-ink-soft">
                    <div className="w-11 h-11 rounded-[10px] border border-border bg-deep flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-ink-soft"><path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86z"/></svg>
                    </div>
                    Android App — available on Google Play
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-ink-soft">
                    <div className="w-11 h-11 rounded-[10px] border border-border bg-deep flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-soft"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                    </div>
                    Web platform — full-featured browser access
                  </li>
                </ul>
                <a href="/get-started/" className="btn btn-primary">Start for free →</a>
              </div>
              <div className="flex gap-4 items-end justify-center" aria-hidden="true">
                <div className="w-[110px] h-[200px] bg-medium-navy border border-border rounded-[20px] overflow-hidden p-2 flex flex-col gap-1.5">
                  <div className="h-1 rounded-sm bg-accent w-3/5" />
                  <div className="h-1 rounded-sm bg-white/10 w-2/5" />
                  <div className="flex-1 flex items-end gap-[3px] pt-2">
                    {[30,55,70,45,85,60,90].map((h, i) => (
                      <div key={i} className={cn('flex-1 rounded-t-sm', i % 2 === 0 ? 'bg-accent' : 'bg-white/10')} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="h-2.5 rounded-sm bg-white/10 w-3/5" />
                  </div>
                  <div className="h-3 rounded-sm bg-accent/15 w-4/5" />
                </div>
                <div className="w-[160px] h-[220px] bg-medium-navy border border-border rounded-[20px] overflow-hidden p-3 flex flex-col gap-1.5">
                  <div className="flex gap-1.5 mb-1.5">
                    <div className="h-3.5 rounded-md bg-accent/15 w-[45%]" />
                    <div className="h-3.5 rounded-md bg-white/10 w-[30%]" />
                  </div>
                  <div className="flex-1 flex items-end gap-[3px]">
                    {[40,65,50,80,55,95,70,85].map((h, i) => (
                      <div key={i} className={cn('flex-1 rounded-t-sm', i % 3 === 0 ? 'bg-accent' : 'bg-white/10')} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1.5">
                    <div className="bg-accent/5 border border-accent/20 rounded-md p-1.5">
                      <div className="h-1.5 rounded-sm bg-accent/30 w-3/5 mb-1" />
                      <div className="h-2 rounded-sm bg-accent/50 w-2/5" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-md p-1.5">
                      <div className="h-1.5 rounded-sm bg-white/20 w-[70%] mb-1" />
                      <div className="h-2 rounded-sm bg-white/40 w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════════════ */}
        <section className="py-16 bg-deep">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {[
                { num: '$2.4B+', label: 'Notional volume analysed monthly' },
                { num: '140ms', label: 'Average signal latency' },
                { num: '99.95%', label: 'Platform uptime' },
                { num: '4.7M+', label: 'Backtests run to date' },
              ].map((s) => (
                <div key={s.label} className="bg-deep py-8 px-6 text-center">
                  <div className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink leading-none">{s.num}</div>
                  <div className="text-xs text-ink-soft mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="py-[100px] bg-deep">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Common questions</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">Frequently asked<br /><span className="font-light italic text-ink-soft">questions.</span></h2>
            </div>
            <div className="max-w-[760px] mx-auto">
              {faqItems.map((item, i) => (
                <div key={i} className="border-b border-border">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-5 flex justify-between items-center gap-4 text-ink hover:text-accent transition-colors text-[0.95rem] font-semibold bg-transparent border-none cursor-pointer">
                    {item.q}
                    <div className={cn('w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-all text-ink-soft', openFaq === i && 'bg-accent border-accent text-white rotate-45')}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="0" x2="6" y2="12"/><line x1="0" y1="6" x2="12" y2="6"/></svg>
                    </div>
                  </button>
                  <div className={cn('overflow-hidden transition-all duration-300', openFaq === i ? 'max-h-[400px]' : 'max-h-0')}><div className="pb-5 text-sm text-ink-soft leading-relaxed">{item.a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-[90px] bg-gradient-to-b from-navy to-deep border-t border-border text-center relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">Start researching markets<br /><em className="italic text-accent not-italic">like a professional.</em></h2>
            <p className="text-lg text-muted-dark max-w-[480px] mx-auto mb-8">Free to start, no credit card required. Paper trade first, go live only when you&rsquo;re ready.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/get-started/" className="btn btn-primary btn-lg">Start free analysis →</a>
              <a href="/leaderboard/" className="btn btn-secondary btn-lg">See the leaderboard</a>
            </div>
            <p className="text-xs text-ink-soft mt-7 max-w-[520px] mx-auto leading-relaxed">
              Trading involves risk. Profits are never guaranteed and you may lose some or all of your invested capital.
              Tradvio AI is a research and analysis platform, not a broker, and does not provide financial advice.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
