import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const levels = [
  { levelKey: 'ac.lvl1', forKey: 'ac.lvl1d', timeKey: 'ac.t1', featured: true },
  { levelKey: 'ac.lvl2', forKey: 'ac.lvl2d', timeKey: 'ac.t2', featured: false },
  { levelKey: 'ac.lvl3', forKey: 'ac.lvl3d', timeKey: 'ac.t3', featured: false },
];

const learnItems = [
  { textKey: 'ac.l1', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { textKey: 'ac.l2', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-7 4 14 2-9 2 4h6"/></svg> },
  { textKey: 'ac.l3', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { textKey: 'ac.l4', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M8 6h8M8 12h8M8 18h5"/><path d="M4 4l16 16"/></svg> },
  { textKey: 'ac.l5', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M8 15c1.2 1.2 2.8 1.2 4 0s2.8-1.2 4 0"/></svg> },
];

const lessonSteps = [
  { step: '1', titleKey: 'ac.watch', descKey: 'ac.watchD' },
  { step: '2', titleKey: 'ac.mark', descKey: 'ac.markD' },
  { step: '3', titleKey: 'ac.compare', descKey: 'ac.compareD' },
  { step: '4', titleKey: 'ac.save', descKey: 'ac.saveD' },
];

const whyFinish = [
  { textKey: 'ac.w1', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { textKey: 'ac.w2', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { textKey: 'ac.w3', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  { textKey: 'ac.w4', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
  { textKey: 'ac.w5', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> },
];

export default function Academy() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.academy')}</title>
        <meta name="description" content="Learn to read a chart the way our AI reads it. Short lessons, live charts, zero fluff. Free to start — Foundations is open, no card." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/academy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                {t('ac.hero1')}<br />
                <span className="text-accent">{t('ac.hero2')}</span>
              </h1>
              <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
                {t('ac.heroSub')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">{t('ac.start')}</a>
                <a href="#levels" className="btn btn-secondary btn-lg">{t('ac.check')}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PICK YOUR LEVEL ═══════════ */}
        <section id="levels" className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ac.pickLevel')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ac.threeLevels')}<br />
                <span className="text-ink-soft font-light italic">{t('ac.oneSkill')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {levels.map((l) => (
                <div
                  key={l.levelKey}
                  className={cn(
                    'rounded-2xl p-6 flex flex-col text-center',
                    l.featured
                      ? 'bg-deep border border-accent/40 shadow-[0_0_40px_rgba(220,38,38,0.25)]'
                      : 'bg-deep border border-border hover:border-accent/30 transition-colors'
                  )}
                >
                  {l.featured && (
                    <span className="mx-auto mb-3 bg-accent text-white text-[0.65rem] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full">
                      {t('ac.startHere')}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-ink mb-3">{t(l.levelKey)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed mb-4 flex-1">{t(l.forKey)}</p>
                  <div className="text-xs font-mono text-accent font-semibold">{t(l.timeKey)}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-8">
              {t('ac.placement')}
            </p>
          </div>
        </section>

        {/* ═══════════ WHAT YOU'LL LEARN ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ac.curriculum')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ac.learn1')}<br />
                <span className="text-ink-soft font-light italic">{t('ac.learn2')}</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {learnItems.map((item) => (
                <div key={item.textKey} className="bg-navy border border-border rounded-xl p-5 flex items-start gap-4 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <p className="text-sm text-ink leading-relaxed pt-2">{t(item.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW EACH LESSON WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ac.format')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ac.how1')}<br />
                <span className="text-ink-soft font-light italic">{t('ac.how2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {lessonSteps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t(s.titleKey)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(s.descKey)}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-10 max-w-2xl mx-auto">
              {t('ac.noQuizzes')}
            </p>
          </div>
        </section>

        {/* ═══════════ WHY TRADERS FINISH ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ac.why')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ac.whyT1')}<br />
                <span className="text-ink-soft font-light italic">{t('ac.whyT2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyFinish.map((w) => (
                <div key={w.textKey} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">{w.icon}</div>
                  <p className="text-sm text-ink leading-relaxed">{t(w.textKey)}</p>
                </div>
              ))}
              {/* Filler for clean grid */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ═══════════ WHO IT'S NOT FOR ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-deep border border-border rounded-2xl p-8 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft mb-3">{t('ac.notFor')}</div>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.2] mb-4">
                {t('ac.notForBody')}
              </h2>
              <p className="text-muted-dark leading-relaxed mb-6">
                {t('ac.notForSub')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">{t('ac.start')}</a>
                <a href="#levels" className="btn btn-secondary btn-lg">{t('ac.check')}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
