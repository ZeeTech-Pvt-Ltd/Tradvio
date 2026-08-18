import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Introduction',
    body: 'Welcome to Tradvio AI. Your privacy matters to us. This policy explains how we collect, use, disclose, and protect your personal information. By using this site, you agree to the practices described here.',
  },
  {
    title: '2. Information We Collect',
    body: 'We disclose the personal data we request — and the reasons for requesting it — at the point of collection. When you contact us directly, we may receive details such as your name, email address, phone number, and the contents of your message. When you register for an account, we may ask for your name, company name, address, email, and telephone number.',
  },
  {
    title: '3. How We Use Your Information',
    bullets: [
      'Providing and managing our services.',
      'Improving website performance and user experience.',
      'Communicating about your account or inquiries.',
      'Sending updates, offers, or notifications (you can opt out at any time).',
      'Complying with legal obligations and protecting our rights.',
    ],
  },
  {
    title: '4. Cookies and Tracking Technologies',
    body: 'We use cookies to enhance functionality and performance, understand visitor behaviour and preferences, and remember your settings. Disabling cookies may cause parts of the site to malfunction.',
  },
  {
    title: '5. Data Protection and Security',
    body: 'We apply industry-standard security measures to protect your information. However, no online transmission or storage system is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Data Sharing and Disclosure',
    body: 'We do not sell, trade, or rent your personal information. Sharing is limited to:',
    bullets: [
      'Trusted service providers who operate the website on our behalf.',
      'Legal requirements, such as court orders or regulatory demands.',
      'Regulatory or anti-fraud obligations.',
    ],
  },
  {
    title: '7. Your Rights',
    bullets: [
      'Access, correct, or delete your personal information.',
      'Withdraw consent where applicable.',
      'Request a copy of the data we hold about you.',
    ],
    body: 'To exercise any of these rights, email support@tradvioai.com.',
  },
  {
    title: '8. Third-Party Links',
    body: 'Our site may link to external websites. We are not responsible for the privacy practices or content of those sites — review their policies before sharing any data.',
  },
  {
    title: '9. Data Retention',
    body: 'We keep your information only as long as needed to fulfill the purposes in this policy, meet legal obligations, and resolve disputes.',
  },
  {
    title: '10. Changes to This Policy',
    body: 'Updates will be posted on this page with a revised Effective Date. We encourage you to review this policy regularly.',
  },
  {
    title: '11. Contact Us',
    body: 'Questions about this policy? Reach us at support@tradvioai.com or via tradvioai.com.',
  },
];

export default function PrivacyPolicy() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tradvio AI</title>
        <meta name="description" content="Read the Tradvio AI privacy policy — how we collect, use, disclose, and protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/privacy-policy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-16 md:py-20 bg-deep overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed">
              How we collect, use, disclose, and protect your personal information.
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
                Effective Date: August 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
