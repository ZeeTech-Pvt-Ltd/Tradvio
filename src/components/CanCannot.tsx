const helpsWith = [
  'Market pattern analysis and trend identification',
  'Strategy backtesting on historical data',
  'Signal screening with transparent confidence ratings',
  'Risk parameter setting and exposure tracking',
  'Paper trading to practise without real capital',
  'Performance tracking with methodology transparency',
];

const doesNot = [
  'Guarantee trading profits — no technology can',
  'Eliminate risk from trading',
  'Execute trades or hold client funds',
  'Provide financial or investment advice',
  'Predict market movements with certainty',
  'Replace your own research and judgment',
];

export default function CanCannot() {
  return (
    <section id="can-cannot" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>What AI Can Help With — And What It Cannot Do</h2>
          <p>Honest expectations build better traders. Here&apos;s the reality.</p>
        </div>

        <div className="grid-2">
          {/* Helps With */}
          <div className="bg-navy border border-border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-success mb-6">
              <span>✓</span> Tradvio AI Helps With
            </h3>
            <ul className="space-y-3">
              {helpsWith.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                  <span className="text-success flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Does NOT */}
          <div className="bg-navy border border-border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-danger mb-6">
              <span>—</span> Tradvio AI Does NOT
            </h3>
            <ul className="space-y-3">
              {doesNot.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                  <span className="text-danger flex-shrink-0 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
