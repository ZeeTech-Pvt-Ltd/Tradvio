import type { FAQItem, PlatformTool, Testimonial } from '@/types';

export const faqs: FAQItem[] = [
  {
    id: 'broker',
    question: 'Is Tradvio AI a broker?',
    answer:
      'No. Tradvio AI is a market research and analysis platform. We provide tools for chart analysis, strategy building, backtesting, paper trading, and risk management. We are not a brokerage, we do not execute trades, hold client funds, or provide financial advice. You make your own trading decisions through your chosen broker.',
  },
  {
    id: 'deposit',
    question: 'Do I need to deposit money to use the platform?',
    answer:
      'No deposit is required to use our research and analysis tools. You can analyse charts, build strategies, backtest, and paper trade entirely free. A funded brokerage account is only needed if and when you choose to trade live — and that is completely optional and separate from Tradvio AI.',
  },
  {
    id: 'profits',
    question: 'Can AI trading guarantee profits?',
    answer:
      'No technology can guarantee trading profits. AI analysis can help you identify patterns, test strategies, and manage risk — but markets are unpredictable, past patterns do not predict the future, and all trading involves risk of loss. AI-generated analysis can be incorrect. Never trade money you cannot afford to lose.',
  },
  {
    id: 'bots',
    question: 'How is Tradvio AI different from trading bots?',
    answer:
      'Trading bots automatically execute trades based on pre-set rules. Tradvio AI is a research platform: we provide analysis and tools, but you remain in control of every decision. We do not auto-execute trades for you. Think of us as your research assistant — not an autopilot.',
  },
  {
    id: 'markets',
    question: 'What markets can I analyse with Tradvio AI?',
    answer:
      'Tradvio AI supports analysis across Forex, Indices, Commodities, Crypto, Stocks, and ETFs. Coverage varies by data provider and region. Check the data label on any result — it tells you whether the data is Live, Delayed, Backtested, or Illustrative. We do not recommend specific brokers, products, or markets.',
  },
  {
    id: 'privacy',
    question: 'Is my data safe with Tradvio AI?',
    answer:
      'We take data security seriously. Your personal information is encrypted, we do not sell your data to third parties, and you can request deletion at any time. See our Privacy Policy for full details. We recommend you never share your brokerage account credentials with any third-party platform, including Tradvio AI.',
  },
  // ─── New AEO-optimized questions ───
  {
    id: 'free',
    question: 'Is Tradvio AI really free?',
    answer:
      'Yes — our core research and analysis tools are free to use. You can analyse charts, build strategies, backtest historical data, and paper trade without paying anything. We believe traders should test tools before committing capital. If we introduce premium features in the future, existing free tools will remain free.',
  },
  {
    id: 'beginners',
    question: 'Can beginners use Tradvio AI?',
    answer:
      'Yes. Paper trading and backtesting are designed for beginners who want to learn without risking real money. Our platform includes educational context with every tool, and risk controls are built into every workflow. That said, trading itself involves risk — we recommend learning the basics of market mechanics before trading live.',
  },
  {
    id: 'accuracy',
    question: 'How accurate is AI market analysis?',
    answer:
      'AI analysis provides structured observations — not predictions. Our models identify patterns, support and resistance levels, and trend direction with confidence scoring. However, AI-generated analysis can be incorrect, markets are unpredictable, and past patterns do not guarantee future outcomes. We display confidence scores and data labels so you know the limitations. Always verify before acting.',
  },
  {
    id: 'data-sources',
    question: 'Where does Tradvio AI get its market data?',
    answer:
      'We source market data from verified third-party providers. Every data point is labelled: Live (real-time from connected feeds), Delayed (typically 15-minute delay), Backtested (historical simulation), or Illustrative (example/educational). Check the data label on any chart or signal — it tells you exactly what you\'re looking at. Read our full Performance Methodology for details on providers and update frequencies.',
  },
  {
    id: 'mobile',
    question: 'Can I use Tradvio AI on my phone?',
    answer:
      'Yes. Tradvio AI is a web-based platform accessible from any modern browser — desktop, tablet, or mobile. We are actively developing native iOS and Android applications. The web platform is fully responsive and optimised for mobile use, including chart viewing and strategy management on smaller screens.',
  },
  {
    id: 'broker-integration',
    question: 'Does Tradvio AI connect to my brokerage account?',
    answer:
      'Tradvio AI does not currently connect to or execute trades through any brokerage. You use your own broker separately. We provide analysis, strategy testing, and risk management — the execution happens on your brokerage platform, under your control. We recommend never sharing your brokerage credentials with any third-party service.',
  },
];

