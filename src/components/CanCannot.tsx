const helpsWith = [
  'Market pattern analysis and trend identification',
  'Strategy backtesting on historical data',
  'Signal screening with transparent confidence ratings',
  'Risk parameter setting and exposure tracking',
  'Paper trading to practise without real capital',
  'Performance tracking with methodology transparency',
];

const doesNot = [
  'Guarantee trading profits - no technology can',
  'Eliminate risk from trading',
  'Execute trades or hold client funds',
  'Provide financial or investment advice',
  'Predict market movements with certainty',
  'Replace your own research and judgment',
];

import { useLanguage } from '../lib/i18n';

export default function CanCannot() {
  const { t } = useLanguage();
  return (
    <section id="can-cannot" className="section">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>{t('cc.title')}</h2>
          <p>{t('cc.sub')}</p>
        </div>

        <div className="grid-2">
          {/* Helps With */}
          <div className="bg-navy border border-border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-success mb-6">
              <span>✓</span> {t('cc.h1')}
            </h3>
            <ul className="space-y-3">
              {helpsWith.map((item, ci) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                  <span className="text-success flex-shrink-0 mt-0.5">✓</span>
                  {t('cc.can' + (ci + 1))}
                </li>
              ))}
            </ul>
          </div>

          {/* Does NOT */}
          <div className="bg-navy border border-border rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-danger mb-6">
              <span>-</span> {t('cc.h2')}
            </h3>
            <ul className="space-y-3">
              {doesNot.map((item, ci) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                  <span className="text-danger flex-shrink-0 mt-0.5">✕</span>
                  {t('cc.cannot' + (ci + 1))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
