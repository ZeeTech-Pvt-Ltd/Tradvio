import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const faqItems = [
  { q: 'tj.fq1', a: 'tj.fa1' },
  { q: 'tj.fq2', a: 'tj.fa2' },
  { q: 'tj.fq3', a: 'tj.fa3' },
  { q: 'tj.fq4', a: 'tj.fa4' },
  { q: 'tj.fq5', a: 'tj.fa5' },
  { q: 'tj.fq6', a: 'tj.fa6' },
];

const whyJournal = [
  { title: 'tj.w1t', desc: 'tj.w1d' },
  { title: 'tj.w2t', desc: 'tj.w2d' },
  { title: 'tj.w3t', desc: 'tj.w3d' },
  { title: 'tj.w4t', desc: 'tj.w4d' },
];

const steps = [
  { step: '01', title: 'tj.s1t', desc: 'tj.s1d' },
  { step: '02', title: 'tj.s2t', desc: 'tj.s2d' },
  { step: '03', title: 'tj.s3t', desc: 'tj.s3d' },
];

const features = [
  { label: 'tj.fl1', title: 'tj.f1t', desc: 'tj.f1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"/></svg> },
  { label: 'tj.fl2', title: 'tj.f2t', desc: 'tj.f2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: 'tj.fl3', title: 'tj.f3t', desc: 'tj.f3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { label: 'tj.fl4', title: 'tj.f4t', desc: 'tj.f4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { label: 'tj.fl5', title: 'tj.f5t', desc: 'tj.f5d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { label: 'tj.fl6', title: 'tj.f6t', desc: 'tj.f6d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { label: 'tj.fl7', title: 'tj.f7t', desc: 'tj.f7d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { label: 'tj.fl8', title: 'tj.f8t', desc: 'tj.f8d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
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

const tagCombos = [
  { combo: 'tj.c1', winRate: '72%', trades: 38, clr: 'text-success' },
  { combo: 'tj.c2', winRate: '64%', trades: 51, clr: 'text-success' },
  { combo: 'tj.c3', winRate: '48%', trades: 22, clr: 'text-warning' },
  { combo: 'tj.c4', winRate: '31%', trades: 19, clr: 'text-danger' },
  { combo: 'tj.c5', winRate: '44%', trades: 27, clr: 'text-warning' },
];

export default function TradeJournal() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.journal')}</title>
        <meta name="description" content="Track every trade with Tradvio AI's journal. Automatic imports, AI insights, tag filters, and emotion tracking. Free to start - no credit card required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/trade-journal/" />
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
                {t('tj.badge')}
              </div>
              <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                {t('tj.h1a')} <span className="text-accent">{t('tj.h1b')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink mb-4">
                {t('tj.sub1a')} <span className="text-accent">{t('tj.sub1b')}</span>
              </p>
              <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
                {t('tj.heroBody')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">{t('tj.cta')}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY JOURNAL MATTERS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.wmEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('tj.wm1')}<br />
                <span className="text-ink-soft font-light italic">{t('tj.wm2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyJournal.map((w, i) => (
                <div key={w.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{t(w.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(w.desc)}</p>
                </div>
              ))}
            </div>

            {/* CTA band */}
            <div className="mt-12 bg-deep border border-border rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">{t('tj.ready')}</h3>
              <p className="text-muted-dark mb-5">{t('tj.readySub')}</p>
              <a href="/get-started/" className="btn btn-primary">{t('tj.cta')}</a>
            </div>
          </div>
        </section>

        {/* ═══════════ THREE STEPS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.loopEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('tj.loop1')}<br />
                <span className="text-ink-soft font-light italic">{t('tj.loop2')}</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">{t('tj.loopSub')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              <div className="absolute top-10 left-[15%] right-[15%] h-px bg-border hidden sm:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t(s.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(s.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.fEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('tj.f1')}<br />
                <span className="text-ink-soft font-light italic">{t('tj.f2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">{f.icon}</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.12em] text-accent font-bold mb-1.5">{t(f.label)}</div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">{t(f.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(f.desc)}</p>
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
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.tagEyebrow')}</div>
                <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                  {t('tj.tag1')}<br />
                  <span className="text-ink-soft font-light italic">{t('tj.tag2')}</span>
                </h2>
                <p className="text-muted-dark leading-relaxed mb-4">
                  {t('tj.tagP1')}
                </p>
                <p className="text-muted-dark leading-relaxed mb-8">
                  {t('tj.tagP2')}
                </p>
                <a href="/get-started/" className="btn btn-primary">{t('tj.tryNow')}</a>
              </div>

              {/* Tag insights mockup */}
              <div className="bg-navy border border-border rounded-2xl overflow-hidden">
                <div className="bg-medium-navy border-b border-border px-4 py-3">
                  <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">{t('tj.smartPicks')}</span>
                </div>
                <div className="p-5 space-y-3">
                  {tagCombos.map((row) => (
                    <div key={row.combo} className="flex items-center justify-between bg-deep border border-border rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-ink">{t(row.combo)}</span>
                      <span className={cn('font-mono text-sm font-bold', row.clr)}>
                        {row.winRate} <span className="text-ink-soft font-normal text-xs">· {row.trades} {t('tj.tradesWord')}</span>
                      </span>
                    </div>
                  ))}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-xs text-ink-soft leading-relaxed">
                    <span className="text-accent font-bold">{t('tj.aiInsightLabel')}</span> {t('tj.aiInsightBody')}
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
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.syncEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('tj.sync1')}<br />
                <span className="text-ink-soft font-light italic">{t('tj.sync2')}</span>
              </h2>
              <p className="text-muted-dark max-w-[520px] mx-auto">{t('tj.syncSub')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
              {platformSync.map((p) => (
                <div key={p.name} className="bg-deep border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {p.icon}
                  </div>
                  <div className="text-sm font-semibold text-ink mb-1">{p.name}</div>
                  <div className={cn('text-[0.65rem] font-bold uppercase tracking-wider', p.status === 'sync' ? 'text-success' : 'text-warning')}>
                    {p.status === 'sync' ? t('tj.syncNow') : t('tj.uploadFile')}
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
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('tj.faqEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('tj.faq1')}<br />
                <span className="text-ink-soft font-light italic">{t('tj.faq2')}</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-navy border border-border rounded-xl p-5 group" open={i === 0}>
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

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">{t('tj.closeEyebrow')}</div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              {t('tj.close1')}<br />
              <span className="text-accent">{t('tj.close2')}</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              {t('tj.closeSub')}
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">{t('tj.closeCta')}</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              {t('tj.closeNote')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
