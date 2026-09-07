import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const sections: { num: string; title: string; body?: string; bullets?: string[] }[] = [
  {
    num: '1',
    title: 'pp.s1t',
    body: 'pp.s1b',
  },
  {
    num: '2',
    title: 'pp.s2t',
    body: 'pp.s2b',
  },
  {
    num: '3',
    title: 'pp.s3t',
    bullets: ['pp.s3b1', 'pp.s3b2', 'pp.s3b3', 'pp.s3b4', 'pp.s3b5'],
  },
  {
    num: '4',
    title: 'pp.s4t',
    body: 'pp.s4b',
  },
  {
    num: '5',
    title: 'pp.s5t',
    body: 'pp.s5b',
  },
  {
    num: '6',
    title: 'pp.s6t',
    body: 'pp.s6b',
    bullets: ['pp.s6b1', 'pp.s6b2', 'pp.s6b3'],
  },
  {
    num: '7',
    title: 'pp.s7t',
    bullets: ['pp.s7b1', 'pp.s7b2', 'pp.s7b3'],
    body: 'pp.s7b',
  },
  {
    num: '8',
    title: 'pp.s8t',
    body: 'pp.s8b',
  },
  {
    num: '9',
    title: 'pp.s9t',
    body: 'pp.s9b',
  },
  {
    num: '10',
    title: 'pp.s10t',
    body: 'pp.s10b',
  },
  {
    num: '11',
    title: 'pp.s11t',
    body: 'pp.s11b',
  },
];

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.privacy')}</title>
        <meta name="description" content="Read the Tradvio AI privacy policy — how we collect, use, disclose, and protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/privacy-policy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              {t('pp.hero1')} <span className="text-accent">{t('pp.hero2')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              {t('pp.sub')}
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
                {t('pp.effective')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
