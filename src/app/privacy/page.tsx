import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Monobuild handles your data. Short version: we collect the minimum needed, use it only for what we say, and never sell it.',
};

const sections = [
  {
    title: 'What we collect',
    content: `We collect only what is necessary to provide our services. This typically includes:

- Contact information (name, email) when you reach out via our contact form
- Basic usage analytics (page views, referrers) to understand how the site is used — anonymized and aggregated
- Product-specific data you provide when using Kilo or other Monobuild products

We do not collect payment information directly. Any payments are handled by third-party processors (e.g. Stripe) subject to their own privacy policies.`,
  },
  {
    title: 'How we use it',
    content: `Your data is used only for the purposes for which it was collected:

- Contact form submissions: to respond to your inquiry. That's it.
- Analytics: to improve the site experience. We use anonymized data only.
- Product data: to provide the functionality of the product you're using.

We do not use your data for advertising, profiling, or any third-party commercial purposes.`,
  },
  {
    title: 'Data storage & security',
    content: `We take a minimalist approach to data storage — if we don't need it, we don't keep it.

Data is stored on infrastructure hosted within the EU or US, depending on the service. We use industry-standard encryption in transit (TLS) and at rest. Access is restricted to team members on a need-to-know basis.`,
  },
  {
    title: 'Third-party services',
    content: `We use a small number of third-party services to operate this site:

- Vercel: hosting and edge functions
- Google Fonts: typography (subject to Google's privacy policy)
- Analytics provider: anonymized, cookieless analytics

We choose these providers carefully and do not use services that sell your data.`,
  },
  {
    title: 'Cookies',
    content: `We use no tracking cookies. No consent banner needed. Our analytics are cookieless and do not fingerprint users. The only cookies that may be set are technical session cookies required for certain interactive features.`,
  },
  {
    title: 'Your rights',
    content: `You have the right to:

- Request access to the data we hold about you
- Request deletion of your data
- Opt out of any communications

To exercise any of these rights, email us at hello@monobuild.io. We will respond within 5 business days.`,
  },
  {
    title: 'Changes to this policy',
    content: `We may update this policy occasionally. When we do, we'll update the date below. Material changes will be communicated via this page. Continued use of the site constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-6">Legal</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-6">Privacy Policy</h1>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[52ch]">
            The short version: we collect the minimum needed, use it only for what we say, and never sell it.
          </p>
          <p className="mt-4 label-md text-[var(--color-on-surface-variant)] opacity-50">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-0">
            {sections.map((section, i) => (
              <div key={i} className="py-10 border-b border-[rgba(70,69,84,0.15)] last:border-0">
                <h2 className="headline-sm text-[var(--color-on-surface)] mb-6">{section.title}</h2>
                <div className="body-md text-[var(--color-on-surface-variant)] whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)]">
            <h3 className="title-lg text-[var(--color-on-surface)] mb-3">Questions?</h3>
            <p className="body-md text-[var(--color-on-surface-variant)] mb-4">
              If anything in this policy is unclear or you have a question about your data, reach out directly.
            </p>
            <a
              href="mailto:hello@monobuild.io"
              className="body-md text-[var(--color-primary)] hover:opacity-80 transition-opacity"
            >
              hello@monobuild.io
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
