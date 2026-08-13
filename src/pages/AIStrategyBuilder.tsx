import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const faqItems = [
  { q: 'Do I need to know how to code?', a: 'No. Describe your strategy in plain English and the AI writes the code for you. The generated code stays visible and editable in the built-in editor — so you can learn from it or tweak it anytime.' },
  { q: 'Does AI trade for me?', a: 'No. The AI builds strategies — it does not execute trades autonomously. You review the code, validate the backtest, and decide when to deploy. You stay in control at every step.' },
  { q: 'Can I edit what the AI builds?', a: 'Yes. Every strategy opens in the same visual builder and code editor. Change indicators, adjust risk rules, or rewrite logic — your strategy, your way.' },
  { q: 'Can AI run a backtest for me?', a: 'Yes. One click runs your strategy against historical data. The AI explains the results — returns, win rate, drawdown — and suggests changes to improve performance.' },
  { q: 'What if AI makes a bad strategy?', a: 'You don\'t deploy it. Backtest results, version control, and live monitoring decide quality. Every strategy must prove itself on historical data before it goes near a live market.' },
  { q: 'Which markets can I build strategies for?', a: 'Stocks, crypto, forex, commodities, indices, ETFs, and CFDs — over 1,600 markets with institutional-grade historical data for backtesting.' },
];

