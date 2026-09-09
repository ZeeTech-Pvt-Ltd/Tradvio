import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const sections: { num: string; title: string; body?: string; bullets?: string[] }[] = [
  {
    num: '1',
    title: 'ts.s1t',
    body: 'ts.s1b',
  },
  {
    num: '2',
    title: 'ts.s2t',
    bullets: ['ts.s2b1', 'ts.s2b2', 'ts.s2b3'],
  },
  {
    num: '3',
    title: 'ts.s3t',
    body: 'ts.s3b',
    bullets: ['ts.s3b1', 'ts.s3b2', 'ts.s3b3', 'ts.s3b4'],
  },
  {
    num: '4',
    title: 'ts.s4t',
    body: 'ts.s4b',
    bullets: ['ts.s4b1', 'ts.s4b2', 'ts.s4b3'],
  },
  {
    num: '5',
    title: 'ts.s5t',
    body: 'ts.s5b',
  },
  {
    num: '6',
    title: 'ts.s6t',
    bullets: ['ts.s6b1', 'ts.s6b2', 'ts.s6b3'],
  },
  {
    num: '7',
    title: 'ts.s7t',
    body: 'ts.s7b',
  },
  {
    num: '8',
    title: 'ts.s8t',
    body: 'ts.s8b',
  },
  {
    num: '9',
    title: 'ts.s9t',
    body: 'ts.s9b',
  },
  {
    num: '10',
    title: 'ts.s10t',
    body: 'ts.s10b',
  },
];

export default function TermsOfService() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.terms')}</title>
        <meta name="description" content="Read the Tradvio AI terms and conditions - acceptance of terms, risk disclaimer, limitation of liability, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/terms-of-service/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              {t('ts.hero1')} <span className="text-accent">{t('ts.hero2')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              {t('ts.sub')}
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
                {t('ts.updated')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
