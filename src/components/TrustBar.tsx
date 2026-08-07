const trustItems = [
  {
    icon: '⚠',
    iconBg: 'bg-warning-bg',
    title: 'No Profit Guarantees',
    description: 'We never promise returns. Markets are unpredictable.',
  },
  {
    icon: '⚙',
    iconBg: 'bg-[rgba(161,161,161,0.08)]',
    title: 'Verified Data Labels',
    description: 'Live, delayed, backtested or illustrative — always shown.',
  },
  {
    icon: '✓',
    iconBg: 'bg-success-bg',
    title: 'Paper Trading First',
    description: 'Practise with virtual funds before risking real capital.',
  },
  {
    icon: '★',
    iconBg: 'bg-accent-light',
    title: 'Transparent Methodology',
    description: 'See the assumptions behind every result and analysis.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-navy border-b border-border py-6">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-2">
              <div
                className={`w-7 h-7 rounded-sm flex items-center justify-center text-sm flex-shrink-0 ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <div>
                <strong className="block text-[0.85rem] font-bold text-ink leading-tight">
                  {item.title}
                </strong>
                <span className="text-xs text-ink-soft leading-tight">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
