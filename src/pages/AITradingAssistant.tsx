import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const faqItems = [
  { q: 'What is an AI trading assistant?', a: 'An AI trading assistant is software that watches the markets for you — analysing charts, spotting patterns, and delivering structured trade recommendations with entry points, stop-losses, and risk guidance. It does the searching; you make the final call.' },
  { q: 'How does it work?', a: 'The assistant continuously monitors your charts and market data. When it spots a setup, it analyses the pattern, identifies support/resistance levels, and builds a complete trade plan with entry, exit, and risk levels — delivered to your dashboard in seconds.' },
  { q: 'Does it replace manual trading?', a: 'No. The assistant is a research tool, not a replacement for your judgment. It handles the scanning and analysis so you can focus on decision-making. You always stay in control of every trade.' },
  { q: 'Which platforms does it work with?', a: 'It works alongside TradingView, MetaTrader, Interactive Brokers, and other major trading platforms. Chart uploads are also supported — upload a screenshot and get analysis in seconds.' },
  { q: 'How accurate is the AI analysis?', a: 'Our pattern recognition is validated at 94% accuracy on standard technical formations. But no tool is right every time — every signal includes a confidence score, and risk management is built into every recommendation.' },
  { q: 'Which markets are covered?', a: 'Stocks, crypto, forex, commodities, indices, ETFs, and CFDs. The assistant analyses 26+ indicators across multiple timeframes for every market you trade.' },
];

const steps = [
  { step: '01', title: 'Auto Capture', desc: 'Connect your trading platform or upload charts. The assistant captures and monitors your markets automatically — no manual data entry.' },
  { step: '02', title: 'AI Analysis', desc: 'The AI identifies patterns, support/resistance levels, trend direction, and momentum shifts — with confidence scoring on every finding.' },
  { step: '03', title: 'Get Signals', desc: 'Receive structured recommendations with entry price, stop-loss, take-profit, and risk/reward ratio. Act on them or ignore them — you decide.' },
];

