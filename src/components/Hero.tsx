export default function Hero() {
  return (
    <section className="relative pt-[calc(72px+4rem)] pb-16 md:pb-0 bg-deep text-white overflow-hidden">
      {/* Red radial glows */}
      <div
        className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)' }}
      />
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="py-8 md:py-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-accent uppercase mb-4 bg-accent-light px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI-Assisted Market Research
            </span>

            <h1 className="text-white max-w-[600px] mb-4">
              Analyse Markets. Test Strategies.
              <br />
              <span className="text-accent">Decide With Clarity.</span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-[540px]">
              Tradvio AI is a research and analysis platform — not a broker and not a shortcut.
              Upload charts, ask research questions, build and backtest strategies, and practise
              with paper trading before risking real capital.
            </p>

            <div className="flex gap-4 flex-wrap mb-6">
              <a href="#lead-form" className="btn btn-primary btn-lg group">
                Start Free Analysis
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/45">
              <span className="flex items-center gap-1.5">
                <span className="text-success font-bold text-sm">&#10003;</span> Free to start
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-success font-bold text-sm">&#10003;</span> No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-success font-bold text-sm">&#10003;</span> Paper trading first
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-success font-bold text-sm">&#10003;</span> Data labels on everything
              </span>
            </div>
          </div>

          {/* Right — Compact Platform Preview */}
          <div className="relative mx-auto lg:mx-0 w-full pb-8 md:pb-0">
            <div
              className="absolute -inset-4 rounded-2xl opacity-40 blur-2xl -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)' }}
            />
            <div className="relative rounded-lg overflow-hidden border border-[#2A2A2A] bg-[#0D0D0D] shadow-card-xl">
              {/* Top bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-[#111111] border-b border-[#222]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <span className="text-[9px] text-[#555] uppercase tracking-[0.15em] font-medium">Tradvio AI · Research Terminal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              </div>
              {/* Content */}
              <div className="flex">
                <div className="w-[100px] flex-shrink-0 border-r border-[#222] bg-[#0A0A0A] p-2">
                  <p className="text-[7px] text-[#555] uppercase tracking-[0.15em] font-bold mb-1 px-1">Watchlist</p>
                  {[
                    { pair: 'EUR/USD', price: '1.0925', change: '+0.18%', up: true },
                    { pair: 'GBP/USD', price: '1.2680', change: '+0.32%', up: true },
                    { pair: 'BTC/USD', price: '67,420', change: '-1.54%', up: false },
                    { pair: 'SPX', price: '5,782', change: '+0.09%', up: true },
                    { pair: 'XAU/USD', price: '2,341', change: '+0.47%', up: true },
                    { pair: 'AAPL', price: '194.20', change: '-0.61%', up: false },
                  ].map((item) => (
                    <div key={item.pair} className="flex justify-between items-center py-0.5 px-1 rounded hover:bg-[#141414] cursor-pointer">
                      <span className="text-[8px] text-ink-soft font-mono">{item.pair}</span>
                      <span className={`text-[8px] font-mono tabular-nums ${item.up ? 'text-success' : 'text-danger'}`}>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-2.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono">EUR/USD</span>
                      <span className="text-[10px] text-success font-mono font-bold">1.0925</span>
                      <span className="text-[9px] text-success/80">+0.18%</span>
                    </div>
                    <div className="flex gap-0.5">
                      {['1M','5M','15M','1H','4H'].map(tf => (
                        <span key={tf} className={`px-1.5 py-0.5 rounded text-[8px] font-mono ${tf === '1H' ? 'bg-accent/20 text-accent' : 'text-[#555]'}`}>{tf}</span>
                      ))}
                    </div>
                  </div>
                  {/* Mini chart */}
                  <div className="bg-[#080808] rounded-md p-2 border border-[#1A1A1A]">
                    <svg viewBox="0 0 400 80" className="w-full h-auto">
                      {[0,1,2,3].map(i => <line key={`g${i}`} x1="0" y1={i*26} x2="400" y2={i*26} stroke="#1A1A1A" strokeWidth="0.5" />)}
                      {[
                        {x:6,o:60,c:52,h:64,l:48},{x:24,o:52,c:45,h:56,l:40},{x:42,o:45,c:58,h:62,l:42},{x:60,o:58,c:50,h:62,l:38},
                        {x:78,o:50,c:40,h:54,l:30},{x:96,o:40,c:35,h:44,l:28},{x:114,o:35,c:50,h:54,l:32},{x:132,o:50,c:60,h:66,l:46},
                        {x:150,o:60,c:55,h:68,l:50},{x:168,o:55,c:68,h:74,l:52},{x:186,o:68,c:62,h:74,l:56},{x:204,o:62,c:50,h:66,l:46},
                        {x:222,o:50,c:38,h:54,l:32},{x:240,o:38,c:28,h:42,l:22},{x:258,o:28,c:20,h:32,l:14},{x:276,o:20,c:14,h:24,l:8},
                        {x:294,o:14,c:28,h:32,l:12},{x:312,o:28,c:22,h:30,l:16},{x:330,o:22,c:35,h:38,l:20},{x:348,o:35,c:25,h:38,l:18},
                        {x:366,o:25,c:18,h:28,l:12},{x:384,o:18,c:12,h:22,l:6},
                      ].map((bar,i) => {
                        const isBullish = bar.c >= bar.o;
                        const color = isBullish ? '#22C55E' : '#EF4444';
                        const bodyTop = Math.min(bar.o, bar.c);
                        const bodyH = Math.abs(bar.c - bar.o) || 1;
                        return (
                          <g key={i}>
                            <line x1={bar.x+4} y1={bar.h} x2={bar.x+4} y2={bar.l} stroke={color} strokeWidth="0.7" />
                            <rect x={bar.x+1} y={bodyTop} width="6" height={bodyH} fill={color} rx="0.5" />
                          </g>
                        );
                      })}
                      <polyline points="0,54 24,44 48,50 72,46 96,38 120,42 144,52 168,60 192,60 216,50 240,34 264,24 288,20 312,26 336,28 360,24 384,16" fill="none" stroke="#DC2626" strokeWidth="0.7" strokeOpacity="0.5" strokeDasharray="3 2" />
                    </svg>
                  </div>
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded p-1.5 text-center">
                      <p className="text-[7px] text-[#555] uppercase">Signal</p>
                      <span className="text-[10px] font-mono font-bold text-success">BUY 87%</span>
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded p-1.5 text-center">
                      <p className="text-[7px] text-[#555] uppercase">S/R</p>
                      <span className="text-[10px] font-mono font-bold text-white">1.0840</span>
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded p-1.5 text-center">
                      <p className="text-[7px] text-[#555] uppercase">Risk</p>
                      <span className="text-[10px] font-mono font-bold text-warning">1:2.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-1 bg-[#111111] border-t border-[#222] text-[7px] font-mono text-[#444]">
                <span>Data: <span className="text-success">● LIVE</span></span>
                <span>Latency: 12ms</span>
                <span className="text-ink-soft">Paper Trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
