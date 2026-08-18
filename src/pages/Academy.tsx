import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const levels = [
  { level: 'Foundations', for: 'Candles and stop-losses still feel confusing', time: '9 lessons · ~70 min', featured: true },
  { level: 'Patterns', for: 'You spot setups but call them too early', time: '12 lessons · ~2 hrs', featured: false },
  { level: 'The Edge', for: 'Your calls are fine — your risk sizing isn’t', time: '8 lessons · ~90 min', featured: false },
];

const learnItems = [
  { text: 'Read structure, not colour — support, resistance, trend, timeframes', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { text: 'The big six patterns — head & shoulders, flags, wedges, double tops, triangles, breakouts', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-7 4 14 2-9 2 4h6"/></svg> },
  { text: 'Failed patterns — the setups that look textbook and still lose (nobody else teaches this)', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { text: 'Risk maths — position size, R-multiples, drawdown recovery', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M8 6h8M8 12h8M8 18h5"/><path d="M4 4l16 16"/></svg> },
  { text: 'AI-assisted analysis — how to read a machine trade plan and when to ignore it', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M8 15c1.2 1.2 2.8 1.2 4 0s2.8-1.2 4 0"/></svg> },
];

const lessonSteps = [
  { step: '1', title: 'Watch', desc: '6–9 minutes, one idea per lesson' },
  { step: '2', title: 'Mark', desc: 'You draw the setup on a real historical chart' },
  { step: '3', title: 'Compare', desc: 'See what the price did next, and what our model saw at that same candle' },
  { step: '4', title: 'Save', desc: 'Good setups go into your personal pattern library' },
];

const whyFinish = [
  { text: 'Free to start — Foundations is open, no card', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { text: 'Built on tested data — if a pattern’s win rate is weak, the lesson says so', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { text: 'Losing trades included — on purpose', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  { text: 'Mobile-friendly — one lesson per coffee break', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
  { text: 'Connected — your saved setups and journal carry into the main dashboard', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> },
];

export default function Academy() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AI Trading Academy — Learn the Patterns Our AI Trades | Tradvio AI</title>
        <meta name="description" content="Learn to read a chart the way our AI reads it. Short lessons, live charts, zero fluff. Free to start — Foundations is open, no card." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/academy/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.2),transparent_70%)] bottom-0 -left-[100px]" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
                Learn the patterns<br />
                <span className="text-accent">our AI trades.</span>
              </h1>
              <p className="text-lg text-muted-dark leading-relaxed max-w-[600px] mx-auto mb-8">
                Learn to read a chart the way our AI reads it. Short lessons, live charts, zero fluff.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">Start free</a>
                <a href="#levels" className="btn btn-secondary btn-lg">Take the placement check</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PICK YOUR LEVEL ═══════════ */}
        <section id="levels" className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Pick your level</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Three levels.<br />
                <span className="text-ink-soft font-light italic">One skill.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {levels.map((l) => (
                <div
                  key={l.level}
                  className={cn(
                    'rounded-2xl p-6 flex flex-col text-center',
                    l.featured
                      ? 'bg-deep border border-accent/40 shadow-[0_0_40px_rgba(220,38,38,0.25)]'
                      : 'bg-deep border border-border hover:border-accent/30 transition-colors'
                  )}
                >
                  {l.featured && (
                    <span className="mx-auto mb-3 bg-accent text-white text-[0.65rem] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full">
                      Start here
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-ink mb-3">{l.level}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed mb-4 flex-1">{l.for}</p>
                  <div className="text-xs font-mono text-accent font-semibold">{l.time}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-8">
              Not sure? Take the <a href="/get-started/" className="text-accent hover:text-accent-hover font-semibold">2-minute placement check</a>.
            </p>
          </div>
        </section>

        {/* ═══════════ WHAT YOU'LL LEARN ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Curriculum</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                What you&rsquo;ll<br />
                <span className="text-ink-soft font-light italic">actually learn.</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {learnItems.map((item) => (
                <div key={item.text} className="bg-navy border border-border rounded-xl p-5 flex items-start gap-4 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <p className="text-sm text-ink leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW EACH LESSON WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Lesson format</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                How each lesson<br />
                <span className="text-ink-soft font-light italic">works.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {lessonSteps.map((s) => (
                <div key={s.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-10 max-w-2xl mx-auto">
              No quizzes. You either see it on the chart or you don&rsquo;t yet.
            </p>
          </div>
        </section>

        {/* ═══════════ WHY TRADERS FINISH ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why it works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Why traders finish<br />
                <span className="text-ink-soft font-light italic">this one.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyFinish.map((w) => (
                <div key={w.text} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">{w.icon}</div>
                  <p className="text-sm text-ink leading-relaxed">{w.text}</p>
                </div>
              ))}
              {/* Filler for clean grid */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ═══════════ WHO IT'S NOT FOR ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-deep border border-border rounded-2xl p-8 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft mb-3">Who it&rsquo;s not for</div>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.2] mb-4">
                Anyone looking for signals to copy.
              </h2>
              <p className="text-muted-dark leading-relaxed mb-6">
                We teach you to make the call — the AI is a second opinion, not a boss.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/get-started/" className="btn btn-primary btn-lg">Start free</a>
                <a href="#levels" className="btn btn-secondary btn-lg">Take the placement check</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
