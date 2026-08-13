import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const faqItems = [
  { q: 'How many consecutive losses does it take to blow an account?', a: 'It depends on how much you risk per trade. Risking 1% per trade means you would need about 100 consecutive losses to completely blow the account. Risking 4% means about 25 consecutive losses. Risking 10% means just 10 straight losses. The more you risk, the fewer losses it takes to wipe you out.' },
  { q: 'What percentage should I risk per trade?', a: 'Most professional traders risk 0.5%–4% of their account per trade. A conservative approach is 1% or less. Moderate risk is 2–4%. Risking more than 4% per trade is considered aggressive and significantly increases your probability of ruin.' },
  { q: 'What is risk of ruin in trading?', a: 'Risk of ruin is the probability that your account will hit zero (or your maximum acceptable drawdown) before you can recover. It is driven by your risk per trade, win rate, and the size of your losing streaks. Lower risk per trade dramatically reduces the probability of ruin.' },
  { q: 'How do I calculate risk per trade for futures?', a: 'For futures, risk per trade is calculated using tick values and contract sizes. Your dollar risk = number of ticks between entry and stop × tick value × number of contracts. Use the calculator with your account size to find how many contracts fit within your risk limit.' },
  { q: 'Is 2% risk per trade safe?', a: 'Risking 2% per trade is a widely used moderate standard. It would take roughly 50 consecutive losses to blow the account, which is statistically rare for most strategies. 1% is more conservative; above 4% you are entering aggressive territory.' },
  { q: 'How does win rate affect position sizing?', a: 'Higher win rates let you survive longer losing streaks with larger position sizes. A trader with a 70% win rate can risk more per trade than a 40% win-rate trader because their losing streaks will typically be shorter. The calculator shows your probability of ruin for different win rates.' },
  { q: 'Why do traders blow their accounts?', a: 'The most common reasons are risking too much per trade, averaging into losing positions, moving stop-losses wider, and revenge trading after losses. All of these increase your effective risk per trade far beyond what your plan intended.' },
];

function riskLevel(pct: number): { label: string; color: string; barColor: string } {
  if (pct <= 4) return { label: 'Conservative', color: 'text-success', barColor: 'bg-success' };
  if (pct <= 8) return { label: 'Moderate', color: 'text-warning', barColor: 'bg-warning' };
  if (pct <= 12) return { label: 'Aggressive', color: 'text-orange-400', barColor: 'bg-orange-400' };
  return { label: 'Extreme', color: 'text-danger', barColor: 'bg-danger' };
}

function probLevel(pct: number): { label: string; color: string } {
  if (pct < 20) return { label: 'Conservative', color: 'text-success' };
  if (pct < 30) return { label: 'Moderate', color: 'text-warning' };
  if (pct <= 45) return { label: 'Aggressive', color: 'text-orange-400' };
  return { label: 'Extreme', color: 'text-danger' };
}

