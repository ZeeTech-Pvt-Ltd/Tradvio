import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const faqItems = [
  { q: 'bt.fq1', a: 'bt.fa1' },
  { q: 'bt.fq2', a: 'bt.fa2' },
  { q: 'bt.fq3', a: 'bt.fa3' },
  { q: 'bt.fq4', a: 'bt.fa4' },
  { q: 'bt.fq5', a: 'bt.fa5' },
  { q: 'bt.fq6', a: 'bt.fa6' },
];

const steps = [
  { step: '01', title: 'bt.s1t', desc: 'bt.s1d' },
  { step: '02', title: 'bt.s2t', desc: 'bt.s2d' },
  { step: '03', title: 'bt.s3t', desc: 'bt.s3d' },
  { step: '04', title: 'bt.s4t', desc: 'bt.s4d' },
];

const metrics = [
  { label: 'bt.m1', value: '68.4%', desc: 'bt.m1d', color: 'text-success' },
  { label: 'bt.m2', value: '2.41', desc: 'bt.m2d', color: 'text-ink' },
  { label: 'bt.m3', value: '-12.3%', desc: 'bt.m3d', color: 'text-danger' },
  { label: 'bt.m4', value: '3.2', desc: 'bt.m4d', color: 'text-success' },
  { label: 'bt.m5', value: '+$142', desc: 'bt.m5d', color: 'text-success' },
  { label: 'bt.m6', value: '1,247', desc: 'bt.m6d', color: 'text-ink' },
];

