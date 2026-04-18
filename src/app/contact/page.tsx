import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { socialLinks, brandConfig } from '@/lib/content/navigation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Monobuild. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20" style={{ background: 'var(--gradient-hero), var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow block mb-6">Get in Touch</span>
          <h1 className="display-md text-[var(--color-on-surface)] mb-6">Let&apos;s build something that matters.</h1>
          <p className="body-lg text-[var(--color-on-surface-variant)] max-w-[48ch]">
            We&apos;re selective about what we take on, which means everything we work on gets our full attention. If it sounds like a fit, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="headline-sm text-[var(--color-on-surface)] mb-8">Send a message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h3 className="label-md text-[var(--color-on-surface-variant)] mb-4">Email directly</h3>
                <a
                  href={`mailto:${brandConfig.email}`}
                  className="title-md text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                >
                  {brandConfig.email}
                </a>
              </div>

              <div>
                <h3 className="label-md text-[var(--color-on-surface-variant)] mb-4">Response time</h3>
                <p className="body-md text-[var(--color-on-surface)]">Within 24 hours, usually faster.</p>
              </div>

              <div>
                <h3 className="label-md text-[var(--color-on-surface-variant)] mb-4">Find us on</h3>
                <div className="flex flex-col gap-2.5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-md text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)]">
                <h3 className="title-sm text-[var(--color-on-surface)] mb-2">What to include</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    'What you\'re building',
                    'Where you\'re stuck or what you need',
                    'Timeline and budget (rough is fine)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 body-sm text-[var(--color-on-surface-variant)]">
                      <span className="text-[var(--color-primary)] mt-0.5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
