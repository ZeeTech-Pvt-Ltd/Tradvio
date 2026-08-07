const testimonials = [
  {
    quote:
      'The chart analyser gives me a structured second opinion. I still make my own calls, but having AI flag levels I might have missed has made me a more thorough trader.',
    name: 'James D.',
    initials: 'JD',
    role: 'Retail Trader',
    experience: '3 years experience',
    rating: 5,
    date: '2 weeks ago',
    tool: 'AI Chart Analyser',
    avatarBg: 'bg-blue-600',
  },
  {
    quote:
      'Paper trading before going live was the best advice. I spent two months testing strategies with virtual funds. It saved me from some expensive beginner mistakes.',
    name: 'Sarah M.',
    initials: 'SM',
    role: 'Part-Time Trader',
    experience: '1 year experience',
    rating: 5,
    date: '1 month ago',
    tool: 'Paper Trading',
    avatarBg: 'bg-purple-600',
  },
  {
    quote:
      'I like that every number has a label. Live, delayed, backtested — I know what I\'m looking at. Most platforms blur these lines. Transparency matters.',
    name: 'Alex K.',
    initials: 'AK',
    role: 'Independent Trader',
    experience: '5 years experience',
    rating: 4,
    date: '3 weeks ago',
    tool: 'Data Transparency',
    avatarBg: 'bg-emerald-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Aggregate rating stars */}
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-warning" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-ink">4.7</span>
            <span className="text-xs text-ink-soft">· Based on 200+ reviews</span>
          </div>
          <h2>What Traders Say</h2>
          <p>Real feedback from platform users. Individual experiences — trading outcomes vary.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-navy border border-border rounded-xl p-6 flex flex-col hover:border-border-light transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Header: Avatar + Name + Rating */}
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center flex-shrink-0 ring-2 ring-white/10`}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-ink">{t.name}</span>
                    {/* Verified badge */}
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-[9px] text-accent font-medium">Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {/* Stars */}
                    <div className="flex items-center gap-px">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-2.5 h-2.5 ${star <= t.rating ? 'text-warning' : 'text-[#333]'}`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-ink-soft">·</span>
                    <span className="text-[10px] text-ink-soft">{t.date}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-4">
                <div className="relative">
                  <svg className="w-5 h-5 text-accent/20 absolute -top-1 -left-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.167 0-2.25-.567-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.167 0-2.25-.567-2.917-1.179z" />
                  </svg>
                  <p className="text-sm text-muted-dark leading-relaxed pl-5">
                    {t.quote}
                  </p>
                </div>
              </blockquote>

              {/* Footer: Tool tag + experience */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                {/* Tool badge */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/15 text-[10px] text-accent font-medium">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  {t.tool}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] text-ink-soft">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {t.experience}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-ink-soft mt-8 max-w-2xl mx-auto">
          Sample feedback from platform users. Individual results vary. Trading involves risk of loss.
        </p>
      </div>
    </section>
  );
}