const features = [
  { title: 'bt.f1t', desc: 'bt.f1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/></svg> },
  { title: 'bt.f2t', desc: 'bt.f2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg> },
  { title: 'bt.f3t', desc: 'bt.f3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 16l3-7 4 1 3-4"/></svg> },
  { title: 'bt.f4t', desc: 'bt.f4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { title: 'bt.f5t', desc: 'bt.f5d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'bt.f6t', desc: 'bt.f6d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
];

const withoutItems = ['bt.wo1', 'bt.wo2', 'bt.wo3', 'bt.wo4', 'bt.wo5'];
const withItems = ['bt.w1', 'bt.w2', 'bt.w3', 'bt.w4', 'bt.w5'];

const marketCards = [
  { name: 'bt.mk1t', desc: 'bt.mk1d', sym: 'AAPL' },
  { name: 'bt.mk2t', desc: 'bt.mk2d', sym: 'BTC' },
  { name: 'bt.mk3t', desc: 'bt.mk3d', sym: 'EUR' },
  { name: 'bt.mk4t', desc: 'bt.mk4d', sym: 'SPX' },
  { name: 'bt.mk5t', desc: 'bt.mk5d', sym: 'XAU' },
  { name: 'bt.mk6t', desc: 'bt.mk6d', sym: 'SPY' },
  { name: 'bt.mk7t', desc: 'bt.mk7d', sym: 'OIL' },
];

const reportItems = ['bt.rl1', 'bt.rl2', 'bt.rl3', 'bt.rl4', 'bt.rl5', 'bt.rl6', 'bt.rl7', 'bt.rl8'];

const perfRow = [
  { label: 'bt.rpNet', val: '$12,847', clr: 'text-success' },
  { label: 'bt.rpWin', val: '64.2%', clr: 'text-ink' },
  { label: 'bt.rpTrades', val: '342', clr: 'text-ink' },
  { label: 'bt.rpMaxDD', val: '-11.4%', clr: 'text-danger' },
];

const monthlyRows = [
  { month: 'Jan 2026', ret: '+8.2%', trades: 28, win: '71%', up: true },
  { month: 'Feb 2026', ret: '+3.1%', trades: 24, win: '63%', up: true },
  { month: 'Mar 2026', ret: '-2.4%', trades: 31, win: '55%', up: false },
  { month: 'Apr 2026', ret: '+12.7%', trades: 29, win: '76%', up: true },
  { month: 'May 2026', ret: '+5.3%', trades: 26, win: '69%', up: true },
];

export default function StrategyBacktesting() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.backtesting')}</title>
        <meta name="description" content="Backtest your trading strategies against years of historical data. Validate ideas, optimise parameters, and trade with confidence. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/strategy-backtesting/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                  {t('bt.h1a')}<br />
                  <span className="text-accent">{t('bt.h1b')}</span>
                </h1>
                <p className="text-lg text-muted-dark leading-relaxed mb-8 max-w-[480px]">
                  {t('bt.heroBody')}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="/get-started/" className="btn btn-primary btn-lg">{t('bt.cta1')}</a>
                  <a href="#how-it-works" className="btn btn-secondary btn-lg">{t('bt.cta2')}</a>
                </div>
                <div className="mt-5 flex items-center gap-4 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('bt.badge1')}</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('bt.badge2')}</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('bt.badge3')}</span>
                </div>
              </div>

              {/* Right - Dashboard mockup */}
              <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">{t('bt.dashTitle')}</span>
                  <span className="text-[0.6rem] text-success font-bold">● {t('bt.sim')}</span>
                </div>
                <div className="p-5">
                  {/* Equity curve */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">{t('bt.equity')}</span>
                      <span className="text-[0.65rem] text-success font-mono">+32.5%</span>
                    </div>
                    <svg viewBox="0 0 400 90" preserveAspectRatio="none" className="w-full h-[90px]">
                      <defs>
                        <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polygon points="0,90 0,60 40,55 80,52 120,45 160,48 200,38 240,40 280,28 320,32 360,20 400,22 400,90" fill="url(#eqGrad)" />
                      <polyline points="0,60 40,55 80,52 120,45 160,48 200,38 240,40 280,28 320,32 360,20 400,22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {metrics.slice(0, 6).map((m) => (
                      <div key={m.label} className="bg-deep border border-border rounded-lg p-2.5">
                        <div className="text-[0.58rem] text-ink-soft uppercase tracking-wider mb-1">{t(m.label)}</div>
                        <div className={cn('font-mono text-sm font-bold', m.color)}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.hiwEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('bt.hiw1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.hiw2')}</span>
              </h2>
              <p className="text-muted-dark max-w-[480px] mx-auto">{t('bt.hiwSub')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-8 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(s.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(s.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ METRICS DEEP DIVE ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.kmEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('bt.km1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.km2')}</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">{t('bt.kmSub')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
              {metrics.map((m) => (
                <div key={m.label} className="bg-navy border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                  <div className={cn('font-mono text-2xl font-bold mb-1', m.color)}>{m.value}</div>
                  <div className="text-[0.65rem] text-ink-soft uppercase tracking-wider font-semibold mb-1">{t(m.label)}</div>
                  <div className="text-[0.6rem] text-ink-soft/60">{t(m.desc)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.fEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('bt.f1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.f2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{t(f.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(f.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ BEFORE / AFTER ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.diffEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('bt.diff1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.diff2')}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden">
              <div className="p-8 bg-navy">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-danger/10 text-danger border border-danger/20">{t('bt.woBadge')}</span>
                <ul className="space-y-3">
                  {withoutItems.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-danger" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-navy border-t md:border-t-0 md:border-l border-border">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] mb-5 bg-success/10 text-success border border-success/20">{t('bt.wBadge')}</span>
                <ul className="space-y-3">
                  {withItems.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-ink-soft leading-relaxed">
                      <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-success" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SUPPORTED MARKETS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.smEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('bt.sm1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.sm2')}</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">{t('bt.smSub')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
              {marketCards.map((m) => (
                <div key={m.name} className="bg-navy border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-xs font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {m.sym}
                  </div>
                  <div className="font-semibold text-sm text-ink mb-1">{t(m.name)}</div>
                  <div className="text-[0.65rem] text-ink-soft">{t(m.desc)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SAMPLE REPORT ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.rpEyebrow')}</div>
                <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                  {t('bt.rp1')}<br />
                  <span className="text-ink-soft font-light italic">{t('bt.rp2')}</span>
                </h2>
                <p className="text-muted-dark leading-relaxed mb-6">{t('bt.rpSub')}</p>
                <div className="grid grid-cols-2 gap-3">
                  {reportItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                      <svg className="w-4 h-4 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {t(item)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Report mockup */}
              <div className="bg-deep border border-border rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-medium-navy border-b border-border px-4 py-3">
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">{t('bt.rptTitle')}</span>
                </div>
                <div className="p-5 space-y-4">
                  {/* Performance row */}
                  <div className="grid grid-cols-4 gap-3">
                    {perfRow.map((m) => (
                      <div key={m.label} className="bg-navy border border-border rounded-lg p-2.5 text-center">
                        <div className={cn('font-mono text-sm font-bold', m.clr)}>{m.val}</div>
                        <div className="text-[0.58rem] text-ink-soft uppercase tracking-wider mt-1">{t(m.label)}</div>
                      </div>
                    ))}
                  </div>

                  {/* Monthly returns table */}
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-[0.68rem]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-3 font-semibold text-ink-soft uppercase">{t('bt.rthMonth')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-ink-soft uppercase">{t('bt.rthReturn')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-ink-soft uppercase">{t('bt.rthTrades')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-ink-soft uppercase">{t('bt.rthWin')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthlyRows.map((r) => (
                          <tr key={r.month} className="border-b border-border last:border-b-0 hover:bg-white/[0.02]">
                            <td className="py-2 px-3 text-ink font-medium">{r.month}</td>
                            <td className={cn('py-2 px-3 text-right font-mono font-semibold', r.up ? 'text-success' : 'text-danger')}>{r.ret}</td>
                            <td className="py-2 px-3 text-right text-ink-soft font-mono">{r.trades}</td>
                            <td className="py-2 px-3 text-right text-ink-soft font-mono">{r.win}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Trade distribution bars */}
                  <div className="bg-navy border border-border rounded-lg p-3">
                    <div className="text-[0.6rem] text-ink-soft uppercase tracking-wider font-semibold mb-2">{t('bt.td')}</div>
                    <div className="flex items-end gap-1 h-16">
                      {Array.from({ length: 20 }, (_, i) => {
                        const h = 20 + Math.sin(i * 0.7) * 25 + Math.random() * 30;
                        const isUp = Math.random() > 0.35;
                        return <div key={i} className={cn('flex-1 rounded-t-sm transition-all', isUp ? 'bg-success/70' : 'bg-danger/70')} style={{ height: `${h}%`, opacity: 0.5 + (Math.abs(h - 50) / 100) }} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('bt.faqEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('bt.faq1')}<br />
                <span className="text-ink-soft font-light italic">{t('bt.faq2')}</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-deep border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {t(item.q)}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{t(item.a)}</p>
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
              {t('bt.close1')}<br />
              <span className="text-accent">{t('bt.close2')}</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              {t('bt.closeSub')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/get-started/" className="btn btn-primary btn-lg">{t('bt.closeCta1')}</a>
              <a href="/leaderboard/" className="btn btn-secondary btn-lg">{t('bt.closeCta2')}</a>
            </div>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              {t('bt.closeNote')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
