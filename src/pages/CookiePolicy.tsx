import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. What Are Cookies',
    body: 'Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how you use it, and deliver a smoother experience on your next visit.',
  },
  {
    title: '2. How We Use Cookies',
    bullets: [
      'Essential cookies — keep the site working, including login sessions and security features.',
      'Preference cookies — remember your settings, such as language and display choices.',
      'Analytics cookies — help us understand which pages are visited and how users move through the site, so we can improve it.',
      'Marketing cookies — used to show relevant offers and measure campaign performance.',
    ],
  },
  {
    title: '3. Third-Party Cookies',
    body: 'Some cookies are set by third-party services we use, such as analytics and chat tools. These providers have their own cookie policies, which we encourage you to review. We do not control those cookies.',
  },
  {
    title: '4. Managing Cookies',
    body: 'You can control and delete cookies through your browser settings at any time. You may also block cookies entirely — but please note that some parts of the site may not function correctly without them.',
  },
  {
    title: '5. Consent',
    body: 'When you first visit our site, we ask for your consent to place non-essential cookies. You can change or withdraw your consent at any time through your browser settings or by clearing stored cookies.',
  },
  {
    title: '6. Data Collected by Cookies',
    body: 'Cookies may collect information such as your IP address, browser type, device type, pages visited, and time spent on the site. This data is used in aggregate to improve our services and is never sold to third parties.',
  },
  {
    title: '7. Retention',
    body: 'Cookie retention depends on the type: session cookies expire when you close your browser, while persistent cookies remain until they expire or you delete them. Analytics data is kept only as long as needed for our legitimate business purposes.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this cookie policy from time to time. Changes will be posted on this page with a revised date. Continued use of the site after changes are posted constitutes acceptance.',
  },
  {
    title: '9. Contact Us',
    body: 'Questions about cookies or this policy? Reach us at support@tradvioai.com.',
  },
];

export default function CookiePolicy() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Tradvio AI</title>
        <meta name="description" content="Read the Tradvio AI cookie policy — what cookies are, how we use them, and how to manage your preferences." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/cookie-policy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Cookie <span className="text-accent">Policy</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              What cookies are, how we use them, and how you can manage your preferences.
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
