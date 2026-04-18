'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    // Simulate async — replace with real API call (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setState('success');
  };

  const inputBase =
    'w-full px-4 py-3 rounded-[var(--radius-lg)] bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] body-sm placeholder:text-[var(--color-on-surface-variant)] placeholder:opacity-40 outline-none transition-all duration-200 focus:bg-[var(--color-surface-container-highest)] focus:ring-1 focus:ring-[rgba(192,193,255,0.3)]';

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 p-8 rounded-[var(--radius-xl)] bg-[var(--color-surface-container-low)]">
        <div className="w-10 h-10 rounded-full bg-[rgba(110,200,110,0.1)] flex items-center justify-center text-[#6ec86e] text-xl">✓</div>
        <h3 className="title-lg text-[var(--color-on-surface)]">Message sent.</h3>
        <p className="body-md text-[var(--color-on-surface-variant)]">
          Thanks for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="label-md text-[var(--color-on-surface-variant)]">Name</label>
          <input id="contact-name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} className={inputBase} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="label-md text-[var(--color-on-surface-variant)]">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputBase} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-subject" className="label-md text-[var(--color-on-surface-variant)]">What&apos;s this about?</label>
        <select id="contact-subject" name="subject" required value={form.subject} onChange={handleChange} className={inputBase}>
          <option value="" disabled>Select a topic</option>
          <option value="project">New project / collaboration</option>
          <option value="kilo">Kilo waitlist</option>
          <option value="consulting">Technical consulting</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="label-md text-[var(--color-on-surface-variant)]">Message</label>
        <textarea id="contact-message" name="message" required rows={6} placeholder="Tell us what you're working on..." value={form.message} onChange={handleChange} className={`${inputBase} resize-none`} />
      </div>
      <Button type="submit" variant="primary" size="lg" loading={state === 'sending'} className="self-start mt-2">
        Send Message
      </Button>
    </form>
  );
}
