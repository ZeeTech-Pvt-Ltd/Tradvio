import { glossaryTerms } from '@/lib/data';

export default function Glossary() {
  return (
    <section id="glossary" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Trading &amp; AI Glossary</h2>
          <p>
            Clear definitions of key terms. Helps you understand the platform — and helps
            search engines surface accurate answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {glossaryTerms.map((term) => (
            <article
              key={term.term}
              className="bg-navy border border-border rounded-lg p-5 hover:border-border-light transition-colors"
            >
              <h3 className="text-ink font-semibold mb-2">
                <dfn>{term.term}</dfn>
              </h3>
              <p className="text-sm text-muted-dark leading-relaxed">{term.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