const whyChoose = [
  { title: '24/7 Monitoring', desc: 'Around-the-clock market coverage. The AI never sleeps, never fatigues, and never misses a setup because it was away from the screen.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'Instant Analysis', desc: 'Chart analysis in seconds, not hours. Upload a screenshot and get a full technical breakdown while your coffee is still warm.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'Risk Management', desc: 'Stop-loss and position sizing recommendations built into every signal. The AI protects your capital as it searches for opportunity.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'Multi-Platform', desc: 'Works alongside TradingView, MetaTrader, Interactive Brokers, and other major platforms. One assistant for every market you trade.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
];

const timeframes = [
  { tf: '1–5 min', name: 'Scalping', desc: 'Micro-patterns, momentum shifts, and tight support/resistance. Ideal for fast execution and short holds.', tag: 'Fastest' },
  { tf: '5–30 min', name: 'Intraday', desc: 'Trend structure, VWAP relationships, and key levels. The sweet spot for most active traders.', tag: 'Most popular' },
  { tf: '1–4 hr', name: 'Swing Setup', desc: 'Multi-day structures, trend channels, and flag patterns for trades held across sessions.', tag: 'Swing' },
  { tf: 'Daily+', name: 'Position', desc: 'Major trend direction, weekly levels, and long-term formations for patient traders.', tag: 'Long-term' },
];

const stats = [
  { value: '+23%', label: 'Win rate improvement' },
  { value: '50ms', label: 'Signal to alert latency' },
  { value: '94%', label: 'Pattern recognition accuracy' },
  { value: '2–3 hrs', label: 'Saved per day' },
];

export default function AITradingAssistant() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AI Trading Assistant — Your Assistant for Smarter Decisions | Tradvio AI</title>
        <meta name="description" content="Your AI trading assistant for smarter decisions. Automatic chart analysis, AI-powered signals, risk management, and 24/7 monitoring. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/ai-trading-assistant/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left — copy */}
              <div>
                <h1 className="text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                  Your AI trading assistant<br />
                  <span className="text-accent">for smarter decisions.</span>
                </h1>
                <p className="text-lg text-muted-dark leading-relaxed mb-8 max-w-[500px]">
                  Fragmented charts, endless news feeds, and hours of manual analysis — replaced by one assistant. Tradvio AI watches your markets, spots the setups, and delivers structured trade plans with confidence scores.
                </p>
                <div className="flex gap-3 flex-wrap mb-8">
                  <a href="/get-started/" className="btn btn-primary btn-lg">Start Trading Smarter</a>
                  <a href="#how-it-works" className="btn btn-secondary btn-lg">How it works</a>
                </div>

                {/* Trust checklist */}
                <div className="grid grid-cols-2 gap-2.5 max-w-[440px]">
                  {['Auto Chart Analysis', 'AI-Powered Signals', 'Risk Management', '24/7 Monitoring'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                      <svg className="w-4 h-4 flex-shrink-0 text-success" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — AI status card */}
              <div className="bg-navy border border-border rounded-2xl p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-ink">AI Assistant</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-success">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                    </span>
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Chart Analysis', status: 'Running', detail: 'BTC/USD · 1H · 26 indicators' },
                    { label: 'Trading Signals', status: 'Generated', detail: '3 new signals this session' },
                    { label: 'Market Scanning', status: 'Active', detail: '12 markets monitored' },
                    { label: 'Risk Checks', status: 'Passed', detail: 'All positions within limits' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between bg-deep border border-border rounded-lg px-4 py-3">
                      <div>
                        <div className="text-sm font-medium text-ink">{row.label}</div>
                        <div className="text-[0.65rem] text-ink-soft mt-0.5">{row.detail}</div>
                      </div>
                      <span className="text-xs font-bold text-success">✓ {row.status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Latest recommendation</span>
                    <span className="text-[0.65rem] text-ink-soft">2 min ago</span>
                  </div>
                  <p className="text-sm text-ink">
                    <span className="font-mono font-bold">BTC/USD</span> — Momentum breakout detected.
                    Entry 68,420 · Stop 65,800 · Target 72,100 · <span className="text-accent font-bold">78% confidence</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-16 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy py-8 px-6 text-center">
                  <div className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-accent leading-none">{s.value}</div>
                  <div className="text-xs text-ink-soft mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Capture. Analyse.<br />
                <span className="text-ink-soft font-light italic">Act with confidence.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              <div className="absolute top-10 left-[15%] right-[15%] h-px bg-border hidden sm:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CHOOSE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why choose Tradvio AI</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                An assistant that<br />
                <span className="text-ink-soft font-light italic">never clocks out.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">{f.icon}</div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TIMEFRAME ANALYSIS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Timeframe analysis</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Built for every<br />
                <span className="text-ink-soft font-light italic">trading style.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeframes.map((t) => (
                <div key={t.tf} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-accent">{t.tf}</span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-ink-soft border border-border rounded-full px-2 py-0.5">{t.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Best practice */}
            <div className="mt-10 bg-navy border border-border rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="font-semibold text-ink mb-2">Multi-timeframe best practice</h3>
              <p className="text-sm text-muted-dark leading-relaxed">
                Use the higher timeframe to read the trend and the lower timeframe to time your entry. The assistant analyses both simultaneously — so every signal comes with the full picture, not just one window.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ AI VS MANUAL ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">AI vs Manual</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Your attention has limits.<br />
                <span className="text-ink-soft font-light italic">Your assistant doesn&rsquo;t.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-deep border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold mb-4">!</div>
                <h3 className="font-semibold mb-2">The problem: attention limits</h3>
                <p className="text-sm text-muted-dark leading-relaxed">Visual attention degrades after 20–30 minutes of chart watching. The setups you miss after hour two are often the best ones of the day.</p>
              </div>
              <div className="bg-deep border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold mb-4">!</div>
                <h3 className="font-semibold mb-2">The problem: inconsistency</h3>
                <p className="text-sm text-muted-dark leading-relaxed">After a win you trade too big. After a loss you hesitate. Emotions change your methodology — and your results show it.</p>
              </div>
              <div className="bg-deep border border-accent/30 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">✓</div>
                <h3 className="font-semibold mb-2">The solution: AI + human</h3>
                <p className="text-sm text-muted-dark leading-relaxed">The AI handles scanning and level detection — like a tireless junior analyst. You provide context and make the final call. The best of both.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                AI trading assistant<br />
                <span className="text-ink-soft font-light italic">questions.</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-navy border border-border rounded-xl p-5 group" open={i === 0}>
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
              Ready to get your<br />
              <span className="text-accent">AI trading assistant?</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              Free to start. No credit card required.
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">Get Started Free →</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              AI analysis can be incorrect. Trading involves risk — only trade with capital you can afford to lose.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
