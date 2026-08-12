import { useState } from 'react';

const periods = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

const indices = [
  { symbol: 'S&P 500', price: '5,832.44', change: '+0.56%', up: true },
  { symbol: 'Nasdaq 100', price: '18,947', change: '+0.92%', up: true },
  { symbol: 'DJIA', price: '42,316', change: '-0.18%', up: false },
  { symbol: 'DAX', price: '18,472', change: '+0.34%', up: true },
  { symbol: 'FTSE 100', price: '8,241', change: '-0.12%', up: false },
  { symbol: 'Nikkei 225', price: '38,671', change: '+1.24%', up: true },
];

const movers = [
  { symbol: 'NVDA', price: '142.85', change: '+8.42%', up: true, vol: '234M' },
  { symbol: 'TSLA', price: '248.32', change: '+3.15%', up: true, vol: '189M' },
  { symbol: 'AAPL', price: '198.45', change: '-0.67%', up: false, vol: '156M' },
  { symbol: 'AMZN', price: '187.53', change: '+1.23%', up: true, vol: '142M' },
];

export default function TradingPerformance() {
  const [activePeriod, setActivePeriod] = useState('1D');

  return (
    <section className="section bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* ── Header ─────────────────────────────── */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-semibold text-ink-soft uppercase tracking-widest">
                Market Summary
              </span>
              <span className="text-[10px] text-success/60 ml-2">● Live</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Real-Time Trading <span className="text-accent">Performance</span>
            </h2>
          </div>

          {/* Period selector */}
          <div className="flex gap-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activePeriod === p
                    ? 'bg-accent text-white'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* ── Indices row ────────────────────────── */}
        <div className="mb-6">
          <h3 className="text-[11px] font-semibold text-ink-soft uppercase tracking-widest mb-3">
            Indices
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {indices.map((idx) => (
              <div
                key={idx.symbol}
                className="bg-navy border border-border rounded-lg px-4 py-3 transition-colors hover:bg-medium-navy cursor-pointer"
              >
                <div className="text-xs font-semibold text-ink">{idx.symbol}</div>
                <div className="text-sm font-bold text-ink/80 mt-1">{idx.price}</div>
                <div
                  className={`text-xs font-semibold mt-0.5 ${
                    idx.up ? 'text-success' : 'text-danger'
                  }`}
                >
                  {idx.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Chart + Movers ─────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* BTC/USD Chart */}
          <div className="lg:col-span-2 bg-medium-navy/50 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-ink">BTC/USD</span>
                <span className="text-xs text-ink-soft">1H</span>
                <span className="text-sm font-semibold text-success">+2.34%</span>
              </div>
              <span className="text-xs text-ink-soft/40">
                O: 66,910 H: 67,918 L: 66,237 C: 67,245
              </span>
            </div>

            {/* Candlestick chart SVG */}
            <svg viewBox="0 0 600 160" className="w-full h-40" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 40, 80, 120].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="white" strokeOpacity="0.04" />
              ))}

              {/* Candles */}
              {Array.from({ length: 50 }, (_, i) => {
                const x = 10 + i * 12;
                const trend = i > 20 ? -0.3 : 0.1;
                const mid = 80 + Math.sin(i * 0.3) * 25 + trend * i * 2;
                const open = mid;
                const close = mid + (Math.random() - 0.4) * 18;
                const high = Math.max(open, close) + Math.random() * 8;
                const low = Math.min(open, close) - Math.random() * 8;
                const isUp = close > open;
                const color = isUp ? '#22C55E' : '#EF4444';

                return (
                  <g key={i}>
                    <line x1={x + 4} y1={high} x2={x + 4} y2={low} stroke={color} strokeWidth="0.6" opacity="0.8" />
                    <rect x={x} y={Math.min(open, close)} width="8" height={Math.max(Math.abs(close - open), 2)} fill={color} opacity="0.85" rx="1" />
                  </g>
                );
              })}

              {/* Trend line */}
              <polyline
                fill="none"
                stroke="#DC2626"
                strokeWidth="1"
                opacity="0.6"
                points="14,90 26,88 38,85 50,82 62,78 74,76 86,72 98,70 110,68 122,65 134,62 146,60 158,58 170,55 182,52 194,48 206,46 218,44 230,42 242,40 254,38 266,36 278,34 290,32 302,30 314,28 326,26 338,24 350,22"
              />
            </svg>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-2 text-[10px] text-ink-soft">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-sm bg-success" /> Buy
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-sm bg-danger" /> Sell
              </span>
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Market Movers */}
          <div className="bg-medium-navy/50 border border-border rounded-xl p-5">
            <h3 className="text-xs font-semibold text-ink-soft uppercase tracking-wider mb-4">
              Market Movers
            </h3>
            <div className="space-y-3">
              {movers.map((m) => (
                <div
                  key={m.symbol}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <div className="text-sm font-semibold text-ink">{m.symbol}</div>
                    <div className="text-xs text-ink-soft">Vol {m.vol}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-ink/80">{m.price}</div>
                    <div
                      className={`text-xs font-semibold ${
                        m.up ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {m.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
