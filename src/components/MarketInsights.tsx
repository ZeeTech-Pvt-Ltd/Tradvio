export default function MarketInsights() {
  return (
    <section className="section bg-deep relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.25),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-5">
          Trade Smarter with <span className="text-accent">AI-Powered</span><br />
          Market Insights
        </h2>
        <p className="text-lg text-muted-dark leading-relaxed max-w-2xl mx-auto mb-8">
          Explore a smarter way to approach the markets with our AI trading platform.
          Analyze market data, discover potential trading opportunities, and gain clearer
          insights with intelligent AI-powered tools — all from one simple platform.
          Whether you&rsquo;re reviewing the market or looking for your next setup,
          everything you need is in one place.
        </p>
        <a href="/ai-trading-platform/" className="btn btn-primary btn-lg">
          Explore Our Trading Platform
        </a>
      </div>
    </section>
  );
}
