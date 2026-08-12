import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const tickerData = [
  { sym: 'BTC', name: 'Bitcoin', price: '$67,420' },
  { sym: 'ETH', name: 'Ethereum', price: '$3,485' },
  { sym: 'XAU', name: 'Gold', price: '$2,645.00' },
  { sym: 'SPX', name: 'S&P 500', price: '5,870.00' },
  { sym: 'EUR/USD', name: 'EUR/USD', price: '1.0842' },
  { sym: 'WTI', name: 'Crude Oil', price: '$76.45' },
  { sym: 'NDX', name: 'NASDAQ', price: '20,350.00' },
  { sym: 'SOL', name: 'Solana', price: '$184.50' },
];

const brokers = ['Binance', 'OKX', 'Bybit', 'Kraken', 'Coinbase', 'OANDA', 'IG Markets', 'Interactive Brokers', 'Fidelity', 'Robinhood'];

const faqItems = [
  { q: 'What are AI trading ideas and how do they work?', a: 'They are trade setups our AI finds for you. The AI scans the market, spots a setup, and builds a plan with an entry, stop-loss, and take-profit. You review it and decide whether to trade.' },
  { q: 'Which markets do you cover?', a: 'Crypto, forex, stocks, indices, and commodities — all in one place.' },
  { q: 'How accurate are the AI trade ideas?', a: 'The AI rates each setup with a confidence score so you can judge its strength. No tool is right every time, so always use the stop-loss and your own judgment.' },
  { q: 'Is there a free plan?', a: 'Yes. You can start free with no credit card and get a set number of ideas each day. Upgrade any time for more.' },
  { q: 'How is this different from a signals group?', a: 'A signals group sends a tip. We give you a full plan — entry, stop-loss, take-profit, and a confidence score — plus tools to manage risk.' },
  { q: 'Is this financial advice?', a: 'No. The ideas are for information only. You are always in charge of your own trades.' },
];

const anatomyFields = [
  { field: 'Pair', example: 'BTC / USD', meaning: 'The market to trade' },
  { field: 'Direction', example: 'Long', meaning: 'Buy or sell' },
  { field: 'Entry', example: '68,420', meaning: 'Where to get in' },
  { field: 'Stop-loss', example: '65,800', meaning: 'Where to cut the loss' },
  { field: 'Take-profit', example: '72,100', meaning: 'The target' },
  { field: 'Risk : Reward', example: '1 : 2.4', meaning: 'Reward vs risk' },
  { field: 'Confidence', example: '78%', meaning: 'How strong the setup looks' },
];

const compareData = [
  { feature: 'Ideas found for you', traderai: 'Yes', byHand: 'No', signals: 'Limited' },
  { feature: 'Entry / stop-loss / take-profit', traderai: 'Yes', byHand: 'Manual', signals: 'Sometimes' },
  { feature: 'Confidence score', traderai: 'Yes', byHand: 'No', signals: 'Rare' },
  { feature: 'Crypto, forex & stocks in one place', traderai: 'Yes', byHand: 'Manual', signals: 'Usually one' },
  { feature: 'Built-in risk calculator', traderai: 'Yes', byHand: 'No', signals: 'No' },
  { feature: 'Free to start', traderai: 'Yes', byHand: 'Yes', signals: 'Often paid' },
];

