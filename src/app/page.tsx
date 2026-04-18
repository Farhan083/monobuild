import type { Metadata } from 'next';
import { homeContent } from '@/lib/content/home';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Monobuild — Engineering with intent.',
  description:
    'Monobuild crafts precision-engineered software — tools, products, and platforms designed with architectural rigor and quiet authority.',
};

// ── Icon components (no external dep needed) ────────────────────────────────
function IconCpu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" rx="1" /><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}
function IconTerminal() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  cpu: <IconCpu />,
  layers: <IconLayers />,
  terminal: <IconTerminal />,
  github: <IconGithub />,
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  const { hero } = homeContent;
  return (
    <section
      className="relative min-h-screen flex items-center pt-24"
      style={{ background: 'var(--gradient-hero), var(--color-background)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--color-outline-variant) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="eyebrow">{hero.eyebrow}</span>
            <span className="w-8 h-px bg-[var(--color-primary)] opacity-40" />
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ec86e] animate-pulse" />
              <span className="label-sm text-[var(--color-on-surface-variant)]">Available for projects</span>
            </span>
          </div>

          <h1
            className="animate-fade-up mb-6"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="display-lg text-[var(--color-on-surface)] block whitespace-pre-line">
              {hero.headline}
            </span>
          </h1>

          <p
            className="body-lg text-[var(--color-on-surface-variant)] max-w-[52ch] mb-10 animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            {hero.subheadline}
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <Button variant="primary" size="lg" href={hero.cta.href} icon={<ArrowRight />}>
              {hero.cta.label}
            </Button>
            <Button variant="ghost" size="lg" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none hidden xl:block"
          style={{ background: 'var(--gradient-primary)' }} />
      </div>
    </section>
  );
}

function StatsSection() {
  const { stats } = homeContent;
  return (
    <section className="bg-[var(--color-surface-container-lowest)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="display-sm gradient-text mb-1">{stat.value}</div>
              <div className="label-md text-[var(--color-on-surface-variant)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { services } = homeContent;
  return (
    <section className="section-padding bg-[var(--color-surface-container-low)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="eyebrow block mb-4">{services.eyebrow}</span>
          <h2 className="headline-lg text-[var(--color-on-surface)] whitespace-pre-line max-w-[20ch]">
            {services.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.items.map((item) => (
            <Card key={item.id} hover className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-[var(--radius-lg)] bg-[rgba(192,193,255,0.08)] flex items-center justify-center text-[var(--color-primary)]">
                {iconMap[item.icon]}
              </div>
              <div>
                <h3 className="title-md text-[var(--color-on-surface)] mb-2">{item.title}</h3>
                <p className="body-sm text-[var(--color-on-surface-variant)]">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWorkSection() {
  const { featuredWork } = homeContent;
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="eyebrow block mb-4">{featuredWork.eyebrow}</span>
          <h2 className="headline-lg text-[var(--color-on-surface)]">{featuredWork.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredWork.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden rounded-[var(--radius-2xl)] p-8 bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_16px_60px_rgba(10,14,25,0.5)] block"
            >
              <Badge variant="primary" className="mb-4">{item.tag}</Badge>
              <h3 className="headline-sm text-[var(--color-on-surface)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
              <p className="body-md text-[var(--color-on-surface-variant)]">{item.description}</p>
              <div className="mt-6 flex items-center gap-2 text-[var(--color-primary)] label-md">
                View project
                <ArrowRight />
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--radius-2xl)]"
                style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(128,131,255,0.05), transparent 60%)' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-padding bg-[var(--color-surface-container-lowest)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="eyebrow block mb-6">Ready to Build?</span>
        <h2 className="headline-lg text-[var(--color-on-surface)] mb-6 max-w-[20ch] mx-auto">
          Have a project that needs to exist?
        </h2>
        <p className="body-lg text-[var(--color-on-surface-variant)] mb-10 max-w-[44ch] mx-auto">
          We only take on work we believe in. If that&apos;s you, let&apos;s talk.
        </p>
        <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight />}>
          Start a Conversation
        </Button>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <CtaSection />
    </>
  );
}
