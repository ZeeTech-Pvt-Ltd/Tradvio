import PlatformDemo, { PlatformDemoStyles } from './PlatformDemo';

const steps = [
  {
    number: 1,
    title: 'Chart Analysis',
    description:
      'Pick an instrument. Upload a chart. AI identifies patterns, support/resistance levels, and trend direction with confidence scoring.',
    warning: 'Data may be delayed — always check the label.',
  },
  {
    number: 2,
    title: 'AI Market Scanning',
    description:
      'Our models scan 26+ indicators across multiple timeframes. Trend, momentum, volume, and volatility analysis with transparent scoring.',
    warning: 'AI analysis can be wrong — verify before acting.',
  },
  {
    number: 3,
    title: 'Signal Generation',
    description:
      'Get structured trading signals with entry price, stop loss, take profit, and risk/reward ratio. Each signal shows its confidence score.',
    warning: 'Signals are observations, not trade recommendations.',
  },
  {
    number: 4,
    title: 'Execution via Your Broker',
    description:
      'You decide. Place the trade through your own brokerage — Tradvio AI never touches your funds. We are research only.',
    warning: 'You are responsible for your trading decisions.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-surface">
      <PlatformDemoStyles />

      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>How It Works — See It in Action</h2>
          <p>Two screens. Four steps. Full transparency at every stage.</p>
        </div>

        {/* Animated Platform Demo — 2 screens side by side */}
        <div className="mb-16">
          <PlatformDemo />
        </div>

        {/* Step details — quick reference */}
        <div className="grid-4">
          {steps.map((step) => (
            <div key={step.number} className="card relative pt-12">
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                {step.number}
              </span>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-sm text-muted-dark mb-3">{step.description}</p>
              <p className="text-xs italic text-warning/80">{step.warning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
