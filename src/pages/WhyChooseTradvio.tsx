import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const comparison = [
  { feature: 'AI-assisted market analysis', tradvio: '✓', general: 'Limited / Separate' },
  { feature: 'Trade setup analysis', tradvio: '✓', general: 'Mostly Manual' },
  { feature: 'Entry & exit planning', tradvio: '✓', general: 'Mostly Manual' },
  { feature: 'Stop-loss & take-profit planning', tradvio: '✓', general: 'Separate Tools' },
  { feature: 'Risk-focused workflow', tradvio: '✓', general: 'Often Separate' },
  { feature: 'Guided trading workflow', tradvio: '✓', general: 'Usually Tool-Based' },
  { feature: 'Traditional charting tools', tradvio: '✓', general: '✓' },
  { feature: 'Multiple disconnected tools', tradvio: 'Reduced', general: 'Common' },
];

const differentiators = [
  {
    title: 'AI-Assisted Analysis',
    intro: 'Traditional platforms mainly show you market data, charts, and indicators. You still have to interpret everything yourself. Tradvio adds an AI-assisted layer to help turn market information into a more structured trading analysis.',
    bullets: [
      'Analyze market conditions',
      'Identify potential trade setups',
      'Review important price levels',
      'Get a more organized view before trading',
    ],
  },
  {
    title: 'From Analysis to Trade Plan',
    intro: 'Finding a setup is only the beginning. A useful trading workflow also needs clear entry, exit, and risk planning. Tradvio connects these steps more closely instead of making traders jump between different tools.',
    flow: 'Analyze → Plan → Manage Risk → Trade',
  },
  {
    title: 'Less Tool Switching',
    intro: 'With traditional platforms, traders may use separate tools for:',
    bullets: [
      'Chart analysis',
      'Trade ideas',
      'Risk calculation',
      'Entry planning',
      'Stop-loss and take-profit levels',
    ],
    outro: 'Tradvio is designed to bring more of this workflow together, helping traders spend less time managing tools and more time analyzing opportunities.',
  },
];

const whyChoose = [
  'AI-assisted trading analysis',
  'Structured trade setup evaluation',
  'Integrated trade planning',
  'Risk-aware decision making',
  'A more connected trading workflow',
  'Less reliance on multiple separate tools',
];

export default function WhyChooseTradvio() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Why Choose Tradvio AI — A Smarter Alternative | Tradvio AI</title>
        <meta name="description" content="Tradvio vs general trading platforms — AI-assisted analysis, integrated trade planning, and a connected workflow. See why traders choose Tradvio." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/why-choose-tradvio-ai/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative py-20 md:py-28 bg-deep overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] -top-[150px] -right-[150px]" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.05] -tracking-[0.02em] mb-5">
              Why Choose <span className="text-accent">Tradvio AI?</span>
            </h1>
            <p className="text-lg text-muted-dark leading-relaxed max-w-[700px] mx-auto mb-4">
              A smarter alternative to traditional trading platforms.
            </p>
            <p className="text-muted-dark leading-relaxed max-w-[700px] mx-auto">
              Most general trading platforms give you the tools to analyze the market — but Tradvio is built to make those tools more useful for actual trading decisions. Instead of relying on multiple disconnected tools for analysis, trade planning, and risk management, Tradvio brings a more focused trading workflow into one platform.
            </p>
          </div>
        </section>

        {/* ═══════════ COMPARISON TABLE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Comparison</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Tradvio vs<br />
                <span className="text-ink-soft font-light italic">general trading platforms.</span>
              </h2>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-deep">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-ink-soft w-[45%]">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-accent">Tradvio</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-ink-soft">General Trading Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={cn('border-b border-border last:border-b-0', i % 2 === 0 ? 'bg-navy' : 'bg-deep')}>
                      <td className="py-4 px-6 text-sm text-ink font-medium">{row.feature}</td>
                      <td className={cn('py-4 px-6 text-center text-sm font-bold', row.tradvio === '✓' ? 'text-success' : 'text-ink')}>{row.tradvio}</td>
                      <td className={cn('py-4 px-6 text-center text-sm', row.general === '✓' ? 'text-success' : 'text-ink-soft')}>{row.general}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT MAKES TRADVIO DIFFERENT ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">The difference</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                What makes Tradvio<br />
                <span className="text-ink-soft font-light italic">different?</span>
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {differentiators.map((d, idx) => (
                <div key={d.title} className="bg-navy border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-ink">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted-dark leading-relaxed mb-4">{d.intro}</p>
                  {d.bullets && (
                    <ul className="space-y-2 mb-4">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-sm text-muted-dark leading-relaxed">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {d.flow && (
                    <div className="bg-deep border border-border rounded-xl p-5 text-center mb-4">
                      <span className="font-mono text-lg font-bold text-accent">{d.flow}</span>
                    </div>
                  )}
                  {d.outro && <p className="text-sm text-muted-dark leading-relaxed">{d.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CHOOSE ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why choose Tradvio</div>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em]">
                Built for traders who want<br />
                <span className="text-ink-soft font-light italic">more than charts and indicators.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChoose.map((w) => (
                <div key={w} className="bg-deep border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 10 8 14 16 6"/></svg>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CLOSING ═══════════ */}
        <section className="py-[100px] text-center bg-deep relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_60%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[640px] mx-auto px-6 relative z-10">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-8">
              Traditional platforms give you the tools.<br />
              <span className="text-accent">Tradvio helps connect the process.</span>
            </h2>
            <a href="/get-started/" className="btn btn-primary btn-lg">Start Free →</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
