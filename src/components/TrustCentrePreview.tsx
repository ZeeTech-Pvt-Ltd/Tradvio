const trustCards = [
  {
    icon: '📊',
    title: 'Data Methodology',
    description:
      'How we source, label, and verify every data point on the platform. Full transparency on data providers, update frequencies, and limitations.',
    href: '/performance-methodology/',
  },
  {
    icon: '🔒',
    title: 'Security',
    description:
      'Encryption at rest and in transit. Access controls, regular security audits, and strict data handling policies.',
    href: '/trust-centre/',
  },
  {
    icon: '🛡',
    title: 'Privacy',
    description:
      'We don\'t sell your data. Period. Your personal information and trading activity remain private. Request deletion anytime.',
    href: '/privacy-policy/',
  },
  {
    icon: '🏛',
    title: 'Regulatory Alignment',
    description:
      'Built with FCA principles in mind. Tradvio AI is a research platform — not a regulated financial services firm.',
    href: '/trust-centre/',
  },
];

export default function TrustCentrePreview() {
  return (
    <section id="trust-centre" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Built With Trust at the Centre</h2>
          <p>
            Transparency isn&apos;t a marketing claim — it&apos;s how we build every feature.
          </p>
        </div>

        <div className="grid-2">
          {trustCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="bg-navy border border-border rounded-lg p-6 hover:border-border-light hover:-translate-y-0.5 hover:shadow-card-lg transition-all duration-fast group"
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="mb-2 group-hover:text-accent transition-colors">{card.title}</h3>
              <p className="text-sm text-muted-dark mb-3">{card.description}</p>
              <span className="text-sm font-medium text-accent">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
