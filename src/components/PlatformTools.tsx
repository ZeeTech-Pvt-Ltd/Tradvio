import type { PlatformTool } from '@/types';

const tools: PlatformTool[] = [
  {
    icon: '📊',
    title: 'AI Chart Analyser',
    description:
      'Upload a chart and get structured observations: trend direction, key support and resistance levels, and pattern recognition with confidence scoring.',
    warning: 'Visible data only — may miss broader context.',
    href: '/tools/ai-chart-analyser/',
    linkLabel: 'Explore Chart Analyser →',
  },
  {
    icon: '🧠',
    title: 'AI Strategy Builder',
    description:
      'Turn plain-English trading ideas into testable, rules-based strategies. Define entries, exits, and risk parameters.',
    warning: 'Rules are only as good as your inputs and assumptions.',
    href: '/ai-strategy-builder/',
    linkLabel: 'Build a Strategy →',
  },
  {
    icon: '⏳',
    title: 'Strategy Backtesting',
    description:
      'Run your strategies against historical market data. See how they would have performed — with clear cost and slippage assumptions.',
    warning: 'Past results do not guarantee future performance.',
    href: '/backtesting/',
    linkLabel: 'Start Backtesting →',
  },
  {
    icon: '📝',
    title: 'Paper Trading',
    description:
      'Practise with virtual funds under real market conditions. Build confidence before risking any capital.',
    warning: 'No live liquidity, slippage, or emotional pressure simulated.',
    href: '/paper-trading/',
    linkLabel: 'Try Paper Trading →',
  },
  {
    icon: '⚡',
    title: 'AI Trading Signals',
    description:
      'Market scans with transparent confidence ratings. Each signal shows its data source, timeframe, and generation timestamp.',
    warning: 'Signals are observations, not trade recommendations.',
    href: '/ai-trading-signals/',
    linkLabel: 'View Signals →',
  },
  {
    icon: '🛡',
    title: 'Risk Management',
    description:
      'Set position size limits, daily loss caps, exposure tracking, and drawdown alerts. Controls built into every workflow.',
    warning: 'Controls reduce risk — they do not remove it.',
    href: '/risk-management/',
    linkLabel: 'Manage Risk →',
  },
];

export default function PlatformTools() {
  return (
    <section id="platform-tools" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Platform Tools — Research, Test, Decide</h2>
          <p>
            Six interconnected tools built for traders who do their own research. Each comes
            with transparent data labels and clear limitations.
          </p>
        </div>

        <div className="grid-3">
          {tools.map((tool) => (
            <div key={tool.title} className="card flex flex-col">
              <div className="card-icon">{tool.icon}</div>
              <h3 className="mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-dark mb-4 flex-1">{tool.description}</p>
              <a href={tool.href} className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                {tool.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
