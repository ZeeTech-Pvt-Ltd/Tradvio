const trustCards = [
  {
    icon: '📊',
    title: 'Data Methodology',
    description:
      'How we source, label, and verify every data point on the platform. Full transparency on data providers, update frequencies, and limitations.',
  },
  {
    icon: '🔒',
    title: 'Security',
    description:
      'Encryption at rest and in transit. Access controls, regular security audits, and strict data handling policies.',
  },
  {
    icon: '🛡',
    title: 'Privacy',
    description:
      'We don\'t sell your data. Period. Your personal information and trading activity remain private. Request deletion anytime.',
  },
  {
    icon: '🏛',
    title: 'Regulatory Alignment',
    description:
      'Built with FCA principles in mind. Tradvio AI is a research platform — not a regulated financial services firm.',
  },
];

import { useLanguage } from '../lib/i18n';

export default function TrustCentrePreview() {
  const { t } = useLanguage();
  return (
    <section id="trust-centre" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>{t('tc.title')}</h2>
          <p>{t('tc.sub')}</p>
        </div>

        <div className="grid-2">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="bg-navy border border-border rounded-lg p-6"
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="mb-2">{t('tc.t' + (trustCards.indexOf(card) + 1))}</h3>
              <p className="text-sm text-muted-dark">{t('tc.d' + (trustCards.indexOf(card) + 1))}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
