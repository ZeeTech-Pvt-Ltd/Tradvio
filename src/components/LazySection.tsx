import { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  /** Approximate rendered height to reserve space and avoid layout shift. */
  minHeight?: string;
}

/**
 * LazySection — defers rendering (and therefore JS execution) of a section
 * until it scrolls close to the viewport. Cuts initial main-thread work,
 * long tasks, and unused-JS execution on content-heavy pages.
 */
export default function LazySection({ children, minHeight = '400px' }: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? children : null}
    </div>
  );
}