export default function RiskCalculator() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [accountSize, setAccountSize] = useState('10000');
  const [riskPerTrade, setRiskPerTrade] = useState('400');
  const [riskPercent, setRiskPercent] = useState('4');

  const balance = parseFloat(accountSize) || 0;
  const riskDollars = parseFloat(riskPerTrade) || 0;
  const riskPct = parseFloat(riskPercent) || 0;

  // Consecutive losses until blown account
  const lossesUntilBlown = riskPct > 0 ? Math.ceil(100 / riskPct) : 0;
  const level = riskLevel(riskPct);

  // Probability of ruin: chance of hitting N consecutive losses within 100 trades
  const probOfStreak = (winRate: number): number => {
    if (lossesUntilBlown <= 0) return 0;
    const loseP = 1 - winRate / 100;
    const streakP = Math.pow(loseP, lossesUntilBlown);
    const expectedStreaks = Math.max(0, 100 - lossesUntilBlown + 1);
    const prob = 1 - Math.pow(1 - streakP, expectedStreaks);
    return Math.min(100, prob * 100);
  };

  const winRates = [40, 50, 60, 70];
  const requiredWinRate = lossesUntilBlown > 0 ? Math.max(20, Math.min(95, 100 - Math.pow(0.5, 1 / lossesUntilBlown) * 100)) : 0;

  return (
    <>
      <Helmet>
        <title>Risk Calculator — Risk Per Trade & Probability of Ruin | Tradvio AI</title>
        <meta name="description" content="Calculate your risk per trade, see how many consecutive losses it takes to blow your account, and understand the probability of hitting a losing streak." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/risk-calculator/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="pt-16 md:pt-24 pb-2 md:pb-4 bg-deep relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Free Trading Tool</div>
              <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                Risk <span className="text-accent">Calculator</span>
              </h1>
              <p className="text-lg text-muted-dark leading-relaxed max-w-[560px] mx-auto">
                Calculate your risk per trade, see how many consecutive losses it takes to blow your account, and understand the probability of hitting a losing streak.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ CALCULATOR ═══════════ */}
        <section id="calculator" className="py-16 md:py-20 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            {/* Inputs */}
            <div className="bg-navy border border-border rounded-2xl p-6 md:p-8 mb-6">
              <div className="space-y-6">
                {/* Account size */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-ink">account size / max drawdown</label>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft font-mono">$</span>
                    <input
                      type="number"
                      value={accountSize}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setAccountSize(e.target.value);
                        if (val > 0 && riskPct > 0) setRiskPerTrade((val * riskPct / 100).toFixed(0));
                      }}
                      className="w-full bg-deep border border-border rounded-xl pl-9 pr-4 py-3.5 text-ink text-lg font-mono focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Risk per trade $ */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-ink">risk per trade</label>
                    <span className={cn('text-xs font-bold px-2.5 py-1 rounded-full', riskPct <= 4 ? 'bg-success/10 text-success' : riskPct <= 8 ? 'bg-warning/10 text-warning' : riskPct <= 12 ? 'bg-orange-400/10 text-orange-400' : 'bg-danger/10 text-danger')}>
                      {level.label} | Tradvio AI
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft font-mono">$</span>
                    <input
                      type="number"
                      value={riskPerTrade}
                      onChange={(e) => {
                        setRiskPerTrade(e.target.value);
                        if (balance > 0) setRiskPercent(((parseFloat(e.target.value) || 0) / balance * 100).toFixed(1));
                      }}
                      className="w-full bg-deep border border-border rounded-xl pl-9 pr-4 py-3.5 text-ink text-lg font-mono focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Risk per trade % */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-ink">risk per trade (%)</label>
                    <span className="text-xs text-ink-soft">{riskPct}% of your account per trade</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="20"
                    step="0.5"
                    value={riskPct}
                    onChange={(e) => {
                      setRiskPercent(e.target.value);
                      if (balance > 0) setRiskPerTrade((balance * parseFloat(e.target.value) / 100).toFixed(0));
                    }}
                    className="w-full accent-[#DC2626]"
                  />
                  <div className="flex justify-between text-xs text-ink-soft mt-1.5">
                    <span>0.5%</span>
                    <span className={cn('font-bold', riskPct <= 4 ? 'text-success' : riskPct <= 8 ? 'text-warning' : riskPct <= 12 ? 'text-orange-400' : 'text-danger')}>{riskPct}% — {level.label}</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-navy border border-border rounded-2xl p-6 text-center">
                <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-2">
                  consecutive losses until blown account
                </div>
                <div className="text-5xl font-bold text-ink font-mono mb-2">{lossesUntilBlown}</div>
                <div className="text-sm text-ink-soft">trades</div>
                <div className={cn('mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full', riskPct <= 4 ? 'bg-success/10 text-success' : riskPct <= 8 ? 'bg-warning/10 text-warning' : riskPct <= 12 ? 'bg-orange-400/10 text-orange-400' : 'bg-danger/10 text-danger')}>
                  {level.label} | Tradvio AI
                </div>
              </div>

              <div className="bg-navy border border-border rounded-2xl p-6 text-center">
                <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-2">
                  recommended risk per trade (4%)
                </div>
                <div className="text-5xl font-bold text-accent font-mono mb-2">
                  ${balance >= 1_000_000 ? `${(balance * 0.04 / 1_000_000).toFixed(1)}M` : balance >= 1000 ? `${Math.round(balance * 0.04 / 1000)}K` : Math.round(balance * 0.04).toLocaleString()}
                </div>
                <div className="text-sm text-ink-soft">per trade</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-success/10 text-success">
                  Conservative | Tradvio AI
                </div>
              </div>
            </div>

            {/* Risk scale */}
            <div className="mt-8">
              <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-3 text-center">Risk-per-trade guide</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { range: '≤4%', label: 'Conservative', clr: 'bg-success/15 text-success border-success/30' },
                  { range: '4–8%', label: 'Moderate', clr: 'bg-warning/15 text-warning border-warning/30' },
                  { range: '8–12%', label: 'Aggressive', clr: 'bg-orange-400/15 text-orange-400 border-orange-400/30' },
                  { range: '>12%', label: 'Extreme', clr: 'bg-danger/15 text-danger border-danger/30' },
                ].map((g) => (
                  <div key={g.label} className={cn('border rounded-xl py-3 px-2 text-center', g.clr, riskLevel(riskPct).label === g.label && 'ring-2 ring-current')}>
                    <div className="font-mono text-lg font-bold">{g.range}</div>
                    <div className="text-[0.65rem] font-semibold uppercase tracking-wider">{g.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PROBABILITY OF RUIN ═══════════ */}
        <section className="py-16 md:py-20 bg-navy border-y border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Probability of Ruin</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-3">
                probability of blowing your account
              </h2>
              <p className="text-muted-dark">
                based on different win rates — chance you'll hit {lossesUntilBlown} consecutive losses within 100 trades.
              </p>
            </div>

            <div className="space-y-4">
              {winRates.map((wr) => {
                const prob = probOfStreak(wr);
                const pl = probLevel(prob);
                return (
                  <div key={wr} className="bg-deep border border-border rounded-xl p-5 flex items-center justify-between gap-4">
                    <span className="text-sm text-ink-soft">
                      chance of <span className="text-ink font-mono font-bold">{lossesUntilBlown}</span> straight losses with a <span className="text-ink font-mono font-bold">{wr}%</span> win rate
                    </span>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full', prob < 20 ? 'bg-success' : prob < 30 ? 'bg-warning' : prob <= 45 ? 'bg-orange-400' : 'bg-danger')}
                          style={{ width: `${Math.max(2, prob)}%` }}
                        />
                      </div>
                      <span className={cn('font-mono font-bold w-14 text-right', pl.color)}>{prob.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-deep border border-border rounded-xl p-5 text-center">
              <p className="text-sm text-muted-dark leading-relaxed">
                while risking <span className="text-accent font-bold">{riskPct}%</span> of your account per trade, you need a{' '}
                <span className="text-ink font-bold">~{Math.round(requiredWinRate)}% win rate</span> to survive a{' '}
                <span className="text-ink font-bold">{lossesUntilBlown}</span> trade losing streak.
              </p>
            </div>

            {/* Probability scale */}
            <div className="mt-8">
              <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-3 text-center">Probability guide</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { range: '<20%', label: 'Conservative', clr: 'bg-success/15 text-success border-success/30' },
                  { range: '20–30%', label: 'Moderate', clr: 'bg-warning/15 text-warning border-warning/30' },
                  { range: '30–45%', label: 'Aggressive', clr: 'bg-orange-400/15 text-orange-400 border-orange-400/30' },
                  { range: '>45%', label: 'Extreme', clr: 'bg-danger/15 text-danger border-danger/30' },
                ].map((g) => (
                  <div key={g.label} className={cn('border rounded-xl py-3 px-2 text-center', g.clr)}>
                    <div className="font-mono text-lg font-bold">{g.range}</div>
                    <div className="text-[0.65rem] font-semibold uppercase tracking-wider">{g.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Risk Calculator <span className="text-ink-soft font-light italic">questions</span>
              </h2>
            </div>

            <div className="space-y-3">
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
        <section className="py-16 md:py-20 text-center bg-deep relative overflow-hidden">
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              Trade with discipline.<br />
              <span className="text-accent">Protect your capital.</span>
            </h2>
            <p className="text-muted-dark mb-8">
              Risk management is the difference between trading and gambling. Start free and make it part of every trade.
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">Start Free →</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              Trading involves risk. Never risk more than you can afford to lose.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
