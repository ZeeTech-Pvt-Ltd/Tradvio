interface FAQ {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
}

/* ─── Organization — Full E-E-A-T Signals ───────────────── */
export function generateOrganizationSchema(): object {
  return {
    '@type': 'Organization',
    '@id': 'https://tradvioai.com/#organization',
    name: 'Tradvio AI',
    alternateName: 'TradvioAI',
    url: 'https://tradvioai.com/',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://tradvioai.com/#logo',
      url: 'https://tradvioai.com/wp-content/uploads/2025/12/Tradvio-AI-logo-1.webp',
      width: 320,
      height: 64,
    },
    description:
      'AI-assisted market research and strategy testing platform. Chart analysis, strategy builder, backtesting, paper trading and risk management for self-directed traders.',
    foundingDate: '2019',
    email: 'support@tradvioai.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@tradvioai.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/traderai',
      'https://www.linkedin.com/company/traderai',
      'https://www.youtube.com/@traderai',
    ],
  };
}

/* ─── Person — Founder / Author E-E-A-T ─────────────────── */
export function generatePersonSchema(): object {
  return {
    '@type': 'Person',
    '@id': 'https://tradvioai.com/#founder',
    name: 'Tradvio AI Team',
    jobTitle: 'Platform Team',
    worksFor: { '@id': 'https://tradvioai.com/#organization' },
    description:
      'Team of market analysts and software engineers building AI-assisted research tools for self-directed traders.',
  };
}

/* ─── WebSite + SearchAction (Sitelinks Searchbox) ───────── */
export function generateWebsiteSchema(): object {
  return {
    '@type': 'WebSite',
    '@id': 'https://tradvioai.com/#website',
    url: 'https://tradvioai.com/',
    name: 'Tradvio AI',
    inLanguage: 'en-GB',
    publisher: { '@id': 'https://tradvioai.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://tradvioai.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ─── WebPage — Full Rich Signals ────────────────────────── */
export function generateWebPageSchema(): object {
  return {
    '@type': 'WebPage',
    '@id': 'https://tradvioai.com/#webpage',
    url: 'https://tradvioai.com/',
    name: 'Tradvio AI | AI Market Research, Chart Analysis & Strategy Testing',
    description:
      'AI-assisted market research and strategy testing for traders. Analyse charts, backtest strategies and practise with paper trading.',
    inLanguage: 'en-GB',
    isPartOf: { '@id': 'https://tradvioai.com/#website' },
    about: { '@id': 'https://tradvioai.com/#organization' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://tradvioai.com/wp-content/uploads/static-home/og-home.jpg',
      width: 1200,
      height: 630,
    },
    datePublished: '2019-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    reviewedBy: { '@id': 'https://tradvioai.com/#founder' },
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: ['/html/head/title', '/html/head/meta[@name="description"]/@content'],
    },
    breadcrumb: { '@id': 'https://tradvioai.com/#breadcrumb' },
    mainEntity: [
      { '@id': 'https://tradvioai.com/#faq' },
      { '@id': 'https://tradvioai.com/#howto' },
    ],
  };
}

/* ─── BreadcrumbList ─────────────────────────────────────── */
export function generateBreadcrumbSchema(): object {
  return {
    '@type': 'BreadcrumbList',
    '@id': 'https://tradvioai.com/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tradvioai.com/',
      },
    ],
  };
}

/* ─── SoftwareApplication ────────────────────────────────── */
export function generateSoftwareAppSchema(): object {
  return {
    '@type': 'SoftwareApplication',
    '@id': 'https://tradvioai.com/#software',
    name: 'Tradvio AI',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'AI-assisted market research and strategy testing platform. Chart analysis, strategy builder, backtesting, paper trading and risk management. Research only — does not execute trades or provide financial advice.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    author: { '@id': 'https://tradvioai.com/#organization' },
    datePublished: '2019-01-01',
  };
}

/* ─── FAQPage — 12 Questions for Depth ───────────────────── */
export function generateFAQSchema(faqs: FAQ[]): object {
  return {
    '@type': 'FAQPage',
    '@id': 'https://tradvioai.com/#faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/* ─── HowTo — How It Works Section ───────────────────────── */
export function generateHowToSchema(steps: HowToStep[]): object {
  return {
    '@type': 'HowTo',
    '@id': 'https://tradvioai.com/#howto',
    name: 'How to Use Tradvio AI for Market Research',
    description:
      'Four risk-aware steps to research markets, test strategies, and make informed trading decisions using AI-assisted tools.',
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/* ─── AboutPage Reference ────────────────────────────────── */
export function generateAboutPageSchema(): object {
  return {
    '@type': 'AboutPage',
    '@id': 'https://tradvioai.com/about-us/#aboutpage',
    url: 'https://tradvioai.com/about-us/',
    name: 'About Tradvio AI',
    about: { '@id': 'https://tradvioai.com/#organization' },
  };
}

/* ─── ItemList — Platform Tools ──────────────────────────── */
export function generateItemListSchema(tools: { name: string; description: string; url: string }[]): object {
  return {
    '@type': 'ItemList',
    '@id': 'https://tradvioai.com/#platform-tools',
    name: 'Tradvio AI Platform Tools',
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.description,
        url: `https://tradvioai.com${tool.url}`,
        applicationCategory: 'FinanceApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'GBP',
        },
      },
    })),
  };
}

/* ─── Review — Expert Review Section ────────────────────── */
export function generateReviewSchema(): object {
  return {
    '@type': 'Review',
    '@id': 'https://tradvioai.com/#expert-review',
    name: 'Expert Review: Tradvio AI Platform',
    author: { '@id': 'https://tradvioai.com/#founder' },
    itemReviewed: { '@id': 'https://tradvioai.com/#software' },
    reviewBody:
      'Our team combines trading experience with software engineering expertise. Every feature is designed with risk awareness built in. All AI outputs reviewed for accuracy and bias. Risk disclosures on every tool and result. Data labelling verified before publication. Regular methodology and performance audits conducted.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.5',
      bestRating: '5',
    },
    publisher: { '@id': 'https://tradvioai.com/#organization' },
    datePublished: '2019-01-01',
  };
}

/* ─── Aggregate All ──────────────────────────────────────── */
export function generateAllStructuredData(
  faqs: FAQ[],
  howToSteps: HowToStep[],
  tools: { name: string; description: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateOrganizationSchema(),
      generatePersonSchema(),
      generateWebsiteSchema(),
      generateWebPageSchema(),
      generateBreadcrumbSchema(),
      generateSoftwareAppSchema(),
      generateAboutPageSchema(),
      generateReviewSchema(),
      generateFAQSchema(faqs),
      generateHowToSchema(howToSteps),
      generateItemListSchema(tools),
    ],
  };
}
