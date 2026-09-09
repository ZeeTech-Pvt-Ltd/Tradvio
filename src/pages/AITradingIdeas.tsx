import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';

const tickerData = [
  { sym: 'BTC', name: 'ti.tk1', price: '$67,420' },
  { sym: 'ETH', name: 'ti.tk2', price: '$3,485' },
  { sym: 'XAU', name: 'ti.tk3', price: '$2,645.00' },
  { sym: 'SPX', name: 'ti.tk4', price: '5,870.00' },
  { sym: 'EUR/USD', name: 'ti.tk5', price: '1.0842' },
  { sym: 'WTI', name: 'ti.tk6', price: '$76.45' },
  { sym: 'NDX', name: 'ti.tk7', price: '20,350.00' },
  { sym: 'SOL', name: 'ti.tk8', price: '$184.50' },
];

const brokers = ['Binance', 'OKX', 'Bybit', 'Kraken', 'Coinbase', 'OANDA', 'IG Markets', 'Interactive Brokers', 'Fidelity', 'Robinhood'];

const faqItems = [
  { q: 'ti.fq1', a: 'ti.fa1' },
  { q: 'ti.fq2', a: 'ti.fa2' },
  { q: 'ti.fq3', a: 'ti.fa3' },
  { q: 'ti.fq4', a: 'ti.fa4' },
  { q: 'ti.fq5', a: 'ti.fa5' },
  { q: 'ti.fq6', a: 'ti.fa6' },
];

const anatomyFields = [
  { field: 'ti.af1f', example: 'BTC / USD', meaning: 'ti.af1m' },
  { field: 'ti.af2f', example: 'ti.long', meaning: 'ti.af2m' },
  { field: 'ti.af3f', example: '68,420', meaning: 'ti.af3m' },
  { field: 'ti.af4f', example: '65,800', meaning: 'ti.af4m' },
  { field: 'ti.af5f', example: '72,100', meaning: 'ti.af5m' },
  { field: 'ti.af6f', example: '1 : 2.4', meaning: 'ti.af6m' },
  { field: 'ti.af7f', example: '78%', meaning: 'ti.af7m' },
];

// Value codes stay English so the cn() comparisons below keep working; display via t('ti.v.' + code).
const compareData = [
  { feature: 'ti.cd1f', traderai: 'Yes', byHand: 'No', signals: 'Limited' },
  { feature: 'ti.cd2f', traderai: 'Yes', byHand: 'Manual', signals: 'Sometimes' },
  { feature: 'ti.cd3f', traderai: 'Yes', byHand: 'No', signals: 'Rare' },
  { feature: 'ti.cd4f', traderai: 'Yes', byHand: 'Manual', signals: 'Usually one' },
  { feature: 'ti.cd5f', traderai: 'Yes', byHand: 'No', signals: 'No' },
  { feature: 'ti.cd6f', traderai: 'Yes', byHand: 'Yes', signals: 'Often paid' },
];

const howSteps = [
  { num: '01', title: 'ti.s1t', body: 'ti.s1b' },
  { num: '02', title: 'ti.s2t', body: 'ti.s2b' },
  { num: '03', title: 'ti.s3t', body: 'ti.s3b' },
  { num: '04', title: 'ti.s4t', body: 'ti.s4b' },
];

