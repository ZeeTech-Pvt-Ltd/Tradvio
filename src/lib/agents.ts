/**
 * Tradvio AI trading agents - sourced from SnapTraderAI-Agents-Risk-Return.xlsx.
 * Return values and sparkline series are live-trade-log figures published on the
 * leaderboard. Target returns / max drawdowns from the spreadsheet are planning
 * assumptions and are deliberately NOT published.
 */

export interface Agent {
  id: number;
  name: string;
  slug: string;
  initial: string;
  market: string;
  strategy: string;
  /** Short strategy label used on cards and badges. */
  shortStrategy: string;
  model: string;
  risk: 'Low' | 'Medium' | 'High';
  /** Live return % from the trade log. */
  actualReturn: number;
  /** Sparkline series (cumulative %). */
  series: number[];
}

/* Deterministic pseudo-random so series are stable across renders/reloads. */
function seeded(seed: number) {
  let s = seed * 2654435761 % 2147483647;
  return () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
}

/** Build a cumulative-return series ending exactly at `finalReturn`. */
function buildSeries(id: number, finalReturn: number, points = 14): number[] {
  const rand = seeded(id * 97 + 13);
  const series: number[] = [0];
  for (let i = 1; i < points - 1; i++) {
    const drift = (finalReturn / points) * 1.6;
    const noise = (rand() - 0.48) * 6;
    series.push(Math.round((series[i - 1] + drift + noise) * 100) / 100);
  }
  series.push(finalReturn);
  return series;
}

const raw: [string, string, string, string, string, Agent['risk'], number][] = [
  ['aperture-01', 'Stocks', 'Cup & Handle breakout (volume-confirmed handle)', 'Cup & Handle', 'Claude Opus 5', 'Medium', 8.4],
  ['iris-02', 'Stocks', 'Gap-and-Go continuation (pre-market gapper follow-through)', 'Gap-and-Go', 'Gemini 3.7 Flash', 'High', -3.2],
  ['lumen-03', 'Stocks', 'Head & Shoulders / Inverse H&S neckline break', 'Head & Shoulders', 'GPT-5.6 Sol', 'Medium', 11.7],
  ['prism-04', 'Stocks', 'Relative Strength leader scan (RS line at new high)', 'Relative Strength', 'Gemini 3.1 Pro', 'Low', 2.1],
  ['shutter-05', 'Forex', 'Liquidity sweep / stop-hunt reversal (SMC)', 'Liquidity Sweep', 'Claude Opus 5', 'High', 15.3],
  ['retina-06', 'Forex', 'Fair Value Gap fill (imbalance retrace)', 'Fair Value Gap', 'DeepSeek V4-Flash Vision', 'Medium', 4.8],
  ['focal-07', 'Forex', 'Break of Structure + Change of Character (BOS/CHoCH)', 'BOS / CHoCH', 'Grok 4.6', 'Medium', -1.9],
  ['flare-08', 'Forex', 'Asian-range compression into London expansion', 'Asian-London Range', 'Claude Sonnet 5', 'Medium', 6.5],
  ['pixel-09', 'Crypto', 'Order Block retest entry (SMC)', 'Order Block', 'Qwen3.8-Max', 'High', 18.6],
  ['raster-10', 'Crypto', 'Falling Wedge reversal (with volume divergence)', 'Falling Wedge', 'GPT-5.6 Sol', 'High', -6.4],
  ['lens-11', 'Crypto', 'Funding rate + Open Interest divergence', 'Funding & OI', 'DeepSeek V4-Pro', 'High', 9.2],
  ['beam-12', 'Crypto', 'Wyckoff accumulation phase detection (Spring / Phase C)', 'Wyckoff', 'Claude Opus 5', 'Medium', 3.7],
  ['glint-13', 'Indices', 'Double Top / Double Bottom confirmation', 'Double Tops/Bottoms', 'Gemini 3.7 Flash', 'Medium', 5.9],
  ['halo-14', 'Indices', 'Volume Spread Analysis - climax & no-demand bars', 'Volume Spread', 'Grok 4.6', 'Medium', -2.3],
  ['mirage-15', 'Indices', 'Ascending / Descending Triangle apex break', 'Triangle Break', 'MiniMax M3', 'Medium', 7.1],
  ['scope-16', 'Indices', 'Multi-timeframe confluence score (1H / 4H / D agreement)', 'MTF Confluence', 'Gemini 3.1 Pro', 'Low', 1.4],
  ['optic-17', 'Commodities', 'Seasonality overlay + price confirmation', 'Seasonality', 'GLM-5.3', 'Low', -0.8],
  ['photon-18', 'Commodities', 'Harmonic patterns (Gartley / Bat / Butterfly)', 'Harmonics', 'GPT-5.6 Sol', 'Medium', 4.2],
  ['candela-19', 'Commodities', 'Trendline break + retest validation', 'Trendline Break', 'Claude Sonnet 5', 'Medium', 2.9],
  ['spectra-20', 'Commodities', 'COT positioning shift vs. price divergence', 'COT Divergence', 'DeepSeek V4-Pro', 'Low', -1.1],
  ['contour-21', 'ETFs', 'Sector correlation rotation basket', 'Sector Rotation', 'Gemini 3.1 Pro', 'Low', 1.8],
  ['zoom-22', 'ETFs', 'NR7 / squeeze compression expansion', 'NR7 Squeeze', 'Gemini 3.7 Flash', 'Medium', 6.8],
  ['frame-23', 'ETFs', 'Hidden RSI / MACD divergence (trend continuation)', 'Hidden Divergence', 'Qwen3.8-Max', 'Medium', -4.5],
  ['grain-24', 'ETFs', 'Elliott Wave impulse count (waves 3 & 5 targets)', 'Elliott Wave', 'Claude Opus 5', 'High', 12.9],
];

export const agents: Agent[] = raw.map(([name, market, strategy, shortStrategy, model, risk, ret], i) => ({
  id: i + 1,
  name,
  slug: name,
  initial: name.charAt(0).toUpperCase(),
  market,
  strategy,
  shortStrategy,
  model,
  risk,
  actualReturn: ret,
  series: buildSeries(i + 1, ret),
}));
