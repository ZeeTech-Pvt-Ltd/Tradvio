import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const faqItems = [
  { q: 'at.fq1', a: 'at.fa1' },
  { q: 'at.fq2', a: 'at.fa2' },
  { q: 'at.fq3', a: 'at.fa3' },
  { q: 'at.fq4', a: 'at.fa4' },
  { q: 'at.fq5', a: 'at.fa5' },
  { q: 'at.fq6', a: 'at.fa6' },
];

const steps = [
  { step: '01', title: 'at.sp1t', desc: 'at.sp1d' },
  { step: '02', title: 'at.sp2t', desc: 'at.sp2d' },
  { step: '03', title: 'at.sp3t', desc: 'at.sp3d' },
];

const whyChoose = [
  { title: 'at.w1t', desc: 'at.w1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'at.w2t', desc: 'at.w2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'at.w3t', desc: 'at.w3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'at.w4t', desc: 'at.w4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
];

const timeframes = [
  { tf: '1–5 min', name: 'at.tfn1', desc: 'at.tfd1', tag: 'at.tft1' },
  { tf: '5–30 min', name: 'at.tfn2', desc: 'at.tfd2', tag: 'at.tft2' },
  { tf: '1–4 hr', name: 'at.tfn3', desc: 'at.tfd3', tag: 'at.tft3' },
  { tf: 'Daily+', name: 'at.tfn4', desc: 'at.tfd4', tag: 'at.tft4' },
];

const stats = [
  { value: '+23%', label: 'at.st1' },
  { value: '50ms', label: 'at.st2' },
  { value: '94%', label: 'at.st3' },
  { value: '2–3 hrs', label: 'at.st4' },
];

const checkItems = ['at.check1', 'at.check2', 'at.check3', 'at.check4'];

const statusRows = [
  { label: 'at.r1l', status: 'at.r1s', detail: 'at.r1d' },
  { label: 'at.r2l', status: 'at.r2s', detail: 'at.r2d' },
  { label: 'at.r3l', status: 'at.r3s', detail: 'at.r3d' },
  { label: 'at.r4l', status: 'at.r4s', detail: 'at.r4d' },
];

export default function AITradingAssistant() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.assistant')}</title>
        <meta name="description" content="Your AI trading assistant for smarter decisions. Automatic chart analysis, AI-powered signals, risk management, and 24/7 monitoring. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/ai-trading-assistant/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left — copy */}
              <div>
                <h1 className="text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                  {t('at.h1a')}<br />
                  <span className="text-accent">{t('at.h1b')}</span>
                </h1>
                <p className="text-lg text-muted-dark leading-relaxed mb-8 max-w-[500px]">
                  {t('at.heroBody')}
                </p>
                <div className="flex gap-3 flex-wrap mb-8">
                  <a href="/get-started/" className="btn btn-primary btn-lg">{t('at.cta1')}</a>
                  <a href="#how-it-works" className="btn btn-secondary btn-lg">{t('at.cta2')}</a>
                </div>

                {/* Trust checklist */}
                <div className="grid grid-cols-2 gap-2.5 max-w-[440px]">
                  {checkItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                      <svg className="w-4 h-4 flex-shrink-0 text-success" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                      {t(item)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — AI status card */}
              <div className="bg-navy border border-border rounded-2xl p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-ink">{t('at.cardTitle')}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-success">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                    </span>
                    {t('at.active')}
                  </span>
                </div>

                <div className="space-y-3">
                  {statusRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between bg-deep border border-border rounded-lg px-4 py-3">
                      <div>
                        <div className="text-sm font-medium text-ink">{t(row.label)}</div>
                        <div className="text-[0.65rem] text-ink-soft mt-0.5">{t(row.detail)}</div>
                      </div>
                      <span className="text-xs font-bold text-success">✓ {t(row.status)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{t('at.rec')}</span>
                    <span className="text-[0.65rem] text-ink-soft">{t('at.recTime')}</span>
                  </div>
                  <p className="text-sm text-ink">
                    <span className="font-mono font-bold">BTC/USD</span> — {t('at.recText')} <span className="text-accent font-bold">{t('at.recConf')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-16 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy py-8 px-6 text-center">
                  <div className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-accent leading-none">{s.value}</div>
                  <div className="text-xs text-ink-soft mt-2">{t(s.label)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('at.hiwEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('at.hiw1')}<br />
                <span className="text-ink-soft font-light italic">{t('at.hiw2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              <div className="absolute top-10 left-[15%] right-[15%] h-px bg-border hidden sm:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t(s.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(s.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CHOOSE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('at.whyEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('at.why1')}<br />
                <span className="text-ink-soft font-light italic">{t('at.why2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">{f.icon}</div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">{t(f.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(f.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TIMEFRAME ANALYSIS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('at.tfEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                {t('at.tf1')}<br />
                <span className="text-ink-soft font-light italic">{t('at.tf2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeframes.map((tf) => (
                <div key={tf.tf} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-accent">{tf.tf}</span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-ink-soft border border-border rounded-full px-2 py-0.5">{t(tf.tag)}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(tf.name)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(tf.desc)}</p>
                </div>
              ))}
            </div>

            {/* Best practice */}
            <div className="mt-10 bg-navy border border-border rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="font-semibold text-ink mb-2">{t('at.bpT')}</h3>
              <p className="text-sm text-muted-dark leading-relaxed">
                {t('at.bpD')}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ AI VS MANUAL ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('at.vmEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('at.vm1')}<br />
                <span className="text-ink-soft font-light italic">{t('at.vm2')}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-deep border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold mb-4">!</div>
                <h3 className="font-semibold mb-2">{t('at.vmP1t')}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{t('at.vmP1d')}</p>
              </div>
              <div className="bg-deep border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold mb-4">!</div>
                <h3 className="font-semibold mb-2">{t('at.vmP2t')}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{t('at.vmP2d')}</p>
              </div>
              <div className="bg-deep border border-accent/30 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">✓</div>
                <h3 className="font-semibold mb-2">{t('at.vmS1t')}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{t('at.vmS1d')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('at.faqEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('at.faq1')}<br />
                <span className="text-ink-soft font-light italic">{t('at.faq2')}</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-navy border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {t(item.q)}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{t(item.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              {t('at.close1')}<br />
              <span className="text-accent">{t('at.close2')}</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              {t('at.closeSub')}
            </p>
            <a href="/get-started/" className="btn btn-primary btn-lg">{t('at.closeCta')}</a>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              {t('at.closeNote')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
