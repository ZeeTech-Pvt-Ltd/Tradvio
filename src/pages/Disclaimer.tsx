import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const sections: { num: string; title: string; body: string; bullets?: string[] }[] = [
  {
    num: '1',
    title: 'ds.s1t',
    body: 'ds.s1b',
  },
  {
    num: '2',
    title: 'ds.s2t',
    body: 'ds.s2b',
  },
  {
    num: '3',
    title: 'ds.s3t',
    body: 'ds.s3b',
    bullets: ['ds.s3b1', 'ds.s3b2'],
  },
  {
    num: '4',
    title: 'ds.s4t',
    body: 'ds.s4b',
  },
  {
    num: '5',
    title: 'ds.s5t',
    body: 'ds.s5b',
  },
  {
    num: '6',
    title: 'ds.s6t',
    body: 'ds.s6b',
  },
  {
    num: '7',
    title: 'ds.s7t',
    body: 'ds.s7b',
  },
];

export default function Disclaimer() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.disclaimer')}</title>
        <meta name="description" content="The information provided by Tradvio AI is for general informational and educational purposes only. Read our full disclaimer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/disclaimer/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              {t('ds.hero')}
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              {t('ds.sub')}
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
                  <p className="text-[15px] text-muted-dark leading-relaxed mb-2">{t(s.body)}</p>
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
                {t('ds.updated')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
