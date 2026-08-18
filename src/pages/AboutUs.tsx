import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const visionPoints = [
  { title: 'Partners in your journey', desc: 'We work closely with every client — collaboration is how great results happen.' },
  { title: 'Sustainable growth', desc: 'We focus on long-term financial health rather than short-term gains.' },
  { title: 'Control over your future', desc: 'Empowering businesses and traders with tailored, data-driven strategies.' },
  { title: 'Always evolving', desc: 'Staying at the forefront of industry changes as the financial world continues to move.' },
];

export default function AboutUs() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us — Our Mission & Vision | Tradvio AI</title>
        <meta name="description" content="At Tradvio AI, we're on a mission to make advanced artificial intelligence practical, accessible, and transformative for traders and businesses." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/about-us/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-8">
                About <span className="text-accent">Us</span>
              </h1>
              <p className="text-lg text-muted-dark leading-relaxed max-w-2xl mx-auto mb-10">
                At Tradvio AI, we&rsquo;re on a mission to make advanced artificial intelligence practical, accessible, and transformative. Trading is complex, data-heavy, and unforgiving of emotion — so we built a platform that gives every trader the analytical power once reserved for institutional desks.
              </p>
            </div>

            {/* Feature banner */}
            <div className="bg-navy border border-border rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
              <div className="bg-medium-navy border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                </div>
                <span className="text-[0.7rem] font-semibold text-ink-soft uppercase tracking-wider">Tradvio AI</span>
                <span className="text-[0.6rem] text-success font-bold">● EST. 2026</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-px bg-border">
                {[
                  { value: '100,000+', label: 'Traders worldwide' },
                  { value: '50+', label: 'Countries supported' },
                  { value: '7', label: 'Asset classes covered' },
                ].map((s) => (
                  <div key={s.label} className="bg-deep py-8 px-4 text-center">
                    <div className="text-3xl font-bold text-accent">{s.value}</div>
                    <div className="text-xs text-ink-soft mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ OUR VISION ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Our Vision</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                A future where AI<br />
                <span className="text-ink-soft font-light italic">empowers every decision.</span>
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto leading-relaxed">
                We imagine a world where artificial intelligence empowers individuals and businesses — not by taking control, but by making informed decisions possible for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {visionPoints.map((v) => (
                <div key={v.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ JOIN US ON THE JOURNEY ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Our Story</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Join us on<br />
                <span className="text-ink-soft font-light italic">the journey.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-dark leading-relaxed text-lg">
                Tradvio AI was founded by a team of technology innovators, data scientists, and strategic thinkers who shared a frustration: brilliant trading ideas were failing in live markets — not because the ideas were wrong, but because the tools were. Charts were fragmented, signals were slow, and risk management was an afterthought.
              </p>

              {/* Core belief quote */}
              <div className="bg-navy border border-border rounded-2xl p-8 text-center relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                <svg className="w-8 h-8 text-accent/40 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p className="text-xl md:text-2xl font-bold text-ink leading-relaxed">
                  &ldquo;AI should amplify human potential — <span className="text-accent">not replace it</span>.&rdquo;
                </p>
                <p className="text-sm text-ink-soft mt-4">— The core belief behind everything we build</p>
              </div>

              <p className="text-muted-dark leading-relaxed text-lg">
                Today, our platform blends state-of-the-art machine learning with real-world trading insights. Whether you&rsquo;re exploring AI for the first time or scaling a serious initiative, Tradvio AI meets you where you are — and grows with you.
              </p>

              <p className="text-center text-xl font-bold text-ink pt-4">
                Let&rsquo;s build the future together — <span className="text-accent">smarter, faster, and better.</span>
              </p>

              <div className="flex gap-4 justify-center flex-wrap pt-2">
                <a href="/get-started/" className="btn btn-primary btn-lg">Start Free</a>
                <a href="/contact-us-tradvioai-digital-trading/" className="btn btn-secondary btn-lg">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