export const howToSteps = [
  {
    name: 'Choose a Market',
    text: 'Pick an instrument and timeframe you want to analyse. Tradvio AI supports Forex, indices, commodities, crypto, stocks, and ETFs. Always check the data label — it tells you if data is live or delayed.',
  },
  {
    name: 'Upload or Ask AI',
    text: 'Upload a chart for structured analysis or ask a research question. Our AI identifies patterns, support and resistance levels, and trend direction with confidence scoring. Remember: AI analysis can be wrong — verify before acting.',
  },
  {
    name: 'Test the Idea',
    text: 'Backtest your strategy against historical data or paper trade it under real market conditions with virtual funds. See how the approach would behave before risking any capital. Backtests do not guarantee future performance.',
  },
  {
    name: 'Decide for Yourself',
    text: 'Weigh the evidence, assess the risk, and make your own call. Use built-in risk controls — position sizing, daily loss caps, and exposure tracking. Start small. You are responsible for your trading decisions.',
  },
];

export const platformTools: PlatformTool[] = [
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

export const testimonials: Testimonial[] = [
  {
    quote:
      'The chart analyser gives me a structured second opinion. I still make my own calls, but having AI flag levels I might have missed has made me a more thorough trader.',
    name: 'James D.',
    role: 'Retail Trader, 3 years experience',
  },
  {
    quote:
      'Paper trading before going live was the best advice. I spent two months testing strategies with virtual funds. It saved me from some expensive beginner mistakes.',
    name: 'Sarah M.',
    role: 'Part-Time Trader',
  },
  {
    quote:
      "I like that every number has a label. Live, delayed, backtested — I know what I'm looking at. Most platforms blur these lines. Transparency matters.",
    name: 'Alex K.',
    role: 'Independent Trader',
  },
];

/** Glossary definitions — triggers featured snippets and definition boxes */
export const glossaryTerms = [
  {
    term: 'Backtesting',
    definition:
      'Running a trading strategy against historical market data to see how it would have performed. Backtests carry assumptions about costs, slippage, and liquidity. Past performance does not guarantee future results.',
  },
  {
    term: 'Paper Trading',
    definition:
      'Simulated trading with virtual funds under real market conditions. It helps traders practise and test strategies without risking real capital. Paper trading does not replicate the emotional pressure or liquidity conditions of live trading.',
  },
  {
    term: 'AI Chart Analysis',
    definition:
      'Using machine learning to identify patterns, support and resistance levels, and trend direction in price charts. AI analysis provides structured observations — not predictions. Results include confidence scores and should be verified independently.',
  },
  {
    term: 'Confidence Scoring',
    definition:
      'A measure (typically 0–100%) indicating how strongly an AI model believes in its pattern identification or signal. Higher confidence does not mean higher accuracy. Scores help traders prioritise which signals to investigate further.',
  },
  {
    term: 'Risk Management',
    definition:
      'The practice of controlling potential losses through position sizing, stop-loss orders, daily loss limits, and exposure tracking. Risk management reduces — but does not eliminate — the possibility of losing money in trading.',
  },
  {
    term: 'Market Data Labels',
    definition:
      'Tags on every data point indicating its source and freshness: Live (real-time), Delayed (typically 15 minutes), Backtested (historical simulation), or Illustrative (example/educational). Traders should check labels before making decisions.',
  },
  {
    term: 'Spread',
    definition:
      'The difference between the bid (sell) price and the ask (buy) price of an instrument. Tight spreads mean lower trading costs. Spread varies by market conditions, liquidity, and broker. Always check spread before executing.',
  },
  {
    term: 'Slippage',
    definition:
      'The difference between the expected price of a trade and the actual price at which it is executed. Slippage occurs during high volatility or low liquidity. Backtests may not fully account for real-market slippage.',
  },
];

/** Market statistics for credibility section */
export const marketStats = [
  { value: '6.6T', label: 'Daily Forex Trading Volume (USD)', source: 'BIS, 2022' },
  { value: '90%', label: 'Retail Traders Who Lose Money', source: 'Multiple Broker Studies' },
  { value: '73%', label: 'Traders Using AI/ML Tools (2025)', source: 'JPMorgan e-Trading Survey' },
  { value: '0', label: 'Minimum Deposit Required to Use Tradvio AI', source: 'Tradvio AI Policy' },
];
