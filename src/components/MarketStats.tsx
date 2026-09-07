import { marketStats } from '@/lib/data';
import { useLanguage } from '@/lib/i18n';

export default function MarketStats() {
  const { t } = useLanguage();
  return (
    <section id="market-stats" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>{t('ms.title')}</h2>
          <p>
            {t('ms.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {marketStats.map((stat, si) => (
            <div
              key={t('ms.l' + (si + 1))}
              className="bg-navy border border-border rounded-lg p-6 text-center hover:border-border-light transition-colors"
            >
              <p className="text-3xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-muted-dark mb-3 leading-relaxed">{t('ms.l' + (si + 1))}</p>
              <p className="text-xs text-ink-soft italic">Source: {stat.source}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-soft mt-8 max-w-2xl mx-auto">
          {t('ms.note')}
        </p>
      </div>
    </section>
  );
}
