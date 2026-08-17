import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const process = [
  { number: '01', title: 'Complete Trade Publication', desc: 'Every bot on our platform has its entire trading record published openly — timestamps, instruments, direction, size, entry and exit prices, plus the final P&L on each position. Updates flow automatically and nothing is cherry-picked. Losses are shown with the same visibility as wins.' },
  { number: '02', title: 'Direct Broker Integration', desc: 'Our bots trade through MetaTrader 5 accounts using the same infrastructure professional desks rely on. There is no middle layer translating signals — every execution lands on the broker account directly, and what you see on our site mirrors exactly what the broker recorded.' },
  { number: '03', title: 'View-Only Account Access', desc: 'Want more than the published data? Any visitor can ask for view-only credentials to any bot\'s live account. These investor-level logins let you open MT5 yourself and walk through the account\'s positions, history, and equity — all without an account on our platform.' },
];

const dataPoints = [
  { title: 'Every single execution', desc: 'The full breakdown of each closed trade — when it opened, when it closed, what it traded, and what it made or lost. Nothing is summarised away.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg> },
  { title: 'Live positions', desc: 'Whatever a bot is holding right now, including unrealised gains and losses, is visible in real time. There is nowhere to hide a losing position.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: 'Account equity over time', desc: 'The equity curve tells the honest story — including the dips. A smooth chart with no drawdowns usually means the data has been polished.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg> },
  { title: 'Risk metrics', desc: 'Drawdowns, win rate, and per-trade exposure are all calculated from the raw records, so you can audit how the numbers were derived.', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg> },
];

const howToVerify = [
  { number: '01', title: 'Choose a bot', desc: 'Pick any bot from the Traders page or Leaderboard — every one of them is open to verification.' },
  { number: '02', title: 'Ask for access', desc: 'Write to verify@tradvio.ai and name the bot you want to check. No signup, no payment, no obligations.' },
  { number: '03', title: 'Get view-only credentials', desc: 'We send back an investor password. It lets you browse trades and equity but can never place orders or touch funds.' },
  { number: '04', title: 'Compare for yourself', desc: 'Sign in to MT5 on desktop or web with those credentials. Go through the account history line by line and compare it against our published records — everything should line up.' },
];

const promises = [
  { number: '01', title: 'Losing trades are published too', desc: 'Our records include every outcome — the good sessions and the rough ones. Nothing is delayed, filtered, or quietly removed because it looked bad.' },
  { number: '02', title: 'Real accounts only', desc: 'There are no simulated or demo results on our leaderboards. If a number appears on the site, it came from live execution with actual capital.' },
  { number: '03', title: 'Open positions stay in view', desc: 'You can always see what a bot is currently holding. Drawdowns inside open trades are never hidden to make statistics look better than reality.' },
  { number: '04', title: 'History is locked once written', desc: 'A recorded trade stays recorded. Nobody — including us — can edit or erase it. Even retired bots keep their full public archive.' },
  { number: '05', title: 'Verification is never declined', desc: 'View-only access requests are always honoured. If that policy ever changed, you would be right to walk away from the platform.' },
];

export default function PerformanceVerification() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Performance Verification — Open Records You Can Check Yourself | Tradvio AI</title>
        <meta name="description" content="Every Tradvio AI bot publishes its complete trading record. Request view-only account access and verify the numbers yourself — no signup needed." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/performance-verification/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-5">
                Open Records · Verifiable Results
              </div>
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
                Don&rsquo;t take our word for it.<br />
                <span className="text-accent">Check the records.</span>
              </h1>
              <p className="text-lg text-muted-dark max-w-2xl mx-auto mb-12">
                Marketing pages can claim anything. That&rsquo;s why every bot&rsquo;s full trading record is public — and if that&rsquo;s not enough, we&rsquo;ll give you view-only access to inspect the live account yourself.
              </p>

              <div className="flex flex-wrap gap-8 lg:gap-12 justify-center">
                <div>
                  <p className="text-xl font-bold text-accent">100% Public.</p>
                  <p className="text-ink-soft mt-1 text-xs">Complete records, wins and losses alike</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-accent">Self-Serve Access.</p>
                  <p className="text-ink-soft mt-1 text-xs">View-only credentials on request</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-accent">Immutable.</p>
                  <p className="text-ink-soft mt-1 text-xs">Records that cannot be changed after the fact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ VERIFICATION PROCESS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">How verification works</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Built so anyone<br />
                <span className="text-ink-soft font-light italic">can fact-check us.</span>
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {process.map((p) => (
                <div key={p.number} className="bg-deep border border-border rounded-2xl p-6 md:p-8 flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                    {p.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-dark leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT YOU CAN VERIFY ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">What you can check</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Every number,<br />
                <span className="text-ink-soft font-light italic">and where to find it.</span>
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto">
                No special access needed to start. Every bot profile includes its full trading record, open to anyone at any time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {dataPoints.map((d) => (
                <div key={d.title} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    {d.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW TO VERIFY ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Do it yourself</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Verify any bot<br />
                <span className="text-ink-soft font-light italic">in four steps.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {howToVerify.map((s) => (
                <div key={s.number} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {s.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ OUR COMMITMENTS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Our commitments</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Five rules we<br />
                <span className="text-ink-soft font-light italic">hold ourselves to.</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {promises.map((p) => (
                <div key={p.number} className="bg-navy border border-border rounded-xl p-6 flex gap-4 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                    {p.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1.5">{p.title}</h3>
                    <p className="text-sm text-muted-dark leading-relaxed">{p.desc}</p>
                  </div>
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
              Look at the data.<br />
              <span className="text-accent">Make up your own mind.</span>
            </h2>
            <p className="text-lg text-muted-dark mb-8">
              Browse the public records first. If you want to go deeper, view-only access is one email away.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/trader/" className="btn btn-primary btn-lg">Browse Traders →</a>
              <a href="/leaderboard/" className="btn btn-secondary btn-lg">View Leaderboard</a>
            </div>
            <p className="text-xs text-ink-soft mt-6 max-w-[480px] mx-auto leading-relaxed">
              Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
