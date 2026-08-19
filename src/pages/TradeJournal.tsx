import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const faqItems = [
  { q: 'What is a trading journal, and why do I need one?', a: 'A trading journal records every trade you take — entries, exits, size, results, and the reasoning behind each decision. You need one because memory is unreliable: a journal turns scattered trades into data you can analyse, so you stop repeating mistakes and start repeating what works.' },
  { q: 'How can a trading journal help me reduce mistakes?', a: 'By showing you your own patterns. Most traders repeat the same 3–5 mistakes — entering late, cutting winners early, revenge trading after losses. The journal surfaces these patterns so you can catch them before they cost you money again.' },
  { q: 'Can I track multiple trading accounts in one journal?', a: 'Yes. Connect multiple broker accounts across forex, stocks, and crypto. All your trades flow into one dashboard with combined analytics and per-account breakdowns.' },
  { q: 'What trading platforms does the journal sync with?', a: 'We support auto-sync with major platforms and universal CSV import for everything else. If your broker or platform exports trade history, we can import it — the smart importer auto-maps columns so setup takes seconds.' },
  { q: 'How does the AI tag engine work?', a: 'Tag your trades with strategies, emotions, market conditions, and mistakes. The AI analyses which tag combinations produce your best and worst results, then surfaces the setups you should trade more — and less.' },
  { q: 'Is the trading journal included in the free plan?', a: 'Yes. The journal is free to start with no credit card required. Every trade you log, every insight the AI surfaces — available on the free plan from day one.' },
];

const whyJournal = [
  { title: 'No plan, no direction', desc: 'Trading without a journal is trading blind. There is nowhere to map your entries, exits, and strategy — so improvement becomes impossible.' },
  { title: 'Consistency builds results', desc: 'The act of journaling builds discipline. When you must write down the reasoning behind every trade, you stop taking trades that have none.' },
  { title: "See what's really working", desc: 'A journal shows whether your strategy actually delivers. Not what you believe — what the data proves across hundreds of trades.' },
  { title: 'Improve with insight', desc: 'Patterns reveal your strengths, weaknesses, and emotional triggers. The journal turns "I think" into "I know".' },
];

const steps = [
  { step: '01', title: 'Record every trade', desc: 'Capture context with screenshots, tags, and emotions. Automatic imports from your broker mean every fill is logged without lifting a finger.' },
  { step: '02', title: 'Review the story', desc: 'Spot what\'s working via metrics, charts, and filters. See your win rate by setup, your P&L by market, and your mistakes by tag.' },
  { step: '03', title: 'Refine your strategy', desc: 'Turn insights into action. Adjust your plan for next week based on real data — not gut feeling.' },
];

