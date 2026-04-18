import type { Metadata } from 'next';
import { experiments, labContent } from '@/lib/content/lab';
import { Badge, StatusBadge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Experiments & Lab',
  description: 'The Monobuild Lab — a living repository of R&D, prototypes, and engineering curiosities explored in the open.',
};

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function LabPage() {
  const { eyebrow, headline, subheadline } = labContent;

  const statusOrder = ['active', 'ongoing', 'completed', 'shelved'];
  const sorted = [...experiments].sort(
    (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  );

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-6">{eyebrow}</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-6 whitespace-pre-line max-w-[16ch]">{headline}</h1>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[52ch]">{subheadline}</p>
        </div>
      </section>

      {/* Experiments grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((exp) => (
              <div
                key={exp.id}
                className="group flex flex-col gap-4 p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <StatusBadge status={exp.status} />
                  <span className="label-sm text-[var(--color-on-surface-variant)] opacity-50">{exp.date}</span>
                </div>

                <div className="flex-1">
                  <h3 className="title-lg text-[var(--color-on-surface)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {exp.title}
                    {exp.href && (
                      <span className="inline-flex ml-2 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLinkIcon />
                      </span>
                    )}
                  </h3>
                  <p className="body-sm text-[var(--color-on-surface-variant)]">{exp.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy note */}
      <section className="section-padding-sm bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[56ch]">
            <span className="eyebrow block mb-4">On Experimentation</span>
            <p className="body-lg text-[var(--color-on-surface-variant)]">
              Not every experiment ships. Many are just questions we needed to answer, patterns we needed to understand, or ideas we needed to exhaust. We share them because opaque R&D is wasted R&D.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
