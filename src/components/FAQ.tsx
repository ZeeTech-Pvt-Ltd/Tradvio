import { useState } from 'react';
import { cn } from '@/lib/utils';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Split into two columns so expanding one doesn't push the paired column
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section id="faq" className="section bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[leftFaqs, rightFaqs].map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={cn(
                      'border border-border rounded-md overflow-hidden bg-navy transition-colors',
                      isOpen && 'bg-medium-navy'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-ink font-semibold"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={cn(
                          'text-xl flex-shrink-0 ml-4 transition-transform duration-fast',
                          isOpen && 'rotate-45'
                        )}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-4 text-sm text-muted-dark leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
