import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const comparison: { feature: string; tradvio: string; general: string }[] = [
  { feature: 'wy.cr1', tradvio: '✓', general: 'wy.cg1' },
  { feature: 'wy.cr2', tradvio: '✓', general: 'wy.cg2' },
  { feature: 'wy.cr3', tradvio: '✓', general: 'wy.cg3' },
  { feature: 'wy.cr4', tradvio: '✓', general: 'wy.cg4' },
  { feature: 'wy.cr5', tradvio: '✓', general: 'wy.cg5' },
  { feature: 'wy.cr6', tradvio: '✓', general: 'wy.cg6' },
  { feature: 'wy.cr7', tradvio: '✓', general: '✓' },
  { feature: 'wy.cr8', tradvio: 'wy.ct8', general: 'wy.cg8' },
];

const differentiators: { title: string; intro: string; bullets?: string[]; flow?: string; outro?: string }[] = [
  {
    title: 'wy.d1t',
    intro: 'wy.d1i',
    bullets: ['wy.d1b1', 'wy.d1b2', 'wy.d1b3', 'wy.d1b4'],
  },
  {
    title: 'wy.d2t',
    intro: 'wy.d2i',
    flow: 'wy.d2f',
  },
  {
    title: 'wy.d3t',
    intro: 'wy.d3i',
    bullets: ['wy.d3b1', 'wy.d3b2', 'wy.d3b3', 'wy.d3b4', 'wy.d3b5'],
    outro: 'wy.d3o',
  },
];

const whyChoose = [
  { key: 'wy.w1', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h4"/><path d="M12 2v2M12 20v2"/></svg> },
  { key: 'wy.w2', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M8.5 11l2 2 4-4"/></svg> },
  { key: 'wy.w3', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6.75V21M15 6.75V21M3 3h18l-3 3.75H6L3 3zM6.75 3v3.75M17.25 3v3.75"/></svg> },
  { key: 'wy.w4', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { key: 'wy.w5', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 12l7-4.5M8.5 12l7 4.5"/></svg> },
  { key: 'wy.w6', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M12 22V12M3.3 7l8.7 5 8.7-5"/></svg> },
];

export default function WhyChooseTradvio() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.why')}</title>
        <meta name="description" content="Tradvio vs general trading platforms — AI-assisted analysis, integrated trade planning, and a connected workflow. See why traders choose Tradvio." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/why-choose-tradvio-ai/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
              {t('wy.hero1')} <span className="text-accent">{t('wy.hero2')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed max-w-[700px] mx-auto mb-4">
              {t('wy.heroSub')}
            </p>
            <p className="text-muted-dark leading-relaxed max-w-[700px] mx-auto">
              {t('wy.heroBody')}
            </p>
          </div>
        </section>

        {/* ═══════════ COMPARISON TABLE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('wy.eyebrowCmp')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('wy.cmpT1')}<br />
                <span className="text-ink-soft font-light italic">{t('wy.cmpT2')}</span>
              </h2>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-ink-soft w-[45%]">{t('wy.colFeature')}</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-accent">{t('wy.colTradvio')}</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-ink-soft">{t('wy.colGeneral')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={cn('border-b border-border last:border-b-0', i % 2 === 0 ? 'bg-navy' : 'bg-deep')}>
                      <td className="py-4 px-6 text-sm text-ink font-medium">{t(row.feature)}</td>
                      <td className={cn('py-4 px-6 text-center text-sm font-bold', row.tradvio === '✓' ? 'text-success' : 'text-ink')}>
                        {row.tradvio === '✓' ? '✓' : t(row.tradvio)}
                      </td>
                      <td className={cn('py-4 px-6 text-center text-sm', row.general === '✓' ? 'text-success' : 'text-ink-soft')}>
                        {row.general === '✓' ? '✓' : t(row.general)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT MAKES TRADVIO DIFFERENT ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('wy.eyebrowDiff')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('wy.diffT1')}<br />
                <span className="text-ink-soft font-light italic">{t('wy.diffT2')}</span>
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {differentiators.map((d, idx) => (
                <div key={d.title} className="bg-navy border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-ink">{t(d.title)}</h3>
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed mb-4">{t(d.intro)}</p>
                  {d.bullets && (
                    <ul className="space-y-2 mb-4">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-sm text-muted-dark leading-relaxed">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                          {t(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {d.flow && (
                    <div className="bg-deep border border-border rounded-xl p-5 text-center mb-4">
                      <span className="font-mono text-lg font-bold text-accent">{t(d.flow)}</span>
                    </div>
                  )}
                  {d.outro && <p className="text-sm text-muted-dark leading-relaxed">{t(d.outro)}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CHOOSE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('wy.eyebrowWhy')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('wy.whyT1')}<br />
                <span className="text-ink-soft font-light italic">{t('wy.whyT2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChoose.map((w) => (
                <div key={w.key} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    {w.icon}
                  </div>
                  <p className="text-sm text-ink leading-relaxed">{t(w.key)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CLOSING ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-8">
              {t('wy.close1')}<br />
              <span className="text-accent">{t('wy.close2')}</span>
            </h2>
            <a href="/get-started/" className="btn btn-primary btn-lg">{t('wy.closeCta')}</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
