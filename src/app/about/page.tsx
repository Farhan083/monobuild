import type { Metadata } from 'next';
import { aboutContent } from '@/lib/content/about';
import { Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About the Founder',
  description: 'The story behind Monobuild — built on engineering discipline, architectural thinking, and a quiet obsession with craft.',
};

export default function AboutPage() {
  const { hero, principles, timeline, skills } = aboutContent;
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pt-32 pb-20"
        style={{ background: 'var(--gradient-hero), var(--color-background)' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="eyebrow block mb-6">{hero.eyebrow}</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-4">{hero.name}</h1>
          <p className="headline-sm gradient-text mb-8">{hero.title}</p>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[60ch] whitespace-pre-line leading-relaxed">
            {hero.bio}
          </p>
          <p className="mt-6 label-md text-[var(--color-on-surface-variant)] opacity-60">{hero.location}</p>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding-sm bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="label-md text-[var(--color-on-surface-variant)] mb-6">Technology & Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">{skill}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-[var(--color-surface-container-low)]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-4">Principles</span>
          <h2 className="headline-md text-[var(--color-on-surface)] mb-12 max-w-[20ch]">
            The way we think about building.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-5 p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-high)]">
                <div className="w-8 h-8 rounded-full bg-[rgba(192,193,255,0.08)] flex items-center justify-center shrink-0 text-[var(--color-primary)] label-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="title-md text-[var(--color-on-surface)] mb-2">{p.title}</h3>
                  <p className="body-sm text-[var(--color-on-surface-variant)]">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-4">Timeline</span>
          <h2 className="headline-md text-[var(--color-on-surface)] mb-12">The journey so far.</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-[var(--color-outline-variant)] opacity-20 hidden md:block" />

            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.event} className="flex gap-6 md:gap-10 items-start">
                  <div className="shrink-0 w-16 text-right">
                    <span className="label-md text-[var(--color-primary)]">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-6 h-6 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background)] items-center justify-center shrink-0 mt-0.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="title-lg text-[var(--color-on-surface)] mb-1">{item.event}</h3>
                    <p className="body-sm text-[var(--color-on-surface-variant)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