const features = [
  { title: 'Natural language', desc: 'Describe your strategy in plain English. The AI translates it into clean, executable code — no programming required.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { title: 'Instant backtesting', desc: 'One-click testing on real market data. See returns, win rate, and drawdown before you risk a penny.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'Strategy conversion', desc: 'Already have a Pine Script or MQL5 strategy? The AI converts it automatically with full backtesting support.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1"/><path d="M16 3h1a2 2 0 012 2v5a2 2 0 002 2 2 2 0 00-2 2v5a2 2 0 01-2 2h-1"/></svg> },
  { title: 'Chart analysis', desc: 'Upload chart screenshots and the AI analyses the patterns — then builds a strategy around what it sees.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg> },
  { title: 'Real market data', desc: 'Attach live candle data from supported exchanges and platforms. Every backtest runs on real spreads and slippage.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { title: 'Version control', desc: 'Every edit creates a new version. Compare, restore, or fork strategies — your full history is always safe.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 9v6M18 9a3 3 0 010 6"/></svg> },
];

const steps = [
  { step: '01', title: 'Describe your idea', desc: 'Tell the AI your indicators, conditions, and risk rules — in plain English.' },
  { step: '02', title: 'Review the code', desc: 'The AI generates clean, editable code. Review it in the built-in editor.' },
  { step: '03', title: 'Backtest instantly', desc: 'Run a quick test or a full backtest with custom dates and real market data.' },
  { step: '04', title: 'Deploy live', desc: 'Save your strategy, connect your platform, and put it to work.' },
];

const failureModes = [
  { problem: 'AI alone', title: 'Hallucinated functions', desc: 'Ask an LLM to "write a trading strategy" and it invents functions, parameters, and indicators that don\'t exist. The result looks right and trades wrong.', solution: 'With Tradvio AI', solDesc: 'The AI is constrained to a validated component system. Every output is structurally correct — indicators, sizing, risk rules, and costs all built in.' },
  { problem: 'AI without backtests', title: 'A guess in disguise', desc: 'Untested strategies are guesses dressed up as recommendations. Without historical validation, you\'re flying blind.', solution: 'With Tradvio AI', solDesc: 'Backtest as a portfolio with real fees, slippage, and funding. Your strategy must prove itself on data before deployment.' },
  { problem: 'AI without ownership', title: 'Black-box signals', desc: 'Black-box signals leave you no leverage when market conditions change. You can\'t edit what you can\'t see.', solution: 'With Tradvio AI', solDesc: 'Edit, fork, version, and iterate. The strategy is yours — every line of code visible and modifiable.' },
];

const codeExample = `// RSI + MACD crossover strategy
// Generated by Tradvio AI — editable

const config = {
  rsiPeriod: 14,
  rsiOversold: 30,
  macdFast: 12,
  macdSlow: 26,
  macdSignal: 9,
  stopLossPct: 2,
  takeProfitPct: 4,
};

function onCandle(candle, state) {
  const rsi = td.indicators.rsi(candle, config.rsiPeriod);
  const macd = td.indicators.macd(
    candle, config.macdFast, config.macdSlow, config.macdSignal
  );

  const macdBullishCross =
    macd.histogram > 0 && state.prevHistogram <= 0;
  state.prevHistogram = macd.histogram;

  if (rsi < config.rsiOversold && macdBullishCross) {
    const stopLoss = candle.close * (1 - config.stopLossPct / 100);
    const takeProfit = candle.close * (1 + config.takeProfitPct / 100);

    td.buy({
      allocation: 100,
      stopLoss,
      takeProfit,
      reason: 'RSI oversold + MACD bullish crossover',
    });
  }
}`;

export default function AIStrategyBuilder() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AI Strategy Builder — Build, Backtest & Deploy Trading Strategies | Tradvio AI</title>
        <meta name="description" content="Describe your strategy in plain English. Tradvio AI writes the code, backtests it instantly, and deploys it live. No coding required. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/ai-strategy-builder/" />
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
                <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                  Meet your AI<br />
                  <span className="text-accent">Strategy Builder.</span>
                </h1>
                <p className="text-lg text-muted-dark leading-relaxed mb-8 max-w-[500px]">
                  Describe your strategy in plain English. Tradvio AI writes the code, backtests it instantly against real market data, and deploys it live. Build, test, and launch — no coding required.
                </p>
                <div className="flex gap-3 flex-wrap mb-6">
                  <a href="/get-started/" className="btn btn-primary btn-lg">Try Free — No Card Needed</a>
                  <a href="#how-it-works" className="btn btn-secondary btn-lg">How it works</a>
                </div>
                <div className="flex items-center gap-4 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> No coding required</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Instant backtesting</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Deploy in minutes</span>
                </div>
              </div>

              {/* Right — Chat mockup */}
              <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">AI Strategist</span>
                  <span className="text-[0.6rem] text-success font-bold">● ONLINE</span>
                </div>
                <div className="p-5 space-y-4">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-accent text-white rounded-xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%]">
                      Build me a strategy: RSI below 30 with MACD bullish crossover. 2% stop-loss, 4% take-profit, BTC/USD 1H.
                    </div>
                  </div>
                  {/* AI message */}
                  <div className="flex justify-start">
                    <div className="bg-deep border border-border rounded-xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center font-mono font-bold text-[0.6rem]">AI</span>
                        <span className="font-semibold text-ink">Strategy generated</span>
                      </div>
                      <p className="text-ink-soft text-xs leading-relaxed">
                        I've created <span className="font-mono text-accent">rsi_macd_btc.py</span>. Conditions: RSI(14) &lt; 30, MACD(12,26,9) bullish cross. Stop 2%, target 4%. Want me to run a backtest on the last 90 days?
                      </p>
                    </div>
                  </div>
                  {/* Code preview */}
                  <div className="bg-deep border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[0.65rem] text-ink-soft">rsi_macd_btc.py</span>
                      <span className="text-[0.6rem] text-success font-bold">✓ Validated</span>
                    </div>
                    <pre className="font-mono text-[0.62rem] text-ink-soft leading-relaxed overflow-x-auto whitespace-pre">{codeExample}</pre>
                  </div>
                  {/* Backtest summary */}
                  <div className="bg-deep border border-border rounded-xl p-4 grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold text-success">+32.5%</div>
                      <div className="text-[0.6rem] text-ink-soft uppercase tracking-wider mt-0.5">Return (90d)</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold text-ink">64.2%</div>
                      <div className="text-[0.6rem] text-ink-soft uppercase tracking-wider mt-0.5">Win rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold text-danger">-11.4%</div>
                      <div className="text-[0.6rem] text-ink-soft uppercase tracking-wider mt-0.5">Max drawdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ AI WITH RAILS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">AI with rails</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Three failure modes<br />
                <span className="text-ink-soft font-light italic">of AI-only trading.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {failureModes.map((f) => (
                <div key={f.title} className="grid md:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden">
                  <div className="p-6 bg-deep">
                    <div className="text-[0.62rem] uppercase tracking-[0.12em] text-danger font-bold mb-2">{f.problem}</div>
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="p-6 bg-deep border-t md:border-t-0 md:border-l border-border">
                    <div className="text-[0.62rem] uppercase tracking-[0.12em] text-success font-bold mb-2">{f.solution}</div>
                    <p className="text-sm text-muted-dark leading-relaxed">{f.solDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Features</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                AI that understands<br />
                <span className="text-ink-soft font-light italic">trading.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                From idea to live strategy<br />
                <span className="text-ink-soft font-light italic">in four steps.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ BUILT FOR EVERY TRADER ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for every trader</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Whether you code<br />
                <span className="text-ink-soft font-light italic">or not.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'No-code trading', desc: 'Go from idea to working strategy without writing a single line of code. The AI handles the technical side.' },
                { title: 'Strategy migration', desc: 'Bring your Pine Script or MQL5 strategies. The AI converts them automatically with full backtesting support.' },
                { title: 'Rapid prototyping', desc: 'Test dozens of variations in minutes. Tweak a parameter, rerun the backtest, compare results side by side.' },
              ].map((b) => (
                <div key={b.title} className="bg-navy border border-border rounded-xl p-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden max-w-4xl mx-auto">
              {[
                { value: '1,600+', label: 'Markets supported' },
                { value: '7', label: 'Asset classes' },
                { value: '10 min', label: 'To first backtest' },
                { value: '24/7', label: 'AI available' },
              ].map((s) => (
                <div key={s.label} className="bg-navy py-6 px-4 text-center">
                  <div className="text-2xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-ink-soft mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                AI strategy builder<br />
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
              Start with an idea.<br />
              <span className="text-accent">We&rsquo;ll help you prove it.</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              You don&rsquo;t need a perfect plan — just an idea worth testing. Most traders have a working backtest within 10 minutes.
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">Start Building →</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              Backtesting uses historical data. Past performance does not guarantee future results.
              Trading involves risk — only trade with capital you can afford to lose.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
