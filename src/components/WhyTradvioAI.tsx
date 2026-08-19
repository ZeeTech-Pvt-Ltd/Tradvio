import { useEffect, useRef, useState } from 'react';

const VIDEO_SRC = 'https://tradvio.com/step-4-plug-in.mp4';

const checkItems = [
  'Customizable dashboard',
  'Speedy real-time alerts',
  'Easy deposits & withdrawals',
  '24/7 reliable user support',
  'Multi-asset diversification',
  'Continuous AI improvement',
];

export default function WhyTradvioAI() {
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  // Only load the external video once it scrolls near the viewport —
  // keeps several MB off the initial page load.
  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVideoVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVideoVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section bg-deep">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text + Checklist */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.15] mb-6">
              Why Tradvio AI <span className="text-accent">Stands Out</span>
            </h2>
            <p className="text-muted-dark leading-relaxed text-lg mb-6">
              Our platform is designed for smooth performance across devices. This allows users to trade anytime with a stable internet connection.
            </p>
            <p className="text-muted-dark leading-relaxed text-lg mb-8">
              It has{' '}
              <strong className="text-ink">no registration fees, hidden charges, or commissions</strong>
              . Beginners can invest with smaller capital to avoid heavy risks.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-dark group">
                  <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Video (lazy-loaded on scroll) */}
          <div
            ref={videoWrapRef}
            className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl min-h-[320px] md:min-h-[400px] bg-navy border border-border flex items-center justify-center"
          >
            {videoVisible ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            ) : (
              <div className="text-ink-soft text-sm flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Loading preview…
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
