import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import { agents, type Agent } from '@/lib/agents';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage, marketLabel, strategyLabel } from '@/lib/i18n';

/* ─── Helpers ───────────────────────────────────────── */
function fmtPct(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

const riskBadge: Record<Agent['risk'], string> = {
  Low: 'bg-success/10 text-success border-success/20',
  Medium: 'bg-warning/10 text-warning border-warning/20',
  High: 'bg-danger/10 text-danger border-danger/20',
};

/* ─── Sparkline ─────────────────────────────────────── */
function Sparkline({ series, id }: { series: number[]; id: number }) {
  if (!series || series.length < 2) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const w = 118, h = 62;
  const points = series.map((v, i) => `${(i / (series.length - 1)) * w},${h - ((v - min) / range) * (h - 8) - 4}`);
  const ptsStr = points.join(' ');
  const positive = series[series.length - 1] >= 0;
  const color = positive ? '#05df72' : '#fb2c36';
  const uid = `spk-${id}`;
  const [firstX] = points[0].split(',');
  const [lastX] = points[points.length - 1].split(',');

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
const TAB_KEYS = ['td.tabAll', 'td.tabLow', 'td.tabMedium', 'td.tabHigh'];
const RISK_BY_TAB: Record<string, string> = {
  'td.tabLow': 'Low', 'td.tabMedium': 'Medium', 'td.tabHigh': 'High',
};



export default function TradersPage() {
  const { t, lang } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [tabKey, setTabKey] = useState('td.tabAll');
  const [market, setMarket] = useState(t('lb.allMarkets'));
  const [strategy, setStrategy] = useState(t('lb.allStrategies'));
  const [model, setModel] = useState(t('lb.allModels'));
  // Reset filter states when the language changes so stale translated
  // labels never silently filter out every agent.
  useEffect(() => {
    setMarket(t('lb.allMarkets'));
    setStrategy(t('lb.allStrategies'));
    setModel(t('lb.allModels'));
  }, [lang]);

  const markets = useMemo(() => [t('lb.allMarkets'), ...new Set(agents.map((a) => marketLabel(a.market, t)))], [t, lang]);
  const strategies = useMemo(() => [t('lb.allStrategies'), ...new Set(agents.map((a) => strategyLabel(a.shortStrategy, t)))], [t, lang]);
  const models = useMemo(() => [t('lb.allModels'), ...new Set(agents.map((a) => a.model))], []);

  const filtered = useMemo(() => {
    return agents.filter((a) => {
      if (market !== t('lb.allMarkets') && marketLabel(a.market, t) !== market) return false;
      if (strategy !== t('lb.allStrategies') && strategyLabel(a.shortStrategy, t) !== strategy) return false;
      if (model !== t('lb.allModels') && a.model !== model) return false;
      if (tabKey !== 'td.tabAll' && a.risk !== RISK_BY_TAB[tabKey]) return false;
      return true;
    });
  }, [tabKey, market, strategy, model]);

  return (
    <>
      <Helmet>
        <title>{t('meta.traders')}</title>
        <meta name="description" content={t('td.sub')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/trader/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          {/* ── Hero ───────────────────────────────── */}
          <div className="mb-6">
            <h1 className="font-mono font-black text-[clamp(38px,5vw,58px)] leading-none -tracking-[2px] m-0">
              {t('td.title')}
            </h1>
            <p className="text-ink-soft text-sm mt-2 font-mono">
              {t('td.sub')}
            </p>
          </div>

          {/* ── Tab buttons ────────────────────────── */}
          <div className="inline-flex flex-wrap border border-border mb-[18px] bg-navy">
            {TAB_KEYS.map((tk) => {
              const tabLabel = t(tk);
              return (
                <button
                  key={tk}
                  onClick={() => setTabKey(tk)}
                  className={cn(
                    'flex-1 min-w-[100px] sm:min-w-[110px] border-0 px-4 py-[10px] cursor-pointer font-mono text-xs transition-colors border-r border-border last:border-r-0',
                    tabKey === tk
                      ? 'bg-accent text-white'
                      : 'bg-deep text-ink-soft'
                  )}
                >
                  {tabLabel}
                </button>
              );
            })}
          </div>

          {/* ── Filter bar ──────────────────────────── */}
          <div className="sticky top-16 lg:top-20 z-20 grid grid-cols-[130px_repeat(3,1fr)] border border-border bg-navy mb-5 max-sm:grid-cols-1">
            <div className="flex items-center px-[14px] text-ink-soft font-mono text-xs font-bold border-r border-border max-sm:border-r-0 max-sm:border-b max-sm:min-h-[48px]">
              ▾ {t('lb.filters')}
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
              {t('td.noMatch')}
            </div>
          )}

          {/* ── Trader cards grid ───────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filtered.map((a, i) => {
              const isPositive = a.actualReturn >= 0;

              return (
                <article
                  key={a.id}
                  onClick={() => { window.location.href = `/trader/${a.slug}/`; }}
                  className="border border-border bg-navy rounded-[10px] p-4 cursor-pointer transition-all duration-fast hover:-translate-y-[3px] hover:border-accent/30 hover:shadow-card-lg"
                >
                  {/* Top row: name + risk */}
                  <div className="flex justify-between items-start gap-[14px] mb-[22px]">
                    <div className="flex items-center gap-[11px] min-w-0">
                      <span className="font-mono text-xs font-bold text-ink-soft shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="w-[36px] h-[36px] flex-shrink-0 grid place-items-center bg-accent/15 text-accent font-mono font-bold border border-accent/50 rounded-[5px]">
                        {a.initial}
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-mono font-bold text-[15px] m-0 whitespace-nowrap overflow-hidden text-ellipsis text-ink">
                          {a.name}
                        </h2>
                        <p className="text-ink-soft text-[9px] m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                          {a.model} &nbsp;•&nbsp; {marketLabel(a.market, t)}
                        </p>
                      </div>
                    </div>
                    <span className={cn('flex-shrink-0 px-2 py-[6px] font-mono text-[9px] rounded uppercase tracking-[0.1em] border', riskBadge[a.risk])}>
                      {t('lb.' + a.risk.toLowerCase())}</span>
                  </div>

                  {/* Return + Sparkline */}
                  <div className="flex justify-between items-center gap-[14px] mb-[15px]">
                    <div>
                      <span className="block text-ink-soft uppercase font-mono text-[8px] tracking-[.03em]">{t('td.liveReturn')}</span>
                      <strong className={cn('block mt-[7px] font-mono text-[23px]', isPositive ? 'text-success' : 'text-danger')}>
                        {fmtPct(a.actualReturn)}
                      </strong>
                    </div>
                    <div className="w-[118px] h-[62px] flex-shrink-0">
                      <Sparkline series={a.series} id={a.id} />
                    </div>
                  </div>

                  {/* Strategy */}
                  <div className="border border-border mb-[13px] rounded-md px-3 py-2.5">
                    <span className="block text-ink-soft uppercase font-mono text-[8px] tracking-[.03em] mb-1">{t('td.strategy')}</span>
                    <span className="block font-mono text-[11px] text-ink leading-relaxed">
                      {strategyLabel(a.shortStrategy, t)}
                    </span>
                  </div>

                  {/* Follow button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); window.location.href = '/get-started/'; }}
                    className="w-full border-0 text-white py-[10px] cursor-pointer font-mono font-bold text-[10px] tracking-[.05em] transition-all hover:opacity-90 bg-accent hover:bg-accent-hover rounded-lg"
                  >
                    {t('td.follow')}
                  </button>
                </article>
              );
            })}
          </div>

          {/* Legend */}
          <p className="mt-6 text-center font-mono text-[10px] text-ink-soft tracking-[.02em]">
            {agents.length} {t('lb.tradersWord')} {t('lb.of')} {new Set(agents.map((a) => a.market)).size} {t('td.assetClasses')} • {t('lb.realtime')}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
