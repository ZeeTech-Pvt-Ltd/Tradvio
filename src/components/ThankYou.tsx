import { useLanguage } from '@/lib/i18n';

const nextSteps = ['ty.st1', 'ty.st2', 'ty.st3', 'ty.st4'];

export default function ThankYou() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-deep flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/15 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-success"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          {t('ty.h1')}
        </h1>

        <p className="text-lg text-muted-dark leading-relaxed mb-2">
          {t('ty.p1')}
        </p>

        <p className="text-sm text-ink-soft mb-10 leading-relaxed">
          {t('ty.p2')}
        </p>

        {/* Next steps */}
        <div className="bg-navy border border-border rounded-lg p-6 text-left mb-10">
          <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">
            {t('ty.next')}
          </h3>
          <ol className="space-y-3">
            {nextSteps.map((key, i) => (
              <li key={key} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-soft leading-snug">{t(key)}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <a
          href="/"
          className="inline-flex items-center gap-2 btn btn-primary btn-lg"
        >
          {t('ty.cta')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
          </svg>
        </a>

        {/* Risk reminder */}
        <p className="mt-8 text-xs text-ink-soft max-w-md mx-auto leading-relaxed">
          <strong className="text-warning">{t('ty.riskLabel')}</strong> {t('ty.riskBody')}
        </p>
      </div>
    </div>
  );
}
