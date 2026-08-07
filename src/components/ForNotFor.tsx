const forCards = [
  {
    title: 'Self-directed traders',
    description:
      'You make your own decisions. You want better analysis, not someone else telling you what to do.',
  },
  {
    title: 'Beginners who want to learn safely',
    description:
      'Paper trading and backtesting let you practise without risking capital. Learn before you go live.',
  },
  {
    title: 'Strategy builders and testers',
    description:
      'Turn ideas into testable rules. See how they perform against history before committing real money.',
  },
];

const notForCards = [
  {
    title: 'People seeking "get rich quick" shortcuts',
    description:
      'There are no shortcuts in trading. If a platform promises easy money, that\'s a red flag — not how we operate.',
  },
  {
    title: 'Those unwilling to learn risk management',
    description:
      'Risk controls are built into every tool. If you plan to ignore them, this platform is not for you.',
  },
  {
    title: 'Anyone expecting guaranteed returns',
    description:
      'No technology guarantees profits. Anyone who says otherwise is not being honest with you.',
  },
];

export default function ForNotFor() {
  return (
    <section id="for-not-for" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Who This Is For — And Who It Is Not</h2>
          <p>
            Tradvio AI works best for certain types of traders. Here&apos;s how to know if
            it&apos;s right for you.
          </p>
        </div>

        <div className="grid-2">
          {/* For */}
          <div>
            <h3 className="flex items-center gap-2 text-success mb-6">
              <span>✓</span> Tradvio AI Is For
            </h3>
            <div className="space-y-4">
              {forCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-navy border border-success/20 rounded-md p-5"
                >
                  <h4 className="text-ink font-semibold mb-1">{card.title}</h4>
                  <p className="text-sm text-muted-dark">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="flex items-center gap-2 text-warning mb-6">
              <span>⚠</span> Tradvio AI Is NOT For
            </h3>
            <div className="space-y-4">
              {notForCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-navy border border-warning/20 rounded-md p-5"
                >
                  <h4 className="text-ink font-semibold mb-1">{card.title}</h4>
                  <p className="text-sm text-muted-dark">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
