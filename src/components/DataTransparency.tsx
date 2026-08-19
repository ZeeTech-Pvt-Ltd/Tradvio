const labels = [
  {
    dot: '●',
    dotColor: 'text-success',
    title: 'Live Data',
    subtitle: 'Real-Time',
    description:
      'Connected market feeds from verified data providers. Real-time where available.',
  },
  {
    dot: '●',
    dotColor: 'text-warning',
    title: 'Delayed',
    subtitle: '15-Minute Delay',
    description:
      'Delayed market data, labelled with the delay period. Suitable for analysis, not execution.',
  },
  {
    dot: '●',
    dotColor: 'text-accent',
    title: 'Paper Traded',
    subtitle: 'Simulated',
    description:
      'Simulated trades under real market conditions. Virtual funds. No real P&L.',
  },
  {
    dot: '●',
    dotColor: 'text-[#7C3AED]',
    title: 'Backtested',
    subtitle: 'Historical',
    description:
      'Historical simulation only. Past patterns do not predict future market movements.',
  },
];

export default function DataTransparency() {
  return (
    <section id="data-transparency" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Data Transparency — Every Number Tells You Its Source</h2>
          <p>
            We label every data point so you know exactly what you&apos;re looking at. If
            something isn&apos;t labelled, treat it as illustrative.
          </p>
        </div>

        <div className="grid-2">
          {labels.map((label) => (
            <div
              key={label.title}
              className="bg-navy border border-border rounded-lg p-6 flex gap-4"
            >
              <span className={`text-2xl flex-shrink-0 ${label.dotColor}`}>{label.dot}</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${label.dotColor} bg-opacity-10`}
                    style={{ backgroundColor: label.dotColor === 'text-success' ? 'rgba(34,197,94,0.12)' : label.dotColor === 'text-warning' ? 'rgba(250,204,21,0.12)' : label.dotColor === 'text-accent' ? 'rgba(220,38,38,0.12)' : 'rgba(124,58,237,0.12)' }}
                  >
                    {label.title}
                  </span>
                </div>
                <h4 className="text-ink font-semibold mb-1">{label.subtitle}</h4>
                <p className="text-sm text-muted-dark">{label.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-ink-soft mt-8">
          If a result is not labelled, treat it as illustrative.{' '}
          <a href="/performance-methodology/" className="text-accent hover:text-accent-hover underline underline-offset-2">
            Read our full methodology →
          </a>
        </p>
      </div>
    </section>
  );
}
