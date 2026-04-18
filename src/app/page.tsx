import type { Metadata } from 'next';
import { homeContent } from '@/lib/content/home';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Monobuild — Engineering with intent.',
  description:
    'Monobuild crafts precision-engineered software — tools, products, and platforms designed with architectural rigor and quiet authority.',
};

// ── Minimal SVG icons (no external dep) ─────────────────────────────────────

function IconCpu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" rx="1" /><rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}
function IconTerminal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  cpu: <IconCpu />, layers: <IconLayers />, terminal: <IconTerminal />, github: <IconGithub />,
};

// ── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  const { hero } = homeContent;
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: 'var(--gradient-hero), var(--color-background)' }}
    >
      {/* Subtle grid — engineering precision feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(42,50,69,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(42,50,69,0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
        {/* Availability indicator — tiny, precise */}
        <div className="flex items-center gap-2.5 mb-10 animate-fade-in">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
            style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}
          />
          <span className="label-md text-[var(--color-on-surface-variant)]">
            Available for projects — {new Date().getFullYear()}
          </span>
        </div>

        {/* Headline — pure white, maximum weight, no color */}
        <h1 className="animate-fade-up delay-100 mb-8" style={{ opacity: 0 }}>
          <span className="display-lg text-[var(--color-on-surface)] block">
            We build systems
          </span>
          <span className="display-lg text-[var(--color-on-surface-variant)] block" style={{ opacity: 0.5 }}>
            that endure.
          </span>
        </h1>

        <p
          className="body-lg text-[var(--color-on-surface-variant)] max-w-[48ch] mb-12 animate-fade-up delay-200"
          style={{ opacity: 0 }}
        >
          {hero.subheadline}
        </p>

        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up delay-300"
          style={{ opacity: 0 }}
        >
          <Button variant="primary" size="lg" href={hero.cta.href} icon={<ArrowRight />}>
            {hero.cta.label}
          </Button>
          <Button variant="ghost" size="lg" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </Button>
        </div>

        {/* Bottom metadata row */}
        <div className="flex items-center gap-6 mt-20 pt-8 border-t border-[var(--color-outline-variant)]">
          <span className="mono text-[var(--color-on-surface-variant)] opacity-40">Monobuild / Studio</span>
          <span className="w-px h-4 bg-[var(--color-outline-variant)]" />
          <span className="mono text-[var(--color-on-surface-variant)] opacity-40">Est. 2024</span>
          <span className="w-px h-4 bg-[var(--color-outline-variant)]" />
          <span className="mono text-[var(--color-on-surface-variant)] opacity-40">India</span>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { stats } = homeContent;
  return (
    <section className="bg-[var(--color-surface-container-lowest)] border-y border-[var(--color-outline-variant)]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i < stats.length - 1 ? 'md:border-r md:border-[var(--color-outline-variant)]' : ''}>
              {/* Stat value: pure white, heavy — no blue */}
              <div
                className="font-bold text-[var(--color-on-surface)] mb-1"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
              >
                {stat.value}
              </div>
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
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left: heading — asymmetric editorial layout */}
          <div className="lg:col-span-1">
            <span className="eyebrow block mb-5">{services.eyebrow}</span>
            <h2 className="headline-lg text-[var(--color-on-surface)] mb-6 whitespace-pre-line">
              {services.headline}
            </h2>
            <p className="body-sm text-[var(--color-on-surface-variant)]">
              We don&apos;t do average. Every service we offer is backed by deep expertise and architectural thinking.
            </p>
          </div>

          {/* Right: service cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-colors duration-300 group"
              >
                {/* Icon: dark container, grey icon — no blue fill */}
                <div className="w-9 h-9 rounded-[var(--radius-lg)] bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="title-lg text-[var(--color-on-surface)] mb-2">{item.title}</h3>
                  <p className="body-sm text-[var(--color-on-surface-variant)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedWorkSection() {
  const { featuredWork } = homeContent;
  return (
    <section className="section-padding bg-[var(--color-surface-container-lowest)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow block mb-4">{featuredWork.eyebrow}</span>
            <h2 className="headline-lg text-[var(--color-on-surface)]">{featuredWork.headline}</h2>
          </div>
          <Button variant="ghost" size="sm" href="/products" className="shrink-0 hidden sm:flex">
            All products →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredWork.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden flex flex-col gap-5 p-8 rounded-[var(--radius-2xl)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_20px_60px_rgba(5,7,9,0.7)]"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <Badge variant="outline">{item.tag}</Badge>
                {/* Arrow — appears on hover, grey not blue */}
                <span className="text-[var(--color-on-surface-variant)] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                  <ArrowRight />
                </span>
              </div>

              <div>
                <h3 className="headline-sm text-[var(--color-on-surface)] mb-3">{item.title}</h3>
                <p className="body-md text-[var(--color-on-surface-variant)]">{item.description}</p>
              </div>

              {/* Decorative number — editorial touch */}
              <div
                className="absolute bottom-6 right-8 font-bold text-[var(--color-on-surface)] select-none pointer-events-none"
                style={{ fontSize: '5rem', lineHeight: 1, opacity: 0.03, letterSpacing: '-0.05em' }}
              >
                0{featuredWork.items.indexOf(item) + 1}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] p-12 md:p-16 bg-[var(--color-surface-container-low)]">
          {/* Very subtle blue glow — top corner only */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(79, 142, 247, 0.06)' }}
          />
          <div className="relative max-w-2xl">
            <span className="eyebrow block mb-6">Ready to Build?</span>
            <h2 className="headline-lg text-[var(--color-on-surface)] mb-6">
              Have a project that needs to exist?
            </h2>
            <p className="body-lg text-[var(--color-on-surface-variant)] mb-10 max-w-[44ch]">
              We only take on work we believe in. If that&apos;s you, let&apos;s talk.
            </p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight />}>
              Start a Conversation
            </Button>
          </div>
        </div>
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
