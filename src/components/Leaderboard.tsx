import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n';
import { agents, type Agent } from '@/lib/agents';

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

/* ─── Main Component ───────────────────────────────── */
export default function Leaderboard() {
  const { t } = useLanguage();
  const featured = agents.slice(0, 7);

  return (
    <section className="relative">
      {/* ── Section header ─────────────────────────── */}
      <div className="pt-8 lg:pt-12 pb-2 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-2">
            <p className="text-xs uppercase tracking-[0.12em] text-ink-soft font-mono mb-3">
              {t('leaderboard.eyebrow')}
            </p>
            <h2 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
              {t('leaderboard.title')}
            </h2>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed tracking-[0.02em]">
              {t('leaderboard.sub')}
            </p>
          </div>
        </div>
      </div>

      {/* ── Desktop table ─────────────────────────── */}
      <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8">
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

            {featured.map((a, i) => {
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
            })}
          </div>

          {/* ── Mobile cards ───────────────────────── */}
          <div className="lg:hidden space-y-3">
            {featured.map((a, i) => {
              const isPositive = a.actualReturn >= 0;
              return (
                <div
                  key={a.id}
                  className="bg-navy border border-border rounded-xl p-4 hover:bg-medium-navy/50 transition-colors shadow-sm"
                >
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
                      <span className="inline-flex px-2 py-0.5 rounded-full border border-border bg-medium-navy/60 text-ink-soft">
                        {a.market}
                      </span>
                      <span className={cn('inline-flex px-2 py-0.5 rounded-full border', riskBadge[a.risk])}>
                        {a.risk}
                      </span>
                    </div>
                    <Sparkline series={a.series} w={64} h={20} />
                  </div>
                  <p className="font-mono text-[11px] text-ink-soft mt-2 leading-relaxed">{a.strategy}</p>

                  <div className="mt-3 pt-3 border-t border-border">
                    <a href="/get-started/" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors no-underline">{t('lb.follow')}</a>
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
              {t('leaderboard.viewAll')}
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