function IdeaCard() {
  return (
    <div className="relative bg-gradient-to-b from-navy to-navy border border-border rounded-[20px] p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] before:absolute before:inset-[-1px] before:rounded-[20px] before:p-[1px] before:bg-gradient-to-br before:from-accent/50 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:pointer-events-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-deep border border-border flex items-center justify-center font-mono text-[11px] font-semibold text-ink-soft">BTC</div>
          <div>
            <div className="font-semibold text-[15px] text-ink">BTC / USD</div>
            <div className="text-xs text-ink-soft">Long setup</div>
          </div>
        </div>
        <span className="font-mono text-[11px] tracking-[0.04em] px-2.5 py-1.5 rounded-full bg-success/10 text-success border border-success/30">AI IDEA</span>
      </div>

      <div className="relative h-[150px] rounded-xl bg-deep border border-border overflow-hidden mb-4">
        <svg viewBox="0 0 400 150" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polyline points="0,95 25,88 50,100 75,90 100,78 125,86 150,70 175,74 200,58 225,64 250,48 275,52 300,36 325,40 350,26 375,30 400,18" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.9" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="4 4" />
          <line x1="0" y1="112" x2="400" y2="112" stroke="#ef4444" strokeWidth="1.4" strokeDasharray="4 4" />
          <line x1="0" y1="22" x2="400" y2="22" stroke="#22c55e" strokeWidth="1.4" strokeDasharray="4 4" />
        </svg>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-accent/15 text-accent border border-accent/30" style={{ top: '70px' }}>ENTRY 68,420</div>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-danger/10 text-danger border border-danger/30" style={{ top: '112px' }}>STOP 65,800</div>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-success/10 text-success border border-success/30" style={{ top: '22px' }}>TARGET 72,100</div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
        <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">Entry</div><div className="font-mono text-[13px] font-semibold text-ink">68,420</div></div>
        <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">Stop-loss</div><div className="font-mono text-[13px] font-semibold text-danger">65,800</div></div>
        <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">Take-profit</div><div className="font-mono text-[13px] font-semibold text-success">72,100</div></div>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="text-[11.5px] text-ink-soft whitespace-nowrap">Confidence</span>
        <div className="flex-1 h-1.5 rounded bg-deep border border-border overflow-hidden"><div className="h-full w-[78%] rounded bg-gradient-to-r from-accent to-accent-hover" /></div>
        <span className="font-mono text-xs font-semibold text-accent">78%</span>
      </div>
      <div className="mt-3.5 text-[10.5px] text-ink-soft text-center tracking-[0.03em]">Illustrative example — not a live trade call</div>
    </div>
  );
}

