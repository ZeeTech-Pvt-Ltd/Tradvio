import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export default function ContactUs() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact Us — We Value Communication & Transparency | Tradvio AI</title>
        <meta name="description" content="Questions about the platform, technical assistance, or collaboration opportunities? Get in touch with Tradvio AI — we promise a quick response." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/contact-us-tradvioai-digital-trading/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-24 bg-deep overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed max-w-2xl mx-auto">
              We value communication and transparency. Whether you have questions about the
              platform, need technical assistance, or want to explore a collaboration — we&rsquo;re
              here to help.
            </p>
          </div>
        </section>

        {/* ═══════════ GET IN TOUCH + FORM ═══════════ */}
        <section className="py-16 md:py-20 bg-deep">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — copy */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Get in Touch</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
                  Reach out using the<br />
                  <span className="text-ink-soft font-light italic">contact form.</span>
                </h2>
                <p className="text-muted-dark leading-relaxed mb-6">
                  Fill out the form with your details and message, and our team will get back to
                  you as quickly as possible.
                </p>

                {/* Live support */}
                <div className="bg-navy border border-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm mb-0.5">Need immediate help?</div>
                    <a href="#replain-link" className="text-sm text-accent hover:text-accent-hover font-semibold">Click Here to Live Support</a>
                  </div>
                </div>

                {/* Stay connected */}
                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Stay Connected</div>
                  <p className="text-muted-dark leading-relaxed">
                    Your feedback helps us improve the platform. Whether it&rsquo;s a suggestion,
                    a feature request, or a concern — we want to hear it. Thank you for choosing
                    Tradvio AI.
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div>
                <LeadForm
                  formName="contact_us"
                  title="Explore Trading Opportunities"
                  subtitle="Register now and our team will be in touch"
                  ctaText="Register Now"
                  sourcePage="/contact-us-tradvioai-digital-trading/"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
