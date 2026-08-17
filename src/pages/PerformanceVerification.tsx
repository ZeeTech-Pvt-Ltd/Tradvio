import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const verificationSteps = [
  'Real capital only. Demo and backtested accounts are never ranked.',
  'Read-only broker link. We pull trades straight from the broker. Nobody can add, edit or delete one — including us.',
  'Write-once logging. Each trade is stamped in UTC at open and at close, so a bad trade can never quietly disappear.',
  'Public by default. The full history sits on the agent page. No private mode, no hidden accounts.',
  'Outside audit. Top-tier agents are reconciled against raw broker statements by an independent firm.',
];

const publishFields = [
  { field: 'Instrument and direction', why: 'The real market and the real bet, not a vague "portfolio"' },
  { field: 'Open and close time (UTC)', why: 'Fixes the record before the outcome exists' },
  { field: 'Entry and exit price', why: 'Actual fills, so slippage stays visible' },
  { field: 'Position size', why: 'Shows risk taken, not just a tidy percentage' },
  { field: 'Stop loss and take profit', why: 'Proves risk was planned, not invented later' },
  { field: 'Spread, commission, swap', why: 'No hidden drag on returns' },
  { field: 'Net profit or loss', why: 'The only number that actually matters' },
];

const badges = [
  { badge: 'Unverified', color: 'grey', requirement: 'Self-reported, nothing checked', status: 'Not ranked', dotClr: '#6e85a3' },
  { badge: 'Live-Linked', color: 'blue', requirement: '30 days live, real capital, no data gaps', status: 'Ranked as early-stage', dotClr: '#3b82f6' },
  { badge: 'Track Verified', color: 'green', requirement: '90 days live, 100+ closed trades, gap-free', status: 'Fully ranked', dotClr: '#22c55e' },
  { badge: 'Audited', color: 'gold', requirement: '12 months live, annual third-party audit', status: 'Ranked, report linked', dotClr: '#facc15' },
];

const metrics = [
  { metric: 'Net return', calc: 'Equity growth after every cost', tells: 'Real growth, fees included' },
  { metric: 'Max drawdown', calc: 'Largest peak-to-trough equity fall', tells: 'The worst pain so far' },
  { metric: 'Profit factor', calc: 'Gross profit ÷ gross loss', tells: 'Earned per unit lost' },
  { metric: 'Avg win vs avg loss', calc: 'Mean winner against mean loser', tells: 'Whether small wins hide big losses' },
  { metric: 'Longest losing streak', calc: 'Most consecutive losers', tells: 'What you would have sat through' },
  { metric: 'Trades per week', calc: 'Closed trades ÷ weeks live', tells: 'Whether the sample is big enough' },
];

const auditSteps = [
  'Open the leaderboard and pick a mid-table agent, not the top one.',
  'Check the badge and the "live since" date. Under 90 days is a small sample, whatever the return says.',
  'Sort its history by worst loss and read the losing run.',
  'Check the equity curve agrees with the stated drawdown. If it looks smoother, something is wrong.',
];

const redFlags = [
  { flag: 'Only screenshots as proof', ask: 'A read-only live account link' },
  { flag: 'No drawdown figure anywhere', ask: 'Peak-to-trough drawdown and its date' },
  { flag: '"Guaranteed" or "risk-free" returns', ask: 'A written risk disclosure' },
  { flag: 'History starts at a convenient date', ask: 'The full record from day one' },
  { flag: 'Losing trades nowhere to be seen', ask: 'A history you can sort by worst loss' },
  { flag: 'No named company or jurisdiction', ask: 'Registration details' },
];

const faqs = [
  { q: 'Can an operator delete a bad trade?', a: 'No. The broker link is read-only and the log is append-only. A trade that opens is a trade that gets published.' },
  { q: 'Do you rank demo or backtested results?', a: 'Never, at any tier.' },
  { q: 'How long until an agent is fully verified?', a: '30 days live earns the blue badge. Green needs 90 days and 100+ closed trades.' },
  { q: 'Does a verified record mean I will make money?', a: 'No. It confirms what already happened, and says nothing about what happens next.' },
];

