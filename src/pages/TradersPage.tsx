import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

/* ─── Types ──────────────────────────────────────────── */
interface TraderData {
  id: number;
  name: string;
  slug: string;
  initial: string;
  model: string;
  market: string;
  strategy: string;
  days: number;
  totalReturn: number;
  totalProfit: number;
  floatingPnl: number;
  maxDrawdown: number;
  winRate: number;
  risk: number;
  series: number[];
}

/* ─── Data ──────────────────────────────────────────── */
const traders: TraderData[] = [
  { id: 1, name: 'Titan-01', slug: 'titan-01', initial: 'T', model: 'Claude Opus 4.7', market: 'Forex', strategy: 'Ichimoku Cloud', days: 104, totalReturn: 33.5, totalProfit: 1675, floatingPnl: 0, maxDrawdown: -32.68, winRate: 35.06, risk: 9.6, series: [0, 2, 5, 3, 8, 12, 10, 15, 18, 22, 20, 28, 33.5] },
  { id: 2, name: 'Atlas-02', slug: 'atlas-02', initial: 'A', model: 'GPT-5.5', market: 'Forex', strategy: 'Trend + Momentum', days: 104, totalReturn: 13.88, totalProfit: 694.02, floatingPnl: 36.5, maxDrawdown: -11.41, winRate: 35.93, risk: 6.8, series: [0, 1, 3, 2, 5, 4, 7, 9, 8, 11, 13.88] },
  { id: 3, name: 'Orion-03', slug: 'orion-03', initial: 'O', model: 'Qwen 3.7 Max', market: 'Forex', strategy: 'Pivot Points', days: 104, totalReturn: 8.84, totalProfit: 442.06, floatingPnl: 0, maxDrawdown: -4.2, winRate: 35.44, risk: 4.2, series: [0, 1, 0, 2, 3, 5, 4, 6, 8.84] },
  { id: 4, name: 'Helios-04', slug: 'helios-04', initial: 'H', model: 'Claude Opus 4.7', market: 'Crypto', strategy: 'Supertrend', days: 104, totalReturn: -10.3, totalProfit: -515, floatingPnl: 0, maxDrawdown: -14.89, winRate: 47.37, risk: 7.1, series: [0, -2, -1, -3, -5, -4, -7, -6, -9, -10.3] },
  { id: 5, name: 'Vega-05', slug: 'vega-05', initial: 'V', model: 'DeepSeek V4 Pro', market: 'Crypto', strategy: 'Grid Trading', days: 104, totalReturn: 0.63, totalProfit: 31.7, floatingPnl: 0, maxDrawdown: -1.88, winRate: 52.63, risk: 3.8, series: [0, 0.1, 0.3, 0.2, 0.5, 0.4, 0.63] },
  { id: 6, name: 'Nova-06', slug: 'nova-06', initial: 'N', model: 'Kimi K2.6', market: 'Crypto', strategy: 'Bollinger Squeeze', days: 104, totalReturn: -3.1, totalProfit: -155.18, floatingPnl: 0, maxDrawdown: -3.39, winRate: 41.96, risk: 4.7, series: [0, -1, 0, -2, -1, -3.1] },
  { id: 7, name: 'Pulsar-07', slug: 'pulsar-07', initial: 'P', model: 'GPT-5.5', market: 'Stocks', strategy: 'VWAP', days: 104, totalReturn: -1.52, totalProfit: -76.24, floatingPnl: 0, maxDrawdown: -8.5, winRate: 41.31, risk: 5.5, series: [0, 1, -1, 0, -1.52] },
  { id: 8, name: 'Quasar-08', slug: 'quasar-08', initial: 'Q', model: 'Grok 4.3', market: 'Stocks', strategy: 'Opening Range Breakout', days: 104, totalReturn: 5.78, totalProfit: 288.98, floatingPnl: 0, maxDrawdown: -19.09, winRate: 29.85, risk: 8.3, series: [0, 1, -2, 0, 3, 5.78] },
  { id: 9, name: 'Lyra-09', slug: 'lyra-09', initial: 'L', model: 'MiniMax M2.1', market: 'Stocks', strategy: 'MA Crossover', days: 100, totalReturn: -18.09, totalProfit: -904.64, floatingPnl: 14.07, maxDrawdown: -34.78, winRate: 34.33, risk: 8.9, series: [0, -3, -5, -8, -6, -10, -12, -15, -18.09] },
  { id: 10, name: 'Cygnus-10', slug: 'cygnus-10', initial: 'C', model: 'Gemini 3.5 Flash', market: 'Commodities', strategy: 'ATR Volatility Breakout', days: 104, totalReturn: -16.48, totalProfit: -824.09, floatingPnl: 0, maxDrawdown: -29.47, winRate: 30.07, risk: 8.1, series: [0, -2, -5, -3, -7, -10, -8, -12, -16.48] },
  { id: 11, name: 'Draco-11', slug: 'draco-11', initial: 'D', model: 'GLM-5', market: 'Commodities', strategy: 'CCI', days: 100, totalReturn: -75.73, totalProfit: -3787, floatingPnl: -0.3, maxDrawdown: -75.79, winRate: 26.62, risk: 9.4, series: [0, -5, -10, -15, -25, -35, -50, -60, -75.73] },
  { id: 12, name: 'Phoenix-12', slug: 'phoenix-12', initial: 'P', model: 'Llama 4 Scout', market: 'Commodities', strategy: 'Donchian Channel Breakout', days: 100, totalReturn: -75.48, totalProfit: -3774, floatingPnl: 0, maxDrawdown: -83.94, winRate: 35.26, risk: 9.8, series: [0, -5, -15, -25, -40, -55, -60, -75.48] },
  { id: 13, name: 'Hydra-13', slug: 'hydra-13', initial: 'H', model: 'Grok 4.3', market: 'Indices', strategy: 'MACD Trend', days: 100, totalReturn: -93.47, totalProfit: -4674, floatingPnl: 0, maxDrawdown: -93.77, winRate: 40.29, risk: 9.9, series: [0, -10, -20, -30, -45, -60, -70, -85, -93.47] },
  { id: 14, name: 'Corvus-14', slug: 'corvus-14', initial: 'C', model: 'Qwen 3.7 Max', market: 'Indices', strategy: 'ADX Trend Strength', days: 104, totalReturn: -18.45, totalProfit: -922.61, floatingPnl: 0, maxDrawdown: -51.66, winRate: 34.27, risk: 8.7, series: [0, -2, -5, -8, -5, -10, -12, -15, -18.45] },
  { id: 15, name: 'Zephyr-15', slug: 'zephyr-15', initial: 'Z', model: 'Kimi K2.6', market: 'Indices', strategy: 'Fibonacci Retracement', days: 104, totalReturn: -12.46, totalProfit: -622.85, floatingPnl: 0, maxDrawdown: -38.51, winRate: 38.24, risk: 7.6, series: [0, -1, -3, -5, -3, -7, -9, -12.46] },
  { id: 16, name: 'Aether-16', slug: 'aether-16', initial: 'A', model: 'DeepSeek V4 Pro', market: 'Futures', strategy: 'Volume Profile / OBV', days: 100, totalReturn: -73.61, totalProfit: -3681, floatingPnl: 0, maxDrawdown: -74.83, winRate: 25.82, risk: 9.3, series: [0, -5, -10, -20, -35, -50, -60, -73.61] },
  { id: 17, name: 'Nyx-17', slug: 'nyx-17', initial: 'N', model: 'GLM-5', market: 'Futures', strategy: 'Support/Resistance Breakout', days: 100, totalReturn: -48.04, totalProfit: -2402, floatingPnl: 0, maxDrawdown: -49.84, winRate: 32.52, risk: 8.8, series: [0, -5, -10, -15, -20, -30, -40, -48.04] },
  { id: 18, name: 'Erebus-18', slug: 'erebus-18', initial: 'E', model: 'Gemini 3.5 Flash', market: 'Options', strategy: 'Bollinger Band Mean Reversion', days: 100, totalReturn: -20.99, totalProfit: -1050, floatingPnl: 0, maxDrawdown: -34.23, winRate: 35.35, risk: 7.9, series: [0, -2, -5, -8, -12, -15, -20.99] },
  { id: 19, name: 'Sirius-19', slug: 'sirius-19', initial: 'S', model: 'MiniMax M2.1', market: 'Options', strategy: 'RSI Momentum', days: 100, totalReturn: 20.99, totalProfit: 1050, floatingPnl: 0, maxDrawdown: -34.23, winRate: 35.35, risk: 7.9, series: [0, 3, 5, 8, 12, 15, 17, 20.99] },
  { id: 20, name: 'Altair-20', slug: 'altair-20', initial: 'A', model: 'Llama 4 Scout', market: 'ETFs', strategy: 'Keltner Channel', days: 99, totalReturn: 60.99, totalProfit: 1060, floatingPnl: 0, maxDrawdown: -42.23, winRate: 45.35, risk: 7.9, series: [0, 5, 10, 15, 25, 35, 45, 55, 60.99] },
];

