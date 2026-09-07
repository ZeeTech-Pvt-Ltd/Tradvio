import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('nf.metaTitle')}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-deep flex items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(220,38,38,0.3),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="text-center relative z-10">
          {/* Big 404 */}
          <div className="text-[clamp(6rem,18vw,12rem)] font-bold leading-none text-accent/15 mb-2 select-none font-mono">
            404
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] -tracking-[0.02em] mb-4">
            {t('nf.h1a')}<br />
            <span className="text-accent">{t('nf.h1b')}</span>
          </h1>

          <p className="text-muted-dark leading-relaxed max-w-md mx-auto mb-8">
            {t('nf.body')}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/" className="btn btn-primary btn-lg">{t('nf.home')}</a>
            <a href="/leaderboard/" className="btn btn-secondary btn-lg">{t('tr.viewLeaderboard')}</a>
          </div>

          <p className="text-xs text-ink-soft mt-8">
            {t('nf.help')} <a href="/contact-us/" className="text-accent hover:text-accent-hover">{t('nf.contact')}</a>
          </p>
        </div>
      </div>
    </>
  );
}
