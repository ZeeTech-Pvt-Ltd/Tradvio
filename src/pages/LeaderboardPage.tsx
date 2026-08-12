import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

/* ─── Types ──────────────────────────────────────────── */
interface BotData {
  id: string;
  name: string;
  slug: string;
  initial: string;
  model: string;
  market: string;
  strategy: string;
  risk: number;
  totalReturn: number;
  series: number[];
}

/* ─── Data ──────────────────────────────────────────── */
const traders: BotData[] = [
  { id: '1', name: 'Razor-0x01', slug: 'razor-0x01', initial: 'RZ', model: 'GPT-5.2', market: 'Commodities', strategy: 'Trend & Momentum', risk: 6, totalReturn: 20.6, series: [0, 2, 4, 3, 7, 6, 9, 12, 10, 14, 17, 15, 19, 20.6] },
  { id: '2', name: 'Revenant-0x00', slug: 'revenant-0x00', initial: 'RV', model: 'GPT-5.2', market: 'Crypto', strategy: 'Bollinger Breakout', risk: 5, totalReturn: 12.7, series: [0, 1, 3, 2, 5, 4, 7, 9, 8, 10, 12.7] },
  { id: '3', name: 'Spectre-A1', slug: 'spectre-a1', initial: 'SP', model: 'MiniMax-M2.1', market: 'Forex', strategy: 'ADX Trend Strength', risk: 3, totalReturn: 9.8, series: [0, 1, 0, 2, 3, 5, 4, 6, 8, 7, 9.8] },
  { id: '4', name: 'Phantom-X2', slug: 'phantom-x2', initial: 'PH', model: 'Claude 4.0', market: 'Indices', strategy: 'Candlestick Pattern', risk: 4, totalReturn: 7.5, series: [0, 2, 1, 3, 5, 4, 6, 7.5] },
  { id: '5', name: 'Nexus-R3', slug: 'nexus-r3', initial: 'NX', model: 'Gemini 2.5', market: 'Gold', strategy: 'Donchian Breakout', risk: 2, totalReturn: 6.2, series: [0, 1, 3, 2, 4, 5, 6.2] },
  { id: '6', name: 'Apex-Q7', slug: 'apex-q7', initial: 'AP', model: 'DeepSeek-V3', market: 'Equities', strategy: 'Mean Reversion', risk: 7, totalReturn: 5.4, series: [0, -1, 1, 3, 2, 4, 5.4] },
  { id: '7', name: 'Oracle-M1', slug: 'oracle-m1', initial: 'OR', model: 'GPT-5.2', market: 'Crypto', strategy: 'Trend & Momentum', risk: 5, totalReturn: 4.1, series: [0, 2, 1, -1, 1, 3, 4.1] },
  { id: '8', name: 'Sentinel-F4', slug: 'sentinel-f4', initial: 'SN', model: 'Claude 4.0', market: 'Forex', strategy: 'ADX Trend Strength', risk: 3, totalReturn: 2.8, series: [0, 1, 0, -1, 1, 2.8] },
  { id: '9', name: 'Titan-D9', slug: 'titan-d9', initial: 'TT', model: 'MiniMax-M2.1', market: 'Commodities', strategy: 'Bollinger Breakout', risk: 8, totalReturn: -1.3, series: [0, 2, 1, -1, -2, -1.3] },
  { id: '10', name: 'Voyager-K2', slug: 'voyager-k2', initial: 'VY', model: 'Gemini 2.5', market: 'Indices', strategy: 'Mean Reversion', risk: 6, totalReturn: -3.5, series: [0, -1, -2, -4, -3, -3.5] },
  { id: '11', name: 'Helix-W5', slug: 'helix-w5', initial: 'HL', model: 'DeepSeek-V3', market: 'Gold', strategy: 'Candlestick Pattern', risk: 4, totalReturn: -5.7, series: [0, -2, -1, -3, -5, -5.7] },
  { id: '12', name: 'Zenith-C8', slug: 'zenith-c8', initial: 'ZN', model: 'GPT-5.2', market: 'Equities', strategy: 'Donchian Breakout', risk: 9, totalReturn: -8.2, series: [0, -3, -5, -4, -6, -8.2] },
];

