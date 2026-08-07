const steps = [
  {
    step: '01',
    title: 'Market Data',
    description: 'Real-time and delayed feeds from verified providers — Forex, indices, crypto, stocks, ETFs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'AI Analysis',
    description: 'Pattern recognition, trend detection, confidence scoring — structured observations, not predictions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Your Decision',
    description: 'Weigh the evidence. Assess the risk. Every call to trade — or not trade — remains yours.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Execute via Your Broker',
    description: 'Tradvio AI never touches your funds. You place trades through your own brokerage — we are research only.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

export default function WhatIsTradvioAI() {
  return (
    <section id="what-is-tradvio-ai" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">A Research Platform That Helps You Think — Not Act</h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            Tradvio AI sits between market data and your brokerage. We provide analysis — you
            stay in full control of every trading decision.
          </p>
        </div>

        <div className="grid-2 items-center">
          {/* Left — Value proposition */}
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-md bg-success-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-success text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-ink font-semibold mb-1">What It Does</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  Structured, data-backed market observations. Chart analysis, strategy
                  backtesting, pattern screening, and risk management — all in one place.
                  Paper trade before risking a single dollar.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-md bg-danger-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-danger text-sm">✕</span>
              </div>
              <div>
                <h3 className="text-ink font-semibold mb-1">What It Is Not</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  Not a broker. Not a robo-advisor. Not an auto-trading bot. Not a profit
                  guarantee. We do not execute trades, hold client funds, or provide financial
                  advice.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-md bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm">→</span>
              </div>
              <div>
                <h3 className="text-ink font-semibold mb-1">The Bottom Line</h3>
                <p className="text-sm text-muted-dark leading-relaxed">
                  AI is the research assistant. <strong className="text-ink">You are the trader.</strong> Every
                  decision — entry, exit, position size, risk level — is yours. If you are looking
                  for someone to tell you what to trade, Tradvio AI is not for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Visual process flow */}
          <div className="bg-navy border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-accent font-bold">How Tradvio AI Works</p>
                <p className="text-xs text-ink-soft">Research → Analyse → Decide → Execute</p>
              </div>
            </div>

            <div className="space-y-0">
              {steps.map((s, i) => (
                <div key={s.step} className="group relative">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-border group-hover:bg-accent/40 transition-colors" />
                  )}

                  <div className="flex gap-4 pb-5 relative">
                    {/* Step circle */}
                    <div className="w-10 h-10 rounded-full bg-medium-navy border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent-light transition-all z-10">
                      <span className="text-xs font-bold text-ink-soft group-hover:text-accent transition-colors">
                        {s.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-accent">{s.icon}</span>
                        <h4 className="text-ink font-semibold text-sm">{s.title}</h4>
                      </div>
                      <p className="text-xs text-muted-dark leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Caption */}
            <div className="mt-2 pt-4 border-t border-border">
              <p className="text-xs text-ink-soft text-center">
                <span className="text-accent font-bold">You stay in control at every stage.</span>
                {' '}AI is the assistant — you are the trader. No auto-execution. No black boxes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
