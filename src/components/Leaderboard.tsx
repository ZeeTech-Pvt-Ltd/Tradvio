import { cn } from '@/lib/utils';

/* ─── Types ──────────────────────────────────────────── */
interface BotData {
  id: string;
  name: string;
  slug: string;
  initial: string;
  model: string;
  market: string;
  strategy: string;
  risk: number; // 1-10 → Low <4, Medium 4-6, High >6
  totalReturn: number;
  series: number[]; // sparkline data
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

/* ─── Main Component ───────────────────────────────── */
export default function Leaderboard() {
  return (
    <section className="relative">
      {/* ── Stats bar ─────────────────────────────── */}
      <div className="pt-8 lg:pt-12 pb-2 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-2">
            <p className="text-xs uppercase tracking-[0.12em] text-ink-soft font-mono mb-3">
              Live Rankings
            </p>
            <h2 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
              AI Bot Leaderboard
            </h2>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed tracking-[0.02em]">
              Compare Tradvio AI agents by performance, model transparency, and risk across global markets.
            </p>
          </div>

        </div>
      </div>

      {/* ── Desktop table ─────────────────────────── */}
      <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8">
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

            {/* Rows */}
            {traders.slice(0, 7).map((t, i) => {
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
                    {/* Rank */}
                    <span className="font-mono text-xs font-bold text-ink-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Trader — name + initial */}
                    <a href={`/trader/${t.slug}/`} className="flex items-center gap-2.5 min-w-0 no-underline">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 bg-accent/15 text-accent">
                        {t.initial}
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-sm font-medium leading-tight truncate text-ink">{t.name}</p>
                        <p className="font-mono text-[10px] text-ink-soft leading-tight truncate">{t.model}</p>
                      </div>
                    </a>

                    {/* Sparkline */}
                    <div className="flex items-center justify-center">
                      <Sparkline series={t.series} w={56} h={22} color={isPositive ? '#05df72' : '#fb2c36'} />
                    </div>

                    {/* Market */}
                    <span className="font-mono text-xs text-ink-soft truncate text-center">{t.market}</span>

                    {/* Strategy */}
                    <span className="font-mono text-xs text-ink-soft truncate text-center">{t.strategy}</span>

                    {/* Risk badge */}
                    <div className="flex justify-center">
                      <span className={cn('inline-flex font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border', riskBadge[rl])}>
                        {rl}
                      </span>
                    </div>

                    {/* Model */}
                    <span className="font-mono text-xs text-ink-soft truncate text-center">{t.model}</span>

                    {/* Return */}
                    <span className={cn('font-mono text-sm font-bold text-right', isPositive ? 'text-success' : 'text-danger')}>
                      {fmtPct(t.totalReturn)}
                    </span>

                    {/* Action — Follow button */}
                    <div className="flex justify-center">
                      <a href="/get-started/" className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">
                        Follow
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* ── Mobile cards ───────────────────────── */}
          <div className="lg:hidden space-y-3">
            {traders.slice(0, 7).map((t, i) => {
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
                      {/* Top row */}
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

                      {/* Bottom row */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em]">
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">
                            {t.market}
                          </span>
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">
                            {t.strategy}
                          </span>
                          <span className={cn('inline-flex px-2 py-0.5 rounded-full border', riskBadge[rl])}>
                            {rl}
                          </span>
                        </div>
                        <Sparkline series={t.series} w={48} h={16} color={isPositive ? '#05df72' : '#fb2c36'} />
                      </div>
                    </a>

                    {/* Follow CTA */}
                    <div className="mt-3 pt-3 border-t border-border">
                      <a href="/get-started/" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">
                        Follow
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* ── View Full Leaderboard ────────────────── */}
          <div className="mt-6 text-center">
            <a
              href="/leaderboard/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
            >
              View Full Leaderboard
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
