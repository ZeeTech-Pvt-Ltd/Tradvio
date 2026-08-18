import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const highlights = [
  { title: 'Instant analysis', desc: 'Results in seconds', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'All markets', desc: 'Forex, crypto, stocks', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/></svg> },
  { title: 'S/R levels', desc: 'Key zones identified', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M3 12h18M3 19h18"/><circle cx="7" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/></svg> },
  { title: 'Risk-aware', desc: 'Clear limitations', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

const steps = [
  { step: '01', title: 'Upload a screenshot', desc: 'Take a screenshot of any chart from your trading platform and upload it. PNG, JPG, JPEG, or WEBP — up to 10 MB.' },
  { step: '02', title: 'AI analyses it', desc: 'The AI reads the chart — price action, trend direction, support/resistance levels, and potential setups.' },
  { step: '03', title: 'Get your report', desc: 'Receive a structured report with key levels, bullish and bearish scenarios, invalidation levels, risk notes, and a confidence rating.' },
];

const whyUse = [
  { title: 'Save time', desc: 'What takes an hour by hand takes seconds with the analyser. Upload and get a full technical breakdown instantly.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'Clear insights', desc: 'No vague commentary. Every report gives you concrete levels, scenarios, and invalidation points you can act on.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0012 2z"/></svg> },
  { title: 'Learn as you go', desc: 'Each report explains what the AI sees and why it matters — building your chart-reading skills over time.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { title: 'Risk-aware analysis', desc: 'Every report includes invalidation levels and confidence ratings. No false certainty — just clear, honest analysis.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

const features = [
  { title: 'Fast analysis', desc: 'Chart breakdown in seconds, not hours.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'Trend detection', desc: 'Identifies direction and momentum shifts.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { title: 'S/R mapping', desc: 'Key support and resistance zones found.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M3 12h18M3 19h18"/><circle cx="7" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/></svg> },
  { title: 'Trade scenarios', desc: 'Entry, stop loss, targets, and invalidation.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { title: 'Cross-market support', desc: 'Forex, crypto, stocks, indices, and more.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/></svg> },
  { title: 'Structured reports', desc: 'Consistent format — levels, scenarios, risk notes.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
];

export default function AIChartAnalyser() {
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
        <title>AI Chart Analyser — Instant Technical Analysis | Tradvio AI</title>
        <meta name="description" content="Upload any trading chart and get instant AI analysis — trend direction, support & resistance levels, trade scenarios, and confidence ratings. Free to start." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/ai-chart-analyser/" />
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
              AI Trading Chart Analyzer for<br />
              <span className="text-accent">Better Trading Decisions</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
              Upload any trading chart and get an instant breakdown — price action, trend direction, support and resistance levels, and potential setups with confidence scoring.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#analyzer" className="btn btn-primary btn-lg">Analyze Your Chart</a>
              <a href="/get-started/" className="btn btn-secondary btn-lg">Create Free Account</a>
            </div>
            <p className="text-xs text-ink-soft mt-5">No guaranteed returns. Trading involves risk.</p>
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
                    <div className="font-semibold text-ink text-sm">{h.title}</div>
                    <div className="text-xs text-ink-soft">{h.desc}</div>
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
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Analyze a Chart</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Upload. Configure.<br />
                <span className="text-ink-soft font-light italic">Get your analysis.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
              {/* Form */}
              <div className="bg-navy border border-border rounded-2xl p-6 md:p-8">
                {/* Step 1: Upload */}
                <div className="mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">1</span>
                    <span className="font-semibold text-ink">Upload your chart</span>
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
                        Analysing chart image…
                      </div>
                    ) : previewUrl ? (
                      <div>
                        <img src={previewUrl} alt={fileName || 'Uploaded chart'} className="max-h-64 mx-auto rounded-lg border border-border" />
                        <div className="text-success font-semibold mt-3 mb-1">✓ {fileName}</div>
                        <div className="text-xs text-ink-soft">Click to replace</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl mb-3">📊</div>
                        <div className="font-semibold text-ink">Click to browse or drag and drop</div>
                        <div className="text-xs text-ink-soft mt-1">PNG, JPG, JPEG, WEBP — max 10 MB</div>
                      </div>
                    )}
                  </label>
                </div>

                {/* Step 2: Configure */}
                <div className="mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">2</span>
                    <span className="font-semibold text-ink">Configure analysis</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">Market</label>
                      <select value={market} onChange={(e) => setMarket(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks', 'ETFs'].map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">Timeframe</label>
                      <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {['1-Minute', '5-Minute', '15-Minute', '1-Hour', '4-Hour', 'Daily', 'Weekly'].map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">Focus</label>
                      <select value={focus} onChange={(e) => setFocus(e.target.value)} className="w-full bg-deep border border-border rounded-lg px-3 py-2.5 text-sm text-ink focus:border-accent outline-none cursor-pointer">
                        {['Market Structure', 'Trend Analysis', 'Support & Resistance', 'Momentum', 'Comprehensive'].map((f) => <option key={f}>{f}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Submit */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">3</span>
                    <span className="font-semibold text-ink">Submit</span>
                  </div>
                  <a
                    href="/get-started/"
                    className={cn(
                      'btn btn-primary btn-lg w-full',
                      !fileName && 'opacity-50 pointer-events-none'
                    )}
                  >
                    Submit for Deep Analysis →
                  </a>
                  {!fileName && <p className="text-xs text-ink-soft text-center mt-2">Upload a chart to continue</p>}
                </div>
              </div>

              {/* Sample output */}
              <div>
                <div className="bg-navy border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono text-xs font-bold">EU</div>
                      <div>
                        <div className="font-semibold text-ink">EUR/USD — Daily</div>
                        <div className="text-xs text-ink-soft">Comprehensive analysis</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-warning/10 text-warning border border-warning/30">
                      Moderate confidence
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">Market Structure</div>
                      <p className="text-sm text-ink leading-relaxed">
                        <span className="text-success font-semibold">Bullish structure</span> on the daily — higher highs and higher lows intact. Price consolidating above the 50-day moving average.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-deep border border-border rounded-lg p-4">
                        <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">Key Support</div>
                        <div className="font-mono text-lg font-bold text-success">1.0780</div>
                      </div>
                      <div className="bg-deep border border-border rounded-lg p-4">
                        <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">Key Resistance</div>
                        <div className="font-mono text-lg font-bold text-danger">1.0920</div>
                      </div>
                    </div>

                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">Bullish Scenario</div>
                      <p className="text-sm text-ink-soft leading-relaxed">Break above 1.0920 opens a run toward 1.1000. Invalidation: daily close below 1.0840.</p>
                    </div>

                    <div className="bg-deep border border-border rounded-lg p-4">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft font-bold mb-2">Bearish Scenario</div>
                      <p className="text-sm text-ink-soft leading-relaxed">Rejection at 1.0920 risks a slide back to 1.0780. Below that, structure shifts bearish toward 1.0700.</p>
                    </div>

                    <div className="bg-warning/5 border border-warning/20 rounded-lg p-3.5">
                      <div className="text-[0.62rem] uppercase tracking-[0.12em] text-warning font-bold mb-1.5">Risk Considerations</div>
                      <p className="text-xs text-ink-soft leading-relaxed">Tight range — false breakouts possible. Position sizing matters; consider waiting for a daily close confirmation.</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-ink-soft mt-4 text-center">
                  ⚠ <span className="font-semibold text-warning">Sample Output</span> — demonstration only. Actual results vary. AI analysis can be incomplete or incorrect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Three steps to<br />
                <span className="text-ink-soft font-light italic">clearer charts.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              <div className="absolute top-10 left-[15%] right-[15%] h-px bg-border hidden sm:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY USE ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why use this tool</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Your charts,<br />
                <span className="text-ink-soft font-light italic">decoded in seconds.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUse.map((w) => (
                <div key={w.title} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    {w.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Features</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Everything in<br />
                <span className="text-ink-soft font-light italic">one analysis.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
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
              Ready to analyze your<br />
              <span className="text-accent">next trading chart?</span>
            </h2>
            <div className="flex gap-4 justify-center flex-wrap mb-6">
              <a href="#analyzer" className="btn btn-primary btn-lg">Analyze Chart Now</a>
              <a href="/get-started/" className="btn btn-secondary btn-lg">Create Free Account</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