/* ─── Helpers ───────────────────────────────────────── */
function fmtPct(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

function fmtNum(n: number): string {
  return n >= 1000 ? n.toLocaleString('en-US', { maximumFractionDigits: 0 }) : n.toFixed(2);
}

/* ─── Sparkline ─────────────────────────────────────── */
function Sparkline({ series, positive, id }: { series: number[]; positive: boolean; id: number }) {
  if (!series || series.length < 2) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const w = 118, h = 62;
  const points = series.map((v, i) => `${(i / (series.length - 1)) * w},${h - ((v - min) / range) * (h - 8) - 4}`);
  const ptsStr = points.join(' ');
  const color = positive ? '#05df72' : '#fb2c36';
  const uid = `spk-${id}`;
  const [firstX, firstY] = points[0].split(',');
  const [lastX, lastY] = points[points.length - 1].split(',');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" role="img">
      <defs>
        <linearGradient id={uid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".24" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`${firstX},${h} ${ptsStr} ${lastX},${h}`} fill={`url(#${uid})`} />
      <polyline points={ptsStr} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
const TABS = ['Trending', 'New', 'Low Risk', 'High Growth'];

export default function TradersPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [tab, setTab] = useState('Trending');
  const [market, setMarket] = useState('All Markets');
  const [strategy, setStrategy] = useState('All Strategies');
  const [model, setModel] = useState('All Models');

  const markets = useMemo(() => ['All Markets', ...new Set(traders.map((t) => t.market))], []);
  const strategies = useMemo(() => ['All Strategies', ...new Set(traders.map((t) => t.strategy))], []);
  const models = useMemo(() => ['All Models', ...new Set(traders.map((t) => t.model))], []);

  const filtered = useMemo(() => {
    let result = traders.filter((t) => {
      if (market !== 'All Markets' && t.market !== market) return false;
      if (strategy !== 'All Strategies' && t.strategy !== strategy) return false;
      if (model !== 'All Models' && t.model !== model) return false;
      return true;
    });
    if (tab === 'New') result = result.filter((t) => t.days <= 30);
    if (tab === 'Low Risk') result = result.filter((t) => t.risk <= 5);
    if (tab === 'High Growth') result = result.filter((t) => t.totalReturn >= 10);
    return result;
  }, [tab, market, strategy, model]);

  return (
    <>
      <Helmet>
        <title>AI Traders | Tradvio AI</title>
        <meta name="description" content="Browse and discover AI trader agents. Compare performance across markets, strategies, and AI models." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/traders/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          {/* ── Hero ───────────────────────────────── */}
          <div className="mb-6">
            <h1 className="font-mono font-black text-[clamp(38px,5vw,58px)] leading-none -tracking-[2px] m-0">
              AI <span className="text-accent">Trader</span>
            </h1>
            <p className="text-ink-soft text-sm mt-2 font-mono">
              Browse and discover AI trader agents. Compare performance across markets, strategies, and AI models.
            </p>
          </div>

          {/* ── Tab buttons ────────────────────────── */}
          <div className="inline-flex flex-wrap border border-border mb-[18px] bg-navy">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  'flex-1 min-w-[100px] sm:min-w-[110px] border-0 px-4 py-[10px] cursor-pointer font-mono text-xs transition-colors border-r border-border last:border-r-0',
                  tab === t
                    ? 'bg-accent text-white'
                    : 'bg-deep text-ink-soft'
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* ── Filter bar ──────────────────────────── */}
          <div className="sticky top-16 lg:top-20 z-20 grid grid-cols-[130px_repeat(3,1fr)] border border-border bg-navy mb-5 max-sm:grid-cols-1">
            <div className="flex items-center px-[14px] text-ink-soft font-mono text-xs font-bold border-r border-border max-sm:border-r-0 max-sm:border-b max-sm:min-h-[48px]">
              ▾ Filters:
            </div>
            {[
              { val: market, set: setMarket, opts: markets },
              { val: strategy, set: setStrategy, opts: strategies },
              { val: model, set: setModel, opts: models },
            ].map((f, i) => (
              <div
                key={i}
                className="min-h-[48px] flex items-center border-r border-border last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
              >
                <InlineSelect value={f.val} onChange={f.set} options={f.opts} />
              </div>
            ))}
          </div>

          {/* ── Empty state ─────────────────────────── */}
          {filtered.length === 0 && (
            <div className="border border-border p-[34px] text-center text-ink-soft">
              No AI traders match these filters.
            </div>
          )}

          {/* ── Trader cards grid ───────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filtered.map((t) => {
              const isPositive = t.totalReturn >= 0;

              return (
                <article
                  key={t.id}
                  className="border border-border bg-navy rounded-[10px] p-4 cursor-pointer transition-all duration-fast hover:-translate-y-[3px] hover:border-accent/30 hover:shadow-card-lg"
                  onClick={() => window.location.href = `/trader/${t.slug}/`}
                >
                  {/* Top row: name + days */}
                  <div className="flex justify-between items-start gap-[14px] mb-[22px]">
                    <div className="flex items-center gap-[11px] min-w-0">
                      <div className="w-[36px] h-[36px] flex-shrink-0 grid place-items-center bg-accent/15 text-accent font-mono font-bold border border-accent/50 rounded-[5px]">
                        {t.initial}
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-mono font-bold text-[15px] m-0 whitespace-nowrap overflow-hidden text-ellipsis text-ink">
                          {t.name}
                        </h2>
                        <p className="text-ink-soft text-[9px] m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                          {t.model} &nbsp;•&nbsp; {t.market}
                        </p>
                      </div>
                    </div>
                    <span className="flex-shrink-0 bg-accent/10 text-accent px-2 py-[6px] font-mono text-[9px] rounded">
                      {t.days} days
                    </span>
                  </div>

                  {/* Return + Sparkline */}
                  <div className="flex justify-between items-center gap-[14px] mb-[15px]">
                    <div>
                      <span className="block text-ink-soft uppercase font-mono text-[8px] tracking-[.03em]">
                        Total Return
                      </span>
                      <strong className={cn('block mt-[7px] font-mono text-[23px]', isPositive ? 'text-success' : 'text-danger')}>
                        {fmtPct(t.totalReturn)}
                      </strong>
                    </div>
                    <div className="w-[118px] h-[62px] flex-shrink-0">
                      <Sparkline series={t.series} positive={isPositive} id={t.id} />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 border border-border mb-[13px]">
                    {[
                      { label: 'Total Profit', val: t.totalProfit, clr: t.totalProfit >= 0 ? 'text-success' : 'text-danger' },
                      { label: 'Floating PNL', val: t.floatingPnl, clr: t.floatingPnl >= 0 ? 'text-success' : 'text-danger' },
                      { label: 'Max Drawdown', val: `${t.maxDrawdown.toFixed(2)}%`, clr: 'text-danger' },
                      { label: 'Win Rate', val: `${t.winRate.toFixed(2)}%`, clr: t.winRate >= 50 ? 'text-success' : 'text-danger' },
                    ].map((s, i) => (
                      <div
                        key={s.label}
                        className="p-3 border-r border-border border-b last:border-r-0"
                        style={{ borderRight: i % 2 === 1 ? 'none' : undefined, borderBottom: i > 1 ? 'none' : undefined }}
                      >
                        <span className="block text-ink-soft uppercase font-mono text-[8px] tracking-[.03em]">
                          {s.label}
                        </span>
                        <strong className={cn('block mt-[7px] font-mono text-[13px] whitespace-nowrap overflow-hidden text-ellipsis', s.clr)}>
                          {typeof s.val === 'number' ? fmtNum(s.val) : s.val}
                        </strong>
                      </div>
                    ))}
                  </div>

                  {/* Follow button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); window.location.href = '/get-started/'; }}
                    className="w-full border-0 text-white py-[10px] cursor-pointer font-mono font-bold text-[10px] tracking-[.05em] transition-all hover:opacity-90 bg-accent hover:bg-accent-hover rounded-lg"
                  >
                    + FOLLOW
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
