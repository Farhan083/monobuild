import type { Metadata } from 'next';
import { products } from '@/lib/content/products';
import { Badge, StatusBadge, Button } from '@/components/ui';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Kilo — Precision Weight Tracking',
  description: 'Kilo is a minimalist, data-first weight management platform. No noise, no gamification — just clean data and intelligent insights.',
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function KiloPage() {
  const product = products.find((p) => p.slug === 'kilo');
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Button variant="ghost" size="sm" href="/products">← Products</Button>
            <span className="w-4 h-px bg-[var(--color-outline-variant)]" />
            <StatusBadge status={product.status} />
          </div>
          <h1 className="display-lg text-[var(--color-on-surface)] mb-4">{product.name}</h1>
          <p className="headline-sm gradient-text mb-8">{product.tagline}</p>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[56ch] mb-10">{product.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" href="#" icon={<ArrowRight />}>Get Early Access</Button>
            <Button variant="secondary" size="lg" href="/contact">Request Demo</Button>
          </div>
        </div>
        {/* Decorative glow */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.06] blur-3xl pointer-events-none hidden lg:block rounded-full"
          style={{ background: 'var(--gradient-primary)' }} />
      </section>

      {/* Features */}
      {product.features && (
        <section className="section-padding bg-[var(--color-surface-container-low)]">
          <div className="max-w-6xl mx-auto px-6">
            <span className="eyebrow block mb-4">Features</span>
            <h2 className="headline-md text-[var(--color-on-surface)] mb-12 max-w-[22ch]">
              Every detail, considered.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map((feature) => (
                <div key={feature.title} className="flex gap-4 p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-high)]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(192,193,255,0.1)] flex items-center justify-center shrink-0 text-[var(--color-primary)] mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="title-md text-[var(--color-on-surface)] mb-1.5">{feature.title}</h3>
                    <p className="body-sm text-[var(--color-on-surface-variant)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      {product.techStack && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-6">
            <span className="eyebrow block mb-4">Built With</span>
            <h2 className="headline-md text-[var(--color-on-surface)] mb-10">The right tool for each job.</h2>
            <div className="flex flex-wrap gap-3">
              {product.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm px-4 py-2">{tech}</Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="headline-md text-[var(--color-on-surface)] mb-4">Interested in Kilo?</h2>
          <p className="body-lg text-[var(--color-on-surface-variant)] mb-8 max-w-[40ch] mx-auto">
            We&apos;re in early development. Get on the list and be the first to try it.
          </p>
          <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight />}>Join the Waitlist</Button>
        </div>
      </section>
    </>
  );
}
