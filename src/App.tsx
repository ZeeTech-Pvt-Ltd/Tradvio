import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import Leaderboard from '@/components/Leaderboard';
import TrustBar from '@/components/TrustBar';
import TradingPerformance from '@/components/TradingPerformance';
import PlatformTools from '@/components/PlatformTools';
import HowItWorks from '@/components/HowItWorks';
import PerformanceFeatures from '@/components/PerformanceFeatures';
import WhyTradvioAI from '@/components/WhyTradvioAI';
import CanCannot from '@/components/CanCannot';
import DataTransparency from '@/components/DataTransparency';
import TrustCentrePreview from '@/components/TrustCentrePreview';
import Testimonials from '@/components/Testimonials';
import MarketStats from '@/components/MarketStats';
import FAQ from '@/components/FAQ';
import ThankYou from '@/components/ThankYou';

import GetStarted from '@/pages/GetStarted';
import LeaderboardPage from '@/pages/LeaderboardPage';
import TradersPage from '@/pages/TradersPage';
import AITradingPlatform from '@/pages/AITradingPlatform';
import Footer from '@/components/Footer';
import { generateAllStructuredData } from '@/lib/structured-data';
import { faqs, howToSteps, platformTools } from '@/lib/data';

const structuredData = generateAllStructuredData(
  faqs,
  howToSteps,
  platformTools.map((t) => ({ name: t.title, description: t.description, url: t.href }))
);

export default function App() {
  // Render thank-you page for /thank-you/ path
  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you/') {
    return <ThankYou />;
  }

  // Render get-started page for /get-started/ path
  if (typeof window !== 'undefined' && window.location.pathname === '/get-started/') {
    return <GetStarted />;
  }

  // Render leaderboard page for /leaderboard/ path
  if (typeof window !== 'undefined' && window.location.pathname === '/leaderboard/') {
    return <LeaderboardPage />;
  }

  // Render traders page for /trader/ path
  if (typeof window !== 'undefined' && window.location.pathname === '/trader/') {
    return <TradersPage />;
  }

  // Render AI Trading Platform page
  if (typeof window !== 'undefined' && window.location.pathname === '/ai-trading-platform/') {
    return <AITradingPlatform />;
  }
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        {/* Primary Meta */}
        <title>Tradvio AI | AI Market Research, Chart Analysis & Strategy Testing</title>
        <meta name="description" content="AI-assisted market research and strategy testing for traders. Analyse charts, backtest strategies and practise with paper trading. Free to start. No profit guarantees." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://traderai.ai/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tradvio AI" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Tradvio AI | AI Market Research, Chart Analysis & Strategy Testing" />
        <meta property="og:description" content="AI-assisted market research and strategy testing. Analyse charts, backtest strategies, practise with paper trading. Free to start." />
        <meta property="og:url" content="https://traderai.ai/" />
        <meta property="og:image" content="https://traderai.ai/wp-content/uploads/static-home/og-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tradvio AI | AI Market Research, Chart Analysis & Strategy Testing" />
        <meta name="twitter:description" content="AI-assisted market research and strategy testing. Free to start." />

        {/* hreflang */}
        <link rel="alternate" hrefLang="en-GB" href="https://traderai.ai/" />
        <link rel="alternate" hrefLang="en" href="https://traderai.ai/" />
        <link rel="alternate" hrefLang="ja" href="https://traderai.ai/ja/" />
        <link rel="alternate" hrefLang="tr-TR" href="https://traderai.ai/tr/" />
        <link rel="alternate" hrefLang="es-ES" href="https://traderai.ai/es/" />
        <link rel="alternate" hrefLang="de-DE" href="https://traderai.ai/de/" />
        <link rel="alternate" hrefLang="pt-PT" href="https://traderai.ai/pt/" />
        <link rel="alternate" hrefLang="fr-FR" href="https://traderai.ai/fr/" />
        <link rel="alternate" hrefLang="it-IT" href="https://traderai.ai/it/" />
        <link rel="alternate" hrefLang="pl-PL" href="https://traderai.ai/pl/" />
        <link rel="alternate" hrefLang="x-default" href="https://traderai.ai/" />

        {/* Verification */}
        <meta name="google-site-verification" content="rX163GsGmt7DjLaEoPlX_DPHJ_fIbSOXlYLvvuzGbAA" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLHY0BZWMX" />
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BLHY0BZWMX');`}
        </script>

        {/* Microsoft Clarity */}
        <script>
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xy1feronjb");`}
        </script>

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content">
        <Hero />
        <Leaderboard />
        <TrustBar />
        <TradingPerformance />
        <PlatformTools />
        <HowItWorks />
        <PerformanceFeatures />
        <WhyTradvioAI />
        <CanCannot />
        <DataTransparency />
        <TrustCentrePreview />
        <Testimonials />
        <MarketStats />
        <FAQ />
      </main>

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="sticky-mobile-cta">
        <a href="/get-started/" className="btn btn-primary w-full">
          Start Free Analysis
        </a>
      </div>
    </>
  );
}
