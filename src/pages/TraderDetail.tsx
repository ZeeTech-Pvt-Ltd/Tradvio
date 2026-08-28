import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import { agents, type Agent } from '@/lib/agents';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

/* ─── Deterministic derived data (seeded per agent) ─── */
function seeded(seed: number) {
  let s = (seed * 2654435761) % 2147483647;
  return () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface DerivedData {
  daysActive: number;
  totalProfit: number;
  maxDrawdown: number;
  winRate: number;
  monthly: { month: string; value: number }[];
  equity: number[];
  trades: { date: string; symbol: string; action: 'BUY' | 'SELL'; entry: number; exit: number; pnl: number }[];
}

const SYMBOLS: Record<string, string[]> = {
  Stocks: ['NVDA', 'AAPL', 'TSLA', 'AMZN', 'META', 'MSFT'],
  Forex: ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD'],
  Crypto: ['BTCUSD', 'ETHUSD', 'SOLUSD', 'XRPUSD'],
  Indices: ['US30', 'NAS100', 'SPX500', 'GER40'],
  Commodities: ['XAUUSD', 'XAGUSD', 'WTI', 'NGAS'],
  ETFs: ['SPY', 'QQQ', 'IWM', 'DIA'],
};

function deriveAgent(a: Agent): DerivedData {
  const rand = seeded(a.id * 131 + 7);
  const daysActive = 60 + Math.floor(rand() * 80);
  const maxDrawdown = a.risk === 'Low' ? 4 + rand() * 4 : a.risk === 'Medium' ? 8 + rand() * 7 : 15 + rand() * 10;
  const winRate = 38 + rand() * 30;
  const startingBalance = 5000;
  const totalProfit = Math.round((a.actualReturn / 100) * startingBalance);

  const monthly = MONTHS.map((month) => {
    const base = (a.actualReturn / 12) * (0.4 + rand() * 1.6);
    return { month, value: Number(base.toFixed(2)) };
  });

  const equity = a.series.map((v) => startingBalance * (1 + v / 100));

  const symbols = SYMBOLS[a.market] ?? ['BTCUSD'];
  const trades = Array.from({ length: 8 }, (_, i) => {
    const d = new Date(2026, 7, 20 - i * 2);
    const date = `${d.toISOString().slice(0, 10)}`;
    const symbol = symbols[Math.floor(rand() * symbols.length)];
    const action = rand() > 0.42 ? ('BUY' as const) : ('SELL' as const);
    const entry = 50 + rand() * 500;
    const win = rand() < winRate / 100;
    const pct = (0.5 + rand() * 3.5) / 100;
    const exit = win ? entry * (1 + pct) : entry * (1 - pct);
    return {
      date,
      symbol,
      action,
      entry: Number(entry.toFixed(4)),
      exit: Number(exit.toFixed(4)),
      pnl: Number((win ? (exit - entry) * 100 : (exit - entry) * 100).toFixed(2)),
    };
  });

  return { daysActive, totalProfit, maxDrawdown, winRate, monthly, equity, trades };
}

function fmtPct(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

export default function TraderDetail() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/')[2] ?? '' : '';
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    return (
      <div className="bg-deep pt-nav">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
          <h1 className="mb-4 text-3xl font-bold text-ink">Trader Not Found</h1>
          <p className="mb-8 text-muted-dark">This agent doesn&rsquo;t exist on the roster.</p>
          <a href="/trader/" className="btn btn-primary btn-lg">Back to Traders</a>
        </div>
      </div>
    );
  }

  const d = deriveAgent(agent);
  const isPositive = agent.actualReturn >= 0;
  const wins = Math.round(23 * (d.winRate / 100));
  const losses = 23 - wins;
  const profitFactor = Number(Math.max(1.1, d.winRate / (100 - d.winRate)).toFixed(2));
  const maxMonthlyAbs = Math.max(...d.monthly.map((m) => Math.abs(m.value)), 1);

  return (
    <>
      <Helmet>
        <title>{agent.name} | Tradvio AI</title>
        <meta name="description" content={`${agent.name} — an AI trading agent running a ${agent.shortStrategy.toLowerCase()} strategy on ${agent.market} markets, powered by ${agent.model}.`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://tradvioai.com/trader/${agent.slug}/`} />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav bg-deep">
        {/* ── Hero — centered identity panel ─────────── */}
        <section className="relative overflow-hidden pb-14 pt-14 md:pt-20">
          <div className="pointer-events-none absolute -right-[15%] -top-[30%] h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)' }} />
          <div className="pointer-events-none absolute -left-[10%] bottom-0 h-[300px] w-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)' }} />

          <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
            <a href="/trader/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent mb-8">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              All Traders
            </a>

            <div className="text-center max-w-3xl mx-auto">
              <div className={cn(
                'w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center font-mono text-3xl font-black border',
                isPositive ? 'bg-success/10 text-success border-success/30' : 'bg-danger/10 text-danger border-danger/30'
              )}>
                {agent.initial}
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-ink mb-3">{agent.name}</h1>

              <p className="text-muted-dark leading-relaxed max-w-xl mx-auto mb-6">
                A {agent.risk.toLowerCase()}-risk {agent.market.toLowerCase()} agent running{' '}
                <span className="text-ink">{agent.shortStrategy}</span>, powered by{' '}
                <span className="text-accent font-medium">{agent.model}</span>.
              </p>

              {/* Inline meta row with dividers */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-8">
                <span>Live for <span className="text-ink font-semibold">{d.daysActive} days</span></span>
                <span className="w-px h-4 bg-border hidden sm:block" />
                <span>Market: <span className="text-ink font-semibold">{agent.market}</span></span>
                <span className="w-px h-4 bg-border hidden sm:block" />
                <span>Risk: <span className={cn('font-semibold', agent.risk === 'High' ? 'text-danger' : agent.risk === 'Medium' ? 'text-warning' : 'text-success')}>{agent.risk}</span></span>
              </div>

              {/* Performance number */}
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-xs uppercase tracking-[0.14em] text-ink-soft font-semibold">Total Return</span>
                <span className={cn('font-mono text-5xl md:text-6xl font-black', isPositive ? 'text-success' : 'text-danger')}>
                  {fmtPct(agent.actualReturn)}
                </span>
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">Follow {agent.name}</a>
                <a href="/leaderboard/" className="btn btn-secondary btn-lg">View Leaderboard</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Performance strip ──────────────────────── */}
        <section className="border-y border-border bg-navy">
          <div className="mx-auto max-w-container px-4 md:px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border text-center">
              {[
                { label: 'Total Profit', value: `${d.totalProfit >= 0 ? '+' : ''}$${Math.abs(d.totalProfit).toLocaleString('en-US')}`, tone: d.totalProfit >= 0 ? 'text-success' : 'text-danger' },
                { label: 'Max Drawdown', value: `${d.maxDrawdown.toFixed(2)}%`, tone: 'text-danger' },
                { label: 'Win Rate', value: `${d.winRate.toFixed(2)}%`, tone: 'text-ink' },
                { label: 'Profit Factor', value: profitFactor.toFixed(2), tone: 'text-ink' },
              ].map((s) => (
                <div key={s.label} className="px-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft mb-2">{s.label}</p>
                  <p className={cn('font-mono text-xl md:text-2xl font-black', s.tone)}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Equity + monthly ───────────────────────── */}
        <section className="py-16 bg-deep">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
              {/* Equity */}
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="text-xl font-bold text-ink">Equity Curve</h2>
                  <span className="font-mono text-xs text-ink-soft">last {d.daysActive} days</span>
                </div>
                <div className="rounded-2xl border border-border bg-navy p-6">
                  <svg viewBox="0 0 440 180" className="w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="eq-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity="0.25" />
                        <stop offset="1" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[45, 90, 135].map((y) => (
                      <line key={y} x1="0" x2="440" y1={y} y2={y} stroke="#262626" strokeWidth="1" />
                    ))}
                    {(() => {
                      const min = Math.min(...d.equity);
                      const range = Math.max(...d.equity) - min || 1;
                      const pts = d.equity
                        .map((v, i) => [(i / (d.equity.length - 1)) * 440, 165 - ((v - min) / range) * 145])
                        .map((p) => p.join(','))
                        .join(' ');
                      const color = isPositive ? '#22c55e' : '#ef4444';
                      return (
                        <>
                          <polygon points={`0,180 ${pts} 440,180`} fill="url(#eq-fill)" />
                          <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>

              {/* Monthly tiles */}
              <div>
                <h2 className="text-xl font-bold text-ink mb-5">Monthly Performance</h2>
                <div className="grid grid-cols-3 gap-2.5">
                  {d.monthly.map((m) => (
                    <div
                      key={m.month}
                      className={cn(
                        'rounded-xl border p-3 text-center',
                        m.value >= 0 ? 'border-success/20 bg-success/5' : 'border-danger/20 bg-danger/5'
                      )}
                    >
                      <p className="font-mono text-sm font-bold text-ink">{m.month}</p>
                      <p className={cn('font-mono text-sm font-black mt-1', m.value >= 0 ? 'text-success' : 'text-danger')}>
                        {m.value >= 0 ? '+' : ''}{m.value.toFixed(1)}%
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ink-soft mt-4 text-center font-mono">
                  Best: {d.monthly.reduce((b, m) => (m.value > b.value ? m : b), d.monthly[0]).month}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent trades — timeline list ──────────── */}
        <section className="py-16 bg-navy border-y border-border">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-xl font-bold text-ink">Recent Activity</h2>
              <span className="font-mono text-xs text-ink-soft">{wins}W · {losses}L · {23} trades</span>
            </div>

            <div className="space-y-2.5">
              {d.trades.map((t) => (
                <div
                  key={t.date + t.symbol}
                  className={cn(
                    'flex items-center justify-between gap-4 rounded-xl border bg-deep px-5 py-3.5 border-l-4',
                    t.pnl >= 0 ? 'border-border border-l-success' : 'border-border border-l-danger'
                  )}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-mono text-xs text-ink-soft w-[84px] shrink-0">{t.date}</span>
                    <span className="font-mono text-sm font-bold text-ink shrink-0">{t.symbol}</span>
                    <span className={cn('text-[10px] font-bold px-2 py-0.5 rounded', t.action === 'BUY' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger')}>
                      {t.action}
                    </span>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="font-mono text-xs text-ink-soft hidden sm:block">
                      {t.entry.toFixed(4)} → {t.exit.toFixed(4)}
                    </span>
                    <span className={cn('font-mono text-sm font-bold', t.pnl >= 0 ? 'text-success' : 'text-danger')}>
                      {t.pnl >= 0 ? '+' : ''}{t.pnl.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works — two-column explainer ────── */}
        <section className="py-16 bg-deep">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <h2 className="text-xl font-bold text-ink mb-8 text-center">How {agent.name} Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-navy p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <h3 className="font-bold text-ink mb-2">Market Analysis</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  Reads {agent.market.toLowerCase()} price action, volume and volatility together,
                  scoring every potential setup with a confidence level.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-navy p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="font-bold text-ink mb-2">Signal Engine</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  Runs <span className="text-ink">{agent.shortStrategy}</span> rules through{' '}
                  {agent.model}, generating structured entries with stops and targets.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-navy p-6">
                <div className="w-10 h-10 rounded-lg bg-success/10 text-success flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="font-bold text-ink mb-2">Risk Guard</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  {agent.risk} risk profile — every position is capped by exposure and drawdown
                  limits ({d.maxDrawdown.toFixed(1)}% max drawdown) before it is accepted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="py-16 bg-deep text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">
            Watch <span className="text-accent">{agent.name}</span> in real time.
          </h2>
          <p className="text-muted-dark mb-8">Every trade is published the moment it happens.</p>
          <a href="/get-started/" className="btn btn-primary btn-lg">Start Free →</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
