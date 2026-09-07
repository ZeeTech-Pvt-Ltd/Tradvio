import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const verificationSteps = [
  'pv.v1',
  'pv.v2',
  'pv.v3',
  'pv.v4',
  'pv.v5',
];

const publishFields = [
  { field: 'pv.pf1', why: 'pv.pw1' },
  { field: 'pv.pf2', why: 'pv.pw2' },
  { field: 'pv.pf3', why: 'pv.pw3' },
  { field: 'pv.pf4', why: 'pv.pw4' },
  { field: 'pv.pf5', why: 'pv.pw5' },
  { field: 'pv.pf6', why: 'pv.pw6' },
  { field: 'pv.pf7', why: 'pv.pw7' },
];

const badges = [
  { badge: 'pv.b1', color: 'grey', requirement: 'pv.br1', status: 'pv.bs1', dotClr: '#6e85a3' },
  { badge: 'pv.b2', color: 'blue', requirement: 'pv.br2', status: 'pv.bs2', dotClr: '#3b82f6' },
  { badge: 'pv.b3', color: 'green', requirement: 'pv.br3', status: 'pv.bs3', dotClr: '#22c55e' },
  { badge: 'pv.b4', color: 'gold', requirement: 'pv.br4', status: 'pv.bs4', dotClr: '#facc15' },
];

const metrics = [
  { metric: 'pv.m1', calc: 'pv.mc1', tells: 'pv.mt1' },
  { metric: 'pv.m2', calc: 'pv.mc2', tells: 'pv.mt2' },
  { metric: 'pv.m3', calc: 'pv.mc3', tells: 'pv.mt3' },
  { metric: 'pv.m4', calc: 'pv.mc4', tells: 'pv.mt4' },
  { metric: 'pv.m5', calc: 'pv.mc5', tells: 'pv.mt5' },
  { metric: 'pv.m6', calc: 'pv.mc6', tells: 'pv.mt6' },
];

const auditSteps = [
  'pv.a1',
  'pv.a2',
  'pv.a3',
  'pv.a4',
];

const redFlags = [
  { flag: 'pv.f1', ask: 'pv.fa1' },
  { flag: 'pv.f2', ask: 'pv.fa2' },
  { flag: 'pv.f3', ask: 'pv.fa3' },
  { flag: 'pv.f4', ask: 'pv.fa4' },
  { flag: 'pv.f5', ask: 'pv.fa5' },
  { flag: 'pv.f6', ask: 'pv.fa6' },
];

const faqs = [
  { q: 'pv.fq1', a: 'pv.fa1q' },
  { q: 'pv.fq2', a: 'pv.fa2q' },
  { q: 'pv.fq3', a: 'pv.fa3q' },
  { q: 'pv.fq4', a: 'pv.fa4q' },
];

