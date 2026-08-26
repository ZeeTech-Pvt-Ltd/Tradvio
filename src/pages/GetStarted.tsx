import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export default function GetStarted() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Get Started — Free | Tradvio AI</title>
        <meta name="description" content="Create free access to Tradvio AI. Explore AI chart analysis, strategy backtesting and paper trading. No credit card required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tradvioai.com/get-started/" />
      </Helmet>

      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="pt-nav">
        <div className="min-h-[calc(100vh-72px)] bg-deep flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <LeadForm
              formName="homepage_lead"
              title="Start Analysing — Free"
              subtitle="No credit card. No deposit required."
              ctaText="Start Free Access"
              sourcePage="/get-started/"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
