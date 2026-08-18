import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'Welcome to Tradvio AI. By accessing this site, you confirm that you have read, understood, and agreed to be bound by these terms and our Privacy Policy. These terms apply to all visitors and users. If you do not agree, please stop using the site immediately.',
  },
  {
    title: '2. Use of the Website',
    bullets: [
      'You must be at least 18 years old, or the age of majority in your jurisdiction.',
      'You agree to use the site lawfully and in compliance with all applicable laws.',
      'You must not take any action that could damage, disable, or impair the website.',
    ],
  },
  {
    title: '3. Risk Disclaimer',
    body: 'Trading in financial markets involves significant risk.',
    bullets: [
      'Content on this site is informational and educational only — not financial or investment advice.',
      'We make no guarantee of profits or specific outcomes.',
      'You are solely responsible for your own trading decisions.',
      'We recommend consulting a licensed financial advisor before investing.',
    ],
  },
  {
    title: '4. Limitation of Liability',
    body: 'To the fullest extent permitted by law:',
    bullets: [
      'Tradvio AI is not liable for direct, indirect, incidental, or consequential damages arising from your use of the site.',
      'We are not responsible for errors, interruptions, or inaccuracies in content.',
      'Your sole remedy is to stop using the website.',
    ],
  },
  {
    title: '5. Third-Party Links',
    body: 'Our site may link to external websites. Tradvio AI does not control and is not responsible for their content or policies — please review those sites’ own terms before using them.',
  },
  {
    title: '6. Account Responsibility',
    bullets: [
      'You must maintain the confidentiality of your login credentials.',
      'You accept responsibility for all activity on your account.',
      'We reserve the right to terminate accounts or deny access at our discretion.',
    ],
  },
  {
    title: '7. Termination',
    body: 'Access may be suspended or terminated without prior notice for violating these terms or engaging in unlawful or fraudulent activity.',
  },
  {
    title: '8. Changes to the Terms',
    body: 'We may revise these terms at any time. Changes take effect immediately upon posting on this page. Continued use of the site constitutes acceptance of the updated terms.',
  },
  {
    title: '9. Governing Law',
    body: 'These terms are governed by the laws of the jurisdiction where Tradvio AI operates, and any disputes shall be submitted to the exclusive courts of that jurisdiction.',
  },
  {
    title: '10. Contact Us',
    body: 'Questions about these terms? Reach us at support@tradvioai.com or via tradvioai.com.',
  },
];

export default function TermsOfService() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tradvio AI</title>
        <meta name="description" content="Read the Tradvio AI terms and conditions — acceptance of terms, risk disclaimer, limitation of liability, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/terms-of-service/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Terms &amp; <span className="text-accent">Conditions</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              By accessing this site, you agree to these terms. If you do not agree,
              please stop using the site immediately.
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
                  {s.body && <p className="text-[15px] text-muted-dark leading-relaxed mb-2">{s.body}</p>}
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
                Last updated: August 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
