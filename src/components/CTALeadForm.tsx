import LeadForm from './LeadForm';

const features = [
  {
    icon: '📊',
    title: 'AI Chart Analysis',
    desc: 'Upload charts and get AI-powered technical insights — no guesswork.',
  },
  {
    icon: '🧪',
    title: 'Strategy Backtesting',
    desc: 'Test your trading ideas against historical data before risking capital.',
  },
  {
    icon: '📝',
    title: 'Paper Trading',
    desc: 'Practise with virtual funds in real market conditions. Zero financial risk.',
  },
  {
    icon: '🔓',
    title: 'No Credit Card',
    desc: 'Create your account in under a minute. No deposit. No commitment.',
  },
];

export default function CTALeadForm() {
  return (
    <section id="lead-form" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid-2 items-center gap-10 lg:gap-16">
          {/* Left — pitch */}
          <div>
            <h2 className="mb-4">Start Analysing — Not Trading</h2>
            <p className="text-muted-dark leading-relaxed mb-6 text-lg">
              Create free access to Tradvio AI. Explore the tools, understand the risks, and
              decide for yourself. AI helps you analyse — you stay in control.
            </p>

            {/* Feature list — fills the empty space */}
            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <strong className="text-ink text-sm block leading-snug">{f.title}</strong>
                    <span className="text-sm text-muted-dark leading-relaxed">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="risk-callout">
              <span className="risk-callout-icon">⚠</span>
              <p>
                <strong>Risk reminder:</strong> Trading involves risk. AI analysis can be
                incorrect. Past performance and simulations do not guarantee future results.
                Only trade money you can afford to lose.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <LeadForm
              formName="homepage_lead"
              title="Start Analysing — Free"
              subtitle="No credit card. No deposit required."
              ctaText="Start Free Access"
              sourcePage="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
