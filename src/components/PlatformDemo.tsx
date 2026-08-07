/**
 * PlatformDemo — Animated walkthrough of the Tradvio AI workflow:
 * Chart Analysis → AI Scanning → Signal Generation → Trade Execution
 * Pure CSS/SVG animation, no external dependencies.
 */
export default function PlatformDemo() {
  return (
    <div className="relative w-full max-w-container mx-auto">
      {/* Outer glow */}
      <div
        className="absolute -inset-6 rounded-2xl opacity-30 blur-2xl -z-10"
        style={{ background: 'radial-gradient(ellipse, rgba(220,38,38,0.10) 0%, transparent 70%)' }}
      />

      {/* ===== SCREEN 1: Chart Analysis + AI Scanning ===== */}
      <div className="relative rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#0D0D0D] shadow-card-xl mb-4">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#111111] border-b border-[#222]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="text-[10px] text-[#555] uppercase tracking-[0.15em] font-bold">
            Tradvio AI · Research Terminal
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-accent font-mono font-bold">REC</span>
          </div>
        </div>

        {/* Two-column: Chart Analysis | AI Scanning */}
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <WorkflowStep
            step={1}
            title="Chart Analysis"
            subtitle="Upload chart · AI detects patterns"
            status="complete"
            delay="0s"
          >
            <ChartAnalysisPanel />
          </WorkflowStep>

          <WorkflowStep
            step={2}
            title="AI Market Scanning"
            subtitle="26 indicators · Confidence scoring"
            status="active"
            delay="0.8s"
          >
            <AIScanningPanel />
          </WorkflowStep>
        </div>
      </div>

      {/* ===== SCREEN 2: Signal + Execution ===== */}
      <div className="relative rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#0D0D0D] shadow-card-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#111111] border-b border-[#222]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="text-[10px] text-[#555] uppercase tracking-[0.15em] font-bold">
            Tradvio AI · Trade Execution
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-[9px] text-success font-mono font-bold">LIVE</span>
          </div>
        </div>

        {/* Two-column: Signal | Execution */}
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <WorkflowStep
            step={3}
            title="Signal Generated"
            subtitle="EUR/USD BUY · 87% confidence"
            status="signal"
            delay="1.6s"
          >
            <SignalPanel />
          </WorkflowStep>

          <WorkflowStep
            step={4}
            title="Trade Execution"
            subtitle="Via your broker · You stay in control"
            status="executing"
            delay="2.4s"
          >
            <ExecutionPanel />
          </WorkflowStep>
        </div>

        {/* Bottom status */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#111111] border-t border-[#222] text-[9px] font-mono text-[#444]">
          <div className="flex items-center gap-3">
            <span>Data: <span className="text-success">● LIVE</span></span>
            <span>Latency: 12ms</span>
          </div>
          <div className="flex items-center gap-3">
            <span>AI Model: Active</span>
            <span className="text-ink-soft">Paper Trading</span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-xs text-ink-soft mt-4 max-w-md mx-auto">
        <span className="text-accent font-semibold">Demo walkthrough.</span> Real platform
        shows live data, confidence labels, and risk warnings at every step.
      </p>
    </div>
  );
}

/* ─── Workflow Step Wrapper ─── */
function WorkflowStep({
  step,
  title,
  subtitle,
  status,
  delay,
  children,
}: {
  step: number;
  title: string;
  subtitle: string;
  status: 'complete' | 'active' | 'signal' | 'executing';
  delay: string;
  children: React.ReactNode;
}) {
  const statusColors: Record<string, string> = {
    complete: 'bg-accent border-accent text-white',
    active: 'bg-accent border-accent text-white animate-pulse',
    signal: 'bg-success border-success text-white',
    executing: 'bg-success border-success text-white',
  };

  const borderColors: Record<string, string> = {
    complete: 'border-accent/30',
    active: 'border-accent/60',
    signal: 'border-success/40',
    executing: 'border-success/50',
  };

  return (
    <div
      className={`rounded-lg border bg-[#0A0A0A] p-3 transition-all duration-500 ${borderColors[status]}`}
      style={{ animation: `stepFadeIn 0.6s ease-out ${delay} both` }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all duration-500 ${statusColors[status]}`}
        >
          {status === 'complete' ? '✓' : step}
        </span>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold text-ink">{title}</span>
          <span className="text-[10px] text-ink-soft ml-2 hidden sm:inline">{subtitle}</span>
        </div>
        {status === 'active' && (
          <span className="text-[9px] text-accent font-mono animate-pulse flex-shrink-0">
            Processing...
          </span>
        )}
        {status === 'signal' && (
          <span className="text-[9px] text-success font-mono font-bold flex-shrink-0">
            BUY SIGNAL
          </span>
        )}
        {status === 'executing' && (
          <span className="text-[9px] text-success font-mono flex-shrink-0">
            CONFIRMED ✓
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/* ─── Step 1: Chart Analysis Panel ─── */
function ChartAnalysisPanel() {
  return (
    <div className="bg-[#060606] rounded-md p-2 border border-[#1A1A1A] overflow-hidden">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[10px] font-bold text-white font-mono">EUR/USD · 1H</span>
        <span className="text-[10px] text-success font-mono">1.0925</span>
        <span className="text-[9px] text-success/80">+0.18%</span>
        <div className="flex gap-1 ml-auto">
          {['1M', '5M', '15M', '1H', '4H'].map((tf) => (
            <span
              key={tf}
              className={`px-1 py-0.5 rounded text-[7px] font-mono ${
                tf === '1H' ? 'bg-accent/20 text-accent' : 'text-[#444]'
              }`}
            >
              {tf}
            </span>
          ))}
        </div>
      </div>

      {/* Animated candlestick chart */}
      <svg viewBox="0 0 400 80" className="w-full h-auto">
        {/* Grid */}
        {[0, 1, 2, 3].map((i) => (
          <line key={`g-${i}`} x1="0" y1={i * 26} x2="400" y2={i * 26} stroke="#151515" strokeWidth="0.5" />
        ))}

        {/* Animated candlesticks — draw one by one */}
        {[
          { x: 6, o: 60, c: 52, h: 64, l: 48 },
          { x: 24, o: 52, c: 45, h: 56, l: 40 },
          { x: 42, o: 45, c: 58, h: 62, l: 42 },
          { x: 60, o: 58, c: 50, h: 62, l: 38 },
          { x: 78, o: 50, c: 40, h: 54, l: 30 },
          { x: 96, o: 40, c: 35, h: 44, l: 28 },
          { x: 114, o: 35, c: 50, h: 54, l: 32 },
          { x: 132, o: 50, c: 60, h: 66, l: 46 },
          { x: 150, o: 60, c: 55, h: 68, l: 50 },
          { x: 168, o: 55, c: 68, h: 74, l: 52 },
          { x: 186, o: 68, c: 62, h: 74, l: 56 },
          { x: 204, o: 62, c: 50, h: 66, l: 46 },
          { x: 222, o: 50, c: 38, h: 54, l: 32 },
          { x: 240, o: 38, c: 28, h: 42, l: 22 },
          { x: 258, o: 28, c: 20, h: 32, l: 14 },
          { x: 276, o: 20, c: 14, h: 24, l: 8 },
          { x: 294, o: 14, c: 28, h: 32, l: 12 },
          { x: 312, o: 28, c: 22, h: 30, l: 16 },
          { x: 330, o: 22, c: 35, h: 38, l: 20 },
          { x: 348, o: 35, c: 25, h: 38, l: 18 },
          { x: 366, o: 25, c: 18, h: 28, l: 12 },
          { x: 384, o: 18, c: 12, h: 22, l: 6 },
        ].map((bar, i) => {
          const isBullish = bar.c >= bar.o;
          const color = isBullish ? '#22C55E' : '#EF4444';
          const bodyTop = Math.min(bar.o, bar.c);
          const bodyH = Math.abs(bar.c - bar.o) || 1;
          return (
            <g
              key={i}
              className="chart-bar"
              style={{
                animation: `barDraw 0.15s ease-out ${0.2 + i * 0.04}s both`,
                opacity: 0,
              }}
            >
              <line x1={bar.x + 4} y1={bar.h} x2={bar.x + 4} y2={bar.l} stroke={color} strokeWidth="0.7" />
              <rect x={bar.x + 1} y={bodyTop} width="6" height={bodyH} fill={color} rx="0.5" />
            </g>
          );
        })}

        {/* Animated MA lines */}
        <polyline
          points="0,54 24,44 48,50 72,46 96,38 120,42 144,52 168,60 192,60 216,50 240,34 264,24 288,20 312,26 336,28 360,24 384,16"
          fill="none"
          stroke="#DC2626"
          strokeWidth="0.7"
          strokeOpacity="0.5"
          strokeDasharray="3 2"
          className="ma-line"
          style={{ animation: 'maDraw 0.8s ease-out 1.2s both', opacity: 0 }}
        />
        <polyline
          points="0,58 24,50 48,54 72,52 96,44 120,46 144,56 168,64 192,64 216,56 240,42 264,30 288,24 312,30 336,30 360,28 384,18"
          fill="none"
          stroke="#FACC15"
          strokeWidth="0.7"
          strokeOpacity="0.35"
          strokeDasharray="2 2"
          className="ma-line"
          style={{ animation: 'maDraw 0.8s ease-out 1.4s both', opacity: 0 }}
        />

        {/* Support line — fades in after chart */}
        <g className="support-line" style={{ animation: 'fadeSlideIn 0.5s ease-out 2s both', opacity: 0 }}>
          <line x1="0" y1="48" x2="400" y2="48" stroke="#DC2626" strokeWidth="0.6" strokeDasharray="4 2" strokeOpacity="0.6" />
          <text x="403" y="51" fill="#DC2626" fontSize="7" fontFamily="monospace">S1</text>
        </g>

        {/* Resistance line */}
        <g className="support-line" style={{ animation: 'fadeSlideIn 0.5s ease-out 2.2s both', opacity: 0 }}>
          <line x1="0" y1="18" x2="400" y2="18" stroke="#22C55E" strokeWidth="0.6" strokeDasharray="4 2" strokeOpacity="0.6" />
          <text x="403" y="21" fill="#22C55E" fontSize="7" fontFamily="monospace">R1</text>
        </g>
      </svg>

      {/* Pattern label — appears after analysis */}
      <div
        className="mt-2 flex items-center gap-2"
        style={{ animation: 'fadeSlideIn 0.4s ease-out 2.4s both', opacity: 0 }}
      >
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono">
          Double Bottom
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-success/10 border border-success/20 text-success font-mono">
          Bullish Divergence
        </span>
        <span className="text-[9px] text-ink-soft ml-auto">Confidence: 82%</span>
      </div>
    </div>
  );
}

/* ─── Step 2: AI Scanning Panel ─── */
function AIScanningPanel() {
  const indicators = [
    { label: 'Trend', value: 'Bullish', color: 'text-success' },
    { label: 'Momentum', value: 'Strong', color: 'text-success' },
    { label: 'Volume', value: 'Above Avg', color: 'text-warning' },
    { label: 'Volatility', value: 'Moderate', color: 'text-ink-soft' },
  ];

  return (
    <div className="space-y-1.5">
      {indicators.map((ind, i) => (
        <div
          key={ind.label}
          className="flex items-center justify-between bg-[#060606] rounded px-2 py-1.5 border border-[#151515]"
          style={{ animation: `scanLine 0.3s ease-out ${i * 0.15}s both`, opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            {/* Scanning beam */}
            <div className="relative w-3 h-3 flex-shrink-0">
              <div
                className="absolute inset-0 rounded-full border border-accent/30"
                style={{
                  animation: `scanPulse 0.8s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
              <div
                className="absolute inset-0.5 rounded-full bg-accent/20"
                style={{
                  animation: `scanBlink 0.6s ease-in-out ${i * 0.2 + 0.1}s infinite`,
                }}
              />
            </div>
            <span className="text-[10px] text-ink-soft font-mono">{ind.label}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Scanning bar animation */}
            <div className="w-16 h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-accent"
                style={{
                  width: '60%',
                  animation: `scanProgress 1.5s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
            </div>
            <span className={`text-[9px] font-mono font-semibold ${ind.color} w-16 text-right`}>
              {ind.value}
            </span>
          </div>
        </div>
      ))}

      {/* AI thought — typing effect */}
      <div
        className="mt-2 bg-accent/5 border border-accent/10 rounded px-2 py-1.5"
        style={{ animation: 'fadeSlideIn 0.4s ease-out 0.8s both', opacity: 0 }}
      >
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="text-[9px] text-ink-soft font-mono">
            <span className="typing-text">Analysing 26 indicators across 4 timeframes...</span>
            <span
              className="inline-block w-[1px] h-2.5 bg-accent align-middle ml-0.5"
              style={{ animation: 'cursorBlink 0.8s step-end infinite' }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Signal Panel ─── */
function SignalPanel() {
  return (
    <div className="bg-[#060606] rounded-md p-3 border border-success/20">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
            <span className="text-success text-sm font-bold">↑</span>
          </span>
          <div>
            <span className="text-xs font-bold text-white font-mono">BUY EUR/USD</span>
            <div className="flex items-center gap-1">
              <span className="text-[9px] text-success font-bold">87% Confidence</span>
              <span className="text-[8px] text-ink-soft">· 1H Timeframe</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-white font-mono">1.0925</span>
          <div className="text-[9px] text-success">Entry</div>
        </div>
      </div>

      {/* Signal metrics */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Stop Loss', value: '1.0840', sub: '-85 pips' },
          { label: 'Take Profit', value: '1.1165', sub: '+240 pips' },
          { label: 'Risk/Reward', value: '1:2.82', sub: 'Excellent' },
        ].map((m, i) => (
          <div
            key={m.label}
            className="bg-[#0A0A0A] rounded p-1.5 text-center border border-[#1A1A1A]"
            style={{ animation: 'scaleUp 0.3s ease-out 0.3s both', opacity: 0 }}
          >
            <span className="text-[7px] text-ink-soft uppercase tracking-wider block">{m.label}</span>
            <span className="text-[10px] font-mono font-bold text-ink">{m.value}</span>
            <span className="text-[7px] text-ink-soft block">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Risk warning */}
      <div
        className="mt-2 flex items-center gap-1.5 text-[7px] text-warning/80"
        style={{ animation: 'fadeSlideIn 0.3s ease-out 0.6s both', opacity: 0 }}
      >
        <span>⚠</span>
        <span>Signal is an observation — not financial advice. Verify before acting.</span>
      </div>
    </div>
  );
}

/* ─── Step 4: Execution Panel ─── */
function ExecutionPanel() {
  return (
    <div className="bg-[#060606] rounded-md p-3 border border-success/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Checkmark with glow */}
          <span
            className="w-7 h-7 rounded-full bg-success/20 border border-success/40 flex items-center justify-center"
            style={{ boxShadow: '0 0 12px rgba(34,197,94,0.2)' }}
          >
            <span className="text-success text-xs font-bold">✓</span>
          </span>
          <div>
            <span className="text-[10px] font-bold text-white font-mono">Trade Placed</span>
            <span className="text-[9px] text-ink-soft block">Via Your Broker · Order #2847</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-success font-mono font-bold block">LIVE</span>
          <span className="text-[7px] text-ink-soft">Paper Trading</span>
        </div>
      </div>

      {/* Broker connection indicator */}
      <div
        className="mt-2 flex items-center gap-3 text-[8px] text-ink-soft"
        style={{ animation: 'fadeSlideIn 0.4s ease-out 0.2s both', opacity: 0 }}
      >
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          <span>Connected to Broker API</span>
        </div>
        <span>·</span>
        <span>Execution: Manual (Your Control)</span>
        <span>·</span>
        <span className="text-accent font-semibold">You Decide ✓</span>
      </div>
    </div>
  );
}

/* ─── Global Keyframes injected via style tag ─── */
export function PlatformDemoStyles() {
  return (
    <style>{`
      @keyframes barDraw {
        from { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        to { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
      }
      @keyframes maDraw {
        from { opacity: 0; stroke-dashoffset: 400; }
        to { opacity: 1; stroke-dashoffset: 0; }
      }
      .ma-line {
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
      }
      @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes stepFadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scanLine {
        from { opacity: 0; transform: translateX(-10px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scanPulse {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.3); opacity: 0.8; }
      }
      @keyframes scanBlink {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.8; }
      }
      @keyframes scanProgress {
        0% { width: 20%; }
        50% { width: 80%; }
        100% { width: 20%; }
      }
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes scaleUp {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes chartBar {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  );
}
