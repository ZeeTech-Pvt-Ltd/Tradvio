import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n';
import { agents, type Agent } from '@/lib/agents';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

/* ─── Helpers ───────────────────────────────────────── */
function fmtReturn(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

const riskBadge: Record<Agent['risk'], string> = {
  Low: 'bg-success/10 text-success border-success/20',
  Medium: 'bg-warning/10 text-warning border-warning/20',
  High: 'bg-danger/10 text-danger border-danger/20',
};

/* ─── Sparkline ─────────────────────────────────────── */
function Sparkline({ series, w = 56, h = 22 }: { series: number[]; w?: number; h?: number }) {
  if (!series || series.length < 2) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const color = series[series.length - 1] >= 0 ? '#05df72' : '#fb2c36';
  const points = series.map((v, i) => `${(i / (series.length - 1)) * w},${h - ((v - min) / range) * (h - 4) - 2}`);
  const d = `M${points.join(' L')}`;
  const uid = `spark-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="shrink-0">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill={`url(#${uid})`} />
      <path d={d} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Inline Select ─────────────────────────────────── */
function InlineSelect({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full h-full flex items-center justify-between px-[18px] border-0 outline-none bg-transparent text-ink font-mono text-xs text-left cursor-pointer"
      >
        <span className="truncate">{value}</span>
        <svg className="w-3 h-3 text-ink-soft shrink-0 ml-2" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 4.5L6 8.5L10 4.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 z-30 mt-1 max-h-[260px] overflow-y-auto border border-border bg-navy rounded-md shadow-lg">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); onChange(opt); setOpen(false); }}
              className={cn(
                'block w-full text-left px-4 py-2.5 font-mono text-xs cursor-pointer transition-colors',
                opt === value ? 'bg-accent/10 text-accent' : 'text-ink hover:bg-medium-navy'
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function LeaderboardPage() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [market, setMarket] = useState('All Markets');
  const [strategy, setStrategy] = useState('All Strategies');
  const [risk, setRisk] = useState('All Risk');
  const [model, setModel] = useState('All Models');

  const markets = useMemo(() => ['All Markets', ...new Set(agents.map((a) => a.market))], []);
  const strategies = useMemo(() => ['All Strategies', ...new Set(agents.map((a) => a.strategy))], []);
  const models = useMemo(() => ['All Models', ...new Set(agents.map((a) => a.model))], []);
  const risks = ['All Risk', 'Low', 'Medium', 'High'];

  const filtered = useMemo(() => {
    return agents.filter((a) => {
      if (market !== 'All Markets' && a.market !== market) return false;
      if (strategy !== 'All Strategies' && a.strategy !== strategy) return false;
      if (risk !== 'All Risk' && a.risk !== risk) return false;
      if (model !== 'All Models' && a.model !== model) return false;
      return true;
    });
  }, [market, strategy, risk, model]);

  const clearFilters = () => {
    setMarket('All Markets');
    setStrategy('All Strategies');
    setRisk('All Risk');
    setModel('All Models');
  };

  const isFiltered = market !== 'All Markets' || strategy !== 'All Strategies' || risk !== 'All Risk' || model !== 'All Models';

  return (
    <>
      <Helmet>
        <title>AI Bot Leaderboard | Tradvio AI</title>
        <meta name="description" content="Compare Tradvio AI agents by market, strategy, AI model, and risk across global markets. Live rankings updated in real time." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/leaderboard/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav pb-16">
        {/* ── Hero ─────────────────────────────────── */}
        <section className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Leaderboard
              </h1>
              <p className="mt-4 text-ink-soft text-sm sm:text-base leading-relaxed tracking-[0.02em]">
                Compare Tradvio AI agents by market, strategy, AI model, and risk across global markets.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { label: 'Total Agents', value: agents.length },
                { label: 'Asset Classes', value: new Set(agents.map((a) => a.market)).size },
                { label: 'AI Models', value: new Set(agents.map((a) => a.model)).size },
                { label: 'Strategies', value: new Set(agents.map((a) => a.strategy)).size },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy border border-border rounded-xl p-4 text-center shadow-sm"
                >
                  <p className="font-mono font-black text-2xl leading-none text-ink">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter bar ────────────────────────────── */}
        <div className="py-3 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-border bg-navy/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">{t('lb.market')}</label>
                <InlineSelect value={market} onChange={setMarket} options={markets} />
              </div>
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">{t('lb.strategy')}</label>
                <InlineSelect value={strategy} onChange={setStrategy} options={strategies} />
              </div>
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">{t('lb.risk')}</label>
                <InlineSelect value={risk} onChange={setRisk} options={risks} />
              </div>
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">Model</label>
                <InlineSelect value={model} onChange={setModel} options={models} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Count bar ──────────────────────────────── */}
        <div className="py-3 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="font-mono text-xs text-ink-soft tracking-[0.02em]">
              <span className="font-bold text-ink">{filtered.length}</span> AI agents
              {isFiltered && <span className="text-ink-soft"> (filtered)</span>}
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-success">{t('lb.live')}</span>
            </div>
          </div>
        </div>

        {/* ── Desktop table ─────────────────────────── */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="hidden lg:block bg-navy border border-border rounded-xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-[44px_1.3fr_70px_110px_2fr_80px_120px_90px_100px] gap-1 items-center px-5 py-3.5 bg-medium-navy/50 border-b border-border font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                <span>{t('lb.rank')}</span>
                <span>{t('lb.agent')}</span>
                <span className="text-center">{t('lb.trend')}</span>
                <span className="text-center">{t('lb.market')}</span>
                <span className="text-center">{t('lb.strategy')}</span>
                <span className="text-center">{t('lb.risk')}</span>
                <span className="text-center">{t('lb.model')}</span>
                <span className="text-right">{t('lb.return')}</span>
                <span className="text-center">{t('lb.action')}</span>
              </div>

              {filtered.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="font-mono text-sm text-ink-soft">No AI agents match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-accent-hover transition-colors">
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((a, i) => {
                  const isPositive = a.actualReturn >= 0;
                  return (
                    <div
                      key={a.id}
                      className="grid grid-cols-[44px_1.3fr_70px_110px_2fr_80px_120px_90px_100px] gap-1 items-center px-5 py-3 hover:bg-medium-navy/50 transition-colors border-b border-border last:border-0"
                    >
                      <span className="font-mono text-xs font-bold text-ink-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 bg-accent/15 text-accent">
                          {a.initial}
                        </div>
                        <p className="font-mono text-sm font-medium leading-tight truncate text-ink">{a.name}</p>
                      </div>

                      <div className="flex items-center justify-center">
                        <Sparkline series={a.series} w={56} h={22} />
                      </div>

                      <span className="font-mono text-xs text-ink-soft truncate text-center">{a.market}</span>
                      <span className="font-mono text-xs text-ink-soft truncate text-center">{a.strategy}</span>

                      <div className="flex justify-center">
                        <span className={cn('inline-flex font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border', riskBadge[a.risk])}>
                          {a.risk}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-ink-soft truncate text-center">{a.model}</span>

                      <span className={cn('font-mono text-sm font-bold text-right', isPositive ? 'text-success' : 'text-danger')}>
                        {fmtReturn(a.actualReturn)}
                      </span>

                      <div className="flex justify-center">
                        <a href="/get-started/" className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">{t('lb.follow')}</a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* ── Mobile cards ───────────────────────── */}
            <div className="lg:hidden space-y-3">
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <p className="font-mono text-sm text-ink-soft">No AI agents match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-accent-hover transition-colors">
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((a, i) => {
                  const isPositive = a.actualReturn >= 0;
                  return (
                    <div key={a.id} className="bg-navy border border-border rounded-xl p-4 hover:bg-medium-navy/50 transition-colors shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-xs font-bold text-ink-soft shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0 bg-accent/15 text-accent">
                            {a.initial}
                          </div>
                          <div className="min-w-0">
                            <p className="font-mono text-sm font-medium leading-tight truncate text-ink">{a.name}</p>
                            <p className="font-mono text-[10px] text-ink-soft leading-tight truncate">{a.model}</p>
                          </div>
                        </div>
                        <span className={cn('font-mono text-sm font-bold shrink-0', isPositive ? 'text-success' : 'text-danger')}>
                          {fmtReturn(a.actualReturn)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em]">
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">{a.market}</span>
                          <span className={cn('inline-flex px-2 py-0.5 rounded-full border', riskBadge[a.risk])}>{a.risk}</span>
                        </div>
                        <Sparkline series={a.series} w={64} h={20} />
                      </div>
                      <p className="font-mono text-[11px] text-ink-soft mt-2 leading-relaxed">{a.strategy}</p>

                      <div className="mt-3 pt-3 border-t border-border">
                        <a href="/get-started/" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">{t('lb.follow')}</a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* ── Footer note ────────────────────────── */}
            <div className="mt-6 text-center">
              <p className="font-mono text-[10px] text-ink-soft tracking-[0.02em]">
                Showing {filtered.length} of {agents.length} AI agents • Data updates in real time
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
