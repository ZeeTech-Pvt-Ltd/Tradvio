import { marketStats } from '@/lib/data';

export default function MarketStats() {
  return (
    <section id="market-stats" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Trading by the Numbers</h2>
          <p>
            Context matters. Here are key data points every trader should know — sourced and
            cited.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {marketStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy border border-border rounded-lg p-6 text-center hover:border-border-light transition-colors"
            >
              <p className="text-3xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-muted-dark mb-3 leading-relaxed">{stat.label}</p>
              <p className="text-xs text-ink-soft italic">Source: {stat.source}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-soft mt-8 max-w-2xl mx-auto">
          Statistics are for context only. They describe the trading environment — not Tradvio
          AI&apos;s performance. Past data, backtests, and industry statistics do not guarantee
          future results.
        </p>
      </div>
    </section>
  );
}
