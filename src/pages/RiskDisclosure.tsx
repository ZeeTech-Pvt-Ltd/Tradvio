import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const sections: { num: string; title: string; body?: string; bullets?: string[] }[] = [
  {
    num: '1',
    title: 'rd.s1t',
    body: 'rd.s1b',
  },
  {
    num: '2',
    title: 'rd.s2t',
    body: 'rd.s2b',
  },
  {
    num: '3',
    title: 'rd.s3t',
    bullets: ['rd.s3b1', 'rd.s3b2', 'rd.s3b3', 'rd.s3b4'],
  },
  {
    num: '4',
    title: 'rd.s4t',
    body: 'rd.s4b',
  },
  {
    num: '5',
    title: 'rd.s5t',
    body: 'rd.s5b',
  },
  {
    num: '6',
    title: 'rd.s6t',
    body: 'rd.s6b',
  },
  {
    num: '7',
    title: 'rd.s7t',
    body: 'rd.s7b',
  },
  {
    num: '8',
    title: 'rd.s8t',
    bullets: ['rd.s8b1', 'rd.s8b2', 'rd.s8b3', 'rd.s8b4'],
  },
  {
    num: '9',
    title: 'rd.s9t',
    body: 'rd.s9b',
  },
];

export default function RiskDisclosure() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.risk')}</title>
        <meta name="description" content="Trading involves substantial risk. Read the full Tradvio AI risk disclosure before using the platform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/risk-disclosure/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              {t('rd.hero1')} <span className="text-accent">{t('rd.hero2')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              {t('rd.sub')}
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
                {t('rd.updated')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
