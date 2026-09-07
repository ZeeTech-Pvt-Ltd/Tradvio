import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const highlights = [
  { title: 'ca.hl1t', desc: 'ca.hl1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'ca.hl2t', desc: 'ca.hl2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/></svg> },
  { title: 'ca.hl3t', desc: 'ca.hl3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M3 12h18M3 19h18"/><circle cx="7" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/></svg> },
  { title: 'ca.hl4t', desc: 'ca.hl4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

const steps = [
  { step: '01', title: 'ca.sp1t', desc: 'ca.sp1d' },
  { step: '02', title: 'ca.sp2t', desc: 'ca.sp2d' },
  { step: '03', title: 'ca.sp3t', desc: 'ca.sp3d' },
];

const whyUse = [
  { title: 'ca.w1t', desc: 'ca.w1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'ca.w2t', desc: 'ca.w2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0012 2z"/></svg> },
  { title: 'ca.w3t', desc: 'ca.w3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { title: 'ca.w4t', desc: 'ca.w4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

const features = [
  { title: 'ca.f1t', desc: 'ca.f1d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'ca.f2t', desc: 'ca.f2d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { title: 'ca.f3t', desc: 'ca.f3d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M3 12h18M3 19h18"/><circle cx="7" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/></svg> },
  { title: 'ca.f4t', desc: 'ca.f4d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { title: 'ca.f5t', desc: 'ca.f5d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/></svg> },
  { title: 'ca.f6t', desc: 'ca.f6d', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
];

const markets = ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks', 'ETFs'];
const timeframes = ['1-Minute', '5-Minute', '15-Minute', '1-Hour', '4-Hour', 'Daily', 'Weekly'];
const focuses = ['Market Structure', 'Trend Analysis', 'Support & Resistance', 'Momentum', 'Comprehensive'];

export default function AIChartAnalyser() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysing, setAnalysing] = useState(false);
  const [market, setMarket] = useState('Forex');
  const [timeframe, setTimeframe] = useState('Daily');
  const [focus, setFocus] = useState('Comprehensive');

  const handleFile = (file: File) => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
    setAnalysing(true);
    setTimeout(() => setAnalysing(false), 1800);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.analyser')}</title>
        <meta name="description" content="Upload any trading chart and get instant AI analysis — trend direction, support & resistance levels, trade scenarios, and confidence ratings. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/ai-chart-analyser/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
              {t('ca.h1a')}<br />
              <span className="text-accent">{t('ca.h1b')}</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
              {t('ca.heroBody')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#analyzer" className="btn btn-primary btn-lg">{t('ca.cta1')}</a>
              <a href="/get-started/" className="btn btn-secondary btn-lg">{t('ca.cta2')}</a>
            </div>
            <p className="text-xs text-ink-soft mt-5">{t('ca.riskNote')}</p>
          </div>
        </section>

        {/* ═══════════ HIGHLIGHTS ═══════════ */}
        <section className="py-16 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">{h.icon}</div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{t(h.title)}</div>
                    <div className="text-xs text-ink-soft">{t(h.desc)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ANALYZER FORM ═══════════ */}
        <section id="analyzer" className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ca.formEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ca.form1')}<br />
                <span className="text-ink-soft font-light italic">{t('ca.form2')}</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
              {/* Form */}
              <div className="bg-navy border border-border rounded-2xl p-6 md:p-8">
                {/* Step 1: Upload */}
                <div className="mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">1</span>
                    <span className="font-semibold text-ink">{t('ca.u1')}</span>
                  </div>
                  <label
                    className="block border-2 border-dashed border-border hover:border-accent/50 rounded-xl p-8 text-center cursor-pointer transition-colors"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }}
                  >
                    <input type="file" accept=".png,.jpg,.jpeg,.webp" className="hidden" onChange={handleUpload} />
                    {analysing ? (
                      <div className="text-accent font-semibold flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        {t('ca.analysing')}
                      </div>
                    ) : previewUrl ? (
                      <div>
                        <img src={previewUrl} alt={fileName || t('ca.uploadedAlt')} className="max-h-64 mx-auto rounded-lg border border-border" />
                        <div className="text-success font-semibold mt-3 mb-1">✓ {fileName}</div>
                        <div className="text-xs text-ink-soft">{t('ca.replace')}</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl mb-3">📊</div>
                        <div className="font-semibold text-ink">{t('ca.browse')}</div>
                        <div className="text-xs text-ink-soft mt-1">{t('ca.fileTypes')}</div>
                      </div>
                    )}
                  </label>
                </div>

                {/* Step 2: Configure */}
                <div className="mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">2</span>
                    <span className="font-semibold text-ink">{t('ca.u2')}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">{t('ca.mktLabel')}</label>
                      <select value={market} onChange={(e) => setMarket(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {markets.map((m) => <option key={m} value={m}>{t('ca.mkt.' + m)}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">{t('ca.tfLabel')}</label>
                      <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {timeframes.map((tf) => <option key={tf} value={tf}>{t('ca.tf.' + tf)}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">{t('ca.fcLabel')}</label>
                      <select value={focus} onChange={(e) => setFocus(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {focuses.map((f) => <option key={f} value={f}>{t('ca.fc.' + f)}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Submit */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">3</span>
                    <span className="font-semibold text-ink">{t('ca.u3')}</span>
                  </div>
                  <a
                    href="/get-started/"
                    className={cn(
                      'btn btn-primary btn-lg w-full',
                      !fileName && 'opacity-50 pointer-events-none'
                    )}
                  >
                    {t('ca.submitBtn')}
                  </a>
                  {!fileName && <p className="text-xs text-ink-soft text-center mt-2">{t('ca.uploadPrompt')}</p>}
                </div>
              </div>

              {/* Sample output */}
              <div>
                <div className="bg-navy border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono text-xs font-bold">EU</div>
                      <div>
                        <div className="font-semibold text-ink">EUR/USD — {t('ca.tf.Daily')}</div>
                        <div className="text-xs text-ink-soft">{t('ca.soType')}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-warning/10 text-warning border border-warning/30">
                      {t('ca.soConf')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">{t('ca.soMs')}</div>
                      <p className="text-sm text-ink leading-relaxed">
                        <span className="text-success font-semibold">{t('ca.soMsBody1')}</span> {t('ca.soMsBody2')}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-deep border border-border rounded-lg p-4">
                        <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">{t('ca.soSup')}</div>
                        <div className="font-mono text-lg font-bold text-success">1.0780</div>
                      </div>
                      <div className="bg-deep border border-border rounded-lg p-4">
                        <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">{t('ca.soRes')}</div>
                        <div className="font-mono text-lg font-bold text-danger">1.0920</div>
                      </div>
                    </div>

                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">{t('ca.soBull')}</div>
                      <p className="text-sm text-ink-soft leading-relaxed">{t('ca.soBullD')}</p>
                    </div>

                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">{t('ca.soBear')}</div>
                      <p className="text-sm text-ink-soft leading-relaxed">{t('ca.soBearD')}</p>
                    </div>

                    <div className="bg-warning/5 border border-warning/20 rounded-lg p-3.5">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-warning font-bold mb-1.5">{t('ca.soRisk')}</div>
                      <p className="text-xs text-ink-soft leading-relaxed">{t('ca.soRiskD')}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-ink-soft mt-4 text-center">
                  ⚠ <span className="font-semibold text-warning">{t('ca.sampleNote1')}</span> — {t('ca.sampleNote2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ca.hiwEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ca.hiw1')}<br />
                <span className="text-ink-soft font-light italic">{t('ca.hiw2')}</span>
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

        {/* ═══════════ WHY USE ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ca.whyEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ca.why1')}<br />
                <span className="text-ink-soft font-light italic">{t('ca.why2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUse.map((w) => (
                <div key={w.title} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    {w.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{t(w.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(w.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">{t('ca.ftEyebrow')}</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                {t('ca.ft1')}<br />
                <span className="text-ink-soft font-light italic">{t('ca.ft2')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{t(f.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(f.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
              {t('ca.close1')}<br />
              <span className="text-accent">{t('ca.close2')}</span>
            </h2>
            <div className="flex gap-4 justify-center flex-wrap mb-6">
              <a href="#analyzer" className="btn btn-primary btn-lg">{t('ca.closeCta1')}</a>
              <a href="/get-started/" className="btn btn-secondary btn-lg">{t('ca.closeCta2')}</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
