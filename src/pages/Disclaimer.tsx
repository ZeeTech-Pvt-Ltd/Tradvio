import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. No Financial Advice',
    body: 'All content on this website — including articles, videos, analysis, charts, indicators, signals, tools, and educational materials — is provided for general informational purposes only. Nothing on this site constitutes financial, investment, legal, tax, or professional advice, and nothing should be read as a recommendation or solicitation to trade any financial instrument.',
  },
  {
    title: '2. Risk Acknowledgment',
    body: 'Trading in foreign exchange, contracts for difference (CFDs), cryptocurrencies, stocks, indices, and derivatives involves substantial risk and may not be suitable for many people. Market conditions change rapidly, losses can exceed initial investments, and past performance does not guarantee future results. You should carefully consider your objectives, experience, and risk appetite before trading.',
  },
  {
    title: '3. No Liability',
    body: 'Tradvio AI makes no warranties regarding the accuracy or reliability of any content on this site.',
    bullets: [
      'Tradvio AI and its owners, employees, contractors, officers, and partners are not liable for any losses arising from the use of this site.',
      'Users accept full responsibility for their own trading decisions and outcomes.',
    ],
  },
  {
    title: '4. Independent Verification',
    body: 'You are responsible for verifying any information before acting on it. Where appropriate, consult a licensed financial advisor, tax professional, or legal expert before making trading or investment decisions.',
  },
  {
    title: '5. No Guarantees',
    body: 'We do not guarantee profits, data accuracy, completeness, or uninterrupted access to the site. Technical issues, errors, omissions, delays, or outdated information may occur.',
  },
  {
    title: '6. External Links',
    body: 'Links to third-party websites are provided for convenience only. Tradvio AI does not control, endorse, or take responsibility for the content, accuracy, security, or practices of any external site.',
  },
  {
    title: '7. Your Responsibility',
    body: 'By using this site, you acknowledge that all investment decisions are made at your own risk and you expressly release Tradvio AI from liability for any losses or damages arising from your use of the information provided.',
  },
];

export default function Disclaimer() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Disclaimer | Tradvio AI</title>
        <meta name="description" content="The information provided by Tradvio AI is for general informational and educational purposes only. Read our full disclaimer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/disclaimer/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              The information provided by Tradvio AI and its affiliates is for general
              informational and educational purposes only.
            </p>
          </div>
        </section>

        {/* ═══════════ SECTIONS ═══════════ */}
        <section className="py-8 pb-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-ink mb-2">
                    <span className="font-mono text-accent mr-3">{s.title.split('.')[0]}</span>
                    {s.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  <p className="text-[15px] text-muted-dark leading-relaxed mb-2">{s.body}</p>
                  {s.bullets && (
                    <ul className="space-y-2 pl-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-[15px] text-muted-dark leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <p className="text-xs text-ink-soft text-center">
                Updated: August 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
