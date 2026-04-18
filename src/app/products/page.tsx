import type { Metadata } from 'next';
import { products, productsPageContent } from '@/lib/content/products';
import { Badge, StatusBadge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products built by Monobuild with architectural intent.',
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function ProductsPage() {
  const { eyebrow, headline, subheadline } = productsPageContent;
  return (
    <>
      <section className="pt-32 pb-20" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-6">{eyebrow}</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-6 whitespace-pre-line max-w-[16ch]">{headline}</h1>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[52ch]">{subheadline}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col gap-5 p-8 rounded-[var(--radius-2xl)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(10,14,25,0.5)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="headline-sm text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">{product.name}</h2>
                  <StatusBadge status={product.status} />
                </div>
                <p className="title-sm text-[var(--color-primary)] opacity-80">{product.tagline}</p>
                <p className="body-md text-[var(--color-on-surface-variant)]">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
                {product.techStack && (
                  <div className="pt-4 border-t border-[rgba(70,69,84,0.2)]">
                    <p className="label-sm text-[var(--color-on-surface-variant)] opacity-60 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span key={tech} className="label-sm px-2 py-1 rounded-[var(--radius-sm)] bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface-variant)]">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {product.status === 'live' && (
                  <Button variant="ghost" size="sm" href={product.href} icon={<ArrowRight />} className="self-start mt-2">
                    Learn more
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