const marketCards = [
  { name: 'ti.mk1t', desc: 'ti.mk1d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9.5 9.5c0-1 1-1.5 2.5-1.5s2.5.5 2.5 1.5-1 1.5-2.5 1.5-2.5.5-2.5 1.5 1 1.5 2.5 1.5 2.5-.5 2.5-1.5"/></svg> },
  { name: 'ti.mk2t', desc: 'ti.mk2d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10h10l-4-4M17 14H7l4 4"/></svg> },
  { name: 'ti.mk3t', desc: 'ti.mk3d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="3" height="12" rx="1"/><rect x="10" y="4" width="3" height="16" rx="1"/><rect x="17" y="10" width="3" height="10" rx="1"/></svg> },
  { name: 'ti.mk4t', desc: 'ti.mk4d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { name: 'ti.mk5t', desc: 'ti.mk5d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6h-6l3-6z"/><path d="M9 8h6l4 6c-1.5 1-4 2-7 2s-5.5-1-7-2l4-6z"/><path d="M12 16v6"/></svg> },
];

const freshFeed = [
  { sym: 'ETH/USD', entry: '3,485', conf: '78%', up: true },
  { sym: 'XAU/USD', entry: '2,645', conf: '64%', up: false },
  { sym: 'EUR/USD', entry: '1.0842', conf: '71%', up: true },
  { sym: 'NDX', entry: '20,350', conf: '82%', up: true },
];

const supportingFeatures = [
  { title: 'ti.sf1t', desc: 'ti.sf1d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h5M12 18h.01"/></svg> },
  { title: 'ti.sf2t', desc: 'ti.sf2d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { title: 'ti.sf3t', desc: 'ti.sf3d', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a5 5 0 00-5 5c0 4-2 5-2 6h14c0-1-2-2-2-6a5 5 0 00-5-5z"/><path d="M10 19a2 2 0 004 0"/></svg> },
];

const socialStats = [
  { num: '50,000+', label: 'ti.stat1' },
  { num: '1,000,000+', label: 'ti.stat2' },
  { num: '5', label: 'ti.stat3' },
];

const quotes = [
  { quote: 'ti.q1', author: 'ti.q1a' },
  { quote: 'ti.q2', author: 'ti.q2a' },
];

function IdeaCard({ variant = 'hero' }: { variant?: 'hero' | 'anatomy' }) {
  const { t } = useLanguage();
  return (
    <div className="relative bg-gradient-to-b from-navy to-navy border border-border rounded-[20px] p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] before:absolute before:inset-[-1px] before:rounded-[20px] before:p-[1px] before:bg-gradient-to-br before:from-accent/50 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:pointer-events-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-deep border border-border flex items-center justify-center font-mono text-[11px] font-semibold text-ink-soft">BTC</div>
          <div>
            <div className="font-semibold text-[15px] text-ink">BTC / USD</div>
            <div className="text-xs text-ink-soft">{t('ti.longSetup')}</div>
          </div>
        </div>
        <span className="font-mono text-[11px] tracking-[0.04em] px-2.5 py-1.5 rounded-full bg-success/10 text-success border border-success/30">{t('ti.aiIdea')}</span>
      </div>

      <div className="relative h-[150px] rounded-xl bg-deep border border-border overflow-hidden mb-4">
        <svg viewBox="0 0 400 150" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polyline points="0,95 25,88 50,100 75,90 100,78 125,86 150,70 175,74 200,58 225,64 250,48 275,52 300,36 325,40 350,26 375,30 400,18" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.9" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="4 4" />
          <line x1="0" y1="112" x2="400" y2="112" stroke="#ef4444" strokeWidth="1.4" strokeDasharray="4 4" />
          <line x1="0" y1="22" x2="400" y2="22" stroke="#22c55e" strokeWidth="1.4" strokeDasharray="4 4" />
        </svg>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-accent/15 text-accent border border-accent/30" style={{ top: '70px' }}>{t('ti.bEntry')} 68,420</div>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-danger/10 text-danger border border-danger/30" style={{ top: '112px' }}>{t('ti.bStop')} 65,800</div>
        <div className="absolute right-2.5 text-[10.5px] font-mono px-1.5 py-0.5 rounded translate-y-[-50%] bg-success/10 text-success border border-success/30" style={{ top: '22px' }}>{t('ti.bTarget')} 72,100</div>
      </div>

      {variant === 'hero' ? (
        <div className="grid grid-cols-3 gap-2.5 mb-3.5">
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af3f')}</div><div className="font-mono text-[13px] font-semibold text-ink">68,420</div></div>
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af4f')}</div><div className="font-mono text-[13px] font-semibold text-danger">65,800</div></div>
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af5f')}</div><div className="font-mono text-[13px] font-semibold text-success">72,100</div></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2.5 mb-3.5">
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af6f')}</div><div className="font-mono text-[13px] font-semibold text-ink">1 : 2.4</div></div>
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af2f')}</div><div className="font-mono text-[13px] font-semibold text-success">{t('ti.long')}</div></div>
          <div className="bg-deep border border-border rounded-[9px] p-2.5"><div className="text-[10.5px] text-ink-soft mb-1">{t('ti.af7f')}</div><div className="font-mono text-[13px] font-semibold text-ink">78%</div></div>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        <span className="text-[11.5px] text-ink-soft whitespace-nowrap">{t('ti.af7f')}</span>
        <div className="flex-1 h-1.5 rounded bg-deep border border-border overflow-hidden"><div className="h-full w-[78%] rounded bg-gradient-to-r from-accent to-accent-hover" /></div>
        <span className="font-mono text-xs font-semibold text-accent">78%</span>
      </div>
      <div className="mt-3.5 text-[10.5px] text-ink-soft text-center tracking-[0.03em]">{t('ti.illustrative')}</div>
    </div>
  );
}

export default function AITradingIdeas() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('meta.ideas')}</title>
        <meta name="description" content="Get fresh AI trading ideas across crypto, forex & stocks - with entry, stop-loss, take-profit and a confidence score. Start free, no card needed." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/ai-trading-ideas/" />
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
                  <span className="w-4 h-px bg-accent" />{t('ti.heroEyebrow')}
                </div>
                <h1 className="text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.08] -tracking-[0.01em] mb-5">
                  {t('ti.h1')}
                </h1>
                <p className="text-lg text-muted-dark max-w-[520px] mb-7 leading-relaxed">
                  {t('ti.heroBody')}
                </p>
                <div className="flex flex-wrap gap-3.5 items-center">
                  <a href="/get-started/" className="btn btn-primary btn-lg">{t('ti.cta')}</a>
                </div>
                <div className="mt-4 text-[13px] text-ink-soft flex flex-wrap gap-x-3.5 gap-y-1.5 items-center">
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('ti.b1')}</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('ti.b2')}</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> {t('ti.b3')}</span>
                </div>
              </div>
              <div><IdeaCard /></div>
            </div>
          </div>

          {/* Ticker strip */}
          <div className="border-y border-border bg-navy overflow-hidden mt-16">
            <div className="flex gap-0 w-max animate-marquee">
              {[...tickerData, ...tickerData].map((tk, i) => (
                <div key={i} className="flex items-center gap-2.5 py-3.5 px-[26px] border-r border-border font-mono text-[13px] whitespace-nowrap">
                  <span className="text-ink font-semibold">{tk.sym}</span>
                  <span className="text-ink-soft">{t(tk.name)}</span>
                  <span className="text-ink-soft/70">{tk.price}</span>
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
                <span className="w-4 h-px bg-accent" />{t('ti.whatEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em] mb-3.5">{t('ti.whatH2')}</h2>
            </div>
            <div className="max-w-[760px] space-y-4">
              <p className="text-[16.5px] text-muted-dark leading-relaxed">{t('ti.whatP1')}</p>
              <p className="text-[16.5px] text-muted-dark leading-relaxed">{t('ti.whatP2')}</p>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />{t('ti.hiwEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.hiwH2')}</h2>
              <p className="text-base text-muted-dark mt-2">{t('ti.hiwSub')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              <div className="absolute top-7 left-[6%] right-[6%] h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0_8px,transparent_8px_16px)] hidden lg:block -z-0" />
              {howSteps.map((s) => (
                <div key={s.num} className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-navy border border-border flex items-center justify-center font-mono text-base font-semibold text-accent mb-[18px]">{s.num}</div>
                  <h3 className="text-[17px] font-semibold mb-2">{t(s.title)}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{t(s.body)}</p>
                </div>
              ))}
            </div>
            <a href="#anatomy" className="inline-flex items-center gap-1.5 mt-9 text-accent hover:text-accent-hover font-semibold text-sm">{t('ti.seeAction')}</a>
          </div>
        </section>

        {/* ═══════════ ANATOMY OF AN IDEA ═══════════ */}
        <section id="anatomy" className="py-24 bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                  <span className="w-4 h-px bg-accent" />{t('ti.anatEyebrow')}
                </div>
                <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em] mb-3.5">{t('ti.anatH2')}</h2>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">{t('ti.anatP')}</p>

                <div className="border border-border rounded-2xl overflow-hidden">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thField')}</th>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thExample')}</th>
                        <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thMeaning')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anatomyFields.map((f) => (
                        <tr key={f.field}>
                          <td className="py-3.5 px-5 border-t border-border text-ink font-semibold w-[34%]">{t(f.field)}</td>
                          <td className="py-3.5 px-5 border-t border-border font-mono text-accent w-[24%]">{f.example === 'ti.long' ? t(f.example) : f.example}</td>
                          <td className="py-3.5 px-5 border-t border-border text-ink-soft">{t(f.meaning)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div><IdeaCard variant="anatomy" /></div>
            </div>
          </div>
        </section>

        {/* ═══════════ MARKETS ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />{t('ti.mkEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.mkH2')}</h2>
              <p className="text-base text-muted-dark mt-2">{t('ti.mkSub')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {marketCards.map((m) => (
                <div key={m.name} className="bg-navy border border-border rounded-xl p-5">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-accent/10 border border-accent/20 flex items-center justify-center mb-3.5 text-accent">
                    {m.icon}
                  </div>
                  <div className="font-semibold text-[15px] text-ink mb-1.5">{t(m.name)}</div>
                  <p className="text-[13.5px] text-muted-dark">{t(m.desc)}</p>
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
                <span className="w-4 h-px bg-accent" />{t('ti.ffEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.ffH2')}</h2>
              <p className="text-base text-muted-dark mt-2">{t('ti.ffSub')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {freshFeed.map((f) => (
                <div key={f.sym} className="bg-navy border border-border rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="font-mono text-[13px] font-semibold text-ink">{f.sym}</span>
                    <span className="text-[9.5px] text-ink-soft tracking-[0.05em] uppercase">{t('ti.illustrativeShort')}</span>
                  </div>
                  <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="w-full h-11 mb-2.5">
                    <polyline points={f.up ? "0,45 20,40 40,48 60,32 80,36 100,20 120,26 140,14 160,18 180,8 200,12" : "0,20 20,26 40,18 60,30 80,24 100,38 120,32 140,44 160,38 180,50 200,44"} fill="none" stroke={f.up ? '#dc2626' : '#ef4444'} strokeWidth="2" />
                  </svg>
                  <div className="flex justify-between text-[13px] text-ink-soft">
                    <span>{t('ti.af3f')} <b className="font-mono text-ink">{f.entry}</b></span>
                    <span className={cn('font-mono font-semibold', f.up ? 'text-success' : 'text-danger')}>{f.conf}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="/get-started/" className="btn btn-primary mt-8">{t('ti.seeToday')}</a>
          </div>
        </section>

        {/* ═══════════ WHY US ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                <span className="w-4 h-px bg-accent" />{t('ti.whyEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.whyH2')}</h2>
              <p className="text-base text-muted-dark mt-2">{t('ti.whySub')}</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[560px] bg-navy text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thGet')}</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-accent font-medium border-b border-border">{t('ti.thTradvio')}</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thByHand')}</th>
                    <th className="text-center py-4 px-5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft font-medium border-b border-border">{t('ti.thSignals')}</th>
                  </tr>
                </thead>
                <tbody>
                  {compareData.map((r) => (
                    <tr key={r.feature}>
                      <td className="py-4 px-5 border-b border-border text-ink font-medium">{t(r.feature)}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px] font-semibold', r.traderai === 'Yes' ? 'text-success' : 'text-ink-soft')}>{t('ti.v.' + r.traderai)}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px]', r.byHand === 'No' ? 'text-ink-soft' : 'text-ink-soft')}>{t('ti.v.' + r.byHand)}</td>
                      <td className={cn('py-4 px-5 border-b border-border text-center font-mono text-[13px]', r.signals === 'No' ? 'text-ink-soft' : r.signals === 'Yes' ? 'text-success font-semibold' : 'text-ink-soft')}>{t('ti.v.' + r.signals)}</td>
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
                <span className="w-4 h-px bg-accent" />{t('ti.sfEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.sfH2')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {supportingFeatures.map((f) => (
                <div key={f.title} className="bg-navy border border-border rounded-xl p-5">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-accent/10 border border-accent/20 flex items-center justify-center mb-3.5 text-accent">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-2">{t(f.title)}</h3>
                  <p className="text-sm text-muted-dark">{t(f.desc)}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover font-semibold text-sm">{t('ti.explore')}</a>
          </div>
        </section>

        {/* ═══════════ SOCIAL PROOF ═══════════ */}
        <section className="py-24 bg-navy border-y border-border">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="max-w-[600px] mx-auto mb-11 text-center">
              <div className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-soft mb-3.5">
                {t('ti.tbEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.tbH2')}</h2>
            </div>

            <div className="flex justify-center gap-16 flex-wrap mb-11">
              {socialStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-mono text-[30px] font-semibold text-accent mb-1.5">{s.num}</div>
                  <div className="text-[13px] text-ink-soft tracking-[0.03em]">{t(s.label)}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-[820px] mx-auto">
              {quotes.map((q) => (
                <div key={q.author} className="bg-navy border border-border rounded-2xl p-6">
                  <p className="text-[15.5px] text-ink leading-relaxed italic mb-3.5">{t(q.quote)}</p>
                  <div className="text-[13px] text-ink-soft">{t(q.author)}</div>
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
                {t('ti.faqEyebrow')}
              </div>
              <h2 className="text-[clamp(26px,3vw,34px)] font-bold leading-[1.18] -tracking-[0.01em]">{t('ti.faqH2')}</h2>
            </div>
            <div className="max-w-[760px] mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-navy border border-border rounded-xl p-5 group" open={i === 0}>
                  <summary className="cursor-pointer font-semibold text-[15.5px] text-ink list-none flex justify-between items-center">
                    {t(item.q)}
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 group-open:hidden">+</span>
                    <span className="font-mono text-lg text-accent ml-4 flex-shrink-0 hidden group-open:block">–</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">{t(item.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="py-[100px] text-center bg-deep">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.2] max-w-[620px] mx-auto">{t('ti.closeH2')}</h2>
            <a href="/get-started/" className="btn btn-primary btn-lg mt-6">{t('ti.closeCta')}</a>
            <p className="text-xs text-ink-soft mt-5">{t('ti.closeNote')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
