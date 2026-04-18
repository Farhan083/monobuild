import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Hub',
  description: 'Get help, find documentation, and connect with the Monobuild team.',
};

const faqs = [
  { q: 'How do I get in touch for a project?', a: 'The best way is via our contact page. Send us a brief description of what you need and we\'ll respond within 24 hours.' },
  { q: 'Do you take on freelance / contract work?', a: 'Yes, selectively. We prioritize projects with clear scope, genuine need, and an engineering-first mindset.' },
  { q: 'Where can I find documentation for your products?', a: 'Product-specific docs are linked from each product\'s page. They\'re kept minimal by design — if something needs a manual, we\'ve probably failed at UX.' },
  { q: 'Is Kilo available yet?', a: 'Kilo is in early development. You can join the waitlist from the Kilo product page and we\'ll reach out when it\'s ready.' },
  { q: 'Are any of your tools open source?', a: 'Some are, some will be. Check the Lab page for projects that have public repositories linked.' },
  { q: 'What\'s the best way to follow Monobuild\'s progress?', a: 'GitHub for code, Twitter/X for updates, and this site for the full picture. No newsletter — your inbox is already too full.' },
];

const resources = [
  { title: 'Products', description: 'Explore what we\'ve built.', href: '/products' },
  { title: 'Experiments Lab', description: 'See what we\'re exploring.', href: '/lab' },
  { title: 'About the Founder', description: 'Who\'s behind Monobuild.', href: '/about' },
  { title: 'Contact', description: 'Start a conversation.', href: '/contact' },
];

export default function SupportPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-6">Support Hub</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-6">How can we help?</h1>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[48ch]">
            Find answers, explore resources, or reach out directly. We keep things simple.
          </p>
        </div>
      </section>

      {/* Quick resources */}
      <section className="section-padding-sm bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="label-md text-[var(--color-on-surface-variant)] mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="group flex flex-col gap-2 p-5 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-all duration-200"
              >
                <span className="title-sm text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">{r.title} →</span>
                <span className="body-sm text-[var(--color-on-surface-variant)]">{r.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-4">FAQ</span>
          <h2 className="headline-md text-[var(--color-on-surface)] mb-12">Common questions.</h2>
          <div className="max-w-3xl flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-6 border-b border-[rgba(70,69,84,0.2)] last:border-0"
              >
                <h3 className="title-md text-[var(--color-on-surface)] mb-3">{faq.q}</h3>
                <p className="body-md text-[var(--color-on-surface-variant)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still stuck */}
      <section className="section-padding bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-10 rounded-[var(--radius-2xl)] bg-[var(--color-surface-container-low)] max-w-2xl">
            <span className="eyebrow block mb-4">Still need help?</span>
            <h2 className="headline-sm text-[var(--color-on-surface)] mb-4">Talk to a human.</h2>
            <p className="body-md text-[var(--color-on-surface-variant)] mb-6">
              No bots, no ticket queues. Send us a message and we&apos;ll reply directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
