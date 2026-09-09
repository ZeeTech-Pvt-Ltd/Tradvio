import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const visionPoints = [
  { title: 'Partners in your journey', desc: 'We work closely with every client - collaboration is how great results happen.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { title: 'Sustainable growth', desc: 'We focus on long-term financial health rather than short-term gains.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { title: 'Control over your future', desc: 'Empowering businesses and traders with tailored, data-driven strategies.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
  { title: 'Always evolving', desc: 'Staying at the forefront of industry changes as the financial world continues to move.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg> },
];

export default function AboutUs() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.about')}</title>
        <meta name="description" content="At Tradvio AI, we're on a mission to make advanced artificial intelligence practical, accessible, and transformative for traders and businesses." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/about-us/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-8">
                {t('au.title1')} <span className="text-accent">{t('au.title2')}</span>
              </h1>
              <p className="text-lg text-muted-dark leading-relaxed max-w-2xl mx-auto mb-10">
                {t('au.hero')}
              </p>
            </div>

            {/* Feature banner */}
            <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
              <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                </div>
                <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">Tradvio AI</span>
                <span className="text-[0.6rem] text-success font-bold">● EST. 2026</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-px bg-border">
                {[
                  { value: '100,000+', label: t('au.stat1') },
                  { value: '50+', label: t('au.stat2') },
                  { value: '7', label: t('au.stat3') },
                ].map((s) => (
                  <div key={s.label} className="bg-deep py-8 px-4 text-center">
                    <div className="text-3xl font-bold text-accent">{s.value}</div>
                    <div className="text-xs text-ink-soft mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ OUR VISION ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('au.vision')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('au.visionH1')}<br />
                <span className="text-ink-soft font-light italic">{t('au.visionH2')}</span>
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto leading-relaxed">
                {t('au.visionBody')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {visionPoints.map((v, vi) => (
                <div key={t('au.v' + (vi + 1) + 't')} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{t('au.v' + (vi + 1) + 't')}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t('au.v' + (vi + 1) + 'd')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ JOIN US ON THE JOURNEY ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('au.story')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('au.storyH1')}<br />
                <span className="text-ink-soft font-light italic">{t('au.storyH2')}</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-dark leading-relaxed text-lg">
                {t('au.story1')}
              </p>

              {/* Core belief quote */}
              <div className="bg-navy border border-border rounded-2xl p-8 text-center relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                <svg className="w-8 h-8 text-accent/40 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p className="text-xl md:text-2xl font-bold text-ink leading-relaxed">
                  &ldquo;{t('au.quote1')}<span className="text-accent">{t('au.quote2')}</span>.&rdquo;
                </p>
                <p className="text-sm text-ink-soft mt-4">{t('au.quoteNote')}</p>
              </div>

              <p className="text-muted-dark leading-relaxed text-lg">
                {t('au.story2')}
              </p>

              <p className="text-center text-xl font-bold text-ink pt-4">
                {t('au.closing1')}<span className="text-accent">{t('au.closing2')}</span>
              </p>

              <div className="flex gap-4 justify-center flex-wrap pt-2">
                <a href="/get-started/" className="btn btn-primary btn-lg">{t('au.cta1')}</a>
                <a href="/contact-us/" className="btn btn-secondary btn-lg">{t('au.cta2')}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
