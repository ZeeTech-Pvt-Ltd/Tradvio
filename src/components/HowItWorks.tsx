import PlatformDemo, { PlatformDemoStyles } from './PlatformDemo';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-surface">
      <PlatformDemoStyles />

      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="section-header">
          <h2>How It Works — See It in Action</h2>
          <p>Two screens. Four steps. Full transparency at every stage.</p>
        </div>

        {/* Animated Platform Demo — 2 screens side by side */}
        <div className="mb-16">
          <PlatformDemo />
        </div>

      </div>
    </section>
  );
}
