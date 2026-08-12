import { Helmet } from 'react-helmet-async';
import LeadForm from '@/components/LeadForm';

export default function GetStarted() {
  return (
    <>
      <Helmet>
        <title>Get Started — Free | Tradvio AI</title>
        <meta name="description" content="Create free access to Tradvio AI. Explore AI chart analysis, strategy backtesting and paper trading. No credit card required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traderai.ai/get-started/" />
      </Helmet>

      <div className="min-h-screen bg-deep flex items-center justify-center px-4 py-12">
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
    </>
  );
}