export default function AITradingIdeas() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AI Trading Ideas — Free AI Trade Signals | Tradvio AI</title>
        <meta name="description" content="Get fresh AI trading ideas across crypto, forex & stocks — with entry, stop-loss, take-profit and a confidence score. Start free, no card needed." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/ai-trading-ideas/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        {/* ═══════════ HERO ═══════════ */}
        <section className="pt-20 md:pt-24 pb-0 overflow-hidden bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                  <span className="w-4 h-px bg-accent" />AI Trading Ideas
                </div>
                <h1 className="text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.08] -tracking-[0.01em] mb-5">
                  AI Trading Ideas, Generated For You
                </h1>
                <p className="text-lg text-muted-dark max-w-[520px] mb-7 leading-relaxed">
                  Our AI scans the markets and hands you ready-to-trade setups — each with a clear entry, stop-loss, and take-profit. No screenshots. No guesswork. Just fresh ideas you can act on.
                </p>
                <div className="flex flex-wrap gap-3.5 items-center">
                  <a href="/get-started/" className="btn btn-primary btn-lg">Get Free AI Trade Ideas</a>
                </div>
                <div className="mt-4 text-[13px] text-ink-soft flex flex-wrap gap-x-3.5 gap-y-1.5 items-center">
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Free to start</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> No credit card</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> No ads</span>
                </div>
              </div>
              <div><IdeaCard /></div>
            </div>
          </div>

          {/* Ticker strip */}
          <div className="border-y border-border bg-navy overflow-hidden mt-16">
            <div className="flex gap-0 w-max animate-marquee">
              {[...tickerData, ...tickerData].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5 py-3.5 px-[26px] border-r border-border font-mono text-[13px] whitespace-nowrap">
                  <span className="text-ink font-semibold">{t.sym}</span>
                  <span className="text-ink-soft">{t.name}</span>
                  <span className="text-ink-soft/70">{t.price}</span>
                  <span className="text-success">▲ 0.00%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT ARE AI TRADING IDEAS ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />What Are AI Trading Ideas
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em] mb-3.5">What are AI trading ideas?</h2>
            </div>
            <div className="max-w-[760px] space-y-4">
              <p className="text-[16.5px] text-muted-dark leading-relaxed">These are ready-made trade setups that software finds for you. Instead of reading charts yourself, the AI checks the market and points out setups worth a look.</p>
              <p className="text-[16.5px] text-muted-dark leading-relaxed">Each one comes with a suggested entry price, a stop-loss to cap your risk, and a take-profit target. You still make the final call — the AI just does the searching. So you spend less time hunting and more time deciding.</p>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />How It Works
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">How our AI finds trade ideas</h2>
              <p className="text-base text-muted-dark mt-2">Every idea goes through four quick steps:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              <div className="absolute top-7 left-[6%] right-[6%] h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0_8px,transparent_8px_16px)] hidden lg:block -z-0" />
              {[
                { num: '01', title: 'Scan the markets', body: 'The AI watches price and market data across crypto, forex, and stocks in real time.' },
                { num: '02', title: 'Spot the setup', body: 'It looks for the patterns and signals that often come before a move.' },
                { num: '03', title: 'Build the plan', body: 'It adds an entry, a stop-loss, and a take-profit, then scores how strong the setup looks.' },
                { num: '04', title: 'Send it to you', body: 'The finished idea lands in your feed, ready to act on.' },
              ].map((s) => (
                <div key={s.num} className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-navy border border-border flex items-center justify-center font-mono text-base font-semibold text-accent mb-[18px]">{s.num}</div>
                  <h3 className="text-[17px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <a href="#anatomy" className="inline-flex items-center gap-1.5 mt-9 text-accent hover:text-accent-hover font-semibold text-sm">See it in action →</a>
          </div>
        </section>

        {/* ═══════════ ANATOMY OF AN IDEA ═══════════ */}
        <section id="anatomy" className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                  <span className="w-4 h-px bg-accent" />Anatomy Of An Idea
                </div>
                <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em] mb-3.5">What an AI trade idea looks like</h2>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">Here's a sample idea. Read it top to bottom: the pair and direction tell you what to trade, the entry tells you where to get in, the stop-loss caps your loss, and the take-profit sets your goal. The confidence score shows how strongly the AI rates the setup.</p>

                <div className="border border-border rounded-2xl overflow-hidden">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">Field</th>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">Example</th>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">What it means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anatomyFields.map((f) => (
                        <tr key={f.field}>
                          <td className="py-3.5 px-5 border-t border-border text-ink font-semibold w-[34%]">{f.field}</td>
                          <td className="py-3.5 px-5 border-t border-border font-mono text-accent w-[24%]">{f.example}</td>
                          <td className="py-3.5 px-5 border-t border-border text-ink-soft">{f.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div><IdeaCard /></div>
            </div>
          </div>
        </section>

        {/* ═══════════ MARKETS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />Markets
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">Ideas across every market</h2>
              <p className="text-base text-muted-dark mt-2">One place for setups across the markets you trade:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: 'Crypto', desc: 'BTC, ETH, and thousands of altcoins.' },
                { name: 'Forex', desc: 'Major, minor, and exotic pairs.' },
                { name: 'Stocks', desc: 'AI stock picks from US and global names.' },
                { name: 'Indices', desc: 'S&P 500, NASDAQ, and more.' },
                { name: 'Commodities', desc: 'Gold, oil, and other staples.' },
              ].map((m) => (
                <div key={m.name} className="bg-navy border border-border rounded-xl p-5">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-deep border border-border flex items-center justify-center mb-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  </div>
                  <div className="font-semibold text-[15px] text-ink mb-1.5">{m.name}</div>
                  <p className="text-[13.5px] text-muted-dark">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FRESH FEED ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />Fresh Feed
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">Fresh ideas, every session</h2>
              <p className="text-base text-muted-dark mt-2">The market never sits still, so neither does the AI. You'll find new AI trading ideas throughout the day as fresh chances appear. Check back any session for the latest picks.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { sym: 'ETH/USD', entry: '3,485', conf: '78%', up: true },
                { sym: 'XAU/USD', entry: '2,645', conf: '64%', up: false },
                { sym: 'EUR/USD', entry: '1.0842', conf: '71%', up: true },
                { sym: 'NDX', entry: '20,350', conf: '82%', up: true },
              ].map((f) => (
                <div key={f.sym} className="bg-navy border border-border rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="font-mono text-[13px] font-semibold text-ink">{f.sym}</span>
                    <span className="text-[9.5px] text-ink-soft tracking-[0.05em] uppercase">Illustrative</span>
                  </div>
                  <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="w-full h-11 mb-2.5">
                    <polyline points={f.up ? "0,45 20,40 40,48 60,32 80,36 100,20 120,26 140,14 160,18 180,8 200,12" : "0,20 20,26 40,18 60,30 80,24 100,38 120,32 140,44 160,38 180,50 200,44"} fill="none" stroke={f.up ? '#dc2626' : '#ef4444'} strokeWidth="2" />
                  </svg>
                  <div className="flex justify-between text-[13px] text-ink-soft">
                    <span>Entry <b className="font-mono text-ink">{f.entry}</b></span>
                    <span className={cn('font-mono font-semibold', f.up ? 'text-success' : 'text-danger')}>{f.conf}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="/get-started/" className="btn btn-primary mt-8">See Today's Ideas</a>
          </div>
        </section>

        {/* ═══════════ WHY US ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />Why Us
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">Why traders choose our AI ideas</h2>
              <p className="text-base text-muted-dark mt-2">Doing it by hand takes hours. And most groups just send you a tip with no plan. Our AI trade signals come with a full setup every time — here's the difference:</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[560px] bg-navy text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">What you get</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-accent font-medium border-b border-border">Tradvio AI</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">By hand</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">Signal groups</th>
                  </tr>
                </thead>
                <tbody>
                  {compareData.map((r) => (
                    <tr key={r.feature}>
                      <td className="py-4 px-5 border-b border-border text-ink font-medium">{r.feature}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px] font-semibold', r.traderai === 'Yes' ? 'text-success' : 'text-ink-soft')}>{r.traderai}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px]', r.byHand === 'No' ? 'text-ink-soft' : 'text-ink-soft')}>{r.byHand}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px]', r.signals === 'No' ? 'text-ink-soft' : r.signals === 'Yes' ? 'text-success font-semibold' : 'text-ink-soft')}>{r.signals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════ SUPPORTING FEATURES ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />Supporting Features
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">Everything you need around each idea</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { title: 'Risk calculator', desc: 'Work out your position size and risk before you enter.' },
                { title: 'Trade journal', desc: 'Log every trade and see what\'s working.' },
                { title: 'Alerts', desc: 'Get a ping the moment a fresh setup appears.' },
              ].map((f) => (
                <div key={f.title} className="bg-navy border border-border rounded-xl p-5">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-deep border border-border flex items-center justify-center mb-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-dark">{f.desc}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover font-semibold text-sm">Explore all features →</a>
          </div>
        </section>

        {/* ═══════════ SOCIAL PROOF ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[600px] mx-auto mb-11 text-center">
              <div className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                Trusted By Traders
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">Trusted by traders</h2>
            </div>

            <div className="flex justify-center gap-16 flex-wrap mb-11">
              {[
                { num: '50,000+', label: 'Traders' },
                { num: '1,000,000+', label: 'Ideas generated' },
                { num: '5', label: 'Markets covered' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-mono text-[30px] font-semibold text-accent mb-1.5">{s.num}</div>
                  <div className="text-[13px] text-ink-soft tracking-[0.03em]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-[820px] mx-auto">
              {[
                { quote: 'It flagged a setup I would have missed and gave me the exact levels to use. Saved me hours.', author: '— Approved customer' },
                { quote: 'The risk calculator with every idea keeps me disciplined. Worth it on its own.', author: '— Approved customer' },
              ].map((q) => (
                <div key={q.author} className="bg-navy border border-border rounded-2xl p-6">
                  <p className="text-[15.5px] text-ink leading-relaxed italic mb-3.5">{q.quote}</p>
                  <div className="text-[13px] text-ink-soft">{q.author}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Broker ticker */}
          <div className="border-y border-border bg-navy overflow-hidden mt-14">
            <div className="flex gap-0 w-max animate-marquee">
              {[...brokers, ...brokers].map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 py-3.5 px-[26px] border-r border-border font-mono text-[13px] whitespace-nowrap">
                  <span className="text-ink font-semibold">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11 mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                FAQ
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">AI trading ideas: FAQ</h2>
            </div>
            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-navy border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {item.q}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.2] max-w-[620px] mx-auto">Start free. Let the AI find your next setup.</h2>
            <a href="/get-started/" className="btn btn-primary btn-lg mt-6">Start Free — Get AI Trade Ideas</a>
            <p className="text-xs text-ink-soft mt-5">For informational purposes only. Not financial advice. Trading involves risk of loss.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