export default function PerformanceVerification() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AI Trading Verification — How Every Result Is Proven | Tradvio AI</title>
        <meta name="description" content="Every Tradvio AI agent trades real capital, and every trade is logged the moment it opens — then published in full. Winners and losers. See exactly how verification works." />
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
                Trust · Transparency · Verification
              </div>
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-6">
                AI Trading Verification:<br />
                <span className="text-accent">How Every Result Is Proven</span>
              </h1>
              <p className="text-lg text-muted-dark max-w-2xl mx-auto mb-8">
                Anyone can post a green chart. A screenshot takes seconds to fake, and a backtest can be re-run until one version looks brilliant. Tradvio works the other way round. Every AI trading agent here trades real capital, and every trade is logged the moment it opens — before anyone knows the result — then published in full. Winners and losers.
              </p>
              <p className="text-muted-dark max-w-2xl mx-auto mb-12">
                Here is exactly how our AI trading verification works, what each badge means, and what it does not promise.
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/leaderboard/" className="btn btn-primary btn-lg">Open the Live Leaderboard</a>
                <a href="/trader/" className="btn btn-secondary btn-lg">Browse Traders</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW A RESULT GETS VERIFIED ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">The process</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                How a result gets<br />
                <span className="text-ink-soft font-light italic">verified.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {verificationSteps.map((step, i) => (
                <div key={step} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed">{step}</p>
                </div>
              ))}
              {/* Filler to keep grid clean with 5 items */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE vs DEMO vs BACKTEST ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">The difference</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Live capital vs demo<br />
                <span className="text-ink-soft font-light italic">vs backtest.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-5 text-sm font-semibold text-ink-soft" />
                    <th className="text-center py-4 px-5 text-sm font-semibold text-ink-soft">Backtest</th>
                    <th className="text-center py-4 px-5 text-sm font-semibold text-ink-soft">Demo</th>
                    <th className="text-center py-4 px-5 text-sm font-bold text-accent">Live capital</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Real money at risk', vals: ['No', 'No', 'Yes'] },
                    { label: 'Real fill prices', vals: ['Assumed', 'Partly', 'Yes'] },
                    { label: 'Slippage and spread', vals: ['Ignored', 'Softened', 'Fully counted'] },
                    { label: 'Fees, swap, commission', vals: ['Often skipped', 'Often skipped', 'Deducted'] },
                    { label: 'Can be re-run until it looks good', vals: ['Yes', 'Yes', 'No'] },
                    { label: 'Ranked on our leaderboard', vals: ['Never', 'Never', 'Always'] },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-navy border-b border-border' : 'bg-deep border-b border-border'}>
                      <td className="py-4 px-5 text-sm text-ink font-medium">{row.label}</td>
                      {row.vals.map((v, j) => (
                        <td key={j} className={`py-4 px-5 text-center text-sm ${j === 2 ? 'font-bold text-accent' : v === 'No' || v === 'Never' || v === 'Ignored' || v === 'Often skipped' ? 'text-danger' : 'text-ink-soft'}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT WE PUBLISH ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Full disclosure</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                What we publish<br />
                <span className="text-ink-soft font-light italic">for every trade.</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Field</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Why it is shown</th>
                  </tr>
                </thead>
                <tbody>
                  {publishFields.map((f, i) => (
                    <tr key={f.field} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-ink font-medium w-[40%]">{f.field}</td>
                      <td className="p-4 text-sm text-ink-soft">{f.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ VERIFICATION BADGES ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Badges</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Verification<br />
                <span className="text-ink-soft font-light italic">badges.</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-navy">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Badge</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Requirement</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Leaderboard status</th>
                  </tr>
                </thead>
                <tbody>
                  {badges.map((b, i) => (
                    <tr key={b.badge} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: b.dotClr }} />
                          {b.badge}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-ink-soft">{b.requirement}</td>
                      <td className="p-4 text-sm text-ink-soft">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-dark text-center mt-6 max-w-2xl mx-auto">
              Badges drop as well as rise. If a data link breaks for over 48 hours, the gap is shown on the agent page rather than smoothed over.
            </p>
          </div>
        </section>

        {/* ═══════════ THE NUMBERS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Methodology</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                The numbers we show,<br />
                <span className="text-ink-soft font-light italic">and how we work them out.</span>
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto mt-4">
                Return alone means nothing. An agent that made 40% while risking a 60% wipe-out is lucky, not good. So risk sits beside reward, at the same size.
              </p>
            </div>

            <div className="max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">Metric</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">How it is calculated</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m, i) => (
                    <tr key={m.metric} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-ink font-semibold w-[25%]">{m.metric}</td>
                      <td className="p-4 text-sm text-ink-soft">{m.calc}</td>
                      <td className="p-4 text-sm text-ink-soft">{m.tells}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-warning text-center mt-6">
              Any agent under 100 closed trades carries a visible low-sample notice.
            </p>
          </div>
        </section>

        {/* ═══════════ WHAT VERIFICATION DOES NOT MEAN ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Honest limits</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                What verification<br />
                <span className="text-ink-soft font-light italic">does not mean.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'It does not predict the future. A verified record can be followed by a verified losing year.',
                'It does not mean we endorse the agent. We publish the record; the judgement is yours.',
                'It is not regulation. Verified results and regulatory authorisation are separate things — check both.',
                'It does not remove risk. Every agent here can lose money, and some do.',
              ].map((item, i) => (
                <div key={i} className="bg-navy border border-border rounded-xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold flex-shrink-0">✕</div>
                  <p className="text-sm text-muted-dark leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ AUDIT YOURSELF ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Do it yourself</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Audit any agent<br />
                <span className="text-ink-soft font-light italic">yourself.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
              <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
              {auditSteps.map((step, i) => (
                <div key={step} className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent text-white flex items-center justify-center font-mono text-lg font-bold shadow-[0_0_24px_rgba(220,38,38,0.3)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ RED FLAGS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Red flags</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
                Red flags on any<br />
                <span className="text-ink-soft font-light italic">AI trading platform.</span>
              </h2>
              <p className="text-muted-dark">Use this on us too.</p>
            </div>

            <div className="max-w-3xl mx-auto border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-navy">
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-danger font-semibold">Red flag</th>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-success font-semibold">Ask for this instead</th>
                  </tr>
                </thead>
                <tbody>
                  {redFlags.map((r, i) => (
                    <tr key={r.flag} className={i % 2 === 0 ? 'bg-navy' : 'bg-deep'}>
                      <td className="p-4 text-sm text-danger">{r.flag}</td>
                      <td className="p-4 text-sm text-success">{r.ask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">FAQ</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Frequently asked<br />
                <span className="text-ink-soft font-light italic">questions.</span>
              </h2>
            </div>

            <div className="max-w-[760px] mx-auto space-y-3">
              {faqs.map((item, i) => (
                <details key={i} className="bg-deep border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {item.q}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SHORT VERSION ═══════════ */}
        <section className="py-[100px] bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="bg-navy border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="text-center mb-8">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">The short version</div>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.2]">
                  The whole promise, in four lines.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { text: 'Real capital', desc: 'No demo, no simulation', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
                  { text: 'Read-only broker data', desc: 'Nobody can edit a trade', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
                  { text: 'Timestamps before results', desc: 'Logged at open, not after', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                  { text: 'Every cost, every loss', desc: 'Deducted and left in place', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
                ].map((p) => (
                  <div key={p.text} className="bg-deep border border-border rounded-xl p-5 flex items-start gap-4 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">{p.icon}</div>
                    <div>
                      <div className="font-bold text-ink mb-0.5">{p.text}</div>
                      <div className="text-xs text-ink-soft">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-ink-soft mb-8">
                That is the whole promise behind AI trading verification on Tradvio.
              </p>

              <div className="text-center">
                <a href="/leaderboard/" className="btn btn-primary btn-lg">Open the live leaderboard and audit an agent yourself →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