const features = [
  { label: 'Realtime', title: 'Automatic imports', desc: 'Auto-sync your broker fills. Connect an account and trades import with symbol, entry/exit, size, fees, and P&L.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"/></svg> },
  { label: 'Context', title: 'Unlimited notes & images', desc: 'Rich-text notes and unlimited screenshots per entry to record your plan, reasoning, execution, and chart setup.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: 'Speed', title: 'Journal templates', desc: 'Reusable templates with your preferred prompts — setup rules, entry trigger, risk, exit reason, lesson learned.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { label: 'Strategy', title: 'Strategy library', desc: 'Track all your trading strategies in one place and evaluate each one\'s performance separately.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { label: 'Focus', title: 'MAE & MFE charts', desc: 'Maximum adverse and favourable excursion per session — see how far trades go against you and how much profit you give back.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { label: 'Insight', title: 'Strategy tag filters', desc: 'Tag by strategy, mistake type, market condition, emotion, or rating. Filter to see exactly what drives your results.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { label: 'Analytics', title: 'Trade metrics', desc: 'Equity curve, win rate, and risk-reward trends always visible. Every metric updates the moment a trade is logged.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { label: 'Review', title: 'Self-assessment ratings', desc: 'Rate your execution quality, setup quality, and discipline on every trade. Track how these scores trend over time.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const platformSync = [
  { name: 'MetaTrader', status: 'sync', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { name: 'cTrader', status: 'sync', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="14" rx="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg> },
  { name: 'TradeLocker', status: 'sync', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { name: 'Tradovate', status: 'sync', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { name: 'NinjaTrader', status: 'sync', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { name: 'CSV Import', status: 'upload', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> },
  { name: 'MT4 / MT5 files', status: 'upload', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg> },
];

export default function TradeJournal() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Trade Journal — The Journal That Doesn't Just Track. It Improves. | Tradvio AI</title>
        <meta name="description" content="Track every trade with Tradvio AI's journal. Automatic imports, AI insights, tag filters, and emotion tracking. Free to start — no credit card required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/trade-journal/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-accent bg-accent/10 text-xs font-semibold mb-6">
                Free with any Tradvio AI plan
              </div>
              <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                Trading <span className="text-accent">Journal</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink mb-4">
                This trading journal doesn&rsquo;t just track. <span className="text-accent">It improves.</span>
              </p>
              <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
                Track every trade, record your reasoning, add screenshots, and build a history of decisions. Tradvio AI finds the patterns, so you can refine what works and cut what doesn&rsquo;t.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">Start Free — No Credit Card</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY JOURNAL MATTERS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why it matters</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Why keeping a trade journal<br />
                <span className="text-ink-soft font-light italic">matters.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyJournal.map((w, i) => (
                <div key={w.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA band */}
            <div className="mt-12 bg-deep border border-border rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to journal?</h3>
              <p className="text-muted-dark mb-5">Start tracking your trades today.</p>
              <a href="/get-started/" className="btn btn-primary">Start Free — No Credit Card</a>
            </div>
          </div>
        </section>

        {/* ═══════════ THREE STEPS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Simple loop</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Improve your trading<br />
                <span className="text-ink-soft font-light italic">in three steps.</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">Record clean data, review the patterns, refine next week&rsquo;s plan.</p>
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

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Features</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Designed to keep you<br />
                <span className="text-ink-soft font-light italic">consistent.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">{f.icon}</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.12em] text-accent font-bold mb-1.5">{f.label}</div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ AI TAG ENGINE ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">AI Tag Engine</div>
                <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                  See what works —<br />
                  <span className="text-ink-soft font-light italic">and what doesn&rsquo;t.</span>
                </h2>
                <p className="text-muted-dark leading-relaxed mb-4">
                  Tag every trade with your strategy, emotion, market condition, and mistake type. The AI analyses every combination and tells you which setups deliver the best win rates and returns.
                </p>
                <p className="text-muted-dark leading-relaxed mb-8">
                  Stop guessing. The tag engine surfaces your edge — and your leaks — automatically.
                </p>
                <a href="/get-started/" className="btn btn-primary">Try now</a>
              </div>

              {/* Tag insights mockup */}
              <div className="bg-navy border border-border rounded-2xl overflow-hidden">
                <div className="bg-medium-navy border-b border-border px-4 py-3">
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">Smart picks</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { combo: 'Breakout + Confident', winRate: '72%', trades: 38, clr: 'text-success' },
                    { combo: 'Trend-following + Neutral', winRate: '64%', trades: 51, clr: 'text-success' },
                    { combo: 'Reversal + Cautious', winRate: '48%', trades: 22, clr: 'text-warning' },
                    { combo: 'Scalping + FOMO', winRate: '31%', trades: 19, clr: 'text-danger' },
                    { combo: 'Breakout + Hesitant', winRate: '44%', trades: 27, clr: 'text-warning' },
                  ].map((row) => (
                    <div key={row.combo} className="flex items-center justify-between bg-deep border border-border rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-ink">{row.combo}</span>
                      <span className={cn('font-mono text-sm font-bold', row.clr)}>
                        {row.winRate} <span className="text-ink-soft font-normal text-xs">· {row.trades} trades</span>
                      </span>
                    </div>
                  ))}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-xs text-ink-soft leading-relaxed">
                    <span className="text-accent font-bold">AI Insight:</span> Your breakout trades with confidence are your #1 setup. FOMO trades cost you $1,240 last month — consider a 10-minute cooldown rule.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PLATFORM SYNC ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Sync platforms</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Connect once —<br />
                <span className="text-ink-soft font-light italic">sync forever.</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">Bring your trade history with you. Auto-sync from your broker or import any CSV.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
              {platformSync.map((p) => (
                <div key={p.name} className="bg-deep border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {p.icon}
                  </div>
                  <div className="text-sm font-semibold text-ink mb-1">{p.name}</div>
                  <div className={cn('text-[0.65rem] font-bold uppercase tracking-wider', p.status === 'sync' ? 'text-success' : 'text-warning')}>
                    {p.status === 'sync' ? 'Sync now' : 'Upload file'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Have questions?<br />
                <span className="text-ink-soft font-light italic">We&rsquo;ve got answers.</span>
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

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">Join us</div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              More than journaling —<br />
              <span className="text-accent">it&rsquo;s strategy in motion.</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              Free with any Tradvio AI plan. No credit card required.
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">Try the Journal →</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              Trading involves risk. Journaling doesn&rsquo;t eliminate losses — it helps you understand them.
              Past performance does not guarantee future results.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
