import PlatformDemo, { PlatformDemoStyles } from './PlatformDemo';
import { useLanguage } from '@/lib/i18n';

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="section bg-surface">
      <PlatformDemoStyles />

      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>{t('hiw.title')}</h2>
          <p>{t('hiw.sub')}</p>
        </div>

        {/* Animated Platform Demo — 2 screens side by side */}
        <div className="mb-16">
          <PlatformDemo />
        </div>

      </div>
    </section>
  );
}
