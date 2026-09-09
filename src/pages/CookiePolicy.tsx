import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const sections: { num: string; title: string; body?: string; bullets?: string[] }[] = [
  {
    num: '1',
    title: 'cp.s1t',
    body: 'cp.s1b',
  },
  {
    num: '2',
    title: 'cp.s2t',
    bullets: ['cp.s2b1', 'cp.s2b2', 'cp.s2b3', 'cp.s2b4'],
  },
  {
    num: '3',
    title: 'cp.s3t',
    body: 'cp.s3b',
  },
  {
    num: '4',
    title: 'cp.s4t',
    body: 'cp.s4b',
  },
  {
    num: '5',
    title: 'cp.s5t',
    body: 'cp.s5b',
  },
  {
    num: '6',
    title: 'cp.s6t',
    body: 'cp.s6b',
  },
  {
    num: '7',
    title: 'cp.s7t',
    body: 'cp.s7b',
  },
  {
    num: '8',
    title: 'cp.s8t',
    body: 'cp.s8b',
  },
  {
    num: '9',
    title: 'cp.s9t',
    body: 'cp.s9b',
  },
];

export default function CookiePolicy() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.cookies')}</title>
        <meta name="description" content="Read the Tradvio AI cookie policy - what cookies are, how we use them, and how to manage your preferences." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/cookie-policy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              {t('cp.hero1')} <span className="text-accent">{t('cp.hero2')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              {t('cp.sub')}
            </p>
          </div>
        </section>

        {/* ═══════════ SECTIONS ═══════════ */}
        <section className="py-8 pb-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.num}>
                  <h2 className="text-lg font-bold text-ink mb-2">
                    <span className="font-mono text-accent mr-3">{s.num}</span>
                    {t(s.title)}
                  </h2>
                  {s.body && <p className="text-[15px] text-muted-dark leading-relaxed mb-2">{t(s.body)}</p>}
                  {s.bullets && (
                    <ul className="space-y-2 pl-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-[15px] text-muted-dark leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {t(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <p className="text-xs text-ink-soft text-center">
                {t('cp.updated')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