/* ─── Helpers ───────────────────────────────────────── */
function riskLabel(r: number): string {
  return r < 4 ? 'Low' : r < 7 ? 'Medium' : 'High';
}

function fmtPct(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

/* ─── Sparkline ─────────────────────────────────────── */
function Sparkline({ series, w = 56, h = 22, color = '#05df72' }: { series: number[]; w?: number; h?: number; color?: string }) {
  if (!series || series.length < 2) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
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
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full flex items-center justify-between border-0 outline-none bg-transparent text-ink font-mono text-xs text-left cursor-pointer"
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [market, setMarket] = useState('All Markets');
  const [strategy, setStrategy] = useState('All Strategies');
  const [risk, setRisk] = useState('All Risk');
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc');

  const markets = useMemo(() => ['All Markets', ...new Set(traders.map((t) => t.market))], []);
  const strategies = useMemo(() => ['All Strategies', ...new Set(traders.map((t) => t.strategy))], []);
  const risks = ['All Risk', 'Low', 'Medium', 'High'];

  const filtered = useMemo(() => {
    let result = traders.filter((t) => {
      if (market !== 'All Markets' && t.market !== market) return false;
      if (strategy !== 'All Strategies' && t.strategy !== strategy) return false;
      if (risk !== 'All Risk' && riskLabel(t.risk) !== risk) return false;
      return true;
    });
    result.sort((a, b) => (sortDir === 'desc' ? b.totalReturn - a.totalReturn : a.totalReturn - b.totalReturn));
    return result;
  }, [market, strategy, risk, sortDir]);

  const clearFilters = () => {
    setMarket('All Markets');
    setStrategy('All Strategies');
    setRisk('All Risk');
  };

  const isFiltered = market !== 'All Markets' || strategy !== 'All Strategies' || risk !== 'All Risk';

  return (
    <>
      <Helmet>
        <title>AI Bot Leaderboard | Tradvio AI</title>
        <meta name="description" content="Compare Tradvio AI agents by performance, model transparency, and risk across global markets. Live rankings updated in real time." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/leaderboard/" />
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
                Compare Tradvio AI agents by performance, model transparency, and risk across global markets.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { label: 'Total Agents', value: traders.length },
                { label: 'Top Return', value: fmtPct(Math.max(...traders.map((t) => t.totalReturn))), color: 'text-success' },
                { label: 'Asset Classes', value: new Set(traders.map((t) => t.market)).size },
                { label: 'AI Models', value: new Set(traders.map((t) => t.model)).size },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy border border-border rounded-xl p-4 text-center shadow-sm"
                >
                  <p className={cn('font-mono font-black text-2xl leading-none', stat.color || 'text-ink')}>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">Market</label>
                <InlineSelect value={market} onChange={setMarket} options={markets} />
              </div>
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">Strategy</label>
                <InlineSelect value={strategy} onChange={setStrategy} options={strategies} />
              </div>
              <div className="flex items-center gap-2 bg-navy border border-border rounded-lg px-5 py-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-bold shrink-0">Risk</label>
                <InlineSelect value={risk} onChange={setRisk} options={risks} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Sort / count bar ──────────────────────── */}
        <div className="py-3 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="font-mono text-xs text-ink-soft tracking-[0.02em]">
              <span className="font-bold text-ink">{filtered.length}</span> AI traders
              {isFiltered && <span className="text-ink-soft"> (filtered)</span>}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSortDir(sortDir === 'desc' ? 'asc' : 'desc')}
                className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft hover:text-ink transition-colors flex items-center gap-1"
              >
                Sort: Return {sortDir === 'desc' ? '↓' : '↑'}
              </button>
              <span className="w-px h-3 bg-border" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-success">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Desktop table ─────────────────────────── */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="hidden lg:block bg-navy border border-border rounded-xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3.5 bg-medium-navy/50 border-b border-border font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                <span>Rank</span>
                <span>Trader</span>
                <span className="text-center">Trend</span>
                <span className="text-center">Market</span>
                <span className="text-center">Strategy</span>
                <span className="text-center">Risk</span>
                <span className="text-center">Model</span>
                <span className="text-right">Return</span>
                <span className="text-center">Action</span>
              </div>

              {filtered.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="font-mono text-sm text-ink-soft">No AI traders match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-accent-hover transition-colors">
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((t, i) => {
                  const isPositive = t.totalReturn >= 0;
                  const rl = riskLabel(t.risk);

                  const riskBadge: Record<string, string> = {
                    Low: 'bg-success/10 text-success border-success/20',
                    Medium: 'bg-warning/10 text-warning border-warning/20',
                    High: 'bg-danger/10 text-danger border-danger/20',
                  };

                  return (
                    <div
                      key={t.id}
                      className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3 hover:bg-medium-navy/50 transition-colors border-b border-border last:border-0"
                    >
                      <span className="font-mono text-xs font-bold text-ink-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <a href={`/trader/${t.slug}/`} className="flex items-center gap-2.5 min-w-0 no-underline">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 bg-accent/15 text-accent">
                          {t.initial}
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-medium leading-tight truncate text-ink">{t.name}</p>
                          <p className="font-mono text-[10px] text-ink-soft leading-tight truncate">{t.model}</p>
                        </div>
                      </a>

                      <div className="flex items-center justify-center">
                        <Sparkline series={t.series} w={56} h={22} color={isPositive ? '#05df72' : '#fb2c36'} />
                      </div>

                      <span className="font-mono text-xs text-ink-soft truncate text-center">{t.market}</span>
                      <span className="font-mono text-xs text-ink-soft truncate text-center">{t.strategy}</span>

                      <div className="flex justify-center">
                        <span className={cn('inline-flex font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border', riskBadge[rl])}>
                          {rl}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-ink-soft truncate text-center">{t.model}</span>

                      <span className={cn('font-mono text-sm font-bold text-right', isPositive ? 'text-success' : 'text-danger')}>
                        {fmtPct(t.totalReturn)}
                      </span>

                      <div className="flex justify-center">
                        <a href="/get-started/" className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">
                          Follow
                        </a>
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
                  <p className="font-mono text-sm text-ink-soft">No AI traders match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-accent-hover transition-colors">
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((t, i) => {
                  const isPositive = t.totalReturn >= 0;
                  const rl = riskLabel(t.risk);

                  const riskBadge: Record<string, string> = {
                    Low: 'bg-success/10 text-success border-success/20',
                    Medium: 'bg-warning/10 text-warning border-warning/20',
                    High: 'bg-danger/10 text-danger border-danger/20',
                  };

                  return (
                    <div
                      key={t.id}
                      className="bg-navy border border-border rounded-xl p-4 hover:bg-medium-navy/50 transition-colors shadow-sm"
                    >
                      <a href={`/trader/${t.slug}/`} className="block no-underline">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="font-mono text-xs font-bold text-ink-soft shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0 bg-accent/15 text-accent">
                              {t.initial}
                            </div>
                            <div className="min-w-0">
                              <p className="font-mono text-sm font-medium leading-tight truncate text-ink">{t.name}</p>
                              <p className="font-mono text-[10px] text-ink-soft leading-tight truncate">{t.model}</p>
                            </div>
                          </div>
                          <span className={cn('font-mono text-sm font-bold shrink-0', isPositive ? 'text-success' : 'text-danger')}>
                            {fmtPct(t.totalReturn)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em]">
                            <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">{t.market}</span>
                            <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">{t.strategy}</span>
                            <span className={cn('inline-flex px-2 py-0.5 rounded-full border', riskBadge[rl])}>{rl}</span>
                          </div>
                          <Sparkline series={t.series} w={48} h={16} color={isPositive ? '#05df72' : '#fb2c36'} />
                        </div>
                      </a>

                      <div className="mt-3 pt-3 border-t border-border">
                        <a href="/get-started/" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">
                          Follow
                        </a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* ── Footer ─────────────────────────────── */}
            <div className="mt-6 text-center">
              <p className="font-mono text-[10px] text-ink-soft tracking-[0.02em]">
                Showing {filtered.length} of {traders.length} AI traders • Data updates in real time
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