export default function PerformanceVerification() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.verify')}</title>
        <meta name="description" content="Every Tradvio AI agent trades real capital, and every trade is logged the moment it opens — then published in full. Winners and losers. See exactly how verification works." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/performance-verification/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-5">
                Trust · Transparency · Verification
              </div>
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
                {t('pv.hero1')}<br />
                <span className="text-accent">{t('pv.hero2')}</span>
              </h1>
              <p className="text-lg text-muted-dark max-w-2xl mx-auto mb-8">
                {t('pv.heroP1')}
              </p>
              <p className="text-muted-dark max-w-2xl mx-auto mb-12">
                {t('pv.heroP2')}
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/leaderboard/" className="btn btn-primary btn-lg">{t('pv.cta1')}</a>
                <a href="/trader/" className="btn btn-secondary btn-lg">{t('pv.cta2')}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW A RESULT GETS VERIFIED ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.processEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.processT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.processT2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {verificationSteps.map((step, i) => (
                <div key={t(step)} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(step)}</p>
                </div>
              ))}
              {/* Filler to keep grid clean with 5 items */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE vs DEMO vs BACKTEST ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.diffEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.diffT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.diffT2')}</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-5 text-sm font-semibold text-ink-soft" />
                    <th className="text-center py-4 px-5 text-sm font-semibold text-ink-soft">{t('pv.backtest')}</th>
                    <th className="text-center py-4 px-5 text-sm font-semibold text-ink-soft">{t('pv.demo')}</th>
                    <th className="text-center py-4 px-5 text-sm font-bold text-accent">{t('pv.liveCap')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: t('pv.r1'), vals: [t('pv.no'), t('pv.no'), t('pv.yes')] },
                    { label: t('pv.r2'), vals: [t('pv.assumed'), t('pv.partly'), t('pv.yes')] },
                    { label: t('pv.r3'), vals: [t('pv.ignored'), t('pv.softened'), t('pv.fully')] },
                    { label: t('pv.r4'), vals: [t('pv.skipped'), t('pv.skipped'), t('pv.deducted')] },
                    { label: t('pv.r5'), vals: [t('pv.yes'), t('pv.yes'), t('pv.no')] },
                    { label: t('pv.r6'), vals: [t('pv.never'), t('pv.never'), t('pv.always')] },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-navy border-b border-border' : 'bg-deep border-b border-border'}>
                      <td className="py-4 px-5 text-sm text-ink font-medium">{row.label}</td>
                      {row.vals.map((v, j) => (
                        <td key={j} className={`py-4 px-5 text-center text-sm ${j === 2 ? 'font-bold text-accent' : v === 'No' || v === 'Never' || v === 'Ignored' || v === 'Often skipped' ? 'text-danger' : 'text-ink-soft'}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT WE PUBLISH ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.pubEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.pubT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.pubT2')}</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Field</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Why it is shown</th>
                  </tr>
                </thead>
                <tbody>
                  {publishFields.map((f, i) => (
                    <tr key={t(f.field)} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-ink font-medium w-[40%]">{t(f.field)}</td>
                      <td className="p-4 text-sm text-ink-soft">{t(f.why)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ VERIFICATION BADGES ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.badgeEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.badgeT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.badgeT2')}</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-navy">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Badge</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Requirement</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Leaderboard status</th>
                  </tr>
                </thead>
                <tbody>
                  {badges.map((b, i) => (
                    <tr key={t(b.badge)} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: b.dotClr }} />
                          {t(b.badge)}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-ink-soft">{t(b.requirement)}</td>
                      <td className="p-4 text-sm text-ink-soft">{t(b.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-dark text-center mt-6 max-w-2xl mx-auto">
              {t('pv.badgeNote')}
            </p>
          </div>
        </section>

        {/* ═══════════ THE NUMBERS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.methEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.methT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.methT2')}</span>
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto mt-4">
                {t('pv.methIntro')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Metric</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">How it is calculated</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m, i) => (
                    <tr key={t(m.metric)} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-ink font-semibold w-[25%]">{t(m.metric)}</td>
                      <td className="p-4 text-sm text-ink-soft">{t(m.calc)}</td>
                      <td className="p-4 text-sm text-ink-soft">{t(m.tells)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-warning text-center mt-6">
              {t('pv.lowSample')}
            </p>
          </div>
        </section>

        {/* ═══════════ WHAT VERIFICATION DOES NOT MEAN ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.limitsEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.limitsT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.limitsT2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'pv.lim1',
                'pv.lim2',
                'pv.lim3',
                'pv.lim4',
              ].map((item, i) => (
                <div key={i} className="bg-navy border border-border rounded-xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold flex-shrink-0">✕</div>
                  <p className="text-sm text-muted-dark leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ AUDIT YOURSELF ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.auditEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.auditT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.auditT2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {auditSteps.map((step, i) => (
                <div key={t(step)} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(step)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ RED FLAGS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.flagEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('pv.flagT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.flagT2')}</span>
              </h2>
              <p className="text-muted-dark">{t('pv.useUs')}</p>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-navy">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-danger font-semibold">Red flag</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-success font-semibold">Ask for this instead</th>
                  </tr>
                </thead>
                <tbody>
                  {redFlags.map((r, i) => (
                    <tr key={t(r.flag)} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-danger">{t(r.flag)}</td>
                      <td className="p-4 text-sm text-success">{t(r.ask)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.faqEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('pv.faqT1')}<br />
                <span className="text-ink-soft font-light italic">{t('pv.faqT2')}</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqs.map((item, i) => (
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

        {/* ═══════════ SHORT VERSION ═══════════ */}
        <section className="py-[100px] bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="bg-navy border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="text-center mb-8">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('pv.shortEyebrow')}</div>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.2]">
                  {t('pv.shortT')}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { text: t('pv.sp1'), desc: t('pv.spd1'), icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
                  { text: t('pv.sp2'), desc: t('pv.spd2'), icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
                  { text: t('pv.sp3'), desc: t('pv.spd3'), icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                  { text: t('pv.sp4'), desc: t('pv.spd4'), icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
                ].map((p) => (
                  <div key={p.text} className="bg-deep border border-border rounded-xl p-5 flex items-start gap-4 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">{p.icon}</div>
                    <div>
                      <div className="font-bold text-ink mb-0.5">{p.text}</div>
                      <div className="text-xs text-ink-soft">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-ink-soft mb-8">
                {t('pv.shortClose')}
              </p>

              <div className="text-center">
                <a href="/leaderboard/" className="btn btn-primary btn-lg">{t('pv.shortCta')}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
