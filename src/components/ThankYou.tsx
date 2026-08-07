export default function ThankYou() {
  return (
    <div className="min-h-screen bg-deep flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/15 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-success"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          You're In — Welcome to Tradvio AI
        </h1>

        <p className="text-lg text-muted-dark leading-relaxed mb-2">
          Your free access has been created. Check your inbox — we've sent your
          details to get started.
        </p>

        <p className="text-sm text-ink-soft mb-10 leading-relaxed">
          Begin with paper trading. No credit card. No deposit. Practise with virtual
          funds under real market conditions before risking any capital.
        </p>

        {/* Next steps */}
        <div className="bg-navy border border-border rounded-lg p-6 text-left mb-10">
          <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">
            What to do next
          </h3>
          <ol className="space-y-3">
            {[
              { step: '1', text: 'Check your email for access details and confirmation.' },
              { step: '2', text: 'Explore the AI Chart Analyser — upload your first chart.' },
              { step: '3', text: 'Try Paper Trading with virtual funds. Zero risk.' },
              { step: '4', text: 'Build and backtest a strategy before going live.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <span className="text-sm text-ink-soft leading-snug">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <a
          href="/"
          className="inline-flex items-center gap-2 btn btn-primary btn-lg"
        >
          Start Exploring Tools
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
          </svg>
        </a>

        {/* Risk reminder */}
        <p className="mt-8 text-xs text-ink-soft max-w-md mx-auto leading-relaxed">
          <strong className="text-warning">Risk reminder:</strong> Trading involves risk.
          AI analysis can be incorrect. Past performance and simulations do not guarantee
          future results. Only trade money you can afford to lose.
        </p>
      </div>
    </div>
  );
}
